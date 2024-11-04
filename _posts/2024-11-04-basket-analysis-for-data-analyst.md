---
layout: post
title: Implementing Basket Analysis in Power BI and SQL - Association rule
subtitle: Basket Analysis for Data analyst
categories: data
excerpt_image: "assets/images/posts/heidi-fin-2TLREZi7BUg-unsplash.jpg"

tags: [basket-analysis, excel, templates]
---

![banner](/assets/images/posts/heidi-fin-2TLREZi7BUg-unsplash.jpg)

Images: Heidi Fin (unsplash.com)

# Power BI (DAX) Implementation

## Goal

This post is share my experience of implementing basket analysis in Power BI and sql. At the end of this post, I will attach links for my Power BI file. Please note this power BI is receiving updates as I write new posts. 

You can find the Power BI file here, some screeshots are provided in this post

Attachment: [241103_AdventureWorks_na.pbix][1]


## Key Idea

Basket analysis using Association Rule, involves understanding purchase patterns over time to see how products relate to each other within a customer’s buying journey. In this approach, each customer is viewed as a "basket," meaning we analyze product relationships based on all items they’ve bought, across different orders. The purpose is to find patterns in what customers purchase together, over time, rather than in a single transaction.

Key metrics, like *support*, *confidence*, and *lift*, are used to understand these product relationships:

- **Support**: The percentage of total customers who bought both items. It gives a sense of the prevalence of a combination in the overall population.
- **Confidence**: The likelihood that a customer who bought one product also bought another.
- **Lift**: The strength of the association between two products. A lift greater than 1 implies a meaningful association that could predict future purchases.

For example, if "Computers" and "Cell phones" frequently appear in a customer’s purchase history, the analysis could reveal that customers who buy "Cell phones" have a high likelihood of also purchasing "Computers," helping companies understand customer preferences and potentially guiding personalized marketing strategies.

### Step 1: Cartesian  product of Product with itself 

Create a Cartesian  product of Product with itself(And Product) on a calculated table and calculate the common customers of each combination

```jsx
DEFINE MEASURE [# Customers Both (Internal)] = 

 VAR CustomersWithAndProducts =
    CALCULATETABLE (
        DISTINCT ( Sales[CustomerKey] ),
        REMOVEFILTERS ( 'Product' ),
        REMOVEFILTERS ( Sales[ProductKey] ),
        USERELATIONSHIP ( Sales[ProductKey], 'And Product'[And ProductKey] )
    )
VAR Result =
    CALCULATE ( [# Customers], KEEPFILTERS ( CustomersWithAndProducts ) )
RETURN
    Result
------------------------------------------
EVALUATE
RawProductsCustomers = 
FILTER (
    SUMMARIZECOLUMNS (
        'Sales'[ProductKey],
        'And Product'[And ProductKey],
        "Customers", [# Customers Both (Internal)]
    ),
    NOT ISBLANK ( [Customers] ) && 'And Product'[And ProductKey] <> 'Sales'[ProductKey]
)
```

### Step 2: Customer Support. 

Customer Support has a difficult name, but the idea is “what’s ratio of number of common customers of each combination and total number of customers.”

```jsx
DEFINE MEASURE [# Customers Both] = 
VAR ExistingAndProductKey =
    CALCULATETABLE (
        DISTINCT ( RawProductsCustomers[And ProductKey] ),
        TREATAS (
            DISTINCT ( 'And Product'[And ProductKey] ),
            RawProductsCustomers[And ProductKey]
        )
    )
VAR FilterAndProducts =
    TREATAS (
        EXCEPT (
            ExistingAndProductKey,
            DISTINCT ( 'Product'[ProductKey] )
        ),
        Sales[ProductKey]
    )
VAR CustomersWithAndProducts =
    CALCULATETABLE (
        SUMMARIZE ( Sales, Sales[CustomerKey] ),
        REMOVEFILTERS ( 'Product' ),
        FilterAndProducts
    )
VAR Result =
    CALCULATE (
        [# Customers],
        KEEPFILTERS ( CustomersWithAndProducts )
    )
RETURN
    Result
----------------------------------------------------
DEFINE MEASURE [# Customers Total] **=** 
CALCULATE ( 
    ****[# Customers], 
    ****REMOVEFILTERS ( 'Product' ) 
**)**
    
----------------------------------------------------    
DEFINE MEASURE [% Customers Support] = 
DIVIDE ( [# Customers Both], [# Customers Total] )
    

```

Wait, why this common customer is so mess here. Let’s dive into the measure. The core logic here is to first, get the number of customers in the first list of Products, which is a standard measure [# Basket]. Then, you want to use a list of customers for And Product  as a filter to filter this measure. This is called Table Filter technique in DAX, relatively advanced concept in DAX. 

Then the question becomes How to do you get this list of customers for And Product? You first use TREATAS to connect the sales table and And Product table,, once they are connected, you can summarize this sales table (with data lineage) by customers. This technique is called Data Lineage. is a basic concept, however easy to trip over even for advanced DAX users. 

### Step 3: Customer Lift. 

Customer Lift is nothing complex but a comparison of two ratios. Don’t get fooled by its sophisticated name. This measure is comparing the first ratio we calculated above to a second ratio, “What is the ratio of customers for **And Product** to total number of customers.

``` 
$
$\frac{Common customers /total customers}{Product B customers / total customers}$
$
```

**This is saying how much more likely customers are to purchase a product (Product) when they have already bought another related product (And Product)** 

```jsx
Customers Lift = 
DIVIDE (
    [% Customers Confidence],
    DIVIDE (
        [# Customers And],
        [# Customers Total]
    )
)
```

### **Attribution**

This pattern is included in the book [**DAX Patterns, Second Edition**](https://www.daxpatterns.com/books/dax-patterns-second-edition/). by [**Alberto Ferrari](http://www.sqlbi.com/articles/author/alberto-ferrari/) and [Marco Russo](http://www.sqlbi.com/articles/author/marco-russo/).  I highly recommend their content. It’s excellent work. They are dedicated DAX teachers with comprehensive DAX knowledge. Their work is systematic and excellent.**

# Comment on the Power BI Implementation

To be fully honest, DAX is not the best language to implement this analysis. First reason is that DAX's advantage in Context Transitions complicated the code from both writer and report readers' point of view.  Secondly, it is highly likely the data becomes so large that the report runs slow. The Power BI advantages in producing dynamic computation as user consumes the report doesn't really shine in this situation.

Instead, I find SQL implemtation is really easy to understand. 

# SQL Implementation

This is based on schema of SAP Business One with SQL version v10.0
The SalesAnalysis is a replicated view of the SAP stock sales anaysis report. 

```sql

CREATE PROCEDURE [dbo].[BasketAnalysis]

@CardCode NVARCHAR(50) = NULL,
@LastNMonth INT = 12
	 
AS
BEGIN

DECLARE @AssoStartDate DATE = DATEFROMPARTS ( YEAR ( GETDATE()) -2, 1,1) 
DECLARE @MinRepeatOrd INT = 2 -- Minimal repeated orders that a customer has to place for this item to be considered a regular item of a customer



; WITH AssoCardCat AS (
    SELECT 
    T80.ItmsGrpNam, 
    T80.CardCode, 
    CAST ( COUNT(T80.CardCode) OVER (PARTITION BY T80.ItmsGrpNam ) AS DECIMAL(10,5) )[CatCustomers]
    FROM 
    (
        SELECT 
        T99.CardCode, 
        T99.ItmsGrpNam,
        COUNT ( DISTINCT T99.DocNum ) [OrdCount],
        COUNT ( DISTINCT T99.itemCode) [ActiveLines]
        FROM SalesAnalysis T99

        WHERE
        T99.DocDate >= @AssoStartDate AND
        T99.Sales > 0 AND
        T99.ItmsGrpCod NOT IN (158, 163, 229) AND
        T99.ProjectCod IN ('WCT', 'CRE', 'EXP')

        GROUP BY 
        T99.CardCode, 
        T99.ItmsGrpNam
    ) T80 
    WHERE T80.OrdCount > @MinRepeatOrd
) 
, AssoCustomerCat AS 
(
	SELECT *
	FROM 
	(
		SELECT
		T99.*,
		Prob_A		=  T99.CustomersforCatA/ T99.TotalCustomers , 
		Prob_B		= T99.CustomersforCatB / T99.TotalCustomers,
		Support		=	T99.CommonCustomers / T99.TotalCustomers,

		Confidence	=	T99.CommonCustomers / T99.CustomersforCatA , -- Out of total A customers, how many are into B

		Lift		=  (T99.CommonCustomers / T99.TotalCustomers )  / 
					(( T99.CustomersforCatA/ T99.TotalCustomers)  * (  T99.CustomersforCatB / T99.TotalCustomers ) ), 
		LiftRankInCat   = ROW_NUMBER() OVER 
		(
		  PARTITION BY T99.CategoryA
		  ORDER BY (T99.CommonCustomers / T99.TotalCustomers )  / 
					(( T99.CustomersforCatA/ T99.TotalCustomers)  * (  T99.CustomersforCatB / T99.TotalCustomers ) ) DESC  
		)
	
		FROM 
		(
			SELECT 
			T0.ItmsGrpNam [CategoryA], 
			T0.CatCustomers [CustomersforCatA], 
			T1.ItmsGrpNam [CategoryB], 
			T1.CatCustomers [CustomersforCatB],
			CAST ( COUNT ( T0.CardCode ) AS DECIMAL (10,5)) [CommonCustomers], 
			TotalCustomers = 
			(
					SELECT COUNT( DISTINCT T0.CardCode) 
					FROM SalesAnalysis T0 
					WHERE
					T0.DocDate >= @AssoStartDate AND
					T0.Sales > 0 AND
					T0.ItmsGrpCod NOT IN (158, 163, 229) AND
					T0.ProjectCod IN ('WCT', 'CRE', 'EXP')
			)

			FROM AssoCardCat T0 
			JOIN AssoCardCat T1 ON T1.CardCode = T0.CardCode AND T1.ItmsGrpNam < T0.ItmsGrpNam
			GROUP BY 
			T0.ItmsGrpNam, T1.ItmsGrpNam, 
			T0.CatCustomers, T1.CatCustomers
		) T99 WHERE T99.CustomersforCatA != 0 AND T99.CustomersforCatB != 0
	) T100 WHERE T100.Lift > 1 
), 
CustomerSpecific AS 
(
	SELECT 
	T100.* , 
	SUM(T100.[CategorySpend]) OVER ()[TotalSpend], 
	T100.[CategorySpend]  / SUM(T100.[CategorySpend]) OVER () [SpendPct], 
	SpendRank = 
	ROW_NUMBER () OVER (ORDER BY T100.[CategorySpend] DESC ) 
	FROM 
	(
		SELECT 
		SA.CardCode, 
		SA.CardName, 
		SA.ItmsGrpCod, 
		SA.ItmsGrpNam, 
		SUM(SA.Sales) [CategorySpend] 

		FROM SalesAnalysis SA 
		WHERE SA.CardCode = @CardCode
		AND  
		( 
			SA.DocDate BETWEEN EOMONTH ( GETDATE(), -1 * @LastNMonth -1 ) AND GETDATE()
		) 
		AND SA.ItmsGrpCod NOT IN ( 229, 158, 163 ) 
		GROUP BY SA.CardCode, 
		SA.CardName, 
		SA.ItmsGrpCod, 
		SA.ItmsGrpNam
	) T100 
) 
, FullReport AS 
(
	SELECT 
	T0.*,
	T1.CustomersforCatA [CustomersforCat], 
	T1.CategoryB [RecommendCat], 
	T1.CustomersforCatB [CustommersInRecommCat], 
	T1.TotalCustomers, 
	T1.Prob_A, 
	T1.Prob_B, 
	T1.Support,
	T1.Confidence, 
	T1.Lift 
	--RecommLine = 
	--T1.CategoryB + '(Confi: ' + CONVERT (NVARCHAR(10),  ROUND ( T1.Confidence * 100  ,0 )  ) 
	--+  ' - Lift: ' + CONVERT (NVARCHAR(10),  ROUND ( T1.Lift * 100  ,0 )  ) + ')'
	FROM CustomerSpecific T0 
	LEFT JOIN AssoCustomerCat T1 ON T1.CategoryA = T0.ItmsGrpNam 
	AND T1.CategoryB NOT IN 
	(
		SELECT 
		T99.ItmsGrpNam
		FROM CustomerSpecific T99
	) 
), 
Overview AS 
(
	SELECT 
	T0.CardCode, 
	T0.CardName,
	ROW_NUMBER() OVER (ORDER BY MAX( T0.Lift) DESC) [LiftRank],
	ROW_NUMBER() OVER (ORDER BY MAX ( T0.Confidence) DESC ) [ConfiRank], 
	T0.RecommendCat, 
	T0.CustommersInRecommCat,
	COUNT( T0.ItmsGrpNam ) BaseCount, 
	-- STRING_AGG ( RecommLine, ',' ) BaseReason, 
	MAX( T0.Lift) [MaxLift],
	MAX(T0.Confidence) [MaxConfi]
	FROM FullReport T0
	WHERE T0.RecommendCat IS NOT NULL
	GROUP BY T0.RecommendCat,
	T0.CardCode, 
	T0.CardName,
	T0.CustommersInRecommCat
)
SELECT * FROM Overview
END
```

## Vesion for Sales Mangers

If all this is too complex for you and you are only interested in using this technique to analyst your own data and get insights from that. you can follow another post of mine. 

[Basket Analysis for Sales Managers]({% post_url 2024-11-04-basket-analysis-for-sales-managers %})

[1]:{{ site.url }}/assets/pbix/241103_AdventureWorks_na.pbix

---
layout: post
title: Calculating Returns
subtitle: Do you know what does APR on your credit mean?
categories: finance
excerpt_image: "assets/images/posts/kenny-eliason-maJDOJSmMoo-unsplash.jpg"
banner: "assets/images/posts/kenny-eliason-maJDOJSmMoo-unsplash.jpg"
tags: [book, return, fixed-income]
---

Images: Jacek Dylag (unsplash.com)

# Motivation

This post is mainly about a few return concepts common in Fixed Income.  This post is driven by a LinkedIn post that I saw the other day, people are debating about return, yield and bond prices. I think it maybe an interesting topic to discuss in my blog. The target audience could be 

- analyst, junior or senior, feeling necessarily to calibrate or refresh this knowledge.
- general public who are interested in knowing what does their bank mean by APR for their credit card.

I hope you enjoy this post.

# Measuring Return

## Holding Period Return  (HPR)

### Zero coupon bonds, held to maturity

There is a fixed income (bond) product, If we paid X today, and we will receive 100 by end of the period (6 months), when the bond matures, Then we say. 

- The holding period of the bond is P (6 Months)
- The holding period return is **(100 - X) / X**
- The Yield-to-maturity is **(100 - X) / X**

Right, if the holding period is now 18 months, the formula doesn’t change, because in holding period return, as long as the bond doesn’t pay interests during the term, you can ignore the compounding behaviour. 

### Interest bearing bonds, held to maturity

There is a bond, The face value of the bond is 100, the maturity of the bond is 12 months. there will be interest payment every 6 months. the coupon rate is 4%. the bond is trading at 101. what is the holding period return if we hold the bond to its maturity. 

In this case, you need to add the income (interest payment) into your calculation. the formula is 

Holding Period Return = ( Price change + Income ) / Initial Price 

- The price change in this case is 101 - 100 = 1.
- The income is twice 4%/2 X 100. that is still 4. (because every time it pays 2, and in a year, it pays 4 in total)
- The holding period return is 5/101 = 4.95%

With the formula above, if not held to maturity, whatever price the bond is sold off will determine the ending price and how many times interests payment you will collect will determine the income. and then you can calculate the Holding Period Return competently. 

So how does the market interest rate come into our play? Well, the price you are paying today for the bond is 1 above the face value 100 for 12 months, that means the market interest rate must be slightly lower than 4%. because of that, in order to get 4% return, intuitively, you will have to pay slightly higher than 100 to make that even. The same intuition can be applied if you are selling this bond before its maturity.  

However, by its maturity, the bond price will converge to its face value. Because selling this bond to any other party at maturity, it will always be just at its face value, because whoever hold the bond will receive original issuers payment of its face value (if there is no default of course).

You might hear people use the term duration. for zero coupon bond the duration = its maturity.  for interest bearing, if people use it interchangeably, correct them. The duration will be shorter than its maturity. 

## Effective Annual Rate (EAR or CAGR)

Effective Annual Rate is the most frequent used return concept in investment world. When people mention CAGR, it also refers to this concept.  .The concept is defined as  **percentage increase in funds per year.**

### Concept about compounding

When the product is within one year (we call this money market),  the convention is to not calculate the compounding effects, therefore not to use the Effective Annual Return, instead we use a new concept Annual Percentage return, which will come shortly. For now, just assume the compounding effect also exit for products within one year.

 A 12 month coupon bond calculates coupon every six month, however it doesn’t pay until maturity, that means it will roll the first interest payment in to the sum and use that to calculate my second interest income.  

Principle * ( 1 + (5%/2)) ^ 2

But if the product is 10 years long, no coupon payment before maturity, it explicitly says interest compound every six month ( despite in reality no such strange product exists), then your return is 

Principle * ( 1 + 5% / 2) ^ ( 10 * 2)  

But if the product is 10 years long, no coupon payment before maturity, it explicitly says interest compound every three month, then your return is 

Principle * ( 1 + 5% / 4) ^ ( 10 * 4)  

f the product is 10 years long, no coupon payment before maturity, it explicitly says interest compounding is calculated continously, then your return is 

Principle *  e ^ (5% * 10)

### Zero coupon bond, held to maturity

There is a zero coupon bond with a 10 years maturity (or duration). the face value is 100, the bond is currently trading at 75. what is the Effective Annual Rate? 

- The formula is EAR = ( end price / initial price ) ^ ( 1/N ) -1
- This is how you would calculate CAGR, Compounding Annual Growth Rate
- to understand this formula, the easiest way is that you read it backwards, assuming you already know the EAR is r, and you also know the current price is 75, you can calculate the future value = 75 * (1 + r) ^ (N). now you reverse the calculation by the math principle.

We don’t talk about the case for interest bearing bonds in Effective Annual Rate, because once you have intermediary cash flow, it becomes a different concept IRR. internal rate of return. 

## Annual Percentage Rate (APR)

Effective annual rates explicitly account for compound interest. In contrast, rates on short
term investments (by convention, with holding periods less than a year), are in practice
often annualized using simple interest that ignores compounding. These are called annual
percentage rates, or APRs. There is a formula to convert between the two. 

1 + EAR = ( 1 + APR / n) ^ n

A **credit card’s APR** (annual percentage rate) is the total cost of its interest rate (e.g. 20%) plus the **fees** every cardholder pays as standard, such as the annual **fee** – it’s the cost of borrowing money over a year. All other **fees** and charges, such as for missed repayments and cash withdrawals are excluded from the **APR**.

To make it simple, let’s assume you don’t pay the card fee. Suppose you must pay 1.5% interest per month on your outstanding credit card balance. The APR would be reported as 1.5% × 12 = 18%, but the effective annual rate is higher, 19.56%, because 1.015^12 − 1 = 0.1956. Until you pay off your outstanding balance, it will increase each month by the multiple 1.015, so after 12 months, the balance will increase by 1.01512. This is why we call the EAR an effective rate. However the banks are only required to market APR. 

# Closing thoughts

Return calculation is one of the basic building block of skillsets for people who choose finance as their major or career. It is confusing at first, but after a few repetitions, it will become clearer. 

If you are serious about the topic, I recommend you follow the first five chapters of the book 

Investments by Zvi Bodie, Alex Kane, Alan Marcus, published by McGraw Hill. 

Amazon Link [Investments: Amazon.co.uk: Bodie, Zvi, Kane, Alex, Marcus, Alan: 9780077861674: Books](https://www.amazon.co.uk/Investments-Zvi-Bodie/dp/0077861671)

Google Link [EBOOK: Investments - Global edition - Zvi Bodie, Alex Kane, Alan Marcus - Google Books](https://books.google.co.uk/books/about/EBOOK_Investments_Global_edition.html?id=BMsvEAAAQBAJ&redir_esc=y)

This is one of the top finance books available. The later chapters of this book dives into many advanced topics in finance such as Modern Portfolio Theory and Equilibrium models in the market, Efficiency Market Hypotheses, these contents are recognised with Nobel Prizes. The book covers equity, fixed income and derivatives, depending on which version you are reading. In my own academic journey pursuing Finance, I’ve spent countless days and nights chewing over some of the chapters in this book again and again. Now looking back, it still such a great book that definitely is worthy of spending time with.

---
layout: post
title:  Hacking Debt schedule with Lambda in Excel
subtitle: One formula to quickly craft debt schedule with multiple features
categories: finance
excerpt_image: assets/images/abstract-shapes/creatvise-NoTX005dHhs-unsplash.jpg
banner: : assets/images/abstract-shapes/creatvise-NoTX005dHhs-unsplash.jpg
tags: [template, return, portfolio, finance, diversification]
---

How to use one single formula to hack Debt schedule with CashSweep



Create a lambda function as below. 


## Syntax
DebtSchedule(
  [OpenBalance] = Debt Open Balance
  [CashBalance] = Cash Open Balance
  [CFArray] = Cashflow Array
  [MandatoryAmort] = Mandatory Amortisation
  [CashSweep] = % of available cash after mandatory amortisation allocated to optional amortisation
  [PIKInterest] = PIK Interest, applied to the opening balance instead of the average balance
  [CashInterest] = Cash interest applied to the average balance
) 

# Activate Advanced Formula Environment
Insert the following in your advanced formula environment. 
```typescript

DebtSchedule = LAMBDA( 
    [OpenBalance], 
    [CashBalance],
    [CFArray],
    [MandatoryAmort], 
    [CashSweep],
    [PIKRate], 
    [CashRate], 
    LET(
         _Title, TOCOL({
                    "Debt Opening",
                    "Mandatory Amortisation",
                    "Optional Amortisation", 
                    "Cash Interest",
                    "PIK Interest", 
                    "Total Interest", 
                    "Debt Closing",
                    "Cash Opening", 
                    "Cash Closing"
                }),
        _Process, 
            REDUCE(
                0, SEQUENCE( 1, COUNTA( CFArray )),
                LAMBDA( 
                    Accumulator, n , 
                    LET(
                        // Individual values of arrays
                        _Opening,           IF( n=1, OpenBalance, INDEX( CHOOSECOLS( Accumulator, -1 ), 7)), 
                        _CashOpening,       IF( n=1, CashBalance, INDEX( CHOOSECOLS( Accumulator, -1 ), 9)),
                        _CFAvail,           INDEX( CFArray, n ),
                        
                        // Calculations
                        _MandatoryAmort,    - MIN( MandatoryAmort, _Opening) ,
                        _OptionalAmort,     - MIN( _Opening +_MandatoryAmort, _CashOpening + _CFAvail+_MandatoryAmort ) * CashSweep,
                        _PIKInterest,       _Opening * PIKRate,  
                        _Closing,           _Opening + _MandatoryAmort + _OptionalAmort + _PIKInterest,
                        _AvgDebtBalance,     AVERAGE(_Closing, _Opening),
                        
                        _CashInterest,      _AvgDebtBalance * CashRate, 
                        _TotalInterest,     _PIKInterest + _CashInterest, 
                        _CashClosing,       _CashOpening + _CFAvail + _MandatoryAmort + _OptionalAmort -_CashInterest ,

                        // Formatting the result
                    
                        _Stack,         VSTACK(
                                            _Opening, 
                                            _MandatoryAmort,
                                            _OptionalAmort, 
                                            _CashInterest, 
                                            _PIKInterest,
                                            _TotalInterest, 
                                            _Closing,
                                            
                                            _CashOpening,
                                            _CashClosing
                                        ),
                    // Result
                        Result,         IF(
                                            n = 1, 
                                            _Stack, 
                                            HStACK( 
                                                Accumulator, 
                                                _Stack
                                            )
                                        ),
                        Result
                    )
                )
    )   , 
    HSTACK( _Title, _Process)
))
```

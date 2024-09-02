---
id: fees
title: Fees
sidebar_label: Fees
slug: fees
---

Cryptex finance is built upon the Perennial Finance. An exchange fee is charged by perennial which varies based on how much impact the trade has on the market.
On top of this cryptex charges a small interface fee for helping users interact with the smart contracts. 

### Perennial Fees

Fees are charged whenever an account's position changes. There are three fees that may be charged depending on what the position update is doing.

- Settlement Fee
The settlement fee is charged anytime the position changes and it is used to cover the oracle keeper fee.


- Taker Fee
Charged when a long or short position is opened or closed – there are three components to the taker fee: the notional size of the order, the change in skew that it causes the market, and the impact that it causes the market.
    
    taker fee = notional * (takerFee + Δskew * takerSkewFee +  impact * takerImpactFee)
- Maker Fee
Similarly the maker fee is charged when a maker position is opened or closed – There are two components to the maker fee: the notional size of the order and the change in utilization that it causes the market.

    maker fee = notional * (makerFee + Δutilization * makerImpactFee)


### Cryptex Interface Fee

Cryptex charges a very small fee of 2 bps for helping users interact with perennials smart contracts.

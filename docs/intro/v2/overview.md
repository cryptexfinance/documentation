---
id: overview
title: Overview
sidebar_label: Overview
slug: /overview
---

### What is Cryptex Finance v2?

Cryptex Finance V2 is a DeFi protocol that makes crypto native markets tradable. The product
is built on top [perennial](https://docs.perennial.finance/) using chainlink oracles.
Cryptex plans to build various trading strategies around perennial's perpetual futures.  
Since the protocol is built on top of perennial, the market is two-sided with exposure to the underlying price oracle.

### How does it work?

The product is built on top of perennial which is a peer-to-pool derivatives AMM that offers to take the other side of any taker’s position directly at the oracle price, in exchange for a funding rate that is calculated based on the utilization of the liquidity pool.

The traders(takers) deposit collateral to get leveraged exposure to price feeds (long, short). Liquidity providers(makers) pool capital in the protocol to earn fees for taking the other side of Taker trades.  Trades are continuously settled where the losing side of the trade pays the winning side.

Liquidity providers also get the option to pool funds through vaults. Vaults have strategies baked in for hedging maker positions. 

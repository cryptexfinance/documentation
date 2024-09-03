---
id: overview
title: Overview
sidebar_label: Overview
slug: overview
---

### What is Decentralized Perpetuals v1?
Perpetual Futures v1 is a DeFi-native derivatives primitive that enables the creation of two-sided markets, allowing traders to gain exposure to underlying price feeds in a capital-efficient manner. This innovative protocol is live on both Arbitrum and Ethereum Mainnet.

### How Does It Work?
Perpetual Futures v1 operates as a peer-to-pool derivatives Automated Market Maker (AMM). It continuously offers to take the opposite side of any Taker’s position at the oracle price, in exchange for a funding rate that varies based on the liquidity pool's utilization, similar to mechanisms used by protocols like Compound and Aave.

Takers (Traders): Deposit collateral to gain leveraged exposure to various price feeds, whether for long, short, or exotic positions.

Makers (Liquidity Providers): Contribute capital to the protocol, earning fees by taking the other side of Taker trades.

The protocol ensures continuous settlement between Liquidity Providers (LPs) and traders, where the losing side of the trade compensates the winning side, ensuring fair and transparent outcomes for all participants.

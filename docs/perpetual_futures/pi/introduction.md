---
id: introduction
title: Introduction to Cryptex Finance π
sidebar_label: Introduction to version π
slug: intro
---

Cryptex Finance version π is an improvement over the previous [version v1](../v1/intro). 
Cryptex Finance π is built on top of perennial v1 and, it comes with several features.
Version π uses low latency on-demand oracles, more capital efficient and provides up to 100x leverage.
The low latency oracles are built by Pyth network.

### Comparison with V1

| V1                                                                                              | π                                                                                                      |
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| Unidirectional markets, so 2 pools per market (eg. Long-ETH & Short-ETH)                        | Bidirectional markets, so 1 pool per market (ETH)                                                      |
 | Takers are matched directly with LPs. LPs take opposite side of all taker trades in that market | Takers are first matched with other takers (longs matched with shorts), then with LPs to fill the gap. |
| Chainlink Core oracles                                                                          | low-latency oracles(Pyth and Chainlink are supported at the moment)                                    |
| Funding rate is determined by utilization curve                                                 | Funding rate is determined by PID mechanism.                                                           |
| Fees are charged as a percentage of the volume                                                  | Fees are variable and are propotional to market impact of the trade.                                   |
| Supported only Market orders.                                                                   | Supports different order types such as stop loss, market, limit, take profit, etc.                     |


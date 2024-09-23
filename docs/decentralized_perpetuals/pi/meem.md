---
id: meem
title: MEEM Perpetual Futures
sidebar_label: MEEM Perp
slug: /meem-perp
---
import useBaseUrl from "@docusaurus/useBaseUrl";


The MEEM Perp is a perpetual futures contract based on an index composed of 5 meme tokens: DOGE, PEPE, FLOKI, SHIB, and ETH. Each token in the index is equally weighted, with a weight of 20%.

#### Construction

The closing prices of each token on 07/02/2024 were recorded as the mark prices. The index price is calculated using the following formula:
```
    MEEM Index Price = 0.2 * (Current DOGE Price / DOGE Mark Price) + 0.2 * (Current SHIB Price / SHIB Mark Price) + 0.2 * (Current PEPE Price / PEPE Mark Price) + 0.2 * (Current FLOKI Price / FLOKI Mark Price) + 0.2 * (Current ETH Price / ETH Mark Price) 
```

### Architecture

<img alt="MEEM Architecture" src={useBaseUrl("img/meem_architecture.png")} />

- The MEEM Index is powered by Chainlink low latency data stream feeds.
- Cryptex bots fetch prices from multiple Chainlink data stream feeds every second.
- Prices are then aggregated into a single price using the above formula.
- Prices are checked for outliers and written to a database if the checks pass.
- The data is signed by a EOA owned by Cryptex before writing to database.
- The Perennial bots request feed data and then write the prices onchain.

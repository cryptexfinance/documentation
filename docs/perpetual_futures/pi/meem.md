---
id: meem
title: Meem Perpetual Futures
sidebar_label: Meem Perp
slug: /meem-perp
---
import useBaseUrl from "@docusaurus/useBaseUrl";

**Note: MEEM Perp is not yet Live**

The MEEM Perp is a perpetual futures contract based on an index composed of 5 meme tokens: DOGE, PEPE, FLOKI, SHIB, and ETH. Each token in the index is equally weighted, with a weight of 20%.

#### Construction

The closing prices of each token on 07/02/2024 were recorded as the mark prices. The index price is calculated using the following formula:
```
    MEEM Index Price = 0.2 * (Current DOGE Price / DOGE Mark Price) + 0.2 * (Current SHIB Price / SHIB Mark Price) + 0.2 * (Current PEPE Price / PEPE Mark Price) + 0.2 * (Current FLOKI Price / DOGE Mark Price) + 0.2 * (Current FLOKI Price / DOGE ETH Price) 
```

### Architecture

<img alt="MEEM Architecture" src={useBaseUrl("img/meem_architecture.png")} />

- The meem is built using chainlinks data streams feeds. 
- Cryptex's bots fetch prices from multiple data streams feeds every second.
- Prices are then aggregated into a single price using the above formula.
- Prices are check for outliers and written to a database if the checks pass
- The data is signed by a EOA owned by cryptex before writing to database.
- The perennial bots request feed data and then write the prices onchain.

#### Construction

The closing prices of each of the components on 07/02/2024 were recorded as the mark prices. 
The index price is calculated in the following way:
```
    MEEM Index Price = 0.2 * (Current DOGE Price / DOGE Mark Price) + 0.2 * (Current SHIB Price / SHIB Mark Price) + 0.2 * (Current PEPE Price / PEPE Mark Price) + 0.2 * (Current FLOKI Price / DOGE Mark Price) + 0.2 * (Current FLOKI Price / DOGE ETH Price) 
```

### Architecture

<img alt="MEEM Architecture" src={useBaseUrl("img/meem_architecture.png")} />

- The MEEM index is constructed using Chainlink’s data stream feeds.
- Cryptex's bots fetch prices from multiple data streams every second.
- Prices are aggregated into a single index price using the formula above.
- The data undergoes outlier detection, and if valid, it is written to a database.
- The data is signed by an externally owned account (EOA) controlled by Cryptex before being stored.
- Perennial bots request the feed data and write the prices on-chain.
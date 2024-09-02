---
id: overview
title: Overview
sidebar_label: Overview
slug: intro
---

One of the ways Makers can supply liquidity to markets in Perennial is through Vaults. These Vaults simplify the complexities of Perennial's core protocol, offering a more seamless experience for liquidity providers.

At their core, Vaults consolidate collateral and open Maker positions across different markets. When there is an imbalance between long and short positions, Vaults take on delta (directional) exposure. In return, they receive interest and funding from the markets they support.

Liquidity Providers (LPs) still have the option to directly participate in markets, allowing them to pick and choose specific markets and customize their position parameters. However, Vaults offer an alternative that can be tailored to supply liquidity to either one or multiple markets, depending on the configuration set by the Vault owner. The exact allocation of liquidity across markets can also be adjusted, providing flexibility and control.

This design enables several unique benefits within the Perennial ecosystem:

### Bootstrapping Markets
One of the significant challenges in launching new derivatives markets is the cold start problem—where a lack of liquidity leads to low trading volume, which in turn perpetuates the liquidity shortfall. Vaults address this issue by allowing Vault owners to provision excess liquidity from established markets to nascent ones, effectively bootstrapping new markets and fostering growth.

### Funding Rate
Vaults also allow liquidity providers to receive funding from multiple markets simultaneously. This approach simplifies the liquidity provisioning process for individual providers and can offer more consistent returns by diversifying across various markets rather than relying on a single one.

### Strategies
Vaults can employ various hedging strategies to optimize liquidity provision. Currently, the balanced Vault strategy involves taking equal-sized positions in both long and short markets. In the future, Cryptex plans to introduce additional Vaults with different hedging strategies, further enhancing flexibility and opportunities for liquidity providers.

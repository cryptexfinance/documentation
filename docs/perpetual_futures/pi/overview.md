---
id: overview
title: Overview
sidebar_label: Overview
slug: overview
---

### What is Perpetual Futures π?
Perpetual Futures π represents an advancement over Perps v1, introducing fast on-demand oracles to enhance market efficiency and responsiveness.

### How Does It Work?
A market is a two-sided structure involving Makers and Takers that trades synthetic exposure derived from a price oracle, governed by a specific payoff function. Each market operates independently with isolated risk, providing flexibility and security.

A market in Perennial is defined by the following key components:

- Oracle: The core of each market, oracles supply one or more prices that feed into the payoff function. The accuracy and speed of these oracles are critical to market performance.

- Payoff Function: This function dictates how the smart contracts will divide funds between the two sides of the market—long and short—when the market settles.

- Fee Structure: Price impact and trading fees are applied whenever an account’s position changes, ensuring fair compensation for liquidity providers.

- Funding Rate: This dynamic rate shifts between longs and shorts, managed by a P-controller to balance market skew.

- Interest Rate: To incentivize the Maker side, especially when long and short positions are relatively balanced, markets may impose an interest rate.

- Leverage: Both Makers and Takers can use leverage to trade in a more capital-efficient manner, amplifying their market positions.

- Liquidation: Accounts can be liquidated if their collateral falls below the maintenance requirement, ensuring the market remains solvent.

Makers can provide liquidity to the market through:

- Vaults: Containing USD collateral, these are used to back Taker positions, offering a straightforward method for liquidity provision.

- Advanced LPs: These are liquidity providers who have leveraged their collateral to a specific market, optimizing their capital deployment.

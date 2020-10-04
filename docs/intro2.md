---
id: intro2
title: What is TCAP?
sidebar_label: What is TCAP?
slug: /tcap
---

 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossorigin="anonymous" />

TCAP is the World's First Total Cryptocurrency Market Capitalization created by [Cryptex Finance](https://cryptex.finance). Like a conventional index fund, TCAP gives holders a real-time price exposure to the total cryptocurrency market cap. TCAP is a 150% fully backed, fully collateralized asset that truly, accurately and safely represents the total market capitalization of the entire crypto complex.

The TCAP smart contract is powered by [Chainlink](https://chain.link/) oracles that blend total current real time market cap crypto data from seven of the top crypto data providers in the world and brings that data on chain. If the Total Market Cap is resting at 350 billion dollars. Then, just like the S&P 500 would, we add a divisor of 10 billion to that number. Based on this math, the calculation for TCAP would be as follows:

$c$ = \$350,000,000,000

$d$ = 10,000,000,000

$r$ = $\frac{c}{d}$ = \$35.00

Where $c$ is the total cryptocurrency market cap, $d$ is the divisor and $r$ is the TCAP token price.

This real time total market cap data is then hosted on chain via our [TCAP smart contract](#TODO). Each TCAP is subsequently minted only upon being collateralized by an underlying asset, such as ETH, WBTC or DAI. What the user receives in return is a newly minted \$35 asset nominalized token that moves to the penny in real time to the underlying total market cap metric that it tracks. This new asset is algorithmically collateralized by the corresponding amount of ETH/ WBTC or DAI needed to properly 100% back each TCAP and boom, you now have price exposure to the entire cryptocurrency sector in a single solution. (note: this section needs illustrations)

## Components

Total Market Cap Price Oracle Contract. The smart contract that will store the actualized price feed of the total market value provided by Nomics Private Key. The TCAP proxy contract will use these values.

ETH/USD Price Oracle Contract. Minting TCAP.X requires a collateralization of ETH, this oracle provides a feed for the current price of ETH/USD. Right now Chainlink Oracle is implemented.

ERC20 Token Contract. ERC20 Compliant contract that will be in charge of handling the TCAP.X token logic.

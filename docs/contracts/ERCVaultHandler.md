---
id: erc20vaulthandler
title: ERC20VaultHandler
sidebar_label: ERC20VaultHandler
slug: /contracts/erc20vaulthandler
---

Extends [IVaultHandler](/contracts/ivaulthandler) allowing the use of an ERC20 as collateral.

## Code

[ERC20VaultHandler.sol](https://github.com/cryptexglobal/contracts/blob/master/contracts/ERC20VaultHandler.sol)

## Address

TBD

## State-Changing Functions

### constructor

```sol
constructor(Orchestrator _orchestrator) public;
```

Called once the contract it's deployed, sets the orchestrator as owner. It also sets the vault counter to 1 as 0 is reserved for empty objects.

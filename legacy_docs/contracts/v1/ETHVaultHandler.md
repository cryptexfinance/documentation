---
id: ethvaulthandler
title: ETHVaultHandler
sidebar_label: ETHVaultHandler
slug: /contracts/ethvaulthandler
---

Extends [IVaultHandler](/contracts/ivaulthandler) allowing the use of ETH and WETH as collateral on the same contract.

## Code

[ETHVaultHandler.sol](https://github.com/cryptexfinance/contracts/blob/master/contracts/ETHVaultHandler.sol)

## Address

#### Mainnet

| Contract         | Address                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| ETH VaultHandler | [0x717170b66654292dfbd89c39f5ae6753d2ac1381](https://etherscan.io/address/0x717170b66654292dfbd89c39f5ae6753d2ac1381#code) |

#### Rinkeby

| Contract         | Address                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| ETH VaultHandler | [0x16Ab98d9B7753D6c5da7c29Db6E3d51Abc76BE35](https://rinkeby.etherscan.io/address/0x16Ab98d9B7753D6c5da7c29Db6E3d51Abc76BE35#code) |

## State-Changing Functions

### constructor

```sol
constructor(
  Orchestrator _orchestrator,
  uint256 _divisor,
  uint256 _ratio,
  uint256 _burnFee,
  uint256 _liquidationPenalty,
  address _tcapOracle,
  TCAP _tcapAddress,
  address _collateralAddress,
  address _collateralOracle,
  address _ethOracle,
  address _rewardHandler,
  address _treasury
)
  IVaultHandler(
    _orchestrator,
    _divisor,
    _ratio,
    _burnFee,
    _liquidationPenalty,
    _tcapOracle,
    _tcapAddress,
    _collateralAddress,
    _collateralOracle,
    _ethOracle,
    _rewardHandler,
    _treasury
  );
```

Called once the contract it's deployed, sets the orchestrator as owner. It also sets the vault counter to 1 as 0 is reserved for empty objects.

### addCollateralETH

```sol
function addCollateralETH()
  external
  payable
  nonReentrant
  vaultExists
  whenNotPaused;
```

Adds collateral to vault using ETH. `msg.value` should be higher than 0. ETH is turned into WETH.

### removeCollateralETH

```sol
function removeCollateralETH(uint256 _amount)
  external
  nonReentrant
  vaultExists
  whenNotPaused;
```

Removes not used collateral from collateral. `_amout` should be higher than 0. WETH is turned into ETH.

### receive

```sol
receive() external payable;
```

Only accept ETH via fallback from the WETH contract.

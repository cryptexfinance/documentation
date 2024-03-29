---
id: erc20vaulthandler
title: ERC20VaultHandler
sidebar_label: ERC20VaultHandler
slug: /contracts/erc20vaulthandler
---

Extends [IVaultHandler](/contracts/ivaulthandler) allowing the use of an ERC20 as collateral.

## Code

[ERC20VaultHandler.sol](https://github.com/cryptexfinance/contracts/blob/master/contracts/ERC20VaultHandler.sol)

## Address

#### Mainnet

| Contract          | Address                                                                                                                            |
|-------------------| ---------------------------------------------------------------------------------------------------------------------------------- |
| DAI VaultHandler  | [0x443366a7a5821619d8d57405511e4fadd9964771](https://etherscan.io/address/0x443366a7a5821619d8d57405511e4fadd9964771#code) |
| LINK VaultHandler | [0xada39d170551daf42822E1D3dA64efEBbD14d1D3](https://etherscan.io/address/0xada39d170551daf42822E1D3dA64efEBbD14d1D3#code) |
| AAVE VaultHandler | [0xada39d170551daf42822E1D3dA64efEBbD14d1D3](https://etherscan.io/address/0xada39d170551daf42822E1D3dA64efEBbD14d1D3#code) |

#### Rinkeby

| Contract          | Address                                                                                                                            |
|-------------------| ---------------------------------------------------------------------------------------------------------------------------------- |
| DAI VaultHandler  | [0x8eD3A1A6221c9B6DA1Af4F21dD98646137bCa5ad](https://rinkeby.etherscan.io/address/0x8eD3A1A6221c9B6DA1Af4F21dD98646137bCa5ad#code) |
| LINK VaultHandler | [0xBd4a21cC2D12157765a8861A83FC4cfd216630b1](https://etherscan.io/address/0xBd4a21cC2D12157765a8861A83FC4cfd216630b1#code) |
| AAVE VaultHandler | [0x119D37aFc784C81626b08813D83598b8673EEE66](https://etherscan.io/address/0x119D37aFc784C81626b08813D83598b8673EEE66#code) |


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

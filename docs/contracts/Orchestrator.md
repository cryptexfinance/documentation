---
id: orchestrator
title: Orchestrator
sidebar_label: Orchestrator
slug: /contracts/orchestrator
---

Orchestrator contract in charge of managing the settings of the vaults and TCAP token.

## Code

[Orchestrator.sol](https://github.com/cryptexglobal/contracts/blob/master/contracts/Orchestrator.sol)

## Address

TBD

## Events

Logs the unlock function.

```sol
LogUnlock(address _contract, enum Orchestrator.Functions _fn, bytes32 _hash);
```

## Modifiers

### notLocked

```sol
modifier notLocked(
  address _contract,
  Functions _fn,
  bytes32 _value
);
```

Throws if vault is locked also checks if the timelocked hash value it's the same as when calling the unlock function.

### validVault

```sol
modifier validVault(IVaultHandler _vault);
```

Throws if vault is not valid. Uses ERC165 introspection to validate.

### validTCAP

```sol
modifier validTCAP(TCAP _tcap);
```

Throws if TCAP Token is not valid. Uses ERC165 introspection to validate.

### validChainlinkOracle

```sol
modifier validChainlinkOracle(address _oracle);
```

Throws if Chainlink Oracle is not valid. Uses ERC165 introspection to validate.

## State-Changing Functions

### initializeVault

```sol
function initializeVault(
  IVaultHandler _vault,
  uint256 _divisor,
  uint256 _ratio,
  uint256 _burnFee,
  uint256 _liquidationPenalty,
  address _tcapOracle,
  TCAP _tcapAddress,
  address _collateralAddress,
  address _collateralOracle,
  address _ethOracle
) public onlyOwner validVault(_vault) validTCAP(_tcapAddress);
```

Intialize the [Vault Contract](/contracts/ivaulthandler). Only owner can call it. Validates if contracts support their interface.

### unlockFunction

```sol
function unlockFunction(
  address _contract,
  Functions _fn,
  bytes32 _hash
) public onlyOwner;
```

Unlocks contract function. Only owner can call it. Unlock time is = block.timestamp + \_TIMELOCK variable. A hash of the value to save is passed as proof for users that the changing value is correct.

### lockVaultFunction

```sol
function lockVaultFunction(IVaultHandler _vault, Functions _fn)
  public
  onlyOwner;
```

Locks vault function. Only owner can call it. Lock happens immediately.

### setDivisor

```sol
function setDivisor(IVaultHandler _vault, uint256 _divisor)
  public
  onlyOwner
  validVault(_vault)
  notLocked(
    address(_vault),
    Functions.DIVISOR,
    keccak256(abi.encodePacked(_divisor))
  );
```

Sets the divisor of a vault, Only owner can call it. Validates if `_vault` is valid and function is not locked. Locks function after using

### setRatio

```sol
function setRatio(IVaultHandler _vault, uint256 _ratio)
  public
  onlyOwner
  validVault(_vault)
  notLocked(
    address(_vault),
    Functions.RATIO,
    keccak256(abi.encodePacked(_ratio))
  );
```

Sets the ratio of a vault. Only owner can call it. Validates if `_vault` is valid and function is not locked. Locks function after using.

### setBurnFee

```sol
function setBurnFee(IVaultHandler _vault, uint256 _burnFee)
  public
  onlyOwner
  validVault(_vault)
  notLocked(
    address(_vault),
    Functions.BURNFEE,
    keccak256(abi.encodePacked(_burnFee))
  );
```

Sets the burn fee of a vault. Only owner can call it. Validates if `_vault` is valid and function is not locked. Locks function after using.

### setLiquidationPenalty

```sol
function setLiquidationPenalty(
  IVaultHandler _vault,
  uint256 _liquidationPenalty
)
  public
  onlyOwner
  validVault(_vault)
  notLocked(
    address(_vault),
    Functions.LIQUIDATION,
    keccak256(abi.encodePacked(_liquidationPenalty))
  );
```

Sets the liquidation penalty of a vault. Only owner can call it. Validates if `_vault` is valid and function is not locked. Locks function after using.

### setTCAP

```sol
function setTCAP(IVaultHandler _vault, TCAP _tcap)
  public
  onlyOwner
  validVault(_vault)
  notLocked(
    address(_vault),
    Functions.TCAP,
    keccak256(abi.encodePacked(_tcap))
  );
```

Sets the [TCAP ERC20 Contract](/contracts/tcap). Only owner can call it.
Validates if `_vault` and `_tcap` are valid and function is not locked.Locks function after using.

### setTCAPOracle

```sol
function setTCAPOracle(IVaultHandler _vault, address _tcapOracle)
  public
  onlyOwner
  validVault(_vault)
  notLocked(
    address(_vault),
    Functions.TCAPORACLE,
    keccak256(abi.encodePacked(_tcapOracle))
  );
```

Sets the [TCAP Oracle Contract](/contracts/chainlink). Only owner can call it. Validates if `_vault` and `_tcapOracle` are valid and function is not locked.Locks function after using.

### setCollateral

```sol
 function setCollateral(IVaultHandler _vault, IERC20 _collateral)
  public
  onlyOwner
  validVault(_vault)
  notLocked(
    address(_vault),
    Functions.COLLATERAL,
    keccak256(abi.encodePacked(_collateral))
  );
```

Sets the Collateral Contract. Only owner can call it. Validates if `_vault` is valid and function is not locked. Locks function after using.

### setCollateralOracle

```sol
 function setCollateralOracle(IVaultHandler _vault, address _collateralOracle)
  public
  onlyOwner
  validVault(_vault)
  notLocked(
    address(_vault),
    Functions.COLLATERALORACLE,
    keccak256(abi.encodePacked(_collateralOracle))
  );
```

Sets the [Collateral Oracle Contract](/contracts/chainlink). Only owner can call it. Validates if `_vault` and `_collateralOracle` are valid and function is not locked.Locks function after using.

### setETHOracle

```sol
 function setETHOracle(IVaultHandler _vault, address _ethOracles)
  public
  onlyOwner
  validVault(_vault)
  notLocked(
    address(_vault),
    Functions.ETHORACLE,
    keccak256(abi.encodePacked(_ethOracles))
  );
```

Sets the [ETH Price Oracle Contract](/contracts/chainlink). Only owner can call it. Validates if `_vault` and `ethOracle` are valid and function is not locked. Locks function after using.

### pauseVault

```sol
function pauseVault(IVaultHandler _vault)
  public
  onlyOwner
  validVault(_vault);
```

Pauses the Vault. Only owner can call it. Validates if `_vault` is valid.

### unpauseVault

```sol
function unpauseVault(IVaultHandler _vault)
  public
  onlyOwner
  validVault(_vault);
```

Unpauses the Vault. Only owner can call it. Validates if `_vault` is valid.

### retrieveVaultFees

```sol
function retrieveVaultFees(IVaultHandler _vault)
  public
  onlyOwner
  validVault(_vault);
```

Retrieves a vault fees and put it on the Orchestrator. Only owner can call it. Validates if `_vault` is valid.

### retrieveFees

```sol
  function retrieveFees() public onlyOwner;
```

Retrieves the fees on the orchestrator. Only owner can call it. Transfer the balance to the contract owner.

### enableTCAPCap

```sol
 function enableTCAPCap(TCAP _tcap, bool _enable)
  public
  onlyOwner
  validTCAP(_tcap)
  notLocked(
    address(_tcap),
    Functions.ENABLECAP,
    keccak256(abi.encodePacked(_enable))
  );
```

Enables or disables the TCAP Cap. Only owner can call it. Validates if `_tcap` is valid.

### setTCAPCap

```sol
function setTCAPCap(TCAP _tcap, uint256 _cap)
  public
  onlyOwner
  validTCAP(_tcap)
  notLocked(
    address(_tcap),
    Functions.SETCAP,
    keccak256(abi.encodePacked(_cap))
  );
```

Enables or disables the TCAP Cap. Only owner can call it. Validates if `_tcap` is valid.

### addTCAPVault

```sol
function addTCAPVault(TCAP _tcap, IVaultHandler _vault)
  public
  onlyOwner
  validTCAP(_tcap)
  validVault(_vault);
```

Adds Vault as handler to TCAP ERC20. Only owner can call it. Validates. if `_tcap` and `vault` are valid.

### receive

```sol
receive() external payable;
```

Allows the contract to receive ETH.

---
id: orchestrator
title: Orchestrator
sidebar_label: Orchestrator
slug: /contracts/orchestrator
---

Orchestrator contract in charge of managing the settings of the vaults, rewards and TCAP token. It acts as the owner of these contracts.

## Code

[Orchestrator.sol](https://github.com/cryptexglobal/contracts/blob/master/contracts/Orchestrator.sol)

## Address

#### Rinkeby

| Contract         | Address                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| ETH VaultHandler | [0xEF25580E76444A47d11A16F26A49DB1Bd1CA5CC9](https://rinkeby.etherscan.io/address/0xEF25580E76444A47d11A16F26A49DB1Bd1CA5CC9#code) |

## Private Variables

```sol
bytes4 private constant _INTERFACE_ID_IVAULT = 0x9e75ab0c;
```

The computed interface ID according to ERC-165. Indicates if this contract supports the vault handler functions.

```sol
bytes4 private constant _INTERFACE_ID_TCAP = 0xbd115939;
```

The computed interface ID according to ERC-165. Indicates if this contract supports the tcap erc20 functions.

```sol
bytes4 private constant _INTERFACE_ID_CHAINLINK_ORACLE = 0x85be402b;
```

The computed interface ID according to ERC-165. Indicates if this contract supports the chainlink oracle functions.

```sol
mapping(IVaultHandler => mapping(Functions => bool)) private emergencyCalled;
```

Tracks which vault was emergency called.

## Public Variables

```sol
address public guardian;
```

Address that can set to 0 the fees or pause the vaults in an emergency event.

## Events

Events are called each time the state changes on the contract.

```sol
event GuardianSet(address indexed _owner, address guardian);
```

An event emitted when the guardian is updated.

```sol
event TransactionExecuted(
  address indexed target,
  uint256 value,
  string signature,
  bytes data
);
```

An event emitted when a transaction is executed.

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

### onlyGuardian

```sol
modifier onlyGuardian();
```

Throws if called by any account other than the guardian.

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

### setGuardian

```sol
function setGuardian(address _guardian) external onlyOwner;
```

Sets the guardian of the orchestrator.

### setRatio

```sol
function setRatio(IVaultHandler _vault, uint256 _ratio)
  external
  onlyOwner
  validVault(_vault);
```

Sets the ratio of a vault. Only owner can call it.

### setBurnFee

```sol
function setBurnFee(IVaultHandler _vault, uint256 _burnFee)
  external
  onlyOwner
  validVault(_vault);
```

Sets the burn fee of a vault. Only owner can call it.

### setEmergencyBurnFee

```sol
function setEmergencyBurnFee(IVaultHandler _vault)
  external
  onlyGuardian
  validVault(_vault);
```

Sets the burn fee to 0, only used on a black swan event. Only Guardian can call it.

### setLiquidationPenalty

```sol
function setLiquidationPenalty(
  IVaultHandler _vault,
  uint256 _liquidationPenalty
) external onlyOwner validVault(_vault);
```

Sets the liquidation penalty of a vault. Only owner can call it.

### setEmergencyLiquidationPenalty

```sol
function setEmergencyLiquidationPenalty(IVaultHandler _vault)
  external
  onlyGuardian
  validVault(_vault);
```

Sets the liquidation penalty of a vault to 0, only used on a black swan event. Only guardian can call it.

### setRewardHandler

```sol
function setRewardHandler(IVaultHandler _vault, address _rewardHandler)
  external
  onlyOwner
  validVault(_vault);
```

Sets the reward handler address of a vault. Only owner can call it.

### pauseVault

```sol
function pauseVault(IVaultHandler _vault)
  external
  onlyGuardian
  validVault(_vault);
```

Pauses the Vault. Only guardian can call it. Validates if `_vault` is valid.

### unpauseVault

```sol
function unpauseVault(IVaultHandler _vault)
  external
  onlyGuardian
  validVault(_vault);
```

Unpauses the Vault. Only guardian can call it. Validates if `_vault` is valid.

### enableTCAPCap

```sol
function enableTCAPCap(TCAP _tcap, bool _enable)
  external
  onlyOwner
  validTCAP(_tcap);
```

Enables or disables the TCAP Cap. Only owner can call it. Validates if `_tcap` is valid.

### setTCAPCap

```sol
function setTCAPCap(TCAP _tcap, uint256 _cap)
  external
  onlyOwner
  validTCAP(_tcap);
```

Enables or disables the TCAP Cap. Only owner can call it. Validates if `_tcap` is valid.

### addTCAPVault

```sol
function addTCAPVault(TCAP _tcap, IVaultHandler _vault)
  external
  onlyOwner
  validTCAP(_tcap)
  validVault(_vault);
```

Adds Vault to TCAP Contract. Only owner can call it. Validates. if `_tcap` and `vault` are valid.

### removeTCAPVault

```sol
function removeTCAPVault(TCAP _tcap, IVaultHandler _vault)
  external
  onlyOwner
  validTCAP(_tcap)
  validVault(_vault);
```

Removes Vault to TCAP Contract. Only owner can call it. Validates. if `_tcap` and `vault` are valid.

### executeTransaction

```sol
function executeTransaction(
  address target,
  uint256 value,
  string memory signature,
  bytes memory data
) external payable onlyOwner returns (bytes memory);
```

Allows the owner to execute custom transactions. Only owner can call it.

### retrieveETH

```sol
function retrieveETH(address _to) external onlyOwner;
```

Retrieves the fees stuck on the orchestrator. Only owner can call it. Transfer the balance to the contract owner.

### receive

```sol
receive() external payable;
```

Allows the contract to receive ETH.

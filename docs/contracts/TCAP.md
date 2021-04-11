---
id: tcap
title: TCAP
sidebar_label: TCAP
slug: /contracts/tcap
---

ERC20 token on the Ethereum Blockchain that provides total exposure to the cryptocurrency sector. Uses [Open Zeppelin ERC20 Library](https://docs.openzeppelin.com/contracts/3.x/erc20).

## Code

[TCAP.sol](https://github.com/cryptexfinance/contracts/blob/master/contracts/TCAP.sol)

## Address

#### Mainnet

| Contract | Address                                                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| TCAP     | [0x16c52ceece2ed57dad87319d91b5e3637d50afa4](https://etherscan.io/address/0x16c52ceece2ed57dad87319d91b5e3637d50afa4#code) |

#### Rinkeby

| Contract | Address                                                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| TCAP     | [0x525471845A1b6E486930F4C8C50D21E7A4670fb2](https://rinkeby.etherscan.io/address/0x525471845A1b6E486930F4C8C50D21E7A4670fb2#code) |

## ERC165 Introspection

```sol
mint.selector ^
burn.selector ^
setCap.selector ^
enableCap.selector ^
transfer.selector ^
transferFrom.selector ^
addVaultHandler.selector ^
removeVaultHandler.selector ^
approve.selector => 0xbd115939
```

The computed interface ID according to ERC-165. The interface ID is a XOR of all interface method selectors.

## Public Variables

```sol
bool public capEnabled = false;
```

if enabled TCAP can't be minted if the total supply is above or equal the cap value.

```sol
uint256 public cap;
```

Maximum value the total supply of TCAP.

```sol
mapping(address => bool) public vaultHandlers;
```

Address to Vault Handler. Only vault handlers can mint and burn TCAP.

## Private Variables

```sol
bytes4 private constant _INTERFACE_ID_TCAP = 0xbd115939;
```

The computed interface ID according to ERC-165. Indicates if this contract supports the tcap erc20 functions.

```sol
bytes4 private constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;
```

The computed interface ID according to ERC-165. Indicates if this contract supports the ERC165 interface.

## Events

Events are called each time the state changes on the contract.

```sol
event VaultHandlerAdded(
  address indexed _owner,
  address indexed _tokenHandler
);
```

An event emitted when a vault handler is added.

```sol
event VaultHandlerRemoved(
  address indexed _owner,
  address indexed _tokenHandler
);
```

An event emitted when a vault handler is removed.

```sol
event NewCap(address indexed _owner, uint256 _amount);
```

An event emitted when the cap value is updated.

```sol
event NewCapEnabled(address indexed _owner, bool _enable);
```

An event emitted when the cap is enabled or disabled.

## Modifiers

### onlyVault

```sol
modifier onlyVault();
```

Reverts if called by any account that is not a vault [Vault](/contracts/IVaultHandler).

## Read-Only Functions

### \_beforeTokenTransfer

```sol
function _beforeTokenTransfer(
  address _from,
  address _to,
  uint256 _amount
) internal virtual override;
```

This function is called before before each token transfer or mint, the mint of tokens to check if the total supply isn't above the cap. Reverts if TCAP tokens are sent to the TCAP contract.

`See Open Zeppelin ERC20-_beforeTokenTransfer.`

### supportsInterface

```sol
function supportsInterface(bytes4 _interfaceId)
  external
  override
  view
  returns (bool);
```

ERC165 Standard for support of interfaces.

## State-Changing Functions

### constructor

```sol
constructor(
  string memory _name,
  string memory _symbol,
  uint256 _cap,
  Orchestrator _orchestrator
) public ERC20(_name, _symbol);
```

Called once the contract it's deployed, sets the orchestrator as owner.

### addVaultHandler

```sol
function addVaultHandler(address _vaultHandler) external onlyOwner ;
```

Adds a new address as a vault [vault handler contract](/contracts/ivaulthandler). Only owner can call it.

### removeVaultHandler

```sol
function removeVaultHandler(address _vaultHandler) external onlyOwner ;
```

Removes an address as a vault [vault handler contract](/contracts/ivaulthandler). Only owner can call it.

### mint

```sol
mint(address _account, uint256 _amount) public onlyVault;
```

Mints TCAP Tokens. Only vault handler can call it.

### burn

```sol
function burn(address _account, uint256 _amount) public onlyVault;
```

Burns TCAP Tokens. Only vault handler can call it.

### setCap

```sol
function setCap(uint256 _cap) public onlyOwner;
```

Sets the maximum capacity of the token. When [capEnabled](#enableCap) is true, mint is not allowed to issue tokens that would increase the total supply above the specified capacity. Only owner can call it.

### enableCap

```sol
function enableCap(bool _enable) public onlyOwner;
```

Enables or Disables the Token Cap. When capEnabled is true, minting will not be allowed above the max capacity. Only owner can call it

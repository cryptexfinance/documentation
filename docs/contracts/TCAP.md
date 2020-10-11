---
id: tcap
title: TCAP
sidebar_label: TCAP
slug: /contracts/tcap
---

ERC20 token on the Ethereum Blockchain that provides total exposure to the cryptocurrency sector. Uses [Open Zeppelin ERC20 Library](https://docs.openzeppelin.com/contracts/3.x/erc20).

## Code

[TCAP.sol](https://github.com/cryptexglobal/contracts/blob/master/contracts/TCAP.sol)

## Address

TBD

## ERC165 Introspection

```sol
mint.selector ^
burn.selector ^
setCap.selector ^
enableCap.selector ^
transfer.selector ^
transferFrom.selector ^
approve.selector => 0xa9ccee51;
```

The computed interface ID according to ERC-165. The interface ID is a XOR of all interface method selectors.

## Events

Events are called each time the state changes on the contract.

```sol
LogAddTokenHandler(address _owner, address _tokenHandler);
```

```sol
LogSetCap(address _owner, uint256 _amount);
```

```sol
LogEnableCap(address _owner, bool _enable);
```

## Modifiers

### onlyHandler

```sol
modifier onlyHandler();
```

Throws if called by any account other than the [Vault](/contracts/IVaultHandler).

## Read-Only Functions

### \_beforeTokenTransfer

```sol
function _beforeTokenTransfer(
  address from,
  address to,
  uint256 amount
) internal virtual override;
```

This function is called before the mint of tokens to check if the total supply isn't above the cap.

`See Open Zeppelin ERC20-_beforeTokenTransfer.`

### supportsInterface

```sol
function supportsInterface(bytes4 interfaceId)
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

### addTokenHandler

```sol
function addTokenHandler(address _handler) public onlyOwner;
```

Sets the address of the [vault handler contract](/contracts/ivaulthandler). Only owner can call it.

### mint

```sol
mint(address _account, uint256 _amount) public onlyHandler;
```

Mints TCAP Tokens. Only vault handler can call it.

### burn

```sol
function burn(address _account, uint256 _amount) public onlyHandler;
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

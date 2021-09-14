---
id: chainlink
title: Chainlink Oracle
sidebar_label: Chainlink Oracle
slug: /contracts/chainlink
---

This contract is in charge or reading the information from a Chainlink Oracle. TCAP contracts read the price directly from this contract. More information can be found on [Chainlink Documentation](https://docs.chain.link/docs/get-the-latest-price).

## Code

[ChainlinkOracle.sol](https://github.com/cryptexfinance/contracts/blob/master/contracts/oracles/ChainlinkOracle.sol)

## Contract Addresses

#### Rinkeby

| Pair             | Address                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| ETH/USD          | [0xc122B95f6Bcd2ba83fEfDcAD84f57e38Ca9daecf](https://rinkeby.etherscan.io/address/0xc122B95f6Bcd2ba83fEfDcAD84f57e38Ca9daecf#code) |
| DAI/USD          | [0x71263D4DBd31e57E334c7045e46eB781B9Db3386](https://rinkeby.etherscan.io/address/0x71263D4DBd31e57E334c7045e46eB781B9Db3386#code) |
| Total Market Cap | [0x199e26325b1ebC1F736536f4FaeeddC4bb4D10a2](https://rinkeby.etherscan.io/address/0x199e26325b1ebC1F736536f4FaeeddC4bb4D10a2#code) |

## ERC165 Introspection

```sol
setReferenceContract.selector ^
getLatestAnswer.selector ^
getLatestTimestamp.selector ^
getPreviousAnswer.selector ^
getPreviousTimestamp.selector => 0x85be402b
```

The computed interface ID according to ERC-165. The interface ID is a XOR of all interface method selectors.

## Private Variables

```sol
AggregatorV3Interface internal aggregatorContract;
```

The address of the chainlink aggregator contract.

```sol
bytes4 private constant _INTERFACE_ID_CHAINLINK_ORACLE = 0x85be402b;
```

The computed interface ID according to ERC-165. Indicates if this contract supports the chainlink oracle functions.

```sol
bytes4 private constant _INTERFACE_ID_ERC165 = 0x01ffc9a7;
```

The computed interface ID according to ERC-165. Indicates if this contract supports the ERC165 interface.

## Read-Only Functions

### getLatestAnswer

```sol
function getLatestAnswer() public view returns (uint256);
```

Returns the latest answer from the reference contract.

### getLatestTimestamp

```sol
function getLatestTimestamp() public view returns (uint256);
```

Returns the last time the Oracle was updated.

### getLatestRound

```sol
function getLatestRound()
  public
  view
  returns (
    uint80,
    int256,
    uint256,
    uint256,
    uint80
  );
```

Returns the all the information from the latest round update on aggregator.

### getPreviousAnswer

```sol
function getPreviousAnswer(uint256 _id) public view returns (int256);
```

Returns a previous answer updated on the Oracle with given \_id.

### getPreviousTimestamp

```sol
function getPreviousTimestamp(uint256 _id) public view returns (uint256);
```

Returns a previous time the Oracle was updated.

### getRound

```sol
function getRound(uint80 _id)
  public
  view
  returns (
    uint80,
    int256,
    uint256,
    uint256,
    uint80
  );
```

Returns a given round from the reference contract with the `_id`.

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
constructor(address _aggregator) public;
```

Called once the contract it's deployed. Set the Chainlink Oracle as an aggregator.

### setReferenceContract

```sol
function setReferenceContract(address _aggregator) public onlyOwner();
```

Changes the reference contract used to read the information from Chainlink Oracle. Only owner can call it.

---
id: chainlink
title: Chainlink Oracle
sidebar_label: Chainlink Oracle
slug: /contracts/chainlink
---

This contract is in charge or reading the information from a Chainlink Oracle. TCAP contracts read the price directly from this contract. More information can be found on [Chainlink Documentation](https://docs.chain.link/docs/get-the-latest-price).

## Code

[ChainlinkOracle.sol](https://github.com/cryptexglobal/contracts/blob/master/contracts/oracles/ChainlinkOracle.sol)

## Address

TBD: Collateral, tcap, eth oracles.

## ERC165 Introspection

```sol
setReferenceContract.selector ^
getLatestAnswer.selector ^
getLatestTimestamp.selector ^
getPreviousAnswer.selector ^
getPreviousTimestamp.selector => 0x85be402b
```

The computed interface ID according to ERC-165. The interface ID is a XOR of all interface method selectors.

## Read-Only Functions

### getLatestAnswer

```sol
function getLatestAnswer() public view returns (uint256);
```

Returns the latest answer from the referece contract multiplied by 10000000000 for handling decimals on TCAP contracts.

### getLatestTimestamp

```sol
function getLatestTimestamp() public view returns (uint256);
```

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

Returns the all the information from a round update on aggregator.

### getPreviousAnswer

```sol
function getPreviousAnswer(uint256 _back) public view returns (int256);
```

Returns the previous answer updated on the Oracle.

### getPreviousTimestamp

```sol
function getPreviousTimestamp(uint256 _back) public view returns (uint256);
```

Returns the previous time the Oracle was updated.

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
  )
```

Returns the all the information from a previous aggregator round updated with the `_id`.

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

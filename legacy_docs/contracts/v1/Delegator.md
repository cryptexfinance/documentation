---
id: delegator
title: Delegator
sidebar_label: Delegator
slug: /contracts/delegator
---

Contract that when deployed sets all of it's voting power to the **delegatee**, only the Delegator Factory(TODO: Link) creator can use it. Uses [Open Zeppelin Ownable Library](https://docs.openzeppelin.com/contracts/4.x/api/access#Ownable).

## Code

[Delegator.sol](https://github.com/cryptexfinance/governance-staking/blob/main/src/Delegator.sol)

## Address

As there are one Delegator per user that wants to engange in DAO politics you can see the list of deployed Delegators here (TBD)


## Public Variables

```sol
address public immutable token;
```

Address of the staking governance token.

```sol
mapping(address => uint256) public stakerBalance;
```

Tracks the amount of staked tokens per user.

## Read-Only Functions

### delegatee

```sol
function delegatee() external returns (address);
```

Returns the delegatee of this contract.

## State-Changing Functions

### constructor

```sol
constructor(address delegatee_, address token_);
```

Called once the contract it's deployed, delegates all it's power to delegatee_ and can't be changed later. Sets delegator factory as owner.

### stake

```sol
function stake(address staker_, uint256 amount_) external onlyOwner;
```

Increases the balance of the staker. Only DelegatorFactory which is the owner can call it. After the balance is updated the amount is transferred from the user to this contract using the DelegatorFactory stake (TODO: add link) function.

### removeStake

```sol
function removeStake(address staker_, uint256 amount_) external onlyOwner;
```

Decreases the balance of the staker. Only DelegatorFactory which is the owner can call it. After the balance is updated the amount is transferred back to the user from this contract.

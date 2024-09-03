---
id: delegatorFactory 
title: Delegator Factory
sidebar_label: Delegator Factory 
slug: /contracts/delegatorFactory
---

Contract in charge of generating Delegator contracts, handling delegations and CTX balance map, rewards..
Uses [Open Zeppelin Library](https://docs.openzeppelin.com/contracts/4.x/).

## Code

[DelegatorFactory.sol](https://github.com/cryptexfinance/governance-staking/blob/main/src/DelegatorFactory.sol)

## Address

#### Mainnet

| Contract | Address                                                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| DelegatorFactory  | [0x70236b36f86AB4bd557Fe9934E1246537B472918](https://etherscan.io/address/0x70236b36f86AB4bd557Fe9934E1246537B472918#code) |

#### Rinkeby

| Contract | Address                                                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| DelegatorFactory     | [0x0aafdB19021a3a87A510dD4db7dce62318b49Cd1](https://rinkeby.etherscan.io/address/0x0aafdB19021a3a87A510dD4db7dce62318b49Cd1#code) |

## Public Variables

```sol
address public immutable stakingToken;
```

Address of the staking governance token.

```sol
address public immutable rewardsToken;
```

Address of the reward token.

```sol
uint256 public waitTime;
```

Minimum wait time before removing stake.

```sol
uint256 public periodFinish = 0;
```

Tracks the period where users stop earning rewards.

```sol
uint256 public rewardRate = 0;
```

Tracks the reward rate that users can earn.

```sol
uint256 public rewardsDuration = 186 days;
```

How long the rewards lasts, it updates when more rewards are added.

```sol
uint256 public lastUpdateTime;
```

Last time rewards were updated.

```sol
uint256 public rewardPerTokenStored;
```

Amount of reward calculated per token stored.

```sol
mapping(address => uint256) public userRewardPerTokenPaid;
```

Track the rewards paid to users.

```sol
mapping(address => uint256) public rewards;
```

Tracks the user rewards.

```sol
mapping(address => address) public delegatorToDelegatee;
```

Tracks the address of a delegatee with a delegator contract address.

```sol
mapping(address => address) public delegateeToDelegator;
```

Tracks the delegator contract address from delegatee address.

```sol
mapping(address => bool) public delegators;
```

Tracks if address is an official delegator.

```sol
mapping(address => mapping(address => uint256)) public stakerWaitTime;
```

Tracks minimum wait time the account has to wait before removing stake.

## Private Variables

```sol
uint256 private _totalSupply;
```

Tracks the total supply of staked tokens.

```sol
mapping(address => uint256) private _balances;
```

Tracks the amount of staked tokens per user.

## Events

Events are called each time the state changes on the contract.

```sol
event DelegatorCreated(address indexed delegator, address indexed delegatee);
```

An event emitted when a Delegator is created.

```sol
event Staked(
   address indexed delegator,
   address indexed delegatee,
   uint256 amount
);
```

An event emitted when a user has staked and delegated.

```sol
event Withdrawn(
   address indexed delegator,
   address indexed delegatee,
   uint256 amount
);
```

An event emitted when a user removes stake and undelegated.

```sol
event WaitTimeUpdated(uint256 waitTime);
```

An event emitted when the minimum wait time is updated.

```sol
event RewardAdded(uint256 reward);
```

An event emitted when a reward is added.

```sol
event RewardPaid(address indexed user, uint256 reward);
```

An event emitted when reward is paid to a user.

```sol
event RewardsDurationUpdated(uint256 newDuration);
```

An event emitted when the reward duration is updated.

## Modifiers

### updateReward

```sol
modifier updateReward(address account_);
```

Updates the reward and time on call.

## Read-Only Functions

### totalSupply

```sol
function totalSupply() external view returns (uint256) ;
```

Returns the total amount of staked tokens.

### balanceOf

```sol
function balanceOf(address account_) external view returns (uint256);
```

Returns the amount of staked tokens from specific user.

### getRewardForDuration

```sol
 function getRewardForDuration() external view returns (uint256);
```

Returns reward rate for a duration.

### lastTimeRewardApplicable

```sol
function lastTimeRewardApplicable() public view returns (uint256);
```

Returns the minimum between current block timestamp or the finish period of rewards.

### rewardPerToken

```sol
function rewardPerToken() public view returns (uint256);
```

Returns the calculated reward per token deposited.

### earned

```sol
function earned(address account_) public view returns (uint256);
```

Returns the amount of reward tokens a user has earned.

### min

```sol
function min(uint256 a_, uint256 b_) public pure returns (uint256);
```

Returns the minimum between two variables.

## State-Changing Functions

### constructor

```sol
constructor(
   address stakingToken_,
   address rewardsToken_,
   uint256 waitTime_,
   address timelock_
);
```

Called once the contract it's deployed, transfers ownership to timelock.

### notifyRewardAmount

```sol
function notifyRewardAmount(uint256 reward_)
   external
   onlyOwner
   updateReward(address(0));
```

Notifies the contract that reward has been added to be given. Only owner can call it. Increases duration of rewards

### setRewardsDuration

```sol
function setRewardsDuration(uint256 rewardsDuration_) external onlyOwner;
```

Updates the reward duration. Only owner can call it.

### getReward

```sol
function getReward() external nonReentrant updateReward(msg.sender);
```

Transfers to the caller the current amount of rewards tokens earned. Update rewards on call.

### createDelegator

```sol
function createDelegator(address delegatee_) external;
```

Creates a new delegator contract that delegates all votes to delegatee_. Only one delegator contract pointing to the
same delegatee can exist.

### stake

```sol
function stake(address delegator_, uint256 amount_)
   external
   nonReentrant
   updateReward(msg.sender);
```

Stakes to delegator_ the amount_ specified. Delegator must be valid and amount has to be greater than 0. amount_ is
transferred to the delegator contract and staker starts earning rewards if active. Update rewards on call.

### withdraw

```sol
function withdraw(address delegator_, uint256 amount_)
   external
   nonReentrant
   updateReward(msg.sender);
```

Removes amount_ from delegator_. Delegator must be valid and amount has to be greater than 0. amount_ must be `<=` that
current user stake. amount_ is transferred from the delegator contract to the staker. Update rewards on call. Requires
that at least waitTime has passed since delegation to unDelegate.

### updateWaitTime

```sol
 function updateWaitTime(uint256 waitTime_) external onlyOwner;
```

Updates the min wait time between delegation and unDelegation.

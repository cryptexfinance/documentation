---
title: Optimism
sidebar_label: Contracts
id: optimism
slug: /optimism
---

Cryptex protocol is currently deployed on Optimism Mainnet and Optimism Kovan, it works exactly the same as the mainnet with minor changes on the Orchestrator. Optimism version is governed and upgraded by CTX token holders, using the three distinct components; the CTX token, governance module, and Timelock. In order to implement changes to the Cryptex protocol mainnet governance needs to vote and pass a proposal. Please refer to the [governance section](/governance/reference) for more details on governance.

### Differences with Mainnet


The main difference between the Mainnet and Optimism is the Orchestrator and the Treasury contracts. Orchestrator implements a custom modifier for the owner so only calls initiated from the timelock contract on mainnet to the ovmL2CrossDomainMessenger can be accepted.

```solidity
	modifier onlyOwner() override {
		require(
			msg.sender == address(ovmL2CrossDomainMessenger)
			&& ovmL2CrossDomainMessenger.xDomainMessageSender() == owner,
			"OptimisticOrchestrator: caller is not the owner"
		);
		_;
	}
```

The treasury contract is just a holder of tokens owned by the mainnet governance that holds any fees or tokens on Optimism.

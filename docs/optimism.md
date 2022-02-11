---
title: Optimism
sidebar_label: Contracts
id: optimism
slug: /optimism
---

Cryptex protocol is currently deployed on Optimism Mainnet and Optimism Kovan, it works exactly the same as the mainnet with minor changes on the Orchestrator. Optimism version is governed and upgraded by CTX token holders, using the three distinct components; the CTX token, governance module, and Timelock. In order to implement changes to the Cryptex protocol mainnet governance needs to vote and pass a proposal. Please refer to the (governance section)[/governance/reference] for more details on governance.

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

## Contract Addresses

### Mainnet

| Contract          | Address                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Optimistic Orchestrator  | [0x321C2fE4446C7c963dc41Dd58879AF648838f98D](https://optimistic.etherscan.io/address/0x321C2fE4446C7c963dc41Dd58879AF648838f98D#code) |
| Optimistic Treasury  | [0x271901c3268D0959bbc9543DE4f073D3708C88F7](https://optimistic.etherscan.io/address/0x271901c3268D0959bbc9543DE4f073D3708C88F7#code) |
| ETH VaultHandler  | [0xE0c99C503c4AE5eC50aC63C59C7eF4725C355fdD](https://optimistic.etherscan.io/address/0xE0c99C503c4AE5eC50aC63C59C7eF4725C355fdD#code) |
| ETH Oracle  | [0x16c52CeeCE2ed57dAd87319D91B5e3637d50aFa4](https://optimistic.etherscan.io/address/0x16c52CeeCE2ed57dAd87319D91B5e3637d50aFa4#code) |
| DAI VaultHandler  | [0x2C890633Db29f21fccbA57c68DcCEF09AB0D4763](https://optimistic.etherscan.io/address/0x2C890633Db29f21fccbA57c68DcCEF09AB0D4763#code) |
| DAI Oracle  | [0x2C890633Db29f21fccbA57c68DcCEF09AB0D4763](https://optimistic.etherscan.io/address/0x2C890633Db29f21fccbA57c68DcCEF09AB0D4763#code) |
| LINK VaultHandler | [0x61925C38e28F60e688f7d05E65f63792166a5aFE](https://optimistic.etherscan.io/address/0x61925C38e28F60e688f7d05E65f63792166a5aFE#code) |
| LINK Oracle | [0xa4e581BD159B869e8290707A7FBF841fe7FE97b6](https://optimistic.etherscan.io/address/0xa4e581BD159B869e8290707A7FBF841fe7FE97b6#code) |
| SNX VaultHandler  | [0xc8BB1cd417D20116387a5e0603e195cA4f3Cf59A](https://optimistic.etherscan.io/address/0xc8BB1cd417D20116387a5e0603e195cA4f3Cf59A#code) |
| SNX Oracle  | [0x2cFeaf282FE9ae050b210e7BDa65D288C40c6104](https://optimistic.etherscan.io/address/0x2cFeaf282FE9ae050b210e7BDa65D288C40c6104#code) |
| UNI VaultHandler  | [0x66ae98E432329E42B7988CFDCB6f524b1999CB4a](https://optimistic.etherscan.io/address/0x66ae98E432329E42B7988CFDCB6f524b1999CB4a#code) |
| UNI Oracle  | [0x07Ef20895ceF20855D29ACeDCa35E6f96AF4fF49](https://optimistic.etherscan.io/address/0x07Ef20895ceF20855D29ACeDCa35E6f96AF4fF49#code) |
| TCAP  | [0x6b5a75f38BeA1Ef59Bc43A5d9602e77Bcbe65e46](https://optimistic.etherscan.io/address/0x6b5a75f38BeA1Ef59Bc43A5d9602e77Bcbe65e46#code) |
| TCAP Oracle  | [0xa54074b2cc0e96a43048d4a68472F7F046aC0DA8](https://optimistic.etherscan.io/address/0xa54074b2cc0e96a43048d4a68472F7F046aC0DA8#code) |

### Kovan

| Contract          | Address                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Optimistic Orchestrator  | [0x093f8F7C7fCC6edf991309A5056feB5cA9579292](https://kovan-optimistic.etherscan.io/address/0x093f8F7C7fCC6edf991309A5056feB5cA9579292#code) |
| Optimistic Treasury  | [0x271901c3268D0959bbc9543DE4f073D3708C88F7](https://kovan-optimistic.etherscan.io/address/0x271901c3268D0959bbc9543DE4f073D3708C88F7#code) |
| ETH VaultHandler  | [0xC5d57D1E3c8e32A5C6f22B511A6962043f8Ca425](https://kovan-optimistic.etherscan.io/address/0xC5d57D1E3c8e32A5C6f22B511A6962043f8Ca425#code) |
| ETH Oracle  | [0x188EA0ce2144Ac462E922ccB1F4DEB5c8aaD41fC](https://kovan-optimistic.etherscan.io/address/0x188EA0ce2144Ac462E922ccB1F4DEB5c8aaD41fC#code) |
| DAI VaultHandler  | [0x64735028556fE352BFEb9031AE99F5302d6Ca3D6](https://kovan-optimistic.etherscan.io/address/0x64735028556fE352BFEb9031AE99F5302d6Ca3D6#code) |
| DAI Oracle  | [0x1e01b2A5A861fB248231C8246bc1aA754e3A2ecb](https://kovan-optimistic.etherscan.io/address/0x1e01b2A5A861fB248231C8246bc1aA754e3A2ecb#code) |
| TCAP  | [0x7fF4580aD66a3C0F62DDa843674A3811ac062211](https://kovan-optimistic.etherscan.io/address/0x7fF4580aD66a3C0F62DDa843674A3811ac062211#code) |
| TCAP Oracle  | [0x71dE461F40b092ed3A6F0fef3A50Efb1894cA5dA](https://kovan-optimistic.etherscan.io/address/0x71dE461F40b092ed3A6F0fef3A50Efb1894cA5dA#code) |




module.exports = {
    tcapSidebar: {
        Introduction: [
            "intro/cryptex",
            "intro/detailed_introduction",
            "intro/architecture",
            "intro/protocol_math",
            "intro/tcap",
            "intro/jpegz",
            "intro/faq",
            "intro/terminology",
        ],
        Governance: ["governance/reference"],
        "How To Use": ["how"],
        Contracts: [
            {
                Vaults: ["contracts/ivaulthandler",
                    "contracts/ethvaulthandler",
                    "contracts/erc20vaulthandler", "contracts/tcap", "contracts/orchestrator",
                    "contracts/chainlink"]
            },
            {
                Rewards: ["contracts/rewardhandler",
                    "contracts/liquidityreward",]
            },
            {"Staking Contracts": ["contracts/delegatorFactory","contracts/delegator"]}
        ],
        "Optimism": ["optimism"],
        "Arbitrum": ["arbitrum"],
        "Audits": ["audits"],
    },
};

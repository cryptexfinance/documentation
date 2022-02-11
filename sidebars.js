module.exports = {
    tcapSidebar: {
        Introduction: [
            "intro/cryptex",
            "intro/tcap",
            "intro/faq",
            "intro/terminology",
            "intro/whitepaper",
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
    },
};

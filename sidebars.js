module.exports = {
    tcapSidebar: [
        {
          type: 'category',
          label: 'Cryptex Finance',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'intro/welcome_to_cryptex',
              label: 'Welcome to Cryptex',
            },
            {
              type: 'doc',
              id: 'intro/how_to_use_cryptex',
              label: 'How to use Cryptex Finance',
            },
          ]
        },
        {
          type: 'category',
          label: 'Spot',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'spot/intro',
              label: 'Introduction',
            }
          ]
       },
        {
          type: 'category',
          label: 'Decentralized Perpetuals',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Version V1',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'decentralized_perpetuals/v1/introduction',
                  label: ' Introduction',
                },
                {
                  type: 'doc',
                  id: 'decentralized_perpetuals/v1/overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'decentralized_perpetuals/v1/architecture',
                  label: 'Architecture',
                },
                {
                  type: 'doc',
                  id: 'decentralized_perpetuals/v1/fees',
                  label: 'Fees',
                },
                {
                  type: 'doc',
                  id: 'decentralized_perpetuals/v1/tcap',
                  label: 'TCAP Perp',
                },
              ]
            },
            {
              type: 'category',
              label: 'Version Pi',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'decentralized_perpetuals/pi/introduction',
                  label: ' Introduction',
                },
                {
                  type: 'doc',
                  id: 'decentralized_perpetuals/pi/overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'decentralized_perpetuals/pi/architecture',
                  label: 'Architecture',
                },
                {
                  type: 'doc',
                  id: 'decentralized_perpetuals/pi/fees',
                  label: 'Fees',
                },
                 {
                  type: 'doc',
                  id: 'decentralized_perpetuals/pi/meem',
                  label: 'Meem Perp',
                },
              ]
            },
          ]
       },
       {
          type: 'category',
          label: 'Indexes',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Crypdex',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'indexes/crypdex/overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'indexes/crypdex/architecture',
                  label: 'Architecture',
                },
              ]
           },
           {
              type: 'category',
              label: 'Synthetics',
              collapsible: true,
              collapsed: true,
              items: [
                {
                  type: 'doc',
                  id: 'indexes/synthetics/overview',
                  label: 'Overview',
                },
                {
                  type: 'doc',
                  id: 'indexes/synthetics/architecture',
                  label: 'Architecture',
                },
              ]
           }
          ],
       },
       {
          type: 'category',
          label: 'Smart Vaults',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'smart_vaults/overview',
              label: 'Overview',
            }
          ]
       },
       {
          type: 'category',
          label: 'Governace',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'governance/reference',
              label: 'Reference',
            },
            {
              type: 'doc',
              id: 'governance/l2_governance',
              label: 'L2 Governance',
            },
          ]
       },
       {
          type: 'category',
          label: 'Contracts',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'contracts/v2/deployed_contracts',
              label: 'Deployed Contracts',
            }
          ]
       },
       {
          type: 'category',
          label: 'Audits',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'audits/audits',
              label: 'Audits',
            }
          ]
       },
    ]
};

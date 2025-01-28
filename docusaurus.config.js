const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
const prismReactRenderer = require('prism-react-renderer');

module.exports = {
    title: "Cryptex",
    tagline: "The first total market cap token",
    url: "https://cryptex.finance",
    baseUrl: "/",
    onBrokenLinks: "throw",
    favicon: "img/favicon.svg",
    organizationName: "cryptex", // Usually your GitHub org/user name.
    projectName: "tcap", // Usually your repo name.
    themeConfig: {
        prism: {
            additionalLanguages: ["solidity"],
            theme: prismReactRenderer.themes.github,
        },
        // algolia: {
        //     apiKey: "882821d106ded887254b7b5ec5690c5b", //Change to one of tcap
        //     indexName: "liliot_wiki",
        // },
        navbar: {
            title: "Documentation",
            logo: {
                alt: "Tcap Icon",
                src: "img/logo.svg",
            },
            items: [
                {
                    to: "/faq",
                    activeBasePath: "docs",
                    label: "FAQ",
                    position: "right",
                },
                {
                    href: "https://medium.com/cryptexfinance",
                    label: "Blog",
                    position: "right",
                },
                {
                    href: "https://github.com/cryptexfinance",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [],
            logo: {
                alt: "Cryptex Logo",
                src: "img/logo.svg",
            },
            copyright: `Copyright © ${new Date().getFullYear()} Cryptex Finance.`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [[rehypeKatex, { strict: false }]],
                    routeBasePath: "/",

                    // Please change this to your repo.
                    // editUrl:
                    //   "https://github.com/facebook/docusaurus/edit/master/website/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                sitemap: {
                    changefreq: "weekly",
                    priority: 0.5,
                },
            },
        ],
    ],
    stylesheets: [
        {
            href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
            type: 'text/css',
            integrity:
            'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
            crossorigin: 'anonymous',
        },
    ],
};

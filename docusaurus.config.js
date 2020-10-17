const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

module.exports = {
  title: "Cryptex",
  tagline: "The first total market cap token",
  url: "https://cryptex.finance",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.png",
  organizationName: "cryptex", // Usually your GitHub org/user name.
  projectName: "tcap", // Usually your repo name.
  themeConfig: {
    prism: {
      additionalLanguages: ["solidity"],
      theme: require("prism-react-renderer/themes/synthwave84"),
    },
    algolia: {
      apiKey: "882821d106ded887254b7b5ec5690c5b", //Change to one of tcap
      indexName: "liliot_wiki",
    },
    navbar: {
      title: "TCAP Documentation",
      logo: {
        alt: "Tcap Icon",
        src: "img/tcap-icon-white.png",
      },
      items: [
        {
          to: "/faq",
          activeBasePath: "docs",
          label: "FAQ",
          position: "right",
        },
        {
          href: "https://medium.com/cryptexglobal",
          label: "Blog",
          position: "right",
        },
        {
          href: "https://github.com/cryptexglobal",
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
        src: "img/Logo.png",
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
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
};

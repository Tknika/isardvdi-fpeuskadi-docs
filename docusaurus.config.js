// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IsardVDI FPEuskadi Docs',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tknika.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/isardvdi-fpeuskadi-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tknika', // Usually your GitHub org/user name.
  projectName: 'isardvdi-fpeuskadi-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/isardvdi.png',
      navbar: {
        title: 'IsardVDI FPEuskadi',
        logo: {
          alt: 'IsardVDI Logo',
          src: 'img/isardvdi.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/Tknika/isardvdi-fpeuskadi-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Official docs',
                href: 'https://isard.gitlab.io/isardvdi-docs/'
              }
            ],
          },
          {
            title: 'Moodle',
            items: [
              {
                label: 'Mahaigain birtualetara sarrera',
                href: 'https://ikastaroak.tknika.eus/course/view.php?id=140',
              },
              {
                label: 'Mahaingain birtualen oinarrizko erabilera',
                href: 'https://ikastaroak.tknika.eus/course/view.php?id=155',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Tknika/isardvdi-fpeuskadi-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tknika`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

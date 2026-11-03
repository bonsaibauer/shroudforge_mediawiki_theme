import { defineConfig } from "vitepress";
import { execFileSync } from "node:child_process";
import { routex } from "@itznotabug/routex";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import llmstxt, { copyOrDownloadAsMarkdownButtons } from "vitepress-plugin-llms";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";
import { preferencesReferencePlugin } from "../scripts/generate-preferences-reference.js";

const BASE_URL = process.env.BASE_URL ?? "/",
	SITE_ORIGIN = process.env.SITE_ORIGIN ?? "https://shroudforge.net";
const DOCS_BRANCH = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF_NAME || execFileSync("git", ["branch", "--show-current"], { encoding: "utf8" }).trim();

function withBase(path: string): string {
	return `${BASE_URL}${path}`.replaceAll(/\/+/g, "/");
}

const redirects = {
	"/customization/features": withBase("/reference/classes"),
	"/features/": withBase("/reference/classes"),
	"/customization/utility-classes": withBase("/reference/classes"),
	"/customization/hooks": withBase("/reference/hooks"),
	"/customization/command-palette": withBase("/features/command-palette"),
	"/customization/performance-mode": withBase("/features/performance-mode"),
	"/customization/preferences": withBase("/features/preferences"),
	"/customization/share": withBase("/features/share"),
};

export default defineConfig({
	base: BASE_URL,
	title: "ShroudForge",
	description: "Documentation for the ShroudForge MediaWiki skin",
	srcDir: "src",
	cleanUrls: true,
	lastUpdated: true,
	sitemap: {
		hostname: new URL(BASE_URL, SITE_ORIGIN).href,
	},
	themeConfig: {
		logo: "/img/shroudforge-mark.png",
		outline: [2, 3],
		nav: [
			{
				text: "Guide",
				link: "/guide/introduction",
			},
			{
				text: "Resources",
				items: [
					{
						text: "Releases",
						link: "https://github.com/bonsaibauer/shroudforge_wikijs_theme/releases",
						target: "_blank",
					},
					{
						text: "Changelogs",
						link: "/changelogs/",
						activeMatch: "/changelogs/",
					},
				],
			},
		],

		sidebar: [
			{
				text: "Guide",
				collapsed: false,
				items: [
					{
						text: "Introduction",
						link: "/guide/introduction",
					},
					{
						text: "Installation",
						link: "/guide/installation",
					},
					{
						text: "Upgrading",
						link: "/guide/upgrading",
					},
				],
			},
			{
				text: "Configuration",
				collapsed: false,
				items: [
					{
						text: "Skin",
						link: "/config/",
					},
					{
						text: "Extensions and gadgets",
						link: "/config/extensions",
					},
				],
			},
			{
				text: "Features",
				collapsed: false,
				items: [
					{
						text: "Command palette",
						link: "/features/command-palette",
					},
					{
						text: "Overflow handling",
						link: "/features/overflow",
					},
					{
						text: "Performance mode",
						link: "/features/performance-mode",
					},
					{
						text: "Preferences",
						link: "/features/preferences",
					},
					{
						text: "Progressive web app",
						link: "/features/progressive-web-app",
					},
					{
						text: "Share",
						link: "/features/share",
					},
					{
						text: "Side column",
						link: "/features/side-column",
					},
				],
			},
			{
				text: "Customization",
				collapsed: false,
				items: [
					{
						text: "Theming",
						link: "/customization/theming",
					},
					{
						text: "Recipes",
						link: "/customization/recipes",
					},
				],
			},
			{
				text: "Reference",
				collapsed: false,
				items: [
					{
						text: "Classes",
						link: "/reference/classes",
					},
					{
						text: "Hooks",
						link: "/reference/hooks",
					},
				],
			},
			{
				text: "Project",
				items: [
					{
						text: "Changelogs",
						link: "/changelogs/",
					},
					{
						text: "Migrating the token pipeline",
						link: "/guide/migrating-to-citizen-4",
					},
					{
						text: "Contribute",
						link: "/contribute/",
					},
					{
						text: "Preview channel",
						link: "/contribute/preview-channel",
					},
				],
			},
		],

		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/bonsaibauer/shroudforge_wikijs_theme",
				ariaLabel: "GitHub repository",
			},
			{
				icon: "discord",
				link: "https://discord.com/invite/jH2gNJYnt2",
				ariaLabel: "Discord server",
			},
			{
				icon: {
					// From codex-icons
					svg: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><!----><g><g xmlns:xlink="http://www.w3.org/1999/xlink" transform="translate(10 10)"><g id="cdx-icon-logo-MediaWiki-b"><path id="cdx-icon-logo-MediaWiki-a" d="M0 10c-2.9-3.3-.8-5.9 0-5.9S2.9 6.7 0 10"></path><use xlink:href="#cdx-icon-logo-MediaWiki-a" transform="rotate(15)"></use><use xlink:href="#cdx-icon-logo-MediaWiki-a" transform="rotate(30)"></use><use xlink:href="#cdx-icon-logo-MediaWiki-a" transform="rotate(45)"></use><use xlink:href="#cdx-icon-logo-MediaWiki-a" transform="rotate(60)"></use><use xlink:href="#cdx-icon-logo-MediaWiki-a" transform="rotate(75)"></use></g><use xlink:href="#cdx-icon-logo-MediaWiki-b" transform="rotate(90)"></use><use xlink:href="#cdx-icon-logo-MediaWiki-b" transform="rotate(180)"></use><use xlink:href="#cdx-icon-logo-MediaWiki-b" transform="rotate(270)"></use></g></g></svg>',
				},
				link: "https://shroudforge.net",
				ariaLabel: "ShroudForge website",
			},
		],

		search:
			process.env.ALGOLIA_APP_ID &&
			process.env.ALGOLIA_API_KEY &&
			process.env.ALGOLIA_INDEX_NAME
				? {
						provider: "algolia",
						options: {
							appId: process.env.ALGOLIA_APP_ID,
							apiKey: process.env.ALGOLIA_API_KEY,
							indexName: process.env.ALGOLIA_INDEX_NAME,
						},
					}
				: { provider: "local" },

		editLink: {
			pattern:
				`https://github.com/bonsaibauer/shroudforge_wikijs_theme/edit/${DOCS_BRANCH}/docs/src/:path`,
			text: "Help us improve this page",
		},
	},
	markdown: {
		config: (md) => {
			md.use(groupIconMdPlugin);
			md.use(tabsMarkdownPlugin);
			md.use(copyOrDownloadAsMarkdownButtons);
		},
	},
	vite: {
		plugins: [
			preferencesReferencePlugin(),
			groupIconVitePlugin(),
			llmstxt(),
			routex({
				rules: redirects,
				options: { addCanonical: true, ignoreDeadLinks: true },
			}),
		],
	},
});

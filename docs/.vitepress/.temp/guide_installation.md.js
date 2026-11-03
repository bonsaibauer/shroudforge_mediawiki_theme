import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { createTextVNode, createVNode, resolveComponent, useSSRContext, withCtx } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
//#region src/guide/installation.md
var __pageData = JSON.parse("{\"title\":\"Installation\",\"description\":\"Installing the ShroudForge skin to your wiki\",\"frontmatter\":{\"title\":\"Installation\",\"description\":\"Installing the ShroudForge skin to your wiki\"},\"headers\":[],\"relativePath\":\"guide/installation.md\",\"filePath\":\"guide/installation.md\",\"lastUpdated\":0}");
var _sfc_main = { name: "guide/installation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_CopyOrDownloadAsMarkdownButtons = resolveComponent("CopyOrDownloadAsMarkdownButtons");
	const _component_PluginTabs = resolveComponent("PluginTabs");
	const _component_PluginTabsTab = resolveComponent("PluginTabsTab");
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to “Installation”">​</a></h1>`);
	_push(ssrRenderComponent(_component_CopyOrDownloadAsMarkdownButtons, null, null, _parent));
	_push(`<p>Install ShroudForge in your MediaWiki <code>skins/</code> directory, then enable it in <code>LocalSettings.php</code>.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to “Requirements”">​</a></h2><ul><li><a href="https://www.mediawiki.org" target="_blank" rel="noreferrer">MediaWiki</a> 1.43.0 or later</li></ul><details class="details custom-block"><summary>Using older versions of MediaWiki?</summary><p>This ShroudForge release supports MediaWiki 1.43.0 and later.</p></details><h2 id="get-the-skin" tabindex="-1">Get the skin <a class="header-anchor" href="#get-the-skin" aria-label="Permalink to “Get the skin”">​</a></h2>`);
	_push(ssrRenderComponent(_component_PluginTabs, null, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(ssrRenderComponent(_component_PluginTabsTab, { label: "Manual" }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<ol${_scopeId}><li${_scopeId}>Download <code${_scopeId}>shroudforge-&lt;version&gt;-&lt;build-id&gt;.zip</code> from the latest stable build in <a href="https://github.com/bonsaibauer/shroudforge_wikijs_theme/releases" target="_blank" rel="noreferrer"${_scopeId}>GitHub Releases</a>.</li><li${_scopeId}>Extract the included <code${_scopeId}>ShroudForge</code> directory into your <code${_scopeId}>skins/</code> folder.</li></ol><div class="language-text"${_scopeId}><button title="Copy code" data-copied="Copied" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>text</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						})}" tabindex="0" dir="ltr"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span${_scopeId}>mediawiki/</span></span>
<span class="line"${_scopeId}><span${_scopeId}>└── skins/</span></span>
<span class="line"${_scopeId}><span${_scopeId}>    └── ShroudForge/</span></span>
<span class="line"${_scopeId}><span${_scopeId}>        ├── skin.json</span></span>
<span class="line"${_scopeId}><span${_scopeId}>        ├── i18n/</span></span>
<span class="line"${_scopeId}><span${_scopeId}>        ├── includes/</span></span>
<span class="line"${_scopeId}><span${_scopeId}>        ├── resources/</span></span>
<span class="line"${_scopeId}><span${_scopeId}>        └── ...</span></span></code></pre></div>`);
						else return [createVNode("ol", null, [createVNode("li", null, [
							createTextVNode("Download "),
							createVNode("code", null, "shroudforge-<version>-<build-id>.zip"),
							createTextVNode(" from the latest stable build in "),
							createVNode("a", {
								href: "https://github.com/bonsaibauer/shroudforge_wikijs_theme/releases",
								target: "_blank",
								rel: "noreferrer"
							}, "GitHub Releases"),
							createTextVNode(".")
						]), createVNode("li", null, [
							createTextVNode("Extract the included "),
							createVNode("code", null, "ShroudForge"),
							createTextVNode(" directory into your "),
							createVNode("code", null, "skins/"),
							createTextVNode(" folder.")
						])]), createVNode("div", { class: "language-text" }, [
							createVNode("button", {
								title: "Copy code",
								"data-copied": "Copied",
								class: "copy"
							}),
							createVNode("span", { class: "lang" }, "text"),
							createVNode("pre", {
								class: "shiki shiki-themes github-light github-dark",
								style: {
									"--shiki-light": "#24292e",
									"--shiki-dark": "#e1e4e8",
									"--shiki-light-bg": "#fff",
									"--shiki-dark-bg": "#24292e"
								},
								tabindex: "0",
								dir: "ltr"
							}, [createVNode("code", null, [
								createVNode("span", { class: "line" }, [createVNode("span", null, "mediawiki/")]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [createVNode("span", null, "└── skins/")]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [createVNode("span", null, "    └── ShroudForge/")]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [createVNode("span", null, "        ├── skin.json")]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [createVNode("span", null, "        ├── i18n/")]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [createVNode("span", null, "        ├── includes/")]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [createVNode("span", null, "        ├── resources/")]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [createVNode("span", null, "        └── ...")])
							])])
						])];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_PluginTabsTab, { label: "Composer" }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<p${_scopeId}>Run the following commands in the root of your MediaWiki installation. They read the repository&#39;s current default branch and require it to use the <code${_scopeId}>MAJOR.MINOR.PATCH</code> naming scheme:</p><div class="language-bash"${_scopeId}><button title="Copy code" data-copied="Copied" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>bash</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						})}" tabindex="0" dir="ltr"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>REPOSITORY</span><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}>=</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}>https://github.com/bonsaibauer/shroudforge_wikijs_theme.git</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>BRANCH</span><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}>=</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>\$(</span><span style="${ssrRenderStyle({
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						})}"${_scopeId}>git</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> ls-remote</span><span style="${ssrRenderStyle({
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						})}"${_scopeId}> --symref</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> &quot;</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>\$REPOSITORY</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> HEAD</span><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}> |</span><span style="${ssrRenderStyle({
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						})}"${_scopeId}> awk</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> &#39;\$1 == &quot;ref:&quot; &amp;&amp; \$3 == &quot;HEAD&quot; { sub(&quot;refs/heads/&quot;, &quot;&quot;, \$2); print \$2 }&#39;</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>)</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}>if</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}> [[ </span><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}>!</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> &quot;</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>\$BRANCH</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}>&quot;</span><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}> =~</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}> ^[0-9]+</span><span style="${ssrRenderStyle({
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						})}"${_scopeId}>\\.</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>[0-9]+</span><span style="${ssrRenderStyle({
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						})}"${_scopeId}>\\.</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>[0-9]+\$ ]]; </span><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}>then</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						})}"${_scopeId}>  echo</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> &quot;The repository default branch must be named MAJOR.MINOR.PATCH.&quot;</span><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}> &gt;&amp;2</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						})}"${_scopeId}>  exit</span><span style="${ssrRenderStyle({
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						})}"${_scopeId}> 1</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}>fi</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>COMPOSER</span><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}>=</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}>composer.local.json</span><span style="${ssrRenderStyle({
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						})}"${_scopeId}> composer</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> config</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> repositories.shroudforge</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> vcs</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> &quot;</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>\$REPOSITORY</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}>&quot;</span></span>
<span class="line"${_scopeId}><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>COMPOSER</span><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}>=</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}>composer.local.json</span><span style="${ssrRenderStyle({
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						})}"${_scopeId}> composer</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> require</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> &quot;bonsaibauer/shroudforge-mediawiki-skin:\${</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>BRANCH</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}>}.x-dev&quot;</span></span></code></pre></div><p${_scopeId}>Set the repository&#39;s default branch to the active version branch. Composer derives its branch constraint from that setting, so the instructions follow the current version as it changes. For a fixed stable build, use the <strong${_scopeId}>Manual</strong> download instead.</p>`);
						else return [
							createVNode("p", null, [
								createTextVNode("Run the following commands in the root of your MediaWiki installation. They read the repository's current default branch and require it to use the "),
								createVNode("code", null, "MAJOR.MINOR.PATCH"),
								createTextVNode(" naming scheme:")
							]),
							createVNode("div", { class: "language-bash" }, [
								createVNode("button", {
									title: "Copy code",
									"data-copied": "Copied",
									class: "copy"
								}),
								createVNode("span", { class: "lang" }, "bash"),
								createVNode("pre", {
									class: "shiki shiki-themes github-light github-dark",
									style: {
										"--shiki-light": "#24292e",
										"--shiki-dark": "#e1e4e8",
										"--shiki-light-bg": "#fff",
										"--shiki-dark-bg": "#24292e"
									},
									tabindex: "0",
									dir: "ltr"
								}, [createVNode("code", null, [
									createVNode("span", { class: "line" }, [
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "REPOSITORY"),
										createVNode("span", { style: {
											"--shiki-light": "#c62739",
											"--shiki-dark": "#F97583"
										} }, "="),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, "https://github.com/bonsaibauer/shroudforge_wikijs_theme.git")
									]),
									createTextVNode("\n"),
									createVNode("span", { class: "line" }, [
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "BRANCH"),
										createVNode("span", { style: {
											"--shiki-light": "#c62739",
											"--shiki-dark": "#F97583"
										} }, "="),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "$("),
										createVNode("span", { style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										} }, "git"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " ls-remote"),
										createVNode("span", { style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										} }, " --symref"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " \""),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "$REPOSITORY"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, "\""),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " HEAD"),
										createVNode("span", { style: {
											"--shiki-light": "#c62739",
											"--shiki-dark": "#F97583"
										} }, " |"),
										createVNode("span", { style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										} }, " awk"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " '$1 == \"ref:\" && $3 == \"HEAD\" { sub(\"refs/heads/\", \"\", $2); print $2 }'"),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, ")")
									]),
									createTextVNode("\n"),
									createVNode("span", { class: "line" }, [
										createVNode("span", { style: {
											"--shiki-light": "#c62739",
											"--shiki-dark": "#F97583"
										} }, "if"),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, " [[ "),
										createVNode("span", { style: {
											"--shiki-light": "#c62739",
											"--shiki-dark": "#F97583"
										} }, "!"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " \""),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "$BRANCH"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, "\""),
										createVNode("span", { style: {
											"--shiki-light": "#c62739",
											"--shiki-dark": "#F97583"
										} }, " =~"),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, " ^[0-9]+"),
										createVNode("span", { style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										} }, "\\."),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "[0-9]+"),
										createVNode("span", { style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										} }, "\\."),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "[0-9]+$ ]]; "),
										createVNode("span", { style: {
											"--shiki-light": "#c62739",
											"--shiki-dark": "#F97583"
										} }, "then")
									]),
									createTextVNode("\n"),
									createVNode("span", { class: "line" }, [
										createVNode("span", { style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										} }, "  echo"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " \"The repository default branch must be named MAJOR.MINOR.PATCH.\""),
										createVNode("span", { style: {
											"--shiki-light": "#c62739",
											"--shiki-dark": "#F97583"
										} }, " >&2")
									]),
									createTextVNode("\n"),
									createVNode("span", { class: "line" }, [createVNode("span", { style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									} }, "  exit"), createVNode("span", { style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									} }, " 1")]),
									createTextVNode("\n"),
									createVNode("span", { class: "line" }, [createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, "fi")]),
									createTextVNode("\n"),
									createVNode("span", { class: "line" }, [
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "COMPOSER"),
										createVNode("span", { style: {
											"--shiki-light": "#c62739",
											"--shiki-dark": "#F97583"
										} }, "="),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, "composer.local.json"),
										createVNode("span", { style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										} }, " composer"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " config"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " repositories.shroudforge"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " vcs"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " \""),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "$REPOSITORY"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, "\"")
									]),
									createTextVNode("\n"),
									createVNode("span", { class: "line" }, [
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "COMPOSER"),
										createVNode("span", { style: {
											"--shiki-light": "#c62739",
											"--shiki-dark": "#F97583"
										} }, "="),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, "composer.local.json"),
										createVNode("span", { style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										} }, " composer"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " require"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " \"bonsaibauer/shroudforge-mediawiki-skin:${"),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "BRANCH"),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, "}.x-dev\"")
									])
								])])
							]),
							createVNode("p", null, [
								createTextVNode("Set the repository's default branch to the active version branch. Composer derives its branch constraint from that setting, so the instructions follow the current version as it changes. For a fixed stable build, use the "),
								createVNode("strong", null, "Manual"),
								createTextVNode(" download instead.")
							])
						];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_PluginTabsTab, { label: "Git" }, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`<p${_scopeId}>Run the following command in the root of your MediaWiki installation. It checks out the repository&#39;s current default branch, which should be the active version branch:</p><div class="language-sh"${_scopeId}><button title="Copy code" data-copied="Copied" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>sh</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						})}" tabindex="0" dir="ltr"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						})}"${_scopeId}>git</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> clone</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> https://github.com/bonsaibauer/shroudforge_wikijs_theme.git</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> skins/ShroudForge</span></span></code></pre></div><div class="tip custom-block"${_scopeId}><p class="custom-block-title"${_scopeId}>Note</p><p${_scopeId}>Using <code${_scopeId}>git</code> allows <code${_scopeId}>Special:Version</code> to display the current commit ID. To link the commit ID to GitHub, add the following to your <code${_scopeId}>LocalSettings.php</code>:</p><div class="vp-code-block-title"${_scopeId}><div class="vp-code-block-title-bar"${_scopeId}><span class="vp-code-block-title-text" data-title="LocalSettings.php"${_scopeId}>LocalSettings.php</span></div><div class="language-php"${_scopeId}><button title="Copy code" data-copied="Copied" class="copy"${_scopeId}></button><span class="lang"${_scopeId}>php</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						})}" tabindex="0" dir="ltr"${_scopeId}><code${_scopeId}><span class="line"${_scopeId}><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>\$wgGitRepositoryViewers[</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}>&#39;https://github.com/(.*?)(.git)?&#39;</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>] </span><span style="${ssrRenderStyle({
							"--shiki-light": "#c62739",
							"--shiki-dark": "#F97583"
						})}"${_scopeId}>=</span><span style="${ssrRenderStyle({
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						})}"${_scopeId}> &#39;https://github.com/\$1/commit/%H&#39;</span><span style="${ssrRenderStyle({
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						})}"${_scopeId}>;</span></span></code></pre></div></div></div><div class="warning custom-block"${_scopeId}><p class="custom-block-title custom-block-title-default"${_scopeId}>WARNING</p><p${_scopeId}>The <code${_scopeId}>git</code> repository includes development files. For production environments where file size is a concern, consider using the <strong${_scopeId}>Manual</strong> or <strong${_scopeId}>Composer</strong> methods.</p></div>`);
						else return [
							createVNode("p", null, "Run the following command in the root of your MediaWiki installation. It checks out the repository's current default branch, which should be the active version branch:"),
							createVNode("div", { class: "language-sh" }, [
								createVNode("button", {
									title: "Copy code",
									"data-copied": "Copied",
									class: "copy"
								}),
								createVNode("span", { class: "lang" }, "sh"),
								createVNode("pre", {
									class: "shiki shiki-themes github-light github-dark",
									style: {
										"--shiki-light": "#24292e",
										"--shiki-dark": "#e1e4e8",
										"--shiki-light-bg": "#fff",
										"--shiki-dark-bg": "#24292e"
									},
									tabindex: "0",
									dir: "ltr"
								}, [createVNode("code", null, [createVNode("span", { class: "line" }, [
									createVNode("span", { style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									} }, "git"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " clone"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " https://github.com/bonsaibauer/shroudforge_wikijs_theme.git"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " skins/ShroudForge")
								])])])
							]),
							createVNode("div", { class: "tip custom-block" }, [
								createVNode("p", { class: "custom-block-title" }, "Note"),
								createVNode("p", null, [
									createTextVNode("Using "),
									createVNode("code", null, "git"),
									createTextVNode(" allows "),
									createVNode("code", null, "Special:Version"),
									createTextVNode(" to display the current commit ID. To link the commit ID to GitHub, add the following to your "),
									createVNode("code", null, "LocalSettings.php"),
									createTextVNode(":")
								]),
								createVNode("div", { class: "vp-code-block-title" }, [createVNode("div", { class: "vp-code-block-title-bar" }, [createVNode("span", {
									class: "vp-code-block-title-text",
									"data-title": "LocalSettings.php"
								}, "LocalSettings.php")]), createVNode("div", { class: "language-php" }, [
									createVNode("button", {
										title: "Copy code",
										"data-copied": "Copied",
										class: "copy"
									}),
									createVNode("span", { class: "lang" }, "php"),
									createVNode("pre", {
										class: "shiki shiki-themes github-light github-dark",
										style: {
											"--shiki-light": "#24292e",
											"--shiki-dark": "#e1e4e8",
											"--shiki-light-bg": "#fff",
											"--shiki-dark-bg": "#24292e"
										},
										tabindex: "0",
										dir: "ltr"
									}, [createVNode("code", null, [createVNode("span", { class: "line" }, [
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "$wgGitRepositoryViewers["),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, "'https://github.com/(.*?)(.git)?'"),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, "] "),
										createVNode("span", { style: {
											"--shiki-light": "#c62739",
											"--shiki-dark": "#F97583"
										} }, "="),
										createVNode("span", { style: {
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										} }, " 'https://github.com/$1/commit/%H'"),
										createVNode("span", { style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										} }, ";")
									])])])
								])])
							]),
							createVNode("div", { class: "warning custom-block" }, [createVNode("p", { class: "custom-block-title custom-block-title-default" }, "WARNING"), createVNode("p", null, [
								createTextVNode("The "),
								createVNode("code", null, "git"),
								createTextVNode(" repository includes development files. For production environments where file size is a concern, consider using the "),
								createVNode("strong", null, "Manual"),
								createTextVNode(" or "),
								createVNode("strong", null, "Composer"),
								createTextVNode(" methods.")
							])])
						];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				createVNode(_component_PluginTabsTab, { label: "Manual" }, {
					default: withCtx(() => [createVNode("ol", null, [createVNode("li", null, [
						createTextVNode("Download "),
						createVNode("code", null, "shroudforge-<version>-<build-id>.zip"),
						createTextVNode(" from the latest stable build in "),
						createVNode("a", {
							href: "https://github.com/bonsaibauer/shroudforge_wikijs_theme/releases",
							target: "_blank",
							rel: "noreferrer"
						}, "GitHub Releases"),
						createTextVNode(".")
					]), createVNode("li", null, [
						createTextVNode("Extract the included "),
						createVNode("code", null, "ShroudForge"),
						createTextVNode(" directory into your "),
						createVNode("code", null, "skins/"),
						createTextVNode(" folder.")
					])]), createVNode("div", { class: "language-text" }, [
						createVNode("button", {
							title: "Copy code",
							"data-copied": "Copied",
							class: "copy"
						}),
						createVNode("span", { class: "lang" }, "text"),
						createVNode("pre", {
							class: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabindex: "0",
							dir: "ltr"
						}, [createVNode("code", null, [
							createVNode("span", { class: "line" }, [createVNode("span", null, "mediawiki/")]),
							createTextVNode("\n"),
							createVNode("span", { class: "line" }, [createVNode("span", null, "└── skins/")]),
							createTextVNode("\n"),
							createVNode("span", { class: "line" }, [createVNode("span", null, "    └── ShroudForge/")]),
							createTextVNode("\n"),
							createVNode("span", { class: "line" }, [createVNode("span", null, "        ├── skin.json")]),
							createTextVNode("\n"),
							createVNode("span", { class: "line" }, [createVNode("span", null, "        ├── i18n/")]),
							createTextVNode("\n"),
							createVNode("span", { class: "line" }, [createVNode("span", null, "        ├── includes/")]),
							createTextVNode("\n"),
							createVNode("span", { class: "line" }, [createVNode("span", null, "        ├── resources/")]),
							createTextVNode("\n"),
							createVNode("span", { class: "line" }, [createVNode("span", null, "        └── ...")])
						])])
					])]),
					_: 1
				}),
				createVNode(_component_PluginTabsTab, { label: "Composer" }, {
					default: withCtx(() => [
						createVNode("p", null, [
							createTextVNode("Run the following commands in the root of your MediaWiki installation. They read the repository's current default branch and require it to use the "),
							createVNode("code", null, "MAJOR.MINOR.PATCH"),
							createTextVNode(" naming scheme:")
						]),
						createVNode("div", { class: "language-bash" }, [
							createVNode("button", {
								title: "Copy code",
								"data-copied": "Copied",
								class: "copy"
							}),
							createVNode("span", { class: "lang" }, "bash"),
							createVNode("pre", {
								class: "shiki shiki-themes github-light github-dark",
								style: {
									"--shiki-light": "#24292e",
									"--shiki-dark": "#e1e4e8",
									"--shiki-light-bg": "#fff",
									"--shiki-dark-bg": "#24292e"
								},
								tabindex: "0",
								dir: "ltr"
							}, [createVNode("code", null, [
								createVNode("span", { class: "line" }, [
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "REPOSITORY"),
									createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, "="),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, "https://github.com/bonsaibauer/shroudforge_wikijs_theme.git")
								]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "BRANCH"),
									createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, "="),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "$("),
									createVNode("span", { style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									} }, "git"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " ls-remote"),
									createVNode("span", { style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									} }, " --symref"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " \""),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "$REPOSITORY"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, "\""),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " HEAD"),
									createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, " |"),
									createVNode("span", { style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									} }, " awk"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " '$1 == \"ref:\" && $3 == \"HEAD\" { sub(\"refs/heads/\", \"\", $2); print $2 }'"),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, ")")
								]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [
									createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, "if"),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, " [[ "),
									createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, "!"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " \""),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "$BRANCH"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, "\""),
									createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, " =~"),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, " ^[0-9]+"),
									createVNode("span", { style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									} }, "\\."),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "[0-9]+"),
									createVNode("span", { style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									} }, "\\."),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "[0-9]+$ ]]; "),
									createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, "then")
								]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [
									createVNode("span", { style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									} }, "  echo"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " \"The repository default branch must be named MAJOR.MINOR.PATCH.\""),
									createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, " >&2")
								]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [createVNode("span", { style: {
									"--shiki-light": "#005CC5",
									"--shiki-dark": "#79B8FF"
								} }, "  exit"), createVNode("span", { style: {
									"--shiki-light": "#005CC5",
									"--shiki-dark": "#79B8FF"
								} }, " 1")]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [createVNode("span", { style: {
									"--shiki-light": "#c62739",
									"--shiki-dark": "#F97583"
								} }, "fi")]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "COMPOSER"),
									createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, "="),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, "composer.local.json"),
									createVNode("span", { style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									} }, " composer"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " config"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " repositories.shroudforge"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " vcs"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " \""),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "$REPOSITORY"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, "\"")
								]),
								createTextVNode("\n"),
								createVNode("span", { class: "line" }, [
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "COMPOSER"),
									createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, "="),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, "composer.local.json"),
									createVNode("span", { style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									} }, " composer"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " require"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " \"bonsaibauer/shroudforge-mediawiki-skin:${"),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "BRANCH"),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, "}.x-dev\"")
								])
							])])
						]),
						createVNode("p", null, [
							createTextVNode("Set the repository's default branch to the active version branch. Composer derives its branch constraint from that setting, so the instructions follow the current version as it changes. For a fixed stable build, use the "),
							createVNode("strong", null, "Manual"),
							createTextVNode(" download instead.")
						])
					]),
					_: 1
				}),
				createVNode(_component_PluginTabsTab, { label: "Git" }, {
					default: withCtx(() => [
						createVNode("p", null, "Run the following command in the root of your MediaWiki installation. It checks out the repository's current default branch, which should be the active version branch:"),
						createVNode("div", { class: "language-sh" }, [
							createVNode("button", {
								title: "Copy code",
								"data-copied": "Copied",
								class: "copy"
							}),
							createVNode("span", { class: "lang" }, "sh"),
							createVNode("pre", {
								class: "shiki shiki-themes github-light github-dark",
								style: {
									"--shiki-light": "#24292e",
									"--shiki-dark": "#e1e4e8",
									"--shiki-light-bg": "#fff",
									"--shiki-dark-bg": "#24292e"
								},
								tabindex: "0",
								dir: "ltr"
							}, [createVNode("code", null, [createVNode("span", { class: "line" }, [
								createVNode("span", { style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								} }, "git"),
								createVNode("span", { style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								} }, " clone"),
								createVNode("span", { style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								} }, " https://github.com/bonsaibauer/shroudforge_wikijs_theme.git"),
								createVNode("span", { style: {
									"--shiki-light": "#032F62",
									"--shiki-dark": "#9ECBFF"
								} }, " skins/ShroudForge")
							])])])
						]),
						createVNode("div", { class: "tip custom-block" }, [
							createVNode("p", { class: "custom-block-title" }, "Note"),
							createVNode("p", null, [
								createTextVNode("Using "),
								createVNode("code", null, "git"),
								createTextVNode(" allows "),
								createVNode("code", null, "Special:Version"),
								createTextVNode(" to display the current commit ID. To link the commit ID to GitHub, add the following to your "),
								createVNode("code", null, "LocalSettings.php"),
								createTextVNode(":")
							]),
							createVNode("div", { class: "vp-code-block-title" }, [createVNode("div", { class: "vp-code-block-title-bar" }, [createVNode("span", {
								class: "vp-code-block-title-text",
								"data-title": "LocalSettings.php"
							}, "LocalSettings.php")]), createVNode("div", { class: "language-php" }, [
								createVNode("button", {
									title: "Copy code",
									"data-copied": "Copied",
									class: "copy"
								}),
								createVNode("span", { class: "lang" }, "php"),
								createVNode("pre", {
									class: "shiki shiki-themes github-light github-dark",
									style: {
										"--shiki-light": "#24292e",
										"--shiki-dark": "#e1e4e8",
										"--shiki-light-bg": "#fff",
										"--shiki-dark-bg": "#24292e"
									},
									tabindex: "0",
									dir: "ltr"
								}, [createVNode("code", null, [createVNode("span", { class: "line" }, [
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "$wgGitRepositoryViewers["),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, "'https://github.com/(.*?)(.git)?'"),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, "] "),
									createVNode("span", { style: {
										"--shiki-light": "#c62739",
										"--shiki-dark": "#F97583"
									} }, "="),
									createVNode("span", { style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									} }, " 'https://github.com/$1/commit/%H'"),
									createVNode("span", { style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									} }, ";")
								])])])
							])])
						]),
						createVNode("div", { class: "warning custom-block" }, [createVNode("p", { class: "custom-block-title custom-block-title-default" }, "WARNING"), createVNode("p", null, [
							createTextVNode("The "),
							createVNode("code", null, "git"),
							createTextVNode(" repository includes development files. For production environments where file size is a concern, consider using the "),
							createVNode("strong", null, "Manual"),
							createTextVNode(" or "),
							createVNode("strong", null, "Composer"),
							createTextVNode(" methods.")
						])])
					]),
					_: 1
				})
			];
		}),
		_: 1
	}, _parent));
	_push(`<h2 id="activate" tabindex="-1">Activate <a class="header-anchor" href="#activate" aria-label="Permalink to “Activate”">​</a></h2><p>To enable the skin, add this to your <code>LocalSettings.php</code>:</p><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="LocalSettings.php">LocalSettings.php</span></div><div class="language-php"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({
		"--shiki-light": "#24292e",
		"--shiki-dark": "#e1e4e8",
		"--shiki-light-bg": "#fff",
		"--shiki-dark-bg": "#24292e"
	})}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({
		"--shiki-light": "#6F42C1",
		"--shiki-dark": "#B392F0"
	})}">wfLoadSkin</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">( </span><span style="${ssrRenderStyle({
		"--shiki-light": "#032F62",
		"--shiki-dark": "#9ECBFF"
	})}">&#39;ShroudForge&#39;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}"> );</span></span></code></pre></div></div><p>Head over to <code>Special:Version</code> to verify that the skin is successfully enabled.</p><h2 id="configure" tabindex="-1">Configure <a class="header-anchor" href="#configure" aria-label="Permalink to “Configure”">​</a></h2><h3 id="set-as-default" tabindex="-1">Set as default <a class="header-anchor" href="#set-as-default" aria-label="Permalink to “Set as default”">​</a></h3><p>To set ShroudForge as the wiki&#39;s default skin, add this to your <code>LocalSettings.php</code>:</p><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="LocalSettings.php">LocalSettings.php</span></div><div class="language-php"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({
		"--shiki-light": "#24292e",
		"--shiki-dark": "#e1e4e8",
		"--shiki-light-bg": "#fff",
		"--shiki-dark-bg": "#24292e"
	})}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">\$wgDefaultSkin </span><span style="${ssrRenderStyle({
		"--shiki-light": "#c62739",
		"--shiki-dark": "#F97583"
	})}">=</span><span style="${ssrRenderStyle({
		"--shiki-light": "#032F62",
		"--shiki-dark": "#9ECBFF"
	})}"> &#39;shroudforge&#39;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">;</span></span></code></pre></div></div><h3 id="next-steps" tabindex="-1">Next steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to “Next steps”">​</a></h3><p>ShroudForge uses its dark palette by default. Set the site name and bundled logo in <code>LocalSettings.php</code> to apply the complete brand:</p><div class="vp-code-block-title"><div class="vp-code-block-title-bar"><span class="vp-code-block-title-text" data-title="LocalSettings.php">LocalSettings.php</span></div><div class="language-php"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({
		"--shiki-light": "#24292e",
		"--shiki-dark": "#e1e4e8",
		"--shiki-light-bg": "#fff",
		"--shiki-dark-bg": "#24292e"
	})}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">\$wgSitename </span><span style="${ssrRenderStyle({
		"--shiki-light": "#c62739",
		"--shiki-dark": "#F97583"
	})}">=</span><span style="${ssrRenderStyle({
		"--shiki-light": "#032F62",
		"--shiki-dark": "#9ECBFF"
	})}"> &#39;ShroudForge&#39;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">\$wgFavicon </span><span style="${ssrRenderStyle({
		"--shiki-light": "#c62739",
		"--shiki-dark": "#F97583"
	})}">=</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}"> \$wgScriptPath </span><span style="${ssrRenderStyle({
		"--shiki-light": "#c62739",
		"--shiki-dark": "#F97583"
	})}">.</span><span style="${ssrRenderStyle({
		"--shiki-light": "#032F62",
		"--shiki-dark": "#9ECBFF"
	})}"> &#39;/skins/ShroudForge/resources/brand/shroudforge-favicon.ico&#39;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">;</span></span>
<span class="line"><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">\$wgLogos </span><span style="${ssrRenderStyle({
		"--shiki-light": "#c62739",
		"--shiki-dark": "#F97583"
	})}">=</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}"> [</span></span>
<span class="line"><span style="${ssrRenderStyle({
		"--shiki-light": "#032F62",
		"--shiki-dark": "#9ECBFF"
	})}">    &#39;icon&#39;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#c62739",
		"--shiki-dark": "#F97583"
	})}"> =&gt;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}"> \$wgScriptPath </span><span style="${ssrRenderStyle({
		"--shiki-light": "#c62739",
		"--shiki-dark": "#F97583"
	})}">.</span><span style="${ssrRenderStyle({
		"--shiki-light": "#032F62",
		"--shiki-dark": "#9ECBFF"
	})}"> &#39;/skins/ShroudForge/resources/brand/shroudforge-mark.png&#39;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">,</span></span>
<span class="line"><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">];</span></span></code></pre></div></div><p>The skin works without additional configuration, and you can customize it further:</p><ul><li><strong><a href="./../config/">Skin configuration</a></strong>: Tweak colors, layout, and features.</li><li><strong><a href="./../config/extensions">Extension support</a></strong>: Configure the skin&#39;s support for popular extensions.</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/installation.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var installation_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, installation_default as default };

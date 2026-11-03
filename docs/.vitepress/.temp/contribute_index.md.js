import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
//#region src/contribute/index.md
var __pageData = JSON.parse("{\"title\":\"Contribute\",\"description\":\"How to contribute to the ShroudForge skin.\",\"frontmatter\":{\"title\":\"Contribute\",\"description\":\"How to contribute to the ShroudForge skin.\"},\"headers\":[],\"relativePath\":\"contribute/index.md\",\"filePath\":\"contribute/index.md\",\"lastUpdated\":0}");
var _sfc_main = { name: "contribute/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_CopyOrDownloadAsMarkdownButtons = resolveComponent("CopyOrDownloadAsMarkdownButtons");
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="contributing-to-shroudforge" tabindex="-1">Contributing to ShroudForge <a class="header-anchor" href="#contributing-to-shroudforge" aria-label="Permalink to “Contributing to ShroudForge”">​</a></h1>`);
	_push(ssrRenderComponent(_component_CopyOrDownloadAsMarkdownButtons, null, null, _parent));
	_push(`<p>Thank you for helping improve the ShroudForge MediaWiki skin.</p><h2 id="report-an-issue" tabindex="-1">Report an issue <a class="header-anchor" href="#report-an-issue" aria-label="Permalink to “Report an issue”">​</a></h2><p>Open a <a href="https://github.com/bonsaibauer/shroudforge_wikijs_theme/issues/new?template=bug_report.yml" target="_blank" rel="noreferrer">bug report</a> or a <a href="https://github.com/bonsaibauer/shroudforge_wikijs_theme/issues/new?template=feature_request.yml" target="_blank" rel="noreferrer">feature request</a>. For code and documentation changes, open a pull request in this repository.</p><h2 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-label="Permalink to “Development”">​</a></h2><p>The skin targets MediaWiki 1.43 and newer. Install the Node dependencies with <code>npm ci</code>, then run the relevant checks listed in the root <code>AGENTS.md</code>. PHP checks require a MediaWiki checkout.</p><p>The manual and development release process is described in the root <code>README.md</code>.</p><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to “License”">​</a></h2><p>Contributions must follow the GPL-3.0-or-later license and respect the upstream Citizen attribution in the root <code>CREDITS.md</code>.</p><h2 id="documentation-previews" tabindex="-1">Documentation previews <a class="header-anchor" href="#documentation-previews" aria-label="Permalink to “Documentation previews”">​</a></h2><p>Every pull request that changes the documentation gets its own live preview site — a bot comments on the PR with the link shortly after you push, and the preview updates on every subsequent push. No local setup needed to see your changes rendered.</p><p>Previews are built for branches in this repository. Pull requests from forks still run the documentation lint and build checks, but don&#39;t get a preview link.</p></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("contribute/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contribute_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, contribute_default as default };

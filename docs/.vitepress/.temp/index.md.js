import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
//#region src/index.md
var __pageData = JSON.parse("{\"title\":\"\",\"description\":\"\",\"frontmatter\":{\"layout\":\"home\",\"hero\":{\"name\":\"ShroudForge\",\"text\":\"ShroudForge, in every page\",\"tagline\":\"A responsive MediaWiki skin styled for ShroudForge\",\"actions\":[{\"text\":\"Get started\",\"link\":\"/guide/installation\"},{\"theme\":\"alt\",\"text\":\"See changes\",\"link\":\"/changelogs/\"},{\"theme\":\"alt\",\"text\":\"Customize the theme\",\"link\":\"/customization/theming\"}],\"image\":{\"src\":\"/img/shroudforge-mark.png\",\"alt\":\"ShroudForge hammer mark\"}},\"features\":[{\"icon\":\"📝\",\"title\":\"ShroudForge design\",\"details\":\"Dark navy surfaces, cyan accents, Inter typography and the ShroudForge hammer mark.\"},{\"icon\":\"🖌️\",\"title\":\"Built on Citizen\",\"details\":\"Responsive navigation, a command palette, reading preferences, and extension support.\"},{\"icon\":\"✨\",\"title\":\"Easy to install\",\"details\":\"Install the ShroudForge folder, enable the skin and set the bundled mark as your wiki logo.\"}]},\"headers\":[],\"relativePath\":\"index.md\",\"filePath\":\"index.md\",\"lastUpdated\":0}");
var _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({ "display": "none" })}" hidden data-nosnippet>Are you an LLM? View /llms.txt for optimized Markdown documentation, or /llms-full.txt for full documentation bundle</div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var src_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, src_default as default };

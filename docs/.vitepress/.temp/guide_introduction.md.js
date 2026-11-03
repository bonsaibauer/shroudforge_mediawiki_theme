import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { createTextVNode, createVNode, resolveComponent, useSSRContext, withCtx } from "vue";
import { ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
//#region /img/shroudforge-mark.png
var shroudforge_mark_default = "/img/shroudforge-mark.png";
//#endregion
//#region src/guide/introduction.md
var __pageData = JSON.parse("{\"title\":\"Introduction\",\"description\":\"Introduction to the ShroudForge skin\",\"frontmatter\":{\"title\":\"Introduction\",\"description\":\"Introduction to the ShroudForge skin\"},\"headers\":[],\"relativePath\":\"guide/introduction.md\",\"filePath\":\"guide/introduction.md\",\"lastUpdated\":0}");
var _sfc_main = { name: "guide/introduction.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_CopyOrDownloadAsMarkdownButtons = resolveComponent("CopyOrDownloadAsMarkdownButtons");
	const _component_LinkGrid = resolveComponent("LinkGrid");
	const _component_LinkCard = resolveComponent("LinkCard");
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to “Introduction”">​</a></h1>`);
	_push(ssrRenderComponent(_component_CopyOrDownloadAsMarkdownButtons, null, null, _parent));
	_push(`<p><img${ssrRenderAttr("src", shroudforge_mark_default)} alt="ShroudForge hammer mark" width="256" height="256"></p><p>ShroudForge is a responsive <a href="https://www.mediawiki.org">MediaWiki</a> skin styled with the dark navy, cyan accent, Inter typeface and hammer mark of <a href="https://shroudforge.net" target="_blank" rel="noreferrer">ShroudForge</a>. Its interface is based on the open-source <a href="https://mwcitizen.skin/" target="_blank" rel="noreferrer">Citizen skin</a>.</p><p>The skin keeps the features of its Citizen foundation while applying the ShroudForge visual design:</p>`);
	_push(ssrRenderComponent(_component_LinkGrid, null, {
		default: withCtx((_, _push, _parent, _scopeId) => {
			if (_push) {
				_push(ssrRenderComponent(_component_LinkCard, {
					title: "Responsive layout",
					href: "../customization/theming#layout"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` The skin is responsive and is able to adapt to different screen sizes. `);
						else return [createTextVNode(" The skin is responsive and is able to adapt to different screen sizes. ")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_LinkCard, {
					title: "Command palette",
					href: "../features/command-palette"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` The command palette offers a better search experience and support for custom commands. `);
						else return [createTextVNode(" The command palette offers a better search experience and support for custom commands. ")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_LinkCard, {
					title: "Theme modes",
					href: "../customization/theming#theme-modes"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Users can choose the light or dark appearance. `);
						else return [createTextVNode(" Users can choose the light or dark appearance. ")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_LinkCard, {
					title: "Cohesive extension styles",
					href: "../config/extensions"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Supported extensions blend with the skin&#39;s interface. `);
						else return [createTextVNode(" Supported extensions blend with the skin's interface. ")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_LinkCard, {
					title: "Extensible preferences",
					href: "../features/preferences"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Let users personalize their experience, and let gadgets add their own options. `);
						else return [createTextVNode(" Let users personalize their experience, and let gadgets add their own options. ")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_LinkCard, {
					title: "Collapsible sections",
					href: "../config/#wgcitizenenablecollapsiblesections"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Article sections on the wiki can be collapsed and expanded. `);
						else return [createTextVNode(" Article sections on the wiki can be collapsed and expanded. ")];
					}),
					_: 1
				}, _parent, _scopeId));
				_push(ssrRenderComponent(_component_LinkCard, {
					title: "Progressive web app",
					href: "../features/progressive-web-app"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(` Users can add their wiki to the home screen for an app-like experience. `);
						else return [createTextVNode(" Users can add their wiki to the home screen for an app-like experience. ")];
					}),
					_: 1
				}, _parent, _scopeId));
			} else return [
				createVNode(_component_LinkCard, {
					title: "Responsive layout",
					href: "../customization/theming#layout"
				}, {
					default: withCtx(() => [createTextVNode(" The skin is responsive and is able to adapt to different screen sizes. ")]),
					_: 1
				}),
				createVNode(_component_LinkCard, {
					title: "Command palette",
					href: "../features/command-palette"
				}, {
					default: withCtx(() => [createTextVNode(" The command palette offers a better search experience and support for custom commands. ")]),
					_: 1
				}),
				createVNode(_component_LinkCard, {
					title: "Theme modes",
					href: "../customization/theming#theme-modes"
				}, {
					default: withCtx(() => [createTextVNode(" Users can choose the light or dark appearance. ")]),
					_: 1
				}),
				createVNode(_component_LinkCard, {
					title: "Cohesive extension styles",
					href: "../config/extensions"
				}, {
					default: withCtx(() => [createTextVNode(" Supported extensions blend with the skin's interface. ")]),
					_: 1
				}),
				createVNode(_component_LinkCard, {
					title: "Extensible preferences",
					href: "../features/preferences"
				}, {
					default: withCtx(() => [createTextVNode(" Let users personalize their experience, and let gadgets add their own options. ")]),
					_: 1
				}),
				createVNode(_component_LinkCard, {
					title: "Collapsible sections",
					href: "../config/#wgcitizenenablecollapsiblesections"
				}, {
					default: withCtx(() => [createTextVNode(" Article sections on the wiki can be collapsed and expanded. ")]),
					_: 1
				}),
				createVNode(_component_LinkCard, {
					title: "Progressive web app",
					href: "../features/progressive-web-app"
				}, {
					default: withCtx(() => [createTextVNode(" Users can add their wiki to the home screen for an app-like experience. ")]),
					_: 1
				})
			];
		}),
		_: 1
	}, _parent));
	_push(`<p>ShroudForge is open source under GPL-3.0-or-later. The repository includes credits for the Citizen contributors and the ShroudForge adaptation.</p></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/introduction.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var introduction_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, introduction_default as default };

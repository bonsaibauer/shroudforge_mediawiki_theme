import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
//#region src/reference/classes.md
var __pageData = JSON.parse("{\"title\":\"Classes\",\"description\":\"The classes Citizen provides for formatting content and adding interactivity\",\"frontmatter\":{\"title\":\"Classes\",\"description\":\"The classes Citizen provides for formatting content and adding interactivity\"},\"headers\":[],\"relativePath\":\"reference/classes.md\",\"filePath\":\"reference/classes.md\",\"lastUpdated\":0}");
var _sfc_main = { name: "reference/classes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	const _component_CopyOrDownloadAsMarkdownButtons = resolveComponent("CopyOrDownloadAsMarkdownButtons");
	const _component_CopyCode = resolveComponent("CopyCode");
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="classes" tabindex="-1">Classes <a class="header-anchor" href="#classes" aria-label="Permalink to “Classes”">​</a></h1>`);
	_push(ssrRenderComponent(_component_CopyOrDownloadAsMarkdownButtons, null, null, _parent));
	_push(`<p>Citizen provides a set of classes you can add directly in wikitext, templates, and gadgets to format content and add interactivity, without writing custom CSS or JavaScript.</p><h2 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-label="Permalink to “Layout”">​</a></h2><p>Control the positioning and flow of your content.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Class</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
	_push(ssrRenderComponent(_component_CopyCode, { code: ".floatright" }, null, _parent));
	_push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Floats content to the right. Stacks vertically on small screens.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
	_push(ssrRenderComponent(_component_CopyCode, { code: ".floatleft" }, null, _parent));
	_push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Floats content to the left. Stacks vertically on small screens.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
	_push(ssrRenderComponent(_component_CopyCode, { code: ".floatnone" }, null, _parent));
	_push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Clears floating alignment.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
	_push(ssrRenderComponent(_component_CopyCode, { code: ".citizen-overflow" }, null, _parent));
	_push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Wraps content in a horizontal scroll container. See <a href="/features/overflow">Overflow handling</a>.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
	_push(ssrRenderComponent(_component_CopyCode, { code: ".citizen-overflow-sticky-header" }, null, _parent));
	_push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Marks the last sticky row of an element inside a <code>.citizen-overflow</code> container — everything from the element&#39;s start through the marked row stays visible while the rest scrolls. See <a href="/features/overflow#sticky-headers">Overflow handling</a>.</td></tr></tbody></table><h2 id="tables" tabindex="-1">Tables <a class="header-anchor" href="#tables" aria-label="Permalink to “Tables”">​</a></h2><p>Enhance the look and feel of your tables.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Class</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
	_push(ssrRenderComponent(_component_CopyCode, { code: ".wikitable" }, null, _parent));
	_push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Applies standard Citizen styling. Automatically <a href="/features/overflow">wrapped for overflow</a>.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
	_push(ssrRenderComponent(_component_CopyCode, { code: ".wikitable--border" }, null, _parent));
	_push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Adds vertical borders.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
	_push(ssrRenderComponent(_component_CopyCode, { code: ".wikitable--stripe" }, null, _parent));
	_push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Adds zebra striping for better readability.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
	_push(ssrRenderComponent(_component_CopyCode, { code: ".wikitable--fluid" }, null, _parent));
	_push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Expands the table to fill 100% of the available width.</td></tr><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
	_push(ssrRenderComponent(_component_CopyCode, { code: ".citizen-table-nowrap" }, null, _parent));
	_push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Prevents the table from being <a href="/features/overflow#opting-out">wrapped for overflow</a>.</td></tr></tbody></table><h2 id="interaction" tabindex="-1">Interaction <a class="header-anchor" href="#interaction" aria-label="Permalink to “Interaction”">​</a></h2><p>Add interactive elements to your pages.</p><table tabindex="0"><thead><tr><th style="${ssrRenderStyle({ "text-align": "left" })}">Class</th><th style="${ssrRenderStyle({ "text-align": "left" })}">Description</th></tr></thead><tbody><tr><td style="${ssrRenderStyle({ "text-align": "left" })}">`);
	_push(ssrRenderComponent(_component_CopyCode, { code: ".citizen-search-trigger" }, null, _parent));
	_push(`</td><td style="${ssrRenderStyle({ "text-align": "left" })}">Opens the site search interface when clicked.</td></tr></tbody></table><h3 id="search-trigger" tabindex="-1">Search trigger <a class="header-anchor" href="#search-trigger" aria-label="Permalink to “Search trigger”">​</a></h3><p>You can create buttons or links that trigger the search popup using the <code>.citizen-search-trigger</code> class.</p><p>To create a simple search button:</p><div class="language-html"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({
		"--shiki-light": "#24292e",
		"--shiki-dark": "#e1e4e8",
		"--shiki-light-bg": "#fff",
		"--shiki-dark-bg": "#24292e"
	})}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">&lt;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#11782a",
		"--shiki-dark": "#85E89D"
	})}">div</span><span style="${ssrRenderStyle({
		"--shiki-light": "#6F42C1",
		"--shiki-dark": "#B392F0"
	})}"> class</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">=</span><span style="${ssrRenderStyle({
		"--shiki-light": "#032F62",
		"--shiki-dark": "#9ECBFF"
	})}">&quot;citizen-search-trigger&quot;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">&gt;Click me to open search&lt;/</span><span style="${ssrRenderStyle({
		"--shiki-light": "#11782a",
		"--shiki-dark": "#85E89D"
	})}">div</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">&gt;</span></span></code></pre></div><p>To prefill the search query (for example, to search only templates):</p><div class="language-html"><button title="Copy code" data-copied="Copied" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark" style="${ssrRenderStyle({
		"--shiki-light": "#24292e",
		"--shiki-dark": "#e1e4e8",
		"--shiki-light-bg": "#fff",
		"--shiki-dark-bg": "#24292e"
	})}" tabindex="0" dir="ltr"><code><span class="line"><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">&lt;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#11782a",
		"--shiki-dark": "#85E89D"
	})}">div</span><span style="${ssrRenderStyle({
		"--shiki-light": "#6F42C1",
		"--shiki-dark": "#B392F0"
	})}"> class</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">=</span><span style="${ssrRenderStyle({
		"--shiki-light": "#032F62",
		"--shiki-dark": "#9ECBFF"
	})}">&quot;citizen-search-trigger&quot;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#6F42C1",
		"--shiki-dark": "#B392F0"
	})}"> data-citizen-search-prefill</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">=</span><span style="${ssrRenderStyle({
		"--shiki-light": "#032F62",
		"--shiki-dark": "#9ECBFF"
	})}">&quot;Template:&quot;</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">&gt;Click me to search templates&lt;/</span><span style="${ssrRenderStyle({
		"--shiki-light": "#11782a",
		"--shiki-dark": "#85E89D"
	})}">div</span><span style="${ssrRenderStyle({
		"--shiki-light": "#24292E",
		"--shiki-dark": "#E1E4E8"
	})}">&gt;</span></span></code></pre></div></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("reference/classes.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var classes_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
//#endregion
export { __pageData, classes_default as default };

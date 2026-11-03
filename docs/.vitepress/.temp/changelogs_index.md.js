import { u as withBase } from "./Content.D3ca11br.js";
import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.BOaGB7Aw.js";
import { n as GITHUB_REPO, t as GITHUB_OWNER } from "./constants.BT2j_Dbh.js";
import { computed, defineComponent, mergeProps, ref, resolveComponent, unref, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderAttr, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import MarkdownIt from "markdown-it";
//#region .vitepress/theme/data/changelogs.data.ts
var data = JSON.parse("[]");
//#endregion
//#region .vitepress/theme/utils/contributors.ts
var CONTRIBUTORS_REGEX = /(?<=\(|, |by |and |^(\*|-) )@([a-zA-Z0-9-]+)(?=\)|, | and | made their first contribution)/gm;
function extractContributors(text) {
	const contributors = [...text.matchAll(CONTRIBUTORS_REGEX)].map((match) => match[2]);
	return [...new Set(contributors)];
}
function linkContributors(text) {
	return text.replaceAll(CONTRIBUTORS_REGEX, "[@$2](https://github.com/$2)");
}
//#endregion
//#region .vitepress/theme/utils/formatChangelog.ts
function removeVersionHeader(input) {
	return input.replace(/^\s*##\s+\[.*?\]\(.*?\)(?:\s+\(.*\))?\s*(\r?\n)+/, "");
}
function downgradeHeadings(input) {
	return input.replaceAll(/^(#+)/gm, "$1#");
}
function formatCommitLinks(input) {
	return input.replaceAll(/\(\[([0-9a-f]{7})\]\((.*?)\)\)/g, "[$1]($2)").replaceAll(/\[([0-9a-f]{7})\]\((.*?)\)/g, "[`$1`]($2)");
}
function formatCVELinks(input) {
	return input.replaceAll(/(?<!\[)`?CVE-(\d{4})-(\d+)`?(?!\])/g, "[`CVE-$1-$2`](https://www.cve.org/CVERecord?id=CVE-$1-$2)");
}
function formatPRLinks(input) {
	const repoUrl = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`, prRegex = new RegExp(`(?<!\\]\\()${repoUrl}/(pull|issues)/(\\d+)`, "g");
	return input.replaceAll(prRegex, "[#$2]($&)");
}
function formatFullChangelogLink(input) {
	return input.replaceAll(/\*\*Full Changelog\*\*: (https:\/\/\S+)/g, "[See all commits]($1)");
}
function formatChangelog(md, body) {
	let text = body ?? "No changelog provided.";
	text = removeVersionHeader(text);
	text = downgradeHeadings(text);
	text = linkContributors(text);
	text = formatCommitLinks(text);
	text = formatCVELinks(text);
	text = formatPRLinks(text);
	text = formatFullChangelogLink(text);
	return md.render(text.trim());
}
//#endregion
//#region .vitepress/theme/components/ContributorList.vue?vue&type=script&setup=true&lang.ts
var ContributorList_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ContributorList",
	__ssrInlineRender: true,
	props: { body: {} },
	setup(__props) {
		const nonExistent = ref(/* @__PURE__ */ new Set()), contributors = computed(() => extractContributors(__props.body).filter((user) => !nonExistent.value.has(user))), listFormatter = new Intl.ListFormat("en", {
			style: "long",
			type: "conjunction"
		}), contributorsText = computed(() => {
			if (contributors.value.length <= 3) return listFormatter.format(contributors.value);
			return listFormatter.format([...contributors.value.slice(0, 2), `${contributors.value.length - 2} other contributors`]);
		});
		return (_ctx, _push, _parent, _attrs) => {
			if (contributors.value.length > 0) {
				_push(`<div${ssrRenderAttrs(mergeProps({ class: "contributors" }, _attrs))} data-v-618993a1><h3 data-v-618993a1>Contributors</h3><ul data-v-618993a1><!--[-->`);
				ssrRenderList(contributors.value, (contributor) => {
					_push(`<li data-v-618993a1><a${ssrRenderAttr("href", `https://github.com/${contributor}`)} target="_blank"${ssrRenderAttr("title", `${contributor} profile on GitHub`)}${ssrRenderAttr("aria-label", `${contributor} profile on GitHub`)} data-v-618993a1><img${ssrRenderAttr("src", `https://github.com/${contributor}.png?size=32`)}${ssrRenderAttr("alt", `@${contributor} profile picture`)} loading="lazy" class="avatar" data-v-618993a1></a></li>`);
				});
				_push(`<!--]--></ul><div class="names" data-v-618993a1>${ssrInterpolate(contributorsText.value)}</div></div>`);
			} else _push(`<!---->`);
		};
	}
});
//#endregion
//#region .vitepress/theme/components/ContributorList.vue
var _sfc_setup$2 = ContributorList_vue_vue_type_script_setup_true_lang_default.setup;
ContributorList_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/ContributorList.vue");
	return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var ContributorList_default = /*#__PURE__*/ _plugin_vue_export_helper_default(ContributorList_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-618993a1"]]);
//#endregion
//#region .vitepress/theme/components/ChangelogsList.vue?vue&type=script&setup=true&lang.ts
var ChangelogsList_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "ChangelogsList",
	__ssrInlineRender: true,
	setup(__props) {
		const md = new MarkdownIt({ html: true });
		function renderMarkdown(string) {
			const pre = (string ?? "").replace(`Check out the [past release notes](https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}/releases) if you’re upgrading from an earlier version. `, "");
			return formatChangelog(md, pre);
		}
		const dateFormatter = new Intl.DateTimeFormat("en", { dateStyle: "medium" });
		return (_ctx, _push, _parent, _attrs) => {
			const _component_Badge = resolveComponent("Badge");
			_push(`<!--[-->`);
			ssrRenderList(unref(data), (release, index) => {
				_push(`<div data-v-2dc3a801><h2${ssrRenderAttr("id", index === 0 ? "latest" : release.tag_name)} data-v-2dc3a801><a${ssrRenderAttr("href", unref(withBase)(`/changelogs/${release.tag_name}`))} data-v-2dc3a801>${ssrInterpolate(release.tag_name.substring(1))}</a>`);
				if (index === 0) _push(ssrRenderComponent(_component_Badge, {
					type: "tip",
					text: "Latest"
				}, null, _parent));
				else _push(`<!---->`);
				_push(`<a class="header-anchor"${ssrRenderAttr("href", index === 0 ? "#latest" : `#${release.tag_name}`)}${ssrRenderAttr("aria-label", `Permalink to "${release.tag_name}"`)} data-v-2dc3a801></a></h2><time${ssrRenderAttr("datetime", release.published_at)} data-v-2dc3a801>${ssrInterpolate(unref(dateFormatter).format(new Date(release.published_at)))}</time><div data-v-2dc3a801>${renderMarkdown(release.body) ?? ""}</div>`);
				_push(ssrRenderComponent(ContributorList_default, { body: release.body }, null, _parent));
				_push(`</div>`);
			});
			_push(`<!--]-->`);
		};
	}
});
//#endregion
//#region .vitepress/theme/components/ChangelogsList.vue
var _sfc_setup$1 = ChangelogsList_vue_vue_type_script_setup_true_lang_default.setup;
ChangelogsList_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../.vitepress/theme/components/ChangelogsList.vue");
	return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var ChangelogsList_default = /*#__PURE__*/ _plugin_vue_export_helper_default(ChangelogsList_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-2dc3a801"]]);
//#endregion
//#region src/changelogs/index.md
var __pageData = JSON.parse("{\"title\":\"Changelogs\",\"description\":\"Changelogs of ShroudForge releases.\",\"frontmatter\":{\"title\":\"Changelogs\",\"description\":\"Changelogs of ShroudForge releases.\",\"lastUpdated\":false,\"editLink\":false,\"prev\":false,\"next\":false},\"headers\":[],\"relativePath\":\"changelogs/index.md\",\"filePath\":\"changelogs/index.md\"}");
var _sfc_main = /*@__PURE__*/ Object.assign({ name: "changelogs/index.md" }, {
	__ssrInlineRender: true,
	setup(__props) {
		return (_ctx, _push, _parent, _attrs) => {
			const _component_CopyOrDownloadAsMarkdownButtons = resolveComponent("CopyOrDownloadAsMarkdownButtons");
			_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="changelogs" tabindex="-1">Changelogs <a class="header-anchor" href="#changelogs" aria-label="Permalink to “Changelogs”">​</a></h1>`);
			_push(ssrRenderComponent(_component_CopyOrDownloadAsMarkdownButtons, null, null, _parent));
			_push(`<p>Changelogs for ShroudForge releases, which are also available <a href="https://github.com/bonsaibauer/shroudforge_wikijs_theme/releases" target="_blank" rel="noreferrer">on GitHub</a>.<br></p>`);
			_push(ssrRenderComponent(ChangelogsList_default, null, null, _parent));
			_push(`</div>`);
		};
	}
});
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelogs/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
//#endregion
export { __pageData, _sfc_main as default };

import { a as useRouter, u as withBase } from "./Content.D3ca11br.js";
import { n as GITHUB_REPO, t as GITHUB_OWNER } from "./constants.BT2j_Dbh.js";
import { defineComponent, onMounted, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { Octokit } from "@octokit/rest";
//#region src/changelogs/latest.md?vue&type=script&setup=true&lang.ts
var __pageData = JSON.parse("{\"title\":\"Latest Changelog\",\"description\":\"Changelog of the latest ShroudForge release.\",\"frontmatter\":{\"title\":\"Latest Changelog\",\"description\":\"Changelog of the latest ShroudForge release.\",\"outline\":false,\"lastUpdated\":false,\"editLink\":false},\"headers\":[],\"relativePath\":\"changelogs/latest.md\",\"filePath\":\"changelogs/latest.md\"}");
var latest_md_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	name: "changelogs/latest.md",
	__ssrInlineRender: true,
	setup(__props) {
		const router = useRouter();
		onMounted(async () => {
			try {
				const { data } = await new Octokit({ auth: void 0 }).repos.listReleases({
					owner: GITHUB_OWNER,
					repo: GITHUB_REPO,
					per_page: 1
				});
				if (data && data.length > 0 && data[0].tag_name) {
					const latestTag = data[0].tag_name;
					router.go(withBase(`/changelogs/${latestTag}`));
				} else router.go(withBase("/changelogs/"));
			} catch (error) {
				console.error("Failed to fetch latest release:", error);
				router.go(withBase("/changelogs/"));
			}
		});
		return (_ctx, _push, _parent, _attrs) => {
			_push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle({
				"text-align": "center",
				"padding": "2rem"
			})}"><p>Redirecting to the latest ShroudForge release notes...</p></div></div>`);
		};
	}
});
//#endregion
//#region src/changelogs/latest.md
var _sfc_setup = latest_md_vue_type_script_setup_true_lang_default.setup;
latest_md_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelogs/latest.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var latest_default = latest_md_vue_type_script_setup_true_lang_default;
//#endregion
export { __pageData, latest_default as default };

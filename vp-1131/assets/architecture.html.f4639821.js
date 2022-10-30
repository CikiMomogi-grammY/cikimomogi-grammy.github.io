import{_ as r,a as i}from"./vuepress-core-process.2c4dba1e.js";import{_ as a,r as s,o as u,c as d,b as l,d as e,a as t,w as o,e as p}from"./app.f347c99a.js";const c={},h=p('<h1 id="架构" tabindex="-1"><a class="header-anchor" href="#架构" aria-hidden="true">#</a> 架构</h1><h2 id="概览" tabindex="-1"><a class="header-anchor" href="#概览" aria-hidden="true">#</a> 概览</h2><p><img src="'+r+'" alt="vuepress-architecture-overview"></p><p>上图展示了 VuePress 的简要架构：</p><ul><li>Node App 会生成临时文件，包括页面、路由等。</li><li>Bundler 会将 Client App 和临时文件一起进行打包，就像处理一个普通的 Vue SPA 一样。</li></ul><p>作为开发者，你必须要意识到 VuePress 分为两个主要部分： <strong>Node App</strong> 和 <strong>Client App</strong> ，这一点对于开发插件和主题来说都十分重要。</p><ul><li>插件或者主题的入口文件会在 Node App 中被加载。</li><li>客户端文件会在 Client App 中被加载，也就是会被 Bundler 处理。比如组件、客户端配置文件等。</li></ul><h2 id="核心流程与-hooks" tabindex="-1"><a class="header-anchor" href="#核心流程与-hooks" aria-hidden="true">#</a> 核心流程与 Hooks</h2><p><img src="'+i+'" alt="vuepress-core-process"></p>',9),_=l("strong",null,"init",-1),f=l("li",null,"主题和插件会被加载。这意味着插件需要在初始化之前使用。",-1),m=l("li",null,[e("在 "),l("strong",null,"prepare"),e(" 阶段： "),l("ul",null,[l("li",null,"临时文件会被生成，因此所有和客户端文件相关的 Hooks 会在此处调用。")])],-1),k=l("strong",null,"dev / build",-1);function g(x,w){const n=s("RouterLink");return u(),d("div",null,[h,l("p",null,[e("上图展示了 VuePress 的核心流程以及 "),t(n,{to:"/zh/reference/plugin-api.html"},{default:o(()=>[e("插件 API")]),_:1}),e(" 的 Hooks ：")]),l("ul",null,[l("li",null,[e("在 "),_,e(" 阶段： "),l("ul",null,[f,l("li",null,[e("由于我们要使用 markdown-it 来解析 Markdown 文件，因此需要在加载页面文件之前创建 markdown-it 实例： "),l("ul",null,[l("li",null,[t(n,{to:"/zh/reference/plugin-api.html#extendsmarkdownoptions"},{default:o(()=>[e("extendsMarkdownOptions")]),_:1}),e(" Hook 会被调用，用以创建 markdown-it 实例。")]),l("li",null,[t(n,{to:"/zh/reference/plugin-api.html#extendsmarkdown"},{default:o(()=>[e("extendsMarkdown")]),_:1}),e(" Hook 会被调用，用以扩展 markdown-it 实例。")])])]),l("li",null,[e("页面文件会被加载： "),l("ul",null,[l("li",null,[t(n,{to:"/zh/reference/plugin-api.html#extendspageoptions"},{default:o(()=>[e("extendsPageOptions")]),_:1}),e(" Hook 会被调用，用以创建页面。")]),l("li",null,[t(n,{to:"/zh/reference/plugin-api.html#extendspage"},{default:o(()=>[e("extendsPage")]),_:1}),e(" Hook 会被调用，用以扩展页面对象。")])])])])]),m,l("li",null,[e("在 "),k,e(" 阶段： "),l("ul",null,[l("li",null,[e("Bundler 会被加载： "),l("ul",null,[l("li",null,[t(n,{to:"/zh/reference/plugin-api.html#extendsbundleroptions"},{default:o(()=>[e("extendsBundlerOptions")]),_:1}),e(" Hook 会被调用，用以生成 Bundler 的配置。")]),l("li",null,[t(n,{to:"/zh/reference/plugin-api.html#alias"},{default:o(()=>[e("alias")]),_:1}),e(" Hook 和 "),t(n,{to:"/zh/reference/plugin-api.html#define"},{default:o(()=>[e("define")]),_:1}),e(" Hook 会被用在 Bundler 的配置中，所以它们会在此处调用。")])])])])])])])}const v=a(c,[["render",g],["__file","architecture.html.vue"]]);export{v as default};

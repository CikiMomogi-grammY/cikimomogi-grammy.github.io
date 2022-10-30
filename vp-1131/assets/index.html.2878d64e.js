import{_ as o,r as s,o as n,c as d,b as r,d as e,a,e as i}from"./app.f347c99a.js";const h={},u=r("h1",{id:"介绍",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),e(" 介绍")],-1),c={href:"https://zh.wikipedia.org/wiki/Markdown",target:"_blank",rel:"noopener noreferrer"},l=r("p",null,"VuePress 诞生的初衷是为了支持 Vue.js 及其子项目的文档需求，但是现在它已经在帮助大量用户构建他们的文档、博客和其他静态网站。",-1),_=r("h2",{id:"它是如何工作的",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#它是如何工作的","aria-hidden":"true"},"#"),e(" 它是如何工作的？")],-1),p={href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"},x={href:"https://router.vuejs.org",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},f=r("p",null,"在开发过程中，我们启动一个常规的开发服务器 (dev-server) ，并将 VuePress 站点作为一个常规的 SPA。如果你以前使用过 Vue 的话，你在使用时会感受到非常熟悉的开发体验。",-1),k={href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"},b=r("code",null,"nuxt generate",-1),P={href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},g=i('<h2 id="为什么不是" tabindex="-1"><a class="header-anchor" href="#为什么不是" aria-hidden="true">#</a> 为什么不是 ...?</h2><h3 id="nuxt" tabindex="-1"><a class="header-anchor" href="#nuxt" aria-hidden="true">#</a> Nuxt</h3><p>Nuxt 是一套出色的 Vue SSR 框架， VuePress 能做的事情，Nuxt 实际上也同样能够胜任。但 Nuxt 是为构建应用程序而生的，而 VuePress 则更为轻量化并且专注在以内容为中心的静态网站上。</p><h3 id="vitepress" tabindex="-1"><a class="header-anchor" href="#vitepress" aria-hidden="true">#</a> VitePress</h3><p>VitePress 是 VuePress 的孪生兄弟，它同样由 Vue.js 团队创建和维护。 VitePress 甚至比 VuePress 要更轻更快，但它在灵活性和可配置性上作出了一些让步，比如它不支持插件系统。当然，如果你没有进阶的定制化需求， VitePress 已经足够支持你将你的内容部署到线上。</p><p>这个比喻可能不是很恰当，但是你可以把 VuePress 和 VitePress 的关系看作 Laravel 和 Lumen 。</p><h3 id="docsify-docute" tabindex="-1"><a class="header-anchor" href="#docsify-docute" aria-hidden="true">#</a> Docsify / Docute</h3><p>这两个项目同样都是基于 Vue，然而它们都是完全的运行时驱动，因此对 SEO 不够友好。如果你并不关注 SEO，同时也不想安装大量依赖，它们仍然是非常好的选择！</p><h3 id="hexo" tabindex="-1"><a class="header-anchor" href="#hexo" aria-hidden="true">#</a> Hexo</h3><p>Hexo 一直驱动着 Vue 2.x 的文档。Hexo 最大的问题在于他的主题系统太过于静态以及过度地依赖纯字符串，而我们十分希望能够好好地利用 Vue 来处理我们的布局和交互。同时，Hexo 在配置 Markdown 渲染方面的灵活性也不是最佳的。</p><h3 id="gitbook" tabindex="-1"><a class="header-anchor" href="#gitbook" aria-hidden="true">#</a> GitBook</h3><p>过去我们的子项目文档一直都在使用 GitBook 。 GitBook 最大的问题在于当文件很多时，每次编辑后的重新加载时间长得令人无法忍受。它的默认主题导航结构也比较有限制性，并且，主题系统也不是 Vue 驱动的。GitBook 背后的团队如今也更专注于将其打造为一个商业产品而不是开源工具。</p>',12);function w(m,v){const t=s("ExternalLinkIcon");return n(),d("div",null,[u,r("p",null,[e("VuePress 是一个以 Markdown 为中心的静态网站生成器。你可以使用 "),r("a",c,[e("Markdown"),a(t)]),e(" 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。")]),l,_,r("p",null,[e("一个 VuePress 站点本质上是一个由 "),r("a",p,[e("Vue"),a(t)]),e(" 和 "),r("a",x,[e("Vue Router"),a(t)]),e(" 驱动的单页面应用 (SPA)。")]),r("p",null,[e("路由会根据你的 Markdown 文件的相对路径来自动生成。每个 Markdown 文件都通过 "),r("a",V,[e("markdown-it"),a(t)]),e(" 编译为 HTML ，然后将其作为 Vue 组件的模板。因此，你可以在 Markdown 文件中直接使用 Vue 语法，便于你嵌入一些动态内容。")]),f,r("p",null,[e("在构建过程中，我们会为 VuePress 站点创建一个服务端渲染 (SSR) 的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML 。这种做法的灵感来源于 "),r("a",k,[e("Nuxt"),a(t)]),e(" 的 "),b,e(" 命令，以及其他的一些项目，比如 "),r("a",P,[e("Gatsby"),a(t)]),e("。")]),g])}const N=o(h,[["render",w],["__file","index.html.vue"]]);export{N as default};

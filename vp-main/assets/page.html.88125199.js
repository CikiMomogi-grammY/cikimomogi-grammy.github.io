import{_ as l,r,o as i,c,b as t,d as e,a as n,w as s,e as a}from"./app.ae6781f0.js";const u={},p=a(`<h1 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> Page</h1><p>VuePress is markdown-centered. Each markdown file inside your project is a standalone page.</p><h2 id="routing" tabindex="-1"><a class="header-anchor" href="#routing" aria-hidden="true">#</a> Routing</h2><p>By default, the route path of a page is determined by the relative path of your markdown file.</p><p>Assuming this is the directory structure of your markdown files:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">└─ docs</span></span>
<span class="line"><span style="color:#D4D4D4;">   ├─ guide</span></span>
<span class="line"><span style="color:#D4D4D4;">   │  ├─ getting-started.md</span></span>
<span class="line"><span style="color:#D4D4D4;">   │  └─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">   ├─ contributing.md</span></span>
<span class="line"><span style="color:#D4D4D4;">   └─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),h=t("code",null,"docs",-1),m=t("code",null,"vuepress dev docs",-1),f=a("<table><thead><tr><th>Relative Path</th><th>Route Path</th></tr></thead><tbody><tr><td><code>/README.md</code></td><td><code>/</code></td></tr><tr><td><code>/index.md</code></td><td><code>/</code></td></tr><tr><td><code>/contributing.md</code></td><td><code>/contributing.html</code></td></tr><tr><td><code>/guide/README.md</code></td><td><code>/guide/</code></td></tr><tr><td><code>/guide/page.md</code></td><td><code>/guide/page.html</code></td></tr></tbody></table>",1),_={class:"custom-container tip"},g=t("p",{class:"custom-container-title"},"TIP",-1),D=t("p",null,[e("By default, both "),t("code",null,"README.md"),e(" and "),t("code",null,"index.md"),e(" would be converted to "),t("code",null,"index.html"),e(" and generate a slash-ending route path. However, it might cause conflicts if you want to keep both of the two files.")],-1),v=t("code",null,"['**/*.md', '!**/README.md', '!.vuepress', '!node_modules']",-1),b=t("code",null,"README.md",-1),y=t("h2",{id:"frontmatter",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),e(" Frontmatter")],-1),k={href:"https://yaml.org/",target:"_blank",rel:"noopener noreferrer"},w=a(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">lang</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">en-US</span></span>
<span class="line"><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Title of this page</span></span>
<span class="line"><span style="color:#569CD6;">description</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Description of this page</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),E=t("code",null,"lang",-1),x=t("code",null,"title",-1),M=t("code",null,"description",-1),C=t("p",null,"Also, VuePress has built-in support for some frontmatter fields, and your theme may have its own special frontmatter, too.",-1),R={class:"custom-container tip"},P=t("p",{class:"custom-container-title"},"TIP",-1),V=t("h2",{id:"content",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#content","aria-hidden":"true"},"#"),e(" Content")],-1),A=t("p",null,[e("The main content of your page is written in Markdown. VuePress will firstly transform your Markdown to HTML code, then treat the HTML code as "),t("code",null,"<template>"),e(" of Vue SFC.")],-1),T={href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"};function L(B,F){const o=r("RouterLink"),d=r("ExternalLinkIcon");return i(),c("div",null,[p,t("p",null,[e("Take the "),h,e(" directory as your "),n(o,{to:"/reference/cli.html"},{default:s(()=>[e("sourceDir")]),_:1}),e(", e.g. you are running "),m,e(" command. Then the route paths of your markdown files would be:")]),f,t("div",_,[g,D,t("p",null,[e("In such case, you can set the "),n(o,{to:"/reference/config.html#pagepatterns"},{default:s(()=>[e("pagePatterns")]),_:1}),e(" to avoid one of them being processed by VuePress, e.g. use "),v,e(" to exclude all "),b,e(" files.")])]),y,t("p",null,[e("A markdown file could contain a "),t("a",k,[e("YAML"),n(d)]),e(" frontmatter. The frontmatter must be at the top of the Markdown file and must be wrapped with a couple of triple-dashed lines. Here is a basic example:")]),w,t("p",null,[e("You must have noticed that those fields are similar with the "),n(o,{to:"/guide/configuration.html#site-config"},{default:s(()=>[e("Site Config")]),_:1}),e(" in the "),n(o,{to:"/guide/configuration.html#config-file"},{default:s(()=>[e("Config File")]),_:1}),e(". You can override "),E,e(", "),x,e(", "),M,e(", etc., of current page via frontmatter. So you can take frontmatter as page scope config.")]),C,t("div",R,[P,t("p",null,[e("Check out the "),n(o,{to:"/reference/frontmatter.html"},{default:s(()=>[e("Frontmatter Reference")]),_:1}),e(" for a full list of VuePress built-in frontmatter.")]),t("p",null,[e("Check out the "),n(o,{to:"/reference/default-theme/frontmatter.html"},{default:s(()=>[e("Default Theme > Frontmatter Reference")]),_:1}),e(" for the frontmatter of default theme.")])]),V,A,t("p",null,[e("With the power of "),t("a",T,[e("markdown-it"),n(d)]),e(" and Vue template syntax, the basic Markdown can be extended a lot. Next, check out the "),n(o,{to:"/guide/markdown.html"},{default:s(()=>[e("Markdown")]),_:1}),e(" guide for all the extensions of Markdown in VuePress.")])])}const N=l(u,[["render",L],["__file","page.html.vue"]]);export{N as default};
import{_ as d,r as t,o as p,c as u,b as e,d as s,a as n,w as l,e as r}from"./app.63a4c30d.js";const h={},m=e("h1",{id:"getting-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),s(" Getting Started")],-1),D={class:"custom-container warning"},g=e("p",{class:"custom-container-title"},"WARNING",-1),_=e("code",null,"beta",-1),v={href:"https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),s(" Prerequisites")],-1),y={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://classic.yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"},k={class:"custom-container tip"},E=e("p",{class:"custom-container-title"},"TIP",-1),C={href:"https://pnpm.io/",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"vue",-1),A=e("code",null,"@vuepress/client",-1),N=e("code",null,"pnpm add -D vue @vuepress/client@next",-1),q={href:"https://yarnpkg.com/",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"nodeLinker: 'node-modules'",-1),P={href:"https://yarnpkg.com/configuration/yarnrc#nodeLinker",target:"_blank",rel:"noopener noreferrer"},S=e("code",null,".yarnrc.yml",-1),I=r(`<h2 id="manual-installation" tabindex="-1"><a class="header-anchor" href="#manual-installation" aria-hidden="true">#</a> Manual Installation</h2><p>This section will help you build a basic VuePress documentation site from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 3.</p><ul><li><strong>Step 1</strong>: Create and change into a new directory</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">mkdir vuepress-starter</span></span>
<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#D4D4D4;"> vuepress-starter</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Step 2</strong>: Initialize your project</li></ul>`,5),V=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"git init")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"yarn init")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),j=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"git init")]),s(`
`),e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"npm init")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),G=e("ul",null,[e("li",null,[e("strong",null,"Step 3"),s(": Install VuePress locally")])],-1),L=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"yarn add -D vuepress@next")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),R=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"npm install -D vuepress@next")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),M=e("strong",null,"Step 4",-1),B={href:"https://classic.yarnpkg.com/en/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"},W=e("code",null,"package.json",-1),Y=r(`<div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;scripts&quot;</span><span style="color:#D4D4D4;">: {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;docs:dev&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress dev docs&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">&quot;docs:build&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress build docs&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Step 5</strong>: Add the default temp and cache directory to <code>.gitignore</code> file</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;node_modules&#39;</span><span style="color:#D4D4D4;"> &gt;&gt; .gitignore</span></span>
<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;.temp&#39;</span><span style="color:#D4D4D4;"> &gt;&gt; .gitignore</span></span>
<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;.cache&#39;</span><span style="color:#D4D4D4;"> &gt;&gt; .gitignore</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Step 6</strong>: Create your first document</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">mkdir docs</span></span>
<span class="line"><span style="color:#DCDCAA;">echo</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;# Hello VuePress&#39;</span><span style="color:#D4D4D4;"> &gt; docs/README.md</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>Step 7</strong>: Serve the documentation site in the local server</li></ul>`,6),F=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"yarn docs:dev")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),T=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"npm run docs:dev")]),s(`
`),e("span",{class:"line"})])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),H={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"};function O(z,J){const a=t("ExternalLinkIcon"),o=t("CodeGroupItem"),i=t("CodeGroup"),c=t("RouterLink");return p(),u("div",null,[m,e("div",D,[g,e("p",null,[s("VuePress v2 is currently in "),_,s(" stage. It's ready to be used for building your site, but the config and API are not stable enough, which is likely to have breaking changes between minor releases. So make sure to read the "),e("a",v,[s("changelog"),n(a)]),s(" carefully each time you upgrade a beta version.")])]),b,e("ul",null,[e("li",null,[e("a",y,[s("Node.js v14.18.0+"),n(a)])]),e("li",null,[e("a",f,[s("Yarn v1 classic"),n(a)]),s(" (Optional)")])]),e("div",k,[E,e("ul",null,[e("li",null,[s("With "),e("a",C,[s("pnpm"),n(a)]),s(", you may need to install "),x,s(" and "),A,s(" as peer-dependencies, i.e. "),N,s(".")]),e("li",null,[s("With "),e("a",q,[s("yarn 2"),n(a)]),s(", you need to set "),w,s(" in your "),e("a",P,[S,n(a)]),s(" file.")])])]),I,n(i,null,{default:l(()=>[n(o,{title:"YARN",active:""},{default:l(()=>[V]),_:1}),n(o,{title:"NPM"},{default:l(()=>[j]),_:1})]),_:1}),G,n(i,null,{default:l(()=>[n(o,{title:"YARN",active:""},{default:l(()=>[L]),_:1}),n(o,{title:"NPM"},{default:l(()=>[R]),_:1})]),_:1}),e("ul",null,[e("li",null,[M,s(": Add some "),e("a",B,[s("scripts"),n(a)]),s(" to "),W])]),Y,n(i,null,{default:l(()=>[n(o,{title:"YARN",active:""},{default:l(()=>[F]),_:1}),n(o,{title:"NPM"},{default:l(()=>[T]),_:1})]),_:1}),e("p",null,[s("VuePress will start a hot-reloading development server at "),e("a",H,[s("http://localhost:8080"),n(a)]),s(". When you modify your markdown files, the content in the browser will be auto updated.")]),e("p",null,[s("By now, you should have a basic but functional VuePress documentation site. Next, learn about the basics of "),n(c,{to:"/guide/configuration.html"},{default:l(()=>[s("configuration")]),_:1}),s(" in VuePress.")])])}const Q=d(h,[["render",O],["__file","getting-started.html.vue"]]);export{Q as default};

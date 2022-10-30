import{_ as c,r as o,o as i,c as d,b as s,d as e,a as n,w as l,e as D}from"./app.f347c99a.js";const u={},v=s("h1",{id:"打包工具",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#打包工具","aria-hidden":"true"},"#"),e(" 打包工具")],-1),m={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},_=s("h2",{id:"选择一个打包工具",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#选择一个打包工具","aria-hidden":"true"},"#"),e(" 选择一个打包工具")],-1),b={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.npmjs.com/package/vuepress-webpack",target:"_blank",rel:"noopener noreferrer"},C=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"yarn remove vuepress")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"yarn add -D vuepress-webpack@next")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"npm uninstall vuepress")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"npm install -D vuepress-webpack@next")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),k={class:"custom-container tip"},g=s("p",{class:"custom-container-title"},"提示",-1),E={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.npmjs.com/package/vuepress-vite",target:"_blank",rel:"noopener noreferrer"},x=s("h2",{id:"配置打包工具",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置打包工具","aria-hidden":"true"},"#"),e(" 配置打包工具")],-1),V=s("p",null,"一般情况下，你不要任何额外配置就可以使用打包工具，因为我们已经帮你配置好了它们。",-1),F=D(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
<span class="line"><span style="color:#6A9955;">// import { webpackBundler } from &#39;vuepress-webpack&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">bundler:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">viteBundler</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">vuePluginOptions:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">template:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">compilerOptions:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#DCDCAA;">isCustomElement</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">tag</span><span style="color:#D4D4D4;"> === </span><span style="color:#CE9178;">&#39;center&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function j(A,B){const a=o("ExternalLinkIcon"),t=o("CodeGroupItem"),p=o("CodeGroup"),r=o("RouterLink");return i(),d("div",null,[v,s("p",null,[e("VuePress 一直以来都在使用 "),s("a",m,[e("Webpack"),n(a)]),e(" 作为打包工具来进行网站的开发和构建。从 VuePress v2 开始，我们还支持使用其他的打包工具，并且现在使用 "),s("a",h,[e("Vite"),n(a)]),e(" 作为默认的打包工具。当然，你仍然可以选择使用 Webpack 。")]),_,s("p",null,[e("在使用 "),s("a",b,[e("vuepress"),n(a)]),e(" 包时，会自动安装和使用 Vite 打包工具。")]),s("p",null,[e("如果你想改为使用 Webpack 打包工具，那么你可以移除它，改为安装 "),s("a",y,[e("vuepress-webpack"),n(a)]),e(" 包：")]),n(p,null,{default:l(()=>[n(t,{title:"YARN",active:""},{default:l(()=>[C]),_:1}),n(t,{title:"NPM"},{default:l(()=>[f]),_:1})]),_:1}),s("div",k,[g,s("p",null,[e("实际上， "),s("a",E,[e("vuepress"),n(a)]),e(" 包只是 "),s("a",w,[e("vuepress-vite"),n(a)]),e(" 包的一个封装而已。")])]),x,V,s("p",null,[e("通过 "),n(r,{to:"/zh/reference/config.html#bundler"},{default:l(()=>[e("bundler")]),_:1}),e(" 配置项，你可以对打包工具进行进阶配置：")]),F,s("p",null,[e("你可以参考 "),n(r,{to:"/zh/reference/bundler/vite.html"},{default:l(()=>[e("打包工具 > Vite")]),_:1}),e(" 和 "),n(r,{to:"/zh/reference/bundler/webpack.html"},{default:l(()=>[e("打包工具 > Webpack")]),_:1}),e(" 来查看对应打包工具的所有配置项。")])])}const G=c(u,[["render",j],["__file","bundler.html.vue"]]);export{G as default};

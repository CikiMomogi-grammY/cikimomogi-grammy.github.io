import{_ as c,r as o,o as i,c as d,b as s,d as e,a as n,w as l,e as D}from"./app.63a4c30d.js";const u={},v=s("h1",{id:"\u6253\u5305\u5DE5\u5177",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6253\u5305\u5DE5\u5177","aria-hidden":"true"},"#"),e(" \u6253\u5305\u5DE5\u5177")],-1),m={href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://vitejs.dev/",target:"_blank",rel:"noopener noreferrer"},_=s("h2",{id:"\u9009\u62E9\u4E00\u4E2A\u6253\u5305\u5DE5\u5177",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u9009\u62E9\u4E00\u4E2A\u6253\u5305\u5DE5\u5177","aria-hidden":"true"},"#"),e(" \u9009\u62E9\u4E00\u4E2A\u6253\u5305\u5DE5\u5177")],-1),b={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.npmjs.com/package/vuepress-webpack",target:"_blank",rel:"noopener noreferrer"},C=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"yarn remove vuepress")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"yarn add -D vuepress-webpack@next")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"npm uninstall vuepress")]),e(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D4D4D4"}},"npm install -D vuepress-webpack@next")]),e(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),k={class:"custom-container tip"},g=s("p",{class:"custom-container-title"},"\u63D0\u793A",-1),E={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.npmjs.com/package/vuepress-vite",target:"_blank",rel:"noopener noreferrer"},x=s("h2",{id:"\u914D\u7F6E\u6253\u5305\u5DE5\u5177",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u914D\u7F6E\u6253\u5305\u5DE5\u5177","aria-hidden":"true"},"#"),e(" \u914D\u7F6E\u6253\u5305\u5DE5\u5177")],-1),V=s("p",null,"\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4F60\u4E0D\u8981\u4EFB\u4F55\u989D\u5916\u914D\u7F6E\u5C31\u53EF\u4EE5\u4F7F\u7528\u6253\u5305\u5DE5\u5177\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5DF2\u7ECF\u5E2E\u4F60\u914D\u7F6E\u597D\u4E86\u5B83\u4EEC\u3002",-1),F=D(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function j(A,B){const a=o("ExternalLinkIcon"),p=o("CodeGroupItem"),t=o("CodeGroup"),r=o("RouterLink");return i(),d("div",null,[v,s("p",null,[e("VuePress \u4E00\u76F4\u4EE5\u6765\u90FD\u5728\u4F7F\u7528 "),s("a",m,[e("Webpack"),n(a)]),e(" \u4F5C\u4E3A\u6253\u5305\u5DE5\u5177\u6765\u8FDB\u884C\u7F51\u7AD9\u7684\u5F00\u53D1\u548C\u6784\u5EFA\u3002\u4ECE VuePress v2 \u5F00\u59CB\uFF0C\u6211\u4EEC\u8FD8\u652F\u6301\u4F7F\u7528\u5176\u4ED6\u7684\u6253\u5305\u5DE5\u5177\uFF0C\u5E76\u4E14\u73B0\u5728\u4F7F\u7528 "),s("a",h,[e("Vite"),n(a)]),e(" \u4F5C\u4E3A\u9ED8\u8BA4\u7684\u6253\u5305\u5DE5\u5177\u3002\u5F53\u7136\uFF0C\u4F60\u4ECD\u7136\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528 Webpack \u3002")]),_,s("p",null,[e("\u5728\u4F7F\u7528 "),s("a",b,[e("vuepress"),n(a)]),e(" \u5305\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5B89\u88C5\u548C\u4F7F\u7528 Vite \u6253\u5305\u5DE5\u5177\u3002")]),s("p",null,[e("\u5982\u679C\u4F60\u60F3\u6539\u4E3A\u4F7F\u7528 Webpack \u6253\u5305\u5DE5\u5177\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u79FB\u9664\u5B83\uFF0C\u6539\u4E3A\u5B89\u88C5 "),s("a",y,[e("vuepress-webpack"),n(a)]),e(" \u5305\uFF1A")]),n(t,null,{default:l(()=>[n(p,{title:"YARN",active:""},{default:l(()=>[C]),_:1}),n(p,{title:"NPM"},{default:l(()=>[f]),_:1})]),_:1}),s("div",k,[g,s("p",null,[e("\u5B9E\u9645\u4E0A\uFF0C "),s("a",E,[e("vuepress"),n(a)]),e(" \u5305\u53EA\u662F "),s("a",w,[e("vuepress-vite"),n(a)]),e(" \u5305\u7684\u4E00\u4E2A\u5C01\u88C5\u800C\u5DF2\u3002")])]),x,V,s("p",null,[e("\u901A\u8FC7 "),n(r,{to:"/zh/reference/config.html#bundler"},{default:l(()=>[e("bundler")]),_:1}),e(" \u914D\u7F6E\u9879\uFF0C\u4F60\u53EF\u4EE5\u5BF9\u6253\u5305\u5DE5\u5177\u8FDB\u884C\u8FDB\u9636\u914D\u7F6E\uFF1A")]),F,s("p",null,[e("\u4F60\u53EF\u4EE5\u53C2\u8003 "),n(r,{to:"/zh/reference/bundler/vite.html"},{default:l(()=>[e("\u6253\u5305\u5DE5\u5177 > Vite")]),_:1}),e(" \u548C "),n(r,{to:"/zh/reference/bundler/webpack.html"},{default:l(()=>[e("\u6253\u5305\u5DE5\u5177 > Webpack")]),_:1}),e(" \u6765\u67E5\u770B\u5BF9\u5E94\u6253\u5305\u5DE5\u5177\u7684\u6240\u6709\u914D\u7F6E\u9879\u3002")])])}const G=c(u,[["render",j],["__file","bundler.html.vue"]]);export{G as default};

import{_ as t,r as a,o as i,c as p,a as n,b as e,d as s,e as r}from"./app.ae6781f0.js";const c={},d=e("h1",{id:"vite",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vite","aria-hidden":"true"},"#"),s(" Vite")],-1),u={href:"https://www.npmjs.com/package/@vuepress/bundler-vite",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},D=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/bundler-vite@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><p>Reference of vite bundler options:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">viteBundler</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/bundler-vite&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineUserConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/cli&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineUserConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">bundler:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">viteBundler</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">viteOptions:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">vuePluginOptions:</span><span style="color:#D4D4D4;"> {},</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="viteoptions" tabindex="-1"><a class="header-anchor" href="#viteoptions" aria-hidden="true">#</a> viteOptions</h3>`,5),h=e("li",null,[e("p",null,"Details:"),e("p",null,"Accepts all options of Vite.")],-1),_=e("p",null,"Also see:",-1),y={href:"https://vitejs.dev/config/",target:"_blank",rel:"noopener noreferrer"},m=e("h3",{id:"vuepluginoptions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vuepluginoptions","aria-hidden":"true"},"#"),s(" vuePluginOptions")],-1),f=e("p",null,"Details:",-1),b={href:"https://www.npmjs.com/package/@vitejs/plugin-vue",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"Also see:",-1),C={href:"https://vitejs.dev/plugins/#vitejs-plugin-vue",target:"_blank",rel:"noopener noreferrer"};function k(E,x){const o=a("NpmBadge"),l=a("ExternalLinkIcon");return i(),p("div",null,[d,n(o,{package:"@vuepress/bundler-vite"}),e("p",null,[s("Vite bundler is provided by "),e("a",u,[s("@vuepress/bundler-vite"),n(l)]),s(" package. It is a dependency of the "),e("a",v,[s("vuepress"),n(l)]),s(" package, and you can also install it separately.")]),D,e("ul",null,[h,e("li",null,[_,e("ul",null,[e("li",null,[e("a",y,[s("Vite > Config"),n(l)])])])])]),m,e("ul",null,[e("li",null,[f,e("p",null,[s("Accepts all options of "),e("a",b,[s("@vitejs/plugin-vue"),n(l)]),s(".")])]),e("li",null,[g,e("ul",null,[e("li",null,[e("a",C,[s("Vite > Plugins > Official Plugins"),n(l)])])])])])])}const V=t(c,[["render",k],["__file","vite.html.vue"]]);export{V as default};

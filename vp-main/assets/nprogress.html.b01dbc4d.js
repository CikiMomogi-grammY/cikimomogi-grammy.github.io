import{_ as o,r as e,o as p,c as i,a,b as n,d as s,e as c}from"./app.ae6781f0.js";const t={},d=n("h1",{id:"nprogress-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nprogress-plugin","aria-hidden":"true"},"#"),s(" nprogress Plugin")],-1),D={href:"https://github.com/rstacruz/nprogress",target:"_blank",rel:"noopener noreferrer"},u=c(`<p>This plugin has been integrated into the default theme.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-nprogress@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">nprogressPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-nprogress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">nprogressPlugin</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize the style of the progress bar via CSS variables:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--nprogress-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#29d</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--nprogress-z-index</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1031</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function g(v,h){const l=e("NpmBadge"),r=e("ExternalLinkIcon");return p(),i("div",null,[d,a(l,{package:"@vuepress/plugin-nprogress"}),n("p",null,[s("Integrate "),n("a",D,[s("nprogress"),a(r)]),s(" into VuePress, which can provide a progress bar when navigating to another page.")]),u])}const m=o(t,[["render",g],["__file","nprogress.html.vue"]]);export{m as default};
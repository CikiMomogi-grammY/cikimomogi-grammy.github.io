import{_ as p,r as o,o as t,c,a as n,b as s,d as e,e as l}from"./app.ae6781f0.js";const r={},d=s("h1",{id:"medium-zoom",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#medium-zoom","aria-hidden":"true"},"#"),e(" medium-zoom")],-1),m={href:"https://github.com/francoischalifour/medium-zoom#readme",target:"_blank",rel:"noopener noreferrer"},D=l(`<p>This plugin has been integrated into the default theme.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-medium-zoom@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">mediumZoomPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-medium-zoom&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">mediumZoomPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector" aria-hidden="true">#</a> selector</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;:not(a) &gt; img&#39;</code></p></li><li><p>Details:</p><p>Selector of zoomable images.</p><p>By default this plugin will make all images zoomable except those inside <code>&lt;a&gt;</code> tags.</p></li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>500</code></p></li><li><p>Details:</p><p>Delay in milliseconds.</p><p>After navigating to a new page, this plugin will make images zoomable with a delay.</p></li></ul><h3 id="zoomoptions" tabindex="-1"><a class="header-anchor" href="#zoomoptions" aria-hidden="true">#</a> zoomOptions</h3>`,10),u=s("li",null,[s("p",null,[e("Type: "),s("code",null,"Object")])],-1),h=s("li",null,[s("p",null,"Details:"),s("p",null,"Options for medium-zoom.")],-1),y=s("p",null,"Also see:",-1),v={href:"https://github.com/francoischalifour/medium-zoom#options",target:"_blank",rel:"noopener noreferrer"},b=l(`<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize most of the zoom styles via <a href="#zoomoptions">zoomOptions</a>, while this plugin also provides some CSS variables for additional customization:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--medium-zoom-z-index</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--medium-zoom-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ffffff</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--medium-zoom-opacity</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h2><h3 id="usemediumzoom" tabindex="-1"><a class="header-anchor" href="#usemediumzoom" aria-hidden="true">#</a> useMediumZoom</h3>`,5),g=s("p",null,"Details:",-1),f=s("code",null,"Zoom",-1),C={href:"https://github.com/francoischalifour/medium-zoom#methods",target:"_blank",rel:"noopener noreferrer"},_=s("p",null,"This plugin will make images zoomable after navigating to current page. But if you are going to add new images dynamically, you may need this method to make those new images zoomable, too.",-1),z=s("p",null,[e("This plugin adds an extra "),s("code",null,"refresh"),e(" method on the "),s("code",null,"Zoom"),e(" instance, which will call "),s("code",null,"zoom.detach()"),e(" then "),s("code",null,"zoom.attach()"),e(" with the "),s("a",{href:"#selector"},"selector"),e(" as the default parameter. It will help you to refresh the zoomable images for current page.")],-1),E=s("li",null,[s("p",null,"Example:")],-1),x=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">nextTick</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useMediumZoom</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-medium-zoom/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">zoom</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useMediumZoom</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ... do something to add new images in current page</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// then you may need to call \`refresh\` manually to make those new images zoomable</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">nextTick</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">zoom</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">refresh</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(A,w){const i=o("NpmBadge"),a=o("ExternalLinkIcon");return t(),c("div",null,[d,n(i,{package:"@vuepress/plugin-medium-zoom"}),s("p",null,[e("Integrate "),s("a",m,[e("medium-zoom"),n(a)]),e(" into VuePress, which can provide the ability to zoom images.")]),D,s("ul",null,[u,h,s("li",null,[y,s("ul",null,[s("li",null,[s("a",v,[e("medium-zoom > Options"),n(a)])])])])]),b,s("ul",null,[s("li",null,[g,s("p",null,[e("Returns the "),f,e(" instance that used by this plugin, so that you can use the instance "),s("a",C,[e("methods"),n(a)]),e(" directly.")]),_,z]),E]),x])}const B=p(r,[["render",k],["__file","medium-zoom.html.vue"]]);export{B as default};

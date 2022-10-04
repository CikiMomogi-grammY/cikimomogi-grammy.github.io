import{_ as i,r as p,o as r,c as t,a,b as s,d as n,w as e,e as o}from"./app.63a4c30d.js";const D={},d=s("h1",{id:"pwa-popup",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#pwa-popup","aria-hidden":"true"},"#"),n(" pwa-popup")],-1),u=s("p",null,"Provide a popup component for users to activate the new PWA service worker manually.",-1),y=s("code",null,"skipWaiting",-1),v=s("code",null,"true",-1),C=o(`<p>When the new service worker is ready, a popup will appear in the right bottom of the page to ask users to activate the waiting service worker.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-pwa-popup@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">pwaPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">pwaPopupPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa-popup&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">pwaPlugin</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">pwaPopupPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>Record&lt;string, { message: string, buttonText: string }&gt;</code></p></li><li><p>Details:</p><p>The messages of the popup in different locales.</p><p>If this option is not specified, it will fallback to default messages.</p></li><li><p>Example:</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">pwaPlugin</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">pwaPopupPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">message:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;New content is available.&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">buttonText:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Refresh&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">message:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;\u53D1\u73B0\u65B0\u5185\u5BB9\u53EF\u7528&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">buttonText:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;\u5237\u65B0&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),m=o(`<h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>You can customize the style of the popup via CSS variables:</p><div class="language-css ext-css line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-z-index</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">10</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-text-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#2c3e50</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ffffff</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-border-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#3eaf7c</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-shadow</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">0</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">4px</span><span style="color:#D4D4D4;"> </span><span style="color:#B5CEA8;">16px</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">var</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">--pwa-popup-border-color</span><span style="color:#D4D4D4;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-btn-text-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ffffff</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-btn-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#3eaf7c</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">--pwa-popup-btn-hover-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#4abf8a</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function b(h,E){const c=p("NpmBadge"),l=p("RouterLink");return r(),t("div",null,[d,a(c,{package:"@vuepress/plugin-pwa-popup"}),u,s("p",null,[n("This plugin must be used together with "),a(l,{to:"/reference/plugin/pwa.html"},{default:e(()=>[n("pwa plugin")]),_:1}),n(", and the "),y,n(" option must not be set to "),v,n(".")]),C,s("ul",null,[s("li",null,[n("Also see: "),s("ul",null,[s("li",null,[a(l,{to:"/guide/i18n.html"},{default:e(()=>[n("Guide > I18n")]),_:1})])])])]),m])}const f=i(D,[["render",b],["__file","pwa-popup.html.vue"]]);export{f as default};

import{_ as p,r as c,o as i,c as t,b as n,d as s,a as e,w as l,e as o}from"./app.ae6781f0.js";const r={},D=o(`<h1 id="i18n" tabindex="-1"><a class="header-anchor" href="#i18n" aria-hidden="true">#</a> I18n</h1><h2 id="site-i18n-config" tabindex="-1"><a class="header-anchor" href="#site-i18n-config" aria-hidden="true">#</a> Site I18n Config</h2><p>To take advantage of multi-language support in VuePress, you first need to use the following file and directory structure:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">docs</span></span>
<span class="line"><span style="color:#D4D4D4;">├─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">├─ foo.md</span></span>
<span class="line"><span style="color:#D4D4D4;">├─ nested</span></span>
<span class="line"><span style="color:#D4D4D4;">│  └─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">└─ zh</span></span>
<span class="line"><span style="color:#D4D4D4;">   ├─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;">   ├─ foo.md</span></span>
<span class="line"><span style="color:#D4D4D4;">   └─ nested</span></span>
<span class="line"><span style="color:#D4D4D4;">      └─ README.md</span></span>
<span class="line"><span style="color:#D4D4D4;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=n("code",null,"locales",-1),u=o(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// The key is the path for the locale to be nested under.</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// As a special case, the default locale can use &#39;/&#39; as its path.</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">lang:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;en-US&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">title:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Vue-powered Static Site Generator&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">lang:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;zh-CN&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">title:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;VuePress&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">description:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Vue 驱动的静态网站生成器&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If a locale does not have a <code>lang</code>, <code>title</code>, <code>description</code> or <code>head</code>, VuePress will fallback to the root-level values. You can omit the root level config as long as they are provided in each locale.</p>`,2),y={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"TIP",-1),m=o(`<h2 id="theme-i18n-config" tabindex="-1"><a class="header-anchor" href="#theme-i18n-config" aria-hidden="true">#</a> Theme I18n Config</h2><p>VuePress does not restrict how themes provide multi-language support, so each theme may have different way to handle i18n, and some themes may not provide multi-language support at all. You&#39;d better refer to the theme documentation for detailed guide.</p><p>If you are using default theme, the multi-language support is the same as above:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">theme:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">selectLanguageName:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;English&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">selectLanguageName:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;简体中文&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),h={class:"custom-container tip"},C=n("p",{class:"custom-container-title"},"TIP",-1);function b(f,E){const a=c("RouterLink");return i(),t("div",null,[D,n("p",null,[s("Then, specify the "),d,s(" option in your "),e(a,{to:"/guide/configuration.html#config-file"},{default:l(()=>[s("config file")]),_:1}),s(":")]),u,n("div",y,[v,n("p",null,[s("Config reference: "),e(a,{to:"/reference/config.html#locales"},{default:l(()=>[s("locales")]),_:1})])]),m,n("div",h,[C,n("p",null,[s("Config reference: "),e(a,{to:"/reference/default-theme/config.html#locales"},{default:l(()=>[s("Default Theme > locales")]),_:1})])])])}const _=p(r,[["render",b],["__file","i18n.html.vue"]]);export{_ as default};

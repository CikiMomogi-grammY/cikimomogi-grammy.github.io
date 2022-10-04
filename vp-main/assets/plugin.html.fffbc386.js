import{_ as p,r as i,o as c,c as r,b as s,d as n,a as e,w as a,e as t}from"./app.ae6781f0.js";const u={},d=s("h1",{id:"plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#plugin","aria-hidden":"true"},"#"),n(" Plugin")],-1),D=s("h2",{id:"community-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#community-plugin","aria-hidden":"true"},"#"),n(" Community Plugin")],-1),g={href:"https://www.npmjs.com/search?q=keywords:vuepress-plugin",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.npmjs.com/search?q=%40vuepress%20keywords%3Aplugin",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">googleAnalyticsPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-google-analytics&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">googleAnalyticsPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">id:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;G-XXXXXXXXXX&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h={class:"custom-container tip"},f=s("p",{class:"custom-container-title"},"TIP",-1),v=s("p",null,"Most plugins can only be used once. If the same plugin is used multiple times, only the last one will take effect.",-1),_=s("h2",{id:"local-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#local-plugin","aria-hidden":"true"},"#"),n(" Local Plugin")],-1),C=s("p",null,"If you want to use your own plugin but don't want to publish it, you can create a local plugin.",-1),b=t(`<p>But if you have too many things to do in your config file, you can consider to extract them into separate plugins, and use them in your config file:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">myPlugin</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./path/to/my-plugin.js&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">myPlugin</span><span style="color:#D4D4D4;">(),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function w(k,E){const l=i("RouterLink"),o=i("ExternalLinkIcon");return c(),r("div",null,[d,s("p",null,[n("With the help of "),e(l,{to:"/reference/plugin-api.html"},{default:a(()=>[n("Plugin API")]),_:1}),n(", VuePress plugin can provide different features for you.")]),D,s("p",null,[n("Community users have created lots of plugins and published them to "),s("a",g,[n("NPM"),e(o)]),n(". VuePress team also maintains some official plugins under the "),s("a",m,[n("@vuepress"),e(o)]),n(" scope. You should check the plugin's own documentation for detailed guide.")]),s("p",null,[n("In general, you need to import the plugin and use it in your config file via the "),e(l,{to:"/reference/config.html#plugins"},{default:a(()=>[n("plugins")]),_:1}),n(" option. For example, use the "),e(l,{to:"/reference/plugin/google-analytics.html"},{default:a(()=>[n("@vuepress/plugin-google-analytics")]),_:1}),n(" to integrate Google Analytics:")]),y,s("div",h,[f,v,s("p",null,[n("However, some plugins can be used multiple times (e.g. "),e(l,{to:"/reference/plugin/container.html"},{default:a(()=>[n("@vuepress/plugin-container")]),_:1}),n("), and you should check the documentation of the plugin itself for detailed guide.")])]),_,C,s("p",null,[n("It is recommended to use the "),e(l,{to:"/guide/configuration.html#config-file"},{default:a(()=>[n("Config File")]),_:1}),n(" directly as a plugin, because "),e(l,{to:"/reference/config.html#plugin-api"},{default:a(()=>[n("almost all of the Plugin APIs are available")]),_:1}),n(", which would be more convenient in most cases.")]),b,s("p",null,[n("You can refer to "),e(l,{to:"/advanced/plugin.html"},{default:a(()=>[n("Advanced > Writing a Plugin")]),_:1}),n(" for how to write your own plugin.")])])}const P=p(u,[["render",w],["__file","plugin.html.vue"]]);export{P as default};

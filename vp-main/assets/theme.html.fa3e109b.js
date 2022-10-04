import{_ as c,r as t,o as i,c as r,b as e,d as s,a as n,w as o,e as p}from"./app.ae6781f0.js";const d={},u=e("h1",{id:"theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#theme","aria-hidden":"true"},"#"),s(" Theme")],-1),h=e("p",null,"VuePress theme can provide layouts, styles and many other features for you, helping you to focus on writing Markdown content.",-1),m=e("h2",{id:"default-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#default-theme","aria-hidden":"true"},"#"),s(" Default Theme")],-1),D=e("p",null,"VuePress has a default theme out of the box, which is applied to our documentation site you are currently browsing.",-1),y=e("p",null,"If you don't specify the theme to use, the default theme will be used automatically.",-1),f=p(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defaultTheme</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;">  {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">theme:</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defaultTheme</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// default theme config</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">navbar:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">      {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">text:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;Home&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#9CDCFE;">link:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"><span style="color:#D4D4D4;">  }),</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=e("p",null,"However, you might think it is not good enough. Or, you want to build a different type of site, for example, a blog, instead of a documentation. Then, you can try to use a community theme or create a local theme.",-1),_=e("h2",{id:"community-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#community-theme","aria-hidden":"true"},"#"),s(" Community Theme")],-1),b={href:"https://www.npmjs.com/search?q=keywords:vuepress-theme",target:"_blank",rel:"noopener noreferrer"},C=e("h2",{id:"local-theme",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#local-theme","aria-hidden":"true"},"#"),s(" Local Theme")],-1);function g(w,x){const a=t("RouterLink"),l=t("ExternalLinkIcon");return i(),r("div",null,[u,h,m,D,y,e("p",null,[s("To configure the default theme, you need to import and use it in your config file via the "),n(a,{to:"/reference/config.html#theme"},{default:o(()=>[s("theme")]),_:1}),s(" option:")]),f,e("p",null,[s("The default theme provides basic but useful features for documentation site, you can check out "),n(a,{to:"/reference/default-theme/config.html"},{default:o(()=>[s("Default Theme Config Reference")]),_:1}),s(" for a full list of config.")]),v,_,e("p",null,[s("Community users have created lots of theme and published them to "),e("a",b,[s("NPM"),n(l)]),s(". You should check the theme's own documentation for detailed guide.")]),C,e("p",null,[s("If you want to use your own custom theme but don't want to publish it, you can create a local theme. Refer to "),n(a,{to:"/advanced/theme.html"},{default:o(()=>[s("Advanced > Writing a Theme")]),_:1}),s(" for how to write your own theme.")])])}const E=c(d,[["render",g],["__file","theme.html.vue"]]);export{E as default};

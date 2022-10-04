import{_ as d,r as s,o as t,c as p,a as n,b as e,d as a,w as i,e as o}from"./app.ae6781f0.js";const h={},u=e("h1",{id:"active-header-links",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#active-header-links","aria-hidden":"true"},"#"),a(" active-header-links")],-1),m=o(`<p>该插件会监听页面滚动事件。当页面滚动至某个 <em>标题锚点</em> 后，如果存在对应的 <em>标题链接</em> ，那么该插件会将路由 Hash 更改为该 <em>标题锚点</em> 。</p><p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-active-header-links@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">activeHeaderLinksPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-active-header-links&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">activeHeaderLinksPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="headerlinkselector" tabindex="-1"><a class="header-anchor" href="#headerlinkselector" aria-hidden="true">#</a> headerLinkSelector</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;a.sidebar-item&#39;</code></p></li><li><p>详情：</p><p><em>标题链接</em> 的选择器。</p><p>如果一个 <em>标题锚点</em> 没有对应的 <em>标题链接</em> ，那么即使滚动到这个 <em>标题锚点</em> ，该插件也不会更改路由 Hash 。</p></li></ul><h3 id="headeranchorselector" tabindex="-1"><a class="header-anchor" href="#headeranchorselector" aria-hidden="true">#</a> headerAnchorSelector</h3>`,9),D=e("li",null,[e("p",null,[a("类型： "),e("code",null,"string")])],-1),v=e("li",null,[e("p",null,[a("默认值： "),e("code",null,"'.header-anchor'")])],-1),_=e("p",null,"详情：",-1),f=e("p",null,[e("em",null,"标题锚点"),a(" 的选择器。")],-1),k={href:"https://github.com/valeriangalliat/markdown-it-anchor#readme",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"permalinkClass",-1),y=e("p",null,"参考：",-1),g=o('<h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>200</code></p></li><li><p>详情：</p><p>滚动事件监听器的 Debounce 延迟。</p></li></ul><h3 id="offset" tabindex="-1"><a class="header-anchor" href="#offset" aria-hidden="true">#</a> offset</h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>5</code></p></li><li><p>详情：</p><p>即便直接点击 <em>标题锚点</em> 的链接， <code>scrollTop</code> 也可能不会完全等于 <em>标题锚点</em> 的 <code>offsetTop</code> ，所以我们添加一个 Offset 偏移量来避免这个误差。</p></li></ul>',4);function x(C,E){const r=s("NpmBadge"),l=s("RouterLink"),c=s("ExternalLinkIcon");return t(),p("div",null,[u,n(r,{package:"@vuepress/plugin-active-header-links"}),m,e("ul",null,[D,v,e("li",null,[_,f,e("p",null,[a("你通常不需要设置该选项，除非你通过 "),n(l,{to:"/zh/reference/config.html#markdown-anchor"},{default:i(()=>[a("markdown.anchor")]),_:1}),a(" 修改了 "),e("a",k,[a("markdown-it-anchor"),n(c)]),a(" 的 "),b,a(" 选项。")])]),e("li",null,[y,e("ul",null,[e("li",null,[n(l,{to:"/zh/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9"},{default:i(()=>[a("指南 > Markdown > 语法扩展 > 标题锚点")]),_:1})])])])]),g])}const L=d(h,[["render",x],["__file","active-header-links.html.vue"]]);export{L as default};
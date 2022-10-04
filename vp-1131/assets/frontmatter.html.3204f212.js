import{_ as i,r as o,o as c,c as d,a as s,b as l,d as n,w as a,e as t}from"./app.63a4c30d.js";const u={},D=l("h1",{id:"frontmatter",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),n(" Frontmatter")],-1),h=l("h2",{id:"date",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#date","aria-hidden":"true"},"#"),n(" date")],-1),m=l("li",null,[l("p",null,[n("\u7C7B\u578B\uFF1A "),l("code",null,"string")])],-1),y=l("p",null,"\u8BE6\u60C5\uFF1A",-1),_=l("p",null,"\u9875\u9762\u7684\u521B\u5EFA\u65E5\u671F\u3002",-1),v=l("code",null,"yyyy-MM-dd",-1),b={href:"https://yaml.org/type/timestamp.html",target:"_blank",rel:"noopener noreferrer"},C=l("p",null,"\u53C2\u8003\uFF1A",-1),f=l("h2",{id:"description",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#description","aria-hidden":"true"},"#"),n(" description")],-1),g=l("li",null,[l("p",null,[n("\u7C7B\u578B\uFF1A "),l("code",null,"string")])],-1),k=l("li",null,[l("p",null,"\u8BE6\u60C5\uFF1A"),l("p",null,"\u9875\u9762\u7684\u63CF\u8FF0\u3002"),l("p",null,[n("\u5B83\u5C06\u4F1A\u8986\u76D6\u7AD9\u70B9\u914D\u7F6E\u4E2D\u7684 "),l("code",null,"description"),n(" \u914D\u7F6E\u9879\u3002")])],-1),E=l("p",null,"\u53C2\u8003\uFF1A",-1),x=t(`<h2 id="head" tabindex="-1"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h2><ul><li><p>\u7C7B\u578B\uFF1A <code>HeadConfig[]</code></p></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u9875\u9762 <code>&lt;head&gt;</code> \u6807\u7B7E\u5185\u6DFB\u52A0\u7684\u989D\u5916\u6807\u7B7E\u3002</p></li><li><p>\u793A\u4F8B\uFF1A</p></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">head</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - - </span><span style="color:#CE9178;">meta</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">foo</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#569CD6;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">yaml \u6570\u7EC4\u8BED\u6CD5</span></span>
<span class="line"><span style="color:#D4D4D4;">  - [</span><span style="color:#CE9178;">meta</span><span style="color:#D4D4D4;">, { </span><span style="color:#569CD6;">name</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">bar</span><span style="color:#D4D4D4;"> , </span><span style="color:#569CD6;">content</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">\u65B9\u62EC\u53F7\u8BED\u6CD5</span><span style="color:#D4D4D4;"> }]</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6E32\u67D3\u4E3A\uFF1A</p><div class="language-html ext-html line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">meta</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;foo&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;yaml \u6570\u7EC4\u8BED\u6CD5&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#808080;">/&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">meta</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">name</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;bar&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">content</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;\u65B9\u62EC\u53F7\u8BED\u6CD5&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#808080;">/&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">head</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),P=l("h2",{id:"lang",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#lang","aria-hidden":"true"},"#"),n(" lang")],-1),F=l("li",null,[l("p",null,[n("\u7C7B\u578B\uFF1A "),l("code",null,"string")])],-1),M=l("li",null,[l("p",null,"\u8BE6\u60C5\uFF1A"),l("p",null,"\u9875\u9762\u7684\u8BED\u8A00\u3002"),l("p",null,[n("\u5B83\u5C06\u4F1A\u8986\u76D6\u7AD9\u70B9\u914D\u7F6E\u4E2D\u7684 "),l("code",null,"lang"),n(" \u914D\u7F6E\u9879")])],-1),z=l("p",null,"\u53C2\u8003\uFF1A",-1),N=t(`<h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout" aria-hidden="true">#</a> layout</h2><ul><li><p>\u7C7B\u578B\uFF1A <code>string</code></p></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u9875\u9762\u7684\u5E03\u5C40\u3002</p><p>\u5E03\u5C40\u662F\u7531\u4E3B\u9898\u63D0\u4F9B\u7684\u3002\u5982\u679C\u4F60\u4E0D\u6307\u5B9A\u8BE5 Frontmatter \uFF0C\u5219\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u5E03\u5C40\u3002\u4F60\u5E94\u8BE5\u53C2\u8003\u4E3B\u9898\u81EA\u8EAB\u7684\u6587\u6863\u6765\u4E86\u89E3\u5176\u63D0\u4F9B\u4E86\u54EA\u4E9B\u5E03\u5C40\u3002</p><p>\u5982\u679C\u4E3B\u9898\u5E03\u5C40\u65E0\u6CD5\u6EE1\u8DB3\u4F60\u7684\u9700\u6C42\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u81EA\u5B9A\u4E49\u5E03\u5C40\u7EC4\u4EF6\u3002</p></li><li><p>\u793A\u4F8B\uFF1A</p></li></ul><p>\u5728 <code>.vuepress/client.ts</code> \u6587\u4EF6\u4E2D\u6CE8\u518C\u4E00\u4E2A\u5E03\u5C40\u7EC4\u4EF6\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">CustomLayout</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./CustomLayout.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">CustomLayout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 Frontmatter \u4E2D\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u5E03\u5C40\uFF1A</p><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">layout</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">CustomLayout</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="permalink" tabindex="-1"><a class="header-anchor" href="#permalink" aria-hidden="true">#</a> permalink</h2>`,7),A=l("li",null,[l("p",null,[n("\u7C7B\u578B\uFF1A "),l("code",null,"string")])],-1),w=l("li",null,[l("p",null,"\u8BE6\u60C5\uFF1A"),l("p",null,"\u9875\u9762\u7684\u6C38\u4E45\u94FE\u63A5\u3002"),l("p",null,"\u5B83\u5C06\u4F1A\u8986\u76D6\u6839\u636E\u6587\u4EF6\u8DEF\u5F84\u6765\u51B3\u5B9A\u7684\u9ED8\u8BA4\u8DEF\u7531\u8DEF\u5F84\u3002")],-1),L=l("p",null,"\u53C2\u8003\uFF1A",-1),q=l("li",null,[l("a",{href:"#permalinkpattern"},"Frontmatter > permalinkPattern")],-1),I=t(`<h2 id="permalinkpattern" tabindex="-1"><a class="header-anchor" href="#permalinkpattern" aria-hidden="true">#</a> permalinkPattern</h2><ul><li><p>\u7C7B\u578B\uFF1A <code>string | null</code></p></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u4E3A\u9875\u9762\u751F\u6210\u6C38\u4E45\u94FE\u63A5\u7684 Pattern \u3002</p><p>\u5B83\u5C06\u4F1A\u8986\u76D6\u7AD9\u70B9\u914D\u7F6E\u4E2D\u7684 <code>permalinkPattern</code> \u914D\u7F6E\u9879\u3002</p><p>\u5982\u679C Frontmatter \u4E2D\u8BBE\u7F6E\u4E86 <code>permalink</code> \uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5B57\u6BB5\u5219\u4E0D\u4F1A\u751F\u6548\u3002</p></li><li><p>\u4F7F\u7528\uFF1A</p><table><thead><tr><th>Pattern</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>:year</code></td><td>\u521B\u5EFA\u65E5\u671F\u7684 \u5E74 \u90E8\u5206</td></tr><tr><td><code>:month</code></td><td>\u521B\u5EFA\u65E5\u671F\u7684 \u6708 \u90E8\u5206</td></tr><tr><td><code>:day</code></td><td>\u521B\u5EFA\u65E5\u671F\u7684 \u65E5 \u90E8\u5206</td></tr><tr><td><code>:slug</code></td><td>\u9875\u9762\u6587\u4EF6\u540D\u7684 Slug</td></tr><tr><td><code>:raw</code></td><td>\u539F\u59CB\u8DEF\u7531\u8DEF\u5F84</td></tr></tbody></table><p><code>:year</code>, <code>:month</code> \u548C <code>:day</code> Pattern \u6839\u636E\u5982\u4E0B\u4F18\u5148\u7EA7\u8FDB\u884C\u89E3\u6790\uFF1A</p><ul><li>Frontmatter \u4E2D\u7684 <code>date</code> \u5B57\u6BB5\u3002</li><li>\u7B26\u5408 <code>yyyy-MM-dd-foobar.md</code> \u6216 <code>yyyy-MM-foobar.md</code> \u65E5\u671F\u683C\u5F0F\u7684\u6587\u4EF6\u540D\u3002</li><li>\u7B26\u5408 <code>yyyy/MM/dd/foobar.md</code> \u6216 <code>yyyy/MM/foobar.md</code> \u65E5\u671F\u683C\u5F0F\u7684\u76EE\u5F55\u540D\u3002</li><li>\u9ED8\u8BA4\u503C <code>0000-00-00</code> \u3002</li></ul></li><li><p>\u793A\u4F8B 1 \uFF1A</p><p>\u9875\u9762\u6587\u4EF6\u540D\u662F <code>foo-bar.md</code> \u3002</p><p>\u9875\u9762 Frontmatter \u662F\uFF1A</p></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">date</span><span style="color:#D4D4D4;">: 2021-01-03</span></span>
<span class="line"><span style="color:#569CD6;">permalinkPattern</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">:year/:month/:day/:slug.html</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u9875\u9762\u7684\u6C38\u4E45\u94FE\u63A5\u5C06\u4F1A\u662F <code>2021/01/03/foo-bar.html</code> \u3002</p><ul><li><p>\u793A\u4F8B 2 \uFF1A</p><p>\u9875\u9762\u6587\u4EF6\u540D\u662F <code>2021-01-03-bar-baz.md</code>\u3002</p><p>\u9875\u9762 Frontmatter \u662F\uFF1A</p></li></ul><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">permalinkPattern</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">:year/:month/:day/:slug.html</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u9875\u9762\u7684\u6C38\u4E45\u94FE\u63A5\u5C06\u4F1A\u662F <code>2021/01/03/bar-baz.html</code> \u3002</p>`,7),B=l("li",null,[l("a",{href:"#date"},"Frontmatter > date")],-1),V=l("li",null,[l("a",{href:"#permalink"},"Frontmatter > permalink")],-1),R=l("h2",{id:"routemeta",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#routemeta","aria-hidden":"true"},"#"),n(" routeMeta")],-1),T=l("li",null,[l("p",null,[n("\u7C7B\u578B\uFF1A "),l("code",null,"Record<string, unknown>")])],-1),S=l("li",null,[l("p",null,"\u8BE6\u60C5\uFF1A"),l("p",null,"\u9644\u52A0\u5230\u9875\u9762\u8DEF\u7531\u7684\u81EA\u5B9A\u4E49\u6570\u636E\u3002")],-1),H=l("p",null,"\u53C2\u8003\uFF1A",-1),Y=l("h2",{id:"title",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#title","aria-hidden":"true"},"#"),n(" title")],-1),j=l("li",null,[l("p",null,[n("\u7C7B\u578B\uFF1A "),l("code",null,"string")])],-1),G=l("li",null,[l("p",null,"\u8BE6\u60C5\uFF1A"),l("p",null,"\u9875\u9762\u7684\u6807\u9898\u3002"),l("p",null,[n("\u5982\u679C\u4F60\u4E0D\u5728 Frontmatter \u4E2D\u8BBE\u7F6E "),l("code",null,"title"),n(" \uFF0C\u90A3\u4E48\u9875\u9762\u4E2D\u7B2C\u4E00\u4E2A\u4E00\u7EA7\u6807\u9898\uFF08\u5373 "),l("code",null,"# title"),n("\uFF09\u7684\u5185\u5BB9\u4F1A\u88AB\u5F53\u4F5C\u6807\u9898\u4F7F\u7528\u3002")])],-1),J=l("p",null,"\u53C2\u8003\uFF1A",-1);function K(O,Q){const p=o("NpmBadge"),r=o("ExternalLinkIcon"),e=o("RouterLink");return c(),d("div",null,[D,s(p,{package:"@vuepress/client"}),s(p,{package:"@vuepress/markdown"}),h,l("ul",null,[m,l("li",null,[y,_,l("p",null,[n("\u5E94\u6309\u7167 "),v,n(" \u7684\u683C\u5F0F\u6765\u6307\u5B9A\u65E5\u671F\uFF0C\u6216\u8005\u9075\u5FAA "),l("a",b,[n("YAML Timestamp Type"),s(r)]),n(" \u3002")])]),l("li",null,[C,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/node-api.html#date"},{default:a(()=>[n("Node API > Page \u5C5E\u6027 > date")]),_:1})])])])]),f,l("ul",null,[g,k,l("li",null,[E,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/config.html#description"},{default:a(()=>[n("\u914D\u7F6E > description")]),_:1})])])])]),x,l("ul",null,[l("li",null,[n("\u53C2\u8003\uFF1A "),l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/config.html#head"},{default:a(()=>[n("\u914D\u7F6E > head")]),_:1})])])])]),P,l("ul",null,[F,M,l("li",null,[z,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/config.html#lang"},{default:a(()=>[n("\u914D\u7F6E > lang")]),_:1})]),l("li",null,[s(e,{to:"/zh/reference/node-api.html#lang"},{default:a(()=>[n("Node API > Page \u5C5E\u6027 > lang")]),_:1})])])])]),N,l("ul",null,[A,w,l("li",null,[L,l("ul",null,[q,l("li",null,[s(e,{to:"/zh/guide/page.html#%E8%B7%AF%E7%94%B1"},{default:a(()=>[n("\u6307\u5357 > \u9875\u9762 > \u8DEF\u7531")]),_:1})]),l("li",null,[s(e,{to:"/zh/reference/node-api.html#permalink"},{default:a(()=>[n("Node API > Page \u5C5E\u6027 > permalink")]),_:1})])])])]),I,l("ul",null,[l("li",null,[n("\u53C2\u8003\uFF1A "),l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/config.html#permalinkpattern"},{default:a(()=>[n("\u914D\u7F6E > permalinkPattern")]),_:1})]),B,V,l("li",null,[s(e,{to:"/zh/reference/node-api.html#permalink"},{default:a(()=>[n("Node API > Page \u5C5E\u6027 > permalink")]),_:1})])])])]),R,l("ul",null,[T,S,l("li",null,[H,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/node-api.html#routeMeta"},{default:a(()=>[n("Node API > Page \u5C5E\u6027 > routeMeta")]),_:1})])])])]),Y,l("ul",null,[j,G,l("li",null,[J,l("ul",null,[l("li",null,[s(e,{to:"/zh/reference/node-api.html#title"},{default:a(()=>[n("Node API > Page \u5C5E\u6027 > title")]),_:1})])])])])])}const W=i(u,[["render",K],["__file","frontmatter.html.vue"]]);export{W as default};

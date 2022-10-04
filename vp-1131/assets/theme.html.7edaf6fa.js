import{_ as t,r as o,o as r,c as i,b as n,d as s,a as l,w as e,e as p}from"./app.63a4c30d.js";const D={},d=n("h1",{id:"\u5F00\u53D1\u4E3B\u9898",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5F00\u53D1\u4E3B\u9898","aria-hidden":"true"},"#"),s(" \u5F00\u53D1\u4E3B\u9898")],-1),y={class:"custom-container tip"},u=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),v=n("h2",{id:"\u521B\u5EFA\u4E00\u4E2A\u4E3B\u9898",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u521B\u5EFA\u4E00\u4E2A\u4E3B\u9898","aria-hidden":"true"},"#"),s(" \u521B\u5EFA\u4E00\u4E2A\u4E3B\u9898")],-1),m=n("em",null,"\u4E3B\u9898\u5BF9\u8C61",-1),C=n("em",null,"\u4E3B\u9898\u51FD\u6570",-1),b=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">getDirname</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/utils&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">__dirname</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">getDirname</span><span style="color:#D4D4D4;">(</span><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">meta</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">url</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">fooTheme</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// \u8FD4\u56DE\u4E00\u4E2A\u4E3B\u9898\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-theme-foo&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// \u4E3B\u9898\u7684\u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">clientConfigFile:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;client.js&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// \u8BBE\u7F6E\u81EA\u5B9A\u4E49 dev / build \u6A21\u677F</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// \u5982\u679C\u6CA1\u6709\u6307\u5B9A\u6A21\u677F\uFF0C\u5C06\u4F1A\u4F7F\u7528 \`@vuepress/client\` \u63D0\u4F9B\u7684\u9ED8\u8BA4\u6A21\u677F</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">templateBuild:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;templates/build.html&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">templateDev:</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">path</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">resolve</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">__dirname</span><span style="color:#D4D4D4;">, </span><span style="color:#CE9178;">&#39;templates/dev.html&#39;</span><span style="color:#D4D4D4;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// \u4F7F\u7528\u63D2\u4EF6</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// \u5176\u4ED6\u7684\u63D2\u4EF6 API \u4E5F\u90FD\u53EF\u7528</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">barTheme</span><span style="color:#D4D4D4;"> = (</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// \u8FD4\u56DE\u4E00\u4E2A\u4E3B\u9898\u51FD\u6570</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> (</span><span style="color:#9CDCFE;">app</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#C586C0;">return</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-theme-bar&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  }</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u521B\u5EFA\u4E3B\u9898\u7684\u5BA2\u6237\u7AEF\u914D\u7F6E\u6587\u4EF6 <code>client.js</code> :</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">defineClientConfig</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/client&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Layout</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./layouts/Layout.vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">NotFound</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;./layouts/NotFound.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> </span><span style="color:#DCDCAA;">defineClientConfig</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">layouts:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">Layout</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">NotFound</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>layouts</code> \u5B57\u6BB5\u58F0\u660E\u4E86\u4F60\u7684\u4E3B\u9898\u63D0\u4F9B\u7684\u5E03\u5C40\u3002\u4E00\u4E2A\u4E3B\u9898\u5FC5\u987B\u63D0\u4F9B\u81F3\u5C11\u4E24\u4E2A\u5E03\u5C40\uFF1A<code>Layout</code> \u548C <code>NotFound</code> \u3002\u524D\u8005\u7528\u4E8E\u63D0\u4F9B\u4E00\u822C\u9875\u9762\u7684\u9ED8\u8BA4\u5E03\u5C40\uFF0C\u540E\u8005\u7528\u4E8E\u63D0\u4F9B 404 \u9875\u9762\u7684\u5E03\u5C40\u3002</p>`,4),h=n("code",null,"Layout",-1),_=p(`<div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Content</span><span style="color:#D4D4D4;"> /</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>NotFound</code> \u5E03\u5C40\u4F1A\u88AB\u7528\u4E8E <code>404.html</code> \u9875\u9762\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">404 Not Found</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),E=n("h2",{id:"\u53D1\u5E03\u5230-npm",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53D1\u5E03\u5230-npm","aria-hidden":"true"},"#"),s(" \u53D1\u5E03\u5230 NPM")],-1),g={href:"https://docs.npmjs.com/cli/v8/configuring-npm/package-json",target:"_blank",rel:"noopener noreferrer"},F=p(`<div class="language-json ext-json line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;vuepress-theme-foo&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;keywords&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#CE9178;">&quot;vuepress-theme&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f=n("code",null,"name",-1),A=n("code",null,"vuepress-theme-xxx",-1),k=n("code",null,"@org/vuepress-theme-xxx",-1),x=n("em",null,"\u4E3B\u9898\u5BF9\u8C61",-1),N=n("li",null,[s("\u5728 "),n("code",null,"keywords"),s(" \u4E2D\u5305\u542B "),n("code",null,"vuepress-theme"),s(" \uFF0C\u8FD9\u6837\u7528\u6237\u53EF\u4EE5\u5728 NPM \u4E0A\u641C\u7D22\u5230\u4F60\u7684\u4E3B\u9898\u3002")],-1);function L(q,j){const a=o("RouterLink"),c=o("ExternalLinkIcon");return r(),i("div",null,[d,n("div",y,[u,n("p",null,[s("\u5728\u9605\u8BFB\u8BE5\u6307\u5357\u4E4B\u524D\uFF0C\u4F60\u6700\u597D\u5148\u4E86\u89E3\u4E00\u4E0B "),l(a,{to:"/zh/advanced/plugin.html"},{default:e(()=>[s("\u5F00\u53D1\u63D2\u4EF6")]),_:1}),s(" \u6307\u5357\u3002")])]),v,n("p",null,[s("VuePress \u4E3B\u9898\u662F\u4E00\u4E2A\u7279\u6B8A\u7684\u63D2\u4EF6\uFF0C\u5B83\u5E94\u8BE5\u7B26\u5408 "),l(a,{to:"/zh/reference/theme-api.html"},{default:e(()=>[s("\u4E3B\u9898 API")]),_:1}),s(" \u3002\u548C\u63D2\u4EF6\u4E00\u6837\uFF0C\u4E3B\u9898\u53EF\u4EE5\u662F\u4E00\u4E2A "),m,s(" \u6216\u4E00\u4E2A "),C,s(" \uFF0C\u5E76\u4E14\u901A\u5E38\u901A\u8FC7\u4E00\u4E2A\u51FD\u6570\u6765\u63A5\u6536\u914D\u7F6E\u9879\uFF1A")]),b,n("p",null,[h,s(" \u5E03\u5C40\u5E94\u8BE5\u5305\u542B "),l(a,{to:"/zh/reference/components.html#content"},{default:e(()=>[s("Content")]),_:1}),s(" \u7EC4\u4EF6\u6765\u5C55\u793A Markdown \u5185\u5BB9\uFF1A")]),_,n("p",null,[s("\u4F60\u53EF\u4EE5\u63D0\u4F9B\u591A\u4E2A\u5E03\u5C40\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 "),l(a,{to:"/zh/reference/frontmatter.html#layout"},{default:e(()=>[s("layout")]),_:1}),s(" Frontmatter \u6765\u4FEE\u6539\u5E03\u5C40\u3002")]),E,n("p",null,[s("\u540C\u6837\u7684\uFF0C\u5BF9\u4E8E\u4E3B\u9898\u4E5F\u6709 "),n("a",g,[s("package.json"),l(c)]),s(" \u76F8\u5173\u7684\u7EA6\u5B9A\uFF1A")]),F,n("ul",null,[n("li",null,[s("\u5C06 "),f,s(" \u6309\u7167\u7EA6\u5B9A\u547D\u540D\uFF1A "),A,s(" \u6216 "),k,s(" \uFF0C\u5B83\u5E94\u8BE5\u548C "),x,s(" \u7684 "),l(a,{to:"/zh/reference/theme-api.html#name"},{default:e(()=>[s("name")]),_:1}),s(" \u5B57\u6BB5\u4FDD\u6301\u4E00\u81F4\u3002")]),N])])}const z=t(D,[["render",L],["__file","theme.html.vue"]]);export{z as default};

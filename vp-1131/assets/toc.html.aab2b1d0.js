import{_ as t,r as p,o as r,c as i,a as l,b as n,d as s,w as e,e as o}from"./app.63a4c30d.js";const D={},d=n("h1",{id:"toc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#toc","aria-hidden":"true"},"#"),s(" toc")],-1),y=o(`<p>\u8BE5\u63D2\u4EF6\u4F1A\u63D0\u4F9B\u4E00\u4E2A\u76EE\u5F55 (table-of-contents, TOC) \u7EC4\u4EF6\u3002</p><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-toc@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">tocPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-toc&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">tocPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// \u914D\u7F6E\u9879</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">## </span><span style="color:#9CDCFE;">\u4E0E</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Markdown</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">\u76EE\u5F55\u8BED\u6CD5\u7684\u533A\u522B</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9CDCFE;">\u4E0E</span><span style="color:#D4D4D4;"> [</span><span style="color:#9CDCFE;">Markdown</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">\u76EE\u5F55\u8BED\u6CD5</span><span style="color:#D4D4D4;">](../../</span><span style="color:#9CDCFE;">guide</span><span style="color:#D4D4D4;">/</span><span style="color:#9CDCFE;">markdown</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">md</span><span style="color:#D4D4D4;">#</span><span style="color:#9CDCFE;">\u76EE\u5F55</span><span style="color:#D4D4D4;">) </span><span style="color:#9CDCFE;">\u7C7B\u4F3C</span><span style="color:#D4D4D4;">\uFF0C</span><span style="color:#9CDCFE;">\u8BE5\u63D2\u4EF6\u63D0\u4F9B\u7684\u76EE\u5F55\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u5728\u4F60\u7684</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">Markdown</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">\u5185\u5BB9\u4E2D\u4F7F\u7528</span><span style="color:#D4D4D4;">\uFF1A</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">\`\`\`md</span></span>
<span class="line"><span style="color:#CE9178;">&lt;!-- Markdown \u76EE\u5F55\u8BED\u6CD5 --&gt;</span></span>
<span class="line"><span style="color:#CE9178;">[[toc]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">&lt;!-- Vue \u76EE\u5F55\u7EC4\u4EF6 --&gt;</span></span>
<span class="line"><span style="color:#CE9178;">&lt;Toc /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 Build \u6A21\u5F0F\u4E2D\uFF0C\u5B83\u4EEC\u90FD\u53EF\u4EE5\u88AB\u6B63\u786E\u5730\u9884\u6E32\u67D3\u3002\u7136\u800C\uFF0C\u5B83\u4EEC\u4E4B\u95F4\u5B58\u5728\u4E00\u4E9B\u533A\u522B\u3002</p><p>Markdown \u8BED\u6CD5 <code>[[toc]]</code> \u4EC5\u80FD\u5728 Markdown \u6587\u4EF6\u4E2D\u4F7F\u7528\u3002\u5B83\u662F\u7531 markdown-it \u89E3\u6790\u7684\uFF0C\u751F\u6210\u7684\u76EE\u5F55\u662F\u9759\u6001\u5185\u5BB9\u3002</p><p>\u7EC4\u4EF6 <code>&lt;Toc/&gt;</code> \u65E2\u53EF\u4EE5\u7528\u5728 Markdown \u6587\u4EF6\u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u7528\u5728 Vue \u6587\u4EF6\u4E2D\u3002\u5B83\u662F\u7531 Vue \u52A0\u8F7D\u7684\uFF0C\u751F\u6210\u7684\u76EE\u5F55\u662F\u4E00\u4E2A Vue \u7EC4\u4EF6\u3002</p>`,7),u=n("code",null,"linkClass",-1),v=n("code",null,"linkActiveClass",-1),C=o(`<p>\u56E0\u6B64\uFF0C\u8BE5\u63D2\u4EF6\u5BF9\u4E8E\u4E3B\u9898\u5F00\u53D1\u8005\u6765\u8BF4\u66F4\u4E3A\u6709\u7528\u3002</p><h2 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h2><h3 id="componentname" tabindex="-1"><a class="header-anchor" href="#componentname" aria-hidden="true">#</a> componentName</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>string</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A <code>&#39;Toc&#39;</code></p></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u6307\u5B9A\u76EE\u5F55\u7EC4\u4EF6\u7684\u540D\u79F0\u3002</p></li></ul><h3 id="defaultpropsoptions" tabindex="-1"><a class="header-anchor" href="#defaultpropsoptions" aria-hidden="true">#</a> defaultPropsOptions</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>Partial&lt;TocPropsOptions&gt;</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A <code>{}</code></p></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u8986\u76D6\u7EC4\u4EF6 <a href="#options">options</a> Prop \u7684\u9ED8\u8BA4\u503C\u3002</p></li></ul><h2 id="\u7EC4\u4EF6-props" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6-props" aria-hidden="true">#</a> \u7EC4\u4EF6 Props</h2><p>\u76EE\u5F55\u7EC4\u4EF6\u53EF\u4EE5\u901A\u8FC7 Props \u6765\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Toc</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> /</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> headers</h3><ul><li>\u7C7B\u578B\uFF1A <code>PageHeader[]</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">PageHeader</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">level</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">slug</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">PageHeader</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u8BE6\u60C5\uFF1A</p><p>\u6307\u5B9A\u8981\u6E32\u67D3\u7684\u6807\u9898\u6570\u7EC4\u3002</p><p>\u5982\u679C\u8BE5 Prop \u6CA1\u6709\u88AB\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u4F1A\u4F7F\u7528\u5F53\u524D\u9875\u9762\u7684\u6807\u9898\u3002</p></li></ul><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h3><ul><li>\u7C7B\u578B\uFF1A <code>Partial&lt;TocPropsOptions&gt;</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">TocPropsOptions</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">containerTag</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">containerClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">listClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">itemClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkTag</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;RouterLink&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkActiveClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkChildrenActiveClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u9ED8\u8BA4\u503C\uFF1A</p><p>\u4E0B\u5217\u9ED8\u8BA4\u503C\u53EF\u4EE5\u7528\u8FC7 <a href="#defaultpropsoptions">defaultPropsOptions</a> \u6765\u8986\u76D6\uFF1A</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">defaultOptions</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">containerTag:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;nav&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">containerClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-toc&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">listClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-toc-list&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">itemClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-toc-item&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkTag:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;RouterLink&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-toc-link&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkActiveClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;active&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkChildrenActiveClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;active&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u8BE6\u60C5\uFF1A</p><p>\u81EA\u5B9A\u4E49\u76EE\u5F55\u7EC4\u4EF6\u3002</p><p>\u5982\u679C <code>containerTag</code> \u8BBE\u7F6E\u4E3A\u7A7A\u5B57\u7B26\u4E32 <code>&#39;&#39;</code> \uFF0C\u90A3\u4E48\u6700\u5916\u5C42\u7684 <code>&lt;nav&gt;</code> Container \u4F1A\u88AB\u5B8C\u5168\u79FB\u9664\u3002</p></li><li><p>\u793A\u4F8B\uFF1A</p><p>\u4F7F\u7528\u9ED8\u8BA4 options \u7684\u76EE\u5F55\u7EC4\u4EF6\u7684\u6E32\u67D3\u7ED3\u679C\u7C7B\u4F3C\u4EE5\u4E0B\u7ED3\u6784\uFF1A</p></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">&lt;!-- container --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">nav</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;vuepress-toc&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">&lt;!-- list --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">ul</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;vuepress-toc-list&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">&lt;!-- item --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">li</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;vuepress-toc-item&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">&lt;!-- link --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">RouterLink</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;vuepress-toc-link&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">to</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;#foo&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Foo</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">RouterLink</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">li</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">&lt;!-- item with children --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">li</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;vuepress-toc-item&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">&lt;!-- link (children active) --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">RouterLink</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;vuepress-toc-link active&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">to</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;#bar&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Bar</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">RouterLink</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#6A9955;">&lt;!-- list (children) --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">ul</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;vuepress-toc-list&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#6A9955;">&lt;!-- item --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">li</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;vuepress-toc-item&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#6A9955;">&lt;!-- link (active) --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">            </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">RouterLink</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;vuepress-toc-link active&quot;</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">to</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;#bar-child&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">Bar Child</span><span style="color:#808080;">&lt;/</span><span style="color:#4EC9B0;">RouterLink</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">li</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">ul</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">li</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">ul</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">nav</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function m(E,b){const c=p("NpmBadge"),a=p("RouterLink");return r(),i("div",null,[d,l(c,{package:"@vuepress/plugin-toc"}),y,n("p",null,[s("\u8BE5\u63D2\u4EF6\u53EF\u4EE5\u548C "),l(a,{to:"/zh/reference/plugin/active-header-links.html"},{default:e(()=>[s("@vuepress/plugin-active-header-links")]),_:1}),s(" \u534F\u540C\u5DE5\u4F5C\uFF0C\u4F60\u53EA\u9700\u8981\u5C06 "),l(a,{to:"/zh/reference/plugin/active-header-links.html#headerlinkselector"},{default:e(()=>[s("headerLinkSelector")]),_:1}),s(" \u4E0E\u8BE5\u63D2\u4EF6\u7684 "),u,s(" \u5339\u914D\u5373\u53EF\u3002\u5F53\u9875\u9762\u6EDA\u52A8\u81F3\u67D0\u4E2A\u6807\u9898\u951A\u70B9\u540E\uFF0C\u5BF9\u5E94\u7684\u94FE\u63A5\u5C31\u4F1A\u88AB\u52A0\u4E0A "),v,s(" \u7C7B\u540D\u3002")]),C])}const g=t(D,[["render",m],["__file","toc.html.vue"]]);export{g as default};

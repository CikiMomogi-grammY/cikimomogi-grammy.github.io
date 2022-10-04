import{_ as c,r as p,o as r,c as i,a,b as n,d as s,w as e,e as o}from"./app.63a4c30d.js";const D={},d=n("h1",{id:"toc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#toc","aria-hidden":"true"},"#"),s(" toc")],-1),y=o(`<p>This plugin will provide a table-of-contents (TOC) component.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-toc@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">tocPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-toc&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">tocPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="differences-with-markdown-toc-syntax" tabindex="-1"><a class="header-anchor" href="#differences-with-markdown-toc-syntax" aria-hidden="true">#</a> Differences with Markdown TOC Syntax</h2>`,5),u=o(`<div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">&lt;!-- markdown toc syntax --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">[toc</span><span style="color:#D4D4D4;">]]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">&lt;!-- vue toc component --&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;Toc /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Both of them can be pre-rendered correctly in build mode. However, there are some differences between them.</p><p>The markdown syntax <code>[[toc]]</code> could only be used in markdown files. It is parsed by markdown-it, and the generated TOC is static content.</p><p>The component <code>&lt;Toc/&gt;</code> could be used in both markdown files and vue files. It is loaded by vue, and the generated TOC is a vue component.</p>`,4),v=n("code",null,"linkClass",-1),C=n("code",null,"linkActiveClass",-1),m=o(`<p>Therefore, this plugin is more useful for theme developers.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="componentname" tabindex="-1"><a class="header-anchor" href="#componentname" aria-hidden="true">#</a> componentName</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&#39;Toc&#39;</code></p></li><li><p>Details:</p><p>Specify the name of the TOC component.</p></li></ul><h3 id="defaultpropsoptions" tabindex="-1"><a class="header-anchor" href="#defaultpropsoptions" aria-hidden="true">#</a> defaultPropsOptions</h3><ul><li><p>Type: <code>Partial&lt;TocPropsOptions&gt;</code></p></li><li><p>Default: <code>{}</code></p></li><li><p>Details:</p><p>Override the default values of the component <a href="#options-1">options</a> prop.</p></li></ul><h2 id="component-props" tabindex="-1"><a class="header-anchor" href="#component-props" aria-hidden="true">#</a> Component Props</h2><p>The TOC component also accepts props for customization.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#4EC9B0;">Toc</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">headers</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> :</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;"> /</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> headers</h3><ul><li>Type: <code>PageHeader[]</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">PageHeader</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">level</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">slug</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">children</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">PageHeader</span><span style="color:#D4D4D4;">[]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Specify the headers array to render.</p><p>If this prop is not specified, the headers of current page will be used.</p></li></ul><h3 id="options-1" tabindex="-1"><a class="header-anchor" href="#options-1" aria-hidden="true">#</a> options</h3><ul><li>Type: <code>Partial&lt;TocPropsOptions&gt;</code></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">TocPropsOptions</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">containerTag</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">containerClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">listClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">itemClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkTag</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&#39;a&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;RouterLink&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkActiveClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkChildrenActiveClass</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Default:</p><p>Following default values can be overridden by <a href="#defaultpropsoptions">defaultPropsOptions</a>.</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">defaultOptions</span><span style="color:#D4D4D4;"> = {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">containerTag:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;nav&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">containerClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-toc&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">listClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-toc-list&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">itemClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-toc-item&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkTag:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;RouterLink&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;vuepress-toc-link&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkActiveClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;active&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">linkChildrenActiveClass:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;active&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Customize the TOC component.</p><p>If the <code>containerTag</code> is set to an empty string <code>&#39;&#39;</code>, the <code>&lt;nav&gt;</code> container will be removed totally.</p></li><li><p>Example:</p><p>The rendered TOC component with default options looks like:</p></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function h(b,g){const t=p("NpmBadge"),l=p("RouterLink");return r(),i("div",null,[d,a(t,{package:"@vuepress/plugin-toc"}),y,n("p",null,[s("Similar to the "),a(l,{to:"/guide/markdown.html#table-of-contents"},{default:e(()=>[s("Table of Contents Markdown Syntax")]),_:1}),s(", the TOC component that provided by this plugin could be used in your markdown content directly:")]),u,n("p",null,[s("This plugin could work together with "),a(l,{to:"/reference/plugin/active-header-links.html"},{default:e(()=>[s("@vuepress/plugin-active-header-links")]),_:1}),s(" by setting the "),a(l,{to:"/reference/plugin/active-header-links.html#headerlinkselector"},{default:e(()=>[s("headerLinkSelector")]),_:1}),s(" to match the "),v,s(" option. When the page scroll to a certain header anchor, this corresponding link will be added "),C,s(" class name.")]),m])}const f=c(D,[["render",h],["__file","toc.html.vue"]]);export{f as default};

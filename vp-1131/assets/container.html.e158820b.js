import{_ as r,r as l,o as c,c as d,a as e,b as s,d as n,w as i,e as o}from"./app.63a4c30d.js";const D={},u=s("h1",{id:"container",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#container","aria-hidden":"true"},"#"),n(" container")],-1),y=s("p",null,"Register markdown custom containers in your VuePress site.",-1),h={href:"https://github.com/markdown-it/markdown-it-container",target:"_blank",rel:"noopener noreferrer"},f=o(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-container@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">containerPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-container&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">containerPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="container-syntax" tabindex="-1"><a class="header-anchor" href="#container-syntax" aria-hidden="true">#</a> Container Syntax</h2><div class="language-markdown ext-md line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: &lt;type&gt; [</span><span style="color:#CE9178;">info</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">content</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>The <code>type</code> is required and should be specified via <a href="#type">type</a> option.</li><li>The <code>info</code> is optional, and the default value can be specified via <code>defaultInfo</code> in <a href="#locales">locales</a> option.</li><li>The <code>content</code> can be any valid markdown content.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>This plugin can be used multiple times to support different types of containers.</p></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h3>`,9),m=s("li",null,[s("p",null,[n("Type: "),s("code",null,"string")])],-1),v=s("p",null,"Details:",-1),b=s("p",null,"The type of the container.",-1),C=s("code",null,"name",-1),g={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},_=o(`<h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales" aria-hidden="true">#</a> locales</h3><ul><li><p>Type: <code>Record&lt;string, { defaultInfo: string }&gt;</code></p></li><li><p>Details:</p><p>The default <code>info</code> of the container in different locales.</p><p>If this option is not specified, the default <code>info</code> will fallback to the uppercase of the <a href="#type">type</a> option.</p></li><li><p>Example:</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">containerPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">type:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;tip&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">defaultInfo:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;TIP&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">        </span><span style="color:#CE9178;">&#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">          </span><span style="color:#9CDCFE;">defaultInfo:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;\u63D0\u793A&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),E=o(`<h3 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> before</h3><ul><li><p>Type: <code>(info: string) =&gt; string</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">info</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;">): </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#CE9178;">\`&lt;div class=&quot;custom-container </span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">type</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">&quot;&gt;</span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">info</span><span style="color:#D4D4D4;"> ? </span><span style="color:#CE9178;">\`&lt;p class=&quot;custom-container-title&quot;&gt;</span><span style="color:#569CD6;">\${</span><span style="color:#9CDCFE;">info</span><span style="color:#569CD6;">}</span><span style="color:#CE9178;">&lt;/p&gt;\`</span><span style="color:#D4D4D4;"> : </span><span style="color:#CE9178;">&#39;&#39;</span><span style="color:#569CD6;">}</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">\`</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>A function to render the starting tag of the container.</p><p>The first param is the <code>info</code> part of <a href="#container-syntax">container syntax</a>.</p><p>This option will not take effect if you don&#39;t specify the <a href="#after">after</a> option.</p></li></ul><h3 id="after" tabindex="-1"><a class="header-anchor" href="#after" aria-hidden="true">#</a> after</h3><ul><li><p>Type: <code>(info: string) =&gt; string</code></p></li><li><p>Default:</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">(): </span><span style="color:#4EC9B0;">string</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;&lt;/div&gt;</span><span style="color:#D7BA7D;">\\n</span><span style="color:#CE9178;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>A function to render the ending tag of the container.</p><p>The first param is the <code>info</code> part of <a href="#container-syntax">container syntax</a>.</p><p>This option will not take effect if you don&#39;t specify the <a href="#before">before</a> option.</p></li></ul><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> render</h3><ul><li>Type:</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#569CD6;">type</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">MarkdownItContainerRenderFunction</span><span style="color:#D4D4D4;"> = (</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">tokens</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Token</span><span style="color:#D4D4D4;">[],</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">number</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">options</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">any</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">env</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">MarkdownEnv</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">self</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">Renderer</span></span>
<span class="line"><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),k=s("p",null,"Details:",-1),x=s("code",null,"render",-1),w={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},T=s("p",null,[n("This plugin uses a default "),s("code",null,"render"),n(" function. If you specify this option, the default "),s("code",null,"render"),n(" function will be replaced, and the "),s("a",{href:"#locales"},"locales"),n(", "),s("a",{href:"#before"},"before"),n(" and "),s("a",{href:"#after"},"after"),n(" options will be ignored.")],-1),F=s("h3",{id:"validate",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#validate","aria-hidden":"true"},"#"),n(" validate")],-1),B=s("li",null,[s("p",null,[n("Type: "),s("code",null,"(params: string) => boolean")])],-1),I=s("p",null,"Details:",-1),A=s("code",null,"validate",-1),N={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"},P=s("h3",{id:"marker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#marker","aria-hidden":"true"},"#"),n(" marker")],-1),R=s("li",null,[s("p",null,[n("Type: "),s("code",null,"string")])],-1),q=s("p",null,"Details:",-1),V=s("code",null,"marker",-1),L={href:"https://github.com/markdown-it/markdown-it-container#api",target:"_blank",rel:"noopener noreferrer"};function $(M,S){const p=l("NpmBadge"),a=l("ExternalLinkIcon"),t=l("RouterLink");return c(),d("div",null,[u,e(p,{package:"@vuepress/plugin-container"}),y,s("p",null,[n("This plugin simplifies the use of "),s("a",h,[n("markdown-it-container"),e(a)]),n(", but also retains its original capabilities.")]),s("p",null,[n("The "),e(t,{to:"/reference/default-theme/markdown.html#custom-containers"},{default:i(()=>[n("Custom Containers")]),_:1}),n(" of default theme is powered by this plugin.")]),f,s("ul",null,[m,s("li",null,[v,b,s("p",null,[n("It will be used as the "),C,n(" param of "),s("a",g,[n("markdown-it-container"),e(a)]),n(".")])])]),_,s("ul",null,[s("li",null,[n("Also see: "),s("ul",null,[s("li",null,[e(t,{to:"/guide/i18n.html"},{default:i(()=>[n("Guide > I18n")]),_:1})])])])]),E,s("ul",null,[s("li",null,[k,s("p",null,[n("The "),x,n(" option of "),s("a",w,[n("markdown-it-container"),e(a)]),n(".")]),T])]),F,s("ul",null,[B,s("li",null,[I,s("p",null,[n("The "),A,n(" option of "),s("a",N,[n("markdown-it-container"),e(a)]),n(".")])])]),P,s("ul",null,[R,s("li",null,[q,s("p",null,[n("The "),V,n(" option of "),s("a",L,[n("markdown-it-container"),e(a)]),n(".")])])])])}const G=r(D,[["render",$],["__file","container.html.vue"]]);export{G as default};

import{_ as t,r as n,o,c,a as l,b as e,d as s,e as p}from"./app.ae6781f0.js";const r={},d=e("h1",{id:"palette",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#palette","aria-hidden":"true"},"#"),s(" palette")],-1),u=p(`<p>为你的主题提供调色板功能。</p><p>该插件主要用于开发主题，并且已经集成到默认主题中。大部分情况下你不需要直接使用它。</p><p>对于主题作者，该插件可以帮助你提供用户自定义样式的能力。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-palette@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">palettePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-palette&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">palettePlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调色板和样式" tabindex="-1"><a class="header-anchor" href="#调色板和样式" aria-hidden="true">#</a> 调色板和样式</h2><p>该插件会提供一个 <code>@vuepress/plugin-palette/palette</code> （调色板文件）和一个 <code>@vuepress/plugin-palette/style</code> （样式文件），用于在你的主题样式中引入。</p>`,8),D={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer"},y={href:"https://sass-lang.com/documentation/variables",target:"_blank",rel:"noopener noreferrer"},v={href:"http://lesscss.org/features/#variables-feature",target:"_blank",rel:"noopener noreferrer"},h={href:"https://stylus-lang.com/docs/variables.html",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>样式文件用于覆盖默认样式或添加额外样式，因此它一般会在你主题样式的末尾引入。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>在你的主题中使用该插件，假设你使用 SASS 作为 CSS 预处理器：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">palettePlugin</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">preset:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;sass&#39;</span><span style="color:#D4D4D4;"> }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用调色板" tabindex="-1"><a class="header-anchor" href="#使用调色板" aria-hidden="true">#</a> 使用调色板</h3><p>在你主题需要使用对应变量的地方引入该插件的调色板文件，比如在 <code>Layout.vue</code> 中：</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">h1</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;palette-title&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">你好，调色板！</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">h1</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;scss&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;">/* 从该插件的调色板中引入变量 */</span></span>
<span class="line"><span style="color:#C586C0;">@import</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-palette/palette&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/* 设置变量的默认值 */</span></span>
<span class="line"><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">!default</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/* 在你的样式中使用变量 */</span></span>
<span class="line"><span style="color:#D7BA7D;">.palette-title</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，用户就可以在 <code>.vuepress/styles/palette.scss</code> 中自定义变量：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">green</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用样式" tabindex="-1"><a class="header-anchor" href="#使用样式" aria-hidden="true">#</a> 使用样式</h3><p>在你主题的样式之后引入该插件的样式文件，比如在 <code>clientConfigFile</code> 中：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// 引入你主题本身的样式文件</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;path/to/your/theme/style&#39;</span></span>
<span class="line"><span style="color:#6A9955;">// 引入该插件的样式文件</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-palette/style&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，用户就可以在 <code>.vuepress/styles/index.scss</code> 中添加额外样式，并可以覆盖你主题本身的样式：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">h1</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">font-size</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2.5rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2><h3 id="preset" tabindex="-1"><a class="header-anchor" href="#preset" aria-hidden="true">#</a> preset</h3><ul><li><p>类型： <code>&#39;css&#39; | &#39;sass&#39; | &#39;less&#39; | &#39;stylus&#39;</code></p></li><li><p>默认值： <code>&#39;css&#39;</code></p></li><li><p>详情：</p><p>设置其他选项的预设。</p><p>如果你没有对该插件进行进阶定制化的需要，建议只设置该配置项并忽略其他选项。</p></li></ul><h3 id="userpalettefile" tabindex="-1"><a class="header-anchor" href="#userpalettefile" aria-hidden="true">#</a> userPaletteFile</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;.vuepress/styles/palette.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/palette.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/palette.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/palette.styl&#39;</code></li></ul></li><li><p>详情：</p><p>用户调色板文件的路径，是针对源文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>该文件用于用户定义样式变量，建议保持默认值作为约定的文件路径。</p></li></ul><h3 id="temppalettefile" tabindex="-1"><a class="header-anchor" href="#temppalettefile" aria-hidden="true">#</a> tempPaletteFile</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;styles/palette.css&#39;</code></li><li>sass: <code>&#39;styles/palette.scss&#39;</code></li><li>less: <code>&#39;styles/palette.less&#39;</code></li><li>stylus: <code>&#39;styles/palette.styl&#39;</code></li></ul></li><li><p>详情：</p><p>生成的调色板临时文件的路径，是针对临时文件文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>你应该使用 <code>&#39;@vuepress/plugin-palette/palette&#39;</code> 别名来引入调色板文件，因此在绝大多数情况下你不需要修改该配置项。</p></li></ul><h3 id="userstylefile" tabindex="-1"><a class="header-anchor" href="#userstylefile" aria-hidden="true">#</a> userStyleFile</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;.vuepress/styles/index.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/index.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/index.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/index.styl&#39;</code></li></ul></li><li><p>详情：</p><p>用户样式文件的路径，是针对源文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>该文件用于用户覆盖默认样式和添加额外样式，建议保持默认值作为约定的文件路径。</p></li></ul><h3 id="tempstylefile" tabindex="-1"><a class="header-anchor" href="#tempstylefile" aria-hidden="true">#</a> tempStyleFile</h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值：</p><ul><li>css: <code>&#39;styles/index.css&#39;</code></li><li>sass: <code>&#39;styles/index.scss&#39;</code></li><li>less: <code>&#39;styles/index.less&#39;</code></li><li>stylus: <code>&#39;styles/index.styl&#39;</code></li></ul></li><li><p>详情：</p><p>生成的样式临时文件的路径，是针对临时文件文件目录的相对路径。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>你应该使用 <code>&#39;@vuepress/plugin-palette/style&#39;</code> 别名来引入样式文件，因此在绝大多数情况下你不需要修改该配置项。</p></li></ul><h3 id="importcode" tabindex="-1"><a class="header-anchor" href="#importcode" aria-hidden="true">#</a> importCode</h3><ul><li><p>类型： <code>(filePath: string) =&gt; string</code></p></li><li><p>默认值：</p><ul><li>css: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>sass: <code>(filePath) =&gt; \`@forward &#39;file:///\${filePath}&#39;;\\n\`</code></li><li>less: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>stylus: <code>(filePath) =&gt; \`@require &#39;\${filePath}&#39;;\\n\`</code></li></ul></li><li><p>详情：</p><p>用于生成引入代码的函数。</p><p>默认值依赖于 <a href="#preset">preset</a> 配置项。</p><p>该配置项用于生成 <a href="#temppalettefile">tempPaletteFile</a> 和 <a href="#tempstylefile">tempStyleFile</a> ，在绝大多数情况下你不需要修改该配置项。</p></li></ul>`,27);function b(C,g){const i=n("NpmBadge"),a=n("ExternalLinkIcon");return o(),c("div",null,[d,l(i,{package:"@vuepress/plugin-palette"}),u,e("p",null,[s("调色板文件用于定义样式变量，因此它一般会在你主题样式的开头引入。举例来说，用户可以在调色板中定义 "),e("a",D,[s("CSS 变量"),l(a)]),s(" 、 "),e("a",y,[s("SASS 变量"),l(a)]),s(" 、 "),e("a",v,[s("LESS 变量"),l(a)]),s(" 或 "),e("a",h,[s("Stylus 变量"),l(a)]),s(" ，然后你可以在你的主题样式中使用这些变量。")]),m])}const E=t(r,[["render",b],["__file","palette.html.vue"]]);export{E as default};

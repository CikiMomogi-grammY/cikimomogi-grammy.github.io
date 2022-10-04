import{_ as o,r as n,o as t,c,a as l,b as e,d as s,e as p}from"./app.63a4c30d.js";const r={},d=e("h1",{id:"palette",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#palette","aria-hidden":"true"},"#"),s(" palette")],-1),u=p(`<p>\u4E3A\u4F60\u7684\u4E3B\u9898\u63D0\u4F9B\u8C03\u8272\u677F\u529F\u80FD\u3002</p><p>\u8BE5\u63D2\u4EF6\u4E3B\u8981\u7528\u4E8E\u5F00\u53D1\u4E3B\u9898\uFF0C\u5E76\u4E14\u5DF2\u7ECF\u96C6\u6210\u5230\u9ED8\u8BA4\u4E3B\u9898\u4E2D\u3002\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u4F60\u4E0D\u9700\u8981\u76F4\u63A5\u4F7F\u7528\u5B83\u3002</p><p>\u5BF9\u4E8E\u4E3B\u9898\u4F5C\u8005\uFF0C\u8BE5\u63D2\u4EF6\u53EF\u4EE5\u5E2E\u52A9\u4F60\u63D0\u4F9B\u7528\u6237\u81EA\u5B9A\u4E49\u6837\u5F0F\u7684\u80FD\u529B\u3002</p><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-palette@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">palettePlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-palette&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">palettePlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// \u914D\u7F6E\u9879</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8C03\u8272\u677F\u548C\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8C03\u8272\u677F\u548C\u6837\u5F0F" aria-hidden="true">#</a> \u8C03\u8272\u677F\u548C\u6837\u5F0F</h2><p>\u8BE5\u63D2\u4EF6\u4F1A\u63D0\u4F9B\u4E00\u4E2A <code>@vuepress/plugin-palette/palette</code> \uFF08\u8C03\u8272\u677F\u6587\u4EF6\uFF09\u548C\u4E00\u4E2A <code>@vuepress/plugin-palette/style</code> \uFF08\u6837\u5F0F\u6587\u4EF6\uFF09\uFF0C\u7528\u4E8E\u5728\u4F60\u7684\u4E3B\u9898\u6837\u5F0F\u4E2D\u5F15\u5165\u3002</p>`,8),D={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",target:"_blank",rel:"noopener noreferrer"},y={href:"https://sass-lang.com/documentation/variables",target:"_blank",rel:"noopener noreferrer"},v={href:"http://lesscss.org/features/#variables-feature",target:"_blank",rel:"noopener noreferrer"},h={href:"https://stylus-lang.com/docs/variables.html",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>\u6837\u5F0F\u6587\u4EF6\u7528\u4E8E\u8986\u76D6\u9ED8\u8BA4\u6837\u5F0F\u6216\u6DFB\u52A0\u989D\u5916\u6837\u5F0F\uFF0C\u56E0\u6B64\u5B83\u4E00\u822C\u4F1A\u5728\u4F60\u4E3B\u9898\u6837\u5F0F\u7684\u672B\u5C3E\u5F15\u5165\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u5728\u4F60\u7684\u4E3B\u9898\u4E2D\u4F7F\u7528\u8BE5\u63D2\u4EF6\uFF0C\u5047\u8BBE\u4F60\u4F7F\u7528 SASS \u4F5C\u4E3A CSS \u9884\u5904\u7406\u5668\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#6A9955;">// ...</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">palettePlugin</span><span style="color:#D4D4D4;">({ </span><span style="color:#9CDCFE;">preset:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;sass&#39;</span><span style="color:#D4D4D4;"> }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u8C03\u8272\u677F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8C03\u8272\u677F" aria-hidden="true">#</a> \u4F7F\u7528\u8C03\u8272\u677F</h3><p>\u5728\u4F60\u4E3B\u9898\u9700\u8981\u4F7F\u7528\u5BF9\u5E94\u53D8\u91CF\u7684\u5730\u65B9\u5F15\u5165\u8BE5\u63D2\u4EF6\u7684\u8C03\u8272\u677F\u6587\u4EF6\uFF0C\u6BD4\u5982\u5728 <code>Layout.vue</code> \u4E2D\uFF1A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">h1</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">class</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;palette-title&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">\u4F60\u597D\uFF0C\u8C03\u8272\u677F\uFF01</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">h1</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;scss&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#6A9955;">/* \u4ECE\u8BE5\u63D2\u4EF6\u7684\u8C03\u8272\u677F\u4E2D\u5F15\u5165\u53D8\u91CF */</span></span>
<span class="line"><span style="color:#C586C0;">@import</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-palette/palette&#39;</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/* \u8BBE\u7F6E\u53D8\u91CF\u7684\u9ED8\u8BA4\u503C */</span></span>
<span class="line"><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">red</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">!default</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">/* \u5728\u4F60\u7684\u6837\u5F0F\u4E2D\u4F7F\u7528\u53D8\u91CF */</span></span>
<span class="line"><span style="color:#D7BA7D;">.palette-title</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">color</span><span style="color:#D4D4D4;">: </span><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u7528\u6237\u5C31\u53EF\u4EE5\u5728 <code>.vuepress/styles/palette.scss</code> \u4E2D\u81EA\u5B9A\u4E49\u53D8\u91CF\uFF1A</p><div class="language-scss ext-scss line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#9CDCFE;">$color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">green</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6837\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u6837\u5F0F</h3><p>\u5728\u4F60\u4E3B\u9898\u7684\u6837\u5F0F\u4E4B\u540E\u5F15\u5165\u8BE5\u63D2\u4EF6\u7684\u6837\u5F0F\u6587\u4EF6\uFF0C\u6BD4\u5982\u5728 <code>clientConfigFile</code> \u4E2D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6A9955;">// \u5F15\u5165\u4F60\u4E3B\u9898\u672C\u8EAB\u7684\u6837\u5F0F\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;path/to/your/theme/style&#39;</span></span>
<span class="line"><span style="color:#6A9955;">// \u5F15\u5165\u8BE5\u63D2\u4EF6\u7684\u6837\u5F0F\u6587\u4EF6</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-palette/style&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u7528\u6237\u5C31\u53EF\u4EE5\u5728 <code>.vuepress/styles/index.scss</code> \u4E2D\u6DFB\u52A0\u989D\u5916\u6837\u5F0F\uFF0C\u5E76\u53EF\u4EE5\u8986\u76D6\u4F60\u4E3B\u9898\u672C\u8EAB\u7684\u6837\u5F0F\uFF1A</p><div class="language-scss ext-scss line-numbers-mode"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D7BA7D;">h1</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">font-size</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">2.5rem</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u914D\u7F6E\u9879</h2><h3 id="preset" tabindex="-1"><a class="header-anchor" href="#preset" aria-hidden="true">#</a> preset</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>&#39;css&#39; | &#39;sass&#39; | &#39;less&#39; | &#39;stylus&#39;</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A <code>&#39;css&#39;</code></p></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u8BBE\u7F6E\u5176\u4ED6\u9009\u9879\u7684\u9884\u8BBE\u3002</p><p>\u5982\u679C\u4F60\u6CA1\u6709\u5BF9\u8BE5\u63D2\u4EF6\u8FDB\u884C\u8FDB\u9636\u5B9A\u5236\u5316\u7684\u9700\u8981\uFF0C\u5EFA\u8BAE\u53EA\u8BBE\u7F6E\u8BE5\u914D\u7F6E\u9879\u5E76\u5FFD\u7565\u5176\u4ED6\u9009\u9879\u3002</p></li></ul><h3 id="userpalettefile" tabindex="-1"><a class="header-anchor" href="#userpalettefile" aria-hidden="true">#</a> userPaletteFile</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>string</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A</p><ul><li>css: <code>&#39;.vuepress/styles/palette.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/palette.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/palette.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/palette.styl&#39;</code></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u7528\u6237\u8C03\u8272\u677F\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u662F\u9488\u5BF9\u6E90\u6587\u4EF6\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002</p><p>\u9ED8\u8BA4\u503C\u4F9D\u8D56\u4E8E <a href="#preset">preset</a> \u914D\u7F6E\u9879\u3002</p><p>\u8BE5\u6587\u4EF6\u7528\u4E8E\u7528\u6237\u5B9A\u4E49\u6837\u5F0F\u53D8\u91CF\uFF0C\u5EFA\u8BAE\u4FDD\u6301\u9ED8\u8BA4\u503C\u4F5C\u4E3A\u7EA6\u5B9A\u7684\u6587\u4EF6\u8DEF\u5F84\u3002</p></li></ul><h3 id="temppalettefile" tabindex="-1"><a class="header-anchor" href="#temppalettefile" aria-hidden="true">#</a> tempPaletteFile</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>string</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A</p><ul><li>css: <code>&#39;styles/palette.css&#39;</code></li><li>sass: <code>&#39;styles/palette.scss&#39;</code></li><li>less: <code>&#39;styles/palette.less&#39;</code></li><li>stylus: <code>&#39;styles/palette.styl&#39;</code></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u751F\u6210\u7684\u8C03\u8272\u677F\u4E34\u65F6\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u662F\u9488\u5BF9\u4E34\u65F6\u6587\u4EF6\u6587\u4EF6\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002</p><p>\u9ED8\u8BA4\u503C\u4F9D\u8D56\u4E8E <a href="#preset">preset</a> \u914D\u7F6E\u9879\u3002</p><p>\u4F60\u5E94\u8BE5\u4F7F\u7528 <code>&#39;@vuepress/plugin-palette/palette&#39;</code> \u522B\u540D\u6765\u5F15\u5165\u8C03\u8272\u677F\u6587\u4EF6\uFF0C\u56E0\u6B64\u5728\u7EDD\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4F60\u4E0D\u9700\u8981\u4FEE\u6539\u8BE5\u914D\u7F6E\u9879\u3002</p></li></ul><h3 id="userstylefile" tabindex="-1"><a class="header-anchor" href="#userstylefile" aria-hidden="true">#</a> userStyleFile</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>string</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A</p><ul><li>css: <code>&#39;.vuepress/styles/index.css&#39;</code></li><li>sass: <code>&#39;.vuepress/styles/index.scss&#39;</code></li><li>less: <code>&#39;.vuepress/styles/index.less&#39;</code></li><li>stylus: <code>&#39;.vuepress/styles/index.styl&#39;</code></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u7528\u6237\u6837\u5F0F\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u662F\u9488\u5BF9\u6E90\u6587\u4EF6\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002</p><p>\u9ED8\u8BA4\u503C\u4F9D\u8D56\u4E8E <a href="#preset">preset</a> \u914D\u7F6E\u9879\u3002</p><p>\u8BE5\u6587\u4EF6\u7528\u4E8E\u7528\u6237\u8986\u76D6\u9ED8\u8BA4\u6837\u5F0F\u548C\u6DFB\u52A0\u989D\u5916\u6837\u5F0F\uFF0C\u5EFA\u8BAE\u4FDD\u6301\u9ED8\u8BA4\u503C\u4F5C\u4E3A\u7EA6\u5B9A\u7684\u6587\u4EF6\u8DEF\u5F84\u3002</p></li></ul><h3 id="tempstylefile" tabindex="-1"><a class="header-anchor" href="#tempstylefile" aria-hidden="true">#</a> tempStyleFile</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>string</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A</p><ul><li>css: <code>&#39;styles/index.css&#39;</code></li><li>sass: <code>&#39;styles/index.scss&#39;</code></li><li>less: <code>&#39;styles/index.less&#39;</code></li><li>stylus: <code>&#39;styles/index.styl&#39;</code></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u751F\u6210\u7684\u6837\u5F0F\u4E34\u65F6\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u662F\u9488\u5BF9\u4E34\u65F6\u6587\u4EF6\u6587\u4EF6\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84\u3002</p><p>\u9ED8\u8BA4\u503C\u4F9D\u8D56\u4E8E <a href="#preset">preset</a> \u914D\u7F6E\u9879\u3002</p><p>\u4F60\u5E94\u8BE5\u4F7F\u7528 <code>&#39;@vuepress/plugin-palette/style&#39;</code> \u522B\u540D\u6765\u5F15\u5165\u6837\u5F0F\u6587\u4EF6\uFF0C\u56E0\u6B64\u5728\u7EDD\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4F60\u4E0D\u9700\u8981\u4FEE\u6539\u8BE5\u914D\u7F6E\u9879\u3002</p></li></ul><h3 id="importcode" tabindex="-1"><a class="header-anchor" href="#importcode" aria-hidden="true">#</a> importCode</h3><ul><li><p>\u7C7B\u578B\uFF1A <code>(filePath: string) =&gt; string</code></p></li><li><p>\u9ED8\u8BA4\u503C\uFF1A</p><ul><li>css: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>sass: <code>(filePath) =&gt; \`@forward &#39;file:///\${filePath}&#39;;\\n\`</code></li><li>less: <code>(filePath) =&gt; \`@import &#39;\${filePath}&#39;;\\n\`</code></li><li>stylus: <code>(filePath) =&gt; \`@require &#39;\${filePath}&#39;;\\n\`</code></li></ul></li><li><p>\u8BE6\u60C5\uFF1A</p><p>\u7528\u4E8E\u751F\u6210\u5F15\u5165\u4EE3\u7801\u7684\u51FD\u6570\u3002</p><p>\u9ED8\u8BA4\u503C\u4F9D\u8D56\u4E8E <a href="#preset">preset</a> \u914D\u7F6E\u9879\u3002</p><p>\u8BE5\u914D\u7F6E\u9879\u7528\u4E8E\u751F\u6210 <a href="#temppalettefile">tempPaletteFile</a> \u548C <a href="#tempstylefile">tempStyleFile</a> \uFF0C\u5728\u7EDD\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u4F60\u4E0D\u9700\u8981\u4FEE\u6539\u8BE5\u914D\u7F6E\u9879\u3002</p></li></ul>`,27);function b(C,g){const i=n("NpmBadge"),a=n("ExternalLinkIcon");return t(),c("div",null,[d,l(i,{package:"@vuepress/plugin-palette"}),u,e("p",null,[s("\u8C03\u8272\u677F\u6587\u4EF6\u7528\u4E8E\u5B9A\u4E49\u6837\u5F0F\u53D8\u91CF\uFF0C\u56E0\u6B64\u5B83\u4E00\u822C\u4F1A\u5728\u4F60\u4E3B\u9898\u6837\u5F0F\u7684\u5F00\u5934\u5F15\u5165\u3002\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u8C03\u8272\u677F\u4E2D\u5B9A\u4E49 "),e("a",D,[s("CSS \u53D8\u91CF"),l(a)]),s(" \u3001 "),e("a",y,[s("SASS \u53D8\u91CF"),l(a)]),s(" \u3001 "),e("a",v,[s("LESS \u53D8\u91CF"),l(a)]),s(" \u6216 "),e("a",h,[s("Stylus \u53D8\u91CF"),l(a)]),s(" \uFF0C\u7136\u540E\u4F60\u53EF\u4EE5\u5728\u4F60\u7684\u4E3B\u9898\u6837\u5F0F\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u53D8\u91CF\u3002")]),m])}const E=o(r,[["render",b],["__file","palette.html.vue"]]);export{E as default};
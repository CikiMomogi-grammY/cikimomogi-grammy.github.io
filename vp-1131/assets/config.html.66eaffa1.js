const e=JSON.parse(`{"key":"v-65a9edeb","path":"/zh/reference/config.html","title":"配置","lang":"zh-CN","frontmatter":{},"excerpt":"<h1 id=\\"配置\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#配置\\" aria-hidden=\\"true\\">#</a> 配置</h1>\\n<NpmBadge package=\\"@vuepress/cli\\" /><NpmBadge package=\\"@vuepress/core\\" /><h2 id=\\"站点配置\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#站点配置\\" aria-hidden=\\"true\\">#</a> 站点配置</h2>\\n<h3 id=\\"base\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#base\\" aria-hidden=\\"true\\">#</a> base</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>/</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>部署站点的基础路径。</p>\\n<p>如果你想让你的网站部署到一个子路径下，你将需要设置它。它的值应当总是以斜杠开始，并以斜杠结束。举例来说，如果你想将你的网站部署到 <code v-pre>https://foo.github.io/bar/</code>，那么 <code v-pre>base</code> 应该被设置成 <code v-pre>&quot;/bar/&quot;</code>。</p>\\n<p><code v-pre>base</code> 将会作为前缀自动地插入到所有以 <code v-pre>/</code> 开始的其他选项的链接中，所以你只需要指定一次。</p>\\n<p>需要注意的是， <code v-pre>base</code> 应该是一个以 <code v-pre>/</code> 开始和结束的绝对路径名。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/assets.html#base-helper\\">指南 &gt; 静态资源 &gt; Base Helper</RouterLink></li>\\n<li><RouterLink to=\\"/zh/guide/deployment.html\\">指南 &gt; 部署</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h3 id=\\"lang\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#lang\\" aria-hidden=\\"true\\">#</a> lang</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>en-US</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>站点的语言。</p>\\n<p>它将会在最终渲染出的 HTML 中作为 <code v-pre>&lt;html&gt;</code> 标签的 <code v-pre>lang</code> 属性。</p>\\n<p>它可以设置在不同语言的 locales 中。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><a href=\\"#locales\\">配置 &gt; locales</a></li>\\n</ul>\\n</li>\\n</ul>\\n<h3 id=\\"title\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#title\\" aria-hidden=\\"true\\">#</a> title</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>''</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>站点的标题。</p>\\n<p>它将会作为所有页面标题的后缀，并且在默认主题的导航栏中显示。</p>\\n<p>它可以设置在不同语言的 locales 中。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><a href=\\"#locales\\">配置 &gt; locales</a></li>\\n</ul>\\n</li>\\n</ul>\\n<h3 id=\\"description\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#description\\" aria-hidden=\\"true\\">#</a> description</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>''</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>站点的描述。</p>\\n<p>它将会在最终渲染出的 HTML 中作为 <code v-pre>&lt;meta name=&quot;description&quot; /&gt;</code> 标签的 <code v-pre>content</code> 属性。它会被每个页面的 Frontmatter 中的 <code v-pre>description</code> 字段覆盖。</p>\\n<p>它可以设置在不同语言的 locales 中。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><a href=\\"#locales\\">配置 &gt; locales</a></li>\\n<li><RouterLink to=\\"/zh/reference/frontmatter.html#description\\">Frontmatter &gt; description</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h3 id=\\"head\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#head\\" aria-hidden=\\"true\\">#</a> head</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>HeadConfig[]</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>[]</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>在最终渲染出的 HTML 的 <code v-pre>&lt;head&gt;</code> 标签内加入的额外标签。</p>\\n<p>你可以通过 <code v-pre>[tagName, { attrName: attrValue }, innerHTML?]</code> 的格式来添加标签。</p>\\n<p>它可以设置在不同语言的 locales 中。</p>\\n</li>\\n<li>\\n<p>示例：</p>\\n<p>增加一个自定义的 favicon ：</p>\\n</li>\\n</ul>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre v-pre class=\\"shiki\\" style=\\"background-color: #1E1E1E\\"><code><span class=\\"line\\"><span style=\\"color: #C586C0\\">export</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #C586C0\\">default</span><span style=\\"color: #D4D4D4\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">  </span><span style=\\"color: #9CDCFE\\">head:</span><span style=\\"color: #D4D4D4\\"> [[</span><span style=\\"color: #CE9178\\">&#39;link&#39;</span><span style=\\"color: #D4D4D4\\">, { </span><span style=\\"color: #9CDCFE\\">rel:</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #CE9178\\">&#39;icon&#39;</span><span style=\\"color: #D4D4D4\\">, </span><span style=\\"color: #9CDCFE\\">href:</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #CE9178\\">&#39;/images/logo.png&#39;</span><span style=\\"color: #D4D4D4\\"> }]],</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><p>渲染为：</p>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre v-pre class=\\"shiki\\" style=\\"background-color: #1E1E1E\\"><code><span class=\\"line\\"><span style=\\"color: #808080\\">&lt;</span><span style=\\"color: #569CD6\\">head</span><span style=\\"color: #808080\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">  </span><span style=\\"color: #808080\\">&lt;</span><span style=\\"color: #569CD6\\">link</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #9CDCFE\\">rel</span><span style=\\"color: #D4D4D4\\">=</span><span style=\\"color: #CE9178\\">&quot;icon&quot;</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #9CDCFE\\">href</span><span style=\\"color: #D4D4D4\\">=</span><span style=\\"color: #CE9178\\">&quot;/images/logo.png&quot;</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #808080\\">/&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #808080\\">&lt;/</span><span style=\\"color: #569CD6\\">head</span><span style=\\"color: #808080\\">&gt;</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><ul>\\n<li>参考：\\n<ul>\\n<li><a href=\\"#locales\\">配置 &gt; locales</a></li>\\n<li><RouterLink to=\\"/zh/reference/frontmatter.html#head\\">Frontmatter &gt; head</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h3 id=\\"locales\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#locales\\" aria-hidden=\\"true\\">#</a> locales</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>{ [path: string]: Partial&lt;SiteLocaleData&gt; }</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>{}</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>多语言支持的各个语言 locales 。</p>\\n<p>可以使用的字段有：</p>\\n<ul>\\n<li><a href=\\"#lang\\">lang</a></li>\\n<li><a href=\\"#title\\">title</a></li>\\n<li><a href=\\"#description\\">description</a></li>\\n<li><a href=\\"#head\\">head</a></li>\\n</ul>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/i18n.html\\">指南 &gt; I18n</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h2 id=\\"主题配置\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#主题配置\\" aria-hidden=\\"true\\">#</a> 主题配置</h2>\\n<h3 id=\\"theme\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#theme\\" aria-hidden=\\"true\\">#</a> theme</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>Theme</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>设置站点要使用的主题。</p>\\n<p>如果不设置该选项，将会使用默认主题。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/theme.html\\">指南 &gt; 主题</RouterLink></li>\\n<li><RouterLink to=\\"/zh/reference/default-theme/config.html\\">默认主题 &gt; 配置</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h2 id=\\"打包工具配置\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#打包工具配置\\" aria-hidden=\\"true\\">#</a> 打包工具配置</h2>\\n<h3 id=\\"bundler\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#bundler\\" aria-hidden=\\"true\\">#</a> bundler</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>Bundler</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>设置站点要使用的打包工具。</p>\\n<p>如果不设置该选项，将会使用默认的打包工具：</p>\\n<ul>\\n<li>使用 <code v-pre>vuepress</code> 或 <code v-pre>vuepress-vite</code> 时，默认的打包工具是 Vite 。</li>\\n<li>使用 <code v-pre>vuepress-webpack</code> 时，默认的打包工具是 Webpack 。</li>\\n</ul>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/bundler.html\\">指南 &gt; 打包工具</RouterLink></li>\\n<li><RouterLink to=\\"/zh/reference/bundler/vite.html\\">打包工具 &gt; Vite</RouterLink></li>\\n<li><RouterLink to=\\"/zh/reference/bundler/webpack.html\\">打包工具 &gt; Webpack</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h2 id=\\"通用配置项\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#通用配置项\\" aria-hidden=\\"true\\">#</a> 通用配置项</h2>\\n<h3 id=\\"dest\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#dest\\" aria-hidden=\\"true\\">#</a> dest</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>\`\${sourceDir}/.vuepress/dist\`</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>指定 <code v-pre>vuepress build</code> 命令的输出目录。</p>\\n</li>\\n</ul>\\n<h3 id=\\"temp\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#temp\\" aria-hidden=\\"true\\">#</a> temp</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>\`\${sourceDir}/.vuepress/.temp\`</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>指定临时文件目录。</p>\\n</li>\\n</ul>\\n<div class=\\"custom-container warning\\"><p class=\\"custom-container-title\\">注意</p>\\n<p>VuePress 在开发和构建时会加载临时文件，因此临时文件目录应位于项目根目录内部，以便可以正确地解析到依赖。</p>\\n</div>\\n<h3 id=\\"cache\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#cache\\" aria-hidden=\\"true\\">#</a> cache</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>\`\${sourceDir}/.vuepress/.cache\`</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>指定缓存文件目录。</p>\\n</li>\\n</ul>\\n<h3 id=\\"public\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#public\\" aria-hidden=\\"true\\">#</a> public</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>\`\${sourceDir}/.vuepress/public\`</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>指定 Public 文件目录。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6\\">指南 &gt; 静态资源 &gt; Public 文件</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h3 id=\\"debug\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#debug\\" aria-hidden=\\"true\\">#</a> debug</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>boolean</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>false</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>是否启用 Debug 模式。</p>\\n<p>该配置项主要提供给开发者使用。同时，我们使用了 <a href=\\"https://github.com/visionmedia/debug\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">debug<ExternalLinkIcon/></a> 模块打印 Debug 日志，可以通过 <code v-pre>DEBUG=vuepress*</code> 环境变量来启用。</p>\\n</li>\\n</ul>\\n<h3 id=\\"pagepatterns\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#pagepatterns\\" aria-hidden=\\"true\\">#</a> pagePatterns</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string[]</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>['**/*.md', '!.vuepress', '!node_modules']</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>指定页面文件的 Patterns 。这些 Patterns 是相对于 Source 目录的。</p>\\n</li>\\n</ul>\\n<h3 id=\\"permalinkpattern\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#permalinkpattern\\" aria-hidden=\\"true\\">#</a> permalinkPattern</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string | null</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>null</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>指定为页面生成永久链接的 Pattern 。</p>\\n<p>它会被每个页面的 Frontmatter 中的 <code v-pre>permalinkPattern</code> 字段覆盖。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/reference/frontmatter.html#permalinkpattern\\">Frontmatter &gt; permalinkPattern</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h2 id=\\"dev-配置项\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#dev-配置项\\" aria-hidden=\\"true\\">#</a> Dev 配置项</h2>\\n<h3 id=\\"host\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#host\\" aria-hidden=\\"true\\">#</a> host</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>'0.0.0.0'</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>指定开发服务器的主机名。</p>\\n</li>\\n</ul>\\n<h3 id=\\"port\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#port\\" aria-hidden=\\"true\\">#</a> port</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>number</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>8080</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>指定开发服务器的端口号。</p>\\n</li>\\n</ul>\\n<h3 id=\\"open\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#open\\" aria-hidden=\\"true\\">#</a> open</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>boolean</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>false</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>是否在开发服务器启动后打开浏览器。</p>\\n</li>\\n</ul>\\n<h3 id=\\"templatedev\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#templatedev\\" aria-hidden=\\"true\\">#</a> templateDev</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>'@vuepress/client/templates/dev.html'</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>指定开发时使用的 HTML 模板。</p>\\n</li>\\n</ul>\\n<h2 id=\\"build-配置项\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#build-配置项\\" aria-hidden=\\"true\\">#</a> Build 配置项</h2>\\n<h3 id=\\"shouldpreload\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#shouldpreload\\" aria-hidden=\\"true\\">#</a> shouldPreload</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>((file: string, type: string) =&gt; boolean)) | boolean</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>true</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>一个函数，用来控制哪些文件是需要生成对应的 <code v-pre>&lt;link rel=&quot;preload&quot;&gt;</code> 标签的。设置为 <code v-pre>true</code> 或者 <code v-pre>false</code> 来完全启用或禁用它。</p>\\n<p>默认情况下，只有当前页面所需的文件会被预加载。所以在绝大部分情况下，你只需要使用 <code v-pre>true</code> 就可以了。</p>\\n</li>\\n</ul>\\n<h3 id=\\"shouldprefetch\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#shouldprefetch\\" aria-hidden=\\"true\\">#</a> shouldPrefetch</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>((file: string, type: string) =&gt; boolean)) | boolean</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>true</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>一个函数，用来控制哪些文件是需要生成对应的 <code v-pre>&lt;link rel=&quot;prefetch&quot;&gt;</code> 标签的。设置为 <code v-pre>true</code> 或者 <code v-pre>false</code> 来完全启用或禁用它。</p>\\n<p>如果你将它设置为 <code v-pre>true</code> ，所有其它页面所需的文件都会被预拉取。这对于小型站点来说是十分有帮助的，因为它会大大提升页面切换的速度。但是在你的网站有很多页面时不建议你这么做。</p>\\n</li>\\n</ul>\\n<h3 id=\\"templatebuild\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#templatebuild\\" aria-hidden=\\"true\\">#</a> templateBuild</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>string</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>'@vuepress/client/templates/build.html'</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>指定构建时使用的 HTML 模板。</p>\\n</li>\\n</ul>\\n<h2 id=\\"markdown-配置\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-配置\\" aria-hidden=\\"true\\">#</a> Markdown 配置</h2>\\n<h3 id=\\"markdown\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown\\" aria-hidden=\\"true\\">#</a> markdown</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>MarkdownOptions</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>{}</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>对 VuePress 内置的 Markdown 语法扩展进行配置。</p>\\n<p>它可以接收 <a href=\\"https://github.com/markdown-it/markdown-it\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">markdown-it<ExternalLinkIcon/></a> 的所有配置项，以及下列额外的配置项。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><a href=\\"https://github.com/markdown-it/markdown-it#init-with-presets-and-options\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">markdown-it &gt; Init with presets and options<ExternalLinkIcon/></a></li>\\n<li><RouterLink to=\\"/zh/guide/markdown.html#%E8%AF%AD%E6%B3%95%E6%89%A9%E5%B1%95\\">指南 &gt; Markdown &gt; 语法扩展</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h3 id=\\"markdown-anchor\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-anchor\\" aria-hidden=\\"true\\">#</a> markdown.anchor</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>AnchorPluginOptions | false</code></p>\\n</li>\\n<li>\\n<p>默认值：</p>\\n</li>\\n</ul>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre v-pre class=\\"shiki\\" style=\\"background-color: #1E1E1E\\"><code><span class=\\"line\\"><span style=\\"color: #569CD6\\">const</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #4FC1FF\\">defaultOptions</span><span style=\\"color: #D4D4D4\\"> = {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">  </span><span style=\\"color: #9CDCFE\\">level:</span><span style=\\"color: #D4D4D4\\"> [</span><span style=\\"color: #B5CEA8\\">1</span><span style=\\"color: #D4D4D4\\">, </span><span style=\\"color: #B5CEA8\\">2</span><span style=\\"color: #D4D4D4\\">, </span><span style=\\"color: #B5CEA8\\">3</span><span style=\\"color: #D4D4D4\\">, </span><span style=\\"color: #B5CEA8\\">4</span><span style=\\"color: #D4D4D4\\">, </span><span style=\\"color: #B5CEA8\\">5</span><span style=\\"color: #D4D4D4\\">, </span><span style=\\"color: #B5CEA8\\">6</span><span style=\\"color: #D4D4D4\\">],</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">  </span><span style=\\"color: #9CDCFE\\">permalink:</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #9CDCFE\\">anchorPlugin</span><span style=\\"color: #D4D4D4\\">.</span><span style=\\"color: #9CDCFE\\">permalink</span><span style=\\"color: #D4D4D4\\">.</span><span style=\\"color: #DCDCAA\\">ariaHidden</span><span style=\\"color: #D4D4D4\\">({</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">    </span><span style=\\"color: #9CDCFE\\">class:</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #CE9178\\">&#39;header-anchor&#39;</span><span style=\\"color: #D4D4D4\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">    </span><span style=\\"color: #9CDCFE\\">symbol:</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #CE9178\\">&#39;#&#39;</span><span style=\\"color: #D4D4D4\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">    </span><span style=\\"color: #9CDCFE\\">space:</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #569CD6\\">true</span><span style=\\"color: #D4D4D4\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">    </span><span style=\\"color: #9CDCFE\\">placement:</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #CE9178\\">&#39;before&#39;</span><span style=\\"color: #D4D4D4\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">  }),</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div><ul>\\n<li>\\n<p>详情：</p>\\n<p><a href=\\"https://github.com/valeriangalliat/markdown-it-anchor\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">markdown-it-anchor<ExternalLinkIcon/></a> 的配置项。</p>\\n<p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/markdown.html#%E6%A0%87%E9%A2%98%E9%94%9A%E7%82%B9\\">指南 &gt; Markdown &gt; 语法扩展 &gt; 标题锚点</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h3 id=\\"markdown-assets\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-assets\\" aria-hidden=\\"true\\">#</a> markdown.assets</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>AssetsPluginOptions | false</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>VuePress 内置的 markdown-it assets 插件的配置项。</p>\\n<p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>\\n</li>\\n</ul>\\n<div class=\\"custom-container danger\\"><p class=\\"custom-container-title\\">警告</p>\\n<p>除非你了解它的用途，否则你不应该设置该配置项。</p>\\n</div>\\n<h3 id=\\"markdown-code\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-code\\" aria-hidden=\\"true\\">#</a> markdown.code</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>CodePluginOptions | false</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>VuePress 内置的 markdown-it code 插件的配置项。</p>\\n<p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97\\">指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h4 id=\\"markdown-code-highlightlines\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-code-highlightlines\\" aria-hidden=\\"true\\">#</a> markdown.code.highlightLines</h4>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>boolean</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>true</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>是否启用代码块行高亮。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/markdown.html#%E8%A1%8C%E9%AB%98%E4%BA%AE\\">指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt; 行高亮</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h4 id=\\"markdown-code-linenumbers\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-code-linenumbers\\" aria-hidden=\\"true\\">#</a> markdown.code.lineNumbers</h4>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>boolean | number</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>true</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>配置代码块行号。</p>\\n<ul>\\n<li>布尔值 <code v-pre>boolean</code> 代表是否启用代码块行号。</li>\\n<li>数字 <code v-pre>number</code> 代表显示行号所需的最少行数。例如，如果你将它设置为 <code v-pre>4</code> ，那么只有在你的代码块包含至少 4 行代码时才会启用行号。</li>\\n</ul>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/markdown.html#%E8%A1%8C%E5%8F%B7\\">指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt; 行号</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h4 id=\\"markdown-code-prewrapper\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-code-prewrapper\\" aria-hidden=\\"true\\">#</a> markdown.code.preWrapper</h4>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>boolean</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>true</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>是否在 <code v-pre>&lt;pre&gt;</code> 标签外额外包裹一层。</p>\\n<p><code v-pre>highlightLines</code> 和 <code v-pre>lineNumbers</code> 依赖于这个额外的包裹层。这换句话说，如果你禁用了 <code v-pre>preWrapper</code> ，那么行高亮和行号也会被同时禁用。</p>\\n</li>\\n</ul>\\n<div class=\\"custom-container tip\\"><p class=\\"custom-container-title\\">提示</p>\\n<p>如果你想要在客户端来实现这些功能时，可以禁用该配置项。比如使用 <a href=\\"https://prismjs.com/plugins/line-highlight/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Prismjs Line Highlight<ExternalLinkIcon/></a> 或者 <a href=\\"https://prismjs.com/plugins/line-numbers/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Prismjs Line Numbers<ExternalLinkIcon/></a>。</p>\\n</div>\\n<h4 id=\\"markdown-code-vpre-block\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-code-vpre-block\\" aria-hidden=\\"true\\">#</a> markdown.code.vPre.block</h4>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>boolean</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>true</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>是否在代码块的 <code v-pre>&lt;pre&gt;</code> 标签上添加 <code v-pre>v-pre</code> 指令。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/markdown.html#%E6%B7%BB%E5%8A%A0-v-pre\\">指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt; 添加 v-pre</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h4 id=\\"markdown-code-vpre-inline\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-code-vpre-inline\\" aria-hidden=\\"true\\">#</a> markdown.code.vPre.inline</h4>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>boolean</code></p>\\n</li>\\n<li>\\n<p>默认值： <code v-pre>true</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p>是否在行内代码的 <code v-pre>&lt;code&gt;</code> 标签上添加 <code v-pre>v-pre</code> 指令。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/markdown.html#%E6%B7%BB%E5%8A%A0-v-pre\\">指南 &gt; Markdown &gt; 语法扩展 &gt; 代码块 &gt; 添加 v-pre</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h3 id=\\"markdown-component\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-component\\" aria-hidden=\\"true\\">#</a> markdown.component</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>undefined | false</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p><a href=\\"https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-component\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">@mdit-vue/plugin-component<ExternalLinkIcon/></a> 插件的配置项。</p>\\n<p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>\\n</li>\\n</ul>\\n<div class=\\"custom-container danger\\"><p class=\\"custom-container-title\\">警告</p>\\n<p>除非你了解它的用途，否则你不应该设置该配置项。</p>\\n</div>\\n<h3 id=\\"markdown-emoji\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-emoji\\" aria-hidden=\\"true\\">#</a> markdown.emoji</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>EmojiPluginOptions | false</code></p>\\n</li>\\n<li>\\n<p>详情：</p>\\n<p><a href=\\"https://github.com/markdown-it/markdown-it-emoji\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">markdown-it-emoji<ExternalLinkIcon/></a> 的配置项。</p>\\n<p>设置为 <code v-pre>false</code> 可以禁用该插件。</p>\\n</li>\\n<li>\\n<p>参考：</p>\\n<ul>\\n<li><RouterLink to=\\"/zh/guide/markdown.html#emoji\\">指南 &gt; Markdown &gt; 语法扩展 &gt; Emoji</RouterLink></li>\\n</ul>\\n</li>\\n</ul>\\n<h3 id=\\"markdown-frontmatter\\" tabindex=\\"-1\\"><a class=\\"header-anchor\\" href=\\"#markdown-frontmatter\\" aria-hidden=\\"true\\">#</a> markdown.frontmatter</h3>\\n<ul>\\n<li>\\n<p>类型： <code v-pre>FrontmatterPluginOptions | false</code></p>\\n</li>\\n<li>\\n<p>默认值：</p>\\n</li>\\n</ul>\\n<div class=\\"language-typescript line-numbers-mode\\" data-ext=\\"ts\\"><pre v-pre class=\\"shiki\\" style=\\"background-color: #1E1E1E\\"><code><span class=\\"line\\"><span style=\\"color: #569CD6\\">const</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #4FC1FF\\">defaultOptions</span><span style=\\"color: #D4D4D4\\"> = {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">  </span><span style=\\"color: #9CDCFE\\">grayMatterOptions:</span><span style=\\"color: #D4D4D4\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">    </span><span style=\\"color: #9CDCFE\\">excerpt:</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #569CD6\\">true</span><span style=\\"color: #D4D4D4\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D4D4D4\\">    </span><span style=\\"color: #9CDCFE\\">excerpt_separator:</span><span style=\\"color: #D4D4D4\\"> </span><span style=\\"color: #CE9178\\">&#39;</span></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","headers":[{"level":2,"title":"站点配置","slug":"站点配置","link":"#站点配置","children":[{"level":3,"title":"base","slug":"base","link":"#base","children":[]},{"level":3,"title":"lang","slug":"lang","link":"#lang","children":[]},{"level":3,"title":"title","slug":"title","link":"#title","children":[]},{"level":3,"title":"description","slug":"description","link":"#description","children":[]},{"level":3,"title":"head","slug":"head","link":"#head","children":[]},{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]}]},{"level":2,"title":"主题配置","slug":"主题配置","link":"#主题配置","children":[{"level":3,"title":"theme","slug":"theme","link":"#theme","children":[]}]},{"level":2,"title":"打包工具配置","slug":"打包工具配置","link":"#打包工具配置","children":[{"level":3,"title":"bundler","slug":"bundler","link":"#bundler","children":[]}]},{"level":2,"title":"通用配置项","slug":"通用配置项","link":"#通用配置项","children":[{"level":3,"title":"dest","slug":"dest","link":"#dest","children":[]},{"level":3,"title":"temp","slug":"temp","link":"#temp","children":[]},{"level":3,"title":"cache","slug":"cache","link":"#cache","children":[]},{"level":3,"title":"public","slug":"public","link":"#public","children":[]},{"level":3,"title":"debug","slug":"debug","link":"#debug","children":[]},{"level":3,"title":"pagePatterns","slug":"pagepatterns","link":"#pagepatterns","children":[]},{"level":3,"title":"permalinkPattern","slug":"permalinkpattern","link":"#permalinkpattern","children":[]}]},{"level":2,"title":"Dev 配置项","slug":"dev-配置项","link":"#dev-配置项","children":[{"level":3,"title":"host","slug":"host","link":"#host","children":[]},{"level":3,"title":"port","slug":"port","link":"#port","children":[]},{"level":3,"title":"open","slug":"open","link":"#open","children":[]},{"level":3,"title":"templateDev","slug":"templatedev","link":"#templatedev","children":[]}]},{"level":2,"title":"Build 配置项","slug":"build-配置项","link":"#build-配置项","children":[{"level":3,"title":"shouldPreload","slug":"shouldpreload","link":"#shouldpreload","children":[]},{"level":3,"title":"shouldPrefetch","slug":"shouldprefetch","link":"#shouldprefetch","children":[]},{"level":3,"title":"templateBuild","slug":"templatebuild","link":"#templatebuild","children":[]}]},{"level":2,"title":"Markdown 配置","slug":"markdown-配置","link":"#markdown-配置","children":[{"level":3,"title":"markdown","slug":"markdown","link":"#markdown","children":[]},{"level":3,"title":"markdown.anchor","slug":"markdown-anchor","link":"#markdown-anchor","children":[]},{"level":3,"title":"markdown.assets","slug":"markdown-assets","link":"#markdown-assets","children":[]},{"level":3,"title":"markdown.code","slug":"markdown-code","link":"#markdown-code","children":[]},{"level":3,"title":"markdown.component","slug":"markdown-component","link":"#markdown-component","children":[]},{"level":3,"title":"markdown.emoji","slug":"markdown-emoji","link":"#markdown-emoji","children":[]},{"level":3,"title":"markdown.frontmatter","slug":"markdown-frontmatter","link":"#markdown-frontmatter","children":[]},{"level":3,"title":"markdown.headers","slug":"markdown-headers","link":"#markdown-headers","children":[]},{"level":3,"title":"markdown.title","slug":"markdown-title","link":"#markdown-title","children":[]},{"level":3,"title":"markdown.importCode","slug":"markdown-importcode","link":"#markdown-importcode","children":[]},{"level":3,"title":"markdown.links","slug":"markdown-links","link":"#markdown-links","children":[]},{"level":3,"title":"markdown.sfc","slug":"markdown-sfc","link":"#markdown-sfc","children":[]},{"level":3,"title":"markdown.slugify","slug":"markdown-slugify","link":"#markdown-slugify","children":[]},{"level":3,"title":"markdown.toc","slug":"markdown-toc","link":"#markdown-toc","children":[]}]},{"level":2,"title":"插件配置","slug":"插件配置","link":"#插件配置","children":[{"level":3,"title":"plugins","slug":"plugins","link":"#plugins","children":[]}]},{"level":2,"title":"插件 API","slug":"插件-api","link":"#插件-api","children":[]}],"git":{"updatedTime":1664682957000,"contributors":[{"name":"meteorlxy","email":"meteor.lxy@foxmail.com","commits":41},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3},{"name":"Shigma","email":"1700011071@pku.edu.cn","commits":2},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"filePathRelative":"zh/reference/config.md"}`);export{e as data};

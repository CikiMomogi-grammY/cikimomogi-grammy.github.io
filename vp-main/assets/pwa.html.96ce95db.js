import{_ as i,r,o as c,c as D,a,b as s,d as n,w as p,e as l}from"./app.ae6781f0.js";const d={},u=s("h1",{id:"pwa",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#pwa","aria-hidden":"true"},"#"),n(" pwa")],-1),y={href:"https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},v={href:"https://developers.google.com/web/tools/workbox/modules/workbox-build",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},C=l(`<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">npm i -D @vuepress/plugin-pwa@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">pwaPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">pwaPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="web-app-manifests" tabindex="-1"><a class="header-anchor" href="#web-app-manifests" aria-hidden="true">#</a> Web App Manifests</h2>`,4),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,".vuepress/public",-1),_=l(`<ol><li>创建 Manifest 文件</li></ol><p>通常是 <code>.vuepress/public/manifest.webmanifest</code> ：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;VuePress&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;short_name&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;VuePress&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;description&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;Vue-powered Static Site Generator&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;start_url&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/index.html&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;display&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;standalone&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;background_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#fff&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;theme_color&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;#3eaf7c&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">&quot;icons&quot;</span><span style="color:#D4D4D4;">: [</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;src&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/images/icons/android-chrome-192x192.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;sizes&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;192x192&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;image/png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    },</span></span>
<span class="line"><span style="color:#D4D4D4;">    {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;src&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;/images/icons/android-chrome-384x384.png&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;sizes&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;384x384&quot;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">&quot;type&quot;</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">&quot;image/png&quot;</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">  ]</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>生成 PWA 图标</li></ol><p>为了提高你的 PWA 的可用性，你需要生成一些图标，并将它们放置在 Public 目录下。</p><p>确保图标的路径匹配 Manifest 文件中的 <code>icons</code> 字段：</p><ul><li><code>.vuepress/public/images/icons/android-chrome-192x192.png</code></li><li><code>.vuepress/public/images/icons/android-chrome-384x384.png</code></li></ul>`,7),g={class:"custom-container tip"},E=s("p",{class:"custom-container-title"},"提示",-1),f={href:"https://realfavicongenerator.net/",target:"_blank",rel:"noopener noreferrer"},k=s("ol",{start:"3"},[s("li",null,"设置 Head 中的标签")],-1),q={href:"https://developer.mozilla.org/en-US/docs/Web/Manifest#deploying_a_manifest_with_the_link_tag",target:"_blank",rel:"noopener noreferrer"},w=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">head:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;link&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">rel:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;manifest&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">href:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;/manifest.webmanifest&#39;</span><span style="color:#D4D4D4;"> }],</span></span>
<span class="line"><span style="color:#D4D4D4;">    [</span><span style="color:#CE9178;">&#39;meta&#39;</span><span style="color:#D4D4D4;">, { </span><span style="color:#9CDCFE;">name:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;theme-color&#39;</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">content:</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;#3eaf7c&#39;</span><span style="color:#D4D4D4;"> }],</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#6A9955;">// ...其他标签</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h2>`,2),x={href:"https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW",target:"_blank",rel:"noopener noreferrer"},F=s("code",null,"globDirectory",-1),W=s("code",null,"swDest",-1),A=l(`<p>比如，你可以设置 <code>skipWaiting: true</code> ，这将在新的 Service Worker 就绪之后立即激活它：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#DCDCAA;">pwaPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">skipWaiting:</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">true</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是如果你不设置 <code>skipWaiting</code> 或设置为 <code>false</code> ，你就需要手动激活新的 Service Worker 。</p>`,3),S=s("li",null,[n("对于开发者，你可以使用该插件提供的 "),s("a",{href:"#composition-api"},"Composition API"),n(" 来控制 Service Worker 的行为。")],-1),P=s("h3",{id:"serviceworkerfilename",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#serviceworkerfilename","aria-hidden":"true"},"#"),n(" serviceWorkerFilename")],-1),z=s("li",null,[s("p",null,[n("类型： "),s("code",null,"string")])],-1),B=s("li",null,[s("p",null,[n("默认值： "),s("code",null,"'service-worker.js'")])],-1),M=s("p",null,"详情：",-1),N=s("p",null,[n("Service Worker 文件只会在 "),s("code",null,"build"),n(" 模式下生成。")],-1),V=s("h2",{id:"composition-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#composition-api","aria-hidden":"true"},"#"),n(" Composition API")],-1),I=s("h3",{id:"usepwaevent",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#usepwaevent","aria-hidden":"true"},"#"),n(" usePwaEvent")],-1),L=s("p",null,"详情：",-1),R=s("p",null,"返回该插件的 Event Emitter 。",-1),j={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},G=s("li",null,[s("p",null,"示例：")],-1),U=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">usePwaEvent</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">event</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePwaEvent</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;ready&#39;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;Service worker 已经生效。&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="useskipwaiting" tabindex="-1"><a class="header-anchor" href="#useskipwaiting" aria-hidden="true">#</a> useSkipWaiting</h3><ul><li>参数：</li></ul><table><thead><tr><th>参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>registration</td><td><code>ServiceWorkerRegistration</code></td><td>你想要激活的 Service Worker 的 Registration</td></tr></tbody></table>`,4),H=s("p",null,"详情：",-1),T={href:"https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting",target:"_blank",rel:"noopener noreferrer"},J=s("li",null,[s("p",null,"示例：")],-1),K=l(`<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">usePwaEvent</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#9CDCFE;">useSkipWaiting</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">} </span><span style="color:#C586C0;">from</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">&#39;@vuepress/plugin-pwa/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#D4D4D4;"> </span><span style="color:#C586C0;">default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span><span style="color:#DCDCAA;">setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">event</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">usePwaEvent</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    </span><span style="color:#9CDCFE;">event</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">on</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;updated&#39;</span><span style="color:#D4D4D4;">, (</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">) </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;在 Waiting 状态的 Service Worker 已经就绪。&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#6A9955;">// 激活 Waiting 状态的 Service Worker</span></span>
<span class="line"><span style="color:#D4D4D4;">      </span><span style="color:#DCDCAA;">useSkipWaiting</span><span style="color:#D4D4D4;">(</span><span style="color:#9CDCFE;">registration</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function O(Q,X){const t=r("NpmBadge"),e=r("ExternalLinkIcon"),o=r("RouterLink");return c(),D("div",null,[u,a(t,{package:"@vuepress/plugin-pwa"}),s("p",null,[n("使你的 VuePress 站点成为一个 "),s("a",y,[n("渐进式 Web 应用 (PWA)"),a(e)]),n(".")]),s("p",null,[n("该插件使用 "),s("a",v,[n("workbox-build"),a(e)]),n(" 来生成 Service Worker 文件，并通过 "),s("a",m,[n("register-service-worker"),a(e)]),n(" 来注册 Service Worker 。")]),C,s("p",null,[n("为了使你的网站符合 PWA 的要求，你需要创建一个 "),s("a",b,[n("Web app manifests"),a(e)]),n(" 文件，并且为你的 PWA 设置图标、颜色等信息。")]),s("p",null,[n("你需要将你的 Manifest 文件和图标放置在 "),a(o,{to:"/zh/guide/assets.html#public-%E6%96%87%E4%BB%B6"},{default:p(()=>[n("Public 目录")]),_:1}),n(" 下。在下述的示例中，我们假设你正在使用默认的 Public 目录 "),h,n(" 。")]),_,s("div",g,[E,s("p",null,[n("一些工具可以帮助你做这些事。比如 "),s("a",f,[n("Favicon Generator"),a(e)]),n(" 可以帮助你生成图片以及一个 Manifest 文件样例。")])]),k,s("p",null,[n("你还需要通过 "),a(o,{to:"/zh/reference/config.html#head"},{default:p(()=>[n("head")]),_:1}),n(" 配置项来设置一些标签，用来 "),s("a",q,[n("部署你的 Manifest 文件"),a(e)]),n(" 。")]),w,s("p",null,[n("该插件的配置项可以接收 workbox-build 中 "),s("a",x,[n("generateSW 方法"),a(e)]),n(" 除了 "),F,n(" 和 "),W,n(" 以外的所有参数。")]),A,s("ul",null,[s("li",null,[n("对于用户，你可以配合我们提供的 "),a(o,{to:"/zh/reference/plugin/pwa-popup.html"},{default:p(()=>[n("pwa-popup")]),_:1}),n(" 插件一起使用。")]),S]),P,s("ul",null,[z,B,s("li",null,[M,s("p",null,[n("生成的 Service Worker 文件路径，该路径是 "),a(o,{to:"/zh/reference/config.html#dest"},{default:p(()=>[n("dest")]),_:1}),n(" 目录的相对路径。")]),N])]),V,I,s("ul",null,[s("li",null,[L,R,s("p",null,[n("你可以为 "),s("a",j,[n("register-service-worker"),a(e)]),n(" 提供的事件添加事件监听器。")])]),G]),U,s("ul",null,[s("li",null,[H,s("p",null,[n("调用 "),s("a",T,[n("skipWaiting()"),a(e)]),n(" 来激活处于 Waiting 状态的 Service Worker 。")])]),J]),K])}const Z=i(d,[["render",O],["__file","pwa.html.vue"]]);export{Z as default};

import{_ as n,r as i,o as d,c as l,a,b as r,e as t,d as e}from"./app.2f873437.js";const o={},c=t(`<h1 id="\u6258\u7BA1-vps" tabindex="-1"><a class="header-anchor" href="#\u6258\u7BA1-vps" aria-hidden="true">#</a> \u6258\u7BA1: VPS</h1><p>\u865A\u62DF\u79C1\u4EBA\u670D\u52A1\u5668\uFF0C\u5927\u591A\u6570\u65F6\u5019\u88AB\u79F0\u4E3A VPS\uFF0C\u662F\u5728\u4E91\u4E2D\u8FD0\u884C\u7684\u865A\u62DF\u673A\uFF0C\u7528\u6237\u62E5\u6709\u5176\u7CFB\u7EDF\u7684\u5B8C\u6574\u63A7\u5236\u6743\u3002</p><p>\u5728\u8FD9\u4E2A\u6307\u5357\u4E2D\uFF0C\u4F60\u5C06\u5B66\u4E60\u5982\u4F55\u5728 VPS \u4E2D\u8FD0\u884C\u4F60\u7684\u673A\u5668\u4EBA\uFF0C\u4FDD\u6301\u5B83 24/7 \u5728\u7EBF\uFF0C\u4F7F\u5176\u5728 VPS \u542F\u52A8\u548C\u5D29\u6E83\u65F6\u81EA\u52A8\u91CD\u542F\u3002</p><h2 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h2><p>systemd \u662F\u4E00\u4E2A\u5F3A\u5927\u7684\u670D\u52A1\u7BA1\u7406\u5668\uFF0C\u5B83\u9884\u5B89\u88C5\u5728\u5927\u591A\u6570 Linux \u53D1\u884C\u7248\u4E0A\uFF0C\u4E3B\u8981\u662F\u57FA\u4E8E Debian \u7684\u53D1\u884C\u7248\u3002</p><h3 id="\u83B7\u53D6\u542F\u52A8\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u542F\u52A8\u547D\u4EE4" aria-hidden="true">#</a> \u83B7\u53D6\u542F\u52A8\u547D\u4EE4</h3><ol><li>\u83B7\u53D6\u4F60\u7684\u8FD0\u884C\u65F6\u7684\u5B8C\u6574\u8DEF\u5F84\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5982\u679C\u4F7F\u7528 Deno</span>
<span class="token function">which</span> deno

<span class="token comment"># \u5982\u679C\u4F7F\u7528 Node.js</span>
<span class="token function">which</span> <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>\u4F60\u4E5F\u5E94\u8BE5\u6709\u4F60\u7684\u5165\u53E3\u6587\u4EF6\u7684\u5B8C\u6574\u8DEF\u5F84\u3002</p></li><li><p>\u4F60\u7684\u542F\u52A8\u547D\u4EE4\u5E94\u8BE5\u50CF\u4E0B\u9762\u8FD9\u6837\uFF1A</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>\u5B8C\u6574\u7684\u8FD0\u884C\u65F6\u8DEF\u5F84<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u9009\u9879<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>\u5B8C\u6574\u7684\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84<span class="token operator">&gt;</span>

<span class="token comment"># Deno \u6837\u4F8B:</span>
<span class="token comment"># /home/user/.deno/bin/deno --allow-all /home/user/bot1/mod.ts</span>

<span class="token comment"># Node.js \u6837\u4F8B:</span>
<span class="token comment"># /home/user/.nvm/versions/node/v16.9.1/bin/node /home/user/bot1/index.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u670D\u52A1" aria-hidden="true">#</a> \u521B\u5EFA\u670D\u52A1</h3><ol><li>\u8FDB\u5165\u670D\u52A1\u76EE\u5F55</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/systemd/system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u7528\u7F16\u8F91\u5668\u6253\u5F00\u4F60\u7684\u65B0\u670D\u52A1\u6587\u4EF6\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nano</span> bot1.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Service]
ExecStart=&lt;start_command&gt;
Restart=on-failure

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u7528\u4E0A\u9762\u5F97\u5230\u7684\u547D\u4EE4\u66FF\u6362 <code>&lt;start<wbr>_command&gt;</code>\u3002</p></blockquote><ol start="3"><li>\u6BCF\u5F53\u4F60\u7F16\u8F91\u670D\u52A1\u65F6\uFF0C\u90FD\u8981\u91CD\u65B0\u52A0\u8F7D systemd\uFF1A</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u7BA1\u7406\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u670D\u52A1" aria-hidden="true">#</a> \u7BA1\u7406\u670D\u52A1</h3><h4 id="\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8" aria-hidden="true">#</a> \u542F\u52A8</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u7528\u670D\u52A1\u7684\u6587\u4EF6\u540D\u66FF\u6362 <code>&lt;service<wbr>_name&gt;</code>\u3002 \u6837\u4F8B\uFF1A<code>systemctl start bot1</code></p></blockquote><h4 id="\u5F00\u673A\u65F6\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5F00\u673A\u65F6\u542F\u52A8" aria-hidden="true">#</a> \u5F00\u673A\u65F6\u542F\u52A8</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u68C0\u67E5\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u65E5\u5FD7" aria-hidden="true">#</a> \u68C0\u67E5\u65E5\u5FD7</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl status <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u91CD\u542F" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542F" aria-hidden="true">#</a> \u91CD\u542F</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl restart <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u505C\u6B62" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62" aria-hidden="true">#</a> \u505C\u6B62</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl stop <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u4E0D\u8981\u5728\u5F00\u673A\u65F6\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u4E0D\u8981\u5728\u5F00\u673A\u65F6\u8FD0\u884C" aria-hidden="true">#</a> \u4E0D\u8981\u5728\u5F00\u673A\u65F6\u8FD0\u884C</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl disable <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pm2-\u4EC5\u9650-node-js" tabindex="-1"><a class="header-anchor" href="#pm2-\u4EC5\u9650-node-js" aria-hidden="true">#</a> PM2\uFF08\u4EC5\u9650 Node.js\uFF09</h2><p>PM2\u662F\u4E00\u4E2A\u7528\u4E8E Node.js \u7684\u5B88\u62A4\u8FDB\u7A0B\u7BA1\u7406\u5668\uFF0C\u5B83\u5C06\u5E2E\u52A9\u4F60\u7BA1\u7406\u5E76\u4FDD\u6301\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F 24/7 \u5728\u7EBF\u3002</p><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pm2@latest <span class="token parameter variable">-g</span>

<span class="token comment"># \u4F7F\u7528 Yarn</span>
<span class="token function">yarn</span> global <span class="token function">add</span> pm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7BA1\u7406\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u5E94\u7528" aria-hidden="true">#</a> \u7BA1\u7406\u5E94\u7528</h3><h4 id="\u542F\u52A8-1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-1" aria-hidden="true">#</a> \u542F\u52A8</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start <span class="token parameter variable">--name</span> <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>entry_point<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>&lt;app<wbr>_name&gt;</code> \u53EF\u4EE5\u662F\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u4EFB\u4F55\u6807\u8BC6\u7B26\uFF0C\u4F8B\u5982\uFF1A<code>bot1</code>\u3002 <code>&lt;entry<wbr>_point&gt;</code> \u662F\u4F60\u7684\u7D22\u5F15\u6587\u4EF6\u7684\u8DEF\u5F84\uFF08\u5373\u8FD0\u884C\u4F60\u7684 bot \u7684\u6587\u4EF6\uFF09\u3002</p></blockquote><h4 id="\u91CD\u542F-1" tabindex="-1"><a class="header-anchor" href="#\u91CD\u542F-1" aria-hidden="true">#</a> \u91CD\u542F</h4><p>\u901A\u8FC7\u91CD\u542F\uFF0C\u4F60\u505C\u6B62\u4E86\u5E94\u7528\u7A0B\u5E8F\uFF0C\u7136\u540E\u518D\u6B21\u542F\u52A8\u5B83\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 restart <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8F7D" aria-hidden="true">#</a> \u91CD\u8F7D</h4><p>\u901A\u8FC7\u91CD\u8F7D\uFF0C\u7528\u4E00\u4E2A\u65B0\u7684\u8FDB\u7A0B\u66FF\u6362\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u5F53\u524D\u8FDB\u7A0B\uFF0C\u5BFC\u81F4 0 \u79D2\u7684\u505C\u673A\u65F6\u95F4\u3002\u8FD9\u5EFA\u8BAE\u7528\u4E8E\u65E0\u72B6\u6001\u5E94\u7528\u7A0B\u5E8F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 reload <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u505C\u6B62-1" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62-1" aria-hidden="true">#</a> \u505C\u6B62</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F</span>
pm2 stop <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>

<span class="token comment"># \u6240\u6709\u5E94\u7528\u7A0B\u5E8F</span>
pm2 stop all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a> \u5220\u9664</h4><p>\u901A\u8FC7\u5220\u9664\uFF0C\u5C06\u4F1A\u505C\u6B62\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u5E76\u4E14\u5220\u9664\u5B83\u7684\u65E5\u5FD7\u548C\u6307\u6807\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 del <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> \u9AD8\u7EA7\u7528\u6CD5</h3>`,54),p=e("\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u53C2\u8003 "),h={href:"https://pm2.keymetrics.io/docs",target:"_blank",rel:"noopener noreferrer"},u=e("https://"),m=a("wbr",null,null,-1),v=e("pm2"),b=a("wbr",null,null,-1),g=e(".keymetrics"),k=a("wbr",null,null,-1),_=e(".io"),x=a("wbr",null,null,-1),f=e("/docs"),y=e("\u3002");function w(N,V){const s=i("ExternalLinkIcon");return d(),l("div",null,[c,a("p",null,[p,a("a",h,[u,m,v,b,g,k,_,x,f,r(s)]),y])])}const S=n(o,[["render",w],["__file","vps.html.vue"]]);export{S as default};

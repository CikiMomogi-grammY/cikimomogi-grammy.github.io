import{_ as o,r as p,o as c,c as l,a as s,b as t,d as n,e}from"./app.2f873437.js";const i={},r=s("h1",{id:"\u4EE3\u7406\u652F\u6301",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4EE3\u7406\u652F\u6301","aria-hidden":"true"},"#"),n(" \u4EE3\u7406\u652F\u6301")],-1),u=n("grammY \u53EF\u4EE5\u8BA9\u4F60\u5BF9\u7F51\u7EDC\u8BF7\u6C42\u5982\u4F55\u6267\u884C\u8FDB\u884C\u914D\u7F6E\u3002 \u8FD9\u5305\u62EC\u6CE8\u5165\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 payload \u5230\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u4E2D\uFF0C\u5B83\u53EF\u4EE5\u88AB\u7528\u4E8E\u5B89\u88C5\u4E00\u4E2A\u4EE3\u7406\u3002 \u5728 "),d={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/ApiClientOptions",target:"_blank",rel:"noopener noreferrer"},k=n("grammY API \u53C2\u8003"),m=n(" \u4E2D\u67E5\u770B "),v=s("code",null,[n("Api"),s("wbr"),n("Client"),s("wbr"),n("Options")],-1),_=n("\u3002"),b=e(`<p>\u5728 Deno \u4E2D\uFF0C\u4E0B\u9762\u662F\u5982\u4F55\u4F7F\u7528 <code>http</code> \u4EE3\u7406\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> client <span class="token operator">=</span> Deno<span class="token punctuation">.</span><span class="token function">createHttpClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  proxy<span class="token operator">:</span> <span class="token punctuation">{</span> url<span class="token operator">:</span> <span class="token string">&quot;http://host:port/&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token constant">TOKEN</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  client<span class="token operator">:</span> <span class="token punctuation">{</span>
    baseFetchConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// @ts-ignore</span>
      client<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u8BF7\u6CE8\u610F\uFF0C\u4F60\u9700\u8981\u8FD0\u884C\u8FD9\u4E2A\u547D\u4EE4\u65F6\u52A0\u4E0A <code>-<wbr>-unstable</code> \u53C2\u6570\u3002</p></blockquote>`,3),h=n("\u5728 Node.js \u4E2D\uFF0C\u4E0B\u9762\u662F\u901A\u8FC7 "),g={href:"https://www.npmjs.com/package/socks-proxy-agent",target:"_blank",rel:"noopener noreferrer"},y=s("code",null,[n("socks5"),s("wbr"),n("-https"),s("wbr"),n("-client")],-1),w=n(" \u53BB\u4F7F\u7528\u4EE3\u7406\u7684\u4F8B\u5B50\uFF1A"),f=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SocksProxyAgent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;socks-proxy-agent&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> socksAgent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SocksProxyAgent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  host<span class="token operator">:</span> host<span class="token punctuation">,</span> <span class="token comment">// \u8F93\u5165\u4EE3\u7406\u4E3B\u673A</span>
  port<span class="token operator">:</span> port<span class="token punctuation">,</span> <span class="token comment">// \u8F93\u5165\u4EE3\u7406\u7AEF\u53E3\u53F7</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  client<span class="token operator">:</span> <span class="token punctuation">{</span>
    baseFetchConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
      agent<span class="token operator">:</span> socksAgent<span class="token punctuation">,</span>
      compress<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\u58F0\u660E <code>compress:<wbr> true</code> \u662F\u4E00\u4E2A\u53EF\u9009\u7684\u6027\u80FD\u4F18\u5316\u3002 \u5B83\u548C\u4EE3\u7406\u652F\u6301\u65E0\u5173\u3002 \u5B83\u53EA\u662F <code>base<wbr>Fetch<wbr>Config</code> \u9ED8\u8BA4\u503C\u7684\u4E00\u90E8\u5206\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u60F3\u8981\u4F7F\u7528\uFF0C\u4F60\u5E94\u8BE5\u518D\u6B21\u58F0\u660E\u5B83\u3002</p></blockquote>`,2),x=n("\u8BA9\u4E00\u4E2A\u4EE3\u7406\u5DE5\u4F5C\u662F\u5F88\u56F0\u96BE\u7684\u3002 \u5982\u679C\u4F60\u9047\u5230\u95EE\u9898\u6216\u8005\u4F60\u9700\u8981 grammY \u53BB\u652F\u6301\u66F4\u591A\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u53EF\u4EE5\u901A\u8FC7 "),q={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},A=n("Telegram chat"),B=n(" \u8054\u7CFB\u6211\u4EEC\u3002 \u6211\u4EEC\u8FD8\u6709\u4E00\u4E2A "),C={href:"https://t.me/grammyjs_ru",target:"_blank",rel:"noopener noreferrer"},N=n("\u4FC4\u8BED Telegram chat"),j=n("\u3002");function E(T,V){const a=p("ExternalLinkIcon");return c(),l("div",null,[r,s("p",null,[u,s("a",d,[k,t(a)]),m,v,_]),b,s("p",null,[h,s("a",g,[y,t(a)]),w]),f,s("p",null,[x,s("a",q,[A,t(a)]),B,s("a",C,[N,t(a)]),j])])}const I=o(i,[["render",E],["__file","proxy.html.vue"]]);export{I as default};

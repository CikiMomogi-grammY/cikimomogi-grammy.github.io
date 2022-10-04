import{_ as u,r as o,o as k,c as d,b as a,a as n,w as t,d as s,e as p}from"./app.9837a88d.js";const m={},b=n("h1",{id:"\u6D41\u91CF\u63A7\u5236-transformer-throttler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6D41\u91CF\u63A7\u5236-transformer-throttler","aria-hidden":"true"},"#"),s(" \u6D41\u91CF\u63A7\u5236\uFF08"),n("code",null,[s("transformer"),n("wbr"),s("-throttler")]),s("\uFF09")],-1),h=s("\u8FD9\u4E2A\u63D2\u4EF6\u901A\u8FC7 "),_={href:"https://github.com/SGrondin/bottleneck",target:"_blank",rel:"noopener noreferrer"},v=s("Bottleneck"),g=s(" \u5BF9\u4F20\u51FA\u7684 API \u8BF7\u6C42\u5B9E\u4F8B\u8FDB\u884C\u6392\u961F\uFF0C\u4EE5\u9632\u6B62\u4F60\u7684 bot \u88AB "),f={href:"https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this",target:"_blank",rel:"noopener noreferrer"},w=s("\u9650\u6D41"),y=s("\uFF0C\u6B63\u5982\u5728 "),T=s("\u8FD9\u4E2A\u9AD8\u7EA7\u90E8\u5206"),x=s(" \u7684\u6587\u6863\u4E2D\u63CF\u8FF0\u7684\u90A3\u6837\u3002"),I={class:"custom-container warning"},B=n("p",{class:"custom-container-title"},"\u4E0D\u5B58\u5728\u6587\u6863\u4E2D\u7684 API \u9650\u5236",-1),E=s("Telegram \u5B9E\u73B0\u4E86\u4E00\u4E9B\u672A\u6307\u5B9A\u7684\u548C\u65E0\u6587\u6863\u7684 API \u8C03\u7528\u7684\u9650\u5236\u3002 \u8FD9\u4E9B\u65E0\u6587\u6863\u7684\u9650\u5236"),O=n("strong",null,"\u4E0D\u88AB\u9650\u6D41\u5668\u8BA1\u7B97",-1),C=s("\u3002 \u5982\u679C\u4F60\u5728\u67D0\u4E9B API \u8C03\u7528\u51FA\u73B0 floodwait \u9519\u8BEF\uFF0C\u4F8B\u5982 "),j=n("code",null,[s("api"),n("wbr"),s(".send"),n("wbr"),s("Contact")],-1),A=s("\uFF0C\u8BF7\u8003\u8651\u5C06 "),N=s("auto"),P=n("wbr",null,null,-1),R=s("-retry \u63D2\u4EF6"),K=s(" \u548C\u8FD9\u4E2A\u63D2\u4EF6\u4E00\u8D77\u4F7F\u7528\u3002"),q=n("h2",{id:"\u4F7F\u7528\u65B9\u6CD5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u65B9\u6CD5","aria-hidden":"true"},"#"),s(" \u4F7F\u7528\u65B9\u6CD5")],-1),z=n("p",null,"\u8FD9\u91CC\u662F\u4F7F\u7528\u9ED8\u8BA4\u9009\u9879\u7684\u4E00\u4E2A\u793A\u4F8B\u3002 \u8BF7\u6CE8\u610F\uFF0C\u9ED8\u8BA4\u9009\u9879\u4E0E Telegram \u6240\u5B9E\u73B0\u7684\u9650\u5236\u7387\u4E00\u81F4\uFF0C\u56E0\u6B64\u5B83\u4EEC\u5E94\u8BE5\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\u3002",-1),D=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" run "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" apiThrottler "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/transformer-throttler"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" botToken "),n("span",{class:"token operator"},"="),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"BOT_TOKEN"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("botToken"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN is required"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),s("botToken"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" throttler "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"apiThrottler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("throttler"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/example"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"I am throttled"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u5982\u679C\u4F60\u4F7F\u7528\u4E86\u9650\u6D41\u5668\uFF0C\u4F60\u53EF\u80FD\u60F3\u8981\u4F7F\u7528\u4E00\u4E2A runner \u6765\u5E76\u53D1\u5904\u7406 update\u3002"),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" run "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" apiThrottler "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/transformer-throttler"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" botToken "),n("span",{class:"token operator"},"="),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"BOT_TOKEN"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("botToken"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN is required"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),s("botToken"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" throttler "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"apiThrottler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("throttler"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/example"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"I am throttled"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u5982\u679C\u4F60\u4F7F\u7528\u4E86\u9650\u6D41\u5668\uFF0C\u4F60\u53EF\u80FD\u60F3\u8981\u4F7F\u7528\u4E00\u4E2A runner \u6765\u5E76\u53D1\u5904\u7406 update\u3002"),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" run "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_runner@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" apiThrottler "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_transformer_throttler@v1.1.2/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" botToken "),n("span",{class:"token operator"},"="),s(" Deno"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("botToken"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN is required"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),s("botToken"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" throttler "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"apiThrottler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("throttler"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/example"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"I am throttled"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u5982\u679C\u4F60\u4F7F\u7528\u4E86\u9650\u6D41\u5668\uFF0C\u4F60\u53EF\u80FD\u60F3\u8981\u4F7F\u7528\u4E00\u4E2A runner \u6765\u5E76\u53D1\u5904\u7406 update\u3002"),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=p(`<h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u9650\u6D41\u5668\u63A5\u53D7\u4E00\u4E2A\u53EF\u9009\u7684\u53C2\u6570\uFF0C\u5176\u5F62\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ThrottlerOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  global<span class="token operator">?</span><span class="token operator">:</span> Bottleneck<span class="token punctuation">.</span>ConstructorOptions<span class="token punctuation">;</span> <span class="token comment">// \u9650\u5236\u6240\u6709 API \u8C03\u7528</span>
  group<span class="token operator">?</span><span class="token operator">:</span> Bottleneck<span class="token punctuation">.</span>ConstructorOptions<span class="token punctuation">;</span> <span class="token comment">// \u9650\u5236\u4F20\u51FA\u7FA4\u7EC4\u6D88\u606F</span>
  out<span class="token operator">?</span><span class="token operator">:</span> Bottleneck<span class="token punctuation">.</span>ConstructorOptions<span class="token punctuation">;</span> <span class="token comment">// \u9650\u5236\u4F20\u51FA\u79C1\u4EBA\u6D88\u606F</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Y=n("code",null,[s("Bottleneck"),n("wbr"),s(".Constructor"),n("wbr"),s("Options")],-1),V=s(" \u53EF\u7528\u7684\u6240\u6709\u5C5E\u6027\u53EF\u4EE5\u5728 "),F={href:"https://github.com/SGrondin/bottleneck#constructor",target:"_blank",rel:"noopener noreferrer"},H=s("Bottleneck"),J=s(" \u4E2D\u627E\u5230\u3002"),M=p(`<p>\u5982\u679C\u6CA1\u6709\u4F20\u5165\u53C2\u6570\uFF0C\u9650\u6D41\u5668\u521B\u5EFA\u65F6\u5C06\u4F7F\u7528\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u8FD9\u4E9B\u914D\u7F6E\u5E94\u8BE5\u9002\u7528\u4E8E\u5927\u591A\u6570\u60C5\u51B5\u3002 \u9ED8\u8BA4\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u4F20\u51FA\u7684\u5168\u5C40\u9650\u6D41\u5668</span>
<span class="token keyword">const</span> globalConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  reservoir<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// \u9650\u6D41\u5668\u5F00\u59CB\u65F6\u53EF\u4EE5\u63A5\u53D7\u7684\u65B0\u4EFB\u52A1\u6570</span>
  reservoirRefreshAmount<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// \u9650\u6D41\u5668\u5237\u65B0\u540E\u53EF\u4EE5\u63A5\u53D7\u7684\u65B0\u4EFB\u52A1\u6570</span>
  reservoirRefreshInterval<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// \u9650\u6D41\u5668\u5237\u65B0\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F20\u51FA\u7684\u7FA4\u7EC4\u9650\u6D41\u5668</span>
<span class="token keyword">const</span> groupConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  maxConcurrent<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u4E00\u6B21\u53EA\u80FD\u6267\u884C\u4E00\u4E2A\u4EFB\u52A1</span>
  minTime<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// \u4EFB\u52A1\u6267\u884C\u5B8C\u6210\u540E\u7B49\u5F85\u7684\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09</span>
  reservoir<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// \u4EFB\u52A1\u5F00\u59CB\u65F6\u53EF\u4EE5\u63A5\u53D7\u7684\u65B0\u4EFB\u52A1\u6570</span>
  reservoirRefreshAmount<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// \u4EFB\u52A1\u5237\u65B0\u540E\u53EF\u4EE5\u63A5\u53D7\u7684\u65B0\u4EFB\u52A1\u6570</span>
  reservoirRefreshInterval<span class="token operator">:</span> <span class="token number">60000</span><span class="token punctuation">,</span> <span class="token comment">// \u4EFB\u52A1\u5237\u65B0\u7684\u95F4\u9694\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F20\u51FA\u7684\u79C1\u804A\u9650\u6D41\u5668</span>
<span class="token keyword">const</span> outConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  maxConcurrent<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u4E00\u6B21\u53EA\u80FD\u6267\u884C\u4E00\u4E2A\u4EFB\u52A1</span>
  minTime<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// \u4EFB\u52A1\u6267\u884C\u5B8C\u6210\u540E\u7B49\u5F85\u7684\u65F6\u95F4\uFF08\u6BEB\u79D2\uFF09</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63D2\u4EF6\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u6982\u8FF0" aria-hidden="true">#</a> \u63D2\u4EF6\u6982\u8FF0</h2>`,3),Q=n("li",null,[s("\u540D\u5B57\uFF1A"),n("code",null,[s("transformer"),n("wbr"),s("-throttler")])],-1),U=s("\u6E90\u7801\uFF1A"),W={href:"https://github.com/grammyjs/transformer-throttler",target:"_blank",rel:"noopener noreferrer"},X=s("https://"),Z=n("wbr",null,null,-1),$=s("github"),nn=n("wbr",null,null,-1),sn=s(".com"),an=n("wbr",null,null,-1),tn=s("/grammyjs"),en=n("wbr",null,null,-1),on=s("/transformer"),cn=n("wbr",null,null,-1),pn=s("-throttler"),ln=s("\u53C2\u8003\uFF1A"),rn={href:"https://doc.deno.land/https://deno.land/x/grammy_transformer_throttler/mod.ts",target:"_blank",rel:"noopener noreferrer"},un=p("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_transformer<wbr>_throttler<wbr>/mod<wbr>.ts",25);function kn(dn,mn){const i=o("AutotagPage"),e=o("ExternalLinkIcon"),l=o("RouterLink"),c=o("CodeGroupItem"),r=o("CodeGroup");return k(),d("div",null,[b,a(i,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),n("p",null,[h,n("a",_,[v,a(e)]),g,n("a",f,[w,a(e)]),y,a(l,{to:"/zh/advanced/flood.html"},{default:t(()=>[T]),_:1}),x]),n("div",I,[B,n("p",null,[E,O,C,j,A,a(l,{to:"/zh/plugins/auto-retry.html"},{default:t(()=>[N,P,R]),_:1}),K])]),q,z,a(r,null,{default:t(()=>[a(c,{title:"TypeScript",active:""},{default:t(()=>[D]),_:1}),a(c,{title:"JavaScript"},{default:t(()=>[G]),_:1}),a(c,{title:"Deno"},{default:t(()=>[S]),_:1})]),_:1}),L,n("p",null,[Y,V,n("a",F,[H,a(e)]),J]),M,n("ul",null,[Q,n("li",null,[U,n("a",W,[X,Z,$,nn,sn,an,tn,en,on,cn,pn,a(e)])]),n("li",null,[ln,n("a",rn,[un,a(e)])])])])}const hn=u(m,[["render",kn],["__file","transformer-throttler.html.vue"]]);export{hn as default};

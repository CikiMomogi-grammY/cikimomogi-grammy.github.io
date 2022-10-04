import{_ as u,r as o,o as d,c as k,b as t,a as n,w as a,d as s,e as l}from"./app.9837a88d.js";const m={},h=n("h1",{id:"flood-control-transformer-throttler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#flood-control-transformer-throttler","aria-hidden":"true"},"#"),s(" Flood Control ("),n("code",null,[s("transformer"),n("wbr"),s("-throttler")]),s(")")],-1),b=s("This plugin enqueues outgoing API requests instance via "),g={href:"https://github.com/SGrondin/bottleneck",target:"_blank",rel:"noopener noreferrer"},v=s("Bottleneck"),_=s(" in order to prevent your bot from hitting "),f={href:"https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this",target:"_blank",rel:"noopener noreferrer"},y=s("rate limits"),w=s(" as described in "),T=s("this advanced section"),x=s(" of the documentation."),j={class:"custom-container warning"},I=n("p",{class:"custom-container-title"},"Undocumented API Limits Exist",-1),O=s("Telegram implements unspecified and undocumented rate limits for some API calls. These undocumented limits are "),C=n("strong",null,"not accounted for",-1),E=s(" by the throttler. Consider using the "),B=s("auto"),N=n("wbr",null,null,-1),A=s("-retry plugin"),P=s(" together with this plugin, if you are experiencing floodwait errors for certain API calls, such as "),R=n("code",null,[s("api"),n("wbr"),s(".send"),n("wbr"),s("Contact")],-1),q=s("."),K=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),s(" Usage")],-1),G=n("p",null,"Here is an example of how to use this plugin with the default options. Note that the default options are aligned with the actual rate limits enforced by Telegram, so they should be good to go.",-1),S=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
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

`),n("span",{class:"token comment"},"// If you are using throttler, you most likely want to use a runner to handle updates concurrently."),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
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

`),n("span",{class:"token comment"},"// If you are using throttler, you most likely want to use a runner to handle updates concurrently."),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
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

`),n("span",{class:"token comment"},"// If you are using throttler, you most likely want to use a runner to handle updates concurrently."),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=l(`<h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>The throttler accepts a single optional argument of the following form:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ThrottlerOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  global<span class="token operator">?</span><span class="token operator">:</span> Bottleneck<span class="token punctuation">.</span>ConstructorOptions<span class="token punctuation">;</span> <span class="token comment">// for throttling all api calls</span>
  group<span class="token operator">?</span><span class="token operator">:</span> Bottleneck<span class="token punctuation">.</span>ConstructorOptions<span class="token punctuation">;</span> <span class="token comment">// for throttling outgoing group messages</span>
  out<span class="token operator">?</span><span class="token operator">:</span> Bottleneck<span class="token punctuation">.</span>ConstructorOptions<span class="token punctuation">;</span> <span class="token comment">// for throttling outgoing private messages</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),Y=s("The full list of object properties available for "),F=n("code",null,[s("Bottleneck"),n("wbr"),s(".Constructor"),n("wbr"),s("Options")],-1),V=s(" can be found at "),H={href:"https://github.com/SGrondin/bottleneck#constructor",target:"_blank",rel:"noopener noreferrer"},U=s("Bottleneck"),J=s("."),M=l(`<p>If no argument is passed, the throttler created will use the default configuration settings which should be appropriate for most use cases. The default configuration are as follows:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Outgoing Global Throttler</span>
<span class="token keyword">const</span> globalConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  reservoir<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// number of new jobs that throttler will accept at start</span>
  reservoirRefreshAmount<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// number of jobs that throttler will accept after refresh</span>
  reservoirRefreshInterval<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// interval in milliseconds where reservoir will refresh</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Outgoing Group Throttler</span>
<span class="token keyword">const</span> groupConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  maxConcurrent<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// only 1 job at a time</span>
  minTime<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// wait this many milliseconds to be ready, after a job</span>
  reservoir<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// number of new jobs that throttler will accept at start</span>
  reservoirRefreshAmount<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// number of jobs that throttler will accept after refresh</span>
  reservoirRefreshInterval<span class="token operator">:</span> <span class="token number">60000</span><span class="token punctuation">,</span> <span class="token comment">// interval in milliseconds where reservoir will refresh</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Outgoing Private Throttler</span>
<span class="token keyword">const</span> outConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  maxConcurrent<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// only 1 job at a time</span>
  minTime<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// wait this many milliseconds to be ready, after a job</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="plugin-summary" tabindex="-1"><a class="header-anchor" href="#plugin-summary" aria-hidden="true">#</a> Plugin Summary</h2>`,3),Q=n("li",null,[s("Name: "),n("code",null,[s("transformer"),n("wbr"),s("-throttler")])],-1),W=s("Source: "),X={href:"https://github.com/grammyjs/transformer-throttler",target:"_blank",rel:"noopener noreferrer"},Z=s("https://"),$=n("wbr",null,null,-1),nn=s("github"),sn=n("wbr",null,null,-1),tn=s(".com"),an=n("wbr",null,null,-1),en=s("/grammyjs"),on=n("wbr",null,null,-1),cn=s("/transformer"),ln=n("wbr",null,null,-1),pn=s("-throttler"),rn=s("Reference: "),un={href:"https://doc.deno.land/https://deno.land/x/grammy_transformer_throttler/mod.ts",target:"_blank",rel:"noopener noreferrer"},dn=l("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_transformer<wbr>_throttler<wbr>/mod<wbr>.ts",25);function kn(mn,hn){const p=o("AutotagPage"),e=o("ExternalLinkIcon"),i=o("RouterLink"),c=o("CodeGroupItem"),r=o("CodeGroup");return d(),k("div",null,[h,t(p,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),n("p",null,[b,n("a",g,[v,t(e)]),_,n("a",f,[y,t(e)]),w,t(i,{to:"/advanced/flood.html"},{default:a(()=>[T]),_:1}),x]),n("div",j,[I,n("p",null,[O,C,E,t(i,{to:"/plugins/auto-retry.html"},{default:a(()=>[B,N,A]),_:1}),P,R,q])]),K,G,t(r,null,{default:a(()=>[t(c,{title:"TypeScript",active:""},{default:a(()=>[S]),_:1}),t(c,{title:"JavaScript"},{default:a(()=>[D]),_:1}),t(c,{title:"Deno"},{default:a(()=>[L]),_:1})]),_:1}),z,n("p",null,[Y,F,V,n("a",H,[U,t(e)]),J]),M,n("ul",null,[Q,n("li",null,[W,n("a",X,[Z,$,nn,sn,tn,an,en,on,cn,ln,pn,t(e)])]),n("li",null,[rn,n("a",un,[dn,t(e)])])])])}const gn=u(m,[["render",kn],["__file","transformer-throttler.html.vue"]]);export{gn as default};

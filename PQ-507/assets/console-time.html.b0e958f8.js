import{_ as i,r as t,o as l,c,b as s,a as n,d as e,e as p}from"./app.9a621f1c.js";const d={},u=n("h1",{id:"console-logging-while-debugging",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#console-logging-while-debugging","aria-hidden":"true"},"#"),e(" Console Logging While Debugging")],-1),r=e("If you are familiar with JavaScript/TypeScript you probably used "),m={href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/log",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,[e("console"),n("wbr"),e(".log")],-1),g=e(" or "),k={href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/time",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,[e("console"),n("wbr"),e(".time")],-1),v=e(" to check what is happening while debugging something. While working on your bot or middleware you might want to check something similar: What happened, and how long took it?"),_=p(`<p>This plugin is interested in individual requests to debug individual problems. While being in a production environment, you probably want something opposite in order to get a rough overview. For example: while debugging why <code>/start</code> fails you will check the individual Telegram update. In a production context you are more interested in all <code>/start</code> messages that are happening. This library is intended to help with individual updates.</p><h2 id="debug-your-implementation" tabindex="-1"><a class="header-anchor" href="#debug-your-implementation" aria-hidden="true">#</a> Debug Your Implementation</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> generateUpdateMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;telegraf-middleware-console-time&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">generateUpdateMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Your implementation</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>which will output stuff like this:</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>2020-03-31T14:32:36.974Z 490af message text Edgar 6 /start: 926.247ms
2020-03-31T14:32:57.750Z 490ag message text Edgar 6 /start: 914.764ms
2020-03-31T14:33:01.188Z 490ah message text Edgar 5 /stop: 302.666ms
2020-03-31T14:46:11.385Z 490ai message text Edgar 6 /start: 892.452ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>490af</code> is the <code>update<wbr>_id</code>.</p><p>The number before the commands is the total length of the content. This is helpful when considering max length for stuff like callback data.</p><p>The content itself is shortened in order to prevent log spamming.</p><h2 id="debug-your-middleware" tabindex="-1"><a class="header-anchor" href="#debug-your-middleware" aria-hidden="true">#</a> Debug Your Middleware</h2><p>When you create your own middleware or assume slow timings of another middleware you can use these middlewares to create a timing profile.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  generateAfterMiddleware<span class="token punctuation">,</span>
  generateBeforeMiddleware<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;telegraf-middleware-console-time&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Use BeforeMiddleware before loading the tested middleware.</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">generateBeforeMiddleware</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Middleware to be tested</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* ... */</span>

<span class="token comment">// Use AfterMiddleware after loading the middleware you are testing (with the same label).</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">generateAfterMiddleware</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Other middleware/implementations (they will take the &quot;inner&quot; amount of time when used).</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* ... */</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span> <span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This will output something like this:</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>490ai foo before: 304.185ms
490ai foo inner: 83.122ms
490ai foo after: 501.028ms
490ai foo total: 891.849ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This indicates the checked middleware alone took 800ms and isn\u2019t as performant as maybe needed.</p><h2 id="plugin-summary" tabindex="-1"><a class="header-anchor" href="#plugin-summary" aria-hidden="true">#</a> Plugin Summary</h2>`,15),f=e("Source: "),w={href:"https://github.com/EdJoPaTo/telegraf-middleware-console-time",target:"_blank",rel:"noopener noreferrer"},y=e("https://"),x=n("wbr",null,null,-1),T=e("github"),E=n("wbr",null,null,-1),q=e(".com"),I=n("wbr",null,null,-1),A=e("/Ed"),M=n("wbr",null,null,-1),P=e("JoPaTo"),D=n("wbr",null,null,-1),N=e("/telegraf"),j=n("wbr",null,null,-1),S=e("-middleware"),z=n("wbr",null,null,-1),Y=e("-console"),B=n("wbr",null,null,-1),C=e("-time");function W(U,L){const o=t("AutotagPage"),a=t("ExternalLinkIcon");return l(),c("div",null,[u,s(o,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),n("p",null,[r,n("a",m,[h,s(a)]),g,n("a",k,[b,s(a)]),v]),_,n("ul",null,[n("li",null,[f,n("a",w,[y,x,T,E,q,I,A,M,P,D,N,j,S,z,Y,B,C,s(a)])])])])}const R=i(d,[["render",W],["__file","console-time.html.vue"]]);export{R as default};

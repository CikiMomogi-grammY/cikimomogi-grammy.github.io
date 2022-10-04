import{_ as t,r as o,o as i,c as l,a as n,b as a,d as s,e as c}from"./app.cd079934.js";const p={},d=n("h1",{id:"console-logging-while-debugging",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#console-logging-while-debugging","aria-hidden":"true"},"#"),s(" Console Logging While Debugging")],-1),u=s("If you are familiar with JavaScript/TypeScript you probably used "),r={href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/log",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,[s("console"),n("wbr"),s(".log")],-1),h=s(" or "),k={href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/time",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,[s("console"),n("wbr"),s(".time")],-1),b=s(" to check what is happening while debugging something. While working on your bot or middleware you might want to check something similar: What happened, and how long took it?"),v=c(`<p>This plugin is interested in individual requests to debug individual problems. While being in a production environment, you probably want something opposite in order to get a rough overview. For example: while debugging why <code>/start</code> fails you will check the individual Telegram update. In a production context you are more interested in all <code>/start</code> messages that are happening. This library is intended to help with individual updates.</p><h2 id="debug-your-implementation" tabindex="-1"><a class="header-anchor" href="#debug-your-implementation" aria-hidden="true">#</a> Debug Your Implementation</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> generateUpdateMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;telegraf-middleware-console-time&quot;</span><span class="token punctuation">;</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This indicates the checked middleware alone took 800ms and isn\u2019t as performant as maybe needed.</p><h2 id="plugin-summary" tabindex="-1"><a class="header-anchor" href="#plugin-summary" aria-hidden="true">#</a> Plugin Summary</h2>`,15),_=s("Source: "),f={href:"https://github.com/EdJoPaTo/telegraf-middleware-console-time",target:"_blank",rel:"noopener noreferrer"},w=s("https://"),y=n("wbr",null,null,-1),x=s("github"),T=n("wbr",null,null,-1),q=s(".com"),E=n("wbr",null,null,-1),M=s("/Ed"),B=n("wbr",null,null,-1),I=s("JoPaTo"),S=n("wbr",null,null,-1),W=s("/telegraf"),N=n("wbr",null,null,-1),U=s("-middleware"),A=n("wbr",null,null,-1),P=s("-console"),V=n("wbr",null,null,-1),C=s("-time");function D(Z,J){const e=o("ExternalLinkIcon");return i(),l("div",null,[d,n("p",null,[u,n("a",r,[m,a(e)]),h,n("a",k,[g,a(e)]),b]),v,n("ul",null,[n("li",null,[_,n("a",f,[w,y,x,T,q,E,M,B,I,S,W,N,U,A,P,V,C,a(e)])])])])}const Y=t(p,[["render",D],["__file","console-time.html.vue"]]);export{Y as default};

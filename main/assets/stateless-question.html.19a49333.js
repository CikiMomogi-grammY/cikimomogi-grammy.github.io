import{_ as e,r as o,o as p,c,a as n,b as t,d as s,e as i}from"./app.cd079934.js";const u={},l=n("h1",{id:"stateless-question-stateless-question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#stateless-question-stateless-question","aria-hidden":"true"},"#"),s(" Stateless Question ("),n("code",null,[s("stateless"),n("wbr"),s("-question")]),s(")")],-1),r=n("blockquote",null,[n("p",null,"Create stateless questions to Telegram users working in privacy mode")],-1),k=s("You want to keep the privacy of the user with "),d={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},h=s("Telegrams privacy mode enabled (by default)"),m=s(", send users translated questions in their language and don\u2019t save the state what users are currently doing?"),_=n("p",null,"This plugin wants to solve this problem.",-1),v=s("The basic idea is to send your question with a "),b={href:"https://en.wikipedia.org/wiki/Zero-width_non-joiner",target:"_blank",rel:"noopener noreferrer"},g=s("special text"),y=s(" at the end. This text is invisible to the user but still visible for your bot. When the user replies to a message, the message is checked. If it is containing this special text at the end, then it is an answer to the question. This way you can have many strings for the same questions as when having translations. You only have to make sure the "),f=n("code",null,[s("unique"),n("wbr"),s("Identifier")],-1),w=s(" is unique within your bot."),q=i(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StatelessQuestion <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@grammyjs/stateless-question&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> unicornQuestion <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StatelessQuestion</span><span class="token punctuation">(</span><span class="token string">&quot;unicorns&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;User thinks unicorns are doing:&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Don&#39;t forget to use the middleware.</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>unicornQuestion<span class="token punctuation">.</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;rainbows&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> text<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>session<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">&quot;de&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text <span class="token operator">=</span> <span class="token string">&quot;Was machen Einh\xF6rner?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    text <span class="token operator">=</span> <span class="token string">&quot;What are unicorns doing?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">replyWithMarkdown</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Or send your question manually (make sure to use a parse_mode and force_reply!).</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;unicorn&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithMarkdown</span><span class="token punctuation">(</span>
    <span class="token string">&quot;What are unicorns doing?&quot;</span> <span class="token operator">+</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">messageSuffixMarkdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;Markdown&quot;</span><span class="token punctuation">,</span> reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;unicorn&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithHTML</span><span class="token punctuation">(</span>
    <span class="token string">&quot;What are unicorns doing?&quot;</span> <span class="token operator">+</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">messageSuffixHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span> reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x=s("See the "),T={href:"https://github.com/grammyjs/stateless-question",target:"_blank",rel:"noopener noreferrer"},Q=s("plugin repo README"),S=s(" for more information."),M=n("h2",{id:"plugin-summary",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-summary","aria-hidden":"true"},"#"),s(" Plugin Summary")],-1),W=n("li",null,[s("Name: "),n("code",null,[s("stateless"),n("wbr"),s("-question")])],-1),E=s("Source: "),j={href:"https://github.com/grammyjs/stateless-question",target:"_blank",rel:"noopener noreferrer"},L=s("https://"),N=n("wbr",null,null,-1),B=s("github"),I=n("wbr",null,null,-1),V=s(".com"),H=n("wbr",null,null,-1),C=s("/grammyjs"),D=n("wbr",null,null,-1),U=s("/stateless"),Y=n("wbr",null,null,-1),A=s("-question");function O(P,R){const a=o("ExternalLinkIcon");return p(),c("div",null,[l,r,n("p",null,[k,n("a",d,[h,t(a)]),m]),_,n("p",null,[v,n("a",b,[g,t(a)]),y,f,w]),q,n("p",null,[x,n("a",T,[Q,t(a)]),S]),M,n("ul",null,[W,n("li",null,[E,n("a",j,[L,N,B,I,V,H,C,D,U,Y,A,t(a)])])])])}const z=e(u,[["render",O],["__file","stateless-question.html.vue"]]);export{z as default};
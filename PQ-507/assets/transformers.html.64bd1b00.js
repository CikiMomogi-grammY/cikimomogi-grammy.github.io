import{_ as l,r as p,o as u,c as r,b as a,a as s,w as e,d as n,e as o}from"./app.9837a88d.js";const d={},k=s("h1",{id:"bot-api-transformers-\u8F6C\u6362\u5668",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bot-api-transformers-\u8F6C\u6362\u5668","aria-hidden":"true"},"#"),n(" Bot API Transformers\uFF08\u8F6C\u6362\u5668\uFF09")],-1),m=s("p",null,"\u4E2D\u95F4\u4EF6\u662F\u4E00\u4E2A\u53EF\u4EE5\u5904\u7406\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684\u5904\u7406\u51FD\u6570\uFF0C\u4F8B\u5982\u5904\u7406\u8F93\u5165\u7684\u6570\u636E\u3002",-1),b=s("p",null,"grammY \u4E3A\u4F60\u63D0\u4F9B\u4E86\u548C\u4E2D\u95F4\u4EF6\u76F8\u53CD\u7684\u529F\u80FD\u3002 transformer \u662F\u4E00\u4E2A\u53EF\u4EE5\u5904\u7406\u8F93\u51FA\u7684\u6570\u636E\u7684\u51FD\u6570\uFF0C\u4F8B\u5982\uFF1A",-1),h=s("ul",null,[s("li",null,"\u4E00\u4E2A\u7528\u6765\u8C03\u7528 Bot API \u7684\u65B9\u6CD5\u540D"),s("li",null,"\u4E00\u4E2A\u53EF\u4EE5\u5339\u914D\u65B9\u6CD5\u7684 payload \u5BF9\u8C61")],-1),v=n("\u4F60\u63A5\u6536 "),_=s("code",null,"prev",-1),g=n(" \u4F5C\u4E3A\u4F7F\u7528\u4E0A\u6E38 transformer \u51FD\u6570\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF0C\u800C\u4E0D\u662F \u5C06 "),f=s("code",null,"next",-1),x=n(" \u4F5C\u4E3A\u8C03\u7528\u4E0B\u6E38\u4E2D\u95F4\u4EF6\u7684\u6700\u540E\u4E00\u4E2A\u53C2\u6570\u3002 \u67E5\u770B "),y=s("code",null,"Transformer",-1),w=n("\uFF08"),A={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Transformer",target:"_blank",rel:"noopener noreferrer"},I=n("grammY API \u53C2\u8003"),P=n("\uFF09\u7684\u7C7B\u578B\u7B7E\u540D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u89C1\u662F\u5982\u4F55\u6620\u5C04\u7684\u3002 \u6CE8\u610F "),E=s("code",null,[n("Payload<M"),s("wbr"),n(", R>")],-1),B=n(" \u6307\u7684\u662F payload \u5BF9\u8C61\u5FC5\u987B\u5339\u914D\u7ED9\u5B9A\u7684\u65B9\u6CD5\uFF0C\u5E76\u4E14 "),T=s("code",null,[n("Api"),s("wbr"),n("Response<Api"),s("wbr"),n("Call"),s("wbr"),n("Result<M"),s("wbr"),n(", R>>")],-1),q=n(" \u662F\u8C03\u7528\u65B9\u6CD5\u7684\u8FD4\u56DE\u7C7B\u578B\u3002"),C=o(`<p>\u6700\u540E\u8C03\u7528\u7684 transformer \u51FD\u6570\u662F\u4E00\u4E2A\u5185\u7F6E\u7684\u8C03\u7528\u8005\uFF0C\u5B83\u53EF\u4EE5\u5BF9\u67D0\u4E9B\u5B57\u6BB5\u8FDB\u884C JSON \u5E8F\u5217\u5316\uFF0C\u5E76\u5728\u6700\u540E\u8C03\u7528 <code>fetch</code>\u3002</p><p>\u5BF9\u4E8E transformer \u51FD\u6570\uFF0C\u6CA1\u6709\u7B49\u6548\u7684 <code>Composer</code> \u7C7B\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u80FD\u6709\u70B9\u8FC7\u5206\u4E86\uFF0C\u4F46\u662F\u5982\u679C\u4F60\u9700\u8981\u5B83\u7684\u8BDD\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u5199\u4E00\u4E2A\uFF0C\u7136\u540E\u7ED9\u6211\u4EEC\u63D0 PR\uFF0C\u5927\u5927\u7684\u6B22\u8FCE\uFF01\u{1F609}</p><h2 id="\u5B89\u88C5\u4E00\u4E2A-transformer-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4E00\u4E2A-transformer-\u51FD\u6570" aria-hidden="true">#</a> \u5B89\u88C5\u4E00\u4E2A Transformer \u51FD\u6570</h2><p>Transformer \u51FD\u6570\u53EF\u4EE5\u88AB\u5B89\u88C5\u5728 <code>bot<wbr>.api</code> \u4E2D\u3002 \u8FD9\u662F\u4E00\u4E2A\u6CA1\u6709\u505A\u4EFB\u4F55\u4E8B\u60C5\u7684 transformer \u51FD\u6570\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u4F20\u9012 transformer \u51FD\u6570</span>
bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> method<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> signal<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token function">prev</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> signal<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5BF9\u7167\u4F20\u9012\u7684\u4E2D\u95F4\u4EF6</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u4E00\u4E2A transformer \u51FD\u6570\u4ECE\u53D1\u751F\u65F6\u963B\u6B62\u6240\u6709 API \u8C03\u7528\u7684\u4F8B\u5B50\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u9519\u8BEF\u7684\u8FD4\u56DE undefined \u800C\u4E0D\u662F\u5404\u81EA\u7684\u5BF9\u8C61\u7C7B\u578B\u3002</span>
bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> method<span class="token punctuation">,</span> payload<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">undefined</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u4E5F\u53EF\u4EE5\u5728\u4E0A\u4E0B\u6587\u5BF9\u8C61\u7684 API \u5BF9\u8C61\u4E2D\u5B89\u88C5 transformer \u51FD\u6570\u3002 \u7136\u540E\uFF0Ctransformer \u51FD\u6570\u5C06\u4EC5\u4E34\u65F6\u7528\u4E8E\u5728\u7279\u5B9A\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E0A\u6267\u884C\u7684API\u8BF7\u6C42\u3002 \u8C03\u7528 <code>bot<wbr>.api</code> \u5E76\u4E0D\u53D7\u5F71\u54CD\u3002 \u901A\u8FC7\u5E76\u53D1\u8FD0\u884C\u7684\u4E2D\u95F4\u4EF6\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u8C03\u7528\u4E5F\u4E0D\u53D7\u5F71\u54CD\u3002 \u4E00\u65E6\u5404\u81EA\u7684\u4E2D\u95F4\u4EF6\u5B8C\u6210\uFF0Ctransformer \u51FD\u6570\u5C31\u4F1A\u88AB\u5E9F\u5F03\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5B89\u88C5\u6240\u6709\u5904\u7406\u6D88\u606F\u7684\u4E0A\u4E0B\u6587\u5BF9\u8C61\u3002</span>
  ctx<span class="token punctuation">.</span>api<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prev<span class="token punctuation">,</span> method<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> signal<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token function">prev</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> signal<span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>signal</code> \u53C2\u6570\u5E94\u8BE5\u59CB\u7EC8\u4F20\u9012\u7ED9 <code>prev</code>\u3002 \u5B83\u5141\u8BB8\u53D6\u6D88\u8BF7\u6C42\uFF0C\u5E76\u4E14\u5BF9\u4E8E <code>bot<wbr>.stop</code> \u7684\u6B63\u5E38\u5DE5\u4F5C\u975E\u5E38\u91CD\u8981\u3002</p></blockquote><p>\u5DF2\u7ECF\u5728 <code>bot<wbr>.api</code> \u4E2D\u5B89\u88C5\u4E86Transformer \u51FD\u6570\u5C06\u4F1A\u88AB\u9884\u5B89\u88C5\u5230\u6BCF\u4E00\u4E2A <code>ctx<wbr>.api</code> \u5BF9\u8C61\u4E2D\u3002 \u56E0\u6B64\uFF0C\u8C03\u7528 <code>ctx<wbr>.api</code> \u5C06\u4F1A\u88AB <code>ctx<wbr>.api</code> \u4E2D\u7684 transformers \u8F6C\u6362\uFF0C\u540C\u6837\u90A3\u4E9B transformers \u4E5F\u4F1A\u88AB\u5B89\u88C5\u5728 <code>bot<wbr>.api</code> \u4E2D\u3002</p><h2 id="transformer-\u51FD\u6570\u7684\u4F7F\u7528\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#transformer-\u51FD\u6570\u7684\u4F7F\u7528\u7528\u4F8B" aria-hidden="true">#</a> Transformer \u51FD\u6570\u7684\u4F7F\u7528\u7528\u4F8B</h2><p>Transformer \u51FD\u6570\u50CF\u4E2D\u95F4\u4EF6\u4E00\u6837\u7075\u6D3B\uFF0C\u5E76\u4E14\u4ED6\u4EEC\u4E5F\u6709\u5F88\u591A\u4E0D\u540C\u7684\u5E94\u7528\u3002</p>`,13),R=n("\u4F8B\u5982\uFF0C"),z=n("grammY menu \u63D2\u4EF6"),Y=n(" \u4F7F\u7528\u4E86\u4E00\u4E2A transformer \u51FD\u6570\u6765\u5C06 menu \u5B9E\u4F8B\u8F6C\u6362\u6210\u4E00\u4E2A\u6B63\u786E\u7684 payload\u3002 \u4F60\u4E5F\u53EF\u4EE5\u7528\u5B83\u4EEC\u6765\uFF1A"),j=n("\u5B9E\u73B0 "),F=n("\u6D41\u91CF\u63A7\u5236"),M=s("li",null,"\u6D4B\u8BD5\u671F\u95F4\u7528\u6765 mock API \u8BF7\u6C42",-1),N=n("\u589E\u52A0 "),S=n("\u91CD\u8BD5\u884C\u4E3A"),D=s("li",null,"\u6216\u8005\u66F4\u591A\u5176\u5B83\u7684\u4E8B\u60C5",-1),L=o('<p>\u6CE8\u610F\uFF0C\u4E0D\u8FC7\u91CD\u8BD5\u4E00\u4E2A API \u8C03\u7528\u4F1A\u6709\u5076\u7136\u7684\u526F\u4F5C\u7528\uFF1A\u5982\u679C\u4F60\u8C03\u7528 <code>sen<wbr>Document</code> \u5E76\u4E14\u5C06\u4E00\u4E2A\u53EF\u8BFB\u6D41\u5B9E\u4F8B\u4F20\u9012\u7ED9 <code>Input<wbr>File</code>\uFF0C\u53EF\u8BFB\u6D41\u5C06\u4F1A\u5728\u5C1D\u8BD5\u8BF7\u6C42\u65F6\u7B2C\u4E00\u65F6\u95F4\u88AB\u8BFB\u53D6\u3002 \u5982\u679C\u4F60\u518D\u6B21\u8C03\u7528 <code>prev</code>\uFF0C\u8FD9\u4E2A\u6D41\u53EF\u80FD\u5DF2\u7ECF\u88AB\uFF08\u90E8\u5206\u5730\uFF09\u8BFB\u53D6\uFF0C\u4F1A\u5BFC\u81F4\u8BFB\u53D6\u5230\u635F\u574F\u7684\u6587\u4EF6\u3002 \u56E0\u6B64\u5B83\u662F\u5C06\u6587\u4EF6\u8DEF\u5F84\u4F20\u9012\u7ED9 <code>Input<wbr>File</code> \u7684\u66F4\u52A0\u53EF\u9760\u7684\u505A\u6CD5\uFF0CgrammY \u53EF\u4EE5\u5728\u5FC5\u8981\u7684\u65F6\u5019\u91CD\u5EFA\u8FD9\u4E2A\u6D41\u3002</p><h2 id="api-\u8C03\u5473\u5242" tabindex="-1"><a class="header-anchor" href="#api-\u8C03\u5473\u5242" aria-hidden="true">#</a> API \u8C03\u5473\u5242</h2>',2),K=n("grammY \u5177\u6709 "),O=n("\u4E0A\u4E0B\u6587\u8C03\u5473\u5242"),V=o(" \u53EF\u4EE5\u7528\u4E8E\u8C03\u6574\u4E0A\u4E0B\u6587\u7C7B\u578B\u3002 \u8FD9\u5305\u62EC API \u65B9\u6CD5 \u2014 \u5305\u62EC\u90A3\u4E9B\u76F4\u63A5\u5305\u542B\u5728\u4E0A\u4E0B\u6587\u5BF9\u8C61\u4E2D\u7684\u50CF <code>ctx<wbr>.reply</code> \uFF0C\u5E76\u4E14\u5728 <code>ctx<wbr>.api</code> \u548C <code>ctx<wbr>.api<wbr>.raw</code> \u4E2D\u7684\u65B9\u6CD5\u3002 \u4E0D\u8FC7\u4F60\u4E0D\u80FD\u901A\u8FC7\u4E0A\u4E0B\u6587\u8C03\u5473\u5242\u6765\u8C03\u6574 <code>bot<wbr>.api</code> \u548C <code>bot<wbr>.api<wbr>.raw</code> \u7684\u7C7B\u578B\u3002",11),H=o(`<p>\u8FD9\u662F\u4E3A\u4EC0\u4E48 grammY \u652F\u6301 API \u98CE\u683C \u5B83\u4EEC\u89E3\u51B3\u4E86\u8FD9\u4E2A\u95EE\u9898\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Api<span class="token punctuation">,</span> Bot<span class="token punctuation">,</span> Context <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> SomeApiFlavor<span class="token punctuation">,</span> SomeContextFlavor<span class="token punctuation">,</span> somePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;some-plugin&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u8C03\u5473\u4E0A\u4E0B\u6587</span>
<span class="token keyword">type</span> <span class="token class-name">MyContext</span> <span class="token operator">=</span> Context <span class="token operator">&amp;</span> SomeContextFlavor<span class="token punctuation">;</span>
<span class="token comment">// \u8C03\u5473 API</span>
<span class="token keyword">type</span> <span class="token class-name">MyApi</span> <span class="token operator">=</span> Api <span class="token operator">&amp;</span> SomeApiFlavor<span class="token punctuation">;</span>

<span class="token comment">// \u540C\u65F6\u4F7F\u7528\u4E24\u4E2A\u8C03\u5473\u5242\u3002</span>
<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot<span class="token operator">&lt;</span>MyContext<span class="token punctuation">,</span> MyApi<span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token string">&quot;my-token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528\u4E00\u4E2A\u63D2\u4EF6\u3002</span>
bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">somePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u73B0\u5728\u7528\u4ECE API \u8C03\u5473\u5242\u8C03\u6574\u8FC7\u7684\u7C7B\u578B\u8C03\u7528 \`bot.api\`\u3002</span>
bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">somePluginMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8FD8\u53EF\u4EE5\u4F7F\u7528\u6839\u636E\u4E0A\u4E0B\u6587\u8C03\u5473\u5242\u8C03\u6574\u7684\u4E0A\u4E0B\u6587\u7C7B\u578B\u3002</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">somePluginMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),G=n("API \u8C03\u5473\u5242\u4E0E\u4E0A\u4E0B\u6587\u8C03\u5473\u5242\u7684\u5DE5\u4F5C\u65B9\u5F0F\u5B8C\u5168\u76F8\u4F3C\u3002 \u8FD9\u91CC\u6709\u9644\u52A0\u7684\u548C\u53D8\u9769\u6027\u7684 API \u8C03\u5473\u5242\uFF0C\u53EF\u4EE5\u50CF\u5904\u7406\u4E0A\u4E0B\u6587\u8C03\u5473\u5242\u4E00\u6837\u7EC4\u5408\u591A\u4E2A API \u8C03\u5473\u5242\u3002 \u5982\u679C\u4F60\u8FD8\u4E0D\u592A\u6E05\u695A\u8FD9\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\uFF0C\u53BB\u67E5\u770B\u8FD9\u91CC\u9762\u7684\u6307\u5BFC\u4FE1\u606F "),J=n("\u5173\u4E8E\u4E0A\u4E0B\u6587\u8C03\u5473\u5242\u7684\u5C0F\u8282"),Q=n(" \u3002");function U(W,X){const c=p("AutotagPage"),i=p("ExternalLinkIcon"),t=p("RouterLink");return u(),r("div",null,[k,a(c,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),m,b,h,s("p",null,[v,_,g,f,x,y,w,s("a",A,[I,a(i)]),P,E,B,T,q]),C,s("p",null,[R,a(t,{to:"/zh/plugins/menu.html"},{default:e(()=>[z]),_:1}),Y]),s("ul",null,[s("li",null,[j,a(t,{to:"/zh/plugins/transformer-throttler.html"},{default:e(()=>[F]),_:1})]),M,s("li",null,[N,a(t,{to:"/zh/plugins/auto-retry.html"},{default:e(()=>[S]),_:1})]),D]),L,s("p",null,[K,a(t,{to:"/zh/guide/context.html#%E4%B8%8A%E4%B8%8B%E6%96%87%E8%B0%83%E5%91%B3%E5%89%82"},{default:e(()=>[O]),_:1}),V]),H,s("p",null,[G,a(t,{to:"/zh/guide/context.html#%E4%B8%8A%E4%B8%8B%E6%96%87%E8%B0%83%E5%91%B3%E5%89%82"},{default:e(()=>[J]),_:1}),Q])])}const $=l(d,[["render",U],["__file","transformers.html.vue"]]);export{$ as default};

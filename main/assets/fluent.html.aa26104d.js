import{_ as c,r as l,o as i,c as u,a as s,b as e,w as o,d as n,e as p}from"./app.2f873437.js";const r={},d=s("h1",{id:"\u4F7F\u7528-fluent-\u8FDB\u884C\u56FD\u9645\u5316-fluent",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4F7F\u7528-fluent-\u8FDB\u884C\u56FD\u9645\u5316-fluent","aria-hidden":"true"},"#"),n(" \u4F7F\u7528 Fluent \u8FDB\u884C\u56FD\u9645\u5316 ("),s("code",null,"fluent"),n(")")],-1),m={href:"https://projectfluent.org/",target:"_blank",rel:"noopener noreferrer"},_=n("Fluent"),k=n(" \u662F Mozilla \u57FA\u91D1\u4F1A\u5236\u4F5C\u7684\u4E00\u4E2A\u672C\u5730\u5316\u7CFB\u7EDF\uFF0C\u7528\u4E8E\u81EA\u7136\u53D1\u97F3\u7684\u7FFB\u8BD1\u3002 \u5B83\u6709\u4E00\u4E2A\u975E\u5E38\u5F3A\u5927\u548C\u4F18\u96C5\u7684\u8BED\u6CD5\uFF0C\u53EF\u4EE5\u8BA9\u4EFB\u4F55\u4EBA\u5199\u51FA\u9AD8\u6548\u548C\u5B8C\u5168\u53EF\u7406\u89E3\u7684\u7FFB\u8BD1\u3002 \u8FD9\u4E2A\u63D2\u4EF6\u5229\u7528\u4E86\u8FD9\u4E2A\u60CA\u4EBA\u7684\u672C\u5730\u5316\u7CFB\u7EDF\uFF0C\u4F7F\u5F97\u7531 grammY \u9A71\u52A8\u7684 bot \u80FD\u591F\u6D41\u7545\u5730\u8FDB\u884C\u9AD8\u8D28\u91CF\u7684\u7FFB\u8BD1\u3002"),h={class:"custom-container tip"},v=s("p",{class:"custom-container-title"},"\u4E0D\u8981\u56F0\u60D1",-1),b=n("\u4E0D\u8981\u5C06\u5B83\u4E0E "),g=n("i18n"),f=n(" \u6DF7\u6DC6\u3002"),w=n("i18n"),x=n(" \u662F\u8FD9\u4E2A\u63D2\u4EF6\u7684\u6539\u8FDB\u7248\uFF0C\u5B83\u53EF\u4EE5\u5728 Deno \u548C Node.js \u4E0A\u4F7F\u7528\u3002"),y=p(`<h2 id="\u521D\u59CB\u5316-fluent" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316-fluent" aria-hidden="true">#</a> \u521D\u59CB\u5316 Fluent</h2><p>\u7B2C\u4E00\u4EF6\u4E8B\u662F\u521D\u59CB\u5316\u4E00\u4E2A Fluent \u5B9E\u4F8B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Fluent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@moebius/fluent&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fluent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fluent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\uFF0C\u9700\u8981\u6DFB\u52A0\u81F3\u5C11\u4E00\u4E2A\u7FFB\u8BD1\u5230 Fluent \u5B9E\u4F8B\u4E2D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> fluent<span class="token punctuation">.</span><span class="token function">addTranslation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u6307\u5B9A\u4F60\u7684\u7FFB\u8BD1\u6240\u652F\u6301\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u5730\u533A\uFF1A</span>
  locales<span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// \u4F60\u53EF\u4EE5\u76F4\u63A5\u6307\u5B9A\u7FFB\u8BD1\u5185\u5BB9\uFF1A</span>
  source<span class="token operator">:</span> <span class="token string">&quot;{YOUR TRANSLATION FILE CONTENT}&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// \u4F60\u4E5F\u53EF\u4EE5\u6307\u5B9A\u7FFB\u8BD1\u6587\u4EF6\uFF1A</span>
  filePath<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/feature-1/translation.en.ftl</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/feature-2/translation.en.ftl</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Fluent \u7684\u5404\u4E2A\u65B9\u9762\u90FD\u662F\u9AD8\u5EA6\u53EF\u914D\u7F6E\u7684\uFF1A</span>
  bundleOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F7F\u7528\u8BE5\u9009\u9879\u53EF\u4EE5\u907F\u514D\u88AB\u66FF\u6362\u7684\u53D8\u91CF\u5468\u56F4\u51FA\u73B0\u9690\u5F62\u5B57\u7B26\u3002</span>
    useIsolating<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u64B0\u5199\u7FFB\u8BD1\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u64B0\u5199\u7FFB\u8BD1\u6D88\u606F" aria-hidden="true">#</a> \u64B0\u5199\u7FFB\u8BD1\u6D88\u606F</h2>`,6),F=n("Fluent \u7684\u8BED\u6CD5\u5F88\u5BB9\u6613\u638C\u63E1\u3002 \u4F60\u53EF\u4EE5\u4ECE "),q={href:"https://projectfluent.org/#examples",target:"_blank",rel:"noopener noreferrer"},C=n("\u5B98\u65B9\u793A\u4F8B"),B=n(" \u6216 "),N={href:"https://projectfluent.org/fluent/guide/",target:"_blank",rel:"noopener noreferrer"},E=n("\u7EFC\u5408\u6027\u8BED\u6CD5\u6307\u5357"),j=n(" \u4E2D\u5F00\u59CB\u3002"),A=p(`<p>\u8BA9\u6211\u4EEC\u4ECE\u8FD9\u4E2A\u793A\u4F8B\u5F00\u59CB\u5427\uFF1A</p><div class="language-ftl ext-ftl line-numbers-mode"><pre class="language-ftl"><code>-bot-name = Apples Bot

welcome =
  Welcome, {$name}, to the {-bot-name}!
  You have { NUMBER($applesCount) -&gt;
    [0] no apples
    [one] {$applesCount} apple
    *[other] {$applesCount} apples
  }.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B83\u6F14\u793A\u4E86 Fluent \u4E2D\u4E09\u4E2A\u91CD\u8981\u7684\u529F\u80FD\uFF0C\u5206\u522B\u662F\uFF1A <strong>terms</strong>\uFF0C <strong>variable substitution</strong> (\u5373 <em>placeables</em>) \u548C <strong>pluralization</strong>\u3002</p><p><code>welcome</code> \u662F\u6D88\u606F ID\uFF0C\u540E\u9762\u8DDF\u7740\u7684\u662F\u6D88\u606F\u4F53\uFF0C\u5728\u6E32\u67D3\u65F6\u4F1A\u901A\u8FC7 <code>welcome</code> \u6765\u5F15\u7528\u6D88\u606F\u4F53\u3002</p><p>\u8BED\u53E5 <code>-bot<wbr>-name <wbr>=<wbr> Apples Bot</code> \u5B9A\u4E49\u4E86\u4E00\u4E2A <strong>term</strong>\uFF0C\u540D\u79F0\u4E3A <code>bot<wbr>-name</code>\uFF0C\u503C\u4E3A <code>Apples Bot</code>\u3002 <code>{<wbr>-bot<wbr>-name}</code> \u7ED3\u6784\u5F15\u7528\u4E86\u4E4B\u524D\u5B9A\u4E49\u7684 term\uFF0C\u5728\u6E32\u67D3\u65F6\u4F1A\u88AB term \u7684\u503C\u66FF\u6362\u3002</p><p>\u8BED\u53E5 <code>{$name}</code> \u5C06\u4F1A\u88AB\u66FF\u6362\u4E3A <code>name</code> \u53D8\u91CF\u7684\u503C\uFF0C\u4F60\u9700\u8981\u81EA\u5DF1\u4F20\u9012\u7ED9\u7FFB\u8BD1\u51FD\u6570\u3002</p>`,6),R=n("\u6700\u540E\u4E00\u6761\u8BED\u53E5 ("),I=s("em",null,"\u7B2C 5 \u884C\u5230\u7B2C 9 \u884C",-1),L=n(") \u5B9A\u4E49\u4E86\u4E00\u4E2A "),T=s("strong",null,"selector",-1),Y=n("\uFF08\u975E\u5E38\u7C7B\u4F3C\u4E8E switch \u8BED\u53E5\uFF09\uFF0C\u5B83\u63A5\u6536\u5E94\u7528\u4E8E "),$=s("code",null,[n("apples"),s("wbr"),n("Count")],-1),z=n(" \u53D8\u91CF\u7684\u7279\u6B8A "),M=s("code",null,"NUMBER",-1),D=n(" \u51FD\u6570\u7684\u7ED3\u679C\uFF0C\u5E76\u6839\u636E\u5339\u914D\u7684\u503C\u9009\u62E9\u4E09\u79CD\u53EF\u80FD\u7684\u4FE1\u606F\u4E4B\u4E00\u6765\u6E32\u67D3\u3002 "),O=s("code",null,"NUMBER",-1),S=n(" \u51FD\u6570\u5C06\u6839\u636E\u63D0\u4F9B\u7684\u503C\u548C\u4F7F\u7528\u7684\u8BED\u8A00\u8FD4\u56DE\u4E00\u4E2A "),U={href:"https://www.unicode.org/cldr/cldr-aux/charts/30/supplemental/language_plural_rules.md",target:"_blank",rel:"noopener noreferrer"},V=n("CLDR plural category"),W=n("\u3002 \u8FD9\u6709\u6548\u5730\u5B9E\u73B0\u4E86 pluralization\u3002"),P=s("h2",{id:"grammy-\u914D\u7F6E",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#grammy-\u914D\u7F6E","aria-hidden":"true"},"#"),n(" grammY \u914D\u7F6E")],-1),G=s("p",null,"\u73B0\u5728\uFF0C\u8BA9\u6211\u4EEC\u770B\u770B\u4E0A\u9762\u8FD9\u6761\u6D88\u606F\u5982\u4F55\u88AB bot \u6E32\u67D3\u51FA\u6765\u3002 \u4F46\u9996\u5148\uFF0C\u6211\u4EEC\u9700\u8981\u914D\u7F6E grammY \u4F7F\u7528\u8BE5\u63D2\u4EF6\u3002",-1),H=n("\u5728\u6240\u6709\u5176\u4ED6\u65B9\u9762\u4E4B\u524D\uFF0C\u4F60\u9700\u8981\u914D\u7F6E\u4F60\u7684 bot \u4F7F\u7528 Fluent \u4E0A\u4E0B\u6587\u8C03\u5473\u5242\u3002 \u5982\u679C\u4F60\u4E0D\u719F\u6089\u8FD9\u4E2A\u6982\u5FF5\uFF0C\u4F60\u5E94\u8BE5\u9605\u8BFB "),J=n("\u4E0A\u4E0B\u6587\u8C03\u5473\u5242"),K=n(" \u7684\u5B98\u65B9\u6587\u6863\u3002"),Q=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Context <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FluentContextFlavor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@grammyjs/fluent&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u6269\u5C55\u4F60\u7684\u5E94\u7528\u7A0B\u5E8F\u4E0A\u4E0B\u6587\u7C7B\u578B\uFF0C\u6DFB\u52A0\u63D0\u4F9B\u7684\u8C03\u5473\u5242\u63A5\u53E3\u3002</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MyAppContext</span> <span class="token operator">=</span> Context <span class="token operator">&amp;</span> FluentContextFlavor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u9700\u8981\u4F7F\u7528\u4E0B\u9762\u7684\u65B9\u5F0F\u521B\u5EFA\u4F60\u7684 bot \u5B9E\u4F8B\uFF0C\u4EE5\u4FBF\u4F7F\u7528\u6269\u5C55\u7684\u4E0A\u4E0B\u6587\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot<span class="token operator">&lt;</span>MyAppContext<span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6700\u540E\u4E00\u6B65\u662F\u5C06 Fluent \u63D2\u4EF6\u6CE8\u518C\u5230 grammY \u4E2D\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">useFluent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    fluent<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u786E\u4FDD\u4F20\u9012 <a href="#%E5%88%9D%E5%A7%8B%E5%8C%96-fluent">\u5148\u524D\u521B\u5EFA\u7684 Fluent \u5B9E\u4F8B</a>\u3002</p><h2 id="\u6E32\u67D3\u672C\u5730\u5316\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3\u672C\u5730\u5316\u6D88\u606F" aria-hidden="true">#</a> \u6E32\u67D3\u672C\u5730\u5316\u6D88\u606F</h2><p>\u5F88\u597D\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u6709\u4E86\u6E32\u67D3\u6211\u4EEC\u7684\u6D88\u606F\u7684\u6240\u6709\u6761\u4EF6\uFF01 \u8BA9\u6211\u4EEC\u901A\u8FC7\u5728\u6211\u4EEC\u7684\u673A\u5668\u4EBA\u4E2D\u5B9A\u4E49\u4E00\u4E2A\u6D4B\u8BD5\u547D\u4EE4\u6765\u505A\u5230\u8FD9\u4E00\u70B9\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;i18n_test&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8C03\u7528 &quot;translate&quot; \u6216 &quot;t&quot; \u6765\u6E32\u67D3\u6D88\u606F\uFF0C\u6307\u5B9A\u5176 ID \u548C\u989D\u5916\u53C2\u6570\uFF1A</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>
    ctx<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;welcome&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> ctx<span class="token punctuation">.</span>from<span class="token punctuation">.</span>first_name<span class="token punctuation">,</span>
      applesCount<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u4F60\u53EF\u4EE5\u542F\u52A8\u4F60\u7684 bot\uFF0C\u5E76\u4F7F\u7528 <code>/i18n<wbr>_test</code> \u547D\u4EE4\u3002 \u5B83\u5E94\u8BE5\u6E32\u67D3\u4EE5\u4E0B\u6D88\u606F\uFF1A</p><div class="language-text ext-text"><pre class="language-text"><code>Welcome, Slava, to the Apples Bot!
You have 1 apple.
</code></pre></div><p>\u5F53\u7136\uFF0C\u4F60\u5C06\u4F1A\u770B\u5230\u4F60\u81EA\u5DF1\u7684\u540D\u5B57\u800C\u4E0D\u662F \u201CSlava\u201D\u3002 \u8BD5\u7740\u6539\u53D8 <code>apples<wbr>Count</code> \u53D8\u91CF\u7684\u503C\uFF0C\u770B\u770B\u6E32\u67D3\u7684\u6D88\u606F\u4F1A\u6709\u4EC0\u4E48\u53D8\u5316\uFF01</p><p>\u8BF7\u6CE8\u610F\uFF0C\u4F60\u73B0\u5728\u53EF\u4EE5\u5728\u4EFB\u4F55\u6709 <code>Context</code> \u7684\u5730\u65B9\u4F7F\u7528\u7FFB\u8BD1\u51FD\u6570\u3002 \u8FD9\u4E2A\u5E93\u5C06\u6839\u636E\u6BCF\u4E2A\u4E0E\u4F60\u7684 bot \u4E92\u52A8\u7684\u7528\u6237\u7684\u4E2A\u4EBA\u504F\u597D\uFF08\u5728 Telegram \u5BA2\u6237\u7AEF\u8BBE\u7F6E\u4E2D\u8BBE\u7F6E\u7684\u8BED\u8A00\uFF09\u6765\u81EA\u52A8\u786E\u5B9A\u6700\u4F73\u7684\u8BED\u8A00\u3002 \u4F60\u53EA\u9700\u8981\u521B\u5EFA\u51E0\u4E2A\u7FFB\u8BD1\u6587\u4EF6\u5E76\u786E\u4FDD\u6240\u6709\u7684\u7FFB\u8BD1\u90FD\u6B63\u786E\u540C\u6B65\u3002</p><h2 id="\u66F4\u8FDB\u4E00\u6B65" tabindex="-1"><a class="header-anchor" href="#\u66F4\u8FDB\u4E00\u6B65" aria-hidden="true">#</a> \u66F4\u8FDB\u4E00\u6B65</h2>`,14),X=n("\u9605\u8BFB "),Z={href:"https://projectfluent.org/",target:"_blank",rel:"noopener noreferrer"},nn=n("Fluent \u6587\u6863"),sn=n("\uFF0C\u5C24\u5176\u662F "),en={href:"https://projectfluent.org/fluent/guide/",target:"_blank",rel:"noopener noreferrer"},an=n("\u8BED\u6CD5\u6307\u5357"),tn=n("\u3002"),on={href:"https://github.com/grammyjs/fluent#i18n-plugin-replacement",target:"_blank",rel:"noopener noreferrer"},pn=n("\u4ECE "),ln=s("code",null,"i18n",-1),cn=n(" \u63D2\u4EF6\u8FC1\u79FB\u3002"),un=n("\u719F\u6089\u4E86\u89E3 "),rn={href:"https://github.com/the-moebius/fluent#readme",target:"_blank",rel:"noopener noreferrer"},dn=s("code",null,[n("@moebius"),s("wbr"),n("/fluent")],-1),mn=n("\u3002"),_n=s("h2",{id:"\u63D2\u4EF6\u6982\u8FF0",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u63D2\u4EF6\u6982\u8FF0","aria-hidden":"true"},"#"),n(" \u63D2\u4EF6\u6982\u8FF0")],-1),kn=s("li",null,[n("\u540D\u5B57\uFF1A"),s("code",null,"fluent")],-1),hn=n("\u6E90\u7801\uFF1A"),vn={href:"https://github.com/grammyjs/fluent",target:"_blank",rel:"noopener noreferrer"},bn=n("https://"),gn=s("wbr",null,null,-1),fn=n("github"),wn=s("wbr",null,null,-1),xn=n(".com"),yn=s("wbr",null,null,-1),Fn=n("/grammyjs"),qn=s("wbr",null,null,-1),Cn=n("/fluent");function Bn(Nn,En){const a=l("ExternalLinkIcon"),t=l("RouterLink");return i(),u("div",null,[d,s("p",null,[s("a",m,[_,e(a)]),k]),s("div",h,[v,s("p",null,[b,e(t,{to:"/zh/plugins/i18n.html"},{default:o(()=>[g]),_:1}),f]),s("p",null,[e(t,{to:"/zh/plugins/i18n.html"},{default:o(()=>[w]),_:1}),x])]),y,s("p",null,[F,s("a",q,[C,e(a)]),B,s("a",N,[E,e(a)]),j]),A,s("p",null,[R,I,L,T,Y,$,z,M,D,O,S,s("a",U,[V,e(a)]),W]),P,G,s("p",null,[H,e(t,{to:"/zh/guide/context.html#context-flavors"},{default:o(()=>[J]),_:1}),K]),Q,s("ul",null,[s("li",null,[X,s("a",Z,[nn,e(a)]),sn,s("a",en,[an,e(a)]),tn]),s("li",null,[s("a",on,[pn,ln,cn,e(a)])]),s("li",null,[un,s("a",rn,[dn,e(a)]),mn])]),_n,s("ul",null,[kn,s("li",null,[hn,s("a",vn,[bn,gn,fn,wn,xn,yn,Fn,qn,Cn,e(a)])])])])}const An=c(r,[["render",Bn],["__file","fluent.html.vue"]]);export{An as default};

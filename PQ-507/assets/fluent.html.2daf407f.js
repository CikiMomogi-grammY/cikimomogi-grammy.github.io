import{_ as p,r as l,o as c,c as r,a as e,b as s,w as o,d as n,e as i}from"./app.59a23fc3.js";const u={},d=e("h1",{id:"internationalization-with-fluent-fluent",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#internationalization-with-fluent-fluent","aria-hidden":"true"},"#"),n(" Internationalization with Fluent ("),e("code",null,"fluent"),n(")")],-1),h={href:"https://projectfluent.org/",target:"_blank",rel:"noopener noreferrer"},m=n("Fluent"),v=n(" is a localization system made by the Mozilla Foundation for natural-sounding translations. It has a very powerful and elegant syntax that lets anyone write efficient and fully-understandable translations. This plugin takes advantage of this amazing localization system to make grammY-powered bots fluent with high-quality translations."),k={class:"custom-container tip"},_=e("p",{class:"custom-container-title"},"Not to Be Confused",-1),b=n("Don\u2019t confuse this with "),g=n("i18n"),f=n("."),y=n("i18n"),w=n(" is an improved version of this plugin that works on both Deno and Node.js."),x=i(`<h2 id="initialize-fluent" tabindex="-1"><a class="header-anchor" href="#initialize-fluent" aria-hidden="true">#</a> Initialize Fluent</h2><p>The first thing you do is to initialize a Fluent instance:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Fluent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@moebius/fluent&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fluent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fluent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, you will need to add at least one translation to the Fluent instance:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> fluent<span class="token punctuation">.</span><span class="token function">addTranslation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Specify one or more locales supported by your translation:</span>
  locales<span class="token operator">:</span> <span class="token string">&quot;en&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// You can specify the translation content directly:</span>
  source<span class="token operator">:</span> <span class="token string">&quot;{YOUR TRANSLATION FILE CONTENT}&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Or the translation files:</span>
  filePath<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/feature-1/translation.en.ftl</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/feature-2/translation.en.ftl</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// All the aspects of Fluent are highly configurable:</span>
  bundleOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Use this option to avoid invisible characters around placeables.</span>
    useIsolating<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="write-translation-messages" tabindex="-1"><a class="header-anchor" href="#write-translation-messages" aria-hidden="true">#</a> Write Translation Messages</h2>`,6),F=n("The Fluent syntax should be easy to master. You can start by looking at the "),C={href:"https://projectfluent.org/#examples",target:"_blank",rel:"noopener noreferrer"},T=n("official examples"),q=n(" or by studying the "),z={href:"https://projectfluent.org/fluent/guide/",target:"_blank",rel:"noopener noreferrer"},N=n("comprehensive syntax guide"),B=n("."),I=i(`<p>Let\u2019s start with this example for now:</p><div class="language-ftl ext-ftl line-numbers-mode"><pre class="language-ftl"><code>-bot-name = Apples Bot

welcome =
  Welcome, {$name}, to the {-bot-name}!
  You have { NUMBER($applesCount) -&gt;
    [0] no apples
    [one] {$applesCount} apple
    *[other] {$applesCount} apples
  }.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It demonstrates three important features of Fluent, namely: <strong>terms</strong>, <strong>variable substitution</strong> (aka <em>placeables</em>) and <strong>pluralization</strong>.</p><p>The <code>welcome</code> is the <strong>message ID</strong>, which will be used to reference its message whenever render it.</p><p>The statement <code>-bot<wbr>-name <wbr>=<wbr> Apples Bot</code> defines a <strong>term</strong> with name <code>bot<wbr>-name</code> and value <code>Apples Bot</code>. The construct <code>{<wbr>-bot<wbr>-name}</code> references the previously defined term and will be get replaced by the term\u2019s value when rendered.</p><p>The statement <code>{$name}</code> will be replaced with the value of the <code>name</code> variable that you will need to pass to the translation function yourself.</p>`,6),j=n("And the final statement ("),A=e("em",null,"lines 5 to 9",-1),Y=n(") defines a "),L=e("strong",null,"selector",-1),M=n(" (very similar to a switch statement) that takes result of the special "),E=e("code",null,"NUMBER",-1),R=n(" function applied to the "),S=e("code",null,[n("apples"),e("wbr"),n("Count")],-1),$=n(" variable and selects one of the three possible messages to be rendered based on the matched value. The "),O=e("code",null,"NUMBER",-1),D=n(" function will return a "),U={href:"https://www.unicode.org/cldr/cldr-aux/charts/30/supplemental/language_plural_rules.html",target:"_blank",rel:"noopener noreferrer"},V=n("CLDR plural category"),W=n(" based on the provided value and the used locale. This effectively implements the pluralization."),P=e("h2",{id:"grammy-configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#grammy-configuration","aria-hidden":"true"},"#"),n(" grammY Configuration")],-1),G=e("p",null,"Now let\u2019s see how this message above could be rendered by a bot. But first, we will need to configure grammY to use the plugin.",-1),H=n("Before all else, you will need to configure your bot to use the Fluent context flavor. If you are not familiar with this concept, you should read the official docs on "),J=n("Context Flavors"),K=n("."),Q=i(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Context <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FluentContextFlavor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@grammyjs/fluent&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Extend your application context type with the provided flavor interface.</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MyAppContext</span> <span class="token operator">=</span> Context <span class="token operator">&amp;</span> FluentContextFlavor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You will need to create your bot instance the following way in order to use the augmented context type:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot<span class="token operator">&lt;</span>MyAppContext<span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And the final step would be to register the Fluent plugin itself with grammY:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">useFluent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    fluent<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Make sure to pass the <a href="#initialize-fluent">previously created Fluent instance</a>.</p><h2 id="render-the-localized-messages" tabindex="-1"><a class="header-anchor" href="#render-the-localized-messages" aria-hidden="true">#</a> Render the Localized Messages</h2><p>Great, now we have everything in place to render our messages! Let\u2019s do that by defining a test command in our bot:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;i18n_test&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Call the &quot;translate&quot; or &quot;t&quot; helper to render the</span>
  <span class="token comment">// message by specifying its ID and additional parameters:</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>
    ctx<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;welcome&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> ctx<span class="token punctuation">.</span>from<span class="token punctuation">.</span>first_name<span class="token punctuation">,</span>
      applesCount<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now you can start your bot and use the <code>/i18n<wbr>_test</code> command. It should render the following message:</p><div class="language-text ext-text"><pre class="language-text"><code>Welcome, Slava, to the Apples Bot!
You have 1 apple.
</code></pre></div><p>Of course, you will see you own name instead of \u201CSlava\u201D. Try to change the value of the <code>apples<wbr>Count</code> variable to see how the rendered message would change!</p><p>Be advised that you can now use the translation function everywhere where the <code>Context</code> is available. The library would automatically determine the best possible locale to use for each user that will interact with your bot based on their personal preferences (the language set in the Telegram client settings). You will just need to create several translation files and make sure that all the translation are properly synchronized.</p><h2 id="further-steps" tabindex="-1"><a class="header-anchor" href="#further-steps" aria-hidden="true">#</a> Further Steps</h2>`,14),X=n("Complete reading the "),Z={href:"https://projectfluent.org/",target:"_blank",rel:"noopener noreferrer"},nn=n("Fluent documentation"),en=n(", especially the "),sn={href:"https://projectfluent.org/fluent/guide/",target:"_blank",rel:"noopener noreferrer"},tn=n("syntax guide"),an=n("."),on={href:"https://github.com/grammyjs/fluent#i18n-plugin-replacement",target:"_blank",rel:"noopener noreferrer"},ln=n("Migrate from the "),pn=e("code",null,"i18n",-1),cn=n(" plugin."),rn=n("Familiarize yourself with "),un={href:"https://github.com/the-moebius/fluent#readme",target:"_blank",rel:"noopener noreferrer"},dn=e("code",null,[n("@moebius"),e("wbr"),n("/fluent")],-1),hn=n("."),mn=e("h2",{id:"plugin-summary",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugin-summary","aria-hidden":"true"},"#"),n(" Plugin Summary")],-1),vn=e("li",null,[n("Name: "),e("code",null,"fluent")],-1),kn=n("Source: "),_n={href:"https://github.com/grammyjs/fluent",target:"_blank",rel:"noopener noreferrer"},bn=n("https://"),gn=e("wbr",null,null,-1),fn=n("github"),yn=e("wbr",null,null,-1),wn=n(".com"),xn=e("wbr",null,null,-1),Fn=n("/grammyjs"),Cn=e("wbr",null,null,-1),Tn=n("/fluent");function qn(zn,Nn){const t=l("ExternalLinkIcon"),a=l("RouterLink");return c(),r("div",null,[d,e("p",null,[e("a",h,[m,s(t)]),v]),e("div",k,[_,e("p",null,[b,s(a,{to:"/plugins/i18n.html"},{default:o(()=>[g]),_:1}),f]),e("p",null,[s(a,{to:"/plugins/i18n.html"},{default:o(()=>[y]),_:1}),w])]),x,e("p",null,[F,e("a",C,[T,s(t)]),q,e("a",z,[N,s(t)]),B]),I,e("p",null,[j,A,Y,L,M,E,R,S,$,O,D,e("a",U,[V,s(t)]),W]),P,G,e("p",null,[H,s(a,{to:"/guide/context.html#context-flavors"},{default:o(()=>[J]),_:1}),K]),Q,e("ul",null,[e("li",null,[X,e("a",Z,[nn,s(t)]),en,e("a",sn,[tn,s(t)]),an]),e("li",null,[e("a",on,[ln,pn,cn,s(t)])]),e("li",null,[rn,e("a",un,[dn,s(t)]),hn])]),mn,e("ul",null,[vn,e("li",null,[kn,e("a",_n,[bn,gn,fn,yn,wn,xn,Fn,Cn,Tn,s(t)])])])])}const In=p(u,[["render",qn],["__file","fluent.html.vue"]]);export{In as default};

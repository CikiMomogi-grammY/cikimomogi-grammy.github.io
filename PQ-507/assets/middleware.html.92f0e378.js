import{_ as l,r as t,o as u,c as d,b as e,a as s,w as o,d as n,e as c}from"./app.9a621f1c.js";const r={},m=s("h1",{id:"middleware-redux",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#middleware-redux","aria-hidden":"true"},"#"),n(" Middleware Redux")],-1),k=n("In the Guide, "),h=n("we introduced middleware"),b=n(" as a stack of functions. While it is not wrong that you can use middleware in this linear fashion (also in grammY), calling it just a stack is a simplification."),f=c(`<h2 id="middleware-in-grammy" tabindex="-1"><a class="header-anchor" href="#middleware-in-grammy" aria-hidden="true">#</a> Middleware in grammY</h2><p>Commonly, you see the following pattern.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=n("Looks pretty much like a stack, except, behind the scenes, it really is a tree. The heart of this functionality is the "),w=s("code",null,"Composer",-1),g=n(" class ("),_={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer",target:"_blank",rel:"noopener noreferrer"},y=n("reference"),x=n(") that builds up this tree."),C=s("p",null,[n("First of all, every instance of "),s("code",null,"Bot"),n(" is an instance of "),s("code",null,"Composer"),n(". It\u2019s just a subclass, so "),s("code",null,"class Bot extends Composer"),n(".")],-1),A=n("Also, you should know that every single method of "),q=s("code",null,"Composer",-1),I=n(" internally calls "),T=s("code",null,"use",-1),B=n(". For example, "),j=s("code",null,"filter",-1),E=n(" just calls "),D=s("code",null,"use",-1),L=n(" with some branching middleware, while "),R=s("code",null,"on",-1),Y=n(" just calls "),N=s("code",null,"filter",-1),z=n(" again with some predicate function that matches updates against the given "),F=n("filter query"),O=n(". We can therefore limit ourselves to looking at "),P=s("code",null,"use",-1),H=n(" for now, and the rest follows."),K=c(`<p>We now have to dive a bit into the details of what <code>Composer</code> does with your <code>use</code> calls, and how it differs from other middleware systems out there. The difference may seem subtle, but wait until the next subsection to find out why it has remarkable consequences.</p><h2 id="augmenting-composer" tabindex="-1"><a class="header-anchor" href="#augmenting-composer" aria-hidden="true">#</a> Augmenting <code>Composer</code></h2><p>You can install more middleware on an instance of <code>Composer</code> even after installing the <code>Composer</code> itself somewhere.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// subclass of \`Composer\`</span>

<span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>composer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// These will be run:</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* A */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* B */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* C */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>A</code>, <code>B</code>, and <code>C</code> will be run. All this says is that once you have installed an instance of <code>Composer</code>, you can still call <code>use</code> on it and this middleware will still be run. (This is nothing spectacular, but already a main difference to popular competing frameworks that simply ignore subsequent operations.)</p><p>You may be wondering where the tree structure is in there. Let\u2019s have a look at this snippet:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* A */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* B */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* C */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* D */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* E */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* F */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* G */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* H */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* I */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* J */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* K */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* L */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Can you see it?</p><p>As you can guess, all middleware will be run in order from <code>A</code> to <code>L</code>.</p><p>Other libraries would internally flatten this code to be equivalent to <code>composer<wbr>.use(<wbr>/* A *<wbr>/)<wbr>.use(<wbr>/* B *<wbr>/)<wbr>.use(<wbr>/* C *<wbr>/)<wbr>.use(<wbr>/* D *<wbr>/)<wbr>..<wbr>.</code> and so on. On the contrary, grammY preserves the tree you specified: one root node (<code>composer</code>) has five children (<code>A</code>, <code>B</code>, <code>D</code>, <code>H</code>, <code>J</code>), while the child <code>B</code> has one other child, <code>C</code>, etc. This tree will then be traversed by every update in depth-first order, hence effectively passing through <code>A</code> to <code>L</code> in linear order, much like what you know from other systems.</p><p>This is made possible by creating a new instance of <code>Composer</code> every time you call <code>use</code> that will in turn be extended (as explained above).</p><h2 id="concatenating-use-calls" tabindex="-1"><a class="header-anchor" href="#concatenating-use-calls" aria-hidden="true">#</a> Concatenating <code>use</code> Calls</h2><p>If we only used <code>use</code>, this would not be too useful (pun intended). It gets more interesting as soon as e.g. <code>filter</code> comes into play.</p><p>Check this out:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

composer<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token comment">/* 1 */</span><span class="token punctuation">,</span> <span class="token comment">/* A */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* B */</span><span class="token punctuation">)</span>

composer<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token comment">/* 2 */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* C */</span><span class="token punctuation">,</span> <span class="token comment">/* D */</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>On line 3, we register <code>A</code> behind a predicate function <code>1</code>. <code>A</code> will only be evaluated for updates which pass the condition <code>1</code>. However, <code>filter</code> returns a <code>Composer</code> instance that we augment with the <code>use</code> call on line 3, so <code>B</code> is still guarded by <code>1</code>, even though it is installed in a completely different <code>use</code> call.</p><p>Line 5 is equivalent to line 3 in the respect that both <code>C</code> and <code>D</code> will only be run if <code>2</code> holds.</p><p>Remember how <code>bot<wbr>.on()</code> calls could be chained in order to concatenate filter queries with AND? Imagine this:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

composer<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token comment">/* 1 */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token comment">/* 2 */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* A */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>2</code> will only be checked if <code>1</code> holds, and <code>A</code> will only be run if <code>2</code> (and thus <code>1</code>) holds.</p>`,20),V=n("Revisit the section about "),G=n("combining filter queries"),M=n(" with your new knowledge and feel your new power."),S=c("<p>A special case here is <code>fork</code>, as it starts two computations that are concurrent, i.e. interleaved on the event loop. Instead of returning the <code>Composer</code> instance created by the underlying <code>use</code> call, it returns a <code>Composer</code> that reflects the forked computation. This allows for concise patterns like <code>bot<wbr>.fork()<wbr>.on(&quot;:<wbr>text&quot;)<wbr>.use(<wbr>/* A *<wbr>/)</code>. <code>A</code> will now be executed on the parallel computation branch.</p>",1);function W(J,Q){const p=t("AutotagPage"),a=t("RouterLink"),i=t("ExternalLinkIcon");return u(),d("div",null,[m,e(p,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),s("p",null,[k,e(a,{to:"/guide/middleware.html"},{default:o(()=>[h]),_:1}),b]),f,s("p",null,[v,w,g,s("a",_,[y,e(i)]),x]),C,s("p",null,[A,q,I,T,B,j,E,D,L,R,Y,N,z,e(a,{to:"/guide/filter-queries.html"},{default:o(()=>[F]),_:1}),O,P,H]),K,s("p",null,[V,e(a,{to:"/guide/filter-queries.html#combining-multiple-queries"},{default:o(()=>[G]),_:1}),M]),S])}const X=l(r,[["render",W],["__file","middleware.html.vue"]]);export{X as default};

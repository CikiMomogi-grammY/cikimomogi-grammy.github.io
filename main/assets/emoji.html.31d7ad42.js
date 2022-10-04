import{_ as p,r as c,o as r,c as u,a as n,b as a,w as e,e as i,d as s}from"./app.2f873437.js";const d={},m=i('<h1 id="emoji-plugin-emoji" tabindex="-1"><a class="header-anchor" href="#emoji-plugin-emoji" aria-hidden="true">#</a> Emoji Plugin (<code>emoji</code>)</h1><p>With this plugin, you can easily insert emojis on your replies searching for them instead of manually copying and pasting an emoji from web at your code.</p><h2 id="why-should-i-use-this" tabindex="-1"><a class="header-anchor" href="#why-should-i-use-this" aria-hidden="true">#</a> Why Should I Use This?</h2><p>Why not? People use emojis in their code all the time to better illustrate the message they\u2019re willing to pass or to organize things. But you lose your focus every time you need a new emoji, see:</p><ol><li>You stop coding to search for a specific emoji.</li><li>You go to a Telegram chat and spent ~6 seconds (to not say more) searching for the emoji you want.</li><li>You copy-paste them into your code and get back coding, but with lost focus.</li></ol><p>With this plugin, you just don\u2019t stop coding as also you don\u2019t lose your focus. There is also bad-frickin\u2019-laggy systems and/or editors that doesn\u2019t like and don\u2019t show emojis, so you end up pasting a white square, like this sad-little-squary message: <code>I&#39;m so happy \u25A1</code>.</p><p>This plugin aim to solve these issues, handling for you the hard task of parsing emojis in all systems and letting you only search for them in a easy way (autocomplete is available). Now, the above steps can be reduced to this one:</p><ol><li>Describe the emoji you want and use it. Right in your code. Simple as that.</li></ol><h3 id="is-this-sorcery" tabindex="-1"><a class="header-anchor" href="#is-this-sorcery" aria-hidden="true">#</a> Is This Sorcery?</h3>',9),k=s("No, it is called template strings. You can read more about them "),h={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",target:"_blank",rel:"noopener noreferrer"},g=s("here"),b=s("."),_=n("h2",{id:"installing-and-examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#installing-and-examples","aria-hidden":"true"},"#"),s(" Installing and Examples")],-1),y=n("p",null,"You can install this plugin on your bot like this:",-1),v=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" EmojiFlavor"),n("span",{class:"token punctuation"},","),s(" emojiParser "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/emoji"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// This is called Context Flavoring"),s(`
`),n("span",{class:"token comment"},"// You can read more about at:"),s(`
`),n("span",{class:"token comment"},"// https://grammy.dev/guide/context.html#transformative-context-flavors"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" EmojiFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// <-- put your bot token between the ""'),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"emojiParser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" emojiParser "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/emoji"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// <-- put your bot token between the ""'),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"emojiParser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  EmojiFlavor`),n("span",{class:"token punctuation"},","),s(`
  emojiParser`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_emoji@v1.1.2/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// This is called Context Flavoring"),s(`
`),n("span",{class:"token comment"},"// You can read more about at:"),s(`
`),n("span",{class:"token comment"},"// https://grammy.dev/guide/context.html#transformative-context-flavors"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" EmojiFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// <-- put your bot token between the ""'),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"emojiParser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=i(`<p>Now you can get emojis by their names:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> parsedString <span class="token operator">=</span> ctx<span class="token punctuation">.</span>emoji<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Welcome! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token string">&quot;smiling_face_with_sunglasses&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> <span class="token comment">// =&gt; Welcome! \u{1F60E}</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>parsedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Alternatively, you can reply directly using the <code>reply<wbr>With<wbr>Emoji</code> method:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>replyWithEmoji<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Pong </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token string">&quot;ping_pong&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> <span class="token comment">// =&gt; Pong \u{1F3D3}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),x={class:"custom-container warning"},C=n("p",{class:"custom-container-title"},"Keep in Mind That",-1),S=n("code",null,[s("ctx"),n("wbr"),s(".emoji")],-1),q=s(" and "),E=n("code",null,[s("ctx"),n("wbr"),s(".reply"),n("wbr"),s("With"),n("wbr"),s("Emoji")],-1),T=s(),W=n("strong",null,"ALWAYS",-1),P=s(" use template strings. If you\u2019re unfamiliar with this syntax, you can read more about it "),B={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",target:"_blank",rel:"noopener noreferrer"},I=s("here"),N=s("."),Y=n("h2",{id:"plugin-summary",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-summary","aria-hidden":"true"},"#"),s(" Plugin Summary")],-1),F=n("li",null,[s("Name: "),n("code",null,"emoji")],-1),M=s("Source: "),G={href:"https://github.com/grammyjs/emoji",target:"_blank",rel:"noopener noreferrer"},R=s("https://"),V=n("wbr",null,null,-1),z=s("github"),A=n("wbr",null,null,-1),J=s(".com"),L=n("wbr",null,null,-1),U=s("/grammyjs"),D=n("wbr",null,null,-1),$=s("/emoji"),K=s("Reference: "),H={href:"https://doc.deno.land/https://deno.land/x/grammy_emoji/mod.ts",target:"_blank",rel:"noopener noreferrer"},O=i("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_emoji<wbr>/mod<wbr>.ts",23);function Q(X,Z){const t=c("ExternalLinkIcon"),o=c("CodeGroupItem"),l=c("CodeGroup");return r(),u("div",null,[m,n("p",null,[k,n("a",h,[g,a(t)]),b]),_,y,a(l,null,{default:e(()=>[a(o,{title:"TypeScript",active:""},{default:e(()=>[v]),_:1}),a(o,{title:"JavaScript"},{default:e(()=>[w]),_:1}),a(o,{title:"Deno"},{default:e(()=>[f]),_:1})]),_:1}),j,n("div",x,[C,n("p",null,[S,q,E,T,W,P,n("a",B,[I,a(t)]),N])]),Y,n("ul",null,[F,n("li",null,[M,n("a",G,[R,V,z,A,J,L,U,D,$,a(t)])]),n("li",null,[K,n("a",H,[O,a(t)])])])])}const sn=p(d,[["render",Q],["__file","emoji.html.vue"]]);export{sn as default};

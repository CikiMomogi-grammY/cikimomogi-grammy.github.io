import{_ as p,r as c,o as r,c as u,a as n,b as a,w as t,e as l,d as s}from"./app.2f873437.js";const d={},m=l('<h1 id="plugin-emoji-emoji" tabindex="-1"><a class="header-anchor" href="#plugin-emoji-emoji" aria-hidden="true">#</a> Plugin Emoji (<code>emoji</code>)</h1><p>Con este plugin, puedes insertar f\xE1cilmente emojis en tus respuestas busc\xE1ndolos en lugar de copiar y pegar manualmente un emoji de la web en tu c\xF3digo.</p><h2 id="\xBFpor-que-deberia-utilizarlo" tabindex="-1"><a class="header-anchor" href="#\xBFpor-que-deberia-utilizarlo" aria-hidden="true">#</a> \xBFPor qu\xE9 deber\xEDa utilizarlo?</h2><p>\xBFPor qu\xE9 no? La gente utiliza emojis en su c\xF3digo todo el tiempo para ilustrar mejor el mensaje que quieren pasar o para organizar las cosas. Pero se pierde el enfoque cada vez que se necesita un nuevo emoji, ver:</p><ol><li>Dejas de codificar para buscar un emoji espec\xEDfico.</li><li>Vas a un chat de Telegram y te pasas ~6 segundos (por no decir m\xE1s) buscando el emoji que quieres.</li><li>Los copias y pegas en tu c\xF3digo y vuelves a codificar, pero con el foco perdido.</li></ol><p>Con este plugin, simplemente no dejas de codificar ya que tampoco pierdes la concentraci\xF3n. Tambi\xE9n hay sistemas y/o editores que no les gusta y no muestran los emojis, por lo que terminas pegando un cuadrado blanco, como este triste-peque\xF1o-cuidado mensaje: <code>Estoy tan feliz \u25A1</code>.</p><p>Este plugin pretende resolver estos problemas, manejando por ti la dif\xEDcil tarea de analizar los emojis en todos los sistemas y permiti\xE9ndote s\xF3lo buscarlos de forma sencilla (est\xE1 disponible el autocompletado). Ahora, los pasos anteriores se pueden reducir a este:</p><ol><li>Describe el emoji que quieres y \xFAsalo. Justo en tu c\xF3digo. As\xED de simple.</li></ol><h3 id="\xBFesto-es-brujeria" tabindex="-1"><a class="header-anchor" href="#\xBFesto-es-brujeria" aria-hidden="true">#</a> \xBFEsto es brujer\xEDa?</h3>',9),k=s("No, se llama cadenas de plantillas. Puedes leer m\xE1s sobre ellas "),b={href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals",target:"_blank",rel:"noopener noreferrer"},_=s("aqu\xED"),g=s("."),h=n("h2",{id:"instalacion-y-ejemplos",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#instalacion-y-ejemplos","aria-hidden":"true"},"#"),s(" Instalaci\xF3n y ejemplos")],-1),v=n("p",null,"Puedes instalar este plugin en tu bot as\xED:",-1),j=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" EmojiFlavor"),n("span",{class:"token punctuation"},","),s(" emojiParser "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/emoji"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Esto se llama Context Flavoring"),s(`
`),n("span",{class:"token comment"},"// Puedes leer m\xE1s en:"),s(`
`),n("span",{class:"token comment"},"// https://grammy.dev/es/guide/context.html#transformative-context-flavors"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" EmojiFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// <-- pon tu token de bot entre los ""'),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"emojiParser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" emojiParser "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/emoji"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// <-- pon tu token de bot entre los ""'),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"emojiParser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
importar `),n("span",{class:"token punctuation"},"{"),s(`
  EmojiFlavor`),n("span",{class:"token punctuation"},","),s(`
  emojiParser`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_emoji@v1.1.2/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Esto se llama Context Flavoring"),s(`
`),n("span",{class:"token comment"},"// Puedes leer m\xE1s en:"),s(`
`),n("span",{class:"token comment"},"// https://grammy.dev/es/guide/context.html#transformative-context-flavors"),s(`
tipo MyContext `),n("span",{class:"token operator"},"="),s(" EmojiFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// <-- pon tu token de bot entre los ""'),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"emojiParser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=l(`<p>Ahora puedes obtener emojis por sus nombres:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> parsedString <span class="token operator">=</span> ctx
    <span class="token punctuation">.</span>emoji<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\xA1Bienvenido! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token string">&quot;smiling_face_with_sunglasses&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> <span class="token comment">// =&gt; \xA1Bienvenido! \u{1F60E}</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>parsedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Tambi\xE9n puedes responder directamente con el m\xE9todo <code>reply<wbr>With<wbr>Emoji</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>replyWithEmoji<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Pong </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token string">&quot;ping_pong&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> <span class="token comment">// =&gt; Pong \u{1F3D3}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),x={class:"custom-container warning"},q=n("p",{class:"custom-container-title"},"Ten en cuenta que",-1),C=n("code",null,[s("ctx"),n("wbr"),s(".emoji")],-1),E=s(" y "),P=n("code",null,[s("ctx"),n("wbr"),s(".reply"),n("wbr"),s("With"),n("wbr"),s("Emoji")],-1),z=s(),B=n("strong",null,"Siempre",-1),S=s(" utilizan cadenas de plantilla. Si no est\xE1s familiarizado con esta sintaxis, puedes leer m\xE1s sobre ella "),T={href:"https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals",target:"_blank",rel:"noopener noreferrer"},F=s("aqu\xED"),N=s("."),I=n("h2",{id:"resumen-del-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#resumen-del-plugin","aria-hidden":"true"},"#"),s(" Resumen del plugin")],-1),V=n("li",null,[s("Nombre: "),n("code",null,"emoji")],-1),W=s("Fuente: "),G={href:"https://github.com/grammyjs/emoji",target:"_blank",rel:"noopener noreferrer"},J=s("https://"),L=n("wbr",null,null,-1),M=s("github"),R=n("wbr",null,null,-1),A=s(".com"),D=n("wbr",null,null,-1),$=s("/grammyjs"),H=n("wbr",null,null,-1),K=s("/emoji"),O=s("Referencia: "),Q={href:"https://doc.deno.land/https://deno.land/x/grammy_emoji/mod.ts",target:"_blank",rel:"noopener noreferrer"},U=l("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_emoji<wbr>/mod<wbr>.ts",23);function X(Y,Z){const e=c("ExternalLinkIcon"),o=c("CodeGroupItem"),i=c("CodeGroup");return r(),u("div",null,[m,n("p",null,[k,n("a",b,[_,a(e)]),g]),h,v,a(i,null,{default:t(()=>[a(o,{title:"TypeScript",active:""},{default:t(()=>[j]),_:1}),a(o,{title:"JavaScript"},{default:t(()=>[y]),_:1}),a(o,{title:"Deno"},{default:t(()=>[f]),_:1})]),_:1}),w,n("div",x,[q,n("p",null,[C,E,P,z,B,S,n("a",T,[F,a(e)]),N])]),I,n("ul",null,[V,n("li",null,[W,n("a",G,[J,L,M,R,A,D,$,H,K,a(e)])]),n("li",null,[O,n("a",Q,[U,a(e)])])])])}const sn=p(d,[["render",X],["__file","emoji.html.vue"]]);export{sn as default};
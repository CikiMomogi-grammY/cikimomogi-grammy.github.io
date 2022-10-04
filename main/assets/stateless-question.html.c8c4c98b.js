import{_ as e,r as o,o as p,c,a as n,b as t,d as s,e as i}from"./app.cd079934.js";const u={},l=n("h1",{id:"pregunta-sin-estado-stateless-question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pregunta-sin-estado-stateless-question","aria-hidden":"true"},"#"),s(" Pregunta sin estado ("),n("code",null,[s("stateless"),n("wbr"),s("-question")]),s(")")],-1),r=n("blockquote",null,[n("p",null,"Crear preguntas sin estado a los usuarios de Telegram que trabajan en modo de privacidad")],-1),d=s("\xBFQuieres mantener la privacidad del usuario con el "),k={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},m=s("modo de privacidad de Telegram activado (por defecto)"),v=s(", enviar a los usuarios preguntas traducidas en su idioma y no guardar el estado que los usuarios est\xE1n haciendo actualmente?"),_=n("p",null,"Este plugin quiere resolver este problema.",-1),b=s("La idea b\xE1sica es enviar su pregunta con un "),h={href:"https://en.wikipedia.org/wiki/Zero-width_non-joiner",target:"_blank",rel:"noopener noreferrer"},g=s("texto especial"),f=s(" al final. Este texto es invisible para el usuario pero visible para tu bot. Cuando el usuario responde a un mensaje, se comprueba el mensaje. Si contiene este texto especial al final, entonces es una respuesta a la pregunta. De esta manera puedes tener muchas cadenas para las mismas preguntas como cuando tienes traducciones. S\xF3lo tienes que asegurarte de que el "),q=n("code",null,[s("unique"),n("wbr"),s("Identifier")],-1),w=s(" es \xFAnico dentro de tu bot."),y=i(`<h2 id="uso" tabindex="-1"><a class="header-anchor" href="#uso" aria-hidden="true">#</a> Uso</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StatelessQuestion <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@grammyjs/stateless-question&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> unicornQuestion <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StatelessQuestion</span><span class="token punctuation">(</span><span class="token string">&quot;unicornio&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
    <span class="token string">&quot;El usuario cree que los unicornios est\xE1n haciendo:&quot;</span><span class="token punctuation">,</span>
    ctx<span class="token punctuation">.</span>message<span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// No te olvides de utilizar el middleware.</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>unicornQuestion<span class="token punctuation">.</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;arcoiris&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> text<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>session<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">&quot;de&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text <span class="token operator">=</span> <span class="token string">&quot;Was machen Einh\xF6rner?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    text <span class="token operator">=</span> <span class="token string">&quot;\xBFQu\xE9 hacen los unicornios?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">replyWithMarkdown</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// O env\xEDe su pregunta manualmente (\xA1aseg\xFArese de utilizar parse_mode y force_reply!).</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;unicornio&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithMarkdown</span><span class="token punctuation">(</span>
    <span class="token string">&quot;\xBFQu\xE9 hacen los unicornios?&quot;</span> <span class="token operator">+</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">messageSuffixMarkdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;Markdown&quot;</span><span class="token punctuation">,</span> reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;unicornio&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithHTML</span><span class="token punctuation">(</span>
    <span class="token string">&quot;\xBFQu\xE9 hacen los unicornios?&quot;</span> <span class="token operator">+</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">messageSuffixHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span> reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x=s("Consulte el "),Q={href:"https://github.com/grammyjs/stateless-question",target:"_blank",rel:"noopener noreferrer"},E=s("plugin README"),j=s(" para obtener m\xE1s informaci\xF3n."),M=n("h2",{id:"resumen-del-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#resumen-del-plugin","aria-hidden":"true"},"#"),s(" Resumen del plugin")],-1),S=n("li",null,[s("Nombre: "),n("code",null,[s("stateless"),n("wbr"),s("-question")])],-1),L=s("Fuente: "),N={href:"https://github.com/grammyjs/stateless-question",target:"_blank",rel:"noopener noreferrer"},T=s("https://"),B=n("wbr",null,null,-1),C=s("github"),V=n("wbr",null,null,-1),W=s(".com"),H=n("wbr",null,null,-1),I=s("/grammyjs"),z=n("wbr",null,null,-1),D=s("/stateless"),R=n("wbr",null,null,-1),A=s("-question");function F(O,P){const a=o("ExternalLinkIcon");return p(),c("div",null,[l,r,n("p",null,[d,n("a",k,[m,t(a)]),v]),_,n("p",null,[b,n("a",h,[g,t(a)]),f,q,w]),y,n("p",null,[x,n("a",Q,[E,t(a)]),j]),M,n("ul",null,[S,n("li",null,[L,n("a",N,[T,B,C,V,W,H,I,z,D,R,A,t(a)])])])])}const Z=e(u,[["render",F],["__file","stateless-question.html.vue"]]);export{Z as default};

import{_ as c,r as i,o as l,c as d,a as s,b as n,w as o,d as e,e as r}from"./app.59a23fc3.js";const p={},u=s("h1",{id:"escalando-i-gran-base-de-codigo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#escalando-i-gran-base-de-codigo","aria-hidden":"true"},"#"),e(" Escalando I: Gran base de c\xF3digo")],-1),m=s("p",null,"Tan pronto como tu bot crezca en complejidad, te vas a enfrentar al reto de c\xF3mo estructurar la base de c\xF3digo de tu aplicaci\xF3n. Naturalmente, puedes dividirlo en archivos.",-1),_=s("h2",{id:"solucion-posible",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#solucion-posible","aria-hidden":"true"},"#"),e(" Soluci\xF3n posible")],-1),h=e("grammY es todav\xEDa bastante joven y no proporciona ninguna integraci\xF3n oficial con contenedores DI todav\xEDa. Suscr\xEDbete a "),k={href:"https://t.me/grammyjs_news",target:"_blank",rel:"noopener noreferrer"},g=e("@grammyjs"),b=s("wbr",null,null,-1),v=e("_news"),f=e(" para ser notificado tan pronto como demos soporte a esto."),w=s("p",null,"Eres libre de estructurar tu c\xF3digo como quieras, y no hay una soluci\xF3n \xFAnica para todos. Dicho esto, una estrategia directa y probada para estructurar tu c\xF3digo es la siguiente:",-1),y=s("li",null,"Agrupa las cosas que sem\xE1nticamente pertenecen juntas en el mismo archivo (o, dependiendo del tama\xF1o del c\xF3digo, directorio). Cada una de estas partes expone el middleware que manejar\xE1 los mensajes designados.",-1),q=s("li",null,"Crea una instancia del bot de forma centralizada que aglutine todo el middleware instal\xE1ndolo en el bot.",-1),x=e("(Opcional.) Pre-filtrar las actualizaciones de forma centralizada, y enviar las actualizaciones s\xF3lo de la forma correcta. Tambi\xE9n puedes consultar "),j=s("code",null,[e("bot"),s("wbr"),e(".route")],-1),z=e(" ("),C={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer#route",target:"_blank",rel:"noopener noreferrer"},E=e("Referencia de la API"),O=e(") o alternativamente el "),I=e("router plugin"),N=e(" para ello."),R=e("Un ejemplo ejecutable que implementa la estrategia anterior puede encontrarse en el "),T={href:"https://github.com/grammyjs/examples/tree/main/scaling",target:"_blank",rel:"noopener noreferrer"},B=e("Repositorio de ejemplos de bots"),D=e("."),L=r(`<h2 id="estructura-de-ejemplo" tabindex="-1"><a class="header-anchor" href="#estructura-de-ejemplo" aria-hidden="true">#</a> Estructura de ejemplo</h2><p>Para un bot muy simple que gestiona una lista de TODO, podr\xEDas imaginar esta estructura.</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>src/
\u251C\u2500\u2500 bot.ts
\u2514\u2500\u2500 todo/
    \u251C\u2500\u2500 item.ts
    \u2514\u2500\u2500 list.ts
</code></pre></div><p><code>item<wbr>.ts</code> s\xF3lo define algunas cosas sobre los elementos TODO, y estas partes de c\xF3digo se utilizan en <code>list<wbr>.ts</code>.</p><p>En <code>list<wbr>.ts</code>, entonces har\xEDas algo as\xED:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> lists <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Registra aqu\xED algunos handlers que manejen tu middleware de la forma habitual.</span>
lists<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),S=e("Opcionalmente, puedes usar un "),V=e("error boundary"),A=e(" para manejar todos los errores que ocurran dentro de tu m\xF3dulo."),P=r(`<p>Ahora, en <code>bot<wbr>.ts</code>, puedes instalar este m\xF3dulo as\xED:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> lists <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./todo/list&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>lists<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// .. quiz\xE1s m\xE1s m\xF3dulos como \`todo\` aqu\xED</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),G=e("Opcionalmente, puedes utilizar el "),U=e("router plugin"),Y=e(" o agrupar los diferentes m\xF3dulos, si eres capaz de determinar qu\xE9 middleware es responsable por adelantado."),F=s("p",null,"Sin embargo, recuerda que la forma exacta de c\xF3mo estructurar tu bot es muy dif\xEDcil de decir gen\xE9ricamente. Como siempre en el software, hazlo de la manera que tenga m\xE1s sentido \u{1F609}",-1);function H(J,K){const a=i("ExternalLinkIcon"),t=i("RouterLink");return l(),d("div",null,[u,m,_,s("blockquote",null,[s("p",null,[h,s("a",k,[g,b,v,n(a)]),f])]),w,s("ol",null,[y,q,s("li",null,[x,j,z,s("a",C,[E,n(a)]),O,n(t,{to:"/es/plugins/router.html"},{default:o(()=>[I]),_:1}),N])]),s("p",null,[R,s("a",T,[B,n(a)]),D]),L,s("p",null,[S,n(t,{to:"/es/guide/errors.html#error-boundaries"},{default:o(()=>[V]),_:1}),A]),P,s("p",null,[G,n(t,{to:"/es/plugins/router.html"},{default:o(()=>[U]),_:1}),Y]),F])}const Q=c(p,[["render",H],["__file","structuring.html.vue"]]);export{Q as default};

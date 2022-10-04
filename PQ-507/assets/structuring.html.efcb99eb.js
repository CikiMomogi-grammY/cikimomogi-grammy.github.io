import{_ as r,r as o,o as d,c as u,b as a,a as s,w as i,d as e,e as c}from"./app.9a621f1c.js";const p={},m=s("h1",{id:"escalando-i-gran-base-de-codigo",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#escalando-i-gran-base-de-codigo","aria-hidden":"true"},"#"),e(" Escalando I: Gran base de c\xF3digo")],-1),g=s("p",null,"Tan pronto como tu bot crezca en complejidad, te vas a enfrentar al reto de c\xF3mo estructurar la base de c\xF3digo de tu aplicaci\xF3n. Naturalmente, puedes dividirlo en archivos.",-1),h=s("h2",{id:"solucion-posible",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#solucion-posible","aria-hidden":"true"},"#"),e(" Soluci\xF3n posible")],-1),_=e("grammY es todav\xEDa bastante joven y no proporciona ninguna integraci\xF3n oficial con contenedores DI todav\xEDa. Suscr\xEDbete a "),b={href:"https://t.me/grammyjs_news",target:"_blank",rel:"noopener noreferrer"},k=e("@grammyjs"),v=s("wbr",null,null,-1),f=e("_news"),y=e(" para ser notificado tan pronto como demos soporte a esto."),x=s("p",null,"Eres libre de estructurar tu c\xF3digo como quieras, y no hay una soluci\xF3n \xFAnica para todos. Dicho esto, una estrategia directa y probada para estructurar tu c\xF3digo es la siguiente:",-1),w=s("li",null,"Agrupa las cosas que sem\xE1nticamente pertenecen juntas en el mismo archivo (o, dependiendo del tama\xF1o del c\xF3digo, directorio). Cada una de estas partes expone el middleware que manejar\xE1 los mensajes designados.",-1),j=s("li",null,"Crea una instancia del bot de forma centralizada que aglutine todo el middleware instal\xE1ndolo en el bot.",-1),q=e("(Opcional.) Pre-filtrar las actualizaciones de forma centralizada, y enviar las actualizaciones s\xF3lo de la forma correcta. Tambi\xE9n puedes consultar "),z=s("code",null,[e("bot"),s("wbr"),e(".route")],-1),E=e(" ("),I={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer#route",target:"_blank",rel:"noopener noreferrer"},T=e("Referencia de la API"),A=e(") o alternativamente el "),C=e("router plugin"),D=e(" para ello."),O=e("Un ejemplo ejecutable que implementa la estrategia anterior puede encontrarse en el "),R={href:"https://github.com/grammyjs/examples/tree/main/scaling",target:"_blank",rel:"noopener noreferrer"},N=e("Repositorio de ejemplos de bots"),P=e("."),L=c(`<h2 id="estructura-de-ejemplo" tabindex="-1"><a class="header-anchor" href="#estructura-de-ejemplo" aria-hidden="true">#</a> Estructura de ejemplo</h2><p>Para un bot muy simple que gestiona una lista de TODO, podr\xEDas imaginar esta estructura.</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>src/
\u251C\u2500\u2500 bot.ts
\u2514\u2500\u2500 todo/
    \u251C\u2500\u2500 item.ts
    \u2514\u2500\u2500 list.ts
</code></pre></div><p><code>item<wbr>.ts</code> s\xF3lo define algunas cosas sobre los elementos TODO, y estas partes de c\xF3digo se utilizan en <code>list<wbr>.ts</code>.</p><p>En <code>list<wbr>.ts</code>, entonces har\xEDas algo as\xED:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> lists <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Registra aqu\xED algunos handlers que manejen tu middleware de la forma habitual.</span>
lists<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">/* ... */</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),S=e("Opcionalmente, puedes usar un "),Y=e("error boundary"),B=e(" para manejar todos los errores que ocurran dentro de tu m\xF3dulo."),K=c(`<p>Ahora, en <code>bot<wbr>.ts</code>, puedes instalar este m\xF3dulo as\xED:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> lists <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./todo/list&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>lists<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// .. quiz\xE1s m\xE1s m\xF3dulos como \`todo\` aqu\xED</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),V=e("Opcionalmente, puedes utilizar el "),F=e("router plugin"),G=e(" o agrupar los diferentes m\xF3dulos, si eres capaz de determinar qu\xE9 middleware es responsable por adelantado."),H=s("p",null,"Sin embargo, recuerda que la forma exacta de c\xF3mo estructurar tu bot es muy dif\xEDcil de decir gen\xE9ricamente. Como siempre en el software, hazlo de la manera que tenga m\xE1s sentido \u{1F609}",-1);function M(U,J){const l=o("AutotagPage"),n=o("ExternalLinkIcon"),t=o("RouterLink");return d(),u("div",null,[m,a(l,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),g,h,s("blockquote",null,[s("p",null,[_,s("a",b,[k,v,f,a(n)]),y])]),x,s("ol",null,[w,j,s("li",null,[q,z,E,s("a",I,[T,a(n)]),A,a(t,{to:"/es/plugins/router.html"},{default:i(()=>[C]),_:1}),D])]),s("p",null,[O,s("a",R,[N,a(n)]),P]),L,s("p",null,[S,a(t,{to:"/es/guide/errors.html#error-boundaries"},{default:i(()=>[Y]),_:1}),B]),K,s("p",null,[V,a(t,{to:"/es/plugins/router.html"},{default:i(()=>[F]),_:1}),G]),H])}const W=r(p,[["render",M],["__file","structuring.html.vue"]]);export{W as default};

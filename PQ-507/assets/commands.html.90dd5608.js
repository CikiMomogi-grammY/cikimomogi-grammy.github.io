import{_ as r,r as t,o as d,c as p,b as s,a as e,w as l,d as n,e as a}from"./app.9837a88d.js";const u={},m=e("h1",{id:"comandos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#comandos","aria-hidden":"true"},"#"),n(" Comandos")],-1),b=e("p",null,"Los comandos son entidades especiales en los mensajes de Telegram, que sirven como instrucciones para los bots.",-1),g=e("h1",{id:"uso",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#uso","aria-hidden":"true"},"#"),n(" Uso")],-1),k=n("Revisa la secci\xF3n de comandos en la "),h={href:"https://core.telegram.org/bots#commands",target:"_blank",rel:"noopener noreferrer"},_=n("Introducci\xF3n para Desarrolladores"),v=n(" escrita por el equipo de Telegram."),q=a(`<p>grammY proporciona un manejo especial para los comandos (por ejemplo, <code>/start</code> y <code>/help</code>). Puedes registrar directamente oyentes para ciertos comandos a trav\xE9s de <code>bot<wbr>.command()</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Responde al comando /start.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Responde al comando /help.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;help&quot;</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Responde a los comandos /a, /b, /c, y /d.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">]</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ten en cuenta que s\xF3lo se manejan los comandos que est\xE1n al principio de un mensaje, as\xED que si un usuario env\xEDa <code>&quot;\xA1Por favor<wbr>, no env\xEDes <wbr>/start a ese bot!&quot;</code>, entonces su escuchador no ser\xE1 llamado, aunque el comando<code>/start</code> <em>est\xE1</em> contenido en el mensaje.</p><p>Telegram soporta el env\xEDo de comandos dirigidos a los bots, es decir, comandos que terminan con <code>@tu<wbr>_nombre<wbr>_del<wbr>_bot</code>. grammY maneja esto autom\xE1ticamente por ti, as\xED que <code>bot<wbr>.command(&quot;start&quot;)</code> coincidir\xE1 con mensajes con <code>/start</code> y con <code>/start@your<wbr>_bot<wbr>_name</code> como comandos. Puedes elegir coincidir s\xF3lo con comandos espec\xEDficos especificando <code>bot<wbr>.command(&quot;start@your<wbr>_bot<wbr>_name&quot;)</code>.</p>`,4),w={class:"custom-container tip"},f=a(`<p class="custom-container-title">Sugerir comandos a los usuarios</p><p>Puedes llamar a:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">setMyCommands</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Iniciar el bot&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;help&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Mostrar texto de ayuda&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;settings&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Abrir la configuraci\xF3n&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>para hacer que los clientes de Telegram muestren una lista de comandos sugeridos en el campo de entrada de texto.</p>`,4),x=n("Alternativamente, puedes configurar esto hablando con "),y={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},j=n("@Bot"),T=e("wbr",null,null,-1),E=n("Father"),I=n("."),R=a(`<h2 id="argumentos" tabindex="-1"><a class="header-anchor" href="#argumentos" aria-hidden="true">#</a> Argumentos</h2><p>Los usuarios pueden enviar <strong>argumentos</strong> junto con sus comandos. Puedes acceder a la cadena de argumentos a trav\xE9s de <code>ctx<wbr>.match</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \`item\` ser\xE1 &quot;apple pie&quot; si un usuario env\xEDa &quot;/add apple pie&quot;.</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> ctx<span class="token punctuation">.</span>match<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ten en cuenta que siempre puedes acceder al texto completo del mensaje a trav\xE9s de <code>ctx<wbr>.msg<wbr>.text</code>.</p><h2 id="soporte-de-deep-linking" tabindex="-1"><a class="header-anchor" href="#soporte-de-deep-linking" aria-hidden="true">#</a> Soporte de Deep Linking</h2>`,5),A=n("Revisa la secci\xF3n de enlaces profundos en la "),D={href:"https://core.telegram.org/bots#deep-linking",target:"_blank",rel:"noopener noreferrer"},P=n("Introducci\xF3n para Desarrolladores"),L=n(" escrita por el equipo de Telegram."),z=a("<p>Cuando un usuario visita <code>https://<wbr>t<wbr>.me<wbr>/your<wbr>_bot<wbr>_name<wbr>?start<wbr>=<wbr>payload</code>, su cliente de Telegram mostrar\xE1 un bot\xF3n START que (al hacer clic) env\xEDa la cadena del par\xE1metro de la URL junto con el mensaje, en este ejemplo, el texto del mensaje ser\xE1 <code>&quot;<wbr>/start payload&quot;</code>. Los clientes de Telegram no mostrar\xE1n el payload al usuario (s\xF3lo ver\xE1n <code>&quot;<wbr>/start&quot;</code> en la UI), sin embargo, tu bot lo recibir\xE1. grammY extrae este payload por ti, y lo proporciona bajo <code>ctx<wbr>.match</code>. En nuestro ejemplo, <code>ctx<wbr>.match</code> contendr\xEDa la cadena <code>&quot;payload&quot;</code>.</p>",1),N=n("La vinculaci\xF3n profunda es \xFAtil si quieres construir un sistema de referencias, o rastrear d\xF3nde los usuarios descubrieron tu bot. Por ejemplo, tu bot podr\xEDa enviar un mensaje de canal con un bot\xF3n "),Y=n("inline keyboard"),C=a(". El bot\xF3n contiene una URL como la de arriba, por ejemplo <code>https://<wbr>t<wbr>.me<wbr>/your<wbr>_bot<wbr>_name<wbr>?start<wbr>=<wbr>awesome<wbr>-channel<wbr>-post<wbr>-12345</code>. Cuando un usuario haga clic en el bot\xF3n debajo de la publicaci\xF3n, su cliente de Telegram abrir\xE1 un chat con tu bot, y mostrar\xE1 el bot\xF3n START como se ha descrito anteriormente. De esta manera, tu bot puede identificar de d\xF3nde viene un usuario, y que hizo clic en el bot\xF3n debajo de una publicaci\xF3n espec\xEDfica del canal.",3),S=e("p",null,"Naturalmente, tambi\xE9n puedes incrustar estos enlaces en cualquier otro lugar: en la web, en los mensajes, en los c\xF3digos QR, etc.",-1);function F(K,O){const c=t("AutotagPage"),o=t("ExternalLinkIcon"),i=t("RouterLink");return d(),p("div",null,[m,s(c,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),b,g,s(c,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),e("blockquote",null,[e("p",null,[k,e("a",h,[_,s(o)]),v])]),q,e("div",w,[f,e("p",null,[x,e("a",y,[j,T,E,s(o)]),I])]),R,e("blockquote",null,[e("p",null,[A,e("a",D,[P,s(o)]),L])]),z,e("p",null,[N,s(i,{to:"/es/plugins/keyboard.html#inline-keyboards"},{default:l(()=>[Y]),_:1}),C]),S])}const H=r(u,[["render",F],["__file","commands.html.vue"]]);export{H as default};

import{_ as u,r as p,o as r,c as d,a as n,b as a,w as e,d as s,e as t}from"./app.cd079934.js";const m={},k=n("h1",{id:"middleware",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#middleware","aria-hidden":"true"},"#"),s(" Middleware")],-1),b=n("p",null,[s("Las funciones de escucha que se pasan a "),n("code",null,[s("bot"),n("wbr"),s(".on()")]),s(", "),n("code",null,[s("bot"),n("wbr"),s(".command()")]),s(", y sus hermanos, se llaman "),n("em",null,"middleware"),s(". Aunque no es incorrecto decir que est\xE1n escuchando las actualizaciones, llamarlos \u201Coyentes\u201D es una simplificaci\xF3n.")],-1),v=s("Esta secci\xF3n explica qu\xE9 es el middleware, y utiliza grammY como ejemplo para ilustrar c\xF3mo se puede utilizar. Si buscas documentaci\xF3n espec\xEDfica sobre lo que hace especial a la implementaci\xF3n de middleware de grammY, revisa "),g=s("Middleware Redux"),w=s(" en la secci\xF3n avanzada de la documentaci\xF3n."),_=t(`<h2 id="the-middleware-stack" tabindex="-1"><a class="header-anchor" href="#the-middleware-stack" aria-hidden="true">#</a> The Middleware Stack</h2><p>Supongamos que escribes un bot como este:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;\xA1Comenz\xF3!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;help&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Texto de ayuda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:text&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;\xA1Texto!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (*)</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:photo&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;\xA1Foto!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cuando llegue una actualizaci\xF3n con un mensaje de texto normal, se realizar\xE1n estos pasos:</p><ol><li>Se env\xEDa <code>&quot;\xA1Hola!&quot;</code> al bot.</li><li>El middleware de sesi\xF3n recibe la actualizaci\xF3n, y hace sus cosas de sesi\xF3n</li><li>La actualizaci\xF3n ser\xE1 comprobada por un comando <code>/start</code>, que no est\xE1 contenido</li><li>Se comprobar\xE1 si la actualizaci\xF3n contiene un comando <code>/help</code>, que no est\xE1 contenido</li><li>Se comprobar\xE1 que la actualizaci\xF3n contiene un texto en el mensaje (o en el mensaje del canal), que tiene \xE9xito.</li><li>Se invocar\xE1 al middleware en <code>(*)</code>, que maneja la actualizaci\xF3n respondiendo con <code>&quot;\xA1Texto!&quot;</code></li></ol><p>La actualizaci\xF3n <strong>no</strong> se comprueba para el contenido de una foto, porque el middleware en <code>(*)</code> ya maneja la actualizaci\xF3n.</p><p>Ahora, \xBFc\xF3mo funciona esto? Averig\xFC\xE9moslo.</p>`,7),h=s("Podemos inspeccionar el tipo "),f=n("code",null,"Middleware",-1),x=s(" en la referencia de grammY "),q={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Middleware",target:"_blank",rel:"noopener noreferrer"},y=s("aqu\xED"),z=s(":"),j=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Se han omitido algunos par\xE1metros de tipo por razones de brevedad.</span>
<span class="token keyword">type</span> <span class="token class-name">Middleware</span> <span class="token operator">=</span> MiddlewareFn <span class="token operator">|</span> MiddlewareObj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,1),E=s("\xA1Aj\xE1! El middleware puede ser una funci\xF3n o un objeto. S\xF3lo hemos utilizado funciones ("),S=n("code",null,[s("(ctx) "),n("wbr"),s("="),n("wbr"),s("> { "),n("wbr"),s(".."),n("wbr"),s(". }")],-1),T=s(") hasta ahora, as\xED que ignoremos los objetos middleware por ahora, y profundicemos en el tipo "),P=n("code",null,[s("Middleware"),n("wbr"),s("Fn")],-1),M=s(" ("),C={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/MiddlewareFn",target:"_blank",rel:"noopener noreferrer"},L=s("reference"),D=s("):"),F=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Vuelve a omitir los par\xE1metros del tipo.</span>
<span class="token keyword">type</span> <span class="token class-name">MiddlewareFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> Context<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> MaybePromise<span class="token operator">&lt;</span><span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token comment">// con</span>
<span class="token keyword">type</span> <span class="token class-name">NextFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Por lo tanto, \xA1el middleware toma dos par\xE1metros! Hasta ahora s\xF3lo hemos utilizado uno, el objeto de contexto <code>ctx</code>. Ya sabemos (./context.md) lo que es <code>ctx</code>, pero tambi\xE9n vemos una funci\xF3n con el nombre <code>next</code>. Para entender qu\xE9 es <code>next</code>, tenemos que ver todo el middleware que se instala en el objeto bot como un todo.</p><p>Puedes ver todas las funciones de middleware instaladas como un n\xFAmero de capas que se apilan unas sobre otras. El primer middleware (<code>session</code> en nuestro ejemplo) es la capa superior, por lo tanto recibe cada actualizaci\xF3n primero. Entonces puede decidir si quiere manejar la actualizaci\xF3n, o pasarla a la siguiente capa (el manejador de comandos <code>/start</code>). La funci\xF3n <code>next</code> se puede utilizar para invocar el middleware posterior, a menudo llamado <em>downstream middleware</em>. Esto tambi\xE9n significa que si no llamas a <code>next</code> en tu middleware, las capas subyacentes de middleware no ser\xE1n invocadas.</p><p>Este stack de funciones es la <em>middleware stack</em>.</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>(ctx, next) =&gt; ...    |
(ctx, next) =&gt; ...    |\u2014\u2014\u2014\u2014\u2014upstream middleware de X
(ctx, next) =&gt; ...    |
(ctx, next) =&gt; ...       &lt;\u2014 middleware X. Llamar a \`next\` para pasar las actualizaciones
(ctx, next) =&gt; ...    |
(ctx, next) =&gt; ...    |\u2014\u2014\u2014\u2014\u2014downstream middleware de X
(ctx, next) =&gt; ...    |
</code></pre></div><p>Volviendo a nuestro ejemplo anterior, ahora sabemos por qu\xE9 <code>bot<wbr>.on(&quot;:<wbr>photo&quot;)</code> ni siquiera se comprob\xF3: el middleware en <code>bot<wbr>.on(&quot;:<wbr>text&quot;<wbr>, (ctx) <wbr>=<wbr>&gt; { <wbr>..<wbr>. })</code> ya se encarg\xF3 de la actualizaci\xF3n, y no llam\xF3 a <code>next</code>. De hecho, ni siquiera especific\xF3 \u201Cnext\u201D como par\xE1metro. Simplemente ha ignorado <code>next</code>, por lo que no ha pasado la actualizaci\xF3n.</p><p>\xA1Probemos otra cosa con nuestros nuevos conocimientos!</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;:text&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;\xA1Texto!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;\xA1Comando!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Si ejecutas el bot anterior, y env\xEDas <code>/start</code>, nunca llegar\xE1s a ver una respuesta que diga <code>\xA1Comando!</code>. Vamos a inspeccionar lo que sucede:</p><ol><li>Env\xEDas <code>&quot;<wbr>/start&quot;</code> al bot.</li><li>El middleware <code>&quot;:<wbr>text&quot;</code> recibe la actualizaci\xF3n y comprueba si hay texto, lo cual tiene \xE9xito porque los comandos son mensajes de texto. La actualizaci\xF3n es manejada inmediatamente por el primer middleware y su bot responde con \u201C\xA1Texto!\u201D.</li></ol><p>\xA1El mensaje ni siquiera se comprueba si contiene el comando <code>/start</code>! El orden en el que registras tu middleware importa, porque determina el orden de las capas en la pila de middleware. Puedes solucionar el problema invirtiendo el orden de las l\xEDneas 3 y 4. Si llamas a <code>next</code> en la l\xEDnea 3, se enviar\xE1n dos respuestas.</p><p>**La funci\xF3n <code>bot<wbr>.use()</code> simplemente registra el middleware que recibe todas las actualizaciones. Esta es la raz\xF3n por la que <code>session()</code> se instala a trav\xE9s de <code>bot<wbr>.use()</code> -queremos que el plugin opere sobre todas las actualizaciones, sin importar los datos que contenga.</p><p>Tener un middleware stack es una propiedad extremadamente poderosa de cualquier framework web, y este patr\xF3n es ampliamente popular (no s\xF3lo para los bots de Telegram).</p><p>Escribamos nuestra propia pieza de middleware para ilustrar mejor c\xF3mo funciona.</p><h2 id="escribiendo-un-middleware-personalizado" tabindex="-1"><a class="header-anchor" href="#escribiendo-un-middleware-personalizado" aria-hidden="true">#</a> Escribiendo un middleware personalizado</h2><p>Ilustraremos el concepto de middleware escribiendo una simple funci\xF3n de middleware que pueda medir el tiempo de respuesta de tu bot, es decir, cu\xE1nto tarda tu bot en gestionar un mensaje.</p><p>Aqu\xED est\xE1 la firma de la funci\xF3n para nuestro middleware. Puedes compararla con el tipo de middleware de arriba, y convencerte de que realmente tenemos un middleware aqu\xED.</p>`,17),N=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Mide el tiempo de respuesta del bot, y lo registra en el `console` */"),s(`
`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"responseTime"),n("span",{class:"token punctuation"},"("),s(`
  ctx`),n("span",{class:"token operator"},":"),s(" Context"),n("span",{class:"token punctuation"},","),s(`
  next`),n("span",{class:"token operator"},":"),s(" NextFunction"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// es un alias de: () => Promise<void>"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"void"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// TODO: implementar"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Mide el tiempo de respuesta del bot, y lo registra en el `console` */"),s(`
`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"responseTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// TODO: implementar"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Y=t(`<p>Podemos instalarlo en nuestra instancia <code>bot</code> con <code>bot<wbr>.use()</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>responseTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Empecemos a aplicarlo. Esto es lo que queremos hacer:</p><ol><li>Una vez que llega una actualizaci\xF3n, almacenamos <code>Date<wbr>.now()</code> en una variable.</li><li>Invocamos el middleware downstream, por lo que dejamos que todo el manejo de los mensajes ocurra. Esto incluye la coincidencia de comandos, la respuesta, y todo lo que su bot hace.</li><li>Tomamos <code>Date<wbr>.now()</code> de nuevo, lo comparamos con el valor anterior, y <code>console<wbr>.log</code> la diferencia de tiempo.</li></ol><p>Es importante instalar nuestro middleware <code>response<wbr>Time</code> <em>primero</em> en el bot (en la parte superior de la pila de middleware) para asegurarse de que todas las operaciones se incluyen en la medici\xF3n.</p>`,5),A=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Mide el tiempo de respuesta del bot, y lo registra en el `console` */"),s(`
`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"responseTime"),n("span",{class:"token punctuation"},"("),s(`
  ctx`),n("span",{class:"token operator"},":"),s(" Context"),n("span",{class:"token punctuation"},","),s(`
  next`),n("span",{class:"token operator"},":"),s(" NextFunction"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// es un alias de: () => Promise<void>"),s(`
`),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"Promise"),n("span",{class:"token operator"},"<"),n("span",{class:"token keyword"},"void"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// tomar el tiempo antes"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" before "),n("span",{class:"token operator"},"="),s(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// milisegundos"),s(`
  `),n("span",{class:"token comment"},"// invocar downstream middleware"),s(`
  `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \xA1aseg\xFArate de `await`!"),s(`
  `),n("span",{class:"token comment"},"// tomar el tiempo despues"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" after "),n("span",{class:"token operator"},"="),s(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// milisegundos"),s(`
  `),n("span",{class:"token comment"},"// registrar la diferencia"),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Response time: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("after "),n("span",{class:"token operator"},"-"),s(" before"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," ms"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("responseTime"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},"/** Mide el tiempo de respuesta del bot, y lo registra en el `console` */"),s(`
`),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"responseTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("ctx"),n("span",{class:"token punctuation"},","),s(" next")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// tomar el tiempo antes"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" before "),n("span",{class:"token operator"},"="),s(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// milliseconds"),s(`
  `),n("span",{class:"token comment"},"// invocar downstream middleware"),s(`
  `),n("span",{class:"token keyword"},"await"),s(),n("span",{class:"token function"},"next"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// \xA1aseg\xFArate de `await`!"),s(`
  `),n("span",{class:"token comment"},"// tomar el tiempo despues"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" after "),n("span",{class:"token operator"},"="),s(" Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// milliseconds"),s(`
  `),n("span",{class:"token comment"},"// registrar la diferencia"),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Response time: "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),s("after "),n("span",{class:"token operator"},"-"),s(" before"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," ms"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("responseTime"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("p",null,"Completo, \xA1y funciona! \u2714\uFE0F",-1),V=n("p",null,"Si\xE9ntase libre de utilizar este middleware en su objeto bot, registrar m\xE1s oyentes, y jugar con el ejemplo. Hacerlo te ayudar\xE1 a entender completamente lo que es el middleware.",-1),B={class:"custom-container danger"},G=n("p",{class:"custom-container-title"},"PELIGRO: \xA1Aseg\xFArate siempre de esperar a next!",-1),H=n("p",null,[s("Si alguna vez llamas a "),n("code",null,"next()"),s(" sin la palabra clave "),n("code",null,"await"),s(", varias cosas se romper\xE1n:")],-1),X=n("li",null,"\u274C Tu pila de middleware se ejecutar\xE1 en el orden equivocado.",-1),J=n("li",null,"\u274C Puede experimentar una p\xE9rdida de datos.",-1),U=n("li",null,"\u274C Es posible que algunos mensajes no se env\xEDen.",-1),$=n("li",null,"\u274C Tu bot puede fallar aleatoriamente de forma dif\xEDcil de reproducir.",-1),W=n("li",null,[s("\u274C Si ocurre un error, su manejador de errores no ser\xE1 llamado por \xE9l. En su lugar, ver\xE1s que se producir\xE1 un "),n("code",null,[s("Unhandled"),n("wbr"),s("Promise"),n("wbr"),s("Rejection"),n("wbr"),s("Warning")]),s(", que puede hacer que tu proceso bot se caiga.")],-1),K=s("\u274C Se rompe el mecanismo de backpressure de "),Q=s("grammY runner"),Z=s(", que protege a tu servidor de una carga excesiva, como por ejemplo durante los picos de carga."),nn=n("li",null,"\u{1F480} A veces, tambi\xE9n mata a todos tus inocentes gatitos. \u{1F63F}",-1),sn=t("<p>La regla de usar <code>await</code> es especialmente importante para <code>next()</code>, pero en realidad se aplica a cualquier expresi\xF3n en general que devuelva una <code>Promise</code>. Esto incluye <code>bot<wbr>.api<wbr>.send<wbr>Message</code>, <code>ctx<wbr>.reply</code>, y todas las dem\xE1s llamadas de red. Si tu proyecto es importante para ti, entonces utiliza herramientas de linting que te avisen si alguna vez te olvidas de usar <code>await</code> en una <code>Promise</code>.</p>",1),an={class:"custom-container tip"},en=n("p",{class:"custom-container-title"},"Habilitar las promesas no flotantes",-1),tn=s("Considere utilizar "),on={href:"https://eslint.org/",target:"_blank",rel:"noopener noreferrer"},cn=s("ESLint"),pn=s(" y config\xFArelo para que utilice la regla "),ln={href:"https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md",target:"_blank",rel:"noopener noreferrer"},un=s("no"),rn=n("wbr",null,null,-1),dn=s("-floating"),mn=n("wbr",null,null,-1),kn=s("-promises"),bn=s(". Esto se asegurar\xE1 de que nunca se olvide de usar "),vn=n("code",null,"await",-1),gn=s(" (gritando)."),wn=t('<h2 id="propiedades-del-middleware-en-grammy" tabindex="-1"><a class="header-anchor" href="#propiedades-del-middleware-en-grammy" aria-hidden="true">#</a> Propiedades del Middleware en grammY</h2><p>En grammY, el middleware puede devolver una <code>Promesa</code> (que ser\xE1 <code>await</code>), pero tambi\xE9n puede ser s\xEDncrono.</p><p>En contraste con otros sistemas de middleware (como el de <code>express</code>), no puedes pasar valores de error a <code>next</code>. <code>next</code> no toma ning\xFAn argumento. Si quieres que se produzca un error, puedes simplemente <code>tirar</code> el error. Otra diferencia es que no importa cu\xE1ntos argumentos tome tu middleware: <code>() <wbr>=<wbr>&gt; {}</code> ser\xE1 manejado exactamente como <code>(ctx) <wbr>=<wbr>&gt; {}</code>, o como <code>(ctx<wbr>, next) <wbr>=<wbr>&gt; {}</code>.</p>',3),_n=s("Hay dos tipos de middleware: funciones y objetos. Los objetos middleware son simplemente una envoltura para las funciones middleware. Se utilizan sobre todo internamente, pero a veces tambi\xE9n pueden ayudar a las bibliotecas de terceros, o ser utilizados en casos de uso avanzado, como con "),hn={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Composer",target:"_blank",rel:"noopener noreferrer"},fn=s("Composer"),xn=s(":"),qn=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;token&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>composer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \xA1composer es un objeto middleware!</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/*...*/</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),yn=s("Si quieres profundizar en c\xF3mo grammY implementa el middleware, consulta "),zn=s("Middleware Redux"),jn=s(" en la secci\xF3n avanzada de la documentaci\xF3n.");function En(Sn,Tn){const i=p("RouterLink"),o=p("ExternalLinkIcon"),c=p("CodeGroupItem"),l=p("CodeGroup");return r(),d("div",null,[k,b,n("blockquote",null,[n("p",null,[v,a(i,{to:"/es/advanced/middleware.html"},{default:e(()=>[g]),_:1}),w])]),_,n("p",null,[h,f,x,n("a",q,[y,a(o)]),z]),j,n("p",null,[E,S,T,P,M,n("a",C,[L,a(o)]),D]),F,a(l,null,{default:e(()=>[a(c,{title:"TypeScript",active:""},{default:e(()=>[N]),_:1}),a(c,{title:"JavaScript"},{default:e(()=>[R]),_:1})]),_:1}),Y,a(l,null,{default:e(()=>[a(c,{title:"TypeScript",active:""},{default:e(()=>[A]),_:1}),a(c,{title:"JavaScript"},{default:e(()=>[I]),_:1})]),_:1}),O,V,n("div",B,[G,H,n("ul",null,[X,J,U,$,W,n("li",null,[K,a(i,{to:"/es/plugins/runner.html"},{default:e(()=>[Q]),_:1}),Z]),nn])]),sn,n("div",an,[en,n("p",null,[tn,n("a",on,[cn,a(o)]),pn,n("a",ln,[un,rn,dn,mn,kn,a(o)]),bn,vn,gn])]),wn,n("p",null,[_n,n("a",hn,[fn,a(o)]),xn]),qn,n("p",null,[yn,a(i,{to:"/es/advanced/middleware.html"},{default:e(()=>[zn]),_:1}),jn])])}const Mn=u(m,[["render",En],["__file","middleware.html.vue"]]);export{Mn as default};
import{_ as p,r as o,o as r,c as d,a as n,b as e,w as a,d as s,e as l}from"./app.2f873437.js";const k={},m=n("h1",{id:"escalando-ii-alta-carga",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#escalando-ii-alta-carga","aria-hidden":"true"},"#"),s(" Escalando II: Alta carga")],-1),b=s("Hacer que tu bot sea capaz de manejar una alta carga depende de si ejecutas tu bot "),g=s("a trav\xE9s de un long polling o a trav\xE9s de webhooks"),_=s(". En cualquier caso, deber\xEDas leer algunas dificultades "),h=n("a",{href:"#la-concurrencia-es-dif%C3%ADcil"},"a continuaci\xF3n",-1),v=s("."),f=n("h2",{id:"long-polling",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#long-polling","aria-hidden":"true"},"#"),s(" Long Polling")],-1),y=n("p",null,"La mayor\xEDa de los bots nunca necesitan procesar m\xE1s de un pu\xF1ado de mensajes por minuto (durante los \u201Cpicos de carga\u201D). En otras palabras, la escalabilidad no es una preocupaci\xF3n para ellos. Para ser predecible, grammY procesa las actualizaciones de forma secuencial. Este es el orden de las operaciones:",-1),q=s("Obtiene hasta 100 actualizaciones a trav\xE9s de "),w=n("code",null,[s("get"),n("wbr"),s("Updates")],-1),x=s(" ("),j={href:"https://core.telegram.org/bots/api#getupdates",target:"_blank",rel:"noopener noreferrer"},z=s("Telegram Bot API Reference"),S=s(")"),A=n("li",null,[s("Para cada actualizaci\xF3n, "),n("code",null,"await"),s(" a todos los middlewares para ello")],-1),C=n("p",null,"Sin embargo, si tu bot procesa un mensaje por segundo (o algo as\xED) durante los picos de carga, esto puede empezar a afectar negativamente a la capacidad de respuesta. Por ejemplo, el mensaje de Bob tiene que esperar hasta que el mensaje de Alice termine de procesarse.",-1),E=n("p",null,"Esto puede solucionarse no esperando a que el mensaje de Alice termine de procesarse, es decir, procesando ambos mensajes simult\xE1neamente. Para conseguir la m\xE1xima capacidad de respuesta, tambi\xE9n nos gustar\xEDa recibir nuevos mensajes mientras los mensajes de Bob y Alice siguen siendo procesados. Idealmente, tambi\xE9n nos gustar\xEDa limitar la concurrencia a alg\xFAn n\xFAmero fijo para restringir la carga m\xE1xima del servidor.",-1),B=s("El procesamiento concurrente no est\xE1 incluido en el paquete central de grammY. En su lugar, "),P=s("el paquete "),I=s("grammY runner"),K=s(" puede ser utilizado"),L=s(" para ejecutar tu bot. Soporta todo lo anterior fuera de la caja, y es extremadamente simple de usar."),Y=l(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Previamente</span>
bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// grammY runner, exporta \`run\`.</span>
<span class="token function">run</span><span class="token punctuation">(</span>bot<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),G=s("El l\xEDmite de concurrencia por defecto es de 500. Si quieres profundizar en el paquete, consulta "),N=s("esta p\xE1gina"),T=s("."),V=n("p",null,[s("La concurrencia es dif\xEDcil, as\xED que revisa la "),n("a",{href:"#concurrency-is-hard"},"subsecci\xF3n de abajo"),s(" para saber lo que debes tener en cuenta cuando uses grammY runner.")],-1),D=n("h2",{id:"webhooks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webhooks","aria-hidden":"true"},"#"),s(" Webhooks")],-1),R=s("Naturalmente, para que esto funcione bien bajo una alta carga, debes familiarizarte con "),U=s("el uso de webhooks"),H=s(". Esto significa que todav\xEDa tienes que ser consciente de algunas consecuencias de la concurrencia, conferir la "),J=n("a",{href:"#la-concurrencia-es-dif%C3%ADcil"},"subsecci\xF3n de abajo",-1),O=s("."),W=s("Adem\xE1s, "),F=s("recuerda que"),M=s(" Telegram entregar\xE1 las actualizaciones del mismo chat en secuencia, pero las actualizaciones de diferentes chats de forma concurrente."),Q=n("h2",{id:"la-concurrencia-es-dificil",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#la-concurrencia-es-dificil","aria-hidden":"true"},"#"),s(" La concurrencia es dif\xEDcil")],-1),X=n("p",null,[s("Si tu bot procesa todas las actualizaciones de forma concurrente, esto puede causar una serie de problemas a los que hay que prestar especial atenci\xF3n. Por ejemplo, si dos mensajes del mismo chat acaban siendo recibidos por la misma llamada "),n("code",null,[s("get"),n("wbr"),s("Updates")]),s(", se procesar\xEDan concurrentemente. Ya no se puede garantizar el orden de los mensajes dentro del mismo chat.")],-1),Z=s("El principal punto en el que esto puede chocar es cuando se utiliza "),$=s("sessiones"),nn=s(", que puede encontrarse con un peligro de escritura despu\xE9s de lectura. Imagina esta secuencia de eventos:"),sn=l("<ol><li>Alice env\xEDa el mensaje A</li><li>El bot comienza a procesar A</li><li>El bot lee los datos de la sesi\xF3n de Alice de la base de datos</li><li>Alice env\xEDa el mensaje B</li><li>El bot comienza a procesar B</li><li>El bot lee los datos de la sesi\xF3n de Alice de la base de datos</li><li>El bot termina de procesar A, y escribe la nueva sesi\xF3n en la base de datos</li><li>El bot termina de procesar B, y escribe la nueva sesi\xF3n en la base de datos, sobrescribiendo as\xED los cambios realizados durante el procesamiento de A. \xA1P\xE9rdida de datos!</li></ol><blockquote><p>Nota: Podr\xEDa intentar utilizar transacciones de base de datos para sus sesiones, pero entonces s\xF3lo podr\xE1 detectar el peligro y no evitarlo. Intentar usar un bloqueo en su lugar eliminar\xEDa efectivamente toda la concurrencia. Es mucho m\xE1s f\xE1cil evitar el peligro en primer lugar.</p></blockquote><p>La mayor\xEDa de los otros sistemas de sesi\xF3n de los marcos web simplemente aceptan el riesgo de las condiciones de carrera, ya que no ocurren con demasiada frecuencia en la web. Sin embargo, nosotros no queremos esto porque los bots de Telegram son mucho m\xE1s propensos a experimentar choques de peticiones paralelas para la misma clave de sesi\xF3n. Por lo tanto, tenemos que asegurarnos de que las actualizaciones que acceden a los mismos datos de sesi\xF3n se procesan en secuencia para evitar esta peligrosa condici\xF3n de carrera.</p><p>grammY runner viene con el middleware <code>sequentialize()</code> que asegura que las actualizaciones que chocan se procesan en secuencia. Puedes configurarlo con la misma funci\xF3n que utilizas para determinar la clave de sesi\xF3n. Entonces evitar\xE1 la condici\xF3n de carrera mencionada anteriormente, ralentizando aquellas (y s\xF3lo aquellas) actualizaciones que podr\xEDan causar una colisi\xF3n.</p>",4),en=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context"),n("span",{class:"token punctuation"},","),s(" session "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" run"),n("span",{class:"token punctuation"},","),s(" sequentialize "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Crear un bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Construye un identificador \xFAnico para el objeto `Context`."),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getSessionKey"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token operator"},":"),s(" Context"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \xA1Secuencializa antes de acceder a los datos de la sesi\xF3n!"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"sequentialize"),n("span",{class:"token punctuation"},"("),s("getSessionKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"session"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" getSessionKey "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// A\xF1adir el middleware habitual, ahora con soporte de sesi\xF3n segura."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Got your message."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \xA1A\xFAn as\xED, ejec\xFAtalo de forma concurrente!"),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),an=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context"),n("span",{class:"token punctuation"},","),s(" session "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" run"),n("span",{class:"token punctuation"},","),s(" sequentialize "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Crear un bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Construye un identificador \xFAnico para el objeto `Context`."),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getSessionKey"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \xA1Secuencializa antes de acceder a los datos de la sesi\xF3n!"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"sequentialize"),n("span",{class:"token punctuation"},"("),s("getSessionKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"session"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" getSessionKey "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// A\xF1adir el middleware habitual, ahora con soporte de sesi\xF3n segura."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Got your message."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \xA1A\xFAn as\xED, ejec\xFAtalo de forma concurrente!"),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),tn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context"),n("span",{class:"token punctuation"},","),s(" session "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" run"),n("span",{class:"token punctuation"},","),s(" sequentialize "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_runner@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Crear un bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Construye un identificador \xFAnico para el objeto `Context`."),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getSessionKey"),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token operator"},":"),s(" Context"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" ctx"),n("span",{class:"token punctuation"},"."),s("chat"),n("span",{class:"token operator"},"?."),s("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"// \xA1Secuencializa antes de acceder a los datos de la sesi\xF3n!"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"sequentialize"),n("span",{class:"token punctuation"},"("),s("getSessionKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"session"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(" getSessionKey "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// A\xF1adir el middleware habitual, ahora con soporte de sesi\xF3n segura."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Got your message."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \xA1A\xFAn as\xED, ejec\xFAtalo de forma concurrente!"),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),on=s("No dudes en unirte al "),cn={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},ln=s("chat de Telegram"),un=s(" para discutir c\xF3mo usar grammY runner con tu bot. Siempre estamos contentos de escuchar a las personas que mantienen grandes bots para que podamos mejorar grammY en base a su experiencia con el paquete.");function pn(rn,dn){const t=o("RouterLink"),i=o("ExternalLinkIcon"),c=o("CodeGroupItem"),u=o("CodeGroup");return r(),d("div",null,[m,n("p",null,[b,e(t,{to:"/es/guide/deployment-types.html"},{default:a(()=>[g]),_:1}),_,h,v]),f,y,n("ol",null,[n("li",null,[q,w,x,n("a",j,[z,e(i)]),S]),A]),C,E,n("p",null,[B,n("strong",null,[P,e(t,{to:"/es/plugins/runner.html"},{default:a(()=>[I]),_:1}),K]),L]),Y,n("p",null,[G,e(t,{to:"/es/plugins/runner.html"},{default:a(()=>[N]),_:1}),T]),V,D,n("p",null,[R,e(t,{to:"/es/guide/deployment-types.html#como-usar-webhooks"},{default:a(()=>[U]),_:1}),H,J,O]),n("p",null,[W,e(t,{to:"/es/guide/deployment-types.html#terminar-las-solicitudes-de-webhooks-a-tiempo"},{default:a(()=>[F]),_:1}),M]),Q,X,n("p",null,[Z,e(t,{to:"/es/plugins/session.html"},{default:a(()=>[$]),_:1}),nn]),sn,e(u,null,{default:a(()=>[e(c,{title:"TypeScript",active:""},{default:a(()=>[en]),_:1}),e(c,{title:"JavaScript"},{default:a(()=>[an]),_:1}),e(c,{title:"Deno"},{default:a(()=>[tn]),_:1})]),_:1}),n("p",null,[on,n("a",cn,[ln,e(i)]),un])])}const mn=p(k,[["render",pn],["__file","scaling.html.vue"]]);export{mn as default};

import{_ as d,r as i,o as c,c as l,a as o,b as a,w as t,d as e,e as r}from"./app.2f873437.js";const u={},p=o("h1",{id:"introduccion",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#introduccion","aria-hidden":"true"},"#"),e(" Introducci\xF3n")],-1),_=o("p",null,"Un bot de Telegram es una cuenta de usuario especial que est\xE1 automatizada por un programa. Cualquiera puede crear un bot de Telegram, el \xFAnico prerrequisito es que sepas un poco de codificaci\xF3n.",-1),m=e("Si ya sabes c\xF3mo crear bots, dir\xEDgete a "),h=e("C\xF3mo empezar"),g=o("p",null,"grammY es una biblioteca que hace que sea s\xFAper sencillo escribir un bot de este tipo.",-1),b=o("h2",{id:"como-escribir-un-bot",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#como-escribir-un-bot","aria-hidden":"true"},"#"),e(" C\xF3mo escribir un bot")],-1),q=e("Antes de empezar a crear tu bot, familiar\xEDzate con lo que los bots de Telegram pueden y no pueden hacer. Consulta la "),f={href:"https://core.telegram.org/bots",target:"_blank",rel:"noopener noreferrer"},v=e("Introducci\xF3n para desarrolladores"),j=e(" del equipo de Telegram."),y=r(`<p>Al crear tu bot de Telegram, crear\xE1s un archivo de texto con el c\xF3digo fuente de tu bot. (Tambi\xE9n puedes copiar uno de nuestros archivos de ejemplo). Define <em>lo que tu bot realmente hace</em>, es decir, \u201Ccuando un usuario env\xEDa este mensaje, responde con esto\u201D, etc.</p><p>Entonces puedes ejecutar ese archivo fuente. Tu bot funcionar\xE1 ahora, hasta que dejes de ejecutarlo.</p><p>Ya has terminado\u2026</p><h2 id="como-mantener-un-bot-en-funcionamiento" tabindex="-1"><a class="header-anchor" href="#como-mantener-un-bot-en-funcionamiento" aria-hidden="true">#</a> C\xF3mo mantener un bot en funcionamiento</h2><p>\u2026excepto, si te tomas en serio tu proyecto de bot. Si detienes tu bot (o apagas tu ordenador), tu bot deja de responder, por lo que ya no reaccionar\xE1 a ning\xFAn mensaje.</p><blockquote><p>Omite esta secci\xF3n si s\xF3lo quieres jugar con los bots, y <a href="#prerrequisitos-para-empezar">contin\xFAa aqu\xED abajo con los prerrequisitos</a> para empezar.</p></blockquote><p>En pocas palabras, si quieres que el bot est\xE9 en l\xEDnea todo el tiempo, tienes que mantener un ordenador funcionando las 24 horas del d\xEDa. Como lo m\xE1s probable es que no quieras hacer eso con tu port\xE1til, debes subir tu c\xF3digo a un <em>hosting provider</em> (en otras palabras, el ordenador de otra persona, tambi\xE9n conocido como <em>servidor</em>), y dejar que esa gente lo ejecute por ti.</p><p>Hay innumerables compa\xF1\xEDas que te permiten ejecutar tu bot de Telegram de forma gratuita. Esta documentaci\xF3n cubre un n\xFAmero de diferentes proveedores de alojamiento que sabemos que funcionan bien con grammY (revisa la secci\xF3n de Alojamiento). Al final, sin embargo, la elecci\xF3n de qu\xE9 proveedor elegir depende de ti. Recuerda que ejecutar tu c\xF3digo en otro lugar significa que quien sea el due\xF1o de ese \u201Clugar\u201D tiene acceso a todos tus mensajes y a los datos de tus usuarios, as\xED que deber\xEDas elegir un proveedor en el que puedas confiar.</p><p>Aqu\xED hay un diagrama (simplificado) de c\xF3mo se ver\xE1 la configuraci\xF3n al final cuando Alice se ponga en contacto con tu bot:</p><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>_________    env\xEDa un mensaje     ____________                    ____________
| Alice | \u2014&gt;   de Telegram     \u2014&gt; | Telegram | \u2014&gt; HTTP request \u2014&gt; | your bot |
\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014       a tu bot          \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014                    \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014

 un tel\xE9fono                 servidores de Telegram               tu port\xE1til,
                                                                mejor: un servidor


|____________________________________________|                   |___________|
                    |                                                  |
        Responsabilidad de Telegram                             tu responsabilidad
</code></pre></div><p>Del mismo modo, tu bot puede hacer peticiones HTTP a los servidores de Telegram para enviar mensajes de vuelta a Alice. (Si nunca has o\xEDdo hablar de HTTP, puedes pensar en \xE9l como los paquetes de datos que se env\xEDan a trav\xE9s de Internet, por ahora).</p><h2 id="lo-que-grammy-hace-por-ti" tabindex="-1"><a class="header-anchor" href="#lo-que-grammy-hace-por-ti" aria-hidden="true">#</a> Lo que grammY hace por ti</h2><p>Los bots interact\xFAan con Telegram a trav\xE9s de peticiones HTTP. Cada vez que tu bot env\xEDa o recibe mensajes, las peticiones HTTP van y vienen entre los servidores de Telegram y tu servidor/ordenador.</p><p>En su n\xFAcleo, grammY implementa toda esta comunicaci\xF3n por ti, as\xED que puedes simplemente escribir <code>send<wbr>Message</code> en tu c\xF3digo y un mensaje ser\xE1 enviado. Adem\xE1s, hay una variedad de otras cosas \xFAtiles que grammY hace para simplificar la creaci\xF3n de tu bot. Las conocer\xE1s a medida que vayas avanzando.</p><h2 id="prerrequisitos-para-empezar" tabindex="-1"><a class="header-anchor" href="#prerrequisitos-para-empezar" aria-hidden="true">#</a> Prerrequisitos para empezar</h2>`,15),T=e("S\xE1ltate el resto de esta p\xE1gina si ya sabes c\xF3mo desarrollar una aplicaci\xF3n Deno o Node.js, y "),w=e("empieza"),z=e("."),k=o("p",null,"Aqu\xED hay algunas cosas interesantes sobre la programaci\xF3n-cosas que son esenciales para la codificaci\xF3n, pero que rara vez se explican porque la mayor\xEDa de los desarrolladores piensan que son evidentes.",-1),N=e("En la siguiente secci\xF3n, crear\xE1s un bot escribiendo un archivo de texto que contiene el c\xF3digo fuente en el lenguaje de programaci\xF3n "),x={href:"https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html",target:"_blank",rel:"noopener noreferrer"},S=e("Type"),E=o("wbr",null,null,-1),C=e("Script"),P=e(". La documentaci\xF3n de grammY no te ense\xF1ar\xE1 a programar, as\xED que esperamos que te ense\xF1es a ti mismo. Sin embargo, recuerda: \xA1crear un bot de Telegram con grammY es una buena manera de aprender a programar! \u{1F680}"),A={class:"custom-container tip"},D=o("p",{class:"custom-container-title"},"Aprender a codificar",-1),L=e("Puedes empezar a aprender TypeScript con el "),Y={href:"https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html",target:"_blank",rel:"noopener noreferrer"},I=e("tutorial oficial"),H=e(" escrito por el equipo de TypeScript, y luego avanzar desde ah\xED. No pases m\xE1s de 30 minutos leyendo cosas en internet, luego vuelve aqu\xED, (lee el resto de la secci\xF3n) y "),V=e("empieza"),R=e("."),B=o("p",null,"Si ves una sintaxis desconocida en los documentos, o si recibes un mensaje de error que no entiendes, b\xFAscalo en Google; la explicaci\xF3n ya est\xE1 en Internet (por ejemplo, en StackOverflow).",-1),G={class:"custom-container danger"},M=o("p",{class:"custom-container-title"},"No aprender a codificar",-1),O=e("Ah\xF3rrate algo de tiempo viendo "),J={href:"https://youtu.be/8RtGlWmXGhA",target:"_blank",rel:"noopener noreferrer"},U=e("este v\xEDdeo de 34 segundos de duraci\xF3n"),W=e("."),X=o("p",null,[e("Al elegir grammY, ya te has decidido por un lenguaje de programaci\xF3n, concretamente TypeScript. Pero, \xBFqu\xE9 pasa una vez que has creado tu c\xF3digo TypeScript, c\xF3mo va a empezar a ejecutarse? Para ello, necesitas instalar alg\xFAn software que sea capaz de "),o("em",null,"ejecutar"),e(" tu c\xF3digo. Este tipo de software se llama "),o("em",null,"entorno de ejecuci\xF3n"),e(". Toma tus archivos de c\xF3digo fuente y realmente hace lo que est\xE1 programado en ellos.")],-1),F=e("Para nosotros, hay dos entornos de ejecuci\xF3n para elegir, "),K={href:"https://deno.land",target:"_blank",rel:"noopener noreferrer"},Q=e("Deno"),Z=e(" y "),$={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},ee=e("Node"),oe=o("wbr",null,null,-1),ae=e(".js"),se=e(". (Si ves que la gente lo llama "),ne=o("em",null,"Node",-1),te=e(", es que son demasiado perezosos para escribir \u201C.js\u201D, pero significan lo mismo)."),re=r('<blockquote><p>El resto de esta secci\xF3n te ayuda a decidir entre estas dos plataformas. Si ya sabes lo que quieres usar, salta a los <a href="#prerrequisitos-para-nodejs">prerrequisitos para Node<wbr>.js</a> o los <a href="#prerrequisitos-para-deno">de Deno</a>.</p></blockquote><p>Node.js es la tecnolog\xEDa m\xE1s antigua y madura. Si necesitas conectarte a una base de datos extra\xF1a o hacer otras cosas de bajo nivel relacionadas con el sistema, es muy probable que puedas hacerlo con Node.js. Deno es relativamente nuevo, por lo que a veces a\xFAn le falta soporte para algunas cosas avanzadas. Hoy en d\xEDa, la mayor\xEDa de los servidores utilizan Node.js.</p><p>Por otro lado, Deno es significativamente m\xE1s f\xE1cil de aprender y usar. Si a\xFAn no tienes mucha experiencia en programaci\xF3n, <strong>tiene sentido empezar con Deno</strong>.</p><p>Incluso si has escrito c\xF3digo para Node.js antes, deber\xEDas considerar darle una oportunidad a Deno. Muchas cosas que son dif\xEDciles en Node.js son sencillas en Deno. No tiene</p><ul><li>no hay que configurar ning\xFAn archivo <code>package<wbr>.json</code>,</li><li>no hay que mantener <code>node<wbr>_modules</code>,</li><li>herramientas de desarrollo superiores e integradas,</li><li>una seguridad sustancialmente mejor, y</li><li>muchas m\xE1s ventajas que no caben aqu\xED.</li></ul><p>Desarrollar c\xF3digo con Deno es tambi\xE9n mucho m\xE1s divertido. Al menos, esa es nuestra opini\xF3n.</p><p>Sin embargo, si tienes una raz\xF3n para usar Node.js, por ejemplo porque ya lo conoces bien, \xA1entonces est\xE1 completamente bien! Nos estamos asegurando de que grammY funcione igual de bien en ambas plataformas, y no estamos cortando ninguna esquina. Por favor, elige lo que creas que es mejor para ti.</p><h3 id="prerrequisitos-para-deno" tabindex="-1"><a class="header-anchor" href="#prerrequisitos-para-deno" aria-hidden="true">#</a> Prerrequisitos para Deno</h3>',8),ie={href:"https://deno.land/#installation",target:"_blank",rel:"noopener noreferrer"},de=e("Instalar Deno"),ce=e(" si no lo has hecho ya. Cuando hayas creado tu bot, por ejemplo en un archivo llamado "),le=o("code",null,[e("bot"),o("wbr"),e(".ts")],-1),ue=e(", puedes ejecutarlo mediante "),pe=o("code",null,[e("deno run "),o("wbr"),e("--allow"),o("wbr"),e("-net bot"),o("wbr"),e(".ts")],-1),_e=e(". Puedes detenerlo de nuevo con "),me=o("code",null,"Ctrl+C",-1),he=e("."),ge=e("\xBFListo? \xA1"),be=e("Empieza"),qe=e("! \u{1F916}"),fe=r('<h3 id="prerrequisitos-para-node-js" tabindex="-1"><a class="header-anchor" href="#prerrequisitos-para-node-js" aria-hidden="true">#</a> Prerrequisitos para Node.js</h3><p>Vas a escribir tu bot en TypeScript, pero, al contrario que Deno, Node.js no puede ejecutar TypeScript. En su lugar, una vez que tengas un archivo fuente (por ejemplo, llamado <code>bot<wbr>.ts</code>), vas a <em>compilarlo</em> a JavaScript. Entonces tendr\xE1s dos archivos: tu <code>bot<wbr>.ts</code> original, y un <code>bot<wbr>.js</code> generado, que a su vez puede ser ejecutado por Node.js. Los comandos exactos para todo esto ser\xE1n introducidos en la siguiente secci\xF3n cuando realmente crees un bot, pero es importante saber que estos pasos son necesarios.</p>',2),ve=e("Para poder ejecutar el archivo "),je=o("code",null,[e("bot"),o("wbr"),e(".js")],-1),ye=e(", tienes que tener instalado "),Te={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},we=e("Node"),ze=o("wbr",null,null,-1),ke=e(".js"),Ne=e("."),xe=o("p",null,"En resumen, esto es lo que tienes que hacer para Node.js:",-1),Se=e("Crear un archivo fuente "),Ee=o("code",null,[e("bot"),o("wbr"),e(".ts")],-1),Ce=e(" con c\xF3digo TypeScript, por ejemplo, utilizando "),Pe={href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"},Ae=e("VSCode"),De=e(" (o cualquier otro editor de c\xF3digo)."),Le=o("li",null,[e("Compila el c\xF3digo ejecutando un comando en tu terminal. Esto genera un archivo llamado "),o("code",null,[e("bot"),o("wbr"),e(".js")]),e(".")],-1),Ye=o("li",null,[e("Ejecuta "),o("code",null,[e("bot"),o("wbr"),e(".js")]),e(" usando Node.js, de nuevo desde tu terminal.")],-1),Ie=o("p",null,[e("Cada vez que modifiques tu c\xF3digo en "),o("code",null,[e("bot"),o("wbr"),e(".ts")]),e(", debes reiniciar el proceso de Node.js. Pulsa "),o("code",null,"Ctrl+C"),e(" en tu terminal para detener el proceso. Esto detendr\xE1 tu bot. Entonces, necesitas repetir los pasos 2 y 3.")],-1),He=e("\xBFEst\xE1s listo? \xA1"),Ve=e("Empieza"),Re=e("! \u{1F916}");function Be(Ge,Me){const n=i("RouterLink"),s=i("ExternalLinkIcon");return c(),l("div",null,[p,_,o("blockquote",null,[o("p",null,[m,a(n,{to:"/es/guide/getting-started.html"},{default:t(()=>[h]),_:1})])]),g,b,o("p",null,[q,o("a",f,[v,a(s)]),j]),y,o("blockquote",null,[o("p",null,[T,a(n,{to:"/es/guide/getting-started.html"},{default:t(()=>[w]),_:1}),z])]),k,o("p",null,[N,o("a",x,[S,E,C,a(s)]),P]),o("div",A,[D,o("p",null,[L,o("a",Y,[I,a(s)]),H,a(n,{to:"/es/guide/getting-started.html"},{default:t(()=>[V]),_:1}),R]),B]),o("div",G,[M,o("p",null,[O,o("a",J,[U,a(s)]),W])]),X,o("p",null,[F,o("a",K,[Q,a(s)]),Z,o("a",$,[ee,oe,ae,a(s)]),se,ne,te]),re,o("p",null,[o("a",ie,[de,a(s)]),ce,le,ue,pe,_e,me,he]),o("p",null,[ge,a(n,{to:"/es/guide/getting-started.html#introducci%C3%B3n-a-deno"},{default:t(()=>[be]),_:1}),qe]),fe,o("p",null,[ve,je,ye,o("a",Te,[we,ze,ke,a(s)]),Ne]),xe,o("ol",null,[o("li",null,[Se,Ee,Ce,o("a",Pe,[Ae,a(s)]),De]),Le,Ye]),Ie,o("p",null,[He,a(n,{to:"/es/guide/getting-started.html#comenzando-en-nodejs"},{default:t(()=>[Ve]),_:1}),Re])])}const Je=d(u,[["render",Be],["__file","introduction.html.vue"]]);export{Je as default};

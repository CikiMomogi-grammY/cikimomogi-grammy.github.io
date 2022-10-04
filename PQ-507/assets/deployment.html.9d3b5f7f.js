import{_ as r,r as i,o as l,c,b as s,a as o,w as n,d as e}from"./app.9837a88d.js";const u={},_=o("h1",{id:"lista-de-verificaciones-en-despliegues",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#lista-de-verificaciones-en-despliegues","aria-hidden":"true"},"#"),e(" Lista de verificaciones en despliegues")],-1),h=o("p",null,"Lista de cosas a tener en cuanta cuando vayas a alojar un bot grande.",-1),p=o("blockquote",null,[o("p",null,[e("Puede que estes interesado en nuestras gu\xEDas para alojar un bot. Mira "),o("strong",null,"Alojamiento / Tutoriales"),e(" en el principio de la p\xE1gina para ver algunas de las plataformas que ya tienen gu\xEDas dedicadas.")])],-1),m=o("h2",{id:"errores",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#errores","aria-hidden":"true"},"#"),e(" Errores")],-1),g=e("Instala un manejador de errores con "),b=o("code",null,[e("bot"),o("wbr"),e(".catch")],-1),f=e(" (long polling) o en tu web framework (webhooks)."),k=o("li",null,[e("Usa "),o("code",null,"await"),e(" en todas las promesas e instala "),o("strong",null,"linting"),e(", con reglas que obliguen a esto, as\xED nunca te olvidas.")],-1),v=o("h2",{id:"envio-de-mensajes",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#envio-de-mensajes","aria-hidden":"true"},"#"),e(" Env\xEDo de mensajes")],-1),w=e("Env\xEDa ficheros por ruta o "),y=o("code",null,"Buffer",-1),x=e(" en vez de "),j=o("code",null,"Stream",-1),E=e(",o al menos estate seguro de que "),z=e("conoces las trampas"),q=e("."),C=e("Usa "),A=o("code",null,[e("bot"),o("wbr"),e('.on("callback'),o("wbr"),e("_query:"),o("wbr"),e('data")')],-1),I=e(" como un manejador alternativo para "),T=e("reaccionar a todas las consultas de devoluci\xF3n de llamada"),P=e("."),S=e("Usa el "),L=o("code",null,[e("transformer"),o("wbr"),e("-throttler")],-1),U=e(" plugin"),D=e(" para prevenir llegar a los l\xEDmites."),R=o("strong",null,"Optional.",-1),Y=e(" Considera usar el "),B=o("code",null,[e("auto"),o("wbr"),e("-retry")],-1),N=e(" plugin"),K=e(" para autom\xE1ticamente manejar los errores de espera."),F=o("h2",{id:"escalando-servidores",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#escalando-servidores","aria-hidden":"true"},"#"),e(" Escalando servidores")],-1),O=o("p",null,"Esto depende del tipo de despliegue.",-1),M=o("h3",{id:"long-polling",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#long-polling","aria-hidden":"true"},"#"),e(" Long Polling")],-1),V=e("Usa grammY runner"),H=o("wbr",null,null,-1),G=e("."),W=e("Usa "),J=o("code",null,"sequentialize",-1),Q=e(" con el mismo id de sesi\xF3n que tu middleware de sesi\xF3n."),X=e("Revise las opciones de configuraci\xF3n de "),Z=o("code",null,"run",-1),$=e(" ("),ee={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/run",target:"_blank",rel:"noopener noreferrer"},oe=e("referencia de la API"),se=e(") y aseg\xFArese de que se ajustan a sus necesidades, o incluso considere la posibilidad de componer su propio corredor a partir de "),te={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSource",target:"_blank",rel:"noopener noreferrer"},ne=e("sources"),ae=e(" y "),ie={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSink",target:"_blank",rel:"noopener noreferrer"},de=e("sinks"),re=e(". Lo principal a tener en cuenta es la carga m\xE1xima que quiere aplicar a su servidor, es decir, cu\xE1ntas actualizaciones pueden procesarse al mismo tiempo."),le=e("Considere implementar un "),ce=e("apagado gradual"),ue=e(" para parar tu bot cuando tu quieres terminar con \xE9l (e.j. cambiar a una nueva versi\xF3n)."),_e=o("h3",{id:"webhooks",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#webhooks","aria-hidden":"true"},"#"),e(" Webhooks")],-1),he=e("Aseg\xFArese de no realizar ninguna operaci\xF3n de larga duraci\xF3n en su middleware, como las transferencias de archivos de gran tama\xF1o. "),pe=e("Esto lleva a errores de tiempo de espera"),me=e(" para los webhooks, y el procesamiento de actualizaciones duplicadas, ya que Telegram reenviar\xE1 las actualizaciones no reconocidas. Considere la posibilidad de utilizar un sistema de cola de tareas en su lugar."),ge=e("Familiar\xEDcese con la configuraci\xF3n de "),be=o("code",null,[e("webhook"),o("wbr"),e("Callback")],-1),fe=e(" ("),ke={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/webhookCallback",target:"_blank",rel:"noopener noreferrer"},ve=e("referencia de la API"),we=e(")."),ye=e("Si cambiaste la opci\xF3n "),xe=o("code",null,[e("get"),o("wbr"),e("Session"),o("wbr"),e("Key")],-1),je=e(" por la de tu sesi\xF3n, "),Ee=e("usa "),ze=o("code",null,"sequentialize",-1),qe=e(" con la misma funci\xF3n de resoluci\xF3n de claves de sesi\xF3n que su middleware de sesi\xF3n"),Ce=e("."),Ae=e("Si se ejecuta en una plataforma sin servidor o de autoescalado, "),Ie={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/BotConfig",target:"_blank",rel:"noopener noreferrer"},Te=e("establezca la informaci\xF3n del bot"),Pe=e(" para prevenir excesivas llamadas "),Se=o("code",null,[e("get"),o("wbr"),e("Me")],-1),Le=e("."),Ue=e("Considere utilizar "),De=e("webhook replies"),Re=e("."),Ye=o("h2",{id:"sesiones",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#sesiones","aria-hidden":"true"},"#"),e(" Sesiones")],-1),Be=e("Considere usar "),Ne=o("code",null,[e("lazy"),o("wbr"),e("Sessions")],-1),Ke=e(" explicadas "),Fe=e("aqu\xED"),Oe=e("."),Me=o("li",null,[e("Use la opci\xF3n "),o("code",null,"storage"),e(" para configurar su adaptador de almacenamiento, de lo contrario todos los datos se perder\xE1n cuando el proceso del bot se detenga.")],-1),Ve=o("h2",{id:"tests",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#tests","aria-hidden":"true"},"#"),e(" Tests")],-1),He=o("p",null,"Escribe tests para tu bot. Esto se puede hacer con grammY as\xED",-1),Ge=e("Simular las peticiones salientes de la API utilizando "),We=e("funciones de transformaci\xF3n"),Je=e("."),Qe=e("Define y env\xEDa ejemplos de actualizaci\xF3n a tu bot via "),Xe=o("code",null,[e("bot"),o("wbr"),e(".handle"),o("wbr"),e("Update")],-1),Ze=e(" ("),$e={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Bot#handleUpdate",target:"_blank",rel:"noopener noreferrer"},eo=e("referencia API"),oo=e("). Considere inspirarse en "),so={href:"https://core.telegram.org/bots/webhooks#testing-your-bot-with-updates",target:"_blank",rel:"noopener noreferrer"},to=e("estos ejemplos"),no=e(" proporcionados por el equipo de Telegram."),ao=o("div",{class:"custom-container tip"},[o("p",{class:"custom-container-title"},"Contribuye al framework de testing."),o("p",null,"Aunque grammY proporciona lo necesario para empezar a escribir tests, ser\xEDa muy \xFAtil tener un framework para los bots. Este es un territorio novedoso, tales frameworks no existen en gran medida. \xA1Esperamos tus contribuciones!.")],-1);function io(ro,lo){const d=i("AutotagPage"),t=i("RouterLink"),a=i("ExternalLinkIcon");return l(),c("div",null,[_,s(d,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),h,p,m,o("ol",null,[o("li",null,[s(t,{to:"/es/guide/errors.html"},{default:n(()=>[g,b,f]),_:1})]),k]),v,o("ol",null,[o("li",null,[w,y,x,j,E,s(t,{to:"/es/advanced/transformers.html#casos-de-uso-de-las-funciones-de-transformaci%C3%B3n"},{default:n(()=>[z]),_:1}),q]),o("li",null,[C,A,I,s(t,{to:"/es/plugins/keyboard.html#respondiendo-a-los-clics"},{default:n(()=>[T]),_:1}),P]),o("li",null,[S,s(t,{to:"/es/plugins/transformer-throttler.html"},{default:n(()=>[L,U]),_:1}),D]),o("li",null,[R,Y,s(t,{to:"/es/plugins/auto-retry.html"},{default:n(()=>[B,N]),_:1}),K])]),F,O,M,o("ol",null,[o("li",null,[s(t,{to:"/es/plugins/runner.html"},{default:n(()=>[V,H,G]),_:1})]),o("li",null,[s(t,{to:"/es/advanced/scaling.html#la-concurrencia-es-dif%C3%ADcil"},{default:n(()=>[W,J,Q]),_:1})]),o("li",null,[X,Z,$,o("a",ee,[oe,s(a)]),se,o("a",te,[ne,s(a)]),ae,o("a",ie,[de,s(a)]),re]),o("li",null,[le,s(t,{to:"/es/advanced/reliability.html#apagado-correcto"},{default:n(()=>[ce]),_:1}),ue])]),_e,o("ol",null,[o("li",null,[he,s(t,{to:"/es/guide/deployment-types.html#terminar-las-solicitudes-de-webhooks-a-tiempo"},{default:n(()=>[pe]),_:1}),me]),o("li",null,[ge,be,fe,o("a",ke,[ve,s(a)]),we]),o("li",null,[ye,xe,je,s(t,{to:"/es/advanced/scaling.html#la-concurrencia-es-dif%C3%ADcil"},{default:n(()=>[Ee,ze,qe]),_:1}),Ce]),o("li",null,[Ae,o("a",Ie,[Te,s(a)]),Pe,Se,Le]),o("li",null,[Ue,s(t,{to:"/es/guide/deployment-types.html#webhook-reply"},{default:n(()=>[De]),_:1}),Re])]),Ye,o("ol",null,[o("li",null,[Be,Ne,Ke,s(t,{to:"/es/plugins/session.html#lazy-sessions"},{default:n(()=>[Fe]),_:1}),Oe]),Me]),Ve,He,o("ol",null,[o("li",null,[Ge,s(t,{to:"/es/advanced/transformers.html"},{default:n(()=>[We]),_:1}),Je]),o("li",null,[Qe,Xe,Ze,o("a",$e,[eo,s(a)]),oo,o("a",so,[to,s(a)]),no])]),ao])}const uo=r(u,[["render",io],["__file","deployment.html.vue"]]);export{uo as default};

import{_ as r,r as i,o as l,c as d,b as n,a as s,w as o,d as e,e as c}from"./app.9837a88d.js";const u={},h=s("h1",{id:"bot-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bot-api","aria-hidden":"true"},"#"),e(" Bot API")],-1),m=s("h2",{id:"general-information",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#general-information","aria-hidden":"true"},"#"),e(" General Information")],-1),g=e("Telegram bots communicate with the Telegram servers via HTTP requests. The Telegram Bot API is the specification of this interface, i.e. a "),k={href:"https://core.telegram.org/bots/api",target:"_blank",rel:"noopener noreferrer"},b=e("long list"),_=e(" of methods and data types, commonly called a reference. It defines everything that Telegram bots can do. You can find it linked under the Resources tab."),y=s("p",null,"The setup can be visualized like this:",-1),v=s("div",{class:"language-asciiart ext-asciiart"},[s("pre",{class:"language-asciiart"},[s("code",null,`( ( ( Telegram ) MTProto API ) Bot HTTP API ) <-- bot connects here
`)])],-1),f=e("In words: when your bot sends a message, it will be sent as an HTTP request to a "),w=s("em",null,"Bot API server",-1),T=e(" (either hosted by the Telegram team, or "),x={href:"https://core.telegram.org/bots/api#using-a-local-bot-api-server",target:"_blank",rel:"noopener noreferrer"},A=e("hosted by you"),I=e("). This server will translate the request to Telegram\u2019s native protocol called MTProto, and send a request to the Telegram backend which takes care of sending the message to the user."),q=s("p",null,"Analogously, whenever a user responds, the inverse path is taken.",-1),P={class:"custom-container tip"},j=s("p",{class:"custom-container-title"},"Circumventing File Size Limits",-1),B=e("The Telegram backend allows your bot to "),M=e("send files"),H=e(" up to 2000 MB. However, the Bot API server that is responsible for translating the requests to HTTP restricts the file size to 50 MB for downloads and 20 MB for uploads."),N=e("Hence, if you circumvent the Bot API server that Telegram runs for you, and simply "),Y={href:"https://core.telegram.org/bots/api#using-a-local-bot-api-server",target:"_blank",rel:"noopener noreferrer"},E=e("host your own Bot API server"),C=e(", you can allow your bot to send files up to 2000 MB."),R=e("Note: if you are working with large files over "),S=e("long polling"),D=e(", you should use "),O=e("grammY runner"),z=e("."),L=s("h2",{id:"calling-the-bot-api",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#calling-the-bot-api","aria-hidden":"true"},"#"),e(" Calling the Bot API")],-1),F=e("Every single method of the Bot API has an equivalent in grammY. Example: "),J=s("code",null,[e("send"),s("wbr"),e("Message")],-1),K=e(" in the "),V={href:"https://core.telegram.org/bots/api#sendmessage",target:"_blank",rel:"noopener noreferrer"},G=e("Telegram Bot API Reference"),W=e(" and in the "),Q={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Api#sendMessage",target:"_blank",rel:"noopener noreferrer"},U=e("grammY API Reference"),X=e("."),Z=s("h3",{id:"calling-a-method",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#calling-a-method","aria-hidden":"true"},"#"),e(" Calling a Method")],-1),$=e("You can call API methods via "),ee=s("code",null,[e("bot"),s("wbr"),e(".api")],-1),se=e(", or "),ne=e("equivalently"),te=e(" via "),ae=s("code",null,[e("ctx"),s("wbr"),e(".api")],-1),oe=e(":"),ie=c(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendHelloTo12345</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// Send a message to 12345.</span>
  <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Send a message and store the response, which contains info about the sent message.</span>
  <span class="token keyword">const</span> sentMessage <span class="token operator">=</span> <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;Hello again!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sentMessage<span class="token punctuation">.</span>message_id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>While <code>bot<wbr>.api</code> covers the entire Bot API, it sometimes changes the function signatures a bit to make it more usable. Strictly speaking, all methods of the Bot API expect a JSON object with a number of properties. Notice, however, how <code>send<wbr>Message</code> in the above example receives two arguments, a chat identifier and a string. grammY knows that these two values belong to the <code>chat<wbr>_id</code> and the <code>text</code> property, respectively, and will build the correct JSON object for you.</p>`,2),ce=e("As mentioned "),pe=e("earlier"),re=e(", you can specify other options in the third argument of type "),le=s("code",null,"Other",-1),de=e(":"),ue=c(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendHelloTo12345</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token number">12345</span><span class="token punctuation">,</span> <span class="token string">&quot;&lt;i&gt;Hello!&lt;/i&gt;&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Moreover, grammY takes care of numerous technical details to simplify the API usage. As an example, some specific properties in some specific methods have to be <code>JSON<wbr>.stringify</code>ed before they are sent. This is easy to forget, hard to debug, and it breaks type inference. grammY allows you to specify objects consistently across the API, and makes sure that the right properties are serialized on the fly before sending them.</p><h3 id="type-definitions-for-the-api" tabindex="-1"><a class="header-anchor" href="#type-definitions-for-the-api" aria-hidden="true">#</a> Type Definitions for the API</h3>`,3),he=e("grammY ships with complete type coverage of the Bot API. The "),me={href:"https://github.com/grammyjs/types",target:"_blank",rel:"noopener noreferrer"},ge=s("code",null,[e("@grammyjs"),s("wbr"),e("/types")],-1),ke=e(" repository contains the type definitions that grammY uses internally. These type definitions are also exported so you can use them in your own code."),be=c(`<h4 id="type-definitions-on-node-js" tabindex="-1"><a class="header-anchor" href="#type-definitions-on-node-js" aria-hidden="true">#</a> Type Definitions on Node.js</h4><p>On Node.js, you need to import the types from <code>grammy<wbr>/types</code>. For example, you get access to the <code>Chat</code> type like this:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">Chat</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy/types&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Officially, Node.js only supports importing from sub-paths properly since Node.js 16. Consequently, TypeScript requires the <code>module<wbr>Resolution</code> to be set to <code>node16</code> or <code>nodenext</code>. Adjust your <code>tsconfig<wbr>.json</code> accordingly and add the highlighted line:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node16&quot;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>However, this can sometimes also work without adjusting your TypeScript configuration.</p><div class="custom-container warning"><p class="custom-container-title">Wrong Autocomplete</p><p>If you do not change your <code>tsconfig<wbr>.json</code> file as described above, it may happen that your code editor suggests in autocomplete to import types from <code>grammy<wbr>/out<wbr>/client</code> or something. <strong>All paths starting with <code>grammy<wbr>/out</code> are internal. Do not use them.</strong> They could be changed arbitrarily at any point in time, so we strongly advise you to import from <code>grammy<wbr>/types</code> instead.</p></div><h4 id="type-definitions-on-deno" tabindex="-1"><a class="header-anchor" href="#type-definitions-on-deno" aria-hidden="true">#</a> Type Definitions on Deno</h4><p>On Deno, you can simply import type definitions from <code>types<wbr>.ts</code> which is right next to <code>mod<wbr>.ts</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token keyword">type</span> <span class="token class-name">Chat</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/types.ts&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="making-raw-api-calls" tabindex="-1"><a class="header-anchor" href="#making-raw-api-calls" aria-hidden="true">#</a> Making Raw API Calls</h3><p>There may be times when you want to use the original function signatures, but still rely on the convenience of the grammY API (e.g. JSON serializing where appropriate). grammY supports this via the <code>bot<wbr>.api<wbr>.raw</code> (or the <code>ctx<wbr>.api<wbr>.raw</code>) properties.</p><p>You can call the raw methods like this:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sendHelloTo12345</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span>raw<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    chat_id<span class="token operator">:</span> <span class="token number">12345</span><span class="token punctuation">,</span>
    text<span class="token operator">:</span> <span class="token string">&quot;&lt;i&gt;Hello!&lt;/i&gt;&quot;</span><span class="token punctuation">,</span>
    parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Basically, all parameters of the function signature are merged with the options object when you use the raw API.</p>`,15);function _e(ye,ve){const p=i("AutotagPage"),t=i("ExternalLinkIcon"),a=i("RouterLink");return l(),d("div",null,[h,n(p,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),m,s("p",null,[g,s("a",k,[b,n(t)]),_]),y,v,s("p",null,[f,w,T,s("a",x,[A,n(t)]),I]),q,s("div",P,[j,s("p",null,[B,n(a,{to:"/guide/files.html"},{default:o(()=>[M]),_:1}),H]),s("p",null,[N,s("a",Y,[E,n(t)]),C]),s("blockquote",null,[s("p",null,[R,n(a,{to:"/guide/deployment-types.html"},{default:o(()=>[S]),_:1}),D,n(a,{to:"/plugins/runner.html"},{default:o(()=>[O]),_:1}),z])])]),L,s("p",null,[F,J,K,s("a",V,[G,n(t)]),W,s("a",Q,[U,n(t)]),X]),Z,s("p",null,[$,ee,se,n(a,{to:"/guide/context.html#available-actions"},{default:o(()=>[ne]),_:1}),te,ae,oe]),ie,s("p",null,[ce,n(a,{to:"/guide/basics.html#sending-messages"},{default:o(()=>[pe]),_:1}),re,le,de]),ue,s("p",null,[he,s("a",me,[ge,n(t)]),ke]),be])}const we=r(u,[["render",_e],["__file","api.html.vue"]]);export{we as default};

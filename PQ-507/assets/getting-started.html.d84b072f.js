import{_ as r,r as o,o as d,c as m,b as e,a as n,w as a,d as s,e as l}from"./app.9a621f1c.js";const k={},b=n("h1",{id:"getting-started",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),s(" Getting Started")],-1),h=n("p",null,[s("Create your first bot in minutes. (Scroll "),n("a",{href:"#getting-started-on-deno"},"down"),s(" for a Deno guide.)")],-1),g=n("h2",{id:"getting-started-on-node-js",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#getting-started-on-node-js","aria-hidden":"true"},"#"),s(" Getting Started on Node.js")],-1),v=s("This guide assumes that you have "),_={href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"},y=s("Node"),f=n("wbr",null,null,-1),w=s(".js"),x=s(" installed, and "),T=n("code",null,"npm",-1),j=s(" should come with it. If you don\u2019t know what these things are, check out our "),Y=s("Introduction"),q=s("!"),S=n("p",null,[s("Create a new TypeScript project and install the "),n("code",null,"grammy"),s(" package. Do this by opening a terminal and typing:")],-1),B=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Create a new directory and change into it."),s(`
`),n("span",{class:"token function"},"mkdir"),s(` my-bot
`),n("span",{class:"token builtin class-name"},"cd"),s(` my-bot

`),n("span",{class:"token comment"},"# Set up TypeScript (skip if you use JavaScript)."),s(`
`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(),n("span",{class:"token parameter variable"},"-D"),s(` typescript
npx tsc `),n("span",{class:"token parameter variable"},"--init"),s(`

`),n("span",{class:"token comment"},"# Install grammY."),s(`
`),n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` grammy
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Create a new directory and change into it."),s(`
`),n("span",{class:"token function"},"mkdir"),s(` my-bot
`),n("span",{class:"token builtin class-name"},"cd"),s(` my-bot

`),n("span",{class:"token comment"},"# Set up TypeScript (skip if you use JavaScript)."),s(`
`),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(" typescript "),n("span",{class:"token parameter variable"},"-D"),s(`
npx tsc `),n("span",{class:"token parameter variable"},"--init"),s(`

`),n("span",{class:"token comment"},"# Install grammY."),s(`
`),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` grammy
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# Create a new directory and change into it."),s(`
`),n("span",{class:"token function"},"mkdir"),s(` my-bot
`),n("span",{class:"token builtin class-name"},"cd"),s(` my-bot

`),n("span",{class:"token comment"},"# Set up TypeScript (skip if you use JavaScript)."),s(`
`),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(),n("span",{class:"token parameter variable"},"-D"),s(` typescript
npx tsc `),n("span",{class:"token parameter variable"},"--init"),s(`

`),n("span",{class:"token comment"},"# Install grammY."),s(`
`),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` grammy
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("p",null,[s("Create a new empty text file, e.g. called "),n("code",null,[s("bot"),n("wbr"),s(".ts")]),s(". Your folder structure should now look like this:")],-1),E=n("div",{class:"language-asciiart ext-asciiart"},[n("pre",{class:"language-asciiart"},[n("code",null,`.
\u251C\u2500\u2500 bot.ts
\u251C\u2500\u2500 node_modules/
\u251C\u2500\u2500 package.json
\u251C\u2500\u2500 package-lock.json
\u2514\u2500\u2500 tsconfig.json
`)])],-1),I=s("Now, it\u2019s time to open Telegram to create a bot account, and obtain an authentication token for it. Talk to "),G={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},H=s("@Bot"),L=n("wbr",null,null,-1),F=s("Father"),P=s(" to do this. The authentication token looks like "),A=n("code",null,[s("123456:"),n("wbr"),s("a"),n("wbr"),s("BcDeF"),n("wbr"),s("_g"),n("wbr"),s("HiJkLmNoP"),n("wbr"),s("-q")],-1),J=s("."),R=n("p",null,[s("Got the token? You can now code your bot in the "),n("code",null,[s("bot"),n("wbr"),s(".ts")]),s(" file. You can copy the following example bot into that file, and pass your token to the "),n("code",null,"Bot"),s(" constructor:")],-1),z=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Create an instance of the `Bot` class and pass your authentication token to it."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// <-- put your authentication token between the ""'),s(`

`),n("span",{class:"token comment"},"// You can now register listeners on your bot object `bot`."),s(`
`),n("span",{class:"token comment"},"// grammY will call the listeners when users send messages to your bot."),s(`

`),n("span",{class:"token comment"},"// Handle the /start command."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"start"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Welcome! Up and running."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// Handle other messages."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Got another message!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Now that you specified how to handle messages, you can start your bot."),s(`
`),n("span",{class:"token comment"},"// This will connect to the Telegram servers and wait for messages."),s(`

`),n("span",{class:"token comment"},"// Start the bot."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),U=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Create an instance of the `Bot` class and pass your authentication token to it."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// <-- put your authentication token between the ""'),s(`

`),n("span",{class:"token comment"},"// You can now register listeners on your bot object `bot`."),s(`
`),n("span",{class:"token comment"},"// grammY will call the listeners when users send messages to your bot."),s(`

`),n("span",{class:"token comment"},"// Handle the /start command."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"start"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Welcome! Up and running."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// Handle other messages."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Got another message!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Now that you specified how to handle messages, you can start your bot."),s(`
`),n("span",{class:"token comment"},"// This will connect to the Telegram servers and wait for messages."),s(`

`),n("span",{class:"token comment"},"// Start the bot."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=l(`<p>Compile the code by running</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>npx tsc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>in your terminal. This generates the JavaScript file <code>bot<wbr>.js</code>.</p><p>You can now run the bot by executing</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">node</span> bot.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>in your terminal. Done! \u{1F389}</p><p>Head over to Telegram to watch your bot respond to messages!</p><div class="custom-container tip"><p class="custom-container-title">Enabling Logging</p><p>You can enable basic logging by running</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">DEBUG</span><span class="token operator">=</span><span class="token string">&quot;grammy*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>in your terminal before you execute <code>node bot<wbr>.js</code>. This makes it easier to debug your bot.</p></div><h2 id="getting-started-on-deno" tabindex="-1"><a class="header-anchor" href="#getting-started-on-deno" aria-hidden="true">#</a> Getting Started on Deno</h2>`,9),V=s("This guide assumes that you have "),O={href:"https://deno.land",target:"_blank",rel:"noopener noreferrer"},W=s("Deno"),M=s(" installed."),Q=n("p",null,[s("Create a new directory somewhere and create a new empty text file in it, e.g. called "),n("code",null,[s("bot"),n("wbr"),s(".ts")]),s(".")],-1),X=s("Now, it\u2019s time to open Telegram to create a bot account, and obtain an authentication token for it. Talk to "),Z={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},$=s("@Bot"),nn=n("wbr",null,null,-1),sn=s("Father"),en=s(" to do this. The authentication token looks like "),an=n("code",null,[s("123456:"),n("wbr"),s("a"),n("wbr"),s("BcDeF"),n("wbr"),s("_g"),n("wbr"),s("HiJkLmNoP"),n("wbr"),s("-q")],-1),tn=s("."),on=l(`<p>Got the token? You can now code your bot in the <code>bot<wbr>.ts</code> file. You can copy the following example bot into that file, and pass your token to the <code>Bot</code> constructor:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Create an instance of the \`Bot\` class and pass your authentication token to it.</span>
<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- put your authentication token between the &quot;&quot;</span>

<span class="token comment">// You can now register listeners on your bot object \`bot\`.</span>
<span class="token comment">// grammY will call the listeners when users send messages to your bot.</span>

<span class="token comment">// Handle the /start command.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Welcome! Up and running.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Handle other messages.</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Got another message!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Now that you specified how to handle messages, you can start your bot.</span>
<span class="token comment">// This will connect to the Telegram servers and wait for messages.</span>

<span class="token comment">// Start the bot.</span>
bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can now run the bot by executing</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno run --allow-net bot.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>in your terminal. Done! \u{1F389}</p><p>Head over to Telegram to watch your bot respond to messages!</p><div class="custom-container tip"><p class="custom-container-title">Enabling Logging</p><p>You can enable basic logging by running</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">DEBUG</span><span class="token operator">=</span><span class="token string">&quot;grammy*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>in your terminal before you run your bot. This makes it easier to debug your bot.</p><p>You now need to run the bot using</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deno run --allow-net --allow-env bot.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>so grammY can detect that <code>DEBUG</code> is set.</p></div>`,7);function cn(ln,un){const u=o("AutotagPage"),c=o("ExternalLinkIcon"),p=o("RouterLink"),t=o("CodeGroupItem"),i=o("CodeGroup");return d(),m("div",null,[b,e(u,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),h,g,n("blockquote",null,[n("p",null,[v,n("a",_,[y,f,w,e(c)]),x,T,j,e(p,{to:"/guide/introduction.html"},{default:a(()=>[Y]),_:1}),q])]),S,e(i,null,{default:a(()=>[e(t,{title:"NPM",active:""},{default:a(()=>[B]),_:1}),e(t,{title:"Yarn"},{default:a(()=>[C]),_:1}),e(t,{title:"pnpm"},{default:a(()=>[D]),_:1})]),_:1}),N,E,n("p",null,[I,n("a",G,[H,L,F,e(c)]),P,A,J]),R,e(i,null,{default:a(()=>[e(t,{title:"TypeScript",active:""},{default:a(()=>[z]),_:1}),e(t,{title:"JavaScript"},{default:a(()=>[U]),_:1})]),_:1}),K,n("blockquote",null,[n("p",null,[V,n("a",O,[W,e(c)]),M])]),Q,n("p",null,[X,n("a",Z,[$,nn,sn,e(c)]),en,an,tn]),on])}const rn=r(k,[["render",cn],["__file","getting-started.html.vue"]]);export{rn as default};

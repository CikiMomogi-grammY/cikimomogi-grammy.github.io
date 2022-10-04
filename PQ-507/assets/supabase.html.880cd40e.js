import{_ as u,r as t,o as l,c as r,b as a,a as s,w as p,d as n,e as c}from"./app.9a621f1c.js";const d={},k=s("h1",{id:"hosting-supabase-edge-functions",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#hosting-supabase-edge-functions","aria-hidden":"true"},"#"),n(" Hosting: Supabase Edge Functions")],-1),h=n("This guide tells you how you can host your grammY bots on "),b={href:"https://supabase.com/",target:"_blank",rel:"noopener noreferrer"},m=n("Supabase"),g=n("."),_=n("Please note that you need to have a "),v={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},y=n("Git"),f=s("wbr",null,null,-1),w=n("Hub"),x=n(" account before you can use "),q={href:"https://supabase.com/docs/guides/functions",target:"_blank",rel:"noopener noreferrer"},T=n("Supabase Edge Functions"),E=n(". Moreover, Supabase Edge Functions are based on "),S={href:"https://deno.com/deploy",target:"_blank",rel:"noopener noreferrer"},j=n("Deno Deploy"),D=n(", so just like "),N=n("our Deno Deploy guide"),O=n(", this guide is only for Deno users of grammY."),F=s("p",null,"Supabase Edge Functions is ideal for most simple bots, and you should note that not all Deno features are available for apps running on Supabase Edge Functions. For example, there is no file system on Supabase Edge Functions. It\u2019s just like the other many serverless platforms, but dedicated for Deno apps.",-1),R=n("The result of this tutorial "),Y={href:"https://github.com/grammyjs/examples/tree/main/supabase-edge-functions",target:"_blank",rel:"noopener noreferrer"},B=n("can be seen in our example bots repository"),C=n("."),I=s("h2",{id:"setup",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#setup","aria-hidden":"true"},"#"),n(" Setup")],-1),P=n("In order to deploy a Supabase Edge Function, you will need to create a Supabase account, install their CLI, and create a Supabase project. You should first "),A={href:"https://supabase.com/docs/guides/functions#prerequisites",target:"_blank",rel:"noopener noreferrer"},K=n("follow their documentation"),L=n(" to set things up."),z=c(`<p>Create a new Supabase Function by running this command:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>supabase functions new telegram-bot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once you have created a Supabase Function project, you can write your bot.</p><h2 id="preparing-your-code" tabindex="-1"><a class="header-anchor" href="#preparing-your-code" aria-hidden="true">#</a> Preparing Your Code</h2>`,4),H=n("Remember that you need to "),U=n("run your bot on webhooks"),W=n(", so you should use "),M=s("code",null,[n("webhook"),s("wbr"),n("Callback")],-1),V=n(" and not call "),J=s("code",null,[n("bot"),s("wbr"),n(".start()")],-1),G=n(" in your code."),$=c(`<p>You can use this short example bot as a starting point.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.158.0/http/server.ts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bot<span class="token punctuation">,</span> webhookCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span>Deno<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;BOT_TOKEN&quot;</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Welcome! Up and running.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Pong! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handleUpdate <span class="token operator">=</span> <span class="token function">webhookCallback</span><span class="token punctuation">(</span>bot<span class="token punctuation">,</span> <span class="token string">&quot;std/http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">serve</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>req<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>searchParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span> <span class="token operator">!==</span> bot<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">&quot;not allowed&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token number">405</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">handleUpdate</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deploying" tabindex="-1"><a class="header-anchor" href="#deploying" aria-hidden="true">#</a> Deploying</h2><p>You can now deploy your bot to Supabase. Note that you will have to disable JWT authorization because Telegram uses a different way to make sure the requests are coming from Telegram. You can deploy the function using this command.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>supabase functions deploy --no-verify-jwt telegram-bot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Next, you need to give your bot token to Supabase so that your code has access to it as an environment variable.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Replace 123:aBcDeF-gh with your real bot token.</span>
supabase secrets <span class="token builtin class-name">set</span> <span class="token assign-left variable">BOT_TOKEN</span><span class="token operator">=</span><span class="token number">123</span>:aBcDeF-gh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Your Supabase Function is now working. All that\u2019s left to do is to tell Telegram where to send the updates. You can do this by calling <code>set<wbr>Webhook</code>. For example, open a new tab in your browser and visit this URL:</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>https://api.telegram.org/bot&lt;BOT_TOKEN&gt;/setWebhook?url=https://&lt;PROJECT_NAME&gt;.functions.supabase.co/telegram-bot?secret=&lt;BOT_TOKEN&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Replace <code>&lt;BOT<wbr>_TOKEN&gt;</code> with your real bot token. Also, replace the second occurrence of <code>&lt;BOT<wbr>_TOKEN&gt;</code> with your real bot token. Replace <code>&lt;PROJECT<wbr>_NAME&gt;</code> with the name of your Supabase project.</p><p>You should now see this in your browser window.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;ok&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Webhook was set&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Done! Your bot is working now. Head over to Telegram and watch it respond to messages!</p>`,13);function Q(X,Z){const i=t("AutotagPage"),e=t("ExternalLinkIcon"),o=t("RouterLink");return l(),r("div",null,[k,a(i,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),s("p",null,[h,s("a",b,[m,a(e)]),g]),s("p",null,[_,s("a",v,[y,f,w,a(e)]),x,s("a",q,[T,a(e)]),E,s("a",S,[j,a(e)]),D,a(o,{to:"/hosting/deno-deploy.html"},{default:p(()=>[N]),_:1}),O]),F,s("p",null,[R,s("a",Y,[B,a(e)]),C]),I,s("p",null,[P,s("a",A,[K,a(e)]),L]),z,s("blockquote",null,[s("p",null,[H,a(o,{to:"/guide/deployment-types.html#how-to-use-webhooks"},{default:p(()=>[U]),_:1}),W,M,V,J,G])]),$])}const sn=u(d,[["render",Q],["__file","supabase.html.vue"]]);export{sn as default};

import{_ as c,r as t,o as p,c as r,b as s,a as n,w as d,d as e,e as a}from"./app.9a621f1c.js";const u={},h=n("h1",{id:"hosting-deno-deploy",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hosting-deno-deploy","aria-hidden":"true"},"#"),e(" Hosting: Deno Deploy")],-1),k=e("This guide tells you about the ways you can host your grammY bots on "),m={href:"https://deno.com/deploy",target:"_blank",rel:"noopener noreferrer"},_=e("Deno Deploy"),b=e("."),y=e("Please note that this guide is only for Deno users, and you need to have a "),g={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},f=e("Git"),v=n("wbr",null,null,-1),w=e("Hub"),D=e(" account for creating a "),x={href:"https://deno.com/deploy",target:"_blank",rel:"noopener noreferrer"},q=e("Deno Deploy"),j=e(" account."),R=n("p",null,"Deno Deploy is ideal for most simple bots, and you should note that not all Deno features are available for apps running on Deno Deploy. For example, there is no file system on Deno Deploy. It\u2019s just like the other many serverless platforms, but dedicated for Deno apps.",-1),T=e("The result of this tutorial "),C={href:"https://github.com/grammyjs/examples/tree/main/deno-deploy",target:"_blank",rel:"noopener noreferrer"},I=e("can be seen in our example bots repository"),E=e("."),P=n("h2",{id:"preparing-your-code",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#preparing-your-code","aria-hidden":"true"},"#"),e(" Preparing Your Code")],-1),A=e("Remember that you need to "),L=e("run your bot on webhooks"),N=e(", so you should use "),H=n("code",null,[e("webhook"),n("wbr"),e("Callback")],-1),Y=e(" and not call "),G=n("code",null,[e("bot"),n("wbr"),e(".start()")],-1),U=e(" in your code."),z=a(`<ol><li>Make sure that you have a file which exports your <code>Bot</code> object, so that you can import it later to run it.</li><li>Create a file named <code>mod<wbr>.ts</code> or <code>mod<wbr>.js</code>, or actually any name you like (but you should be remembering and using this as the main file to deploy), with the following content:</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.158.0/http/server.ts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> webhookCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// You might modify this to the correct way to import your \`Bot\` object.</span>
<span class="token keyword">import</span> bot <span class="token keyword">from</span> <span class="token string">&quot;./bot.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> handleUpdate <span class="token operator">=</span> <span class="token function">webhookCallback</span><span class="token punctuation">(</span>bot<span class="token punctuation">,</span> <span class="token string">&quot;std/http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">serve</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>req<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">URL</span></span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>pathname<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">===</span> bot<span class="token punctuation">.</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">handleUpdate</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We advise you to have your handler on some secret path rather than the root (<code>/</code>). Here, we are using the bot token (<code>/&lt;bot token&gt;</code>).</p><h2 id="deploying" tabindex="-1"><a class="header-anchor" href="#deploying" aria-hidden="true">#</a> Deploying</h2><h3 id="method-1-with-github" tabindex="-1"><a class="header-anchor" href="#method-1-with-github" aria-hidden="true">#</a> Method 1: With GitHub</h3><blockquote><p>This is the recommended method, and the easiest one to go with. The main advantage of following this method is that Deno Deploy will watch for changes in your repository which includes your bot code, and it will deploy new versions automatically.</p></blockquote><ol><li>Create a repository on GitHub, it can be either private or public.</li><li>Push your code.</li></ol><blockquote><p>It is recommended that you have a single stable branch and you do your testing stuff in other branches, so that you won\u2019t get some unexpected things happen.</p></blockquote>`,8),M={start:"3"},V=e("Visit your "),B={href:"https://dash.deno.com/projects",target:"_blank",rel:"noopener noreferrer"},S=e("Deno Deploy dashboard"),W=e("."),F=n("li",null,"Click on \u201CNew Project\u201D, and go to the \u201CDeploy from GitHub repository\u201D section.",-1),K=n("li",null,"Install the GitHub app on your account or organization, and choose your repository.",-1),O=n("li",null,[e("Select the branch you want to deploy, and then choose your "),n("code",null,[e("mod"),n("wbr"),e(".ts")]),e(" file to be deployed.")],-1),J=n("h3",{id:"method-2-with-deployctl",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#method-2-with-deployctl","aria-hidden":"true"},"#"),e(" Method 2: With "),n("code",null,"deployctl")],-1),Q=n("blockquote",null,[n("p",null,"This is a method for more advanced users. It allows you to deploy the project via the command line or Github Actions.")],-1),X=e("Visit your "),Z={href:"https://dash.deno.com/projects",target:"_blank",rel:"noopener noreferrer"},$=e("Deno Deploy dashboard"),nn=e("."),en=n("li",null,"Click \u201CNew Project\u201D, and then \u201CEmpty Project\u201D.",-1),sn=e("Install "),on={href:"https://github.com/denoland/deployctl",target:"_blank",rel:"noopener noreferrer"},tn=n("code",null,"deployctl",-1),an=e("."),ln={href:"https://dash.deno.com/user/access-tokens",target:"_blank",rel:"noopener noreferrer"},cn=e("Create an access token"),pn=e("."),rn=n("li",null,"Run the following command:",-1),dn=a(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>deployctl deploy <span class="token parameter variable">--project</span> <span class="token operator">&lt;</span>project<span class="token operator">&gt;</span> ./mod.ts <span class="token parameter variable">--prod</span> <span class="token parameter variable">--token</span> <span class="token operator">&lt;</span>token<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),un={start:"6"},hn=e("To set up Github Actions, refer to "),kn={href:"https://github.com/denoland/deployctl/blob/main/action/README.md",target:"_blank",rel:"noopener noreferrer"},mn=e("this"),_n=e("."),bn=a(`<h3 id="method-3-with-url" tabindex="-1"><a class="header-anchor" href="#method-3-with-url" aria-hidden="true">#</a> Method 3: With URL</h3><blockquote><p>All you need for following this method to deploy your grammY bot, is a public URL to your <code>mod<wbr>.ts</code> file.</p></blockquote><ol><li>Create a new project on Deno Deploy.</li><li>Click \u201CDeploy URL\u201D.</li><li>Input the public URL to your <code>mod<wbr>.ts</code> file, and click \u201CDeploy\u201D.</li></ol><h3 id="note" tabindex="-1"><a class="header-anchor" href="#note" aria-hidden="true">#</a> Note</h3><p>After getting your app running, you should configure your bot\u2019s webhook settings to point to your app. To do that, send a request to</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>https://api.telegram.org/bot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>token</span><span class="token punctuation">&gt;</span></span>/setWebhook?url=<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>replacing <code>&lt;token&gt;</code> with your bot\u2019s token, and <code>&lt;url&gt;</code> with the full URL of your app along with the path to the webhook handler.</p>`,7);function yn(gn,fn){const l=t("AutotagPage"),o=t("ExternalLinkIcon"),i=t("RouterLink");return p(),r("div",null,[h,s(l,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),n("p",null,[k,n("a",m,[_,s(o)]),b]),n("p",null,[y,n("a",g,[f,v,w,s(o)]),D,n("a",x,[q,s(o)]),j]),R,n("p",null,[T,n("a",C,[I,s(o)]),E]),P,n("blockquote",null,[n("p",null,[A,s(i,{to:"/guide/deployment-types.html#how-to-use-webhooks"},{default:d(()=>[L]),_:1}),N,H,Y,G,U])]),z,n("ol",M,[n("li",null,[V,n("a",B,[S,s(o)]),W]),F,K,O]),J,Q,n("ol",null,[n("li",null,[X,n("a",Z,[$,s(o)]),nn]),en,n("li",null,[sn,n("a",on,[tn,s(o)]),an]),n("li",null,[n("a",ln,[cn,s(o)]),pn]),rn]),dn,n("ol",un,[n("li",null,[hn,n("a",kn,[mn,s(o)]),_n])]),bn])}const wn=c(u,[["render",yn],["__file","deno-deploy.html.vue"]]);export{wn as default};
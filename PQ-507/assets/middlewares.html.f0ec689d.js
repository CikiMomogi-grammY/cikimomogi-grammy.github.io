import{_ as c,r as e,o as l,c as d,b as a,a as n,w as p,d as s,e as u}from"./app.9a621f1c.js";const r={},h=n("h1",{id:"\u4E00\u5957\u6709\u7528\u7684\u4E2D\u95F4\u4EF6",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4E00\u5957\u6709\u7528\u7684\u4E2D\u95F4\u4EF6","aria-hidden":"true"},"#"),s(" \u4E00\u5957\u6709\u7528\u7684\u4E2D\u95F4\u4EF6")],-1),m=u(`<p>\u6211\u4E00\u76F4\u5728\u4E3A\u6211\u6240\u6709\u7684 bot \u5199\u91CD\u590D\u7684\u4E2D\u95F4\u4EF6\uFF0C\u6240\u4EE5\u6211\u51B3\u5B9A\u628A\u5B83\u4EEC\u5168\u90E8\u63D0\u53D6\u5230\u4E00\u4E2A\u5355\u72EC\u7684\u5305\u4E2D\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p><code>yarn add grammy<wbr>-middlewares</code></p><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><p>\u6240\u6709\u7684\u4E2D\u95F4\u4EF6\u8BBF\u95EE\u5668\u90FD\u662F\u5DE5\u5382\uFF0C\u5C3D\u7BA1\u4E0D\u662F\u6240\u6709\u7684\u4E2D\u95F4\u4EF6\u90FD\u5FC5\u987B\u662F\u3002\u4F46\u6211\u51B3\u5B9A\u8BA9 API \u5177\u6709\u4E00\u81F4\u6027\u3002</p><p>\u6709\u4E9B\u5DE5\u5382\u6D88\u8D39\u53EF\u9009\u6216\u5FC5\u987B\u7684\u53C2\u6570\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  ignoreOld<span class="token punctuation">,</span>
  onlyAdmin<span class="token punctuation">,</span>
  onlyPublic<span class="token punctuation">,</span>
  onlySuperAdmin<span class="token punctuation">,</span>
  sequentialize<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy-middlewares&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">ignoreOld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">onlyAdmin</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Only admins can do this&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">onlyPublic</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;You can only use public chats&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">onlySuperAdmin</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span><span class="token constant">SUPER_ADMIN_ID</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">sequentialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6</h2><h3 id="ignoreold" tabindex="-1"><a class="header-anchor" href="#ignoreold" aria-hidden="true">#</a> <code>ignore<wbr>Old</code></h3><p>\u5FFD\u7565\u65E7\u7684 updates\uFF0C\u5F53 bot \u5DF2\u7ECF\u505C\u6B62\u5DE5\u4F5C\u4E00\u6BB5\u65F6\u95F4\u65F6\u5F88\u6709\u7528\u3002\u4F60\u53EF\u4EE5\u9009\u62E9\u6307\u5B9A\u8D85\u65F6\u65F6\u95F4\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\uFF0C\u9ED8\u8BA4\u4E3A <code>5 * 60</code>\u3002</p><h3 id="onlyadmin" tabindex="-1"><a class="header-anchor" href="#onlyadmin" aria-hidden="true">#</a> <code>only<wbr>Admin</code></h3><p>\u68C0\u67E5\u7528\u6237\u662F\u5426\u662F\u7BA1\u7406\u5458\u3002\u4F60\u53EF\u4EE5\u9009\u62E9\u6307\u5B9A <code>error<wbr>Handler</code>\uFF0C\u5982\u679C\u7528\u6237\u4E0D\u662F\u7BA1\u7406\u5458\u65F6\uFF0C\u5B83\u5C06\u5728\u4E0A\u4E0B\u6587\u4E2D\u8C03\u7528\u3002</p><h3 id="onlypublic" tabindex="-1"><a class="header-anchor" href="#onlypublic" aria-hidden="true">#</a> <code>only<wbr>Public</code></h3><p>\u68C0\u67E5\u662F\u5426\u662F\u7FA4\u7EC4\u6216\u9891\u9053\u3002\u4F60\u53EF\u4EE5\u9009\u62E9\u6307\u5B9A <code>error<wbr>Handler</code>\uFF0C\u5982\u679C\u4E0D\u662F\u7FA4\u7EC4\u6216\u9891\u9053\u65F6\uFF0C\u5B83\u5C06\u5728\u4E0A\u4E0B\u6587\u4E2D\u8C03\u7528\u3002</p><h3 id="onlysuperadmin" tabindex="-1"><a class="header-anchor" href="#onlysuperadmin" aria-hidden="true">#</a> <code>only<wbr>Super<wbr>Admin</code></h3><p>\u68C0\u67E5\u7528\u6237\u662F\u5426\u662F\u8D85\u7EA7\u7BA1\u7406\u5458\u3002\u4F60\u5FC5\u987B\u63D0\u4F9B\u8D85\u7EA7\u7BA1\u7406\u5458 id\u3002</p><h3 id="sequentialize" tabindex="-1"><a class="header-anchor" href="#sequentialize" aria-hidden="true">#</a> <code>sequentialize</code></h3>`,17),_=s("\u57FA\u672C\u7684 "),b=s("\u987A\u5E8F\u5316"),k=s(" \u4E2D\u95F4\u4EF6\uFF0C\u5C06\u804A\u5929 id \u4F5C\u4E3A\u4E00\u4E2A\u987A\u5E8F\u6807\u8BC6\u3002"),g=n("h2",{id:"\u63D2\u4EF6\u6982\u8FF0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u63D2\u4EF6\u6982\u8FF0","aria-hidden":"true"},"#"),s(" \u63D2\u4EF6\u6982\u8FF0")],-1),v=n("li",null,[s("\u540D\u5B57\uFF1A"),n("code",null,[s("grammy"),n("wbr"),s("-middlewares")])],-1),f=s("\u6E90\u7801\uFF1A"),y={href:"https://github.com/backmeupplz/grammy-middlewares",target:"_blank",rel:"noopener noreferrer"},w=s("https://"),x=n("wbr",null,null,-1),E=s("github"),A=n("wbr",null,null,-1),z=s(".com"),q=n("wbr",null,null,-1),I=s("/backmeupplz"),P=n("wbr",null,null,-1),j=s("/grammy"),N=n("wbr",null,null,-1),T=s("-middlewares"),B=s("\u53C2\u8003\uFF1A"),D={href:"https://github.com/backmeupplz/grammy-middlewares",target:"_blank",rel:"noopener noreferrer"},R=s("https://"),O=n("wbr",null,null,-1),S=s("github"),L=n("wbr",null,null,-1),Y=s(".com"),C=n("wbr",null,null,-1),F=s("/backmeupplz"),H=n("wbr",null,null,-1),K=s("/grammy"),V=n("wbr",null,null,-1),M=s("-middlewares");function G(U,J){const o=e("AutotagPage"),i=e("RouterLink"),t=e("ExternalLinkIcon");return l(),d("div",null,[h,a(o,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),m,n("p",null,[_,a(i,{to:"/zh/advanced/scaling.html#%E5%B9%B6%E5%8F%91%E6%98%AF%E5%9B%B0%E9%9A%BE%E7%9A%84"},{default:p(()=>[b]),_:1}),k]),g,n("ul",null,[v,n("li",null,[f,n("a",y,[w,x,E,A,z,q,I,P,j,N,T,a(t)])]),n("li",null,[B,n("a",D,[R,O,S,L,Y,C,F,H,K,V,M,a(t)])])])])}const W=c(r,[["render",G],["__file","middlewares.html.vue"]]);export{W as default};

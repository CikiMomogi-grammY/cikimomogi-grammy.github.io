import{_ as l,r as t,o as d,c as u,b as e,a as n,w as c,d as a,e as r}from"./app.9837a88d.js";const p={},m=n("h1",{id:"kumpulan-middleware-yang-berguna",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kumpulan-middleware-yang-berguna","aria-hidden":"true"},"#"),a(" Kumpulan Middleware yang Berguna")],-1),h=n("p",null,"Capek menulis middleware yang sama berulang kali? Yup, begitu juga dengan kami. Oleh karena itu, kali ini kami memutuskan untuk mengumpulkan berbagai middleware ke dalam sebuah package terpisah.",-1),k=n("h2",{id:"instalasi",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#instalasi","aria-hidden":"true"},"#"),a(" Instalasi")],-1),g=n("p",null,[n("code",null,[a("yarn add grammy"),n("wbr"),a("-middlewares")])],-1),b=n("h2",{id:"penggunaan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#penggunaan","aria-hidden":"true"},"#"),a(" Penggunaan")],-1),_=a("Semua middleware "),y={href:"https://www.codepolitan.com/sedikit-lebih-dalam-dengan-accessor-dan-mutator-58a192fa846f3/",target:"_blank",rel:"noopener noreferrer"},w=a("accessor"),f=a(" dapat memproduksi sesuatu, meskipun tidak semua middleware diharuskan seperti itu. Kita bisa menganggapnya sebagai "),v=n("em",null,"factory",-1),x=a(". Kami memutuskan untuk membuat API menjadi seragam."),z=r(`<p>Beberapa factory bisa menggunakan parameter wajib ataupun opsional.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  ignoreOld<span class="token punctuation">,</span>
  onlyAdmin<span class="token punctuation">,</span>
  onlyPublic<span class="token punctuation">,</span>
  onlySuperAdmin<span class="token punctuation">,</span>
  sequentialize<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy-middlewares&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// ...</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
  <span class="token function">ignoreOld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">onlyAdmin</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Hanya admin yang bisa melakukan ini&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">onlyPublic</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Kamu hanya bisa menggunakan chat publik&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">onlySuperAdmin</span><span class="token punctuation">(</span>env<span class="token punctuation">.</span><span class="token constant">SUPER_ADMIN_ID</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">sequentialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> Middleware</h2><h3 id="ignoreold" tabindex="-1"><a class="header-anchor" href="#ignoreold" aria-hidden="true">#</a> <code>ignore<wbr>Old</code></h3><p>Abaikan update yang telah usang. Ini berguna ketika bot mengalami down untuk beberapa saat. Kamu juga bisa menentukan waktu timeout-nya dalam satuan detik (bawaanya selama 5 menit).</p><h3 id="onlyadmin" tabindex="-1"><a class="header-anchor" href="#onlyadmin" aria-hidden="true">#</a> <code>only<wbr>Admin</code></h3><p>Periksa apakah user tersebut adalah seorang admin. Kamu bisa menentukan <code>error<wbr>Handler</code> yang nantinya akan dipanggil bersama dengan context-nya jika user tersebut bukan seorang admin.</p><h3 id="onlypublic" tabindex="-1"><a class="header-anchor" href="#onlypublic" aria-hidden="true">#</a> <code>only<wbr>Public</code></h3><p>Periksa apakah ia sebuah grup atau channel. Kamu bisa menentukan <code>error<wbr>Handler</code> yang nantinya akan dipanggil bersama dengan context-nya jika ia bukan sebuah grup ataupun channel.</p><h3 id="onlysuperadmin" tabindex="-1"><a class="header-anchor" href="#onlysuperadmin" aria-hidden="true">#</a> <code>only<wbr>Super<wbr>Admin</code></h3><p>Periksa apakah user tersebut adalah seorang super admin. Kamu perlu menyediakan id super admin-nya</p><h3 id="sequentialize" tabindex="-1"><a class="header-anchor" href="#sequentialize" aria-hidden="true">#</a> <code>sequentialize</code></h3>`,12),A=a("Middleware "),P=a("sequentialize"),j=a(" sederhana yang menggunakan chat id sebagai identifier-nya sequential."),q=n("h2",{id:"ringkasan-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),a(" Ringkasan Plugin")],-1),I=n("li",null,[a("Nama: "),n("code",null,[a("grammy"),n("wbr"),a("-middlewares")])],-1),E=a("Sumber: "),K={href:"https://github.com/backmeupplz/grammy-middlewares",target:"_blank",rel:"noopener noreferrer"},N=a("https://"),R=n("wbr",null,null,-1),S=a("github"),T=n("wbr",null,null,-1),D=a(".com"),O=n("wbr",null,null,-1),C=a("/backmeupplz"),L=n("wbr",null,null,-1),Y=a("/grammy"),B=n("wbr",null,null,-1),H=a("-middlewares"),M=a("Referensi: "),V={href:"https://github.com/backmeupplz/grammy-middlewares",target:"_blank",rel:"noopener noreferrer"},F=a("https://"),G=n("wbr",null,null,-1),U=a("github"),J=n("wbr",null,null,-1),Q=a(".com"),W=n("wbr",null,null,-1),X=a("/backmeupplz"),Z=n("wbr",null,null,-1),$=a("/grammy"),nn=n("wbr",null,null,-1),an=a("-middlewares");function en(sn,tn){const i=t("AutotagPage"),s=t("ExternalLinkIcon"),o=t("RouterLink");return d(),u("div",null,[m,e(i,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),h,k,g,b,n("p",null,[_,n("a",y,[w,e(s)]),f,v,x]),z,n("p",null,[A,e(o,{to:"/id/advanced/scaling.html#concurrency-itu-sulit"},{default:c(()=>[P]),_:1}),j]),q,n("ul",null,[I,n("li",null,[E,n("a",K,[N,R,S,T,D,O,C,L,Y,B,H,e(s)])]),n("li",null,[M,n("a",V,[F,G,U,J,Q,W,X,Z,$,nn,an,e(s)])])])])}const ln=l(p,[["render",en],["__file","middlewares.html.vue"]]);export{ln as default};

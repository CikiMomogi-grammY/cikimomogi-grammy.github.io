import{_ as r,r as o,o as u,c as k,a as n,b as a,w as t,d as s,e as l}from"./app.cd079934.js";const d={},m=n("h1",{id:"kontrol-flood-transformer-throttler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kontrol-flood-transformer-throttler","aria-hidden":"true"},"#"),s(" Kontrol Flood ("),n("code",null,[s("transformer"),n("wbr"),s("-throttler")]),s(")")],-1),b=s("Plugin ini menjaga bot kamu agar terhindar dari "),g={href:"https://core.telegram.org/bots/faq#my-bot-is-hitting-limits-how-do-i-avoid-this",target:"_blank",rel:"noopener noreferrer"},h=s("rate limit"),v=s("\u2014lihat "),_=s("materi tingkat lanjut berikut"),f=s("\u2014dengan cara membuat daftar antrian API request yang keluar menggunakan "),y={href:"https://github.com/SGrondin/bottleneck",target:"_blank",rel:"noopener noreferrer"},w=s("Bottleneck"),T=s("."),x={class:"custom-container warning"},B=n("p",{class:"custom-container-title"},"Aturan Pembatasan API yang Tidak Didokumentasikan",-1),j=s("Telegram juga memiliki beberapa aturan rate limit yang tidak didokumentasikan. Sayangnya, aturan-aturan tersebut "),O=n("strong",null,"tidak diperhitungkan",-1),C=s(" oleh throttler. Oleh karena itu, kalau kamu mengalami error floodwait untuk beberapa pemanggilan API, misalnya "),K=n("code",null,[s("api"),n("wbr"),s(".send"),n("wbr"),s("Contact")],-1),E=s(", maka kami menyarankan untuk memasang "),N=s("plugin auto"),A=n("wbr",null,null,-1),I=s("-retry"),P=s(" dan plugin ini secara beriringan."),S=n("h2",{id:"penggunaan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#penggunaan","aria-hidden":"true"},"#"),s(" Penggunaan")],-1),R=n("p",null,"Perlu diketahui, pengaturan opsi bawaan plugin ini menggunakan aturan rate limit asli yang diterapkan oleh Telegram. Semestinya, pengaturan bawaan tersebut sudah cukup sesuai untuk sebagian besar bot. Berikut contoh penggunaan plugin ini dengan menggunakan opsi bawaan:",-1),G=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" run "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" apiThrottler "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/transformer-throttler"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" botToken "),n("span",{class:"token operator"},"="),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"BOT_TOKEN"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("botToken"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN diperlukan!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),s("botToken"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" throttler "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"apiThrottler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("throttler"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/example"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Aku di-throttler."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Kalau kamu menggunakan throttler, kemungkinan besar kamu juga ingin"),s(`
`),n("span",{class:"token comment"},"// menggunakan runner untuk menangani update secara bersamaan."),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" run "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" apiThrottler "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/transformer-throttler"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" botToken "),n("span",{class:"token operator"},"="),s(" process"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"BOT_TOKEN"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("botToken"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN diperlukan!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),s("botToken"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" throttler "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"apiThrottler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("throttler"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/example"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Aku di-throttler."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Kalau kamu menggunakan throttler, kemungkinan besar kamu juga ingin"),s(`
`),n("span",{class:"token comment"},"// menggunakan runner untuk menangani update secara bersamaan."),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" run "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_runner@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" apiThrottler "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_transformer_throttler@v1.1.2/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" botToken "),n("span",{class:"token operator"},"="),s(" Deno"),n("span",{class:"token punctuation"},"."),s("env"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("botToken"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"throw"),s(),n("span",{class:"token function"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN diperlukan!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),s("botToken"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" throttler "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"apiThrottler"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("throttler"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/example"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Aku di-throttler."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Kalau kamu menggunakan throttler, kemungkinan besar kamu juga ingin"),s(`
`),n("span",{class:"token comment"},"// menggunakan runner untuk menangani update secara bersamaan."),s(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),L=l(`<h2 id="konfigurasi" tabindex="-1"><a class="header-anchor" href="#konfigurasi" aria-hidden="true">#</a> Konfigurasi</h2><p>Throttler ini menerima sebuah argument opsional dalam bentuk berikut:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ThrottlerOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  global<span class="token operator">?</span><span class="token operator">:</span> Bottleneck<span class="token punctuation">.</span>ConstructorOptions<span class="token punctuation">;</span> <span class="token comment">// Untuk men-throttler semua pemanggilan api</span>
  group<span class="token operator">?</span><span class="token operator">:</span> Bottleneck<span class="token punctuation">.</span>ConstructorOptions<span class="token punctuation">;</span> <span class="token comment">// Untuk men-throttler pesan grup yang keluar</span>
  out<span class="token operator">?</span><span class="token operator">:</span> Bottleneck<span class="token punctuation">.</span>ConstructorOptions<span class="token punctuation">;</span> <span class="token comment">// Untuk men-throttler pesan pribadi yang keluar</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),V=s("Daftar lengkap object property apa saja yang tersedia untuk "),U=n("code",null,[s("Bottleneck"),n("wbr"),s(".Constructor"),n("wbr"),s("Options")],-1),J=s(" bisa ditemukan di "),F={href:"https://github.com/SGrondin/bottleneck#constructor",target:"_blank",rel:"noopener noreferrer"},z=s("Bottleneck"),H=s("."),M=l(`<p>Jika tidak ada argument yang disertakan, throttler akan menggunakan konfigurasi bawaan. Berikut konfigurasi bawaannya:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Throttler Keluaran Secara Keseluruhan</span>
<span class="token keyword">const</span> globalConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  reservoir<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// jumlah tugas baru yang throttler terima di awal</span>
  reservoirRefreshAmount<span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// jumlah tugas yang throttler terima setelah diperbarui</span>
  reservoirRefreshInterval<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// rentang waktu pembaruan reservoir dalam milidetik</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Throttler Keluaran Grup</span>
<span class="token keyword">const</span> groupConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  maxConcurrent<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// hanya 1 tugas dalam satu waktu</span>
  minTime<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// tunggu sekian milidetik untuk satu tugas</span>
  reservoir<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// jumlah tugas baru yang throttler terima di awal</span>
  reservoirRefreshAmount<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">// jumlah tugas yang throttler terima setelah diperbarui</span>
  reservoirRefreshInterval<span class="token operator">:</span> <span class="token number">60000</span><span class="token punctuation">,</span> <span class="token comment">// rentang waktu pembaruan reservoir dalam milidetik</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// Throttler Keluaran Pribadi</span>
<span class="token keyword">const</span> outConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  maxConcurrent<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// hanya 1 tugas dalam satu waktu</span>
  minTime<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// tunggu sekian milidetik untuk satu tugas</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ringkasan-plugin" tabindex="-1"><a class="header-anchor" href="#ringkasan-plugin" aria-hidden="true">#</a> Ringkasan Plugin</h2>`,3),Q=n("li",null,[s("Nama: "),n("code",null,[s("transformer"),n("wbr"),s("-throttler")])],-1),W=s("Sumber: "),X={href:"https://github.com/grammyjs/transformer-throttler",target:"_blank",rel:"noopener noreferrer"},Y=s("https://"),Z=n("wbr",null,null,-1),$=s("github"),nn=n("wbr",null,null,-1),sn=s(".com"),an=n("wbr",null,null,-1),tn=s("/grammyjs"),en=n("wbr",null,null,-1),on=s("/transformer"),cn=n("wbr",null,null,-1),ln=s("-throttler"),pn=s("Referensi: "),rn={href:"https://doc.deno.land/https://deno.land/x/grammy_transformer_throttler/mod.ts",target:"_blank",rel:"noopener noreferrer"},un=l("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_transformer<wbr>_throttler<wbr>/mod<wbr>.ts",25);function kn(dn,mn){const e=o("ExternalLinkIcon"),p=o("RouterLink"),c=o("CodeGroupItem"),i=o("CodeGroup");return u(),k("div",null,[m,n("p",null,[b,n("a",g,[h,a(e)]),v,a(p,{to:"/id/advanced/flood.html"},{default:t(()=>[_]),_:1}),f,n("a",y,[w,a(e)]),T]),n("div",x,[B,n("p",null,[j,O,C,K,E,a(p,{to:"/id/plugins/auto-retry.html"},{default:t(()=>[N,A,I]),_:1}),P])]),S,R,a(i,null,{default:t(()=>[a(c,{title:"TypeScript",active:""},{default:t(()=>[G]),_:1}),a(c,{title:"JavaScript"},{default:t(()=>[q]),_:1}),a(c,{title:"Deno"},{default:t(()=>[D]),_:1})]),_:1}),L,n("p",null,[V,U,J,n("a",F,[z,a(e)]),H]),M,n("ul",null,[Q,n("li",null,[W,n("a",X,[Y,Z,$,nn,sn,an,tn,en,on,cn,ln,a(e)])]),n("li",null,[pn,n("a",rn,[un,a(e)])])])])}const gn=r(d,[["render",kn],["__file","transformer-throttler.html.vue"]]);export{gn as default};
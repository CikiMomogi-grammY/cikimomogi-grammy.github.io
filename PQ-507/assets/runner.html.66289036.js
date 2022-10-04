import{_ as p,r as i,o as d,c as k,b as e,a as n,w as t,d as a,e as r}from"./app.9a621f1c.js";const m={},g=n("h1",{id:"concurrency-menggunakan-grammy-runner-runner",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#concurrency-menggunakan-grammy-runner-runner","aria-hidden":"true"},"#"),a(" Concurrency Menggunakan grammY runner ("),n("code",null,"runner"),a(")")],-1),h=a("Plugin ini dapat digunakan untuk memproses berbagai pesan secara bersamaan ketika bot dijalankan "),b=a("menggunakan long polling"),_=a("."),y=a("Sebelum menggunakan grammY runner, pastikan kamu paham betul materi "),f=a("Peningkatan II"),w=a("."),v=n("h2",{id:"kenapa-kita-perlu-runner",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#kenapa-kita-perlu-runner","aria-hidden":"true"},"#"),a(" Kenapa Kita Perlu Runner")],-1),x=n("p",null,"Di saat kamu meng-hosting bot menggunakan long polling lalu kamu ingin melakukan scale up dengan cara mengubah pemrosesan update dari yang sebelumnya berurutan menjadi bersamaan, maka ada beberapa tantangan yang akan dihadapi oleh bot kamu:",-1),j=n("ul",null,[n("li",null,"Apakah nantinya akan terjadi race condition?"),n("li",null,[a("Masih bisakah kita menggunakan "),n("code",null,"await"),a(" untuk middleware stack? Kita memerlukannya untuk menangani error!")]),n("li",null,"Bagaimana jika middleware tidak dapat menyelesaikan tugasnya, apakah ia akan menghalangi tugas bot yang lain?"),n("li",null,"Masih bisakah kita mengendalikan beban server?")],-1),S=a("Seperti yang kamu lihat, kita perlu sebuah solusi untuk menyelesaikan permasalahan di atas agar long polling pada bot dapat berjalan dengan baik. Masalah ini sangat berbeda dibandingkan dengan menyusun sebuah middleware ataupun mengirim pesan ke Telegram. Karena alasan tersebut, package inti grammY tidak dapat menyelesaikannya. Sebagai gantinya, kamu bisa menggunakan "),I={href:"https://github.com/grammyjs/runner",target:"_blank",rel:"noopener noreferrer"},P=a("grammY runner"),A=a(". Ia juga memiliki "),B={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts",target:"_blank",rel:"noopener noreferrer"},R=a("Referensi API"),T=a("-nya sendiri."),C=n("h2",{id:"cara-penggunaan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cara-penggunaan","aria-hidden":"true"},"#"),a(" Cara Penggunaan")],-1),Y=n("p",null,"Berikut contoh sederhananya:",-1),K=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),a(`
`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Tambahkan middleware seperti biasanya."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Pesan diterima!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Jalankan secara bersamaan!"),a(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),a(`
`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Tambahkan middleware seperti biasanya."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Pesan diterima!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Jalankan secara bersamaan!"),a(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy_runner@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),a(`
`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Tambahkan middleware seperti biasanya."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Pesan diterima!"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Jalankan secara bersamaan!"),a(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=r(`<p>Tentu saja, meskipun terlihat sangat sederhana, sebenarnya banyak pemrosesan yang terjadi di balik layar.</p><h2 id="apa-yang-sebenarnya-terjadi-di-balik-layar" tabindex="-1"><a class="header-anchor" href="#apa-yang-sebenarnya-terjadi-di-balik-layar" aria-hidden="true">#</a> Apa yang Sebenarnya Terjadi di Balik Layar</h2><p>Setiap runner terdiri atas tiga bagian yang berbeda:</p><ol><li><strong>Source</strong> mengambil update dari Telegram.</li><li><strong>Sink</strong> menyuplai update ke bot instance.</li><li>Komponen <strong>runner</strong> menghubungkan source dan sink, serta memungkinkan kamu untuk memulai dan menghentikan bot.</li></ol><div class="language-asciiart ext-asciiart"><pre class="language-asciiart"><code>api.telegram.org &lt;\u2014&gt; source &lt;\u2014&gt; runner &lt;\u2014&gt; sink &lt;\u2014&gt; bot
</code></pre></div><h3 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h3>`,6),U=a("grammY runner dilengkapi dengan satu source bawaan yang bisa beroperasi di berbagai "),z=n("code",null,[a("Update"),n("wbr"),a("Supplier")],-1),N=a(" ("),L={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSupplier",target:"_blank",rel:"noopener noreferrer"},M=a("API reference"),G=a("). Update supplier semacam itu sangat mudah dibuat dari bot instance. Jika kamu ingin membuatnya, pastikan untuk mempelajari "),J=n("code",null,[a("create"),n("wbr"),a("Update"),n("wbr"),a("Fetcher")],-1),F=a(" ("),H={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/createUpdateFetcher",target:"_blank",rel:"noopener noreferrer"},V=a("referensi API"),O=a(")."),Q=n("p",null,[a("Source adalah sebuah async iterator untuk kumpulan update yang bisa diaktifkan ataupun dinonaktifkan. Selain itu, kamu bisa melakukan "),n("code",null,"close"),a(" untuk memutuskan sambungan dari server Telegram.")],-1),W=n("h3",{id:"sink",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sink","aria-hidden":"true"},"#"),a(" Sink")],-1),X=a("grammY runner dilengkapi dengan tiga kemungkinan implementasi sink, yaitu berurutan (sama seperti "),Z=n("code",null,[a("bot"),n("wbr"),a(".start()")],-1),$=a("), perkelompok atau batch (berguna untuk kompatibilitas dengan framework lain), dan bersamaan (yang digunakan oleh "),nn=n("code",null,"run",-1),an=a("). Semuanya beroperasi di object "),en=n("code",null,[a("Update"),n("wbr"),a("Consumer")],-1),sn=a(" ("),tn={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateConsumer",target:"_blank",rel:"noopener noreferrer"},on=a("Referensi API"),rn=a(") yang bisa dibuat dengan mudah dari sebuah bot instance. Jika kamu ingin membuatnya, pastikan untuk mempelajari "),un=n("code",null,[a("handle"),n("wbr"),a("Update")],-1),ln=a(" di "),cn=n("code",null,"Bot",-1),pn=a(" instance grammY ("),dn={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/Bot#handleUpdate",target:"_blank",rel:"noopener noreferrer"},kn=a("API reference"),mn=a(")."),gn=a("Sink berisi sebuah queue ("),hn={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/DecayingDeque",target:"_blank",rel:"noopener noreferrer"},bn=a("referensi API"),_n=a(") untuk tiap-tiap update yang sedang diproses. Update baru yang ditambahkan ke queue akan langsung ditangani oleh update consumer, lalu ia akan mengembalikan sebuah promise yang akan terselesaikan segera setelah kapasitas queque tersedia lagi. Angka integral yang terselesaikan menentukan ruang kosong tersebut. Pengaturan batas concurrency untuk grammY runner akan dipatuhi melalui queue instance yang bersangkutan."),yn=r('<p>Queue juga membuang update yang membutuhkan waktu pemrosesan yang terlalu lama, untuk itu kamu bisa menentukan sebuah <code>timeout<wbr>Handler</code> ketika membuat sink yang bersangkutan. Tentu saja, kamu sebaiknya juga menyediakan sebuah error handler ketika membuat sebuah sink.</p><p>Kalau kamu menggunakan <code>run(bot)</code>, maka error handler dari <code>bot<wbr>.catch</code> akan digunakan.</p><h3 id="runner" tabindex="-1"><a class="header-anchor" href="#runner" aria-hidden="true">#</a> Runner</h3><p>Runner adalah sebuah loop biasa yang mengambil update dari source lalu menyuplainya ke sink. Ketika ruang kosong sink tersedia lagi, runner akan mengambil batch update selanjutnya dari source.</p>',4),fn=a("Ketika kamu membuat sebuah runner menggunakan "),wn=n("code",null,[a("create"),n("wbr"),a("Runner")],-1),vn=a(" ("),xn={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/createRunner",target:"_blank",rel:"noopener noreferrer"},jn=a("referensi API"),Sn=a("), kamu akan memperoleh sebuah handle yang bisa digunakan untuk mengontrol runner tersebut. Misalnya, kamu bisa memulai dan menghentikan runner, atau memperoleh sebuah promise yang akan terselesaikan jika runner dihentikan. Selain itu, handle ini juga dikembalikan oleh "),In=n("code",null,"run",-1),Pn=a(", lihat "),An={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/RunnerHandle",target:"_blank",rel:"noopener noreferrer"},Bn=a("Referensi API"),Rn=a(),Tn=n("code",null,[a("Runner"),n("wbr"),a("Handle")],-1),Cn=a("."),Yn=n("h2",{id:"pemrosesan-secara-berurutan-jika-diperlukan",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pemrosesan-secara-berurutan-jika-diperlukan","aria-hidden":"true"},"#"),a(" Pemrosesan Secara Berurutan jika Diperlukan")],-1),Kn=a("Kemungkinan besar, kamu ingin memastikan pesan yang berasal dari chat yang sama diproses secara berurutan agar urutan pesan tidak berubah ketika "),qn=a("session middleware"),Dn=a(" dipasang."),En=a("grammY runner meng-export "),Un=n("code",null,"sequentialize",-1),zn=a(" middleware yang akan menyelesaikan masalah tersebut. Kamu bisa membaca "),Nn=a("materi ini"),Ln=a(" untuk mempelajari cara penggunaannya."),Mn=r(`<p>Sekarang kita akan mempelajari lebih dalam penggunaan plugin ini.</p><p>Constraint function yang disuplai tidak hanya bisa digunakan untuk menentukan chat identifier ataupun user identifier. Sebaliknya, kamu bisa mengembalikan <em>daftar string dari constraint identifier</em> yang akan menentukan perhitungan lain apa yang harus ditunggu sebelum pemrosesan dapat dimulai untuk setiap update-nya.</p><p>Contohnya, kamu bisa mengembalikan chat identifier dan user identifier penulis pesan.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">sequentialize</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> chat <span class="token operator">=</span> ctx<span class="token punctuation">.</span>chat<span class="token operator">?.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> user <span class="token operator">=</span> ctx<span class="token punctuation">.</span>from<span class="token operator">?.</span>id<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>chat<span class="token punctuation">,</span> user<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>con<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> con <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ini akan memastikan pesan yang berasal dari chat yang sama akan diproses dengan urutan yang tepat. Misalnya, jika Budi mengirim pesan di dalam sebuah grup, lalu mengirim sebuah pesan ke bot kamu di chat pribadi, maka kedua pesan tersebut akan diurutkan dengan benar.</p><p>Dengan demikian, kamu bisa menentukan grafik dependensi dari masing-masing update. grammY runner akan menyelesaikan semua constraint yang dibutuhkan dan menahan update-update tersebut selama itu diperlukan untuk memastikan urutan pesan tepat.</p><p>Implementasi ini sangat efisien. Ia membutuhkan memory yang konstan (kecuali kamu menggunakan concurrency tidak terbatas) dan memerlukan waktu pemrosesan yang konstant (amortized) untuk setiap update.</p><h2 id="graceful-shutdown" tabindex="-1"><a class="header-anchor" href="#graceful-shutdown" aria-hidden="true">#</a> Graceful Shutdown</h2>`,8),Gn=a("Agar bot menyelesaikan tugasnya dengan benar, kamu "),Jn=a("harus memberi sinyal berhenti"),Fn=a(" ke bot ketika proses hendak dimatikan."),Hn=n("h2",{id:"ringkasan-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),a(" Ringkasan Plugin")],-1),Vn=n("li",null,[a("Nama: "),n("code",null,"runner")],-1),On=a("Sumber: "),Qn={href:"https://github.com/grammyjs/runner",target:"_blank",rel:"noopener noreferrer"},Wn=a("https://"),Xn=n("wbr",null,null,-1),Zn=a("github"),$n=n("wbr",null,null,-1),na=a(".com"),aa=n("wbr",null,null,-1),ea=a("/grammyjs"),sa=n("wbr",null,null,-1),ta=a("/runner"),oa=a("Referensi: "),ia={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts",target:"_blank",rel:"noopener noreferrer"},ra=r("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_runner<wbr>/mod<wbr>.ts",23);function ua(la,ca){const l=i("AutotagPage"),o=i("RouterLink"),s=i("ExternalLinkIcon"),u=i("CodeGroupItem"),c=i("CodeGroup");return d(),k("div",null,[g,e(l,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),n("p",null,[h,e(o,{to:"/id/guide/deployment-types.html"},{default:t(()=>[b]),_:1}),_]),n("blockquote",null,[n("p",null,[y,e(o,{to:"/id/advanced/scaling.html#long-polling"},{default:t(()=>[f]),_:1}),w])]),v,x,j,n("p",null,[S,n("a",I,[P,e(s)]),A,n("a",B,[R,e(s)]),T]),C,Y,e(c,null,{default:t(()=>[e(u,{title:"TypeScript",active:""},{default:t(()=>[K]),_:1}),e(u,{title:"JavaScript"},{default:t(()=>[q]),_:1}),e(u,{title:"Deno"},{default:t(()=>[D]),_:1})]),_:1}),E,n("p",null,[U,z,N,n("a",L,[M,e(s)]),G,J,F,n("a",H,[V,e(s)]),O]),Q,W,n("p",null,[X,Z,$,nn,an,en,sn,n("a",tn,[on,e(s)]),rn,un,ln,cn,pn,n("a",dn,[kn,e(s)]),mn]),n("p",null,[gn,n("a",hn,[bn,e(s)]),_n]),yn,n("p",null,[fn,wn,vn,n("a",xn,[jn,e(s)]),Sn,In,Pn,n("a",An,[Bn,e(s)]),Rn,Tn,Cn]),Yn,n("p",null,[Kn,e(o,{to:"/id/plugins/session.html"},{default:t(()=>[qn]),_:1}),Dn]),n("p",null,[En,Un,zn,e(o,{to:"/id/advanced/scaling.html#concurrency-itu-sulit"},{default:t(()=>[Nn]),_:1}),Ln]),Mn,n("p",null,[Gn,e(o,{to:"/id/advanced/reliability.html#menggunakan-grammy-runner"},{default:t(()=>[Jn]),_:1}),Fn]),Hn,n("ul",null,[Vn,n("li",null,[On,n("a",Qn,[Wn,Xn,Zn,$n,na,aa,ea,sa,ta,e(s)])]),n("li",null,[oa,n("a",ia,[ra,e(s)])])])])}const da=p(m,[["render",ua],["__file","runner.html.vue"]]);export{da as default};
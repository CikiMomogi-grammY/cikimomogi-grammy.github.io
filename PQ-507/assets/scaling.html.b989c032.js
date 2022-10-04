import{_ as r,r as o,o as k,c as d,b as s,a as n,w as e,d as a,e as u}from"./app.9837a88d.js";const m={},g=n("h1",{id:"peningkatan-ii-beban-kerja-tinggi",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#peningkatan-ii-beban-kerja-tinggi","aria-hidden":"true"},"#"),a(" Peningkatan II: Beban Kerja Tinggi")],-1),b=a("Langkah-langkah untuk mengatasi bot yang bekerja dengan beban yang tinggi tergantung dari jenis deployment yang dipakai: "),h=a("long polling atau webhook"),_=a(". Terlepas dari kedua jenis yang dipilih, kamu sebaiknya membaca beberapa jebakan "),y=n("a",{href:"#concurrency-itu-sulit"},"di bawah",-1),v=a(" agar tidak menyesal di kemudian hari."),f=n("h2",{id:"long-polling",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#long-polling","aria-hidden":"true"},"#"),a(" Long Polling")],-1),w=n("p",null,"Bot pada umumnya tidak perlu memproses banyak pesan per menit selama terjadi lonjakan beban. Dengan kata lain, skalabilitas bukanlah suatu masalah yang perlu diperhatikan. Namun, supaya bisa terukur dengan baik, grammY memproses update secara berurutan. Berikut operasi-operasi yang dilakukan:",-1),j=a("Ambil 100 update melalui "),x=n("code",null,[a("get"),n("wbr"),a("Updates")],-1),B=a(" ("),S={href:"https://core.telegram.org/bots/api#getupdates",target:"_blank",rel:"noopener noreferrer"},A=a("Referensi API Bot Telegram"),C=a(")"),K=n("li",null,[a("Untuk setiap update, "),n("code",null,"await"),a(" atau tunggu "),n("em",null,"middleware stack"),a(" selesai memprosesnya")],-1),T=n("p",null,"Karena update diproses berurutan, bot kamu menjadi tidak efisien kalau pesan yang diproses hanya sekitar satu pesan per detik, apalagi saat terjadi lonjakan beban. Contohnya, pesan Budi harus menunggu hingga pesan Ani selesai diproses.",-1),z=n("p",null,[a("Masalah ini bisa teratasi dengan cara memproses kedua pesan secara bersamaan, sehingga Budi tidak perlu menunggu pesan Ani selesai diproses. Supaya memperoleh efisiensi yang maksimal, kita juga akan mengambil pesan baru selagi pesan Budi dan Ani masih diproses. Idealnya, kita juga akan membatasi jumlah "),n("em",null,"concurrency"),a(" supaya tidak membebani server secara berlebihan.")],-1),P=a("Pemrosesan "),I=n("em",null,"concurrent",-1),q=a(" tidak tersedia secara bawaan di pemasangan grammY. Sebagai gantinya, kamu bisa "),Y=a("menggunakan package "),E=a("grammY runner"),D=a(". Package ini mendukung semua pemrosesan yang telah disebutkan di atas, bahkan penggunaanya pun juga simpel."),R=u(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Sebelumnya</span>
bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Setelah menggunakan grammY runner, yang mana meng-export \`run\`.</span>
<span class="token function">run</span><span class="token punctuation">(</span>bot<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),N=a("Batas concurrency bawaan sebanyak 500. Kalau kamu ingin mempelajari lebih jauh mengenai plugin ini, lihat "),L=a("halaman berikut"),U=a("."),G=n("p",null,[a("Concurrency memanglah sulit, oleh karena itu baca "),n("a",{href:"#concurrency-itu-sulit"},"materi di bawah"),a(" untuk mengetahui apa yang harus diperhatikan ketika menggunakan grammY runner.")],-1),O=n("h2",{id:"webhook",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webhook","aria-hidden":"true"},"#"),a(" Webhook")],-1),V=a("Kalau kamu menjalankan bot menggunakan webhook, ia akan secara otomatis memproses update secara bersamaan (tidak perlu memasang plugin). Supaya bot bisa bekerja dengan baik saat terjadi lonjakan beban, kamu harus benar-benar paham "),W=a("dalam menggunakan webhook"),F=a(". Kamu juga perlu tahu beberapa konsekuensi yang ditimbulkan ketika menggunakan concurrency, lihat "),H=n("a",{href:"#concurrency-itu-sulit"},"materi di bawah",-1),M=a("."),J=a("Perlu diingat"),Q=a(" juga bahwa Telegram akan mengirim update dari chat yang sama secara berurutan, sedangkan update dari chat yang berbeda akan dikirim secara bersamaan."),X=n("h2",{id:"concurrency-itu-sulit",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#concurrency-itu-sulit","aria-hidden":"true"},"#"),a(" Concurrency Itu Sulit")],-1),Z=n("p",null,[a("Beberapa masalah akan timbul jika bot kamu memproses semua update secara bersamaan. Contohnya, saat dua pesan dari chat yang sama diterima oleh pemanggilan "),n("code",null,[a("get"),n("wbr"),a("Updates")]),a(" yang sama pula, maka kedua pesan ini akan diproses secara bersamaan. Sehingga, kita tidak dapat memastikan urutan pesan tersebut sudah teracak atau tidak.")],-1),$=a("Titik utama dimana kedua pesan dapat bertabrakan adalah disaat kamu menggunakan "),nn=a("session"),an=a(", yang mana terjadinya "),sn={href:"https://en.wikipedia.org/wiki/Hazard_(computer_architecture)#Write_after_read_(WAR)",target:"_blank",rel:"noopener noreferrer"},en=a("write"),tn=n("wbr",null,null,-1),on=a("-after"),cn=n("wbr",null,null,-1),un=a("-read hazard"),ln=a(" sangat mungkin terjadi. Bayangkan kejadian berikut:"),pn=u("<ol><li>Ani mengirim pesan A.</li><li>Bot mulai memproses A.</li><li>Bot membaca data session milik Ani dari database.</li><li>Ani mengirim pesan B.</li><li>Bot mulai memproses B.</li><li>Bot membaca data session milik Ani dari database.</li><li>Bot selesai memproses A, lalu menulis session baru ke database.</li><li>Bot selesai memproses B, lalu menulis session baru ke database, yang mana menulis ulang perubahan yang dilakukan saat memproses A. Data A hilang karena <em>WAR hazard!</em></li></ol><blockquote><p>Catatan: Kamu bisa menggunakan <em>database transaction</em> untuk session kamu. Tetapi, dengan cara tersebut, ia hanya mampu mendeteksi terjadinya hazard, bukan mencegahnya dari awal. Oleh karena itu, lebih baik kamu menggunakan <em>lock</em> agar concurrency terhenti sepenuhnya, sehingga potensi terjadinya hazard juga bisa diminimalisir.</p></blockquote><p>Kebanyakan sistem session di web framework lain mengabaikan <em>race condition</em> ini, karena hal seperti itu jarang terjadi di web. Berbeda dengan bot telegram, kondisi seperti itu akan sering terjadi karena request dengan session key yang sama akan diproses secara bersamaan. Oleh karena itu, kita mesti memastikan update yang menggunakan data session yang sama harus diproses secara berurutan untuk menghindari bahaya race condition.</p><p><em>grammY runner</em> sudah dilengkapi dengan middleware <code>sequentialize()</code> yang fungsinya memastikan update yang berpotensi bertabrakan diproses secara berurutan. Kamu bisa mengaturnya di function yang sama yang kamu gunakan untuk menentukan session key. Dengan begitu, race condition bisa dihindarkan dengan cara memperlambat update tersebut agar tidak bertabrakan satu sama lain.</p>",4),rn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot"),n("span",{class:"token punctuation"},","),a(" Context"),n("span",{class:"token punctuation"},","),a(" session "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" run"),n("span",{class:"token punctuation"},","),a(" sequentialize "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),a(`
`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat id unik untuk object `Context`."),a(`
`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"getSessionKey"),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token operator"},":"),a(" Context"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token operator"},"?."),a("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// Urutkan terlebih dahulu sebelum mengakses session data!"),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"sequentialize"),n("span",{class:"token punctuation"},"("),a("getSessionKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"session"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" getSessionKey "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Pasang middleware seperti biasa,"),a(`
`),n("span",{class:"token comment"},"// sekarang session sudah aman."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Pesan diterima."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Tetap dijalankan secara bersamaan!"),a(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),kn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot"),n("span",{class:"token punctuation"},","),a(" Context"),n("span",{class:"token punctuation"},","),a(" session "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" run"),n("span",{class:"token punctuation"},","),a(" sequentialize "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),a(`
`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat id unik untuk object `Context`."),a(`
`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"getSessionKey"),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token operator"},"?."),a("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// Urutkan terlebih dahulu sebelum mengakses session data!"),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"sequentialize"),n("span",{class:"token punctuation"},"("),a("getSessionKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"session"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" getSessionKey "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Pasang middleware seperti biasa,"),a(`
`),n("span",{class:"token comment"},"// sekarang session sudah aman."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Pesan diterima."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Tetap dijalankan secara bersamaan!"),a(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),dn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot"),n("span",{class:"token punctuation"},","),a(" Context"),n("span",{class:"token punctuation"},","),a(" session "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" run"),n("span",{class:"token punctuation"},","),a(" sequentialize "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy_runner@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),a(`
`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Buat id unik untuk object `Context`."),a(`
`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"getSessionKey"),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token operator"},":"),a(" Context"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token keyword"},"return"),a(" ctx"),n("span",{class:"token punctuation"},"."),a("chat"),n("span",{class:"token operator"},"?."),a("id"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token comment"},"// Urutkan terlebih dahulu sebelum mengakses session data!"),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"sequentialize"),n("span",{class:"token punctuation"},"("),a("getSessionKey"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"session"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" getSessionKey "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Pasang middleware seperti biasa,"),a(`
`),n("span",{class:"token comment"},"// sekarang session sudah aman."),a(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"message"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),a("ctx"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"Pesan diterima."'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Tetap dijalankan secara bersamaan!"),a(`
`),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),mn=a("Silahkan bergabung ke "),gn={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},bn=a("chat Telegram grammY"),hn=a(" untuk mendiskusikan cara menggunakan grammY runner di bot kamu. Kami selalu menantikan cerita dari orang-orang yang pernah mengelola bot-bot besar agar kami bisa meningkatkan grammY berdasarkan pengalaman mereka menggunakan package ini.");function _n(yn,vn){const l=o("AutotagPage"),t=o("RouterLink"),i=o("ExternalLinkIcon"),c=o("CodeGroupItem"),p=o("CodeGroup");return k(),d("div",null,[g,s(l,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),n("p",null,[b,s(t,{to:"/id/guide/deployment-types.html"},{default:e(()=>[h]),_:1}),_,y,v]),f,w,n("ol",null,[n("li",null,[j,x,B,n("a",S,[A,s(i)]),C]),K]),T,z,n("p",null,[P,I,q,n("strong",null,[Y,s(t,{to:"/id/plugins/runner.html"},{default:e(()=>[E]),_:1})]),D]),R,n("p",null,[N,s(t,{to:"/id/plugins/runner.html"},{default:e(()=>[L]),_:1}),U]),G,O,n("p",null,[V,s(t,{to:"/id/guide/deployment-types.html#bagaimana-cara-menggunakan-webhook"},{default:e(()=>[W]),_:1}),F,H,M]),n("p",null,[s(t,{to:"/id/guide/deployment-types.html#mengakhiri-request-webhook-tepat-waktu"},{default:e(()=>[J]),_:1}),Q]),X,Z,n("p",null,[$,s(t,{to:"/id/plugins/session.html"},{default:e(()=>[nn]),_:1}),an,n("a",sn,[en,tn,on,cn,un,s(i)]),ln]),pn,s(p,null,{default:e(()=>[s(c,{title:"TypeScript",active:""},{default:e(()=>[rn]),_:1}),s(c,{title:"JavaScript"},{default:e(()=>[kn]),_:1}),s(c,{title:"Deno"},{default:e(()=>[dn]),_:1})]),_:1}),n("p",null,[mn,n("a",gn,[bn,s(i)]),hn])])}const wn=r(m,[["render",_n],["__file","scaling.html.vue"]]);export{wn as default};
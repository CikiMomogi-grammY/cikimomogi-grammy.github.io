import{_ as i,r as p,o as c,c as u,a,b as s,w as o,e,d as n}from"./app.2f873437.js";const l={},d=e('<h1 id="menangani-error" tabindex="-1"><a class="header-anchor" href="#menangani-error" aria-hidden="true">#</a> Menangani Error</h1><p>Setiap error yang disebabkan oleh middleware akan ditangkap oleh grammY. Kami menyarankan kamu untuk memasang <em>error handler</em> khusus untuk menangani error yang terjadi.</p><p>Materi ini akan mengajarimu <a href="#menangkap-error">cara menangkap error</a> yang dilempar.</p><p>Setelah itu, kita akan membahas tiga jenis error yang biasa ditemukan di bot:</p><table><thead><tr><th>Nama</th><th>Keterangan</th></tr></thead><tbody><tr><td><a href="#objek-boterror"><code>Bot<wbr>Error</code></a></td><td>Object error yang membungkus error apapun yang dilempar di middleware (contohnya, dua error di bawah).</td></tr><tr><td><a href="#objek-grammyerror"><code>Grammy<wbr>Error</code></a></td><td>Dilempar ketika server API Bot mengembalikan <code>ok:<wbr> false</code>, yang mengindikasikan bahwa permintaan API gagal dan tidak valid.</td></tr><tr><td><a href="#objek-httperror"><code>Http<wbr>Error</code></a></td><td>Dilempar jika server API Bot tidak bisa dijangkau.</td></tr></tbody></table><p>Mekanisme penanganan error tingkat lanjut bisa kamu temukan lebih banyak <a href="#error-boundary">di bawah sini</a>.</p><h2 id="menangkap-error" tabindex="-1"><a class="header-anchor" href="#menangkap-error" aria-hidden="true">#</a> Menangkap Error</h2><p>Cara menangkap error bisa berbeda-beda tergantung dari jenis pemasangan botmu. Diantaranya:</p><h3 id="long-polling" tabindex="-1"><a class="header-anchor" href="#long-polling" aria-hidden="true">#</a> Long Polling</h3>',9),k=n("Kalau kamu menjalankan bot melalui "),m=a("code",null,[n("bot"),a("wbr"),n(".start()")],-1),b=n(" atau menggunakan "),g=n("grammY runner"),h=n(", maka kamu bisa "),v=a("strong",null,[n("memasang error handler melalui "),a("code",null,[n("bot"),a("wbr"),n(".catch")])],-1),y=n("."),_=e(`<p>grammY memiliki error handler bawaan yang dapat menghentikan bot jika dijalankan melalui <code>bot<wbr>.start()</code>, setelah itu ia akan melempar kembali error tersebut. Langkah-langkah yang selanjutnya dilakukan setelah menerima error tersebut tergantung dari platform yang kamu gunakan. Itulah kenapa <strong>kamu sebaiknya memasang sebuah error handler melalui <code>bot<wbr>.catch</code></strong> supaya bisa menangani sendiri error tersebut.</p><p>Contoh:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ctx <span class="token operator">=</span> err<span class="token punctuation">.</span>ctx<span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Error saat menangani update </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ctx<span class="token punctuation">.</span>update<span class="token punctuation">.</span>update_id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> e <span class="token operator">=</span> err<span class="token punctuation">.</span>error<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">GrammyError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error di request:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">HttpError</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Tidak bisa menghubungi Telegram:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error yang tidak diketahui:&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webhooks" tabindex="-1"><a class="header-anchor" href="#webhooks" aria-hidden="true">#</a> Webhooks</h3><p>Kalau kamu menjalankan bot melalui webhooks, grammY akan meneruskan error ke framework web yang sedang kamu gunakan, misal <code>express</code>. Selanjutnya, kamu harus menangani error sesuai dengan panduan dari framework tersebut.</p><h2 id="object-boterror" tabindex="-1"><a class="header-anchor" href="#object-boterror" aria-hidden="true">#</a> Object <code>Bot<wbr>Error</code></h2>`,6),w=n("Object "),f=a("code",null,[n("Bot"),a("wbr"),n("Error")],-1),j=n(" mengemas error yang dilempar bersama dengan "),E=n("object context"),x=n(" terkait yang menjadi penyebab dari error tersebut."),B=e("<p>grammY akan menangkap error yang terjadi saat memproses sebuah update. Object context seringkali bermanfaat untuk bisa menemukan penyebab dari suatu error.</p><p>grammY sama sekali tidak mengotak-atik error yang dilempar, tetapi ia membungkusnya ke dalam sebuah instance <code>Bot<wbr>Error</code>. Mengingat tadi kamu memberi nama object-nya <code>err</code>, maka kamu bisa mengakses error aslinya melalui <code>err<wbr>.error</code>. Kamu bisa mengakses object context terkait melalui <code>err<wbr>.ctx</code>.</p>",2),q=n("Lihat class "),H=a("code",null,[n("Bot"),a("wbr"),n("Error")],-1),I=n(" di "),Y={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/BotError",target:"_blank",rel:"noopener noreferrer"},A=n("Referensi API grammY"),P=n("."),K=e('<h2 id="object-grammyerror" tabindex="-1"><a class="header-anchor" href="#object-grammyerror" aria-hidden="true">#</a> Object <code>Grammy<wbr>Error</code></h2><p>Kalau sebuah method API seperti <code>send<wbr>Message</code> mengalami kegagalan, grammY akan melempar sebuah error <code>Grammy<wbr>Error</code>. Perlu dicatat bahwa instance <code>Grammy<wbr>Error</code> juga akan dibungkus di object <code>Bot<wbr>Error</code> jika mereka dilempar dari dalam middleware.</p><p>Sebuah <code>Grammy<wbr>Error</code> yang dilempar mengindikasikan bahwa permintaan API terkait terjadi kegagalan. Error ini menyediakan akses ke kode error yang dikembalikan oleh backend Telegram, termasuk juga deskripsi dari error tersebut.</p>',3),C=n("Lihat class "),S=a("code",null,[n("Grammy"),a("wbr"),n("Error")],-1),D=n(" di "),G={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/GrammyError",target:"_blank",rel:"noopener noreferrer"},L=n("Referensi API grammY"),M=n("."),N=e('<h2 id="object-httperror" tabindex="-1"><a class="header-anchor" href="#object-httperror" aria-hidden="true">#</a> Object <code>Http<wbr>Error</code></h2><p>Sebuah <code>Http<wbr>Error</code> dilempar jika terjadi kegagalan saat melakukan <em>network request</em>. Artinya, grammY tidak bisa menghubungi server API Bot. Object error ini berisi informasi mengenai alasan permintaan tersebut tidak dapat dilakukan, yang tersedia di property <code>error</code>.</p><p>Kamu akan jarang melihat error semacam ini, kecuali koneksi internet kamu memang tidak stabil, atau server API Bot tidak tersedia untuk sementara waktu.</p>',3),O=n("Perlu dicatat bahwa jika server API Bot bisa dihubungi, tetapi mengembalikan "),R=a("code",null,[n("ok:"),a("wbr"),n(" false")],-1),T=n(" untuk pemanggilan method tertentu, justru "),V=a("code",null,[n("Grammy"),a("wbr"),n("Error")],-1),Q=n(" yang akan dilempar."),X=n("Lihat class "),Z=a("code",null,[n("Http"),a("wbr"),n("Error")],-1),F=n(" di "),W={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/HttpError",target:"_blank",rel:"noopener noreferrer"},$=n("Referensi API grammY"),z=n("."),J=e(`<h2 id="error-boundary" tabindex="-1"><a class="header-anchor" href="#error-boundary" aria-hidden="true">#</a> Error Boundary</h2><blockquote><p>Ini adalah topik tingkat lanjut yang sering kali berguna untuk bot-bot besar. Kalau kamu masih baru mengenal grammY, sisa dari halaman ini boleh diabaikan.</p></blockquote><p>Kalau kamu membagi code base menjadi beberapa bagian, <em>error boundary</em> memungkinkan kamu memasang error handler yang berbeda untuk tiap bagian middleware. Ini bisa dilakukan dengan cara memagari error di bagian middleware. Dengan kata lain, kalau sebuah error dilempar dari bagian khusus middleware yang terproteksi, maka ia tidak bisa lepas keluar dari bagian sistem midleware tersebut. Sebagai gantinya, error handler khusus dipanggil, dan bagian middleware lain di sekelilingnya akan menganggap proses berjalan baik-baik saja tanpa error. Ini adalah fitur dari sistem middleware grammY. Error boundary bisa bekerja baik di webhooks maupun long polling.</p><p>Selain itu, kamu bisa memilih untuk membiarkan eksekusi middleware <em>melanjutkan</em> prosesnya secara normal setelah error sudah ditangani, dilanjutkan tepat diluar dari cakupan error boundary. Dalam hal ini, middleware yang dipagari tidak hanya bertindak seolah-olah proses berjalan dengan baik, melainkan juga meneruskan control flow ke middleware selanjutnya yang dipasang setelah error boundary. Bisa dibilang, middleware yang berada di dalam error boundary terlihat seolah-olah memanggil <code>next</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* A */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* B */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* X */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* Y */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
composer<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* Z */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">errorBoundary</span><span class="token punctuation">(</span>boundaryHandler <span class="token comment">/* , Q */</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>composer<span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* C */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* D */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>errorHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">boundaryHandler</span><span class="token punctuation">(</span>err<span class="token operator">:</span> BotError<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error di Q, X, Y, atau Z!&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">/*
   * Kamu bisa memanggil \`next\` kalau ingin lanjut menjalankan
   * middleware di C saat terjadi error:
   */</span>

  <span class="token comment">// await next()</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">errorHandler</span><span class="token punctuation">(</span>err<span class="token operator">:</span> BotError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error di A, B, C, atau D!&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Dari contoh di atas, <code>boundary<wbr>Handler</code> akan dipanggil untuk:</p><ol><li>Semua middleware yang diteruskan ke <code>bot<wbr>.error<wbr>Boundary</code> setelah <code>boundary<wbr>Handler</code>, yaitu <code>Q</code>.</li><li>Semua midleware yang dipasang pada instance composer berikutnya, yaitu <code>X</code>, <code>Y</code>, dan <code>Z</code>.</li></ol>`,7),U=n("Mengenai poin 2, kamu bisa melompat ke "),nn=n("materi lanjutan middleware"),an=n(" untuk mempelajari bagaimana cara kerja perangkaian atau chaining di grammY."),sn=e(`<p>Kamu juga bisa menerapkan error boundary ke sebuah composer tanpa memanggil <code>bot<wbr>.error<wbr>Boundary</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> composer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Composer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token keyword">protected</span> <span class="token operator">=</span> composer<span class="token punctuation">.</span><span class="token function">errorBoundary</span><span class="token punctuation">(</span>boundaryHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">protected</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* B */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>composer<span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token comment">/* C */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>errorHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">boundaryHandler</span><span class="token punctuation">(</span>err<span class="token operator">:</span> BotError<span class="token punctuation">,</span> next<span class="token operator">:</span> NextFunction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error di B!&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">errorHandler</span><span class="token punctuation">(</span>err<span class="token operator">:</span> BotError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;Error di C!&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>boundary<wbr>Handler</code> di atas akan dipanggil untuk middleware yang terkait dengan <code>protected</code>.</p><p>Kalau kamu ingin dengan sengaja membuat error melewati batas error boundary\u2014maksudnya meneruskannya keluar\u2014kamu bisa melempar ulang sebuah error di dalam error handler. Kemudian, error tersebut akan diteruskan ke error boundary berikutnya yang ada di sekitarnya.</p><p>Dengan kata lain, kamu bisa menganggap error handler yang dipasang melalui <code>bot<wbr>.catch</code> sebagai lapisan terluar error boundary.</p>`,5);function en(tn,on){const t=p("RouterLink"),r=p("ExternalLinkIcon");return c(),u("div",null,[d,a("p",null,[k,m,b,s(t,{to:"/id/plugins/runner.html"},{default:o(()=>[g]),_:1}),h,v,y]),_,a("p",null,[w,f,j,s(t,{to:"/id/guide/context.html"},{default:o(()=>[E]),_:1}),x]),B,a("p",null,[q,H,I,a("a",Y,[A,s(r)]),P]),K,a("p",null,[C,S,D,a("a",G,[L,s(r)]),M]),N,a("blockquote",null,[a("p",null,[O,R,T,s(t,{to:"/id/guide/errors.html#object-grammyerror"},{default:o(()=>[V]),_:1}),Q])]),a("p",null,[X,Z,F,a("a",W,[$,s(r)]),z]),J,a("blockquote",null,[a("p",null,[U,s(t,{to:"/id/advanced/middleware.html"},{default:o(()=>[nn]),_:1}),an])]),sn])}const pn=i(l,[["render",en],["__file","errors.html.vue"]]);export{pn as default};

import{_ as c,r as o,o as p,c as u,a,b as e,w as r,d as n,e as s}from"./app.cd079934.js";const d={},l=a("h1",{id:"command",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#command","aria-hidden":"true"},"#"),n(" Command")],-1),m=a("p",null,"Command atau perintah adalah entity khusus di dalam pesan Telegram yang berfungsi sebagai instruksi untuk sebuah bot.",-1),k=a("h2",{id:"penggunaan",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#penggunaan","aria-hidden":"true"},"#"),n(" Penggunaan")],-1),b=n("Lihat bagian commands di dokumentasi "),g={href:"https://core.telegram.org/bots#commands",target:"_blank",rel:"noopener noreferrer"},h=n("Pengenalan untuk Developer"),_=n(" yang ditulis oleh tim Telegram."),w=s(`<p>grammY menyediakan listener khusus untuk menangani command (misal <code>/start</code> dan <code>/help</code>) yang bisa kamu pasang secara langsung melalui <code>bot<wbr>.command()</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Merespon command /start.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Merespon command /help.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;help&quot;</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Merespon command /a, /b, /c, dan /d.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">]</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Perlu dicatat bahwa hanya command yang ditulis persis di awal pesan yang akan direspon. Ketika seorang user mengirim pesan <code>&quot;Jangan kirim command <wbr>/start ke bot!&quot;</code>, maka listener tidak akan meresponnya meskipun terdapat command <code>/start</code> di isi pesan tersebut, karena letak command <code>/start</code> tidak berada di awal pesan.</p><p>Telegram mendukung pengiriman command yang secara khusus ditujukan ke bot tertentu, contohnya command yang diakhiri dengan <code>@username<wbr>_bot<wbr>_kamu</code>. grammY juga akan merespon pesan tersebut secara otomatis, sehingga pesan yang berisi <code>/start</code> ataupun <code>/start@username<wbr>_bot<wbr>_kamu</code> akan sama-sama dianggap sebagai command, yang kemudian akan ditangkap oleh listener <code>bot<wbr>.command(&quot;start&quot;)</code>. Kamu juga bisa memilih untuk hanya merespon command yang secara khusus ditujukan ke bot kamu dengan menulis <code>bot<wbr>.command(&quot;start@username<wbr>_bot<wbr>_kamu&quot;)</code>.</p>`,4),y={class:"custom-container tip"},v=s(`<p class="custom-container-title">Menyarankan Command ke User</p><p>Kamu bisa memanggil</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">setMyCommands</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Mulai bot ini&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;help&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Tampilkan bantuan&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;settings&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Buka pengaturan&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>untuk membuat aplikasi Telegram user menampilkan daftar command yang disarankan di kolom input teks.</p>`,4),q=n("Kamu juga bisa mengaturnya secara manual dengan chat ke "),f=a("em",null,"Bapak bot",-1),x=n(),T={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},j=n("@Bot"),L=a("wbr",null,null,-1),B=n("Father"),M=n("."),C=s(`<h2 id="argument" tabindex="-1"><a class="header-anchor" href="#argument" aria-hidden="true">#</a> Argument</h2><p>Seorang user bisa mengirim command beserta <strong>argument</strong>-nya. Kamu bisa memperoleh string argument tersebut melalui <code>ctx<wbr>.match</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \`item\` akan menjadi &quot;ayam geprek&quot;</span>
  <span class="token comment">// kalau pengguna mengirim pesan &quot;/add ayam geprek&quot;.</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> ctx<span class="token punctuation">.</span>match<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Perlu dicatat bahwa seluruh isi teks pesan selalu bisa diakses melalui <code>ctx<wbr>.msg<wbr>.text</code>.</p><h2 id="dukungan-deep-linking" tabindex="-1"><a class="header-anchor" href="#dukungan-deep-linking" aria-hidden="true">#</a> Dukungan Deep Linking</h2>`,5),D=n("Lihat bagian deep linking di dokumentasi "),K={href:"https://core.telegram.org/bots#deep-linking",target:"_blank",rel:"noopener noreferrer"},N=n("Pengenalan untuk Developer"),P=n(" yang ditulis oleh tim Telegram."),R=s("<p>Ketika pengguna mengunjungi <code>https://<wbr>t<wbr>.me<wbr>/username<wbr>_bot<wbr>_kamu<wbr>?start<wbr>=<wbr>migoreng</code>, aplikasi Telegram mereka akan menampilkan sebuah tombol MULAI yang\u2014kalau dipencet\u2014akan mengirim pesan beserta string dari parameter URL-nya. Dari contoh tadi, isi pesannya akan menjadi <code>&quot;<wbr>/start migoreng&quot;</code>. Nah,<code>&quot;migoreng&quot;</code> ini adalah muatannya atau disebut dengan <code>payload</code>. Aplikasi Telegram akan menyembunyikan isi payload tersebut dari pengguna, yang mereka lihat cuma <code>&quot;<wbr>/start&quot;</code>. Tetapi, bot kamu tetap akan menerima pesannya secara utuh. grammY kemudian mengambil payload tersebut, lalu meneruskannya ke <code>ctx<wbr>.match</code>. Berdasarkan contoh tadi, <code>ctx<wbr>.match</code> akan berisi string <code>&quot;migoreng&quot;</code>.</p>",1),U=n("Deep linking akan bermanfaat ketika kamu ingin membuat sistem referral, ataupun melacak dari mana pengguna menemukan bot-mu. Contohnya, bot kamu bisa memposting di channel dengan menyertakan sebuah tombol "),A=n("inline keyboard"),I=s(" di bawah postingan tersebut. Tombol ini berisi URL yang mirip dengan contoh di atas, misal <code>https://<wbr>t<wbr>.me<wbr>/username<wbr>_bot<wbr>_kamu<wbr>?start<wbr>=<wbr>dari<wbr>-postingan<wbr>-channel<wbr>-drama<wbr>-ojol<wbr>-nomor<wbr>-123</code>. Ketika user memencet tombol tersebut, aplikasi Telegram mereka akan membuka chat pribadi dengan bot kamu, sambil menampilkan tombol MULAI seperti yang sudah dijelaskan di atas. Dengan cara tersebut, bot-mu bisa mengidentifikasi dari mana pengguna tersebut berasal melalui tombol khusus di bawah postingan channel tadi.",3),V=a("p",null,"Tentu saja, selain di Telegram, kamu juga bisa menyematkan link tersebut di berbagai tempat: website, email, akun media sosial, kode QR, dll.",-1);function E(Y,F){const t=o("ExternalLinkIcon"),i=o("RouterLink");return p(),u("div",null,[l,m,k,a("blockquote",null,[a("p",null,[b,a("a",g,[h,e(t)]),_])]),w,a("div",y,[v,a("p",null,[q,f,x,a("a",T,[j,L,B,e(t)]),M])]),C,a("blockquote",null,[a("p",null,[D,a("a",K,[N,e(t)]),P])]),R,a("p",null,[U,e(i,{to:"/id/plugins/keyboard.html#keyboard-inline"},{default:r(()=>[A]),_:1}),I]),V])}const J=c(d,[["render",E],["__file","commands.html.vue"]]);export{J as default};

import{_ as u,r as o,o as c,c as l,a,b as s,w as p,d as n,e as i}from"./app.cd079934.js";const r={},d=a("h1",{id:"hosting-supabase-edge-functions",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#hosting-supabase-edge-functions","aria-hidden":"true"},"#"),n(" Hosting: Supabase Edge Functions")],-1),k=n("Halaman ini berisi panduan mengenai langkah-langkah meng-hosting bot grammY di "),b={href:"https://supabase.com/",target:"_blank",rel:"noopener noreferrer"},m=n("Supabase"),h=n("."),g=n("Kamu diharuskan memiliki sebuah akun "),_={href:"https://github.com",target:"_blank",rel:"noopener noreferrer"},v=n("Git"),y=a("wbr",null,null,-1),f=n("Hub"),w=n(" untuk menggunakan "),q={href:"https://supabase.com/docs/guides/functions",target:"_blank",rel:"noopener noreferrer"},x=n("Supabase Edge Functions"),S=n(". Supabase Edge Functions berbasiskan "),j={href:"https://deno.com/deploy",target:"_blank",rel:"noopener noreferrer"},E=n("Deno Deploy"),T=n(", sehingga seperti "),B=n("panduan Deno Deploy"),O=n(" yang telah kami buat sebelumnya, panduan ini ditujukan untuk pengguna Deno grammY saja."),K=a("p",null,"Supabase Edge Functions cocok untuk sebagian besar bot yang memiliki fungsi sederhana, dan perlu kamu ketahui bahwa tidak semua fitur di Deno tersedia untuk aplikasi-aplikasi yang berjalan di Supabase Edge Functions. Contohnya, Supabase Edge Functions tidak menyediakan fitur file system. Ia serupa dengan platform serverless lainnya, namun hanya ditujukan untuk aplikasi Deno.",-1),N=n("Hasil dari tutorial ini bisa dilihat di "),D={href:"https://github.com/grammyjs/examples/tree/main/supabase-edge-functions",target:"_blank",rel:"noopener noreferrer"},F=n("repositori bot kami"),C=n("."),L=a("h2",{id:"pemasangan",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#pemasangan","aria-hidden":"true"},"#"),n(" Pemasangan")],-1),P=n("Untuk men-deploy bot ke Supabase Edge Functions, kamu harus membuat sebuah akun Supabase, menginstal CLI mereka, dan membuat sebuah proyek Supabase. Cara pemasangannya bisa dilihat di "),R={href:"https://supabase.com/docs/guides/functions#prerequisites",target:"_blank",rel:"noopener noreferrer"},U=n("dokumentasi yang mereka sediakan"),A=n("."),G=i(`<p>Buat sebuah Supabase Function dengan cara menjalankan perintah berikut:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>supabase functions new telegram-bot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Setelah berhasil membuat sebuah proyek Supabase Function, sekarang kamu bisa menulis bot-nya.</p><h2 id="siapkan-kodenya" tabindex="-1"><a class="header-anchor" href="#siapkan-kodenya" aria-hidden="true">#</a> Siapkan Kodenya</h2>`,4),H=n("Perlu diingat bahwa kamu harus "),I=n("menjalankan bot menggunakan webhooks"),J=n(". Oleh karena itu, gunakan "),V=a("code",null,[n("webhook"),a("wbr"),n("Callback")],-1),W=n(" alih-alih "),Y=a("code",null,[n("bot"),a("wbr"),n(".start()")],-1),M=n(" di kode kamu."),$=i(`<p>Kamu bisa menggunakan contoh bot singkat ini sebagai entry point-nya.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> serve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/std@0.158.0/http/server.ts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bot<span class="token punctuation">,</span> webhookCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;https://deno.land/x/grammy@v1.11.1/mod.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span>Deno<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;BOT_TOKEN&quot;</span><span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span>
  <span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Selamat datang! Bot sedang berjalan.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="melakukan-deploy" tabindex="-1"><a class="header-anchor" href="#melakukan-deploy" aria-hidden="true">#</a> Melakukan Deploy</h2><p>Kamu sekarang bisa men-deploy bot ke Supabase. Perlu dicatat bahwa kamu diharuskan menonaktifkan otorisasi JWT karena Telegram menggunakan metode lain untuk memastikan request tersebut benar-benar berasal dari Telegram. Kamu bisa men-deploy function-nya dengan perintah ini:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>supabase functions deploy --no-verify-jwt telegram-bot
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Selanjutnya, berikan token bot ke Supabase agar kode kamu bisa mengaksesnya sebagai sebuah environment variable.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Ganti 123:aBcDeF-gh dengan token bot-mu yang asli.</span>
supabase secrets <span class="token builtin class-name">set</span> <span class="token assign-left variable">BOT_TOKEN</span><span class="token operator">=</span><span class="token number">123</span>:aBcDeF-gh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Supabase Function kamu sekarang sudah berjalan. Sisanya, kita perlu memberi tahu Telegram ke mana ia harus mengirim update-update-nya. Kamu bisa melakukannya dengan memanggil <code>set<wbr>Webhook</code>. Contohnya, buka sebuah tab baru di browser lalu kunjungi URL berikut:</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>https://api.telegram.org/bot&lt;TOKEN_BOT&gt;/setWebhook?url=https://&lt;NAMA_PROYEK&gt;.functions.supabase.co/telegram-bot?secret=&lt;TOKEN_BOT&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ganti <code>&lt;TOKEN<wbr>_BOT&gt;</code> dengan token bot kamu yang asli. Jangan lupa untuk mengganti <code>&lt;TOKEN<wbr>_BOT&gt;</code> yang kedua dengan token bot-mu juga. Ganti <code>&lt;NAMA<wbr>_PROYEK&gt;</code> dengan nama proyek Supabase kamu.</p><p>Jika berhasil, kamu akan melihat string JSON berikut di jendela browser:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;ok&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Webhook was set&quot;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Selesai! Bot kamu sekarang sudah berjalan. Kirim sebuah pesan lalu bot akan membalas pesan tersebut!</p>`,13);function z(Q,X){const e=o("ExternalLinkIcon"),t=o("RouterLink");return c(),l("div",null,[d,a("p",null,[k,a("a",b,[m,s(e)]),h]),a("p",null,[g,a("a",_,[v,y,f,s(e)]),w,a("a",q,[x,s(e)]),S,a("a",j,[E,s(e)]),T,s(t,{to:"/id/hosting/deno-deploy.html"},{default:p(()=>[B]),_:1}),O]),K,a("p",null,[N,a("a",D,[F,s(e)]),C]),L,a("p",null,[P,a("a",R,[U,s(e)]),A]),G,a("blockquote",null,[a("p",null,[H,s(t,{to:"/id/guide/deployment-types.html#bagaimana-cara-menggunakan-webhook"},{default:p(()=>[I]),_:1}),J,V,W,Y,M])]),$])}const nn=u(r,[["render",z],["__file","supabase.html.vue"]]);export{nn as default};

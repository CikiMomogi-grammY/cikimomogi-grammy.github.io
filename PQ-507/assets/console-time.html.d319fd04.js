import{_ as t,r as i,o,c as l,a as n,b as e,d as a,e as u}from"./app.59a23fc3.js";const p={},c=n("h1",{id:"menggunakan-console-log-untuk-men-debug",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#menggunakan-console-log-untuk-men-debug","aria-hidden":"true"},"#"),a(" Menggunakan Console Log untuk Men-debug")],-1),d=a("Jika kamu sudah terbiasa dengan JavaScript/TypeScript, kemungkinan besar kamu sering menggunakan "),r={href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/log",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,[a("console"),n("wbr"),a(".log")],-1),k=a(" atau "),g={href:"https://developer.mozilla.org/en-US/docs/Web/API/Console/time",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,[a("console"),n("wbr"),a(".time")],-1),v=a(" untuk men-debug suatu program. Ketika bekerja dengan sebuah bot atau middleware, kamu mungkin juga perlu untuk melakukan hal yang serupa: Apa yang sebenarnya terjadi, dan berapa lama waktu yang dibutuhkan?"),h=u(`<p>Plugin ini bertujuan untuk men-debug satu permasalahan khusus. Saat berada di mode produksi, kamu mungkin ingin melakukan hal yang sebaliknya, yaitu mendapatkan gambaran permasalahan secara umum, bukan satu permasalahan saja. Contohnya: Ketika men-debug <code>/start</code> yang tidak berjalan dengan baik, kamu akan melakukan pengecekan di update Telegram tersebut saja. Sedangkan saat di mode produksi, kamu ingin mengecek semua pesan <code>/start</code> yang terjadi. Library ini dimaksudkan untuk mengecek satu update tertentu saja.</p><h2 id="men-debug-implementasianmu" tabindex="-1"><a class="header-anchor" href="#men-debug-implementasianmu" aria-hidden="true">#</a> Men-debug Implementasianmu</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> generateUpdateMiddleware <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;telegraf-middleware-console-time&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">generateUpdateMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Implementasimu</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hasilnya akan mirip seperti ini:</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>2020-03-31T14:32:36.974Z 490af message text Edgar 6 /start: 926.247ms
2020-03-31T14:32:57.750Z 490ag message text Edgar 6 /start: 914.764ms
2020-03-31T14:33:01.188Z 490ah message text Edgar 5 /stop: 302.666ms
2020-03-31T14:46:11.385Z 490ai message text Edgar 6 /start: 892.452ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>490af</code> adalah <code>update<wbr>_id</code>-nya.</p><p>Angka sebelum command adalah jumlah panjang dari konten tersebut. Ini berguna untuk menghitung panjang maksimal untuk hal-hal seperti data callback.</p><p>Kontennya sendiri dibuat singkat untuk menghindari spam di log.</p><h2 id="men-debug-middleware-mu" tabindex="-1"><a class="header-anchor" href="#men-debug-middleware-mu" aria-hidden="true">#</a> Men-debug Middleware-mu</h2><p>Ketika membuat middleware-mu sendiri atau menduga middleware lain berjalan lambat, kamu bisa menggunakan middleware-midleware tersebut untuk melakukan pencatatan waktu.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  generateAfterMiddleware<span class="token punctuation">,</span>
  generateBeforeMiddleware<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;telegraf-middleware-console-time&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Gunakan BeforeMiddleware sebelum memuat middleware yang akan dites.</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">generateBeforeMiddleware</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Middleware yang akan dites</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* ... */</span>

<span class="token comment">// Gunakan AfterMiddleware setelah middleware yang dites berhasil dimuat (dengan label yang sama).</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">generateAfterMiddleware</span><span class="token punctuation">(</span><span class="token string">&quot;foo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Middleware atau implementasi lainnya (Mereka akan tercatat sebagai waktu &quot;inner&quot; ketika digunakan).</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* ... */</span>
bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span> <span class="token comment">/* ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hasilnya kurang lebih seperti ini:</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>490ai foo before: 304.185ms
490ai foo inner: 83.122ms
490ai foo after: 501.028ms
490ai foo total: 891.849ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hal ini mengindikasikan bahwa middleware yang dites tersebut berjalan selama 800 milidetik, yang mana tidak bekerja dengan baik seperti seharusnya.</p><h2 id="ringkasan-plugin" tabindex="-1"><a class="header-anchor" href="#ringkasan-plugin" aria-hidden="true">#</a> Ringkasan Plugin</h2>`,15),_=a("Sumber: "),f={href:"https://github.com/EdJoPaTo/telegraf-middleware-console-time",target:"_blank",rel:"noopener noreferrer"},w=a("https://"),y=n("wbr",null,null,-1),x=a("github"),q=n("wbr",null,null,-1),M=a(".com"),j=n("wbr",null,null,-1),E=a("/Ed"),T=n("wbr",null,null,-1),S=a("JoPaTo"),A=n("wbr",null,null,-1),B=a("/telegraf"),I=n("wbr",null,null,-1),N=a("-middleware"),P=n("wbr",null,null,-1),C=a("-console"),V=n("wbr",null,null,-1),J=a("-time");function K(L,U){const s=i("ExternalLinkIcon");return o(),l("div",null,[c,n("p",null,[d,n("a",r,[m,e(s)]),k,n("a",g,[b,e(s)]),v]),h,n("ul",null,[n("li",null,[_,n("a",f,[w,y,x,q,M,j,E,T,S,A,B,I,N,P,C,V,J,e(s)])])])])}const H=t(p,[["render",K],["__file","console-time.html.vue"]]);export{H as default};

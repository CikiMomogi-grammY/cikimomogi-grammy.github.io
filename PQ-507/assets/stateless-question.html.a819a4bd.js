import{_ as e,r as o,o as p,c as i,a as n,b as t,d as s,e as c}from"./app.59a23fc3.js";const u={},l=n("h1",{id:"stateless-question-stateless-question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#stateless-question-stateless-question","aria-hidden":"true"},"#"),s(" Stateless Question ("),n("code",null,[s("stateless"),n("wbr"),s("-question")]),s(")")],-1),r=n("blockquote",null,[n("p",null,"Membuat stateless question di mode privasi")],-1),k=s("Apakah kamu ingin mengirim pertanyaan menggunakan bahasa yang sedang digunakan user tanpa perlu mematikan "),d={href:"https://core.telegram.org/bots#privacy-mode",target:"_blank",rel:"noopener noreferrer"},m=s("mode privasi Telegram"),_=s(" serta tidak menyimpan statusnya saat ini?"),h=n("p",null,"Plugin ini bisa mengatasi masalah tersebut dengan mudah.",-1),b=s("Konsep dasarnya adalah dengan mengirim sebuah pertanyaan menggunakan "),g={href:"https://en.wikipedia.org/wiki/Zero-width_non-joiner",target:"_blank",rel:"noopener noreferrer"},v=s("teks spesial"),y=s(" di akhir kalimat. Teks spesial ini tidak terlihat oleh user, namun dapat dibaca oleh bot. Ketika user membalas pesan tersebut, maka pesan akan diperiksa apakah mengandung teks spesial di akhir kalimatnya. Jika ada, balasan pesan tersebut adalah jawaban dari pertanyaan yang kita berikan. Dengan demikian, kamu bisa memasukkan string berapapun jumlahnya ke pertanyaan yang sama ketika melakukan terjemahan. Kamu hanya perlu memastikan nilai "),f=n("code",null,[s("unique"),n("wbr"),s("Identifier")],-1),q=s("-nya benar-benar unik."),w=c(`<h2 id="penggunaan" tabindex="-1"><a class="header-anchor" href="#penggunaan" aria-hidden="true">#</a> Penggunaan</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> StatelessQuestion <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@grammyjs/stateless-question&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> unicornQuestion <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StatelessQuestion</span><span class="token punctuation">(</span><span class="token string">&quot;unicorns&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;User mengira unicorn sedang melakukan:&quot;</span><span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Jangan lupa gunakan middleware.</span>
bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>unicornQuestion<span class="token punctuation">.</span><span class="token function">middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;rainbows&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> text<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>session<span class="token punctuation">.</span>language <span class="token operator">===</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    text <span class="token operator">=</span> <span class="token string">&quot;Apa yang unicorn sedang lakukan?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    text <span class="token operator">=</span> <span class="token string">&quot;What are unicorns doing?&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">replyWithMarkdown</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Atau kirim pertanyaanmu secara manual</span>
<span class="token comment">// (pastikan untuk menggunakan parse_mode dan force_reply!).</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;unicorn&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithMarkdown</span><span class="token punctuation">(</span>
    <span class="token string">&quot;What are unicorns doing?&quot;</span> <span class="token operator">+</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">messageSuffixMarkdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;Markdown&quot;</span><span class="token punctuation">,</span> reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;unicorn&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithHTML</span><span class="token punctuation">(</span>
    <span class="token string">&quot;What are unicorns doing?&quot;</span> <span class="token operator">+</span> unicornQuestion<span class="token punctuation">.</span><span class="token function">messageSuffixHTML</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> parse_mode<span class="token operator">:</span> <span class="token string">&quot;HTML&quot;</span><span class="token punctuation">,</span> reply_markup<span class="token operator">:</span> <span class="token punctuation">{</span> force_reply<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x=s("Lihat "),j={href:"https://github.com/grammyjs/stateless-question",target:"_blank",rel:"noopener noreferrer"},M=s("README repo plugin"),Q=s(" untuk informasi lebih lanjut."),S=n("h2",{id:"ringkasan-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),s(" Ringkasan Plugin")],-1),L=n("li",null,[s("Nama: "),n("code",null,[s("stateless"),n("wbr"),s("-question")])],-1),T=s("Sumber: "),W={href:"https://github.com/grammyjs/stateless-question",target:"_blank",rel:"noopener noreferrer"},E=s("https://"),N=n("wbr",null,null,-1),A=s("github"),B=n("wbr",null,null,-1),V=s(".com"),H=n("wbr",null,null,-1),I=s("/grammyjs"),K=n("wbr",null,null,-1),P=s("/stateless"),D=n("wbr",null,null,-1),J=s("-question");function R(C,U){const a=o("ExternalLinkIcon");return p(),i("div",null,[l,r,n("p",null,[k,n("a",d,[m,t(a)]),_]),h,n("p",null,[b,n("a",g,[v,t(a)]),y,f,q]),w,n("p",null,[x,n("a",j,[M,t(a)]),Q]),S,n("ul",null,[L,n("li",null,[T,n("a",W,[E,N,A,B,V,H,I,K,P,D,J,t(a)])])])])}const z=e(u,[["render",R],["__file","stateless-question.html.vue"]]);export{z as default};

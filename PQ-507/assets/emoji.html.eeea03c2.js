import{_ as p,r as i,o as u,c as r,a as n,b as s,w as e,e as l,d as a}from"./app.59a23fc3.js";const k={},m=l('<h1 id="plugin-emoji-emoji" tabindex="-1"><a class="header-anchor" href="#plugin-emoji-emoji" aria-hidden="true">#</a> Plugin Emoji (<code>emoji</code>)</h1><p>Dengan plugin ini, kamu bisa menambahkan emoji secara otomatis di pesan balasanmu tanpa perlu bolak-balik copy-paste emoji dari web ke kode kamu.</p><h2 id="kenapa-aku-perlu-plugin-ini" tabindex="-1"><a class="header-anchor" href="#kenapa-aku-perlu-plugin-ini" aria-hidden="true">#</a> Kenapa Aku Perlu Plugin Ini?</h2><p>Kenapa tidak? Orang-orang sering menggunakan emoji di kode mereka untuk mengilustrasikan pesan yang ingin disampaikan ataupun menata sesuatu supaya terlihat lebih baik. Sayangnya, kamu akan kehilangan fokus setiap kali kamu membutuhkan sebuah emoji baru.</p><ol><li>Pertama, kamu berhenti menulis kode untuk mencari emoji tersebut.</li><li>Kemudian, kamu membuka chat Telegram lalu menghabiskan waktu kurang lebih 6 detik (atau bahkan lebih) untuk mencari emoji yang kamu inginkan.</li><li>Terakhir, kamu menyalin emoji tersebut ke dalam kode, lalu melanjutkan menulis kode dan semoga kamu tidak lupa sudah sampai mana kamu tadi menulis kode (baca: kehilangan fokus).</li></ol><p>Dengan plugin ini, kamu tidak akan kehilangan fokus karena berulang kali berhenti menulis kode hanya untuk menyalin emoji. Di samping itu, ada juga yang mengalami lag di sistem mereka ketika berpindah aplikasi atau bahkan code editor mereka tidak dapat menampilkan emoji, sehingga mereka hanya melihat sebuah kotak putih seperti pesan menyedihkan ini, <code>I&#39;m so happy \u25A1</code>.</p><p>Plugin ini bertujuan untuk mengatasi permasalahan tersebut dengan cara membantu kamu mengurai emoji di semua sistem dan menyediakan cara yang mudah untuk mencari emoji menggunakan fitur auto-complete. Sekarang, langkah-langkah di atas bisa dikurangi menjadi satu langkah berikut:</p><ol><li>Tulis emoji yang kamu inginkan langsung di kode kamu. Semudah itu.</li></ol><h3 id="apakah-ini-ilmu-sulap" tabindex="-1"><a class="header-anchor" href="#apakah-ini-ilmu-sulap" aria-hidden="true">#</a> Apakah Ini Ilmu Sulap?</h3>',9),d=a("Bukan sulap, bukan juga sihir. Teknik ini dinamakan template string. Kamu bisa membacanya lebih lanjut "),g={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",target:"_blank",rel:"noopener noreferrer"},h=a("di sini"),b=a("."),_=n("h2",{id:"penginstalan-dan-contoh-penggunaannya",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#penginstalan-dan-contoh-penggunaannya","aria-hidden":"true"},"#"),a(" Penginstalan dan Contoh Penggunaannya")],-1),v=n("p",null,"Kamu bisa menginstal plugin ini di bot kamu dengan cara seperti ini:",-1),y=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot"),n("span",{class:"token punctuation"},","),a(" Context "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" EmojiFlavor"),n("span",{class:"token punctuation"},","),a(" emojiParser "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@grammyjs/emoji"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Ini dinamakan Context Flavor"),a(`
`),n("span",{class:"token comment"},"// Kamu bisa membacanya di sini:"),a(`
`),n("span",{class:"token comment"},"// https://grammy.dev/id/guide/context.html#transformative-context-flavor"),a(`
`),n("span",{class:"token keyword"},"type"),a(),n("span",{class:"token class-name"},"MyContext"),a(),n("span",{class:"token operator"},"="),a(" EmojiFlavor"),n("span",{class:"token operator"},"<"),a("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},[a("Bot"),n("span",{class:"token operator"},"<"),a("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},'// <-- Masukkan token bot kamu di antara ""'),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"emojiParser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" emojiParser "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/emoji"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},'// <-- Masukkan token bot kamu di antara ""'),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"emojiParser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot"),n("span",{class:"token punctuation"},","),a(" Context "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(`
  EmojiFlavor`),n("span",{class:"token punctuation"},","),a(`
  emojiParser`),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy_emoji@v1.1.2/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Ini dinamakan Context Flavor"),a(`
`),n("span",{class:"token comment"},"// Kamu bisa membacanya di sini:"),a(`
`),n("span",{class:"token comment"},"// https://grammy.dev/id/guide/context.html#transformative-context-flavor"),a(`
`),n("span",{class:"token keyword"},"type"),a(),n("span",{class:"token class-name"},"MyContext"),a(),n("span",{class:"token operator"},"="),a(" EmojiFlavor"),n("span",{class:"token operator"},"<"),a("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},[a("Bot"),n("span",{class:"token operator"},"<"),a("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},'// <-- Masukkan token bot kamu di antara ""'),a(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"emojiParser"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=l(`<p>Sekarang, kamu bisa mencari emoji berdasarkan namanya:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> parsedString <span class="token operator">=</span> ctx<span class="token punctuation">.</span>emoji<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Halo! </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token string">&quot;smiling_face_with_sunglasses&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> <span class="token comment">// =&gt; Halo! \u{1F60E}</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>parsedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Cara lainnya, kamu bisa membalas secara langsung menggunakan method <code>reply<wbr>With<wbr>Emoji</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span>replyWithEmoji<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Pong </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token string">&quot;ping_pong&quot;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> <span class="token comment">// =&gt; Pong \u{1F3D3}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),x={class:"custom-container warning"},C=n("p",{class:"custom-container-title"},"Perlu Diperhatikan",-1),P=n("code",null,[a("ctx"),n("wbr"),a(".emoji")],-1),S=a(" dan "),E=n("code",null,[a("ctx"),n("wbr"),a(".reply"),n("wbr"),a("With"),n("wbr"),a("Emoji")],-1),q=a(),B=n("strong",null,"SELALU",-1),I=a(" menggunakan template string. Jika kamu belum familiar dengan syntax tersebut, pahami terlebih dahulu "),T={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",target:"_blank",rel:"noopener noreferrer"},K=a("materi ini"),M=a("."),F=n("h2",{id:"ringkasan-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),a(" Ringkasan Plugin")],-1),D=n("li",null,[a("Nama: "),n("code",null,"emoji")],-1),N=a("Sumber: "),W={href:"https://github.com/grammyjs/emoji",target:"_blank",rel:"noopener noreferrer"},G=a("https://"),J=n("wbr",null,null,-1),L=a("github"),R=n("wbr",null,null,-1),V=a(".com"),A=n("wbr",null,null,-1),U=a("/grammyjs"),z=n("wbr",null,null,-1),H=a("/emoji"),$=a("Referensi: "),O={href:"https://doc.deno.land/https://deno.land/x/grammy_emoji/mod.ts",target:"_blank",rel:"noopener noreferrer"},Q=l("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_emoji<wbr>/mod<wbr>.ts",23);function X(Y,Z){const t=i("ExternalLinkIcon"),o=i("CodeGroupItem"),c=i("CodeGroup");return u(),r("div",null,[m,n("p",null,[d,n("a",g,[h,s(t)]),b]),_,v,s(c,null,{default:e(()=>[s(o,{title:"TypeScript",active:""},{default:e(()=>[y]),_:1}),s(o,{title:"JavaScript"},{default:e(()=>[j]),_:1}),s(o,{title:"Deno"},{default:e(()=>[w]),_:1})]),_:1}),f,n("div",x,[C,n("p",null,[P,S,E,q,B,I,n("a",T,[K,s(t)]),M])]),F,n("ul",null,[D,n("li",null,[N,n("a",W,[G,J,L,R,V,A,U,z,H,s(t)])]),n("li",null,[$,n("a",O,[Q,s(t)])])])])}const an=p(k,[["render",X],["__file","emoji.html.vue"]]);export{an as default};

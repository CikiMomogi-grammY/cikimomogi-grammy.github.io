import{_ as r,r as u,o as d,c as k,b as e,a as n,w as s,d as a,e as t}from"./app.9837a88d.js";const m={},g=n("h1",{id:"menangani-file",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#menangani-file","aria-hidden":"true"},"#"),a(" Menangani File")],-1),b=t('<p>Bot Telegram tidak hanya bisa menerima dan mengirim pesan teks, tetapi juga jenis pesan lainnya, seperti foto dan video. Materi kali ini akan membahas bagaimana cara menangani file yang dilampirkan ke pesan.</p><h2 id="bagaimana-file-bekerja-di-bot-telegram" tabindex="-1"><a class="header-anchor" href="#bagaimana-file-bekerja-di-bot-telegram" aria-hidden="true">#</a> Bagaimana File Bekerja di Bot Telegram</h2><blockquote><p>Bagian ini menjelaskan bagaimana bot-bot Telegram menangani file. Kalau kamu ingin tahu cara menangani file di grammY, gulir ke bawah menuju <a href="#menerima-file">mengunduh</a> dan <a href="#mengirim-file">mengunggah</a> file.</p></blockquote><p>File disimpan terpisah dari pesan. Setiap file di server Telegram diidentifikasi dengan sebuah <code>file<wbr>_id</code>, isinya adalah sebuah string karakter yang sangat panjang.</p><p><code>AgADBAADZRAx<wbr>GyhM3FKSE4q<wbr>Ka<wbr>-RODckQHxsoABDHe0BDC1GzpGACAAEC</code> adalah contoh isi dari <code>file<wbr>_id</code>.</p>',5),h=a("Setiap kali bot "),_=n("strong",null,"menerima",-1),f=a(" sebuah file yang disertakan di sebuah pesan, ia sebenarnya hanya menerima "),y=n("code",null,[a("file"),n("wbr"),a("_id")],-1),v=a(", bukan data file aslinya. Kalau bot kamu ingin mengunduh file tersebut, maka ia perlu memanggil method "),w=n("code",null,[a("get"),n("wbr"),a("File")],-1),x=a(" ("),j={href:"https://core.telegram.org/bots/api#getfile",target:"_blank",rel:"noopener noreferrer"},F=a("Referensi API Bot Telegram"),I=a("). Method inilah yang bertugas membuat URL khusus sementara supaya kamu bisa mengunduh file tadi. Setelah 60 menit terlewati, URL tersebut tidak bisa digunakan. Jika itu terjadi, kamu cukup memanggil ulang "),A=n("code",null,[a("get"),n("wbr"),a("File")],-1),B=a("."),K=t("<p>Ketika sebuah bot <strong>mengirim</strong> pesan yang mengandung sebuah file, maka bot tersebut akan menerima informasi mengenai pesan yang terkirim tersebut, termasuk informasi <code>file<wbr>_id</code> dari file yang terkirim. Artinya, semua file yang bot lihat, baik file yang dikirim maupun yang diterima, <code>file<wbr>_id</code>-nya akan tersedia untuk bot tersebut.</p><p>Ketika sebuah bot mengirim sebuah pesan, ia bisa <strong>menentukan <code>file<wbr>_id</code> yang sebelumnya pernah dilihat oleh bot</strong>. Dengan begitu, ia dapat mengirim file yang teridentifikasi tanpa harus mengunggah data file tersebut.</p>",2),M=n("a",{href:"#mengirim-file"},"Gulir ke bawah",-1),P=a(" untuk belajar cara mengunggah file-mu sendiri. Kamu bisa menggunakan kembali "),q=n("code",null,[a("file"),n("wbr"),a("_id")],-1),R=a(" yang sama berulang kali. Artinya, kamu bisa menggunakan "),C=n("code",null,[a("file"),n("wbr"),a("_id")],-1),D=a(" untuk mengirim file yang sama ke lima chat berbeda. Meski begitu, kamu tetap harus menggunakan method yang sesuai, contohnya "),T=n("code",null,[a("file"),n("wbr"),a("_id")],-1),L=a(" yang mengidentifikasikan sebuah foto tidak dapat digunakan ketika memanggil "),S={href:"https://core.telegram.org/bots/api#sendvideo",target:"_blank",rel:"noopener noreferrer"},U=n("code",null,[a("send"),n("wbr"),a("Video")],-1),Y=a("."),E=t(`<p>Setiap bot memiliki <code>file<wbr>_id</code>-nya sendiri untuk mengakses file. Kamu tidak bisa menggunakan <code>file<wbr>_id</code> dari bot lain untuk mengakses file yang sama di bot kamu. Masing-masing bot menggunakan pengidentifikasi yang berbeda untuk satu file yang sama. Sehingga, kamu tidak bisa asal menebak <code>file<wbr>_id</code> lalu mengakses file seseorang begitu saja karena Telegram telah menentukan <code>file<wbr>_id</code> mana yang valid untuk bot kamu.</p><div class="custom-container warning"><p class="custom-container-title">Menggunakan file_id dari Sumber Luar</p><p>Perlu dicatat bahwa dalam beberapa kasus, <code>file<wbr>_id</code> dari bot lain sesekali bisa bekerja dengan baik di bot kamu karena secara teknis itu memang memungkinkan. <strong>Tetapi</strong>, menggunakan <code>file<wbr>_id</code> dari sumber luar seperti itu bisa berbahaya karena ia dapat tidak bekerja sewaktu-waktu tanpa peringatan. Oleh karena itu, selalu gunakan <code>file<wbr>_id</code> yang memang diperuntukkan khusus untuk bot kamu.</p></div><p>Di sisi lain, bot bisa saja secara kebetulan mendapat <code>file<wbr>_id</code> yang berbeda untuk satu file yang sama. Karenanya, kamu tidak bisa mengandalkan <code>file<wbr>_id</code> untuk membandingkan apakah dua file identik atau tidak. Kalau bot kamu\u2014atau beberapa bot\u2014perlu mengidentifikasi file yang sama dari waktu ke waktu, kamu harus menggunakan value dari <code>file<wbr>_unique<wbr>_id</code> yang bot terima bersamaan dengan <code>file<wbr>_id</code>. <code>file<wbr>_unique<wbr>_id</code> tidak bisa digunakan untuk mengunduh file, namun value-nya akan selalu sama untuk setiap file yang diberikan, bahkan untuk setiap bot.</p><h2 id="menerima-file" tabindex="-1"><a class="header-anchor" href="#menerima-file" aria-hidden="true">#</a> Menerima File</h2><p>Kamu bisa menangani sebuah file seperti pesan-pesan lainnya. Contohnya, kalau kamu ingin mendengarkan pesan suara, kamu bisa melakukan ini:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message:voice&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> suara <span class="token operator">=</span> ctx<span class="token punctuation">.</span>msg<span class="token punctuation">.</span>voice<span class="token punctuation">;</span>

  <span class="token keyword">const</span> durasi <span class="token operator">=</span> voice<span class="token punctuation">.</span>duration<span class="token punctuation">;</span> <span class="token comment">// dalam satuan detik</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Pesan suara kamu berdurasi </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>durasi<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> detik.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> fileId <span class="token operator">=</span> voice<span class="token punctuation">.</span>file_id<span class="token punctuation">;</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Pengidentifikasi file pesan suaramu adalah: &quot;</span> <span class="token operator">+</span> fileId<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">getFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// valid selama 1 jam</span>
  <span class="token keyword">const</span> path <span class="token operator">=</span> file<span class="token punctuation">.</span>file_path<span class="token punctuation">;</span> <span class="token comment">// path file di server API Bot</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;Unduh lagi file kamu: &quot;</span> <span class="token operator">+</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),N={class:"custom-container tip"},G=n("p",{class:"custom-container-title"},"Meneruskan file_id Lain ke getFile",-1),z=a("Di object context, "),O=n("code",null,[a("get"),n("wbr"),a("File")],-1),V=a(" adalah "),W=a("sebuah shortcut"),H=a(" yang mengambil informasi file dari pesan tersebut saja. Kalau ingin mendapatkan file lain selagi menangani pesan, gunakan "),J=n("code",null,[a("ctx"),n("wbr"),a(".api"),n("wbr"),a(".get"),n("wbr"),a("File(file"),n("wbr"),a("_id)")],-1),Q=a("."),Z=a("Lihat "),$=a("shortcut "),X=n("code",null,[a(":"),n("wbr"),a("media")],-1),nn=a(" dan "),an=n("code",null,[a(":"),n("wbr"),a("file")],-1),en=a(" di filter query untuk menerima berbagai macam file."),sn=t("<p>Setelah kamu memanggil <code>get<wbr>File</code>, kamu bisa menggunakan <code>file<wbr>_path</code> untuk mengunduh file menggunakan URL ini <code>https://<wbr>api<wbr>.telegram<wbr>.org<wbr>/file<wbr>/bot&lt;token&gt;<wbr>/&lt;file<wbr>_path&gt;</code>, di mana <code>&lt;token&gt;</code> adalah token bot kamu.</p>",1),tn={class:"custom-container tip"},on=n("p",{class:"custom-container-title"},"Plugin Files",-1),ln=a("grammY tidak menyertakan pengunduh file secara bawaan, sebagai gantinya kamu bisa memasang "),un=a("plugin files resmi"),cn=a(" yang telah kami sediakan. Kamu bisa mengunduh file dengan plugin tersebut melalui "),pn=n("code",null,[a("await file"),n("wbr"),a(".download()")],-1),rn=a(" dan membuat URL download mengunakan "),dn=n("code",null,[a("file"),n("wbr"),a(".get"),n("wbr"),a("Url()")],-1),kn=a("."),mn=n("h2",{id:"mengirim-file",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mengirim-file","aria-hidden":"true"},"#"),a(" Mengirim File")],-1),gn=a("Bot Telegram punya "),bn={href:"https://core.telegram.org/bots/api#sending-files",target:"_blank",rel:"noopener noreferrer"},hn=a("tiga cara"),_n=a(" untuk mengirim file:"),fn=t(`<ol><li>Melalui <code>file<wbr>_id</code>, contohnya mengirim file menggunakan pengidentifikasi yang sudah diketahui bot.</li><li>Melalui URL, contohnya meneruskan URL file yang tersedia untuk publik, yang akan diunduh oleh Telegram lalu mengirimkannya.</li><li>Mengunggah file-mu sendiri.</li></ol><p>Terlepas dari ketiga cara tersebut, mereka menggunakan nama method yang sama. Sedangkan, parameter dari function-nya akan berbeda-beda tergantung dari cara yang kamu pilih. Misal, untuk mengirim foto, kamu bisa menggunakan <code>ctx<wbr>.reply<wbr>With<wbr>Photo</code>, atau <code>send<wbr>Photo</code> kalau menggunakan <code>ctx<wbr>.api</code> atau <code>bot<wbr>.api</code>.</p><p>Kamu bisa mengirim jenis file lain dengan mengganti nama method dan jenis datanya. Untuk mengirim video, kamu bisa menggunakan <code>ctx<wbr>.reply<wbr>With<wbr>Video</code>. Sama halnya dengan dokumen: <code>ctx<wbr>.reply<wbr>With<wbr>Document</code>. Kurang lebih seperti itu.</p><p>Mari kita kupas lebih dalam ketiga cara pengiriman file tadi.</p><h3 id="melalui-file-id-atau-url" tabindex="-1"><a class="header-anchor" href="#melalui-file-id-atau-url" aria-hidden="true">#</a> Melalui <code>file<wbr>_id</code> atau URL</h3><p>Dua method yang pertama cukup simpel: kamu hanya perlu mengisi value sebagai sebuah <code>string</code>, selesai!</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Kirim melalui file_id.</span>
<span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithPhoto</span><span class="token punctuation">(</span>idFilenya<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Kirim melalui URL.</span>
<span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithPhoto</span><span class="token punctuation">(</span><span class="token string">&quot;https://grammy.dev/Y.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Alternatifnya, kamu bisa menggunakan</span>
<span class="token comment">// bot.api.sendPhoto() atau ctx.api.sendPhoto().</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mengunggah-file-mu-sendiri" tabindex="-1"><a class="header-anchor" href="#mengunggah-file-mu-sendiri" aria-hidden="true">#</a> Mengunggah File-mu Sendiri</h3>`,8),yn=a("grammY memiliki dukungan yang baik terhadap pengunggahan file secara mandiri. Kamu bisa melakukannya dengan meng-import dan menggunakan class "),vn=n("code",null,[a("Input"),n("wbr"),a("File")],-1),wn=a(" ("),xn={href:"https://doc.deno.land/https://deno.land/x/grammy/mod.ts/~/InputFile",target:"_blank",rel:"noopener noreferrer"},jn=a("Referensi API grammY"),Fn=a(")."),In=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Kirim sebuah file melalui path lokal</span>
<span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithPhoto</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputFile</span><span class="token punctuation">(</span><span class="token string">&quot;/tmp/kocheng-oren-uwu.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Alternatifnya, gunakan bot.api.sendPhoto() atau ctx.api.sendPhoto()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Constructor <code>Input<wbr>File</code> tidak hanya mengambil path file, tetapi juga stream, object <code>Buffer</code>, perulangan async, dan\u2014tergantung dari platform kamu\u2014banyak lagi. Yang perlu diingat adalah: <strong>buat sebuah instance <code>Input<wbr>File</code> lalu teruskan ke method yang bertugas mengirim file</strong>. Instance <code>Input<wbr>File</code> bisa diteruskan ke semua method yang menerima pengiriman file melalui unggahan.</p><p>Berikut beberapa contoh bagaimana kamu bisa membuat <code>Input<wbr>File</code>.</p><h4 id="mengunggah-file-dari-disk" tabindex="-1"><a class="header-anchor" href="#mengunggah-file-dari-disk" aria-hidden="true">#</a> Mengunggah File dari Disk</h4><p>Kalau kamu sudah punya file yang tersimpan di komputermu, kamu bisa menyuruh grammY untuk mengunggah file tersebut.</p>`,5),An=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" createReadStream "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"fs"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Kirim file lokal"),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/path/ke/file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Kirim dari pembacaan stream."),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"createReadStream"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/path/ke/file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Bn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// Kirim file lokal"),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/path/ke/file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Kirim instance `Deno.FsFile`."),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"await"),a(" Deno"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"/path/ke/file"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Kn=n("h4",{id:"mengunggah-raw-binary-data",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mengunggah-raw-binary-data","aria-hidden":"true"},"#"),a(" Mengunggah Raw Binary Data")],-1),Mn=n("p",null,[a("Kamu juga bisa mengirim object "),n("code",null,"Buffer"),a(", maupun sebuah perulangan yang menghasilkan object "),n("code",null,"Buffer"),a(". Di Deno, kamu bisa mengirim object "),n("code",null,"Blob"),a(" juga.")],-1),Pn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// Kirim sebuah buffer atau array byte."),a(`
`),n("span",{class:"token keyword"},"const"),a(" buffer "),n("span",{class:"token operator"},"="),a(" Uint8Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"66"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"67"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),a("buffer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},'// "ABC"'),a(`
`),n("span",{class:"token comment"},"// Kirim sebuah perulangan."),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// "ABCABCABCABC"'),a(`
  `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token keyword"},"yield"),a(" buffer"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),qn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// Kirim sebuah blob."),a(`
`),n("span",{class:"token keyword"},"const"),a(" blob "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Blob"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"ABC"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(" type"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"text/plain"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),a("blob"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token comment"},"// Kirim sebuah buffer atau array byte."),a(`
`),n("span",{class:"token keyword"},"const"),a(" buffer "),n("span",{class:"token operator"},"="),a(" Uint8Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"65"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"66"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"67"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),a("buffer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},'// "ABC"'),a(`
`),n("span",{class:"token comment"},"// Kirim sebuah perulangan."),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"function"),n("span",{class:"token operator"},"*"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},'// "ABCABCABCABC"'),a(`
  `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token keyword"},"yield"),a(" buffer"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Rn=n("h4",{id:"mengunduh-dan-mengunggah-file-kembali",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mengunduh-dan-mengunggah-file-kembali","aria-hidden":"true"},"#"),a(" Mengunduh dan Mengunggah File Kembali")],-1),Cn=n("p",null,"Kamu bahkan bisa menyuruh grammY untuk mengunduh file dari internet. File hasil unduhan tidak akan disimpan di disk kamu. Sebaliknya, grammY cuma melewatkan data tersebut dan menyimpan sepotong kecil data ke memori. Sangat efisien, bukan.",-1),Dn=n("blockquote",null,[n("p",null,[a("Perlu dicatat bahwa Telegram mendukung pengunduhan file dengan berbagai cara. Jika memungkinkan, sebaiknya kamu "),n("a",{href:"#melalui-file-id-atau-url"},"mengirim file menggunakan URL"),a(", daripada menggunakan "),n("code",null,[a("Input"),n("wbr"),a("File")]),a(" untuk mengalirkan data file melalui server kamu.")])],-1),Tn=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token constant"},"URL"),a(),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"url"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Unduh file lalu alirkan data ke Telegram."),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},[n("span",{class:"token constant"},"URL")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://grammy.dev/Y.png"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" url"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"https://grammy.dev/Y.png"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// sama saja"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Ln=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token comment"},"// Unduh file lalu alirkan data ke Telegram."),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},[n("span",{class:"token constant"},"URL")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"https://grammy.dev/Y.png"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"InputFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(" url"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"https://grammy.dev/Y.png"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// sama saja"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),Sn=n("h3",{id:"menambahkan-caption",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#menambahkan-caption","aria-hidden":"true"},"#"),a(" Menambahkan Caption")],-1),Un=a("Ketika mengirim file, kamu bisa menentukan opsi lebih lanjut di pilihan object type "),Yn=n("code",null,"Other",-1),En=a(", persis seperti yang sudah dijelaskan "),Nn=a("sebelumnya"),Gn=a(". Kode berikut akan mengirimkan caption."),zn=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Kirim sebuah foto dari file lokal ke user 12345</span>
<span class="token comment">// dengan caption &quot;Ngopi dulu, bro!&quot;.</span>
<span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">sendPhoto</span><span class="token punctuation">(</span>
  <span class="token number">12345</span><span class="token punctuation">,</span>
  <span class="token keyword">new</span> <span class="token class-name">InputFile</span><span class="token punctuation">(</span><span class="token string">&quot;/path/ke/foto-permen-kopi-susu.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    caption<span class="token operator">:</span> <span class="token string">&quot;Ngopi dulu, bro!&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Seperti pada method API lainnya, kamu bisa mengirim file menggunakan <code>ctx</code> (cara termudah), <code>ctx<wbr>.api</code>, atau <code>bot<wbr>.api</code>.</p><h2 id="batas-ukuran-file" tabindex="-1"><a class="header-anchor" href="#batas-ukuran-file" aria-hidden="true">#</a> Batas Ukuran File</h2>`,3),On=a("Sebenarnya, grammY sanggup mengirim file berapapun ukurannya. Namun, Telegram membatasi ukuran file yang diperbolehkan seperti yang didokumentasikan "),Vn={href:"https://core.telegram.org/bots/api#sending-files",target:"_blank",rel:"noopener noreferrer"},Wn=a("di sini"),Hn=a(". Sehingga, bot kamu tidak bisa mengunduh file lebih besar dari 20 MB ataupun menunggah file di atas 50 MB. Kombinasi tertentu bahkan memiliki batas yang lebih kecil lagi, contohnya foto yang dikirim melalui URL (5 MB)."),Jn=a("Selain kamu meng-hosting bot, kamu juga harus meng-hosting server API Bot kamu sendiri, kalau memang ingin supaya bot kamu bisa mengunduh dan mengunggah file hingga 2000 MB (batasan ukuran file di Telegram). Lihat dokumentasi resminya "),Qn={href:"https://core.telegram.org/bots/api#using-a-local-bot-api-server",target:"_blank",rel:"noopener noreferrer"},Zn=a("di sini"),$n=a("."),Xn=n("p",null,"Meng-hosting server API Bot tidak ada hubungannya dengan grammY. Meski begitu, grammY mendukung method-method yang dibutuhkan untuk mengatur bot kamu agar dapat menggunakan server API Bot milikmu sendiri.",-1),na=a("Kamu mungkin ingin mengunjungi materi sebelumnya mengenai skema API Bot "),aa=a("di sini"),ea=a(".");function sa(ta,ia){const p=u("AutotagPage"),i=u("ExternalLinkIcon"),l=u("RouterLink"),o=u("CodeGroupItem"),c=u("CodeGroup");return d(),k("div",null,[g,e(p,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),b,n("p",null,[h,_,f,y,v,w,x,n("a",j,[F,e(i)]),I,A,B]),K,n("p",null,[M,P,q,R,C,D,T,L,n("a",S,[U,e(i)]),Y]),E,n("div",N,[G,n("p",null,[z,O,V,e(l,{to:"/id/guide/context.html#shortcut"},{default:s(()=>[W]),_:1}),H,J,Q])]),n("blockquote",null,[n("p",null,[Z,e(l,{to:"/id/guide/filter-queries.html#shortcut"},{default:s(()=>[$,X,nn,an]),_:1}),en])]),sn,n("div",tn,[on,n("p",null,[ln,e(l,{to:"/id/plugins/files.html"},{default:s(()=>[un]),_:1}),cn,pn,rn,dn,kn])]),mn,n("p",null,[gn,n("a",bn,[hn,e(i)]),_n]),fn,n("p",null,[yn,vn,wn,n("a",xn,[jn,e(i)]),Fn]),In,e(c,null,{default:s(()=>[e(o,{title:"Node.js",active:""},{default:s(()=>[An]),_:1}),e(o,{title:"Deno"},{default:s(()=>[Bn]),_:1})]),_:1}),Kn,Mn,e(c,null,{default:s(()=>[e(o,{title:"Node.js",active:""},{default:s(()=>[Pn]),_:1}),e(o,{title:"Deno"},{default:s(()=>[qn]),_:1})]),_:1}),Rn,Cn,Dn,e(c,null,{default:s(()=>[e(o,{title:"Node.js",active:""},{default:s(()=>[Tn]),_:1}),e(o,{title:"Deno"},{default:s(()=>[Ln]),_:1})]),_:1}),Sn,n("p",null,[Un,Yn,En,e(l,{to:"/id/guide/basics.html#mengirim-pesan"},{default:s(()=>[Nn]),_:1}),Gn]),zn,n("p",null,[On,n("a",Vn,[Wn,e(i)]),Hn]),n("p",null,[Jn,n("a",Qn,[Zn,e(i)]),$n]),Xn,n("p",null,[na,e(l,{to:"/id/guide/api.html"},{default:s(()=>[aa]),_:1}),ea])])}const la=r(m,[["render",sa],["__file","files.html.vue"]]);export{la as default};

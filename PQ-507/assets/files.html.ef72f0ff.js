import{_ as u,r as o,o as r,c as k,b as a,w as t,a as n,e as l,d as s}from"./app.59a23fc3.js";const d={},m=l('<h1 id="menangani-file-dengan-mudah-di-grammy-files" tabindex="-1"><a class="header-anchor" href="#menangani-file-dengan-mudah-di-grammy-files" aria-hidden="true">#</a> Menangani File dengan Mudah di grammY (<code>files</code>)</h1><p>Plugin ini memudahkan kamu untuk mengunduh file dari server Telegram dan memperoleh URL-nya agar kamu dapat mengunduh file tersebut secara mandiri.</p><h2 id="mengunduh-file" tabindex="-1"><a class="header-anchor" href="#mengunduh-file" aria-hidden="true">#</a> Mengunduh File</h2><p>Plugin ini memerlukan token bot kamu untuk melakukan autentikasi ketika mengunduh sebuah file. Jika berhasil, method <code>download</code> akan tersedia di hasil pemanggilan <code>get<wbr>File</code>. Contohnya,</p>',4),b=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" FileFlavor"),n("span",{class:"token punctuation"},","),s(" hydrateFiles "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/files"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Transformative Context flavor"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" FileFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Gunakan plugin ini."),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateFiles"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Unduh video and GIF ke lokasi sementara."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'":video"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'":animation"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// Siapkan file yang akan diunduh."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" file "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Unduh file ke lokasi sementara."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"download"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Cetak path file-nya."),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"File disimpan di "'),n("span",{class:"token punctuation"},","),s(" path"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrateFiles "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/files"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Gunakan plugin ini."),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateFiles"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Unduh video and GIF ke lokasi sementara."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'":video"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'":animation"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// Siapkan file yang akan diunduh."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" file "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Unduh file ke lokasi sementara."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"download"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Cetak path file-nya."),s(`
  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"File disimpan di "'),n("span",{class:"token punctuation"},","),s(" path"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  FileFlavor`),n("span",{class:"token punctuation"},","),s(`
  hydrateFiles`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_files@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Transformative Context flavor"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" FileFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Buat sebuah bot."),s(`
`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"BOT_TOKEN"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Gunakan plugin ini."),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"hydrateFiles"),n("span",{class:"token punctuation"},"("),s("bot"),n("span",{class:"token punctuation"},"."),s("token"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Unduh video and GIF ke lokasi sementara."),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"on"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'":video"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},'":animation"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// Siapkan file yang akan diunduh."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" file "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFile"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Unduh file ke lokasi sementara."),s(`
  `),n("span",{class:"token keyword"},"const"),s(" path "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"await"),s(" file"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"download"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// Cetak path file-nya."),s(`
  `),n("span",{class:"token builtin"},"console"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"File disimpan di "'),n("span",{class:"token punctuation"},","),s(" path"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=l('<p>Kamu bisa memasukkan sebuah string berisi path file ke <code>download</code> jika kamu tidak ingin membuat file sementara. Cukup lakukan <code>await file<wbr>.download(&quot;<wbr>/path<wbr>/ke<wbr>/file&quot;)</code>.</p><p>Jika kamu ingin mendapatkan URL file-nya saja agar kamu bisa mengunduhnya secara mandiri, gunakan <code>file<wbr>.get<wbr>Url</code>. Ia akan mengembalikan sebuah link HTTPS menuju file kamu yang valid selama satu jam.</p><h2 id="server-api-bot-lokal" tabindex="-1"><a class="header-anchor" href="#server-api-bot-lokal" aria-hidden="true">#</a> Server API Bot Lokal</h2>',3),y=s("Jika kamu menggunakan "),_={href:"https://core.telegram.org/bots/api#using-a-local-bot-api-server",target:"_blank",rel:"noopener noreferrer"},f=s("server API bot lokal"),w=s(", pemanggilan "),F=n("code",null,[s("get"),n("wbr"),s("File")],-1),x=s(" akan mengunduh file tersebut ke disk kamu."),C=l('<p>Hasilnya, kamu bisa memanggil <code>file<wbr>.get<wbr>Url()</code> untuk mengakses path file tersebut. Perlu dicatat, <code>await file<wbr>.download()</code> mulai sekarang akan menyalin file yang tersedia secara lokal tersebut ke lokasi sementara (atau ke path yang diberikan jika telah ditentukan).</p><h2 id="dukungan-pemanggilan-bot-api" tabindex="-1"><a class="header-anchor" href="#dukungan-pemanggilan-bot-api" aria-hidden="true">#</a> Dukungan Pemanggilan <code>bot<wbr>.api</code></h2>',2),B=s("Secara bawaan, hasil dari "),j=n("code",null,[s("await bot"),n("wbr"),s(".api"),n("wbr"),s(".get"),n("wbr"),s("File()")],-1),A=s(" juga akan dilengkapi dengan method "),M=n("code",null,"download",-1),T=s(" dan "),I=n("code",null,[s("get"),n("wbr"),s("Url")],-1),U=s(". Namun, method-method ini tidak akan tampak di type tersebut. Jika kamu membutuhkannya, kamu juga bisa menginstal sebuah "),G=s("API flavor"),N=s(),S=n("code",null,[s("File"),n("wbr"),s("Api"),n("wbr"),s("Flavor")],-1),P=s(" di object bot tersebut."),L=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Api"),n("span",{class:"token punctuation"},","),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" FileApiFlavor"),n("span",{class:"token punctuation"},","),s(" FileFlavor"),n("span",{class:"token punctuation"},","),s(" hydrateFiles "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/files"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" FileFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyApi"),s(),n("span",{class:"token operator"},"="),s(" FileApiFlavor"),n("span",{class:"token operator"},"<"),s("Api"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token punctuation"},","),s(" MyApi"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// ..."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Api"),n("span",{class:"token punctuation"},","),s(" Bot"),n("span",{class:"token punctuation"},","),s(" Context "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  FileApiFlavor`),n("span",{class:"token punctuation"},","),s(`
  FileFlavor`),n("span",{class:"token punctuation"},","),s(`
  hydrateFiles`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_files@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyContext"),s(),n("span",{class:"token operator"},"="),s(" FileFlavor"),n("span",{class:"token operator"},"<"),s("Context"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"MyApi"),s(),n("span",{class:"token operator"},"="),s(" FileApiFlavor"),n("span",{class:"token operator"},"<"),s("Api"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("MyContext"),n("span",{class:"token punctuation"},","),s(" MyApi"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// ..."),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("h2",{id:"ringkasan-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),s(" Ringkasan Plugin")],-1),R=n("li",null,[s("Nama: "),n("code",null,"files")],-1),J=s("Sumber: "),K={href:"https://github.com/grammyjs/files",target:"_blank",rel:"noopener noreferrer"},V=s("https://"),D=n("wbr",null,null,-1),q=s("github"),H=n("wbr",null,null,-1),Y=s(".com"),z=n("wbr",null,null,-1),Q=s("/grammyjs"),W=n("wbr",null,null,-1),X=s("/files"),Z=s("Referensi: "),$={href:"https://doc.deno.land/https://deno.land/x/grammy_files/mod.ts",target:"_blank",rel:"noopener noreferrer"},nn=l("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_files<wbr>/mod<wbr>.ts",23);function sn(an,tn){const e=o("CodeGroupItem"),i=o("CodeGroup"),c=o("ExternalLinkIcon"),p=o("RouterLink");return r(),k("div",null,[m,a(i,null,{default:t(()=>[a(e,{title:"TypeScript",active:""},{default:t(()=>[b]),_:1}),a(e,{title:"JavaScript"},{default:t(()=>[h]),_:1}),a(e,{title:"Deno"},{default:t(()=>[g]),_:1})]),_:1}),v,n("p",null,[y,n("a",_,[f,a(c)]),w,F,x]),C,n("p",null,[B,j,A,M,T,I,U,a(p,{to:"/id/advanced/transformers.html#menggunakan-api-flavor"},{default:t(()=>[G]),_:1}),N,S,P]),a(i,null,{default:t(()=>[a(e,{title:"Node.js",active:""},{default:t(()=>[L]),_:1}),a(e,{title:"Deno"},{default:t(()=>[E]),_:1})]),_:1}),O,n("ul",null,[R,n("li",null,[J,n("a",K,[V,D,q,H,Y,z,Q,W,X,a(c)])]),n("li",null,[Z,n("a",$,[nn,a(c)])])])])}const on=u(d,[["render",sn],["__file","files.html.vue"]]);export{on as default};

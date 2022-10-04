import{_ as p,r as i,o as r,c as k,b as s,a as n,w as t,d as a,e as d}from"./app.9837a88d.js";const m={},g=n("h1",{id:"peningkatan-iii-reliabilitas",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#peningkatan-iii-reliabilitas","aria-hidden":"true"},"#"),a(" Peningkatan III: Reliabilitas")],-1),b=a("Sebelum memulai, pastikan kamu sudah memasang "),h=a("error handler"),_=a(" yang sesuai dengan bot-mu. Semua error yang kemungkinan besar bisa terjadi (pemanggilan API yang gagal, koneksi yang tidak tersambung, query database yang gagal dilakukan, middleware yang tidak berjalan dengan baik, dsb) harus bisa ditangkap dan ditangani dengan baik."),y=n("p",null,[a("Kamu juga sebaiknya menggunakan "),n("code",null,"await"),a(" di setiap promise. Jika masih bersikeras untuk tidak menggunakan "),n("code",null,"await"),a(", setidaknya pasang "),n("code",null,"catch"),a(" sebagai gantinya. Pakai "),n("em",null,"linting rule"),a(" supaya kamu tidak lupa menggunakannya.")],-1),f=n("h2",{id:"graceful-shutdown",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#graceful-shutdown","aria-hidden":"true"},"#"),a(" Graceful shutdown")],-1),v=a("Ada satu hal yang harus diperhatikan khusus untuk bot-bot yang menggunakan long polling. Sebelum mematikan bot atau instance yang sedang berjalan, kamu sebaiknya menangkap event "),w=n("code",null,"SIGTERM",-1),j=a(" dan "),I=n("code",null,"SIGINT",-1),x=a(" terlebih dahulu, kemudian panggil "),S=n("code",null,[a("bot"),n("wbr"),a(".stop")],-1),R=a(" (built-in di long polling) atau hentikan bot menggunakan "),T={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/RunnerHandle#stop",target:"_blank",rel:"noopener noreferrer"},G=a("handle"),D=a(" (grammY runner)"),E=n("h3",{id:"long-polling-sederhana",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#long-polling-sederhana","aria-hidden":"true"},"#"),a(" Long Polling Sederhana")],-1),N=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Node.js akan dimatikan"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"await"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Node.js akan dimatikan"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"await"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Deno akan dimatikan"),a(`
Deno`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addSignalListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
Deno`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addSignalListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"await"),a(" bot"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("h3",{id:"menggunakan-grammy-runner",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#menggunakan-grammy-runner","aria-hidden":"true"},"#"),a(" Menggunakan grammY Runner")],-1),L=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" runner "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Node.js akan dimatikan"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"stopRunner"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isRunning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"&&"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/runner"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" runner "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Node.js akan dimatikan"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"stopRunner"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isRunning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"&&"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
process`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"once"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Bot "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" run "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"https://deno.land/x/grammy_runner@v1.0.4/mod.ts"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" bot "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"<token>"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" runner "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"run"),n("span",{class:"token punctuation"},"("),a("bot"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Hentikan bot ketika proses Deno akan dimatikan"),a(`
`),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"stopRunner"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isRunning"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"&&"),a(" runner"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
Deno`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addSignalListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGINT"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
Deno`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addSignalListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"SIGTERM"'),n("span",{class:"token punctuation"},","),a(" stopRunner"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),M=n("p",null,"Itulah tips-tips untuk menjaga reliabilitas bot kamu. Jika diterapkan dengan benar, seharusnya tidak akan terjadi crash lagi di bot kamu.",-1),Y=n("h2",{id:"menjamin-reliabilitas",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#menjamin-reliabilitas","aria-hidden":"true"},"#"),a(" Menjamin Reliabilitas")],-1),C=a("Bagaimana jika suatu saat bot kamu sedang menangani transaksi pembayaran, lalu kamu dihadapkan "),H={href:"https://stackoverflow.com/questions/43724467/what-is-the-difference-between-kill-and-kill-9",target:"_blank",rel:"noopener noreferrer"},z=a("skenario "),U=n("code",null,[a("kill"),n("wbr"),a("-9")],-1),O=a(" karena CPU tiba-tiba terbakar atau terjadi pemadaman listrik secara tiba-tiba. Masalah akan menjadi sedikit rumit ketika dihadapkan dengan kondisi yang mengharuskan proses bot dihentikan secara paksa di saat itu juga."),J=a("Akibatnya, bot tidak bisa menjamin eksekusi middleware kamu dijalankan tepat satu kali. Simak "),V={href:"https://github.com/tdlib/telegram-bot-api/issues/126",target:"_blank",rel:"noopener noreferrer"},F=a("diskusi di Git"),W=n("wbr",null,null,-1),Q=a("Hub ini"),X=a(" untuk mengetahui "),Z=n("strong",null,"kenapa",-1),$=a(" bot kamu mengirim pesan duplikat (atau bahkan tidak mengirim pesan sama kali) di suatu kondisi tertentu. Di materi ini kita akan memahami "),nn=n("strong",null,"bagaimana",-1),an=a(" grammY bertindak di kondisi yang tidak biasa tersebut, serta bagaimana kita bisa mengatasinya dengan baik."),sn=a("Apakah kamu cuma tertarik untuk membuat bot Telegram? Silahkan "),tn=a("lewati sisa halaman ini"),en=n("wbr",null,null,-1),on=a("."),cn=d('<h3 id="webhook" tabindex="-1"><a class="header-anchor" href="#webhook" aria-hidden="true">#</a> Webhook</h3><p>Kalau kamu menjalankan bot menggunakan webhook, server API Bot akan terus mengirim ulang update ke bot kamu ketika ia tidak menerima respon <code>OK</code>. Itulah kenapa bot kamu akan mengirim pesan duplikat ketika ia dijalankan kembali dari proses penghentian yang tidak wajar. Kalau kamu ingin mencegah hal tersebut terjadi, kamu harus membuat pencegah duplikasimu sendiri berdasarkan <code>update<wbr>_id</code> karena grammY belum menyediakan fitur tersebut. Tetapi, jika kamu merasa seseorang akan terbantu dengan pencegah duplikasi buatanmu, silahkan kirim pull request ke repositori kami.</p><h3 id="long-polling" tabindex="-1"><a class="header-anchor" href="#long-polling" aria-hidden="true">#</a> Long Polling</h3><p>Long polling lebih menarik lagi. Polling bawaan pada dasarnya memproses kembali <em>batch</em> update terbaru yang sebelumnya gagal diproses.</p>',4),un=a("Perlu diingat bahwa jika kamu menghentikan bot menggunakan "),ln=n("code",null,[a("bot"),n("wbr"),a(".stop")],-1),pn=a(", "),rn={href:"https://core.telegram.org/bots/api#getupdates",target:"_blank",rel:"noopener noreferrer"},kn=a("offset dari update"),dn=a(" tersebut akan disinkronkan dengan server Telegram dengan cara memanggil "),mn=n("code",null,[a("get"),n("wbr"),a("Updates")],-1),gn=a(" beserta offset yang benar, namun data update-nya tidak diproses kembali."),bn=n("p",null,[a("Dengan kata lain, kamu tidak akan kehilangan update sama sekali, tetapi besar kemungkinan bot kamu akan memproses 100 update yang sudah diproses sebelumnya. Karena pemanggilan "),n("code",null,[a("send"),n("wbr"),a("Message")]),a(" dilakukan sama persis, maka user akan menerima pesan duplikat dari bot kamu. Tetapi, dengan cara demikian "),n("em",null,"setidaknya satu"),a(" pemrosesan bisa terjamin.")],-1),hn=n("h3",{id:"grammy-runner",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grammy-runner","aria-hidden":"true"},"#"),a(" grammY Runner")],-1),_n=a("Kalau kamu menggunakan "),yn=a("grammY runner"),fn=a(" di mode "),vn=n("em",null,"concurrent",-1),wn=a(", pemanggilan "),jn=n("code",null,[a("get"),n("wbr"),a("Updates")],-1),In=a(" berikutnya berpotensi dilakukan sebelum middleware kamu selesai memproses update pertama dari "),xn=n("em",null,"batch",-1),Sn=a(" tersebut. Itulah kenapa, "),Rn={href:"https://core.telegram.org/bots/api#getupdates",target:"_blank",rel:"noopener noreferrer"},Tn=a("update offset"),Gn=a("-nya terkonfirmasi sebelum waktunya. Ini adalah efek dari penggunaan concurrency secara maksimal, dan sayangnya, kita tidak bisa menghindarinya tanpa mengurangi responsifitas dan jumlah output-nya. Dampaknya, jika bot kamu dihentikan di momen yang tidak tepat, 100 update yang sebelumnya sudah diminta tetapi belum diproses, tidak bisa diminta lagi karena Telegram telah menandainya sebagai sudah diproses. Sehingga, data-data update tadi akan hilang selamanya."),Dn=n("p",null,[a("Untuk menghindari hal tersebut terjadi, kamu harus menggunakan "),n("em",null,"source"),a(" dan "),n("em",null,"sink"),a(" dari package grammy runner untuk membuat jalur update-mu sendiri yang meneruskan semua update ke antrian pesan atau queue terlebih dahulu.")],-1),En=a("Buat sebuah "),Nn={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSink",target:"_blank",rel:"noopener noreferrer"},Bn=a("sink"),Pn=a(" sebagai jalur untuk meneruskan update ke queue, lalu mulai satu runner yang bertugas menyuplai pesan-pesan tersebut ke queue."),qn=a("Kemudian, buat sebuah "),Ln={href:"https://doc.deno.land/https://deno.land/x/grammy_runner/mod.ts/~/UpdateSource",target:"_blank",rel:"noopener noreferrer"},An=a("source"),Kn=a(" untuk mengambil pesan dari queue."),Mn=a("Dengan begitu, kamu menjalankan dua instance grammY runner yang berbeda. Konsep tadi adalah sebuah ide berdasarkan pengetahuan yang kami punya, tetapi ide tersebut belum pernah diterapkan. Silahkan "),Yn={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},Cn=a("hubungi grup Telegram kami"),Hn=a(" kalau kamu mempunyai beberapa pertanyaan atau bahkan kamu berhasil melakukannya dan ingin membagikannya ke kami."),zn=a("Di sisi lain, kalau bot kamu sedang mengalami beban tinggi yang mengakibatkan polling update menjadi terlambat karena "),Un=a("pembatasan beban yang dilakukan secara otomatis"),On=a(", maka kemungkinan besar beberapa update akan di-fetch lagi, yang mengakibatkan pemrosesan pesan duplikat. Oleh karena itu, efek yang dihasilkan dari penggunaan concurency secara penuh adalah tidak ada yang bisa menjamin pemrosesan dilakukan baik "),Jn=n("em",null,"setidaknya sekali",-1),Vn=a(" ataupun "),Fn=n("em",null,"paling banyak sekali",-1),Wn=a(".");function Qn(Xn,Zn){const l=i("AutotagPage"),c=i("RouterLink"),e=i("ExternalLinkIcon"),o=i("CodeGroupItem"),u=i("CodeGroup");return r(),k("div",null,[g,s(l,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),n("p",null,[b,s(c,{to:"/id/guide/errors.html"},{default:t(()=>[h]),_:1}),_]),y,f,n("p",null,[v,w,j,I,x,S,R,n("a",T,[G,s(e)]),D]),E,s(u,null,{default:t(()=>[s(o,{title:"TypeScript",active:""},{default:t(()=>[N]),_:1}),s(o,{title:"JavaScript"},{default:t(()=>[B]),_:1}),s(o,{title:"Deno"},{default:t(()=>[P]),_:1})]),_:1}),q,s(u,null,{default:t(()=>[s(o,{title:"TypeScript",active:""},{default:t(()=>[L]),_:1}),s(o,{title:"JavaScript"},{default:t(()=>[A]),_:1}),s(o,{title:"Deno"},{default:t(()=>[K]),_:1})]),_:1}),M,Y,n("p",null,[C,n("a",H,[z,U,s(e)]),O]),n("p",null,[J,n("a",V,[F,W,Q,s(e)]),X,Z,$,nn,an]),n("blockquote",null,[n("p",null,[sn,s(c,{to:"/id/advanced/flood.html"},{default:t(()=>[tn,en,on]),_:1})])]),cn,n("blockquote",null,[n("p",null,[un,ln,pn,n("a",rn,[kn,s(e)]),dn,mn,gn])]),bn,hn,n("p",null,[_n,s(c,{to:"/id/plugins/runner.html"},{default:t(()=>[yn]),_:1}),fn,vn,wn,jn,In,xn,Sn,n("a",Rn,[Tn,s(e)]),Gn]),Dn,n("ol",null,[n("li",null,[En,n("a",Nn,[Bn,s(e)]),Pn]),n("li",null,[qn,n("a",Ln,[An,s(e)]),Kn])]),n("p",null,[Mn,n("a",Yn,[Cn,s(e)]),Hn]),n("p",null,[zn,s(c,{to:"/id/plugins/runner.html#sink"},{default:t(()=>[Un]),_:1}),On,Jn,Vn,Fn,Wn])])}const na=p(m,[["render",Qn],["__file","reliability.html.vue"]]);export{na as default};

import{_ as u,r,o as d,c as l,a as n,b as e,w as t,d as a}from"./app.cd079934.js";const o={},m=n("h1",{id:"apa-itu-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#apa-itu-plugin","aria-hidden":"true"},"#"),a(" Apa Itu Plugin?")],-1),g=n("p",null,"Kami ingin grammY menjadi ringkas dan minimal, tetapi bisa diperluas. Kenapa? Karena tidak semua orang akan menggunakan semua fiturnya! Plugin didesain sebagai fitur atau fungsionalitas ekstra yang ditambahkan ke dalam sebuah software.",-1),_=n("h2",{id:"plugin-di-grammy",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-di-grammy","aria-hidden":"true"},"#"),a(" Plugin di grammY")],-1),h=n("p",null,[a("Beberapa plugin sudah disediakan secara "),n("strong",null,"bawaan"),a(" di dalam library inti grammY, karena kami merasa banyak bot yang akan membutuhkan fitur-fitur tersebut. Dengan begitu, user baru akan lebih mudah menggunakannya karena tidak perlu menginstal package tambahan terlebih dahulu.")],-1),c=a("Sebagian besar plugin dipublikasikan bersama dengan package inti grammY, yang kami sebut sebagai plugin "),b=n("strong",null,"resmi",-1),p=a(". Plugin-plugin ini bisa diinstal dari "),k=n("code",null,[a("@grammyjs"),n("wbr"),a("/*")],-1),f=a(" melalui npm, dan mereka semua dipublikasikan oleh organisasi "),y={href:"https://github.com/grammyjs",target:"_blank",rel:"noopener noreferrer"},w=a("@grammyjs"),j=a(" di GitHub. Selain itu, kami juga selalu memastikan semua plugin berjalan dengan baik di setiap rilisan grammY. Khusus untuk plugin resmi, nama package-nya selalu disertakan di judul dokumentasi masing-masing plugin. Contohnya, plugin "),x=a("grammy runner"),P=a(" ("),Y=n("code",null,"runner",-1),I=a(") bisa diinstal melalui "),K=n("code",null,[a("npm install @grammyjs"),n("wbr"),a("/runner")],-1),B=a(". (Kalau kamu menggunakan Deno, kamu bisa meng-import plugin dari "),S={href:"https://deno.land/x/",target:"_blank",rel:"noopener noreferrer"},v=a("https://"),E=n("wbr",null,null,-1),J=a("deno"),L=n("wbr",null,null,-1),A=a(".land"),C=n("wbr",null,null,-1),D=a("/x"),M=n("wbr",null,null,-1),N=a("/"),V=a(", yaitu file "),G=n("code",null,[a("mod"),n("wbr"),a(".ts")],-1),H=a(" di modul "),R=n("code",null,[a("grammy"),n("wbr"),a("_runner")],-1),T=a(".)"),F=n("h2",{id:"jenis-jenis-plugin-di-grammy",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jenis-jenis-plugin-di-grammy","aria-hidden":"true"},"#"),a(" Jenis-Jenis Plugin di grammY")],-1),q=n("p",null,[a("Semua yang berkilau adalah emas, benar? Emas yang berbeda tentunya! grammY memiliki dua jenis plugin: "),n("em",null,"plugin middleware"),a(" dan "),n("em",null,"plugin transformer"),a(". Singkatnya, plugin di grammY mengembalikan sebuah function entah berupa middleware ataupun transformer. Mari kita bahas perbedaanya.")],-1),z=n("h3",{id:"jenis-i-plugin-middleware",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jenis-i-plugin-middleware","aria-hidden":"true"},"#"),a(" Jenis I: Plugin Middleware")],-1),O=a("Middleware"),Q=a(" adalah sebuah function yang menangani data yang masuk apapun bentuknya. Sehingga, plugin middleware adalah plugin yang diberikan ke bot dalam bentuk\u2014yup, tebakanmu benar\u2014middleware. Artinya, kamu bisa menggunakannya melalui "),U=n("code",null,[a("bot"),n("wbr"),a(".use")],-1),W=a("."),X=n("h3",{id:"jenis-ii-plugin-transformer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jenis-ii-plugin-transformer","aria-hidden":"true"},"#"),a(" Jenis II: Plugin Transformer")],-1),Z=a("Function transformer"),$=a(" adalah kebalikan dari middleware! Ia adalah sebuah function yang menangani data yang keluar. Dengan begitu, plugin transformer adalah plugin yang diberikan ke bot dalam bentuk\u2014wow! tebakanmu benar lagi!\u2014function transformer. Artinya, kamu bisa menggunakannya melalui "),aa=n("code",null,[a("bot"),n("wbr"),a(".api"),n("wbr"),a(".config"),n("wbr"),a(".use")],-1),na=a("."),ea=n("h2",{id:"buat-plugin-mu-sendiri",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#buat-plugin-mu-sendiri","aria-hidden":"true"},"#"),a(" Buat Plugin-mu Sendiri")],-1),ia=a("Kalau kamu berniat membuat sebuah plugin dan ingin membagikannya ke pengguna lain (atau bahkan mempublikasikannya di website resmi grammY), berikut "),ta=a("panduan yang bisa kamu ikuti"),sa=a("."),ra=n("h2",{id:"ide-untuk-plugin-plugin-berikutnya",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ide-untuk-plugin-plugin-berikutnya","aria-hidden":"true"},"#"),a(" Ide untuk Plugin-Plugin Berikutnya")],-1),ua=a("Kami mengumpulkan berbagai ide dan saran untuk plugin-plugin baru di "),da={href:"https://github.com/grammyjs/grammY/issues/110",target:"_blank",rel:"noopener noreferrer"},la=a("Git"),oa=n("wbr",null,null,-1),ma=a("Hub issue berikut"),ga=a(".");function _a(ha,ca){const s=r("ExternalLinkIcon"),i=r("RouterLink");return d(),l("div",null,[m,g,_,h,n("p",null,[c,b,p,k,f,n("a",y,[w,e(s)]),j,e(i,{to:"/id/plugins/runner.html"},{default:t(()=>[x]),_:1}),P,Y,I,K,B,n("a",S,[v,E,J,L,A,C,D,M,N,e(s)]),V,G,H,R,T]),F,q,z,n("p",null,[e(i,{to:"/id/guide/middleware.html"},{default:t(()=>[O]),_:1}),Q,U,W]),X,n("p",null,[e(i,{to:"/id/advanced/transformers.html"},{default:t(()=>[Z]),_:1}),$,aa,na]),ea,n("p",null,[ia,e(i,{to:"/id/plugins/guide.html"},{default:t(()=>[ta]),_:1}),sa]),ra,n("p",null,[ua,n("a",da,[la,oa,ma,e(s)]),ga])])}const pa=u(o,[["render",_a],["__file","index.html.vue"]]);export{pa as default};

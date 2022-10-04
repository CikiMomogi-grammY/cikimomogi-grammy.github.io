import{_ as u,r as l,o as p,c as r,a,b as s,w as o,d as n,e as t}from"./app.cd079934.js";const c={},d=a("h1",{id:"internasionalisasi-dengan-fluent-fluent",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#internasionalisasi-dengan-fluent-fluent","aria-hidden":"true"},"#"),n(" Internasionalisasi dengan Fluent ("),a("code",null,"fluent"),n(")")],-1),m={href:"https://projectfluent.org/",target:"_blank",rel:"noopener noreferrer"},k=n("Fluent"),h=n(" adalah sebuah sistem penerjemah bahasa yang dibuat oleh Mozilla Foundation dengan tujuan supaya hasil terjemahan terdengar lebih natural. Ia memiliki sebuah syntax yang canggih dan elegan, sehingga memungkinkan siapa pun dapat menerjemah secara efisien serta bisa dipahami dengan baik. Plugin ini memanfaatkan sistem penerjemah tersebut untuk membuat bot grammY menjadi fasih serta menghasilkan terjemahan berkualitas tinggi."),g={class:"custom-container tip"},b=a("p",{class:"custom-container-title"},"Fluent vs i18n",-1),_=n("Jangan bingung membedakan plugin ini dengan plugin "),v=n("i18n"),f=n("."),y=n("Plugin "),x=n("i18n"),j=n(" merupakan versi upgrade dari plugin ini. Ia dapat digunakan baik di Deno maupun Node.js."),w=t(`<h2 id="inisialisasi-fluent" tabindex="-1"><a class="header-anchor" href="#inisialisasi-fluent" aria-hidden="true">#</a> Inisialisasi Fluent</h2><p>Pertama-tama, inisialisasi instance Fluent.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Fluent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@moebius/fluent&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> fluent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fluent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kemudian, kamu perlu menambahkan setidaknya satu terjemahan ke instance Fluent.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> fluent<span class="token punctuation">.</span><span class="token function">addTranslation</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// Tentukan satu atau lebih locale yang didukung oleh terjemahanmu:</span>
  locales<span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Kamu bisa menentukan isi terjemahannya secara langsung:</span>
  source<span class="token operator">:</span> <span class="token string">&quot;{ISI FILE TERJEMAHAN KAMU}&quot;</span><span class="token punctuation">,</span>

  <span class="token comment">// Atau file-file terjemahannya:</span>
  filePath<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/feature-1/translation.id.ftl</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/feature-2/translation.id.ftl</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// Semua elemen Fluent bisa dikonfigurasi dengan mudah</span>
  bundleOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Gunakan opsi ini untuk menghindari karakter huruf</span>
    <span class="token comment">// yang tidak terlihat di sekitar objek placeable.</span>
    useIsolating<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="menulis-pesan-terjemahan" tabindex="-1"><a class="header-anchor" href="#menulis-pesan-terjemahan" aria-hidden="true">#</a> Menulis Pesan Terjemahan</h2>`,6),F=n("Syntax Fluent sangat mudah untuk dipelajari. Kamu bisa memulainya dengan meniru "),C={href:"https://projectfluent.org/#examples",target:"_blank",rel:"noopener noreferrer"},q=n("contoh resmi berikut"),B=n(" atau dengan mempelajari "),I={href:"https://projectfluent.org/fluent/guide/",target:"_blank",rel:"noopener noreferrer"},S=n("panduan lengkap syntax"),K=n("."),P=t(`<p>Untuk saat ini, mari kita mulai dengan contoh berikut:</p><div class="language-ftl ext-ftl line-numbers-mode"><pre class="language-ftl"><code>-bot-name = Bot Krupuk

welcome =
  Selamat datang, {$name}, di {-bot-name}!
  Kamu { NUMBER($krupukCount) -&gt;
    [0] tidak punya krupuk sama sekali
    [1] cuma punya {$krupukCount} krupuk
    *[other] punya {$krupukCount} krupuk
  }.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Contoh di atas menggunakan tiga fitur utama Fluent, yaitu: <strong>terms</strong>, <strong>variable substitution</strong> (placeable), dan <strong>pluralization</strong>.</p><p><code>welcome</code> adalah <strong>message ID</strong>-nya. Ia digunakan untuk merujuk pesan terkait ketika di-render.</p><p>Statement <code>-bot<wbr>-name <wbr>=<wbr> Bot Krupuk</code> menghasilkan sebuah <strong>term</strong> dengan nama <code>bot<wbr>-name</code> yang memiliki value <code>Bot Krupuk</code>. Construct <code>{<wbr>-bot<wbr>-name}</code> merujuk ke term yang telah ditentukan sebelumnya dan akan digantikan dengan value dari term tersebut ketika di-render.</p><p>Statement <code>{$name}</code> akan digantikan dengan value dari variable <code>name</code> yang perlu kamu tentukan sendiri di function terjemahannya.</p>`,6),M=n("Statement terakhir ("),N=a("em",null,"baris 5 sampai 9",-1),T=n(") menghasilkan sebuah "),E=a("strong",null,"selector",-1),L=n(" (sangat mirip dengan statement switch) yang akan menerima hasil dari function "),R=a("code",null,"NUMBER",-1),D=n(" khusus yang menggunakan variable "),$=a("code",null,[n("krupuk"),a("wbr"),n("Count")],-1),A=n(" lalu memilih salah satu dari tiga pilihan pesan yang akan di-render berdasarkan value yang sesuai. Function "),U=a("code",null,"NUMBER",-1),V=n(" akan mengembalikan sebuah "),Y={href:"https://www.unicode.org/cldr/cldr-aux/charts/30/supplemental/language_plural_rules.html",target:"_blank",rel:"noopener noreferrer"},J=n("kategori plural CLDR"),z=n(" berdasarkan value yang disediakan dan locale yang digunakan. Dengan demikian, pluralisasi dapat diterapkan dengan baik."),G=t('<blockquote><p>Catatan dari penerjemah: Di bahasa Indonesia, kata plural atau jamak tidak terlalu mempengaruhi struktur kalimat. Contoh: satu apel, dua apel, orang pertama, orang kedua, orang ketiga. Tetapi, di bahasa Inggris misalnya, kata jamak dan tunggal akan berpengaruh. Perhatikan perbedaan imbuhan \u201Cs\u201D di akhir kata benda jamak dan imbuhan \u201C-st, -nd, -rd\u201D di contoh berikut. Contoh: one apple, two apple<strong>s</strong>, 1<strong>st</strong> person, 2<strong>nd</strong> person, 3<strong>rd</strong> person.</p></blockquote><h2 id="konfigurasi-grammy" tabindex="-1"><a class="header-anchor" href="#konfigurasi-grammy" aria-hidden="true">#</a> Konfigurasi grammY</h2><p>Sekarang, mari kita lihat bagaimana pesan di atas bisa di-render oleh sebuah bot. Pertama-tama, kita perlu mengonfigurasi grammY untuk menggunakan plugin ini.</p>',3),H=n("Kamu juga perlu mengonfigurasi bot kamu untuk menggunakan Fluent context flavor. Jika kamu masih merasa asing dengan konsep tersebut, sebaiknya kamu pahami terlebih dahulu materi "),O=n("Context Flavors"),Q=n("."),W=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Context <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;grammy&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FluentContextFlavor <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@grammyjs/fluent&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Tambahkan context type aplikasimu</span>
<span class="token comment">// dengan flavor interface yang telah disediakan.</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MyAppContext</span> <span class="token operator">=</span>
  <span class="token operator">&amp;</span> Context
  <span class="token operator">&amp;</span> FluentContextFlavor<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Buat instance bot dengan cara berikut agar bisa menggunakan context type yang sudah ditambahkan tadi:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot<span class="token operator">&lt;</span>MyAppContext<span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Langkah terakhir adalah menambahkan plugin Fluent itu sendiri ke grammY:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">useFluent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  fluent<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pastikan untuk menambahkan <a href="#inisialisasi-fluent">instance Fluent yang sudah dibuat sebelumnya</a>.</p><h2 id="me-render-pesan-yang-sudah-diterjemahkan" tabindex="-1"><a class="header-anchor" href="#me-render-pesan-yang-sudah-diterjemahkan" aria-hidden="true">#</a> Me-render Pesan yang Sudah Diterjemahkan</h2><p>Mantap, sekarang kita punya segalanya untuk me-render pesan kita! Mari kita buat percobaan dengan menentukan sebuah command di bot kita:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;i18n_test&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Panggil &quot;translate&quot; atau &quot;t&quot; helper untuk me-render pesan</span>
  <span class="token comment">// dengan cara memasukkan ID-nya serta paramater tambahan lainnya:</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&quot;welcome&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> ctx<span class="token punctuation">.</span>from<span class="token punctuation">.</span>first_name<span class="token punctuation">,</span>
    krupukCount<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sekarang, kamu bisa memulai bot-mu dan menggunakan command <code>/i18n<wbr>_test</code>. Seharusnya, hasil render akan menampilkan pesan berikut:</p><div class="language-text ext-text"><pre class="language-text"><code>Selamat datang, Budi, di Bot Krupuk!
Kamu cuma punya 1 krupuk.
</code></pre></div><p>Tentu saja, kamu akan melihat nama kamu sendiri alih-alih \u201CBudi\u201D. Coba ubah value dari variable <code>krupuk<wbr>Count</code> untuk melihat bagaimana pesan yang telah di-render akan berubah!</p><p>Perlu diketahui, kamu bisa menggunakan function translation di berbagai tempat selama terdapat <code>Context</code> di tempat tersebut. Library-nya akan secara otomatis menentukan locale terbaik untuk setiap user berdasarkan preferensi personal mereka (bahasa yang dipakai di pengaturan aplikasi Telegram). Kamu cuma perlu membuat beberapa file terjemahan lain serta memastikan semua terjemahan tersinkronisasi dengan baik.</p><h2 id="tahap-selanjutnya" tabindex="-1"><a class="header-anchor" href="#tahap-selanjutnya" aria-hidden="true">#</a> Tahap Selanjutnya</h2>`,14),X=n("Baca "),Z={href:"https://projectfluent.org/",target:"_blank",rel:"noopener noreferrer"},nn=n("dokumentasi Fluent"),an=n(" hingga tuntas, khususnya "),sn={href:"https://projectfluent.org/fluent/guide/",target:"_blank",rel:"noopener noreferrer"},en=n("panduan syntax"),tn=n("."),on={href:"https://github.com/grammyjs/fluent#i18n-plugin-replacement",target:"_blank",rel:"noopener noreferrer"},ln=n("Beralih dari plugin "),un=a("code",null,"i18n",-1),pn=n("."),rn=n("Pahami dengan baik "),cn={href:"https://github.com/the-moebius/fluent#readme",target:"_blank",rel:"noopener noreferrer"},dn=a("code",null,[n("@moebius"),a("wbr"),n("/fluent")],-1),mn=n("."),kn=a("h2",{id:"ringkasan-plugin",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),n(" Ringkasan Plugin")],-1),hn=a("li",null,[n("Nama: "),a("code",null,"fluent")],-1),gn=n("Sumber: "),bn={href:"https://github.com/grammyjs/fluent",target:"_blank",rel:"noopener noreferrer"},_n=n("https://"),vn=a("wbr",null,null,-1),fn=n("github"),yn=a("wbr",null,null,-1),xn=n(".com"),jn=a("wbr",null,null,-1),wn=n("/grammyjs"),Fn=a("wbr",null,null,-1),Cn=n("/fluent");function qn(Bn,In){const e=l("ExternalLinkIcon"),i=l("RouterLink");return p(),r("div",null,[d,a("p",null,[a("a",m,[k,s(e)]),h]),a("div",g,[b,a("p",null,[_,s(i,{to:"/id/plugins/i18n.html"},{default:o(()=>[v]),_:1}),f]),a("p",null,[y,s(i,{to:"/id/plugins/i18n.html"},{default:o(()=>[x]),_:1}),j])]),w,a("p",null,[F,a("a",C,[q,s(e)]),B,a("a",I,[S,s(e)]),K]),P,a("p",null,[M,N,T,E,L,R,D,$,A,U,V,a("a",Y,[J,s(e)]),z]),G,a("p",null,[H,s(i,{to:"/id/guide/context.html#context-flavor"},{default:o(()=>[O]),_:1}),Q]),W,a("ul",null,[a("li",null,[X,a("a",Z,[nn,s(e)]),an,a("a",sn,[en,s(e)]),tn]),a("li",null,[a("a",on,[ln,un,pn,s(e)])]),a("li",null,[rn,a("a",cn,[dn,s(e)]),mn])]),kn,a("ul",null,[hn,a("li",null,[gn,a("a",bn,[_n,vn,fn,yn,xn,jn,wn,Fn,Cn,s(e)])])])])}const Kn=u(c,[["render",qn],["__file","fluent.html.vue"]]);export{Kn as default};

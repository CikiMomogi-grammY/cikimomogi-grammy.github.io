import{_ as s,r as i,o as t,c as l,a as e,b as r,e as d,d as a}from"./app.2f873437.js";const o={},c=d(`<h1 id="hosting-vps" tabindex="-1"><a class="header-anchor" href="#hosting-vps" aria-hidden="true">#</a> Hosting: VPS</h1><p>Virtual Private Server, atau biasa dikenal dengan VPS, adalah sebuah perangkat virtual yang berjalan di cloud, dimana pemiliknya memiliki kendali penuh atas perangkat tersebut.</p><p>Di panduan kali ini, kamu akan mempelajari bagaimana menjalankan bot di sebuah VPS, menjaga bot agar tetap online 24/7, serta memulai bot secara otomatis ketika VPS kamu mengalami crash.</p><h2 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h2><p>systemd adalah sebuah service manager yang sudah terinstal secara bawaan di berbagai distribusi Linux, khususnya yang berbasis Debian.</p><h3 id="menyiapkan-command-start" tabindex="-1"><a class="header-anchor" href="#menyiapkan-command-start" aria-hidden="true">#</a> Menyiapkan Command Start</h3><ol><li>Memperoleh path lengkap runtime:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Jika menggunakan Deno</span>
<span class="token function">which</span> deno

<span class="token comment"># Jika menggunakan Node.js</span>
<span class="token function">which</span> <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>Kamu harus tahu path lengkap file entry-nya juga.</p></li><li><p>Command start kamu kurang lebih terlihat seperti ini:</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>path_lengkap_runtime<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>opsi<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>path_lengkap_file_entry<span class="token operator">&gt;</span>

<span class="token comment"># Contoh untuk Deno:</span>
<span class="token comment"># /home/user/.deno/bin/deno --allow-all /home/user/bot1/mod.ts</span>

<span class="token comment"># Contoh untuk Node.js:</span>
<span class="token comment"># /home/user/.nvm/versions/node/v16.9.1/bin/node /home/user/bot1/index.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="membuat-service" tabindex="-1"><a class="header-anchor" href="#membuat-service" aria-hidden="true">#</a> Membuat Service</h3><ol><li>Arahkan pointer ke direktori service-nya:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/systemd/system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Buka file service baru kamu di sebuah text editor:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nano</span> bot1.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Isi dengan konten berikut:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Service]
ExecStart=&lt;start_command&gt;
Restart=on-failure

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Ganti <code>&lt;start<wbr>_command&gt;</code> dengan command yang telah kamu buat di atas tadi.</p></blockquote><ol start="3"><li>Mulai ulang systemd setiap kali service mengalami perubahan:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="mengelola-service" tabindex="-1"><a class="header-anchor" href="#mengelola-service" aria-hidden="true">#</a> Mengelola Service</h3><h4 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> Start</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Ganti <code>&lt;service<wbr>_name&gt;</code> dengan nama file service-nya. Contoh: <code>systemctl start bot1</code></p></blockquote><h4 id="jalankan-setiap-kali-melakukan-boot" tabindex="-1"><a class="header-anchor" href="#jalankan-setiap-kali-melakukan-boot" aria-hidden="true">#</a> Jalankan Setiap Kali Melakukan Boot</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="cek-log" tabindex="-1"><a class="header-anchor" href="#cek-log" aria-hidden="true">#</a> Cek Log</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl status <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="restart" tabindex="-1"><a class="header-anchor" href="#restart" aria-hidden="true">#</a> Restart</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl restart <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> Stop</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl stop <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="jangan-dijalankan-ketika-boot-dilakukan" tabindex="-1"><a class="header-anchor" href="#jangan-dijalankan-ketika-boot-dilakukan" aria-hidden="true">#</a> Jangan Dijalankan ketika Boot Dilakukan</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl disable <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pm2-khusus-node-js" tabindex="-1"><a class="header-anchor" href="#pm2-khusus-node-js" aria-hidden="true">#</a> PM2 (Khusus Node.js)</h2><p>PM2 adalah sebuah daemon process manager untuk Node.js yang berfungsi untuk menjaga aplikasi kamu online 24/7.</p><h3 id="pemasangan" tabindex="-1"><a class="header-anchor" href="#pemasangan" aria-hidden="true">#</a> Pemasangan</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pm2@latest <span class="token parameter variable">-g</span>

<span class="token comment"># Jika menggunakan Yarn</span>
<span class="token function">yarn</span> global <span class="token function">add</span> pm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mengatur-aplikasi" tabindex="-1"><a class="header-anchor" href="#mengatur-aplikasi" aria-hidden="true">#</a> Mengatur Aplikasi</h3><h4 id="start-1" tabindex="-1"><a class="header-anchor" href="#start-1" aria-hidden="true">#</a> Start</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start <span class="token parameter variable">--name</span> <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>entry_point<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><code>&lt;app<wbr>_name&gt;</code> diisi dengan nama id dari aplikasimu, misalnya: <code>bot1</code>. <code>&lt;entry<wbr>_point&gt;</code> diisi dengan path index file kamu (file yang menjalankan bot kamu).</p></blockquote><h4 id="restart-1" tabindex="-1"><a class="header-anchor" href="#restart-1" aria-hidden="true">#</a> Restart</h4><p>Dengan melakukan restart, aplikasimu akan dihentikan, lalu dimulai ulang kembali.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 restart <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="reload" tabindex="-1"><a class="header-anchor" href="#reload" aria-hidden="true">#</a> Reload</h4><p>Dengan melakukan reload, kamu akan mengganti proses aplikasi yang sedang berjalan dengan yang baru. Aksi ini tidak menghasilkan waktu downtime sedikitpun (0 detik waktu downtime). Langkah ini direkomendasikan untuk aplikasi stateless.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 reload <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="stop-1" tabindex="-1"><a class="header-anchor" href="#stop-1" aria-hidden="true">#</a> Stop</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Satu aplikasi</span>
pm2 stop <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>

<span class="token comment"># Semua aplikasi</span>
pm2 stop all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> Delete</h4><p>Dengan melakukan delete, kamu akan menghentikan aplikasi lalu menghapus semua log beserta metric-nya.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 del <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="informasi-lanjutan" tabindex="-1"><a class="header-anchor" href="#informasi-lanjutan" aria-hidden="true">#</a> Informasi Lanjutan</h3>`,54),p=a("Untuk informasi lebih lanjut, silahkan lihat "),u={href:"https://pm2.keymetrics.io/docs",target:"_blank",rel:"noopener noreferrer"},m=a("https://"),h=e("wbr",null,null,-1),b=a("pm2"),v=e("wbr",null,null,-1),k=a(".keymetrics"),g=e("wbr",null,null,-1),_=a(".io"),x=e("wbr",null,null,-1),f=a("/docs"),y=a(".");function j(S,w){const n=i("ExternalLinkIcon");return t(),l("div",null,[c,e("p",null,[p,e("a",u,[m,h,b,v,k,g,_,x,f,r(n)]),y])])}const M=s(o,[["render",j],["__file","vps.html.vue"]]);export{M as default};

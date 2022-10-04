import{_ as s,r as i,o as r,c as o,a,b as d,e as l,d as e}from"./app.cd079934.js";const t={},c=l(`<h1 id="alojamiento-vps" tabindex="-1"><a class="header-anchor" href="#alojamiento-vps" aria-hidden="true">#</a> Alojamiento: VPS</h1><p>Un servidor virtual privado, mayormente conocido como VPS, es una m\xE1quina virtual que se ejecuta en la nube y cuyos usuarios tienen el control total de su sistema.</p><p>En esta gu\xEDa, aprender\xE1s varios m\xE9todos para ejecutar tu bot en un VPS, manteni\xE9ndolo en l\xEDnea 24/7, haciendo que se ejecute autom\xE1ticamente cuando tu VPS se inicie y se reinicie en caso de ca\xEDda.</p><h2 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h2><p>systemd es un potente gestor de servicios que viene preinstalado en muchas distribuciones de Linux, principalmente las basadas en Debian.</p><h3 id="obteniendo-el-comando-de-inicio" tabindex="-1"><a class="header-anchor" href="#obteniendo-el-comando-de-inicio" aria-hidden="true">#</a> Obteniendo el comando de inicio</h3><ol><li>Obtenga la ruta completa de su tiempo de ejecuci\xF3n:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Si se utiliza Deno</span>
<span class="token function">which</span> deno

<span class="token comment"># Si se utiliza Node.js</span>
<span class="token function">which</span> <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>Tambi\xE9n debes tener la ruta completa de tu archivo de entrada.</p></li><li><p>Tu comando de inicio deber\xEDa ser como el siguiente</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>ruta_de_entrada_completa<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>opciones<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>ruta_de_archivo_de_entrada_completa<span class="token operator">&gt;</span>

<span class="token comment"># Ejemplo de Deno:</span>
<span class="token comment"># /home/user/.deno/bin/deno --allow-all /home/user/bot1/mod.ts</span>

<span class="token comment"># Ejemplo de Node.js:</span>
<span class="token comment"># /home/user/.nvm/versions/node/v16.9.1/bin/node /home/user/bot1/index.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="creacion-del-servicio" tabindex="-1"><a class="header-anchor" href="#creacion-del-servicio" aria-hidden="true">#</a> Creaci\xF3n del servicio</h3><ol><li>Ve al directorio de servicios:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/systemd/system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Abre tu nuevo archivo de servicio con un editor:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nano</span> bot1.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>A\xF1ade el siguiente contenido:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Service]
ExecStart=&lt;comando_de_inicio&gt;
Restart=on-failure

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Sustituye <code>&lt;comando<wbr>_de<wbr>_inicio&gt;</code> por el comando que tienes arriba.</p></blockquote><ol start="3"><li>Recarga systemd cada vez que edites el servicio:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="manejando-el-servicio" tabindex="-1"><a class="header-anchor" href="#manejando-el-servicio" aria-hidden="true">#</a> Manejando el servicio</h3><h4 id="iniciar" tabindex="-1"><a class="header-anchor" href="#iniciar" aria-hidden="true">#</a> Iniciar</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start <span class="token operator">&lt;</span>nombre_del_servicio<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Sustituye <code>&lt;service<wbr>_name&gt;</code> por el nombre del archivo del servicio. Ejemplo: <code>systemctl start bot1</code>.</p></blockquote><h4 id="ejecutar-en-el-arranque" tabindex="-1"><a class="header-anchor" href="#ejecutar-en-el-arranque" aria-hidden="true">#</a> Ejecutar en el arranque</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token operator">&lt;</span>nombre_del_servicio<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="comprobar-los-registros" tabindex="-1"><a class="header-anchor" href="#comprobar-los-registros" aria-hidden="true">#</a> Comprobar los registros</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl status <span class="token operator">&lt;</span>nombre_del_servicio<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="reiniciar" tabindex="-1"><a class="header-anchor" href="#reiniciar" aria-hidden="true">#</a> Reiniciar</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl restart <span class="token operator">&lt;</span>nombre_del_servicio<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="detener" tabindex="-1"><a class="header-anchor" href="#detener" aria-hidden="true">#</a> Detener</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl stop <span class="token operator">&lt;</span>nombre_del_servicio<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="no-ejecutar-en-el-arranque" tabindex="-1"><a class="header-anchor" href="#no-ejecutar-en-el-arranque" aria-hidden="true">#</a> No ejecutar en el arranque</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl disable <span class="token operator">&lt;</span>nombre_del_servicio<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pm2-solo-node-js" tabindex="-1"><a class="header-anchor" href="#pm2-solo-node-js" aria-hidden="true">#</a> PM2 (s\xF3lo Node.js)</h2><p>PM2 es un gestor de procesos daemon para Node.js que te ayudar\xE1 a gestionar y mantener tu aplicaci\xF3n online 24/7.</p><h3 id="instalando" tabindex="-1"><a class="header-anchor" href="#instalando" aria-hidden="true">#</a> Instalando</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pm2@latest <span class="token parameter variable">-g</span>

<span class="token comment"># Si usas Yarn</span>
<span class="token function">yarn</span> global <span class="token function">add</span> pm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gestion-de-aplicaciones" tabindex="-1"><a class="header-anchor" href="#gestion-de-aplicaciones" aria-hidden="true">#</a> Gesti\xF3n de aplicaciones</h3><h4 id="inicio" tabindex="-1"><a class="header-anchor" href="#inicio" aria-hidden="true">#</a> Inicio</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start <span class="token parameter variable">--name</span> <span class="token operator">&lt;</span>nombre_de_la_aplicaci\xF3n<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>punto_de_entrada<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>El <code>&lt;nombre<wbr>_de<wbr>_la<wbr>_aplicaci\xF3n&gt;</code> puede ser cualquier identificador de tu aplicaci\xF3n, por ejemplo: <code>bot1</code>. El <code>&lt;punto<wbr>_de<wbr>_entrada&gt;</code> debe ser la ruta de tu archivo de \xEDndice (que ejecuta tu bot).</p></blockquote><h4 id="reinicio" tabindex="-1"><a class="header-anchor" href="#reinicio" aria-hidden="true">#</a> Reinicio</h4><p>Al reiniciar, detienes la aplicaci\xF3n y la vuelves a iniciar.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 restart <span class="token operator">&lt;</span>nombre_de_la_aplicaci\xF3n<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="recargar" tabindex="-1"><a class="header-anchor" href="#recargar" aria-hidden="true">#</a> Recargar</h4><p>Al recargar, reemplazas el proceso actual de tu aplicaci\xF3n con uno nuevo, lo que resulta en un tiempo de inactividad de 0 segundos. Esto se recomienda para aplicaciones sin estado.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 reload <span class="token operator">&lt;</span>nombre_de_la_aplicaci\xF3n<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> Stop</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Una sola aplicaci\xF3n</span>
pm2 stop <span class="token operator">&lt;</span>nombre_de_la_aplicaci\xF3n<span class="token operator">&gt;</span>

<span class="token comment"># Todas las aplicaciones</span>
pm2 stop all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="eliminar" tabindex="-1"><a class="header-anchor" href="#eliminar" aria-hidden="true">#</a> Eliminar</h4><p>Al borrar, detienes tu aplicaci\xF3n y eliminas sus registros y m\xE9tricas.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 del <span class="token operator">&lt;</span>nombre_de_la_aplicaci\xF3n<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="informacion-avanzada" tabindex="-1"><a class="header-anchor" href="#informacion-avanzada" aria-hidden="true">#</a> Informaci\xF3n avanzada</h3>`,54),p=e("Para m\xE1s informaci\xF3n, consulte "),u={href:"https://pm2.keymetrics.io/docs",target:"_blank",rel:"noopener noreferrer"},m=e("https://"),h=a("wbr",null,null,-1),v=e("pm2"),b=a("wbr",null,null,-1),g=e(".keymetrics"),_=a("wbr",null,null,-1),k=e(".io"),x=a("wbr",null,null,-1),f=e("/docs"),y=e(".");function j(q,w){const n=i("ExternalLinkIcon");return r(),o("div",null,[c,a("p",null,[p,a("a",u,[m,h,v,b,g,_,k,x,f,d(n)]),y])])}const S=s(t,[["render",j],["__file","vps.html.vue"]]);export{S as default};
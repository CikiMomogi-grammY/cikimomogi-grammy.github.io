import{_ as n,r as i,o as t,c as r,a,b as l,e as o,d as e}from"./app.cd079934.js";const d={},c=o(`<h1 id="hosting-vps" tabindex="-1"><a class="header-anchor" href="#hosting-vps" aria-hidden="true">#</a> Hosting: VPS</h1><p>A virtual private server, mostly known as VPS, is a virtual machine running in the cloud with its users having the full control of its system.</p><p>In this guide, you\u2019ll learn about various methods of running your bot in a VPS, keeping it online 24/7, making it run automatically when your VPS boots and restart on crashes.</p><h2 id="systemd" tabindex="-1"><a class="header-anchor" href="#systemd" aria-hidden="true">#</a> systemd</h2><p>systemd is a powerful service manager which is pre-installed on many Linux distributions, mainly Debian-based ones.</p><h3 id="getting-the-start-command" tabindex="-1"><a class="header-anchor" href="#getting-the-start-command" aria-hidden="true">#</a> Getting the Start Command</h3><ol><li>Get the full path of your runtime:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># If using Deno</span>
<span class="token function">which</span> deno

<span class="token comment"># If using Node.js</span>
<span class="token function">which</span> <span class="token function">node</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>You should have the full path of your entry file, too.</p></li><li><p>Your start command should look like the following:</p></li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;</span>full_runtime_path<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>options<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>full_entry_file_path<span class="token operator">&gt;</span>

<span class="token comment"># Deno example:</span>
<span class="token comment"># /home/user/.deno/bin/deno --allow-all /home/user/bot1/mod.ts</span>

<span class="token comment"># Node.js example:</span>
<span class="token comment"># /home/user/.nvm/versions/node/v16.9.1/bin/node /home/user/bot1/index.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="creating-the-service" tabindex="-1"><a class="header-anchor" href="#creating-the-service" aria-hidden="true">#</a> Creating the Service</h3><ol><li>Go to the services directory:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /etc/systemd/system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Open your new service file with an editor:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">nano</span> bot1.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>Add the following content:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[Service]
ExecStart=&lt;start_command&gt;
Restart=on-failure

[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Replace <code>&lt;start<wbr>_command&gt;</code> with the command you got above.</p></blockquote><ol start="3"><li>Reload systemd whenever you edit the service:</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="managing-the-service" tabindex="-1"><a class="header-anchor" href="#managing-the-service" aria-hidden="true">#</a> Managing the Service</h3><h4 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> Start</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Replace <code>&lt;service<wbr>_name&gt;</code> with the file name of the service. Example: <code>systemctl start bot1</code></p></blockquote><h4 id="run-on-boot" tabindex="-1"><a class="header-anchor" href="#run-on-boot" aria-hidden="true">#</a> Run on Boot</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="check-logs" tabindex="-1"><a class="header-anchor" href="#check-logs" aria-hidden="true">#</a> Check Logs</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl status <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="restart" tabindex="-1"><a class="header-anchor" href="#restart" aria-hidden="true">#</a> Restart</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl restart <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="stop" tabindex="-1"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> Stop</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl stop <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="don-t-run-on-boot" tabindex="-1"><a class="header-anchor" href="#don-t-run-on-boot" aria-hidden="true">#</a> Don\u2019t Run on Boot</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl disable <span class="token operator">&lt;</span>service_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="pm2-node-js-only" tabindex="-1"><a class="header-anchor" href="#pm2-node-js-only" aria-hidden="true">#</a> PM2 (Node.js only)</h2><p>PM2 is a daemon process manager for Node.js that will help you manage and keep your app online 24/7.</p><h3 id="installing" tabindex="-1"><a class="header-anchor" href="#installing" aria-hidden="true">#</a> Installing</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> pm2@latest <span class="token parameter variable">-g</span>

<span class="token comment"># If using Yarn</span>
<span class="token function">yarn</span> global <span class="token function">add</span> pm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="managing-apps" tabindex="-1"><a class="header-anchor" href="#managing-apps" aria-hidden="true">#</a> Managing Apps</h3><h4 id="start-1" tabindex="-1"><a class="header-anchor" href="#start-1" aria-hidden="true">#</a> Start</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 start <span class="token parameter variable">--name</span> <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>entry_point<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>The <code>&lt;app<wbr>_name&gt;</code> can be any identifier to your app, for example: <code>bot1</code>. The <code>&lt;entry<wbr>_point&gt;</code> should be the path to your index file (which runs your bot).</p></blockquote><h4 id="restart-1" tabindex="-1"><a class="header-anchor" href="#restart-1" aria-hidden="true">#</a> Restart</h4><p>By restarting, you stop the app, and start it again.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 restart <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="reload" tabindex="-1"><a class="header-anchor" href="#reload" aria-hidden="true">#</a> Reload</h4><p>By reloading, you replace the current process of your app with a new one, resulting in a 0-second downtime. This is recommended for stateless applications.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 reload <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="stop-1" tabindex="-1"><a class="header-anchor" href="#stop-1" aria-hidden="true">#</a> Stop</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># A single app</span>
pm2 stop <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>

<span class="token comment"># All apps</span>
pm2 stop all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> Delete</h4><p>By deleting, you stop your app and remove its logs and metrics.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pm2 del <span class="token operator">&lt;</span>app_name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="advanced-information" tabindex="-1"><a class="header-anchor" href="#advanced-information" aria-hidden="true">#</a> Advanced Information</h3>`,54),p=e("For more, please refer to "),h={href:"https://pm2.keymetrics.io/docs",target:"_blank",rel:"noopener noreferrer"},u=e("https://"),m=a("wbr",null,null,-1),v=e("pm2"),b=a("wbr",null,null,-1),g=e(".keymetrics"),k=a("wbr",null,null,-1),f=e(".io"),_=a("wbr",null,null,-1),x=e("/docs"),y=e(".");function w(S,B){const s=i("ExternalLinkIcon");return t(),r("div",null,[c,a("p",null,[p,a("a",h,[u,m,v,b,g,k,f,_,x,l(s)]),y])])}const R=n(d,[["render",w],["__file","vps.html.vue"]]);export{R as default};

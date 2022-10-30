import{_ as o,r as l,o as r,c as t,a as n,b as e,d as s,w as d,e as i}from"./app.bee054cf.js";const v={},D=e("h1",{id:"命令行接口",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#命令行接口","aria-hidden":"true"},"#"),s(" 命令行接口")],-1),u={href:"https://www.npmjs.com/package/@vuepress/cli",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.npmjs.com/package/vuepress",target:"_blank",rel:"noopener noreferrer"},h=i(`<p>执行 <code>vuepress --help</code> 来获取下列帮助信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress &lt;command&gt; [options]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Commands:</span></span>
<span class="line"><span style="color:#D4D4D4;">  dev [sourceDir]    Start development server</span></span>
<span class="line"><span style="color:#D4D4D4;">  build [sourceDir]  Build to static site</span></span>
<span class="line"><span style="color:#D4D4D4;">  info               Display environment information</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">For more info, run any </span><span style="color:#DCDCAA;">command</span><span style="color:#D4D4D4;"> with the </span><span style="color:#CE9178;">\`--help\`</span><span style="color:#D4D4D4;"> flag:</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress dev --help</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress build --help</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress info --help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Options:</span></span>
<span class="line"><span style="color:#D4D4D4;">  -v, --version  Display version number </span></span>
<span class="line"><span style="color:#D4D4D4;">  -h, --help     Display this message </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"提示",-1),f={href:"https://www.npmjs.com/package/debug",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,[s("设置环境变量 "),e("code",null,"DEBUG=vuepress*"),s(" 可以启用调试日志。")],-1),_=i(`<h2 id="dev" tabindex="-1"><a class="header-anchor" href="#dev" aria-hidden="true">#</a> dev</h2><p>启动一个开发服务器，在本地开发你的 VuePress 站点。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress dev [sourceDir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Options:</span></span>
<span class="line"><span style="color:#D4D4D4;">  -c, --config &lt;config&gt;  Set path to config file </span></span>
<span class="line"><span style="color:#D4D4D4;">  -p, --port &lt;port&gt;      Use specified port (default: 8080) </span></span>
<span class="line"><span style="color:#D4D4D4;">  -t, --temp &lt;temp&gt;      Set the directory of the temporary files </span></span>
<span class="line"><span style="color:#D4D4D4;">  --host &lt;host&gt;          Use specified host (default: 0.0.0.0) </span></span>
<span class="line"><span style="color:#D4D4D4;">  --cache &lt;cache&gt;        Set the directory of the cache files </span></span>
<span class="line"><span style="color:#D4D4D4;">  --clean-temp           Clean the temporary files before dev </span></span>
<span class="line"><span style="color:#D4D4D4;">  --clean-cache          Clean the cache files before dev </span></span>
<span class="line"><span style="color:#D4D4D4;">  --open                 Open browser when ready </span></span>
<span class="line"><span style="color:#D4D4D4;">  --debug                Enable debug mode </span></span>
<span class="line"><span style="color:#D4D4D4;">  --no-watch             Disable watching page and config files (default: true)</span></span>
<span class="line"><span style="color:#D4D4D4;">  -v, --version          Display version number </span></span>
<span class="line"><span style="color:#D4D4D4;">  -h, --help             Display this message</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> build</h2>`,5),k=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">Usage:</span></span>
<span class="line"><span style="color:#D4D4D4;">  $ vuepress build [sourceDir]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">Options:</span></span>
<span class="line"><span style="color:#D4D4D4;">  -c, --config &lt;config&gt;  Set path to config file </span></span>
<span class="line"><span style="color:#D4D4D4;">  -d, --dest &lt;dest&gt;      Set the directory build output (default: .vuepress/dist) </span></span>
<span class="line"><span style="color:#D4D4D4;">  -t, --temp &lt;temp&gt;      Set the directory of the temporary files </span></span>
<span class="line"><span style="color:#D4D4D4;">  --cache &lt;cache&gt;        Set the directory of the cache files </span></span>
<span class="line"><span style="color:#D4D4D4;">  --clean-temp           Clean the temporary files before build </span></span>
<span class="line"><span style="color:#D4D4D4;">  --clean-cache          Clean the cache files before build </span></span>
<span class="line"><span style="color:#D4D4D4;">  --debug                Enable debug mode </span></span>
<span class="line"><span style="color:#D4D4D4;">  -v, --version          Display version number </span></span>
<span class="line"><span style="color:#D4D4D4;">  -h, --help             Display this message</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>通过命令行设置的配置项，会覆盖你配置文件中的同名配置项。</p></div><h2 id="info" tabindex="-1"><a class="header-anchor" href="#info" aria-hidden="true">#</a> info</h2><p>输出当前系统和依赖相关的信息。</p><p>在你想要检查你的环境，或者提交 Issue 时候，可以使用该命令。</p>`,5);function w(E,x){const p=l("NpmBadge"),a=l("ExternalLinkIcon"),c=l("RouterLink");return r(),t("div",null,[D,n(p,{package:"@vuepress/cli"}),e("p",null,[s("VuePress 命令行接口是由 "),e("a",u,[s("@vuepress/cli"),n(a)]),s(" 包提供的。它包含在 "),e("a",m,[s("vuepress"),n(a)]),s(" 包之中，当然你也可以单独安装它。")]),h,e("div",b,[y,e("p",null,[s("VuePress 使用了 "),e("a",f,[s("debug"),n(a)]),s(" 模块。")]),g]),_,e("p",null,[s("将你的 VuePress 站点构建成静态文件，以便你进行后续"),n(c,{to:"/zh/guide/deployment.html"},{default:d(()=>[s("部署")]),_:1}),s("。")]),k])}const S=o(v,[["render",w],["__file","cli.html.vue"]]);export{S as default};

import{_ as a,r as l,o as h,c as u,b as o,a as t,w as d,d as e,e as r}from"./app.9a621f1c.js";const c={},_=t("h1",{id:"comparison-of-hosting-providers",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#comparison-of-hosting-providers","aria-hidden":"true"},"#"),e(" Comparison of Hosting Providers")],-1),p=t("p",null,"There are many different hosting providers that allow you to run your bot. It can sometimes be hard to keep track of how much they cost and how good their performance is. This is why the grammY community is collecting their experiences on this page.",-1),m=t("h2",{id:"what-is-a-hosting-provider",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#what-is-a-hosting-provider","aria-hidden":"true"},"#"),e(" What is a Hosting Provider?")],-1),b=e("In order to keep a bot online 24 hours a day, you need to run a computer 24 hours a day. As "),g=e("mentioned in the introduction"),f=e(", you most likely don\u2019t want to do that with your laptop or home computer. Instead, you can ask a company to run the bot in the cloud."),y=r('<p>In other words, you just run it on someone else\u2019s computer.</p><h2 id="comparison-tables" tabindex="-1"><a class="header-anchor" href="#comparison-tables" aria-hidden="true">#</a> Comparison Tables</h2><blockquote><p>Please click the edit button at the bottom of the page to add more providers or to edit existing ones!</p></blockquote><p>We have two comparison tables: one for <a href="#serverless">serverless</a> hosting and one for <a href="#vps">VPS</a>.</p><h3 id="serverless" tabindex="-1"><a class="header-anchor" href="#serverless" aria-hidden="true">#</a> Serverless</h3><p>Serverless means that you do not control a single machine on which your bot is run. Instead, these hosting providers will rather allow you to upload your code, and then start and stop different machines as necessary to make sure that your bot always works.</p>',6),w=e("This has the downside that your bot does not have access to a persistent storage by default, such as a local file system. Instead, you will often have to have a database separately and connect to it if you need to store data permanently. We therefore recommend you to use a different kind of hosting for more complex bots, e.g. a "),v=e("VPS"),k=e("."),x=e("The main thing to know about them is that on serverless infrastructures you are required to use "),P=e("webhooks"),S=e("."),B=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Min. price"),t("th",null,"Pricing"),t("th",null,"Limits"),t("th",null,"Node.js"),t("th",null,"Deno"),t("th",null,"Web"),t("th",null,"Notes")])],-1),C=t("tr",null,[t("td",null,"Deta"),t("td",null,"Free"),t("td",null,"No paid plans yet"),t("td",null,"No specific limits"),t("td",null,"\u2705"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td")],-1),U=t("td",null,"Deno Deploy",-1),G=t("td",null,"Free",-1),q=t("td",null,"$10/mo subscription for 5M req and 100 GB; $2/1M req, $0.3/GB network",-1),I={href:"https://deno.com/deploy/pricing",target:"_blank",rel:"noopener noreferrer"},N=e("100K req"),E=t("wbr",null,null,-1),D=e("/day"),T=t("wbr",null,null,-1),F=e(", 100 GB"),K=t("wbr",null,null,-1),A=e("/mo"),M=t("wbr",null,null,-1),O=e(", 10 ms CPU"),R=t("wbr",null,null,-1),V=e("-time limit"),$=t("td",null,"\u274C",-1),j=t("td",null,"\u2705",-1),Y=t("td",null,"\u274C",-1),H=t("td",null,null,-1),z=t("td",null,"DigitalOcean Functions",-1),L=t("td",null,"Free",-1),W=t("td",null,"$1.85/100K GB-s",-1),Q={href:"https://docs.digitalocean.com/products/functions/details/pricing/",target:"_blank",rel:"noopener noreferrer"},J=e("90K GB"),X=t("wbr",null,null,-1),Z=e("-s"),tt=t("wbr",null,null,-1),et=e("/mo"),ot=t("td",null,"\u2705",-1),nt=t("td",null,"\u274C",-1),st=t("td",null,"\u2753",-1),dt=t("td",null,null,-1),lt=t("td",null,"Cloudflare Workers",-1),rt=t("td",null,"Free",-1),it=t("td",null,"$5/10M req",-1),at={href:"https://workers.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},ht=e("100K req"),ut=t("wbr",null,null,-1),ct=e("/day"),_t=t("wbr",null,null,-1),pt=e(", 10 ms CPU"),mt=t("wbr",null,null,-1),bt=e("-time limit"),gt=t("td",null,"\u274C",-1),ft={href:"https://denoflare.dev/",target:"_blank",rel:"noopener noreferrer"},yt=e("\u2705"),wt=t("td",null,"\u2705",-1),vt=t("td",null,null,-1),kt=t("td",null,"Heroku",-1),xt=t("td",null,"Free",-1),Pt=t("td",null,"It\u2019s complicated",-1),St={href:"https://www.heroku.com/pricing",target:"_blank",rel:"noopener noreferrer"},Bt=e("550"),Ct=t("wbr",null,null,-1),Ut=e("-1000 h"),Gt=t("wbr",null,null,-1),qt=e("/mo"),It=t("td",null,"\u2705",-1),Nt=t("td",null,"\u2753",-1),Et=t("td",null,"\u2753",-1),Dt=t("td",null,null,-1),Tt=t("td",null,"Vercel",-1),Ft=t("td",null,"Free",-1),Kt=t("td",null,"$20/mo subscription",-1),At={href:"https://vercel.com/pricing",target:"_blank",rel:"noopener noreferrer"},Mt=e("Unlimited invocations"),Ot=t("wbr",null,null,-1),Rt=e(", 100 GB"),Vt=t("wbr",null,null,-1),$t=e("-h"),jt=t("wbr",null,null,-1),Yt=e(", 10 s time limit"),Ht=t("td",null,"\u2753",-1),zt=t("td",null,"\u2753",-1),Lt=t("td",null,"\u2753",-1),Wt=t("td",null,"Not intended for non-websites?",-1),Qt=t("td",null,"Scaleway Functions",-1),Jt=t("td",null,"Free",-1),Xt=t("td",null,"\u20AC0.15/1M req, \u20AC1.2/100K GB-s",-1),Zt={href:"https://www.scaleway.com/en/pricing/#serverless-functions",target:"_blank",rel:"noopener noreferrer"},te=e("1M requests"),ee=t("wbr",null,null,-1),oe=e(", 400K GB"),ne=t("wbr",null,null,-1),se=e("-s"),de=t("wbr",null,null,-1),le=e("/mo"),re=t("td",null,"\u2753",-1),ie=t("td",null,"\u2753",-1),ae=t("td",null,"\u2753",-1),he=t("td",null,null,-1),ue=t("td",null,"Scaleway Containers",-1),ce=t("td",null,"Free",-1),_e=t("td",null,"\u20AC0.10/100K GB-s, \u20AC1.0/100K vCPU-s",-1),pe={href:"https://www.scaleway.com/en/pricing/#serverless-containers",target:"_blank",rel:"noopener noreferrer"},me=e("400K GB"),be=t("wbr",null,null,-1),ge=e("-s"),fe=t("wbr",null,null,-1),ye=e(", 200K vCPU"),we=t("wbr",null,null,-1),ve=e("-s"),ke=t("wbr",null,null,-1),xe=e("/mo"),Pe=t("td",null,"\u2753",-1),Se=t("td",null,"\u2753",-1),Be=t("td",null,"\u2753",-1),Ce=t("td",null,null,-1),Ue=t("td",null,"Vercel Edge Functions",-1),Ge=t("td",null,"Free",-1),qe=t("td",null,"$20/mo subscription for 500K",-1),Ie={href:"https://vercel.com/pricing",target:"_blank",rel:"noopener noreferrer"},Ne=e("100K req"),Ee=t("wbr",null,null,-1),De=e("/day"),Te=t("td",null,"\u2753",-1),Fe=t("td",null,"\u2753",-1),Ke=t("td",null,"\u2753",-1),Ae=t("td",null,null,-1),Me=t("tr",null,[t("td",null,"serverless.com"),t("td",null,"Free"),t("td"),t("td"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td")],-1),Oe=t("tr",null,[t("td",null,"DigitalOcean Apps"),t("td",null,"$5"),t("td"),t("td"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td",null,"Not tested")],-1),Re=t("tr",null,[t("td",null,"Fastly Compute@Edge"),t("td"),t("td"),t("td"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td",null,"\u2753"),t("td")],-1),Ve=t("h3",{id:"vps",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#vps","aria-hidden":"true"},"#"),e(" VPS")],-1),$e=e("A virtual private server is a virtual machine that you have full control over. You can usually access it via "),je={href:"https://en.wikipedia.org/wiki/Secure_Shell",target:"_blank",rel:"noopener noreferrer"},Ye=e("SSH"),He=e(". You can install any software there, and you are responsible for system upgrades and so on."),ze=t("p",null,"On a VPS, you can run bots using both long polling or webhooks.",-1),Le=e("Check out the "),We=e("tutorial"),Qe=e(" on how to host grammY bots on a VPS."),Je=r('<table><thead><tr><th>Name</th><th>Min. price</th><th>Ping to Bot API</th><th>Cheapest option</th></tr></thead><tbody><tr><td>Contabo</td><td></td><td>15 ms \u{1F1E9}\u{1F1EA} Nuremberg</td><td></td></tr><tr><td>DigitalOcean</td><td>$5</td><td>1-15 ms \u{1F1F3}\u{1F1F1} AMS, 19 ms \u{1F1E9}\u{1F1EA} FRA</td><td>1 vCPU, 1 GB RAM, 25 GB SSD, 1 TB</td></tr><tr><td>Hetzner Cloud</td><td>\u20AC4.15</td><td>~42 ms \u{1F1E9}\u{1F1EA}</td><td>1 vCPU, 2 GB RAM, 20 GB SSD, 20 TB</td></tr><tr><td>IONOS VPS</td><td>\u20AC1 or $2</td><td>15 ms \u{1F1E9}\u{1F1EA} Baden-Baden</td><td>1 vCPU, 0.5 GB RAM, 8 GB SSD</td></tr><tr><td>Scaleway</td><td>\u20AC~7</td><td></td><td>2 cores, 2 GB RAM, 20 GB SSD</td></tr></tbody></table><h2 id="unit-explanations" tabindex="-1"><a class="header-anchor" href="#unit-explanations" aria-hidden="true">#</a> Unit Explanations</h2><h3 id="base-units" tabindex="-1"><a class="header-anchor" href="#base-units" aria-hidden="true">#</a> Base Units</h3><table><thead><tr><th>Unit</th><th>In Words</th><th>Explanation</th></tr></thead><tbody><tr><td>K</td><td>thousand</td><td>1,000 of something.</td></tr><tr><td>M</td><td>million</td><td>1,000,000 of something.</td></tr><tr><td>\u20AC</td><td>Euro</td><td>The currency EUR.</td></tr><tr><td>$</td><td>US-Dollar</td><td>The currency USD.</td></tr><tr><td>req</td><td>request</td><td>Number of HTTP requests.</td></tr><tr><td>vCPU</td><td>virtual CPU</td><td>Computing power of one virtual CPU, a part of a real CPU.</td></tr><tr><td>ms</td><td>millisecond</td><td>0.001 seconds.</td></tr><tr><td>s</td><td>second</td><td>One second (SI unit for time).</td></tr><tr><td>min</td><td>minute</td><td>One minute, 60 seconds.</td></tr><tr><td>h</td><td>hours</td><td>One hour, 60 minutes.</td></tr><tr><td>day</td><td>day</td><td>One day, 24 hours.</td></tr><tr><td>mo</td><td>month</td><td>One month, approximately 30 days.</td></tr><tr><td>GB</td><td>gigabytes</td><td>1,000,000,000 bytes of storage.</td></tr></tbody></table><h3 id="example-unit-combinations" tabindex="-1"><a class="header-anchor" href="#example-unit-combinations" aria-hidden="true">#</a> Example Unit Combinations</h3><table><thead><tr><th>Unit</th><th>Quantity</th><th>In Words</th><th>Explanation</th></tr></thead><tbody><tr><td>$/mo</td><td>cost</td><td>US-Dollars per month</td><td>Monthly cost.</td></tr><tr><td>\u20AC/M req</td><td>cost</td><td>Euros per million requests</td><td>Cost for handling one million request.</td></tr><tr><td>req/min</td><td>throughput</td><td>requests per minute</td><td>Number of requests handled in one minute.</td></tr><tr><td>GB/s</td><td>throughput</td><td>gigabytes per second</td><td>Number of gigabytes transferred in one second.</td></tr><tr><td>GB-s</td><td>memory usage</td><td>gigabyte seconds</td><td>One gigabyte used for one second.</td></tr><tr><td>GB-h</td><td>memory usage</td><td>gigabyte hours</td><td>One gigabyte used for one hour.</td></tr><tr><td>h/mo</td><td>time fraction</td><td>hours per month</td><td>Number of hours in one month.</td></tr><tr><td>K vCPU-s/mo</td><td>processing time fraction</td><td>thousand virtual CPU seconds per month</td><td>Monthly seconds of processing time with one virtual CPU.</td></tr></tbody></table>',6);function Xe(Ze,to){const i=l("AutotagPage"),s=l("RouterLink"),n=l("ExternalLinkIcon");return h(),u("div",null,[_,o(i,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),p,m,t("p",null,[b,o(s,{to:"/guide/introduction.html#how-to-keep-a-bot-running"},{default:d(()=>[g]),_:1}),f]),y,t("p",null,[w,o(s,{to:"/hosting/vps.html"},{default:d(()=>[v]),_:1}),k]),t("p",null,[x,o(s,{to:"/guide/deployment-types.html"},{default:d(()=>[P]),_:1}),S]),t("table",null,[B,t("tbody",null,[C,t("tr",null,[U,G,q,t("td",null,[t("a",I,[N,E,D,T,F,K,A,M,O,R,V,o(n)])]),$,j,Y,H]),t("tr",null,[z,L,W,t("td",null,[t("a",Q,[J,X,Z,tt,et,o(n)])]),ot,nt,st,dt]),t("tr",null,[lt,rt,it,t("td",null,[t("a",at,[ht,ut,ct,_t,pt,mt,bt,o(n)])]),gt,t("td",null,[t("a",ft,[yt,o(n)])]),wt,vt]),t("tr",null,[kt,xt,Pt,t("td",null,[t("a",St,[Bt,Ct,Ut,Gt,qt,o(n)])]),It,Nt,Et,Dt]),t("tr",null,[Tt,Ft,Kt,t("td",null,[t("a",At,[Mt,Ot,Rt,Vt,$t,jt,Yt,o(n)])]),Ht,zt,Lt,Wt]),t("tr",null,[Qt,Jt,Xt,t("td",null,[t("a",Zt,[te,ee,oe,ne,se,de,le,o(n)])]),re,ie,ae,he]),t("tr",null,[ue,ce,_e,t("td",null,[t("a",pe,[me,be,ge,fe,ye,we,ve,ke,xe,o(n)])]),Pe,Se,Be,Ce]),t("tr",null,[Ue,Ge,qe,t("td",null,[t("a",Ie,[Ne,Ee,De,o(n)])]),Te,Fe,Ke,Ae]),Me,Oe,Re])]),Ve,t("p",null,[$e,t("a",je,[Ye,o(n)]),He]),ze,t("p",null,[Le,o(s,{to:"/hosting/vps.html"},{default:d(()=>[We]),_:1}),Qe]),Je])}const oo=a(c,[["render",Xe],["__file","comparison.html.vue"]]);export{oo as default};

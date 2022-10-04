import{_ as c,r as p,o as l,c as u,a as n,b as a,w as i,d as s,e}from"./app.2f873437.js";const r={},d=n("h1",{id:"the-hitchhiker-s-guide-to-grammy-plugins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-hitchhiker-s-guide-to-grammy-plugins","aria-hidden":"true"},"#"),s(" The Hitchhiker\u2019s Guide to grammY Plugins")],-1),k=n("p",null,"If you would like to develop your own plugin and publish it, or if you want to know how grammY plugins work behind the scenes, this is the place for you!",-1),h=s("Please note that there is already a summary about "),m=s("grammY plugins"),g=s(" are and what they do. This article is a deep dive into their inner workings."),b=n("h2",{id:"types-of-plugins-in-grammy",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#types-of-plugins-in-grammy","aria-hidden":"true"},"#"),s(" Types of Plugins in grammY")],-1),v=n("p",null,"There are two main types of plugins in grammY:",-1),y=s("Middleware Plugins: The plugin\u2019s sole job is to return a "),f=s("middleware function"),_=s(" that can be fed to a grammY bot."),w=s("Transformer Plugins: The plugin\u2019s sole job is to return a "),x=s("transformer function"),q=s(" that can be fed to a grammY bot."),T=n("p",null,"However, you will sometimes find plugins that do both things. There are also other packages that are neither middleware nor transformer functions, but we will call them plugins anyway because they extend grammY in various ways.",-1),j=n("h2",{id:"rules-of-contribution",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rules-of-contribution","aria-hidden":"true"},"#"),s(" Rules of Contribution")],-1),I=n("p",null,"You may publish your plugins in one of the following forms:",-1),Y=n("ul",null,[n("li",null,[s("Publishing as an "),n("strong",null,"official"),s(" plugin.")]),n("li",null,[s("Publishing as a "),n("strong",null,"third-party"),s(" plugin.")])],-1),D=s("If you choose to publish your plugins as a third party, we can still offer you a prominent place on this website. However, we prefer it if you publish your plugin under the "),C={href:"https://github.com/grammyjs",target:"_blank",rel:"noopener noreferrer"},N=s("grammyjs organization"),P=s(" on GitHub, hence making it an official plugin. In such a case, you will be granted publish access to GitHub and npm. Also, You will be responsible for maintaining your code."),A=n("p",null,"Before diving into some hands-on examples, there are some rules to pay attention to if you\u2019d like your plugins to be listed on this website.",-1),E=n("li",null,[s("Have a README file on GitHub (and npm) with "),n("strong",null,"short and clear"),s(" instructions on how to use it.")],-1),H=s("Explain the purpose of your plugin and how to use it by adding a page to the "),M={href:"https://github.com/grammyjs/website",target:"_blank",rel:"noopener noreferrer"},B=s("docs"),R=s(". (We can create the page for you if you are unsure how to do that.)"),L=n("li",null,"Choose a permissive license such as MIT or ISC.",-1),S=s("Finally, you should know that even though grammY supports both Node.js and "),G={href:"https://deno.land/",target:"_blank",rel:"noopener noreferrer"},W=s("Deno"),F=s(", it is a Deno-first project, and we also encourage you to write your plugins for Deno (and subsequently in style!). There is a handy-dandy tool called "),V={href:"https://github.com/wojpawlik/deno2node",target:"_blank",rel:"noopener noreferrer"},z=s("deno2node"),U=s(" that transpiles your code from Deno to Node.js so we can support both platforms equally well. Deno support is only a strict requirement for official plugins, but not for third-party ones. Nonetheless, it is very much encouraged to give Deno a try. You will not want to go back."),$=e(`<h2 id="designing-a-dummy-middleware-plugin" tabindex="-1"><a class="header-anchor" href="#designing-a-dummy-middleware-plugin" aria-hidden="true">#</a> Designing a Dummy Middleware Plugin</h2><p>Let\u2019s assume we would like to design a plugin that only responds to certain users! For example, we could decide to only respond to people whose first name contain a certain word. The bot will simply refuse to work for everyone else.</p><p>Here is a dummy example:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// plugin.ts</span>

<span class="token comment">// Importing the types from grammY (we re-export them in \`deps.deno.ts\`).</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Context<span class="token punctuation">,</span> Middleware<span class="token punctuation">,</span> NextFunction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./deps.deno.ts&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Your plugin can have one main function that creates middleware</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">onlyAccept</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">C</span> <span class="token keyword">extends</span> Context<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>str<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> Middleware<span class="token operator">&lt;</span><span class="token constant">C</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// Create and return middleware.</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Get first name of user.</span>
    <span class="token keyword">const</span> name <span class="token operator">=</span> ctx<span class="token punctuation">.</span>from<span class="token operator">?.</span>first_name<span class="token punctuation">;</span>
    <span class="token comment">// Let through all matching updates.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> name<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Pass on control flow to downstream middleware.</span>
      <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Tell them we don&#39;t like them.</span>
      <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">I&#39;m not talking to you! You don&#39;t care about </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>str<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, it can be used in a real bot:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Here, the plugin code is in a file called \`plugin.ts\`.</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> onlyAccept <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./plugin.ts&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Bot <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./deps.deno.ts&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- put your bot token here</span>

bot<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">onlyAccept</span><span class="token punctuation">(</span><span class="token string">&quot;grammY&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;message&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ctx<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">&quot;You passed the middleware plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Voil\xE0! You got yourself a plugin, right? Well, not so fast. We still need to package it up, but before that, let\u2019s take a look at transformer plugins, as well.</p><h2 id="designing-a-dummy-transformer-plugin" tabindex="-1"><a class="header-anchor" href="#designing-a-dummy-transformer-plugin" aria-hidden="true">#</a> Designing a Dummy Transformer Plugin</h2>`,8),J=s("Imagine writing a plugin that sends the appropriate "),K={href:"https://core.telegram.org/bots/api#sendchataction",target:"_blank",rel:"noopener noreferrer"},O=s("chat action"),Q=s(" automatically whenever the bot sends a document. This means that while your bot is sending a file, users will automatically see \u201C"),X=n("em",null,"sending file\u2026",-1),Z=s("\u201D as status. Pretty cool, right?"),nn=e(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// plugin.ts</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Transformer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./deps.deno.ts&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Main plugin function</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">autoChatAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Transformer <span class="token punctuation">{</span>
  <span class="token comment">// Create and return a transformer function.</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>prev<span class="token punctuation">,</span> method<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> signal<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Save the handle of the set interval so we can clear it later.</span>
    <span class="token keyword">let</span> handle<span class="token operator">:</span> ReturnType<span class="token operator">&lt;</span><span class="token keyword">typeof</span> setTimeout<span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>method <span class="token operator">===</span> <span class="token string">&quot;sendDocument&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;chat_id&quot;</span> <span class="token keyword">in</span> payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// We now know that a document is being sent.</span>
      <span class="token keyword">const</span> actionPayload <span class="token operator">=</span> <span class="token punctuation">{</span>
        chat_id<span class="token operator">:</span> payload<span class="token punctuation">.</span>chat_id<span class="token punctuation">,</span>
        action<span class="token operator">:</span> <span class="token string">&quot;upload_document&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token comment">// Repeatedly set the chat action while the file is being uploaded.</span>
      handle <span class="token operator">??=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">prev</span><span class="token punctuation">(</span><span class="token string">&quot;sendChatAction&quot;</span><span class="token punctuation">,</span> actionPayload<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token builtin">console</span><span class="token punctuation">.</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// Run the actual method from the bot.</span>
      <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token function">prev</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> payload<span class="token punctuation">,</span> signal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      <span class="token comment">// Clear the interval so we stop sending the chat action to the client.</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span>handle<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, we can use it in a real bot:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Bot<span class="token punctuation">,</span> InputFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./deps.deno.ts&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// The plugin code is in a file called \`plugin.ts\`</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> autoChatAction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./plugin.ts&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// Create a bot instance.</span>
<span class="token keyword">const</span> bot <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Bot</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &lt;-- put your bot token here</span>

<span class="token comment">// Use the plugin.</span>
bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">autoChatAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

bot<span class="token punctuation">.</span><span class="token function">hears</span><span class="token punctuation">(</span><span class="token string">&quot;send me a document&quot;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// If user send this command, we will send him a pdf file (for demonstration purposes)</span>
  <span class="token keyword">await</span> ctx<span class="token punctuation">.</span><span class="token function">replyWithDocument</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputFile</span><span class="token punctuation">(</span><span class="token string">&quot;/tmp/document.pdf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// start the bot</span>
bot<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, every time we send a document, the chat action of <code>upload<wbr>_document</code> will be sent to our client. Note that this was for demonstration purposes. Telegram recommends using chat actions only when \u201Ca response from the bot will take a <strong>noticeable</strong> amount of time to arrive\u201D. You probably don\u2019t actually need to set the status if the file is very small, so there are some optimizations that could be done here.</p><h2 id="extraction-into-a-plugin" tabindex="-1"><a class="header-anchor" href="#extraction-into-a-plugin" aria-hidden="true">#</a> Extraction Into a Plugin</h2>`,5),sn=s("Whichever type of plugin you made, you have to bundle it in a standalone package. This is a fairly simple task. There are no specific rules on how to do this and npm is your oyster, but just to keep things organized, we have a template suggestion for you. You can download the code from "),an={href:"https://github.com/grammyjs/plugin-template",target:"_blank",rel:"noopener noreferrer"},tn=s("our plugin template repository on Git"),en=n("wbr",null,null,-1),on=s("Hub"),pn=s(" and start developing your plugin without any time spent on configuration."),cn=n("p",null,"The initially suggested folder structure:",-1),ln=n("div",{class:"language-asciiart ext-asciiart"},[n("pre",{class:"language-asciiart"},[n("code",null,`plugin-template/
\u251C\u2500 src/
\u2502  \u251C\u2500 deps.deno.ts
\u2502  \u251C\u2500 deps.node.ts
\u2502  \u2514\u2500 index.ts
\u251C\u2500 package.json
\u251C\u2500 tsconfig.json
\u2514\u2500 README.md
`)])],-1),un=e("<strong><code>deps<wbr>.deno<wbr>.ts</code> and <code>deps<wbr>.node<wbr>.ts</code></strong>: This is for the developers who are willing to write the plugin for Deno, and then transpile it to Node.js. As mentioned before, we use the tool <code>deno2node</code> to transpile our Deno code for Node.js. <code>deno2node</code> has a feature that allows you to provide runtime-specific files to it. These files should be adjacent to each other and follow the <code>*<wbr>.deno<wbr>.ts</code> and <code>*<wbr>.node<wbr>.ts</code> name structure as ",10),rn={href:"https://github.com/wojpawlik/deno2node#runtime-specific-code",target:"_blank",rel:"noopener noreferrer"},dn=s("explained in the docs"),kn=e(". This is why there are two files: <code>deps<wbr>.deno<wbr>.ts</code> and <code>deps<wbr>.node<wbr>.ts</code>. If there are any Node.js-specific dependencies, put them in <code>deps<wbr>.node<wbr>.ts</code>, otherwise, leave it empty.",7),hn=n("em",null,[n("strong",null,"Note")],-1),mn=s(": You may also use other tools such as "),gn={href:"https://github.com/denoland/dnt",target:"_blank",rel:"noopener noreferrer"},bn=s("deno dnt"),vn=s(" to transpile your deno codebase or use other folder structures. The tooling you use is irrelevant, the main point here is that writing code for Deno is better and easier."),yn=e('<p><strong><code>tsconfig<wbr>.json</code></strong>: This is the TypeScript compiler configuration file used by <code>deno2node</code> to transpile your code. A default one is provided in the repository as a suggestion. It corresponds with the TypeScript configuration that Deno uses internally, and we recommend that you stick with this.</p><p><strong><code>package<wbr>.json</code></strong>: The package.json file for the npm version of your plugin. <strong>Make sure to change it according to your project</strong>.</p><p><strong><code>README<wbr>.md</code></strong>: Instructions on how to use the plugin. <strong>Make sure to change it according to your project</strong>.</p><p><strong><code>index<wbr>.ts</code></strong>: The file containing your business logic, i.e. your main plugin code.</p><h2 id="there-is-a-boilerplate" tabindex="-1"><a class="header-anchor" href="#there-is-a-boilerplate" aria-hidden="true">#</a> There Is a Boilerplate</h2>',5),fn=s("If you would like to develop a plugin for grammY and do not know where to start, we highly suggest the template code in "),_n={href:"https://github.com/grammyjs/plugin-template",target:"_blank",rel:"noopener noreferrer"},wn=s("our repository"),xn=s(". You can clone the code for yourself and start coding based on what was covered in this article. This repository also includes some extra goodies such as "),qn=n("code",null,".editorconfig",-1),Tn=s(", "),jn=n("code",null,"LICENSE",-1),In=s(", "),Yn=n("code",null,".gitignore",-1),Dn=s(", etc, but you may choose to delete them."),Cn=n("h2",{id:"i-don-t-like-deno",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#i-don-t-like-deno","aria-hidden":"true"},"#"),s(" I Don\u2019t Like Deno")],-1),Nn=n("p",null,[s("Well, you\u2019re missing out! But you can also write your plugins only for Node.js. You can still publish the plugin and have it listed as a third-party plugin on this website. In such a case, you may use any folder structure you like (as long as it is organized like any other npm project). Simply install grammY through npm with "),n("code",null,"npm install grammy"),s(", and start coding.")],-1),Pn=n("h2",{id:"how-to-submit",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#how-to-submit","aria-hidden":"true"},"#"),s(" How to Submit?")],-1),An=s("If you have a plugin ready, you may simply submit a pull request on GitHub (according to the "),En=n("a",{href:"#rules-of-contribution"},"Rules of Contribution",-1),Hn=s("), or notify us in the "),Mn={href:"https://t.me/grammyjs",target:"_blank",rel:"noopener noreferrer"},Bn=s("community chat"),Rn=s(" for further help.");function Ln(Sn,Gn){const o=p("RouterLink"),t=p("ExternalLinkIcon");return l(),u("div",null,[d,k,n("blockquote",null,[n("p",null,[h,a(o,{to:"/plugins/"},{default:i(()=>[m]),_:1}),g])]),b,v,n("ul",null,[n("li",null,[y,a(o,{to:"/guide/middleware.html"},{default:i(()=>[f]),_:1}),_]),n("li",null,[w,a(o,{to:"/advanced/transformers.html"},{default:i(()=>[x]),_:1}),q])]),T,j,I,Y,n("p",null,[D,n("a",C,[N,a(t)]),P]),A,n("ol",null,[E,n("li",null,[H,n("a",M,[B,a(t)]),R]),L]),n("p",null,[S,n("a",G,[W,a(t)]),F,n("a",V,[z,a(t)]),U]),$,n("p",null,[J,n("a",K,[O,a(t)]),Q,X,Z]),nn,n("p",null,[sn,n("a",an,[tn,en,on,a(t)]),pn]),cn,ln,n("p",null,[un,n("a",rn,[dn,a(t)]),kn]),n("blockquote",null,[n("p",null,[hn,mn,n("a",gn,[bn,a(t)]),vn])]),yn,n("p",null,[fn,n("a",_n,[wn,a(t)]),xn,qn,Tn,jn,In,Yn,Dn]),Cn,Nn,Pn,n("p",null,[An,En,Hn,n("a",Mn,[Bn,a(t)]),Rn])])}const Fn=c(r,[["render",Ln],["__file","guide.html.vue"]]);export{Fn as default};

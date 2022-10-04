import{_ as i,r as o,o as p,c as r,a as n,b as e,w as l,d as s,e as t}from"./app.cd079934.js";const u={},d=n("h1",{id:"commands",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#commands","aria-hidden":"true"},"#"),s(" Commands")],-1),m=n("p",null,"Commands are special entities in Telegram messages, that serve as instructions for bots.",-1),h=n("h2",{id:"usage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),s(" Usage")],-1),b=s("Revisit the commands section in the "),k={href:"https://core.telegram.org/bots#commands",target:"_blank",rel:"noopener noreferrer"},g=s("Introduction for Developers"),_=s(" written by the Telegram team."),w=t(`<p>grammY provides special handling for commands (e.g. <code>/start</code> and <code>/help</code>). You can directly register listeners for certain commands via <code>bot<wbr>.command()</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// Respond to the command /start.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Respond to the command /help.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;help&quot;</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Respond to the commands /a, /b, /c, and /d.</span>
bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">]</span> <span class="token comment">/* , ... */</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that only those commands that are in the beginning of a message are handled, so if a user sends <code>&quot;Please do not send <wbr>/start to that bot!&quot;</code>, then your listener will not be called, even though the <code>/start</code> command <em>is</em> contained in the message.</p><p>Telegram supports sending targeted commands to bots, i.e. commands that end with <code>@your<wbr>_bot<wbr>_name</code>. grammY handles this automatically for you, so <code>bot<wbr>.command(&quot;start&quot;)</code> will match messages with <code>/start</code> and with <code>/start@your<wbr>_bot<wbr>_name</code> as commands. You can choose to match only targeted commands by specifying <code>bot<wbr>.command(&quot;start@your<wbr>_bot<wbr>_name&quot;)</code>.</p>`,4),v={class:"custom-container tip"},y=t(`<p class="custom-container-title">Suggest Commands to Users</p><p>You can call</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">await</span> bot<span class="token punctuation">.</span>api<span class="token punctuation">.</span><span class="token function">setMyCommands</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Start the bot&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;help&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Show help text&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> command<span class="token operator">:</span> <span class="token string">&quot;settings&quot;</span><span class="token punctuation">,</span> description<span class="token operator">:</span> <span class="token string">&quot;Open settings&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>to make Telegram clients display a list of suggested commands in the text input field.</p>`,4),f=s("Alternatively, you can configure this by talking to "),q={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},x=s("@Bot"),T=n("wbr",null,null,-1),R=s("Father"),L=s("."),N=t(`<h2 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> Arguments</h2><p>Users can send <strong>arguments</strong> along with their commands. You can access the argument string via <code>ctx<wbr>.match</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>bot<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \`item\` will be &quot;apple pie&quot; if a user sends &quot;/add apple pie&quot;.</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> ctx<span class="token punctuation">.</span>match<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that you can always access the entire message\u2019s text via <code>ctx<wbr>.msg<wbr>.text</code>.</p><h2 id="deep-linking-support" tabindex="-1"><a class="header-anchor" href="#deep-linking-support" aria-hidden="true">#</a> Deep Linking Support</h2>`,5),S=s("Revisit the deep linking section in the "),Y={href:"https://core.telegram.org/bots#deep-linking",target:"_blank",rel:"noopener noreferrer"},C=s("Introduction for Developers"),I=s(" written by the Telegram team."),U=t("<p>When a user visits <code>https://<wbr>t<wbr>.me<wbr>/your<wbr>_bot<wbr>_name<wbr>?start<wbr>=<wbr>payload</code>, their Telegram client will show a START button that (when clicked) sends the string from the URL parameter along with the message, in this example, the message text will be <code>&quot;<wbr>/start payload&quot;</code>. Telegram clients will not show the payload to the user (they will only see <code>&quot;<wbr>/start&quot;</code> in the UI), however, your bot will receive it. grammY extracts this payload for you, and provides it under <code>ctx<wbr>.match</code>. In our example, <code>ctx<wbr>.match</code> would contain the string <code>&quot;payload&quot;</code>.</p>",1),B=s("Deep linking is useful if you want to build a referral system, or track where users discovered your bot. For example, your bot could send a channel post with an "),A=s("inline keyboard"),D=t(" button. The button contains a URL like the one above, e.g. <code>https://<wbr>t<wbr>.me<wbr>/your<wbr>_bot<wbr>_name<wbr>?start<wbr>=<wbr>awesome<wbr>-channel<wbr>-post<wbr>-12345</code>. When a user clicks on the button underneath the post, their Telegram client will open a chat with your bot, and display the START button as described above. This way, your bot can identify where a user came from, and that they clicked the button underneath a specific channel post.",3),V=n("p",null,"Naturally, you can also embed such links anywhere else: on the web, in messages, in QR codes, etc.",-1);function E(F,W){const a=o("ExternalLinkIcon"),c=o("RouterLink");return p(),r("div",null,[d,m,h,n("blockquote",null,[n("p",null,[b,n("a",k,[g,e(a)]),_])]),w,n("div",v,[y,n("p",null,[f,n("a",q,[x,T,R,e(a)]),L])]),N,n("blockquote",null,[n("p",null,[S,n("a",Y,[C,e(a)]),I])]),U,n("p",null,[B,e(c,{to:"/plugins/keyboard.html#inline-keyboards"},{default:l(()=>[A]),_:1}),D]),V])}const O=i(u,[["render",E],["__file","commands.html.vue"]]);export{O as default};
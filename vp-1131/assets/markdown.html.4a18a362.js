import{_ as r,r as e,o as d,c as D,a as l,b as s,w as a,d as n,e as c}from"./app.bee054cf.js";const u={},v=s("h1",{id:"markdown",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#markdown","aria-hidden":"true"},"#"),n(" Markdown")],-1),m=s("h2",{id:"自定义容器",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#自定义容器","aria-hidden":"true"},"#"),n(" 自定义容器")],-1),y=c(`<p>使用：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: &lt;type&gt; [</span><span style="color:#CE9178;">title</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">[</span><span style="color:#CE9178;">content</span><span style="color:#D4D4D4;">]</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>type</code> 是必需的， <code>title</code> 和 <code>content</code> 是可选的。</p><p>支持的 <code>type</code> 有：</p>`,4),b=s("li",null,[s("code",null,"tip")],-1),g=s("li",null,[s("code",null,"warning")],-1),_=s("li",null,[s("code",null,"danger")],-1),h=s("li",null,[s("code",null,"details")],-1),C=s("ul",null,[s("li",null,[s("code",null,"code-group")]),s("li",null,[s("code",null,"code-group-item")])],-1),E=s("li",null,[s("p",null,"示例 1 （默认标题）：")],-1),k=c(`<p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: tip</span></span>
<span class="line"><span style="color:#D4D4D4;">这是一个提示</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: warning</span></span>
<span class="line"><span style="color:#D4D4D4;">这是一个警告</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: danger</span></span>
<span class="line"><span style="color:#D4D4D4;">这是一个危险警告</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: details</span></span>
<span class="line"><span style="color:#D4D4D4;">这是一个 details 标签</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这是一个提示</p></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>这是一个警告</p></div><div class="custom-container danger"><p class="custom-container-title">警告</p><p>这是一个危险警告</p></div><details class="custom-container details"><p>这是一个 details 标签</p></details><ul><li>示例 2 （自定义标题）：</li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">::: danger STOP</span></span>
<span class="line"><span style="color:#D4D4D4;">危险区域，禁止通行</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">::: details 点击查看代码</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`ts</span></span>
<span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;你好，VuePress！&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p><div class="custom-container danger"><p class="custom-container-title">STOP</p><p>危险区域，禁止通行</p></div><details class="custom-container details"><summary>点击查看代码</summary><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#9CDCFE;">console</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">log</span><span style="color:#D4D4D4;">(</span><span style="color:#CE9178;">&#39;你好，VuePress！&#39;</span><span style="color:#D4D4D4;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details><ul><li>示例 3 （Code Group 别名）：</li></ul><p><strong>输入</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">:::: code-group</span></span>
<span class="line"><span style="color:#D4D4D4;">::: code-group-item FOO</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`ts</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">foo</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;foo&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"><span style="color:#D4D4D4;">::: code-group-item BAR</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`ts</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#D4D4D4;"> </span><span style="color:#4FC1FF;">bar</span><span style="color:#D4D4D4;"> = </span><span style="color:#CE9178;">&#39;bar&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"><span style="color:#D4D4D4;">:::</span></span>
<span class="line"><span style="color:#D4D4D4;">::::</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出</strong></p>`,17),f=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"foo"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},"'foo'")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),F=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#569CD6"}},"const"),s("span",{style:{color:"#D4D4D4"}}," "),s("span",{style:{color:"#4FC1FF"}},"bar"),s("span",{style:{color:"#D4D4D4"}}," = "),s("span",{style:{color:"#CE9178"}},"'bar'")]),n(`
`),s("span",{class:"line"})])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1);function w(x,B){const p=e("NpmBadge"),o=e("RouterLink"),i=e("CodeGroupItem"),t=e("CodeGroup");return d(),D("div",null,[v,l(p,{package:"@vuepress/theme-default"}),m,s("ul",null,[s("li",null,[y,s("ul",null,[b,g,_,h,s("li",null,[l(o,{to:"/zh/reference/default-theme/components.html#codegroup"},{default:a(()=>[n("CodeGroup")]),_:1}),n(" 和 "),l(o,{to:"/zh/reference/default-theme/components.html#codegroupitem"},{default:a(()=>[n("CodeGroupItem")]),_:1}),n(" 的别名： "),C])])]),E]),k,l(t,null,{default:a(()=>[l(i,{title:"FOO"},{default:a(()=>[f]),_:1}),l(i,{title:"BAR"},{default:a(()=>[F]),_:1})]),_:1})])}const A=r(u,[["render",w],["__file","markdown.html.vue"]]);export{A as default};
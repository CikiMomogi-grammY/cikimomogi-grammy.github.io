import{_ as r,r as l,o as u,c as m,a as s,b as e,d as n,w as a,e as d}from"./app.f347c99a.js";const v={},h=e("h1",{id:"built-in-components",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#built-in-components","aria-hidden":"true"},"#"),n(" Built-in Components")],-1),g={id:"badge",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#badge","aria-hidden":"true"},"#",-1),D=d(`<ul><li><p>Props:</p><ul><li>type <ul><li>Type: <code>&#39;tip&#39; | &#39;warning&#39; | &#39;danger&#39;</code></li><li>Default: <code>&#39;tip&#39;</code></li></ul></li><li>text <ul><li>Type: <code>string</code></li><li>Default: <code>&#39;&#39;</code></li></ul></li><li>vertical <ul><li>Type: <code>&#39;top&#39; | &#39;middle&#39; | &#39;bottom&#39; | undefined</code></li><li>Default: <code>undefined</code></li></ul></li></ul></li><li><p>Example:</p></li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - &lt;Badge type=&quot;tip&quot; text=&quot;v2&quot; vertical=&quot;top&quot; /&gt;</span></span>
<span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - &lt;Badge type=&quot;warning&quot; text=&quot;v2&quot; vertical=&quot;middle&quot; /&gt;</span></span>
<span class="line"><span style="color:#6796E6;">-</span><span style="color:#D4D4D4;"> VuePress - &lt;Badge type=&quot;danger&quot; text=&quot;v2&quot; vertical=&quot;bottom&quot; /&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,4),_=d(`<h2 id="codegroup" tabindex="-1"><a class="header-anchor" href="#codegroup" aria-hidden="true">#</a> CodeGroup</h2><ul><li><p>Details:</p><p>Wrapper of the <a href="#codegroupitem">CodeGroupItem</a> components.</p></li></ul><h2 id="codegroupitem" tabindex="-1"><a class="header-anchor" href="#codegroupitem" aria-hidden="true">#</a> CodeGroupItem</h2><ul><li><p>Props:</p><ul><li>title <ul><li>Type: <code>string</code></li><li>Required: <code>true</code></li></ul></li><li>active <ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul></li></ul></li><li><p>Details:</p><p>This component must be placed inside a <a href="#codegroup">CodeGroup</a> component.</p><p>Use the <code>active</code> prop to set the initial active item, or the first item will be activated by default.</p></li><li><p>Example:</p></li></ul><p><strong>Input</strong></p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki" style="background-color:#1E1E1E;"><code><span class="line"><span style="color:#D4D4D4;">&lt;CodeGroup&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;CodeGroupItem title=&quot;YARN&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#D4D4D4;">yarn</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;/CodeGroupItem&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;CodeGroupItem title=&quot;NPM&quot; active&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`bash:no-line-numbers</span></span>
<span class="line"><span style="color:#D4D4D4;">npm install</span></span>
<span class="line"><span style="color:#D4D4D4;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">  &lt;/CodeGroupItem&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">&lt;/CodeGroup&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Output</strong></p>`,7),y=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"yarn")]),n(`
`),e("span",{class:"line"})])])],-1),f=e("div",{class:"language-bash","data-ext":"sh"},[e("pre",{class:"shiki",style:{"background-color":"#1E1E1E"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#D4D4D4"}},"npm install")]),n(`
`),e("span",{class:"line"})])])],-1),k={class:"custom-container warning"},q=e("p",{class:"custom-container-title"},"WARNING",-1),x=e("p",null,[n("You must add an empty line between the starting tag of "),e("code",null,"<CodeGroupItem>"),n(" and the code fence, otherwise the code fence will not be parsed correctly by Markdown.")],-1),C=e("p",null,"All content must be valid Markdown first, and then a Vue SFC.",-1);function E(w,G){const c=l("NpmBadge"),t=l("Badge"),o=l("CodeGroupItem"),p=l("CodeGroup"),i=l("RouterLink");return u(),m("div",null,[h,s(c,{package:"@vuepress/theme-default"}),e("h2",g,[b,n(" Badge "),s(t,{text:"badge"})]),D,e("ul",null,[e("li",null,[n("VuePress - "),s(t,{type:"tip",text:"v2",vertical:"top"})]),e("li",null,[n("VuePress - "),s(t,{type:"warning",text:"v2",vertical:"middle"})]),e("li",null,[n("VuePress - "),s(t,{type:"danger",text:"v2",vertical:"bottom"})])]),_,s(p,null,{default:a(()=>[s(o,{title:"YARN"},{default:a(()=>[y]),_:1}),s(o,{title:"NPM",active:""},{default:a(()=>[f]),_:1})]),_:1}),e("div",k,[q,x,C,e("p",null,[n("Learn more: "),s(i,{to:"/advanced/cookbook/markdown-and-vue-sfc.html"},{default:a(()=>[n("Cookbook > Markdown and Vue SFC")]),_:1})]),e("p",null,[n("Alternatively, you can use the "),s(i,{to:"/reference/default-theme/markdown.html#custom-containers"},{default:a(()=>[n("custom containers")]),_:1}),n(".")])])])}const I=r(v,[["render",E],["__file","components.html.vue"]]);export{I as default};
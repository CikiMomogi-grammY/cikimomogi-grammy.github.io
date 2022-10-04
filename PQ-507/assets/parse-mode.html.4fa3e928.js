import{_ as u,r as t,o as r,c as k,b as a,w as e,a as n,d as s,e as i}from"./app.9a621f1c.js";const d={},m=n("h1",{id:"plugin-parse-mode-parse-mode",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugin-parse-mode-parse-mode","aria-hidden":"true"},"#"),s(" Plugin Parse Mode ("),n("code",null,[s("parse"),n("wbr"),s("-mode")]),s(")")],-1),b=i('<p>Plugin ini menyediakan sebuah transformer untuk mengatur setting-an bawaan <code>parse<wbr>_mode</code> dan sebuah middleware untuk menghidrasi <code>Context</code> dengan varian method <code>reply</code> yang lebih familiar, contohnya: <code>reply<wbr>WithHTML</code>, <code>reply<wbr>With<wbr>Markdown</code>, dll.</p><h2 id="penggunaan" tabindex="-1"><a class="header-anchor" href="#penggunaan" aria-hidden="true">#</a> Penggunaan</h2>',2),g=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrateReply"),n("span",{class:"token punctuation"},","),s(" parseMode "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/parse-mode"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ParseModeContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"@grammyjs/parse-mode"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("ParseModeContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Gunakan plugin-nya"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("hydrateReply"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Atur setting-an bawaan parse_mode untuk ctx.reply"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"parseMode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"MarkdownV2"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan _MarkdownV2_ sebagai `format` bawaannya"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithHTML"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"<b>Reply</b> ini menggunakan <code>format</code> <i>withHTML</i>"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdown"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdown_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV1"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV1_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV2"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV2_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"grammy"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" hydrateReply"),n("span",{class:"token punctuation"},","),s(" parseMode "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"require"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"@grammyjs/parse-mode"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Bot"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Gunakan plugin-nya"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("hydrateReply"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Atur setting-an bawaan parse_mode untuk ctx.reply"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"parseMode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"MarkdownV2"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan _MarkdownV2_ sebagai `format` bawaannya"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithHTML"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"<b>Reply</b> ini menggunakan <code>format</code> <i>withHTML</i>"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdown"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdown_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV1"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV1_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV2"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV2_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" Bot "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy@v1.11.1/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(`
  hydrateReply`),n("span",{class:"token punctuation"},","),s(`
  parseMode`),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_parse_mode@1.4.0/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token punctuation"},"{"),s(" ParseModeContext "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"https://deno.land/x/grammy_parse_mode@1.4.0/mod.ts"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" bot "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},[s("Bot"),n("span",{class:"token operator"},"<"),s("ParseModeContext"),n("span",{class:"token operator"},">")]),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Gunakan plugin-nya"),s(`
bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),s("hydrateReply"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// Atur setting-an bawaan parse_mode untuk ctx.reply"),s(`
bot`),n("span",{class:"token punctuation"},"."),s("api"),n("span",{class:"token punctuation"},"."),s("config"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"use"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"parseMode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"MarkdownV2"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"command"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"demo"'),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"async"),s(),n("span",{class:"token punctuation"},"("),s("ctx"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reply"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan _MarkdownV2_ sebagai `format` bawaannya"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithHTML"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"<b>Reply</b> ini menggunakan <code>format</code> <i>withHTML</i>"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdown"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdown_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV1"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV1_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"await"),s(" ctx"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replyWithMarkdownV2"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token string"},'"*Reply* ini menggunakan `format` _withMarkdownV2_"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

bot`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"start"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("h2",{id:"ringkasan-plugin",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ringkasan-plugin","aria-hidden":"true"},"#"),s(" Ringkasan Plugin")],-1),v=n("li",null,[s("Nama: "),n("code",null,[s("parse"),n("wbr"),s("-mode")])],-1),_=s("Sumber: "),f={href:"https://github.com/grammyjs/parse-mode",target:"_blank",rel:"noopener noreferrer"},x=s("https://"),M=n("wbr",null,null,-1),R=s("github"),V=n("wbr",null,null,-1),j=s(".com"),T=n("wbr",null,null,-1),P=s("/grammyjs"),C=n("wbr",null,null,-1),W=s("/parse"),E=n("wbr",null,null,-1),I=s("-mode"),L=s("Referensi: "),A={href:"https://doc.deno.land/https://deno.land/x/grammy_parse_mode/mod.ts",target:"_blank",rel:"noopener noreferrer"},B=i("https://<wbr>doc<wbr>.deno<wbr>.land<wbr>/https://<wbr>deno<wbr>.land<wbr>/x<wbr>/grammy<wbr>_parse<wbr>_mode<wbr>/mod<wbr>.ts",25);function H(N,G){const l=t("AutotagPage"),o=t("CodeGroupItem"),p=t("CodeGroup"),c=t("ExternalLinkIcon");return r(),k("div",null,[m,a(l,{config:'[{"url":["/plugins"],"exclude":["console-time","middlewares","autoquote","guide","session","keyboard","/"],"tag":[{"template":"official","text":"OFFICIAL","desc":"This plugin is published and maintained by grammY","locale":{"es":{"text":"OFICIAL","desc":"Este plugin es publicado y mantenido por grammY"},"id":{"text":"RESMI","desc":"Plugin ini dipublikasi dan dikelola oleh grammY"},"zh":{"text":"\u5B98\u65B9\u7EF4\u62A4","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531grammY\u53D1\u5E03\u548C\u7EF4\u62A4\u7684"}}}]},{"url":["/plugins"],"include":["console-time","middlewares","autoquote"],"tag":[{"template":"thirdparty","text":"THIRD-PARTY","desc":"This plugin is maintained by third-party","locale":{"es":{"text":"DE TERCEROS","desc":"Este plugin es mantenido por terceros"},"id":{"text":"PIHAK KETIGA","desc":"Plugin ini dikelola oleh pihak ketiga"},"zh":{"text":"\u7B2C\u4E09\u65B9","desc":"\u8FD9\u4E2A\u63D2\u4EF6\u662F\u7531\u7B2C\u4E09\u65B9\u7EF4\u62A4\u7684"}}}]},{"url":["/hosting"],"exclude":["gcf","comparison"],"tag":[{"template":"deno","desc":"This setup is able to run Deno bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Deno"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Deno"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CDeno\u673A\u5668\u4EBA"}}}]},{"url":["/hosting"],"include":["heroku","vps"],"tag":[{"template":"nodejs","desc":"This setup is able to run Node.js bots","locale":{"es":{"desc":"Esta configuraci\xF3n es capaz de ejecutar bots Node.js"},"id":{"desc":"Konfigurasi ini dapat dijalankan di bot Node.js"},"zh":{"desc":"\u8FD9\u4E2A\u8BBE\u7F6E\u80FD\u591F\u8FD0\u884CNode.js\u673A\u5668\u4EBA"}}}]}]'}),b,a(p,null,{default:e(()=>[a(o,{title:"TypeScript",active:""},{default:e(()=>[g]),_:1}),a(o,{title:"JavaScript"},{default:e(()=>[w]),_:1}),a(o,{title:"Deno"},{default:e(()=>[y]),_:1})]),_:1}),h,n("ul",null,[v,n("li",null,[_,n("a",f,[x,M,R,V,j,T,P,C,W,E,I,a(c)])]),n("li",null,[L,n("a",A,[B,a(c)])])])])}const z=u(d,[["render",H],["__file","parse-mode.html.vue"]]);export{z as default};
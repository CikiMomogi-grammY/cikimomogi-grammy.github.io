import R from"./TagGroup.fa31b866.js";import b from"./Tag.2778159f.js";import{f as A,u as B,g as k,o as i,h as w,w as C,c as T,i as v,F,j as N,_ as S}from"./app.9837a88d.js";const U=A({__name:"AutotagPage",props:{config:String},setup(E){var _,x;const g=E;let p=!1,m=[];if(g.config){const s=B().fullPath,e=s.replace(/\/$|#.*$/,""),c=JSON.parse(g.config);for(const t of c){const a=t.url,r=t.tag[0].locale;t.url.forEach(l=>{for(const n in r){const u=`/${n}${l}`;a.push(u)}});for(let l of a){let n=!0,u=!0;const P=(_=t.include)!=null?_:[""],L=(x=t.exclude)!=null?x:[];if(n=d(P,l,e,s),u=!d(L,l,e,s),n&&u){t.tag.forEach(o=>{var h,$;for(const f in o.locale)if(e.startsWith(`/${f}/`)){o.text=(h=o.locale[f].text)!=null?h:o.text,o.desc=($=o.locale[f].desc)!=null?$:o.desc;break}m.push(o)}),p=!0;break}}}}function d(s,e,c,t){let a=!1;for(const r of s)if(r==="/"?a=new RegExp(`^${e}/$`).test(t):a=r.startsWith("/")?new RegExp(`^${e}${r}`).test(c):new RegExp(`^${e}.*${r}`).test(c),a)break;return a}return(s,e)=>k(p)?(i(),w(R,{key:0},{default:C(()=>[(i(!0),T(F,null,v(k(m),c=>(i(),w(b,{autotag:c},null,8,["autotag"]))),256))]),_:1})):N("v-if",!0)}}),J=S(U,[["__file","AutotagPage.vue"]]);export{J as default};

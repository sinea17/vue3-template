import{d as m,l as D,e as h,o as w,m as C,a as e,w as a,n as c,T as B,U as E,V as F,F as O,f as _}from"./components.f60566ab.js";const T=_("h3",null,"\u57FA\u7840\u62BD\u5C49",-1),R=_("h3",null,"Tabs \u62BD\u5C49",-1),y=_("h3",null,"\u5E26\u5E95\u90E8\u6309\u94AE\u62BD\u5C49\uFF08\u9002\u7528\u4E8E\u63D0\u4EA4\u8868\u5355\uFF09",-1),x=m({__name:"index",setup(g){const f=()=>{n({page:"OneDrawer",params:{}})},d=()=>{n({page:"TwoDrawer",params:{}})},i=()=>{n({page:"ThreeDrawer",params:{}})},p={},o=(r,u)=>{r&&(p[u]=r)},n=r=>{const u=p[`${r.page}Ref`];u&&u.initData(r.params||{})};return(r,u)=>{const s=D,l=h;return w(),C(O,null,[e(l,null,{header:a(()=>[T]),default:a(()=>[e(s,{type:"primary",onClick:f},{default:a(()=>[c("\u6253\u5F00\u62BD\u5C49")]),_:1})]),_:1}),e(l,null,{header:a(()=>[R]),default:a(()=>[e(s,{type:"primary",onClick:d},{default:a(()=>[c("\u6253\u5F00\u62BD\u5C49")]),_:1})]),_:1}),e(l,null,{header:a(()=>[y]),default:a(()=>[e(s,{type:"primary",onClick:i},{default:a(()=>[c("\u6253\u5F00\u62BD\u5C49")]),_:1})]),_:1}),e(B,{ref:t=>o(t,"OneDrawerRef"),onOpenDrawer:n},null,512),e(E,{ref:t=>o(t,"TwoDrawerRef"),onOpenDrawer:n},null,512),e(F,{ref:t=>o(t,"ThreeDrawerRef"),onOpenDrawer:n},null,512)],64)}}});export{x as default};
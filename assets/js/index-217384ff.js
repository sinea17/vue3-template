import{d as v,s as p,o as d,c as w,w as e,U as h,a,u as f,z as F,V,D as y,W as b,X as A,Y as k,Z as x,l as D,j as O,y as R,k as $,H as z,q as T}from"./components-58414e35.js";const U=v({__name:"OneDrawer",emits:["openDrawer"],setup(C,{expose:m,emit:E}){const t=p(!1),l=p(!1),i=()=>{l.value=!0,setTimeout(()=>{l.value=!1},1e3)};return m({initData:n=>{t.value=!0,i()}}),(n,u)=>{const r=V,_=y,o=b,c=A;return d(),w(o,{modelValue:f(t),"onUpdate:modelValue":u[0]||(u[0]=B=>F(t)?t.value=B:null),title:"\u57FA\u7840\u62BD\u5C49"},{default:e(()=>[h((d(),w(_,null,{default:e(()=>[a(r,{size:"small"})]),_:1})),[[c,f(l)]])]),_:1},8,["modelValue"])}}}),N=v({__name:"TwoDrawer",emits:["openDrawer"],setup(C,{expose:m,emit:E}){const t=p(!1),l=p("A");return m({initData:s=>{t.value=!0}}),(s,n)=>{const u=V,r=k,_=x,o=b;return d(),w(o,{modelValue:f(t),"onUpdate:modelValue":n[1]||(n[1]=c=>F(t)?t.value=c:null),"with-header":!1,onClose:n[2]||(n[2]=c=>l.value="A")},{default:e(()=>[a(_,{modelValue:f(l),"onUpdate:modelValue":n[0]||(n[0]=c=>F(l)?l.value=c:null),class:"drawer-tabs"},{default:e(()=>[a(r,{label:"A\u9875\u9762",name:"A"},{default:e(()=>[a(u,{size:"small",description:"A\u9875\u9762"})]),_:1}),a(r,{label:"B\u9875\u9762",name:"B",white:""},{default:e(()=>[a(u,{size:"small",description:"B\u9875\u9762\uFF08\u767D\u8272\u80CC\u666F\uFF09"})]),_:1}),a(r,{label:"C\u9875\u9762",name:"C"},{default:e(()=>[a(u,{size:"small",description:"C\u9875\u9762"})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])}}}),L=v({__name:"ThreeDrawer",emits:["openDrawer"],setup(C,{expose:m,emit:E}){const t=p(!1),l=p(!1),i=()=>{l.value=!0,setTimeout(()=>{l.value=!1},1e3)};return m({initData:n=>{t.value=!0,i()}}),(n,u)=>{const r=V,_=y,o=O,c=b,B=A;return d(),w(c,{modelValue:f(t),"onUpdate:modelValue":u[1]||(u[1]=g=>F(t)?t.value=g:null),title:"\u5E26\u5E95\u90E8\u6309\u94AE\u5F39\u7A97\uFF08\u9002\u7528\u4E8E\u63D0\u4EA4\u8868\u5355\uFF09"},{footer:e(()=>[a(o,{onClick:u[0]||(u[0]=g=>t.value=!1)},{default:e(()=>[D("\u53D6\u6D88")]),_:1}),a(o,{type:"primary"},{default:e(()=>[D("\u4FDD\u5B58")]),_:1})]),default:e(()=>[h((d(),w(_,null,{default:e(()=>[a(r,{size:"small"})]),_:1})),[[B,f(l)]])]),_:1},8,["modelValue"])}}}),j=T("h3",null,"\u57FA\u7840\u62BD\u5C49",-1),q=T("h3",null,"Tabs \u62BD\u5C49",-1),H=T("h3",null,"\u5E26\u5E95\u90E8\u6309\u94AE\u62BD\u5C49\uFF08\u9002\u7528\u4E8E\u63D0\u4EA4\u8868\u5355\uFF09",-1),P=v({__name:"index",setup(C){const m=()=>{s({page:"OneDrawer",params:{}})},E=()=>{s({page:"TwoDrawer",params:{}})},t=()=>{s({page:"ThreeDrawer",params:{}})},l={},i=(n,u)=>{n&&(l[u]=n)},s=n=>{const u=l[`${n.page}Ref`];u&&u.initData(n.params||{})};return(n,u)=>{const r=O,_=R;return d(),$(z,null,[a(_,null,{header:e(()=>[j]),default:e(()=>[a(r,{type:"primary",onClick:m},{default:e(()=>[D("\u6253\u5F00\u62BD\u5C49")]),_:1})]),_:1}),a(_,null,{header:e(()=>[q]),default:e(()=>[a(r,{type:"primary",onClick:E},{default:e(()=>[D("\u6253\u5F00\u62BD\u5C49")]),_:1})]),_:1}),a(_,null,{header:e(()=>[H]),default:e(()=>[a(r,{type:"primary",onClick:t},{default:e(()=>[D("\u6253\u5F00\u62BD\u5C49")]),_:1})]),_:1}),a(U,{ref:o=>i(o,"OneDrawerRef"),onOpenDrawer:s},null,512),a(N,{ref:o=>i(o,"TwoDrawerRef"),onOpenDrawer:s},null,512),a(L,{ref:o=>i(o,"ThreeDrawerRef"),onOpenDrawer:s},null,512)],64)}}});export{P as default};

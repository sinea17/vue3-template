import{d as p,G as f,t as i,v as B,x as F,l as k,y as D,e as E,o as V,c as h,w as e,a as o,u as v,z as x,n as C,f as b,p as g,A as N}from"./components-7ef916d1.js";const y=b("h3",null,"\u767B\u5F55\u9875",-1),L=p({__name:"login",setup(I){const n=f(),u=g(),t=i(),s=()=>{if(!t.value){N.error("\u8BF7\u8F93\u5165token");return}n.setToken(t.value),n.setUserInfo({name:"\u6D4B\u8BD5\u8D26\u53F7",enterpriseName:"\u6D4B\u8BD5\u516C\u53F8\u540D\u79F0",starLevel:3}),u.push("/")};return(w,a)=>{const r=B,l=F,_=k,c=D,m=E;return V(),h(m,null,{header:e(()=>[y]),default:e(()=>[o(c,{inline:!0},{default:e(()=>[o(l,null,{default:e(()=>[o(r,{modelValue:v(t),"onUpdate:modelValue":a[0]||(a[0]=d=>x(t)?t.value=d:null),clearable:""},null,8,["modelValue"])]),_:1}),o(l,null,{default:e(()=>[o(_,{type:"primary",onClick:s},{default:e(()=>[C("\u767B\u5F55")]),_:1})]),_:1})]),_:1})]),_:1})}}});export{L as default};

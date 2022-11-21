import{b6 as Bt,O as B,m as _,ap as De,h as L,n as Ge,W as vo,s as go,b7 as mo,a1 as ho,z as ee,i as d,K as xe,d as $,r as N,C as se,J as pe,B as Se,j as le,a8 as Ke,o as J,c as He,G as Ze,aw as Ue,a9 as Mt,b8 as yo,$ as bo,F as wo,T as Oo,aj as Eo,a as Ae,D as ve,w as te,P as It,H as de,l as ht,I as To,M as jt,Z as Co,t as Le,aa as Po,ab as xo,au as Ao,S as Ro,b9 as ko,a7 as So}from"./index.54492493.js";import{c as Te,k as _t,t as Bo,j as Fe}from"./types.d6921ee2.js";import{u as Mo,E as yt}from"./index.c34b986f.js";import{e as Dt,o as Io}from"./index.d4a0575f.js";import{i as Nt,E as jo}from"./SvgIcon.eb9c95a0.js";import{u as _o}from"./index.3d6fd070.js";const Y=(e,t,{checkForDefaultPrevented:o=!0}={})=>r=>{const a=e==null?void 0:e(r);if(o===!1||!a)return t==null?void 0:t(r)},Do=()=>Math.floor(Math.random()*1e4),Xe=Symbol("popper"),Lt=Symbol("popperContent"),Ye=Symbol("elTooltip"),No=Bt({type:B(Boolean),default:null}),Lo=Bt({type:B(Function)}),$o=e=>{const t=`update:${e}`,o=`onUpdate:${e}`,n=[t],r={[e]:No,[o]:Lo};return{useModelToggle:({indicator:i,toggleReason:s,shouldHideWhenRouteChanges:l,shouldProceed:p,onShow:f,onHide:v})=>{const y=vo(),{emit:g}=y,m=y.props,c=_(()=>De(m[o])),O=_(()=>m[e]===null),u=w=>{i.value!==!0&&(i.value=!0,s&&(s.value=w),De(f)&&f(w))},E=w=>{i.value!==!1&&(i.value=!1,s&&(s.value=w),De(v)&&v(w))},C=w=>{if(m.disabled===!0||De(p)&&!p())return;const A=c.value&&Te;A&&g(t,!0),(O.value||!A)&&u(w)},b=w=>{if(m.disabled===!0||!Te)return;const A=c.value&&Te;A&&g(t,!1),(O.value||!A)&&E(w)},P=w=>{!_t(w)||(m.disabled&&w?c.value&&g(t,!1):i.value!==w&&(w?u():E()))},x=()=>{i.value?b():C()};return L(()=>m[e],P),l&&y.appContext.config.globalProperties.$route!==void 0&&L(()=>({...y.proxy.$route}),()=>{l.value&&i.value&&b()}),Ge(()=>{P(m[e])}),{hide:b,show:C,toggle:x,hasUpdateHandler:c}},useModelToggleProps:r,useModelToggleEmits:n}};function Ho(){let e;const t=(n,r)=>{o(),e=window.setTimeout(n,r)},o=()=>window.clearTimeout(e);return Bo(()=>o()),{registerTimeout:t,cancelTimeout:o}}let bt;const Fo=go("namespace",ho),$t=`${Fo.value}-popper-container-${Do()}`,Ht=`#${$t}`,Wo=()=>{const e=document.createElement("div");return e.id=$t,document.body.appendChild(e),e},Ko=()=>{mo(()=>{!Te||(!bt||!document.body.querySelector(Ht))&&(bt=Wo())})},zo=ee({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200}}),qo=({showAfter:e,hideAfter:t,open:o,close:n})=>{const{registerTimeout:r}=Ho();return{onOpen:s=>{r(()=>{o(s)},d(e))},onClose:s=>{r(()=>{n(s)},d(t))}}},Ft=Symbol("elForwardRef"),Vo=e=>{xe(Ft,{setForwardRef:o=>{e.value=o}})},Uo=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),Jo=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],Wt=ee({role:{type:String,values:Jo,default:"tooltip"}}),Go=$({name:"ElPopperRoot",inheritAttrs:!1}),Zo=$({...Go,props:Wt,setup(e,{expose:t}){const o=e,n=N(),r=N(),a=N(),i=N(),s=_(()=>o.role),l={triggerRef:n,popperInstanceRef:r,contentRef:a,referenceRef:i,role:s};return t(l),xe(Xe,l),(p,f)=>se(p.$slots,"default")}});var Xo=pe(Zo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);const Kt=ee({arrowOffset:{type:Number,default:5}}),Yo=$({name:"ElPopperArrow",inheritAttrs:!1}),Qo=$({...Yo,props:Kt,setup(e,{expose:t}){const o=e,n=Se("popper"),{arrowOffset:r,arrowRef:a}=le(Lt,void 0);return L(()=>o.arrowOffset,i=>{r.value=i}),Ke(()=>{a.value=void 0}),t({arrowRef:a}),(i,s)=>(J(),He("span",{ref_key:"arrowRef",ref:a,class:Ze(d(n).e("arrow")),"data-popper-arrow":""},null,2))}});var en=pe(Qo,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);const tn="ElOnlyChild",on=$({name:tn,setup(e,{slots:t,attrs:o}){var n;const r=le(Ft),a=Uo((n=r==null?void 0:r.setForwardRef)!=null?n:Ue);return()=>{var i;const s=(i=t.default)==null?void 0:i.call(t,o);if(!s||s.length>1)return null;const l=zt(s);return l?Mt(yo(l,o),[[a]]):null}}});function zt(e){if(!e)return null;const t=e;for(const o of t){if(bo(o))switch(o.type){case Eo:continue;case Oo:case"svg":return wt(o);case wo:return zt(o.children);default:return o}return wt(o)}return null}function wt(e){const t=Se("only-child");return Ae("span",{class:t.e("content")},[e])}const qt=ee({virtualRef:{type:B(Object)},virtualTriggering:Boolean,onMouseenter:{type:B(Function)},onMouseleave:{type:B(Function)},onClick:{type:B(Function)},onKeydown:{type:B(Function)},onFocus:{type:B(Function)},onBlur:{type:B(Function)},onContextmenu:{type:B(Function)},id:String,open:Boolean}),nn=$({name:"ElPopperTrigger",inheritAttrs:!1}),rn=$({...nn,props:qt,setup(e,{expose:t}){const o=e,{role:n,triggerRef:r}=le(Xe,void 0);Vo(r);const a=_(()=>s.value?o.id:void 0),i=_(()=>{if(n&&n.value==="tooltip")return o.open&&o.id?o.id:void 0}),s=_(()=>{if(n&&n.value!=="tooltip")return n.value}),l=_(()=>s.value?`${o.open}`:void 0);let p;return Ge(()=>{L(()=>o.virtualRef,f=>{f&&(r.value=Dt(f))},{immediate:!0}),L(r,(f,v)=>{p==null||p(),p=void 0,Fe(f)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(y=>{var g;const m=o[y];m&&(f.addEventListener(y.slice(2).toLowerCase(),m),(g=v==null?void 0:v.removeEventListener)==null||g.call(v,y.slice(2).toLowerCase(),m))}),p=L([a,i,s,l],y=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((g,m)=>{Nt(y[m])?f.removeAttribute(g):f.setAttribute(g,y[m])})},{immediate:!0})),Fe(v)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(y=>v.removeAttribute(y))},{immediate:!0})}),Ke(()=>{p==null||p(),p=void 0}),t({triggerRef:r}),(f,v)=>f.virtualTriggering?de("v-if",!0):(J(),ve(d(on),It({key:0},f.$attrs,{"aria-controls":d(a),"aria-describedby":d(i),"aria-expanded":d(l),"aria-haspopup":d(s)}),{default:te(()=>[se(f.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var an=pe(rn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]),H="top",z="bottom",q="right",F="left",Qe="auto",Be=[H,z,q,F],ge="start",Re="end",sn="clippingParents",Vt="viewport",Ee="popper",ln="reference",Ot=Be.reduce(function(e,t){return e.concat([t+"-"+ge,t+"-"+Re])},[]),et=[].concat(Be,[Qe]).reduce(function(e,t){return e.concat([t,t+"-"+ge,t+"-"+Re])},[]),pn="beforeRead",un="read",fn="afterRead",cn="beforeMain",dn="main",vn="afterMain",gn="beforeWrite",mn="write",hn="afterWrite",yn=[pn,un,fn,cn,dn,vn,gn,mn,hn];function Z(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function me(e){var t=U(e).Element;return e instanceof t||e instanceof Element}function K(e){var t=U(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function tt(e){if(typeof ShadowRoot=="undefined")return!1;var t=U(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function bn(e){var t=e.state;Object.keys(t.elements).forEach(function(o){var n=t.styles[o]||{},r=t.attributes[o]||{},a=t.elements[o];!K(a)||!Z(a)||(Object.assign(a.style,n),Object.keys(r).forEach(function(i){var s=r[i];s===!1?a.removeAttribute(i):a.setAttribute(i,s===!0?"":s)}))})}function wn(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach(function(n){var r=t.elements[n],a=t.attributes[n]||{},i=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:o[n]),s=i.reduce(function(l,p){return l[p]="",l},{});!K(r)||!Z(r)||(Object.assign(r.style,s),Object.keys(a).forEach(function(l){r.removeAttribute(l)}))})}}var Ut={name:"applyStyles",enabled:!0,phase:"write",fn:bn,effect:wn,requires:["computeStyles"]};function G(e){return e.split("-")[0]}var ie=Math.max,We=Math.min,he=Math.round;function ye(e,t){t===void 0&&(t=!1);var o=e.getBoundingClientRect(),n=1,r=1;if(K(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(n=he(o.width)/i||1),a>0&&(r=he(o.height)/a||1)}return{width:o.width/n,height:o.height/r,top:o.top/r,right:o.right/n,bottom:o.bottom/r,left:o.left/n,x:o.left/n,y:o.top/r}}function ot(e){var t=ye(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function Jt(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&tt(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Q(e){return U(e).getComputedStyle(e)}function On(e){return["table","td","th"].indexOf(Z(e))>=0}function oe(e){return((me(e)?e.ownerDocument:e.document)||window.document).documentElement}function ze(e){return Z(e)==="html"?e:e.assignedSlot||e.parentNode||(tt(e)?e.host:null)||oe(e)}function Et(e){return!K(e)||Q(e).position==="fixed"?null:e.offsetParent}function En(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&K(e)){var n=Q(e);if(n.position==="fixed")return null}var r=ze(e);for(tt(r)&&(r=r.host);K(r)&&["html","body"].indexOf(Z(r))<0;){var a=Q(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Me(e){for(var t=U(e),o=Et(e);o&&On(o)&&Q(o).position==="static";)o=Et(o);return o&&(Z(o)==="html"||Z(o)==="body"&&Q(o).position==="static")?t:o||En(e)||t}function nt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ce(e,t,o){return ie(e,We(t,o))}function Tn(e,t,o){var n=Ce(e,t,o);return n>o?o:n}function Gt(){return{top:0,right:0,bottom:0,left:0}}function Zt(e){return Object.assign({},Gt(),e)}function Xt(e,t){return t.reduce(function(o,n){return o[n]=e,o},{})}var Cn=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Zt(typeof e!="number"?e:Xt(e,Be))};function Pn(e){var t,o=e.state,n=e.name,r=e.options,a=o.elements.arrow,i=o.modifiersData.popperOffsets,s=G(o.placement),l=nt(s),p=[F,q].indexOf(s)>=0,f=p?"height":"width";if(!(!a||!i)){var v=Cn(r.padding,o),y=ot(a),g=l==="y"?H:F,m=l==="y"?z:q,c=o.rects.reference[f]+o.rects.reference[l]-i[l]-o.rects.popper[f],O=i[l]-o.rects.reference[l],u=Me(a),E=u?l==="y"?u.clientHeight||0:u.clientWidth||0:0,C=c/2-O/2,b=v[g],P=E-y[f]-v[m],x=E/2-y[f]/2+C,w=Ce(b,x,P),A=l;o.modifiersData[n]=(t={},t[A]=w,t.centerOffset=w-x,t)}}function xn(e){var t=e.state,o=e.options,n=o.element,r=n===void 0?"[data-popper-arrow]":n;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Jt(t.elements.popper,r)||(t.elements.arrow=r))}var An={name:"arrow",enabled:!0,phase:"main",fn:Pn,effect:xn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function be(e){return e.split("-")[1]}var Rn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function kn(e){var t=e.x,o=e.y,n=window,r=n.devicePixelRatio||1;return{x:he(t*r)/r||0,y:he(o*r)/r||0}}function Tt(e){var t,o=e.popper,n=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,s=e.position,l=e.gpuAcceleration,p=e.adaptive,f=e.roundOffsets,v=e.isFixed,y=i.x,g=y===void 0?0:y,m=i.y,c=m===void 0?0:m,O=typeof f=="function"?f({x:g,y:c}):{x:g,y:c};g=O.x,c=O.y;var u=i.hasOwnProperty("x"),E=i.hasOwnProperty("y"),C=F,b=H,P=window;if(p){var x=Me(o),w="clientHeight",A="clientWidth";if(x===U(o)&&(x=oe(o),Q(x).position!=="static"&&s==="absolute"&&(w="scrollHeight",A="scrollWidth")),x=x,r===H||(r===F||r===q)&&a===Re){b=z;var I=v&&x===P&&P.visualViewport?P.visualViewport.height:x[w];c-=I-n.height,c*=l?1:-1}if(r===F||(r===H||r===z)&&a===Re){C=q;var j=v&&x===P&&P.visualViewport?P.visualViewport.width:x[A];g-=j-n.width,g*=l?1:-1}}var M=Object.assign({position:s},p&&Rn),D=f===!0?kn({x:g,y:c}):{x:g,y:c};if(g=D.x,c=D.y,l){var h;return Object.assign({},M,(h={},h[b]=E?"0":"",h[C]=u?"0":"",h.transform=(P.devicePixelRatio||1)<=1?"translate("+g+"px, "+c+"px)":"translate3d("+g+"px, "+c+"px, 0)",h))}return Object.assign({},M,(t={},t[b]=E?c+"px":"",t[C]=u?g+"px":"",t.transform="",t))}function Sn(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=n===void 0?!0:n,a=o.adaptive,i=a===void 0?!0:a,s=o.roundOffsets,l=s===void 0?!0:s,p={placement:G(t.placement),variation:be(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Tt(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Tt(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Yt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Sn,data:{}},Ne={passive:!0};function Bn(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,a=r===void 0?!0:r,i=n.resize,s=i===void 0?!0:i,l=U(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach(function(f){f.addEventListener("scroll",o.update,Ne)}),s&&l.addEventListener("resize",o.update,Ne),function(){a&&p.forEach(function(f){f.removeEventListener("scroll",o.update,Ne)}),s&&l.removeEventListener("resize",o.update,Ne)}}var Qt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Bn,data:{}},Mn={left:"right",right:"left",bottom:"top",top:"bottom"};function $e(e){return e.replace(/left|right|bottom|top/g,function(t){return Mn[t]})}var In={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return In[t]})}function rt(e){var t=U(e),o=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:o,scrollTop:n}}function at(e){return ye(oe(e)).left+rt(e).scrollLeft}function jn(e){var t=U(e),o=oe(e),n=t.visualViewport,r=o.clientWidth,a=o.clientHeight,i=0,s=0;return n&&(r=n.width,a=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=n.offsetLeft,s=n.offsetTop)),{width:r,height:a,x:i+at(e),y:s}}function _n(e){var t,o=oe(e),n=rt(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=ie(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=ie(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+at(e),l=-n.scrollTop;return Q(r||o).direction==="rtl"&&(s+=ie(o.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:s,y:l}}function it(e){var t=Q(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function eo(e){return["html","body","#document"].indexOf(Z(e))>=0?e.ownerDocument.body:K(e)&&it(e)?e:eo(ze(e))}function Pe(e,t){var o;t===void 0&&(t=[]);var n=eo(e),r=n===((o=e.ownerDocument)==null?void 0:o.body),a=U(n),i=r?[a].concat(a.visualViewport||[],it(n)?n:[]):n,s=t.concat(i);return r?s:s.concat(Pe(ze(i)))}function Je(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Dn(e){var t=ye(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Pt(e,t){return t===Vt?Je(jn(e)):me(t)?Dn(t):Je(_n(oe(e)))}function Nn(e){var t=Pe(ze(e)),o=["absolute","fixed"].indexOf(Q(e).position)>=0,n=o&&K(e)?Me(e):e;return me(n)?t.filter(function(r){return me(r)&&Jt(r,n)&&Z(r)!=="body"}):[]}function Ln(e,t,o){var n=t==="clippingParents"?Nn(e):[].concat(t),r=[].concat(n,[o]),a=r[0],i=r.reduce(function(s,l){var p=Pt(e,l);return s.top=ie(p.top,s.top),s.right=We(p.right,s.right),s.bottom=We(p.bottom,s.bottom),s.left=ie(p.left,s.left),s},Pt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function to(e){var t=e.reference,o=e.element,n=e.placement,r=n?G(n):null,a=n?be(n):null,i=t.x+t.width/2-o.width/2,s=t.y+t.height/2-o.height/2,l;switch(r){case H:l={x:i,y:t.y-o.height};break;case z:l={x:i,y:t.y+t.height};break;case q:l={x:t.x+t.width,y:s};break;case F:l={x:t.x-o.width,y:s};break;default:l={x:t.x,y:t.y}}var p=r?nt(r):null;if(p!=null){var f=p==="y"?"height":"width";switch(a){case ge:l[p]=l[p]-(t[f]/2-o[f]/2);break;case Re:l[p]=l[p]+(t[f]/2-o[f]/2);break}}return l}function ke(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=n===void 0?e.placement:n,a=o.boundary,i=a===void 0?sn:a,s=o.rootBoundary,l=s===void 0?Vt:s,p=o.elementContext,f=p===void 0?Ee:p,v=o.altBoundary,y=v===void 0?!1:v,g=o.padding,m=g===void 0?0:g,c=Zt(typeof m!="number"?m:Xt(m,Be)),O=f===Ee?ln:Ee,u=e.rects.popper,E=e.elements[y?O:f],C=Ln(me(E)?E:E.contextElement||oe(e.elements.popper),i,l),b=ye(e.elements.reference),P=to({reference:b,element:u,strategy:"absolute",placement:r}),x=Je(Object.assign({},u,P)),w=f===Ee?x:b,A={top:C.top-w.top+c.top,bottom:w.bottom-C.bottom+c.bottom,left:C.left-w.left+c.left,right:w.right-C.right+c.right},I=e.modifiersData.offset;if(f===Ee&&I){var j=I[r];Object.keys(A).forEach(function(M){var D=[q,z].indexOf(M)>=0?1:-1,h=[H,z].indexOf(M)>=0?"y":"x";A[M]+=j[h]*D})}return A}function $n(e,t){t===void 0&&(t={});var o=t,n=o.placement,r=o.boundary,a=o.rootBoundary,i=o.padding,s=o.flipVariations,l=o.allowedAutoPlacements,p=l===void 0?et:l,f=be(n),v=f?s?Ot:Ot.filter(function(m){return be(m)===f}):Be,y=v.filter(function(m){return p.indexOf(m)>=0});y.length===0&&(y=v);var g=y.reduce(function(m,c){return m[c]=ke(e,{placement:c,boundary:r,rootBoundary:a,padding:i})[G(c)],m},{});return Object.keys(g).sort(function(m,c){return g[m]-g[c]})}function Hn(e){if(G(e)===Qe)return[];var t=$e(e);return[Ct(e),t,Ct(t)]}function Fn(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,a=r===void 0?!0:r,i=o.altAxis,s=i===void 0?!0:i,l=o.fallbackPlacements,p=o.padding,f=o.boundary,v=o.rootBoundary,y=o.altBoundary,g=o.flipVariations,m=g===void 0?!0:g,c=o.allowedAutoPlacements,O=t.options.placement,u=G(O),E=u===O,C=l||(E||!m?[$e(O)]:Hn(O)),b=[O].concat(C).reduce(function(re,X){return re.concat(G(X)===Qe?$n(t,{placement:X,boundary:f,rootBoundary:v,padding:p,flipVariations:m,allowedAutoPlacements:c}):X)},[]),P=t.rects.reference,x=t.rects.popper,w=new Map,A=!0,I=b[0],j=0;j<b.length;j++){var M=b[j],D=G(M),h=be(M)===ge,T=[H,z].indexOf(D)>=0,R=T?"width":"height",k=ke(t,{placement:M,boundary:f,rootBoundary:v,altBoundary:y,padding:p}),S=T?h?q:F:h?z:H;P[R]>x[R]&&(S=$e(S));var V=$e(S),W=[];if(a&&W.push(k[D]<=0),s&&W.push(k[S]<=0,k[V]<=0),W.every(function(re){return re})){I=M,A=!1;break}w.set(M,W)}if(A)for(var ne=m?3:1,ue=function(re){var X=b.find(function(je){var Oe=w.get(je);if(Oe)return Oe.slice(0,re).every(function(fe){return fe})});if(X)return I=X,"break"},we=ne;we>0;we--){var Ie=ue(we);if(Ie==="break")break}t.placement!==I&&(t.modifiersData[n]._skip=!0,t.placement=I,t.reset=!0)}}var Wn={name:"flip",enabled:!0,phase:"main",fn:Fn,requiresIfExists:["offset"],data:{_skip:!1}};function xt(e,t,o){return o===void 0&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function At(e){return[H,q,z,F].some(function(t){return e[t]>=0})}function Kn(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=ke(t,{elementContext:"reference"}),s=ke(t,{altBoundary:!0}),l=xt(i,n),p=xt(s,r,a),f=At(l),v=At(p);t.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:p,isReferenceHidden:f,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":v})}var zn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Kn};function qn(e,t,o){var n=G(e),r=[F,H].indexOf(n)>=0?-1:1,a=typeof o=="function"?o(Object.assign({},t,{placement:e})):o,i=a[0],s=a[1];return i=i||0,s=(s||0)*r,[F,q].indexOf(n)>=0?{x:s,y:i}:{x:i,y:s}}function Vn(e){var t=e.state,o=e.options,n=e.name,r=o.offset,a=r===void 0?[0,0]:r,i=et.reduce(function(f,v){return f[v]=qn(v,t.rects,a),f},{}),s=i[t.placement],l=s.x,p=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=p),t.modifiersData[n]=i}var Un={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Vn};function Jn(e){var t=e.state,o=e.name;t.modifiersData[o]=to({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var oo={name:"popperOffsets",enabled:!0,phase:"read",fn:Jn,data:{}};function Gn(e){return e==="x"?"y":"x"}function Zn(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,a=r===void 0?!0:r,i=o.altAxis,s=i===void 0?!1:i,l=o.boundary,p=o.rootBoundary,f=o.altBoundary,v=o.padding,y=o.tether,g=y===void 0?!0:y,m=o.tetherOffset,c=m===void 0?0:m,O=ke(t,{boundary:l,rootBoundary:p,padding:v,altBoundary:f}),u=G(t.placement),E=be(t.placement),C=!E,b=nt(u),P=Gn(b),x=t.modifiersData.popperOffsets,w=t.rects.reference,A=t.rects.popper,I=typeof c=="function"?c(Object.assign({},t.rects,{placement:t.placement})):c,j=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(x){if(a){var h,T=b==="y"?H:F,R=b==="y"?z:q,k=b==="y"?"height":"width",S=x[b],V=S+O[T],W=S-O[R],ne=g?-A[k]/2:0,ue=E===ge?w[k]:A[k],we=E===ge?-A[k]:-w[k],Ie=t.elements.arrow,re=g&&Ie?ot(Ie):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Gt(),je=X[T],Oe=X[R],fe=Ce(0,w[k],re[k]),io=C?w[k]/2-ne-fe-je-j.mainAxis:ue-fe-je-j.mainAxis,so=C?-w[k]/2+ne+fe+Oe+j.mainAxis:we+fe+Oe+j.mainAxis,qe=t.elements.arrow&&Me(t.elements.arrow),lo=qe?b==="y"?qe.clientTop||0:qe.clientLeft||0:0,lt=(h=M==null?void 0:M[b])!=null?h:0,po=S+io-lt-lo,uo=S+so-lt,pt=Ce(g?We(V,po):V,S,g?ie(W,uo):W);x[b]=pt,D[b]=pt-S}if(s){var ut,fo=b==="x"?H:F,co=b==="x"?z:q,ae=x[P],_e=P==="y"?"height":"width",ft=ae+O[fo],ct=ae-O[co],Ve=[H,F].indexOf(u)!==-1,dt=(ut=M==null?void 0:M[P])!=null?ut:0,vt=Ve?ft:ae-w[_e]-A[_e]-dt+j.altAxis,gt=Ve?ae+w[_e]+A[_e]-dt-j.altAxis:ct,mt=g&&Ve?Tn(vt,ae,gt):Ce(g?vt:ft,ae,g?gt:ct);x[P]=mt,D[P]=mt-ae}t.modifiersData[n]=D}}var Xn={name:"preventOverflow",enabled:!0,phase:"main",fn:Zn,requiresIfExists:["offset"]};function Yn(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Qn(e){return e===U(e)||!K(e)?rt(e):Yn(e)}function er(e){var t=e.getBoundingClientRect(),o=he(t.width)/e.offsetWidth||1,n=he(t.height)/e.offsetHeight||1;return o!==1||n!==1}function tr(e,t,o){o===void 0&&(o=!1);var n=K(t),r=K(t)&&er(t),a=oe(t),i=ye(e,r),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!o)&&((Z(t)!=="body"||it(a))&&(s=Qn(t)),K(t)?(l=ye(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):a&&(l.x=at(a))),{x:i.left+s.scrollLeft-l.x,y:i.top+s.scrollTop-l.y,width:i.width,height:i.height}}function or(e){var t=new Map,o=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function r(a){o.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(s){if(!o.has(s)){var l=t.get(s);l&&r(l)}}),n.push(a)}return e.forEach(function(a){o.has(a.name)||r(a)}),n}function nr(e){var t=or(e);return yn.reduce(function(o,n){return o.concat(t.filter(function(r){return r.phase===n}))},[])}function rr(e){var t;return function(){return t||(t=new Promise(function(o){Promise.resolve().then(function(){t=void 0,o(e())})})),t}}function ar(e){var t=e.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(t).map(function(o){return t[o]})}var Rt={placement:"bottom",modifiers:[],strategy:"absolute"};function kt(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function st(e){e===void 0&&(e={});var t=e,o=t.defaultModifiers,n=o===void 0?[]:o,r=t.defaultOptions,a=r===void 0?Rt:r;return function(i,s,l){l===void 0&&(l=a);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},Rt,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},f=[],v=!1,y={state:p,setOptions:function(c){var O=typeof c=="function"?c(p.options):c;m(),p.options=Object.assign({},a,p.options,O),p.scrollParents={reference:me(i)?Pe(i):i.contextElement?Pe(i.contextElement):[],popper:Pe(s)};var u=nr(ar([].concat(n,p.options.modifiers)));return p.orderedModifiers=u.filter(function(E){return E.enabled}),g(),y.update()},forceUpdate:function(){if(!v){var c=p.elements,O=c.reference,u=c.popper;if(kt(O,u)){p.rects={reference:tr(O,Me(u),p.options.strategy==="fixed"),popper:ot(u)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(A){return p.modifiersData[A.name]=Object.assign({},A.data)});for(var E=0;E<p.orderedModifiers.length;E++){if(p.reset===!0){p.reset=!1,E=-1;continue}var C=p.orderedModifiers[E],b=C.fn,P=C.options,x=P===void 0?{}:P,w=C.name;typeof b=="function"&&(p=b({state:p,options:x,name:w,instance:y})||p)}}}},update:rr(function(){return new Promise(function(c){y.forceUpdate(),c(p)})}),destroy:function(){m(),v=!0}};if(!kt(i,s))return y;y.setOptions(l).then(function(c){!v&&l.onFirstUpdate&&l.onFirstUpdate(c)});function g(){p.orderedModifiers.forEach(function(c){var O=c.name,u=c.options,E=u===void 0?{}:u,C=c.effect;if(typeof C=="function"){var b=C({state:p,name:O,instance:y,options:E}),P=function(){};f.push(b||P)}})}function m(){f.forEach(function(c){return c()}),f=[]}return y}}st();var ir=[Qt,oo,Yt,Ut];st({defaultModifiers:ir});var sr=[Qt,oo,Yt,Ut,Un,Wn,Xn,An,zn],lr=st({defaultModifiers:sr});const pr=["fixed","absolute"],ur=ee({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:B(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:et,default:"bottom"},popperOptions:{type:B(Object),default:()=>({})},strategy:{type:String,values:pr,default:"absolute"}}),no=ee({...ur,id:String,style:{type:B([String,Array,Object])},className:{type:B([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:B([String,Array,Object])},popperStyle:{type:B([String,Array,Object])},referenceEl:{type:B(Object)},triggerTargetEl:{type:B(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},ariaLabel:{type:String,default:void 0},virtualTriggering:Boolean,zIndex:Number}),fr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},St=(e,t)=>{const{placement:o,strategy:n,popperOptions:r}=e,a={placement:o,strategy:n,...r,modifiers:dr(e)};return vr(a,t),gr(a,r==null?void 0:r.modifiers),a},cr=e=>{if(!!Te)return Dt(e)};function dr(e){const{offset:t,gpuAcceleration:o,fallbackPlacements:n}=e;return[{name:"offset",options:{offset:[0,t!=null?t:12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:n}},{name:"computeStyles",options:{gpuAcceleration:o}}]}function vr(e,{arrowEl:t,arrowOffset:o}){e.modifiers.push({name:"arrow",options:{element:t,padding:o!=null?o:5}})}function gr(e,t){t&&(e.modifiers=[...e.modifiers,...t!=null?t:[]])}const mr=$({name:"ElPopperContent"}),hr=$({...mr,props:no,emits:fr,setup(e,{expose:t,emit:o}){const n=e,{popperInstanceRef:r,contentRef:a,triggerRef:i,role:s}=le(Xe,void 0),l=le(ht,void 0),{nextZIndex:p}=Mo(),f=Se("popper"),v=N(),y=N("first"),g=N(),m=N();xe(Lt,{arrowRef:g,arrowOffset:m}),l&&(l.addInputId||l.removeInputId)&&xe(ht,{...l,addInputId:Ue,removeInputId:Ue});const c=N(n.zIndex||p()),O=N(!1);let u;const E=_(()=>cr(n.referenceEl)||d(i)),C=_(()=>[{zIndex:d(c)},n.popperStyle]),b=_(()=>[f.b(),f.is("pure",n.pure),f.is(n.effect),n.popperClass]),P=_(()=>s&&s.value==="dialog"?"false":void 0),x=({referenceEl:T,popperContentEl:R,arrowEl:k})=>{const S=St(n,{arrowEl:k,arrowOffset:d(m)});return lr(T,R,S)},w=(T=!0)=>{var R;(R=d(r))==null||R.update(),T&&(c.value=n.zIndex||p())},A=()=>{var T,R;const k={name:"eventListeners",enabled:n.visible};(R=(T=d(r))==null?void 0:T.setOptions)==null||R.call(T,S=>({...S,modifiers:[...S.modifiers||[],k]})),w(!1),n.visible&&n.focusOnShow?O.value=!0:n.visible===!1&&(O.value=!1)},I=()=>{o("focus")},j=T=>{var R;((R=T.detail)==null?void 0:R.focusReason)!=="pointer"&&(y.value="first",o("blur"))},M=T=>{n.visible&&!O.value&&(T.target&&(y.value=T.target),O.value=!0)},D=T=>{n.trapping||(T.detail.focusReason==="pointer"&&T.preventDefault(),O.value=!1)},h=()=>{O.value=!1,o("close")};return Ge(()=>{let T;L(E,R=>{var k;T==null||T();const S=d(r);if((k=S==null?void 0:S.destroy)==null||k.call(S),R){const V=d(v);a.value=V,r.value=x({referenceEl:R,popperContentEl:V,arrowEl:d(g)}),T=L(()=>R.getBoundingClientRect(),()=>w(),{immediate:!0})}else r.value=void 0},{immediate:!0}),L(()=>n.triggerTargetEl,(R,k)=>{u==null||u(),u=void 0;const S=d(R||v.value),V=d(k||v.value);Fe(S)&&(u=L([s,()=>n.ariaLabel,P,()=>n.id],W=>{["role","aria-label","aria-modal","id"].forEach((ne,ue)=>{Nt(W[ue])?S.removeAttribute(ne):S.setAttribute(ne,W[ue])})},{immediate:!0})),V!==S&&Fe(V)&&["role","aria-label","aria-modal","id"].forEach(W=>{V.removeAttribute(W)})},{immediate:!0}),L(()=>n.visible,A,{immediate:!0}),L(()=>St(n,{arrowEl:d(g),arrowOffset:d(m)}),R=>{var k;return(k=r.value)==null?void 0:k.setOptions(R)})}),Ke(()=>{u==null||u(),u=void 0}),t({popperContentRef:v,popperInstanceRef:r,updatePopper:w,contentStyle:C}),(T,R)=>(J(),He("div",{ref_key:"popperContentRef",ref:v,style:To(d(C)),class:Ze(d(b)),tabindex:"-1",onMouseenter:R[0]||(R[0]=k=>T.$emit("mouseenter",k)),onMouseleave:R[1]||(R[1]=k=>T.$emit("mouseleave",k))},[Ae(d(jo),{trapped:O.value,"trap-on-focus-in":!0,"focus-trap-el":v.value,"focus-start-el":y.value,onFocusAfterTrapped:I,onFocusAfterReleased:j,onFocusin:M,onFocusoutPrevented:D,onReleaseRequested:h},{default:te(()=>[se(T.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el"])],38))}});var yr=pe(hr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);const br=jt(Xo),wr=Se("tooltip"),ro=ee({...zo,...no,appendTo:{type:B([String,Object]),default:Ht},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,ariaLabel:String,visible:{type:B(Boolean),default:null},transition:{type:String,default:`${wr.namespace.value}-fade-in-linear`},teleported:{type:Boolean,default:!0},disabled:{type:Boolean}}),ao=ee({...qt,disabled:Boolean,trigger:{type:B([String,Array]),default:"hover"},triggerKeys:{type:B(Array),default:()=>[yt.enter,yt.space]}}),{useModelToggleProps:Or,useModelToggleEmits:Er,useModelToggle:Tr}=$o("visible"),Cr=ee({...Wt,...Or,...ro,...ao,...Kt,showArrow:{type:Boolean,default:!0}}),Pr=[...Er,"before-show","before-hide","show","hide","open","close"],xr=(e,t)=>Co(e)?e.includes(t):e===t,ce=(e,t,o)=>n=>{xr(d(e),t)&&o(n)},Ar=$({name:"ElTooltipTrigger"}),Rr=$({...Ar,props:ao,setup(e,{expose:t}){const o=e,n=Se("tooltip"),{controlled:r,id:a,open:i,onOpen:s,onClose:l,onToggle:p}=le(Ye,void 0),f=N(null),v=()=>{if(d(r)||o.disabled)return!0},y=Le(o,"trigger"),g=Y(v,ce(y,"hover",s)),m=Y(v,ce(y,"hover",l)),c=Y(v,ce(y,"click",b=>{b.button===0&&p(b)})),O=Y(v,ce(y,"focus",s)),u=Y(v,ce(y,"focus",l)),E=Y(v,ce(y,"contextmenu",b=>{b.preventDefault(),p(b)})),C=Y(v,b=>{const{code:P}=b;o.triggerKeys.includes(P)&&(b.preventDefault(),p(b))});return t({triggerRef:f}),(b,P)=>(J(),ve(d(an),{id:d(a),"virtual-ref":b.virtualRef,open:d(i),"virtual-triggering":b.virtualTriggering,class:Ze(d(n).e("trigger")),onBlur:d(u),onClick:d(c),onContextmenu:d(E),onFocus:d(O),onMouseenter:d(g),onMouseleave:d(m),onKeydown:d(C)},{default:te(()=>[se(b.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var kr=pe(Rr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);const Sr=$({name:"ElTooltipContent",inheritAttrs:!1}),Br=$({...Sr,props:ro,setup(e,{expose:t}){const o=e,n=N(null),r=N(!1),{controlled:a,id:i,open:s,trigger:l,onClose:p,onOpen:f,onShow:v,onHide:y,onBeforeShow:g,onBeforeHide:m}=le(Ye,void 0),c=_(()=>o.persistent);Ke(()=>{r.value=!0});const O=_(()=>d(c)?!0:d(s)),u=_(()=>o.disabled?!1:d(s)),E=_(()=>{var h;return(h=o.style)!=null?h:{}}),C=_(()=>!d(s)),b=()=>{y()},P=()=>{if(d(a))return!0},x=Y(P,()=>{o.enterable&&d(l)==="hover"&&f()}),w=Y(P,()=>{d(l)==="hover"&&p()}),A=()=>{var h,T;(T=(h=n.value)==null?void 0:h.updatePopper)==null||T.call(h),g==null||g()},I=()=>{m==null||m()},j=()=>{v(),D=Io(_(()=>{var h;return(h=n.value)==null?void 0:h.popperContentRef}),()=>{if(d(a))return;d(l)!=="hover"&&p()})},M=()=>{o.virtualTriggering||p()};let D;return L(()=>d(s),h=>{h||D==null||D()},{flush:"post"}),L(()=>o.content,()=>{var h,T;(T=(h=n.value)==null?void 0:h.updatePopper)==null||T.call(h)}),t({contentRef:n}),(h,T)=>(J(),ve(Ao,{disabled:!h.teleported,to:h.appendTo},[Ae(xo,{name:h.transition,onAfterLeave:b,onBeforeEnter:A,onAfterEnter:j,onBeforeLeave:I},{default:te(()=>[d(O)?Mt((J(),ve(d(yr),It({key:0,id:d(i),ref_key:"contentRef",ref:n},h.$attrs,{"aria-label":h.ariaLabel,"aria-hidden":d(C),"boundaries-padding":h.boundariesPadding,"fallback-placements":h.fallbackPlacements,"gpu-acceleration":h.gpuAcceleration,offset:h.offset,placement:h.placement,"popper-options":h.popperOptions,strategy:h.strategy,effect:h.effect,enterable:h.enterable,pure:h.pure,"popper-class":h.popperClass,"popper-style":[h.popperStyle,d(E)],"reference-el":h.referenceEl,"trigger-target-el":h.triggerTargetEl,visible:d(u),"z-index":h.zIndex,onMouseenter:d(x),onMouseleave:d(w),onBlur:M,onClose:d(p)}),{default:te(()=>[de(" Workaround bug #6378 "),r.value?de("v-if",!0):se(h.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Po,d(u)]]):de("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var Mr=pe(Br,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);const Ir=["innerHTML"],jr={key:1},_r=$({name:"ElTooltip"}),Dr=$({..._r,props:Cr,emits:Pr,setup(e,{expose:t,emit:o}){const n=e;Ko();const r=_o(),a=N(),i=N(),s=()=>{var u;const E=d(a);E&&((u=E.popperInstanceRef)==null||u.update())},l=N(!1),p=N(),{show:f,hide:v,hasUpdateHandler:y}=Tr({indicator:l,toggleReason:p}),{onOpen:g,onClose:m}=qo({showAfter:Le(n,"showAfter"),hideAfter:Le(n,"hideAfter"),open:f,close:v}),c=_(()=>_t(n.visible)&&!y.value);xe(Ye,{controlled:c,id:r,open:Ro(l),trigger:Le(n,"trigger"),onOpen:u=>{g(u)},onClose:u=>{m(u)},onToggle:u=>{d(l)?m(u):g(u)},onShow:()=>{o("show",p.value)},onHide:()=>{o("hide",p.value)},onBeforeShow:()=>{o("before-show",p.value)},onBeforeHide:()=>{o("before-hide",p.value)},updatePopper:s}),L(()=>n.disabled,u=>{u&&l.value&&(l.value=!1)});const O=()=>{var u,E;const C=(E=(u=i.value)==null?void 0:u.contentRef)==null?void 0:E.popperContentRef;return C&&C.contains(document.activeElement)};return ko(()=>l.value&&v()),t({popperRef:a,contentRef:i,isFocusInsideContent:O,updatePopper:s,onOpen:g,onClose:m,hide:v}),(u,E)=>(J(),ve(d(br),{ref_key:"popperRef",ref:a,role:u.role},{default:te(()=>[Ae(kr,{disabled:u.disabled,trigger:u.trigger,"trigger-keys":u.triggerKeys,"virtual-ref":u.virtualRef,"virtual-triggering":u.virtualTriggering},{default:te(()=>[u.$slots.default?se(u.$slots,"default",{key:0}):de("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Ae(Mr,{ref_key:"contentRef",ref:i,"aria-label":u.ariaLabel,"boundaries-padding":u.boundariesPadding,content:u.content,disabled:u.disabled,effect:u.effect,enterable:u.enterable,"fallback-placements":u.fallbackPlacements,"hide-after":u.hideAfter,"gpu-acceleration":u.gpuAcceleration,offset:u.offset,persistent:u.persistent,"popper-class":u.popperClass,"popper-style":u.popperStyle,placement:u.placement,"popper-options":u.popperOptions,pure:u.pure,"raw-content":u.rawContent,"reference-el":u.referenceEl,"trigger-target-el":u.triggerTargetEl,"show-after":u.showAfter,strategy:u.strategy,teleported:u.teleported,transition:u.transition,"virtual-triggering":u.virtualTriggering,"z-index":u.zIndex,"append-to":u.appendTo},{default:te(()=>[se(u.$slots,"content",{},()=>[u.rawContent?(J(),He("span",{key:0,innerHTML:u.content},null,8,Ir)):(J(),He("span",jr,So(u.content),1))]),u.showArrow?(J(),ve(d(en),{key:0,"arrow-offset":u.arrowOffset},null,8,["arrow-offset"])):de("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var Nr=pe(Dr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);const zr=jt(Nr);export{zr as E,Ye as T,et as a,ao as b,Do as g,ro as u,lr as y};
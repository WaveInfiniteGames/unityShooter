import{g as T,h as E,i as U,j as D}from"../modules/unplugin-icons-DGPWWfcm.js";import{d as H,t as b,B as I,z as r,E as L,o as u,b as V,e as o,h as y,I as l,l as s,k as _,c as C,x as z,F as j}from"../modules/vue-ZF9sfTC1.js";import{u as M,a as P,s as t,b as R,f as q}from"../index-DWDUnxxs.js";import{b as A}from"../monaco/bundled-types-BL4lmSb-.js";import{_ as G,C as J}from"./ClicksSlider-Cft2BR5q.js";import{_ as p}from"./IconButton.vue_vue_type_script_setup_true_lang-BpDiRP2o.js";import"../modules/shiki-DzDHD5CW.js";import"../modules/file-saver-igGfcqei.js";const K={class:"h-full pt-2 flex flex-col"},O={class:"flex-none border-t border-main",px3:"",py2:""},Q={class:"flex-none border-t border-main"},W={class:"flex gap-1 items-center px-6 py-3"},X=o("div",{class:"flex-auto"},null,-1),Y={class:"p2 text-center"},ie=H({__name:"notes",setup(Z){M({title:`Notes - ${A}`});const{slides:w,total:d}=P(),{isFullscreen:m,toggle:S}=q,f=b(),n=I("slidev-notes-font-size",18),a=r(()=>{var e;return((e=t.lastUpdate)==null?void 0:e.type)==="viewer"?t.viewerPage:t.page}),v=r(()=>w.value.find(e=>e.no===a.value));L(a,()=>{var e;(e=f.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function $(){n.value=n.value+1}function B(){n.value=n.value-1}const x=r(()=>{var c,i;const e=((c=t.lastUpdate)==null?void 0:c.type)==="viewer"?t.viewerClicks:t.clicks,h=((i=t.lastUpdate)==null?void 0:i.type)==="viewer"?t.viewerClicksTotal:t.clicksTotal;return R(b(e),void 0,h)});return(e,h)=>{var k,g;const c=U,i=D,F=T,N=E;return u(),V(j,null,[o("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:y({width:`${(a.value-1)/(l(d)-1)*100+1}%`})},null,4),o("div",K,[o("div",{ref_key:"scroller",ref:f,class:"px-5 flex-auto h-full overflow-auto",style:y({fontSize:`${l(n)}px`})},[s(G,{note:(k=v.value)==null?void 0:k.meta.slide.note,"note-html":(g=v.value)==null?void 0:g.meta.slide.noteHTML,placeholder:`No notes for Slide ${a.value}.`,"clicks-context":x.value,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),o("div",O,[s(J,{"clicks-context":x.value,readonly:""},null,8,["clicks-context"])]),o("div",Q,[o("div",W,[s(p,{title:l(m)?"Close fullscreen":"Enter fullscreen",onClick:l(S)},{default:_(()=>[l(m)?(u(),C(c,{key:0})):(u(),C(i,{key:1}))]),_:1},8,["title","onClick"]),s(p,{title:"Increase font size",onClick:$},{default:_(()=>[s(F)]),_:1}),s(p,{title:"Decrease font size",onClick:B},{default:_(()=>[s(N)]),_:1}),X,o("div",Y,z(a.value)+" / "+z(l(d)),1)])])])],64)}}});export{ie as default};

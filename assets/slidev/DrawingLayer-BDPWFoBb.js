import{d as l,t as u,S as m,E as i,K as c,o as p,b as f,i as d,I as t}from"../modules/vue-ZF9sfTC1.js";import{u as _}from"./context-BL1jVAQH.js";import{c as v}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-CBWt6bNu.js";import"../index-DWDUnxxs.js";import"../monaco/bundled-types-BL4lmSb-.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-DzDHD5CW.js";const S=l({__name:"DrawingLayer",setup(g){const{drauu:e,drawingEnabled:n,loadCanvas:s}=v(),r=_().$scale,o=u();return m(()=>{e.mount(o.value,o.value.parentElement),i(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),s()}),c(()=>{e.unmount()}),(a,w)=>(p(),f("svg",{ref_key:"svg",ref:o,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!t(n),"touch-none":t(n)}])},null,2))}});export{S as default};
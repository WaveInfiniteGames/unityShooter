import{p as h,A as b,B as g}from"../modules/unplugin-icons-DGPWWfcm.js";import{d as x,z as $,o as p,b as k,e as t,f as y,h as C,c as w,k as S,I as r,aa as B,l as c,q as P,s as z}from"../modules/vue-ZF9sfTC1.js";import{u as _,f as E}from"./context-BL1jVAQH.js";import"../index-DWDUnxxs.js";import"../monaco/bundled-types-BL4lmSb-.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-DzDHD5CW.js";function d(e){return e.startsWith("/")?"/unityShooter/"+e.slice(1):e}function I(e,o=!1){const s=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),n={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?o?`linear-gradient(#0005, #0008), url(${d(e)})`:`url("${d(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return n.background||delete n.background,n}const N={class:"my-auto w-full"},O=x({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){_();const o=e,s=$(()=>I(o.background,!0));return(n,i)=>(p(),k("div",{class:"slidev-layout cover text-center",style:C(s.value)},[t("div",N,[y(n.$slots,"default")])],4))}}),V=t("h1",null,"Welcome to Slidev",-1),A=t("p",null,"Presentation slides for developers",-1),G={class:"pt-12"},H={class:"abs-br m-6 flex gap-2"},R={href:"https://github.com/slidevjs/slidev",target:"_blank",alt:"GitHub",title:"Open in GitHub",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},T={__name:"slides.md__slidev_1",setup(e){const{$slidev:o,$nav:s,$clicksContext:n,$clicks:i,$page:W,$renderContext:j,$frontmatter:u}=_();return n.setup(),(q,a)=>{const m=h,v=b,f=g;return p(),w(O,P(z(r(E)(r(u),0))),{default:S(()=>[V,A,t("div",G,[t("span",{onClick:a[0]||(a[0]=(...l)=>r(o).nav.next&&r(o).nav.next(...l)),class:"px-2 py-1 rounded cursor-pointer",hover:"bg-white bg-opacity-10"},[B(" Press Space for next page "),c(m,{class:"inline"})])]),t("div",H,[t("button",{onClick:a[1]||(a[1]=l=>r(o).nav.openInEditor()),title:"Open in Editor",class:"text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white"},[c(v)]),t("a",R,[c(f)])])]),_:1},16)}}},Q=T;export{Q as default};

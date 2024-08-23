import{_}from"./slidev/Arrow.vue_vue_type_script_setup_true_lang-DEtZlff1.js";import{_ as B}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DfjSs_dL.js";import{d as v,z as f,o as y,b as m,e as s,f as w,i as C,h as b,r as F,aB as E,c as T,k as a,l,m as d,aa as t,ae as x,q as S,s as j,I as g,p as $,a as O}from"./modules/vue-ZF9sfTC1.js";import{u as R,f as I}from"./slidev/context-BL1jVAQH.js";import{_ as z}from"./index-DWDUnxxs.js";import"./modules/unplugin-icons-DGPWWfcm.js";import"./monaco/bundled-types-BL4lmSb-.js";import"./modules/file-saver-igGfcqei.js";import"./modules/shiki-DzDHD5CW.js";function c(h){return h.startsWith("/")?"/unityShooter/"+h.slice(1):h}function P(h,n=!1,o="cover"){const k=h&&(h[0]==="#"||h.startsWith("rgb")),p={background:k?h:void 0,color:h&&!k?"white":void 0,backgroundImage:k?void 0:h?n?`linear-gradient(#0005, #0008), url(${c(h)})`:`url("${c(h)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:o};return p.background||delete p.background,p}const W={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},N=v({__name:"image-right",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(h){const n=h,o=f(()=>P(n.image,!1,n.backgroundSize));return(k,p)=>(y(),m("div",W,[s("div",{class:C(["slidev-layout default",n.class])},[w(k.$slots,"default")],2),s("div",{class:"w-full h-full",style:b(o.value)},null,4)]))}}),i=h=>($("data-v-ffe5aff1"),h=h(),O(),h),U=i(()=>s("h1",null,"Code",-1)),V=i(()=>s("p",null,[t("Use code snippets and get the highlighting directly, and even types hover!"),s("span",null,"^1")],-1)),G={class:"shiki shiki-themes vitesse-dark vitesse-light twoslash lsp slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},M={class:"language-ts"},q=i(()=>s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// TwoSlash enables TypeScript hover information")],-1)),L=i(()=>s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// and errors in markdown code blocks")],-1)),H=i(()=>s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// More at https://shiki.style/packages/twoslash")],-1)),J=i(()=>s("span",{class:"line"},null,-1)),K={class:"line"},Q=i(()=>s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import",-1)),X=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {",-1)),Y=i(()=>s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),Z={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},ss=i(()=>s("span",null,"computed",-1)),is=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    <"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"getter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedGetter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">, "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"DebuggerOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"): "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">;")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    <"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"options"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"WritableComputedOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">, "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"DebuggerOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"): "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"WritableComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">;")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])])])],-1)),ts=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",",-1)),as=i(()=>s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),hs={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},ls=i(()=>s("span",null,"ref",-1)),es=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"):"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"UnwrapRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,[t(`Takes an inner value and returns a reactive and mutable ref object, which
has a single property `),s("code",null,".value"),t(" that points to the inner value.")])]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"value"),t("  - The object to wrap in the ref.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#ref"},"https://vuejs.org/api/reactivity-core.html#ref")])])])],-1)),ks=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }",-1)),ns=i(()=>s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from",-1)),ps=i(()=>s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}}," '",-1)),os=i(()=>s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"vue",-1)),rs=i(()=>s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},"'",-1)),ds=i(()=>s("span",{class:"line"},null,-1)),gs={class:"line"},cs=i(()=>s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const ",-1)),ys={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},us=i(()=>s("span",null,"count",-1)),As=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),Ds=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),_s=i(()=>s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ",-1)),Bs={style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},vs=i(()=>s("span",null,"ref",-1)),fs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,[t(`Takes an inner value and returns a reactive and mutable ref object, which
has a single property `),s("code",null,".value"),t(" that points to the inner value.")])]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"value"),t("  - The object to wrap in the ref.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#ref"},"https://vuejs.org/api/reactivity-core.html#ref")])])])],-1)),ms=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(",-1)),ws=i(()=>s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"0",-1)),Cs=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")",-1)),bs={class:"line"},Fs=i(()=>s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const ",-1)),Es={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},Ts=i(()=>s("span",null,"doubled",-1)),xs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doubled"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),Ss=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),js=i(()=>s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ",-1)),$s={style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},Os=i(()=>s("span",null,"computed",-1)),Rs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"getter"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"ComputedGetter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">,"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?:"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," DebuggerOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,`Takes a getter function and returns a readonly reactive ref object for the
returned value from the getter. It can also take an object with get and set
functions to create a writable ref object.`)]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@example"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Creating a readonly computed ref:")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 2")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"++"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // error")])])])]),t(`
`),s("code",null,[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Creating a writable computed ref:")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  get"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  set"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"val"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," -"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"})")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 0")])])])])])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"getter"),t("  - Function that produces the next value.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"debugOptions"),t("  - For debugging. See "),s("a",{href:"https://vuejs.org/guide/extras/reactivity-in-depth.html#computed-debugging"},"https://vuejs.org/guide/extras/reactivity-in-depth.html#computed-debugging"),t(".")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#computed"},"https://vuejs.org/api/reactivity-core.html#computed")])])])],-1)),Is=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(()",-1)),zs=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>",-1)),Ps=i(()=>s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),Ws={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},Ns=i(()=>s("span",null,"count",-1)),Us=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),Vs=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},".",-1)),Gs={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},Ms=i(()=>s("span",null,"value",-1)),qs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number")])],-1)),Ls=i(()=>s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," * ",-1)),Hs=i(()=>s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"2",-1)),Js=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")",-1)),Ks=i(()=>s("span",{class:"line"},null,-1)),Qs={class:"line"},Xs={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},Ys=i(()=>s("span",null,"doubled",-1)),Zs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doubled"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),si=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},".",-1)),ii=i(()=>s("span",{class:"twoslash-error"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value")],-1)),ti=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),ai=i(()=>s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 2",-1)),hi=i(()=>s("div",{class:"twoslash-meta-line twoslash-error-line vp-copy-ignore"},"Cannot assign to 'value' because it is a read-only property.",-1)),li=i(()=>s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Inside ./snippets/external.ts")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"export"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," emptyArray"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"length"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  return"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," Array"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"from"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">({ "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"length"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," })")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)),ei={__name:"slides.md__slidev_5",setup(h){const{$slidev:n,$nav:o,$clicksContext:k,$clicks:p,$page:ki,$renderContext:ni,$frontmatter:u}=R();return k.setup(),(pi,oi)=>{const e=F("v-menu"),r=B,A=_,D=E("click");return y(),T(N,S(j(g(I)(g(u),4))),{default:a(()=>[U,V,l(r,d({},{ranges:["all","5","7","7-8","10","all"]}),{default:a(()=>[s("pre",G,[s("code",M,[q,t(`
`),L,t(`
`),H,t(`
`),J,t(`
`),s("span",K,[Q,X,Y,s("span",Z,[l(e,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[is]),default:a(()=>[ss]),_:1})]),ts,as,s("span",hs,[l(e,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[es]),default:a(()=>[ls]),_:1})]),ks,ns,ps,os,rs]),t(`
`),ds,t(`
`),s("span",gs,[cs,s("span",ys,[l(e,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[As]),default:a(()=>[us]),_:1})]),Ds,_s,s("span",Bs,[l(e,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[fs]),default:a(()=>[vs]),_:1})]),ms,ws,Cs]),t(`
`),s("span",bs,[Fs,s("span",Es,[l(e,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[xs]),default:a(()=>[Ts]),_:1})]),Ss,js,s("span",$s,[l(e,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[Rs]),default:a(()=>[Os]),_:1})]),Is,zs,Ps,s("span",Ws,[l(e,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[Us]),default:a(()=>[Ns]),_:1})]),Vs,s("span",Gs,[l(e,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[qs]),default:a(()=>[Ms]),_:1})]),Ls,Hs,Js]),t(`
`),Ks,t(`
`),s("span",Qs,[s("span",Xs,[l(e,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:a(({})=>[Zs]),default:a(()=>[Ys]),_:1})]),si,ii,ti,ai]),hi])])]),_:1},16),x(l(A,{x1:"350",y1:"310",x2:"195",y2:"334",color:"#953",width:"2",arrowSize:"1"},null,512),[[D,[4,5]]]),l(r,d({},{ranges:[]}),{default:a(()=>[li]),_:1},16),t(" [^1]: [Learn More](https://sli.dev/guide/line-highlighting) ")]),_:1},16)}}},Bi=z(ei,[["__scopeId","data-v-ffe5aff1"]]);export{Bi as default};
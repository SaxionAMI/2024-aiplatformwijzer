import{u as $,b as h}from"./QCard.eb99e114.js";import{y as l,f as e,h as u,g as f,ax as x,ay as z,z as C}from"./index.ab4869ca.js";const S={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},r={xs:2,sm:4,md:8,lg:16,xl:24};var B=l({name:"QSeparator",props:{...$,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(a){const i=f(),n=h(a,i.proxy.$q),t=e(()=>a.vertical===!0?"vertical":"horizontal"),o=e(()=>` q-separator--${t.value}`),v=e(()=>a.inset!==!1?`${o.value}-${S[a.inset]}`:""),m=e(()=>`q-separator${o.value}${v.value}`+(a.color!==void 0?` bg-${a.color}`:"")+(n.value===!0?" q-separator--dark":"")),d=e(()=>{const s={};if(a.size!==void 0&&(s[a.vertical===!0?"width":"height"]=a.size),a.spaced!==!1){const g=a.spaced===!0?`${r.md}px`:a.spaced in r?`${r[a.spaced]}px`:a.spaced,c=a.vertical===!0?["Left","Right"]:["Top","Bottom"];s[`margin${c[0]}`]=s[`margin${c[1]}`]=g}return s});return()=>u("hr",{class:m.value,style:d.value,"aria-orientation":t.value})}}),Q=l({name:"QCardActions",props:{...x,vertical:Boolean},setup(a,{slots:i}){const n=z(a),t=e(()=>`q-card__actions ${n.value} q-card__actions--${a.vertical===!0?"vert column":"horiz row"}`);return()=>u("div",{class:t.value},C(i.default))}});export{B as Q,Q as a};

import{_ as M,a as C,b as w,c as $,d as q,e as H,f as T,g as Q,h as V,i as z,j as I}from"./wandb_logo.127f2d59.js";import{a as L,r as O,f as c,_ as B,l as t,m as a,t as o,k as f,q as d,a7 as D,p as N,ab as n,v as h,F as b,ac as v,x as u,ad as S}from"./index.bf2a78bc.js";import{Q as U}from"./format.779bd62b.js";import{Q as j}from"./QKnob.f975a5b7.js";import{u as F}from"./answerStore.84556e41.js";import{u as A}from"./vue-i18n.97304544.js";const E=L({name:"ToolQuestionItem",props:{tool:{type:Object},rank:{type:Number},size:{type:String},question:{type:Object},noHover:{type:Boolean,default:!1}},emits:["openDialog"],setup(e,{emit:s}){const{t:p}=A(),m=F(),g=O(!1),_=i=>new URL({"../assets/small/azureml_logo.png":M,"../assets/small/clearml_logo.png":C,"../assets/small/dagshub_logo.png":w,"../assets/small/databricks_logo.png":$,"../assets/small/datarobot_logo.png":q,"../assets/small/h2o_logo.png":H,"../assets/small/kubeflow_logo.png":T,"../assets/small/mlflow_logo.png":Q,"../assets/small/sagemaker_logo.png":V,"../assets/small/vertex_logo.png":z,"../assets/small/wandb_logo.png":I}[`../assets/small/${i}`],self.location).href,l=()=>{s("openDialog",e.tool)},r=()=>{window.open(e.tool.link,"_blank").focus()},k=c(()=>e.question?e.tool.matches.find(i=>i.id===e.question.id).matches:null),y=c(()=>e.question?e.tool.clashes.find(i=>i.id===e.question.id).matches:null);return{props:e,goTo:r,t:p,emit:s,currentMatches:k,currentClashes:y,answerStore:m,getImgUrl:_,openDialog:l,isHovered:g}}}),K={class:"cursor-pointer"},R=["src"],G={class:"text-h5 text-weight-bolder"},J={key:0},P=["innerHTML"],W={key:1},X=["innerHTML"],Y={key:2};function Z(e,s,p,m,g,_){return t(),a("div",null,[o("div",{class:S(["q-pa-md text-center circle",{enlarged:e.isHovered&!e.props.noHover}]),onMouseover:s[1]||(s[1]=l=>e.isHovered=!0),onMouseleave:s[2]||(s[2]=l=>e.isHovered=!1)},[o("div",K,[f(j,{onClick:e.openDialog,"show-value":"",modelValue:e.props.tool.percentage,"onUpdate:modelValue":s[0]||(s[0]=l=>e.props.tool.percentage=l),color:"positive",size:e.props.size,readonly:"","track-color":"negative"},{default:d(()=>[f(D,{square:""},{default:d(()=>[o("img",{src:e.getImgUrl(e.props.tool.img_link)},null,8,R)]),_:1}),e.props.question?(t(),N(U,{key:0,style:{height:"fit-content !important"},class:"card q-pa-lg"},{default:d(()=>[o("div",G,n(e.props.tool.title),1),e.currentClashes?(t(),a("div",J,[h(n(e.$t("tool.clashes_found"))+" ",1),o("ul",null,[(t(!0),a(b,null,v(e.currentClashes,(l,r)=>(t(),a("li",{key:r},[o("div",{innerHTML:l.explanation},null,8,P)]))),128))])])):u("",!0),e.currentMatches?(t(),a("div",W,[h(n(e.$t("tool.matches_found"))+" ",1),o("ul",null,[(t(!0),a(b,null,v(e.currentMatches,(l,r)=>(t(),a("li",{key:r},[o("span",{innerHTML:l.explanation},null,8,X)]))),128))])])):u("",!0),!e.currentMatches&&!e.currentClashes?(t(),a("div",Y,n(e.$t("tool.select_info")),1)):u("",!0),o("b",null,n(e.$t("tool.matches_found")),1),o("div",null," Clashes: "+n(e.props.tool.numberOfClaches?e.props.tool.numberOfClaches:0),1),o("div",null," Matches: "+n(e.props.tool.numberOfMatches?e.props.tool.numberOfMatches:0),1),o("div",null,"Score: "+n(e.props.tool.percentage.toFixed(0))+"%",1)]),_:1})):u("",!0)]),_:1},8,["onClick","modelValue","size"])])],34)])}var ae=B(E,[["render",Z]]);export{ae as T};

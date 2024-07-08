import{Q as X,a as Y,b as Z}from"./QHeader.5be086d0.js";import{Q as ee,a as se}from"./QuestionToolIcon.081efecf.js";import{j as W,n as oe,p as U,r as y,D as te,k as b,q as C,s as ne,G as le,l as E,v as ae,x as re,m as ie,a as G,_ as D,o as c,M as Q,f as g,w as v,Q as M,ak as ue,e as q,i as A,h as B,L as T,O as S,g as p,al as ce,c as J,N as F,U as j,u as de,am as pe,A as me,an as fe}from"./index.0ed11181.js";import{Q as he}from"./QResizeObserver.f9785bfd.js";import{Q as we}from"./QPage.9c21063d.js";import{_ as ve,a as ge,b as _e,c as be,d as qe,e as ye,f as Ae,g as Qe,h as ke,i as $e,j as Me}from"./wandb_logo.43daca0d.js";import{Q as H,a as L}from"./use-form.ff3f77cb.js";import{u as x}from"./use-quasar.624d3c43.js";import{u as K}from"./answerStore.1c70fbbb.js";import{T as Te}from"./ToolQuestionItem.7d4396e6.js";import{u as Oe}from"./index.esm.f0b860bb.js";import{_ as Ce}from"./lg_saxion_wit.4b1b1f5e.js";import"./QKnob.af0fb19d.js";import"./scroll.f78dc32b.js";var Se=W({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:i}){const{proxy:{$q:n}}=re(),o=oe(ae,U);if(o===U)return console.error("QFooter needs to be child of QLayout"),U;const m=y(parseInt(e.heightHint,10)),a=y(!0),w=y(te.value===!0||o.isContainer.value===!0?0:window.innerHeight),u=b(()=>e.reveal===!0||o.view.value.indexOf("F")>-1||n.platform.is.ios&&o.isContainer.value===!0),f=b(()=>o.isContainer.value===!0?o.containerHeight.value:w.value),O=b(()=>{if(e.modelValue!==!0)return 0;if(u.value===!0)return a.value===!0?m.value:0;const s=o.scroll.value.position+f.value+m.value-o.height.value;return s>0?s:0}),k=b(()=>e.modelValue!==!0||u.value===!0&&a.value!==!0),V=b(()=>e.modelValue===!0&&k.value===!0&&e.reveal===!0),z=b(()=>"q-footer q-layout__section--marginal "+(u.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(k.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(u.value!==!0?" hidden":""):"")),N=b(()=>{const s=o.rows.value.bottom,t={};return s[0]==="l"&&o.left.space===!0&&(t[n.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),s[2]==="r"&&o.right.space===!0&&(t[n.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),t});function _(s,t){o.update("footer",s,t)}function $(s,t){s.value!==t&&(s.value=t)}function I({height:s}){$(m,s),_("size",s)}function P(){if(e.reveal!==!0)return;const{direction:s,position:t,inflectionPoint:h}=o.scroll.value;$(a,s==="up"||t-h<100||o.height.value-f.value-t-m.value<300)}function R(s){V.value===!0&&$(a,!0),i("focusin",s)}C(()=>e.modelValue,s=>{_("space",s),$(a,!0),o.animate()}),C(O,s=>{_("offset",s)}),C(()=>e.reveal,s=>{s===!1&&$(a,e.modelValue)}),C(a,s=>{o.animate(),i("reveal",s)}),C([m,o.scroll,o.height],P),C(()=>n.screen.height,s=>{o.isContainer.value!==!0&&$(w,s)});const l={};return o.instances.footer=l,e.modelValue===!0&&_("size",m.value),_("space",e.modelValue),_("offset",O.value),ne(()=>{o.instances.footer===l&&(o.instances.footer=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const s=le(r.default,[E(he,{debounce:0,onResize:I})]);return e.elevated===!0&&s.push(E("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),E("footer",{class:z.value,style:N.value,onFocusin:R},s)}}}),Be=W({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:r}){const i=b(()=>{const n=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(o=>e[o]===!0).map(o=>`q-btn-group--${o}`).join(" ");return`q-btn-group row no-wrap${n.length!==0?" "+n:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>E("div",{class:i.value},ie(r.default))}});const Ve=G({name:"AnswerItem",props:{fullscreen:{type:Boolean},answer:{type:Object}},emits:["selectAnswer","unselectAnswer"],setup(e,{emit:r}){const i=x(),n=K(),o=b(()=>i.platform.is.mobile),m=y(!1),a=y(null);return{selectAnswer:k=>{r("selectAnswer",k)},unselectAnswer:k=>{r("unselectAnswer",k)},showTooltip:()=>{clearTimeout(a.value),m.value=!0},hideTooltip:()=>{a.value=setTimeout(()=>{m.value=!1},50)},tooltipVisible:m,answerStore:n,isMobile:o,props:e}}}),ze={key:1},Ne=p("b",null,"Antwoord uitleg:",-1),Ie=p("div",null,null,-1);function Pe(e,r,i,n,o,m){return c(),Q(S,null,[g(Be,{rounded:"",class:"full-width"},{default:v(()=>[g(M,{class:"full-width","no-caps":"",push:"",rounded:"",color:e.answerStore.selectedAnswers.includes(e.props.answer.id)?"accent":"primary",onClick:r[0]||(r[0]=ue(a=>e.answerStore.selectedAnswers.includes(e.props.answer.id)?e.unselectAnswer(e.props.answer.id):e.selectAnswer(e.props.answer.id),["stop"])),label:e.props.answer.answer_text},null,8,["color","label"]),e.props.answer.explanation_text&&!e.isMobile?(c(),q(M,{key:0,icon:"info",color:e.answerStore.selectedAnswers.includes(e.props.answer.id)?"accent":"secondary","no-caps":"",push:"",rounded:"",onMouseover:e.showTooltip,onMouseleave:e.hideTooltip,round:"",size:"md"},null,8,["color","onMouseover","onMouseleave"])):e.props.answer.explanation_text?(c(),q(M,{key:1,icon:"info",color:e.answerStore.selectedAnswers.includes(e.props.answer.id)?"accent":"secondary","no-caps":"",push:"",rounded:"",onClick:r[1]||(r[1]=a=>e.tooltipVisible=!e.tooltipVisible),round:"",size:"md"},null,8,["color"])):A("",!0)]),_:1}),e.props.answer.explanation_text&&e.tooltipVisible?(c(),q(L,{key:0,onMouseover:e.showTooltip,onMouseleave:e.hideTooltip,style:{},class:"bg-white text-black tooltip",ref:"tooltip"},{default:v(()=>[g(H,null,{default:v(()=>[B(T(e.props.answer.explanation_text),1)]),_:1})]),_:1},8,["onMouseover","onMouseleave"])):A("",!0),e.props.fullscreen&&e.props.answer.explanation_text?(c(),Q("div",ze,[Ne,B(" "+T(e.props.answer.explanation_text),1)])):A("",!0),Ie],64)}var Re=D(Ve,[["render",Pe]]);const je=G({name:"QuestionItem",props:{question:{type:Object},question_number:{type:Number}},emits:["submitAnswer","previousQuestion","updateAnswer"],setup(e,{emit:r}){const i=K(),n=x(),o=b(()=>n.platform.is.mobile),m=i.tools,a=y(!1),w=y(!1),u=y(!1),f=y(null);return{selectAnswer:l=>{e.question.type==="single"&&i.selectedAnswers.length>0&&i.selectedAnswers.pop(),i.selectedAnswers.push(l),r("updateAnswer",i.selectedAnswers)},clashed_tools:l=>{const s=[];return m.forEach(t=>{let h=t.bad_compatible.find(d=>d.question_id===e.question.id&&d.answer_id===l);if(h){let d=JSON.parse(JSON.stringify(t));d.match=h,s.push(d)}}),s},expandFull:()=>{a.value=!a.value,w.value=!w.value},getImgUrl:l=>new URL({"../assets/small/azureml_logo.png":ve,"../assets/small/clearml_logo.png":ge,"../assets/small/dagshub_logo.png":_e,"../assets/small/databricks_logo.png":be,"../assets/small/datarobot_logo.png":qe,"../assets/small/h2o_logo.png":ye,"../assets/small/kubeflow_logo.png":Ae,"../assets/small/mlflow_logo.png":Qe,"../assets/small/sagemaker_logo.png":ke,"../assets/small/vertex_logo.png":$e,"../assets/small/wandb_logo.png":Me}[`../assets/small/${l}`],self.location).href,matched_tools:l=>{const s=[];return m.forEach(t=>{let h=t.good_compatible.find(d=>d.question_id===e.question.id&&d.answer_id===l);if(h){let d=JSON.parse(JSON.stringify(t));d.match=h,s.push(d)}}),s},submitAnswer:()=>{const l=i.selectedAnswers;l.length>0?r("submitAnswer",e.question.id,l):ce.create({position:"center",message:"Selecteer minimaal 1 antwoord!",color:"negative",timeout:200})},unselectAnswer:l=>{i.selectedAnswers=i.selectedAnswers.filter(s=>s!==l),r("updateAnswer",i.selectedAnswers)},fullscreen:w,answerStore:i,q:n,previousQuestion:()=>{r("previousQuestion")},showTooltip:()=>{clearTimeout(f.value),u.value=!0},hideTooltip:()=>{f.value=setTimeout(()=>{u.value=!1},50)},isMobile:o,tooltipVisible:u,props:e,expanded:a}},components:{AnswerItem:Re,QuestionToolIcon:ee}}),Ee={class:"row justify-center self-start"},Fe={class:"col-12 self-start text-center"},Je={class:"text-h5 text-center text-weight-bolder"},Ue={key:0},He=p("b",null,"Vraag uitleg:",-1),Le={class:"col-md-6 col-sm-10 col-xs-12 self-start"},Ge={key:0,class:"row q-pa-sm"},De=p("b",{class:"text-positive"},"Match",-1),xe=p("div",{class:"col-2",style:{height:"auto"}},null,-1),Ke=p("b",{class:"text-negative"},"Clash",-1),We={class:"text-right col-12 q-pr-lg q-pb-md"},Xe={class:"q-pa-sm col-12"};function Ye(e,r,i,n,o,m){const a=J("AnswerItem"),w=J("question-tool-icon");return c(),Q("div",Ee,[p("div",Fe,[p("span",Je,T(e.props.question.question_text),1),e.isMobile?A("",!0):(c(),q(M,{key:0,icon:"info",color:"accent","no-caps":"",onMouseover:e.showTooltip,onMouseleave:e.hideTooltip,push:"",rounded:"",round:"",size:"md",class:"q-my-sm"},null,8,["onMouseover","onMouseleave"])),p("div",null,[e.tooltipVisible?(c(),q(L,{key:0,onMouseover:e.showTooltip,onMouseleave:e.hideTooltip,class:"tooltip",ref:"tooltip"},{default:v(()=>[g(H,null,{default:v(()=>[B(T(e.props.question.explanation_text),1)]),_:1})]),_:1},8,["onMouseover","onMouseleave"])):A("",!0)])]),e.fullscreen?(c(),Q("div",Ue,[He,B(" "+T(e.props.question.explanation_text),1)])):A("",!0),p("div",Le,[g(L,{class:"row q-pa-lg-lg q-pa-md-md q-pa-xs-xs q-pa-sm-sm card"},{default:v(()=>[(c(!0),Q(S,null,F(e.props.question.answers,u=>(c(),q(H,{class:"col-6",key:u.id},{default:v(()=>[g(a,{answer:u,fullscreen:e.fullscreen,onSelectAnswer:e.selectAnswer,onUnselectAnswer:e.unselectAnswer},null,8,["answer","fullscreen","onSelectAnswer","onUnselectAnswer"]),e.expanded?(c(),Q("div",Ge,[p("div",{class:j(e.fullscreen?"col-12":"col-5")},[De,p("div",{class:j(e.fullscreen?"":"flex")},[(c(!0),Q(S,null,F(e.matched_tools(u.id),f=>(c(),q(w,{key:f.id,tool:f,class:"q-ma-sm cursor-pointer"},null,8,["tool"]))),128))],2)],2),xe,p("div",{class:j(e.fullscreen?"col-12":"col-5")},[Ke,p("div",{class:j(e.fullscreen?"":"flex")},[(c(!0),Q(S,null,F(e.clashed_tools(u.id),f=>(c(),q(w,{tool:f,key:f.id,class:"q-ma-sm cursor-pointer"},null,8,["tool"]))),128))],2)],2)])):A("",!0)]),_:2},1024))),128)),p("div",We,[p("b",null,T(e.props.question.type==="single"?"Selecteer \xE9\xE9n antwoord":"Meerdere antwoorden mogelijk"),1)])]),_:1}),p("div",Xe,[g(M,{color:"accent","no-caps":"",class:"float-left",push:"",rounded:"",icon:"arrow_back",onClick:e.previousQuestion},null,8,["onClick"]),g(M,{color:"accent","no-caps":"",class:"float-right",push:"",rounded:"",label:"Volgende vraag",onClick:e.submitAnswer},null,8,["onClick"])])])])}var Ze=D(je,[["render",Ye]]);const es=G({name:"QuizPage",setup(){const e=x(),r=Oe,i=de(),n=K(),o=n.questions,m=y(!0),a=y(n.answers.length===0?0:n.answers.length-1),w=b(()=>e.platform.is.mobile),u=pe();u.query.hasOwnProperty("question_id")&&(a.value=parseInt(u.query.question_id));const f=b(()=>(a.value+1)/o.length),O=()=>{a.value-1>=0?(a.value--,n.answers.pop(),n.selectedAnswers=n.answers[n.answers.length-1].answers):(n.answers=[],i.push("/"))},k=l=>{i.push(l)},V=(l,s)=>{n.selectedAnswers=[],a.value+1<o.length?(a.value++,n.answers.push({question_id:o[a.value].id,answers:[]})):(n.results.push({id:r.v4(),timestamp:Date.now(),top_3:_.value.slice(0,3),answers:n.answers}),n.answers=[],i.push({name:"result"}))},z=l=>{n.answers[n.answers.length-1].answers=l};me(()=>{n.answers.length===0&&n.answers.push({question_id:o[a.value].id,answers:[]})});const N=n.tools,_=b(()=>{let l=JSON.parse(JSON.stringify(N));return l.forEach(s=>{s.matches=$(s),s.clashes=I(s),s.numberOfMatches=P(s),s.numberOfClashes=R(s),s.numberOfClashes&&s.numberOfClashes?s.percentage=s.numberOfMatches/(s.numberOfMatches+s.numberOfClashes)*100:s.percentage=100}),l.sort((s,t)=>t.percentage===s.percentage?t.numberOfMatches-s.numberOfMatches:t.percentage-s.percentage).map((s,t)=>({...s,rank:t+1}))}),$=l=>{let s=JSON.parse(JSON.stringify(o));return l.good_compatible.forEach(t=>{let h=s.find(d=>d.id===t.question_id);n.answers.forEach(d=>{d.question_id===t.question_id&&d.answers.includes(t.answer_id)&&t.explanation!==""&&(h.hasOwnProperty("matches")||(h.matches=[]),h.matches.push(t))})}),s},I=l=>{let s=JSON.parse(JSON.stringify(o));return l.bad_compatible.forEach(t=>{let h=s.find(d=>d.id===t.question_id);n.answers.forEach(d=>{d.question_id===t.question_id&&d.answers.includes(t.answer_id)&&t.explanation!==""&&(h.hasOwnProperty("matches")||(h.matches=[]),h.matches.push(t))})}),s},P=l=>{let s=0;return l.matches.forEach(t=>{t.hasOwnProperty("matches")&&(s+=t.matches.length)}),s},R=l=>{let s=0;return l.clashes.forEach(t=>{t.hasOwnProperty("matches")&&(s+=t.matches.length)}),s};return{router:i,isMobile:w,updateAnswer:z,previousQuestion:O,questions:o,expanded:m,goToRoute:k,progress:f,nextQuestion:V,q:e,sortedTools:_,currentQuestion:a}},components:{QuestionItem:Ze,ToolQuestionItem:Te}}),ss={class:"absolute-full flex flex-center"},os={class:"text-h4 text-white"},ts={key:1,class:"flex flex-center"},ns=p("div",{class:"text-h5 text-weight-bolder"},"Match",-1);function ls(e,r,i,n,o,m){const a=J("question-item"),w=J("tool-question-item");return c(),q(we,{class:"q-ma-sm flex justify-center"},{default:v(()=>[g(Z,null,{default:v(()=>[g(X,null,{default:v(()=>[p("img",{onClick:r[0]||(r[0]=u=>e.goToRoute("/")),class:"q-ma-sm",src:Ce,style:{height:"6vh"}}),e.q.screen.lt.sm?A("",!0):(c(),q(Y,{key:0,class:"absolute-center text-h5",onClick:r[1]||(r[1]=u=>e.goToRoute("/"))},{default:v(()=>[B(" AI-Platformwijzer Quiz ")]),_:1}))]),_:1}),g(se,{size:"50px",stripe:"",value:e.progress,color:"accent","track-color":"white"},{default:v(()=>[p("div",ss,[p("div",os,T(`${e.currentQuestion+1}/${e.questions.length} vragen`),1)])]),_:1},8,["value"])]),_:1}),g(a,{question:e.questions[e.currentQuestion],question_number:e.currentQuestion+1,onUpdateAnswer:e.updateAnswer,onSubmitAnswer:e.nextQuestion,onPreviousQuestion:e.previousQuestion},null,8,["question","question_number","onUpdateAnswer","onSubmitAnswer","onPreviousQuestion"]),e.isMobile?A("",!0):(c(),q(Se,{key:0,elevated:"",bordered:"",class:"bg-white text-black"},{default:v(()=>[e.expanded?A("",!0):(c(),q(M,{key:0,"no-caps":"",label:"Meer info per tool",flat:"","icon-right":"keyboard_arrow_up",onClick:r[2]||(r[2]=u=>e.expanded=!e.expanded)})),e.expanded?(c(),Q("div",ts,[g(M,{"no-caps":"",label:"",flat:"","icon-right":"keyboard_arrow_down",onClick:r[3]||(r[3]=u=>e.expanded=!e.expanded)}),ns,g(fe,{name:"tool-list",tag:"tool-item",class:"flex flex-center"},{default:v(()=>[(c(!0),Q(S,null,F(e.sortedTools,(u,f)=>(c(),q(w,{tool:u,question:e.questions[e.currentQuestion],size:"80px",key:f},null,8,["tool","question"]))),128))]),_:1})])):A("",!0)]),_:1}))]),_:1})}var bs=D(es,[["render",ls]]);export{bs as default};
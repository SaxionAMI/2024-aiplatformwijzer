import{Q as p}from"./QInput.3944fa04.js";import{_ as C,a as b,u as A,r as $,f as q,l as c,p as U,q as f,m as v,ac as k,F as V,t as x,k as l,aw as r}from"./index.ab4869ca.js";import{a as h,Q as y}from"./QCard.eb99e114.js";import{Q as S}from"./QPage.d12e44a1.js";import{u as J}from"./answerStore.972bc172.js";import{u as N}from"./index.esm.f0b860bb.js";import"./use-key-composition.7c536e3b.js";const B=b({name:"QuestionsMakerPage",setup(){const n=N,s=A(),w=J(),t=$(JSON.parse(JSON.stringify(w.questions))),Q=async()=>{await navigator.clipboard.writeText(JSON.stringify({questions:_.value}))},_=q(()=>t.value);return{router:s,copyJson:Q,qs:t,questions:_,removeQuestion:d=>{const u=t.value.findIndex(a=>a.id===d);u>-1&&t.value.splice(u,1)},removeAnswer:(d,u)=>{const a=t.value.find(m=>m.id===d);if(a){const m=a.answers.findIndex(g=>g.id===u);m>-1&&a.answers.splice(m,1)}},addQuestion:()=>{t.value.push({id:n.v4(),question_text:"TEMP",explanation_text:"TEMP",type:"multi",answers:[]})},addAnswer:d=>{t.value.find(a=>a.id===d).answers.push({id:n.v4(),answer_text:"",explanation_text:""})},answerStore:w}}}),P={class:"text-h5 text-weight-bolder row"},E={class:"col-4"},I={class:"col-2"},M={class:"col-12"};function O(n,s,w,t,Q,_){return c(),U(S,{class:"flex flex-center row q-col-gutter-sm row"},{default:f(()=>[(c(!0),v(V,null,k(n.questions,e=>(c(),v("div",{key:e.id,class:"col-10"},[x("div",P,[l(p,{modelValue:e.question_text,"onUpdate:modelValue":o=>e.question_text=o,label:"Question",rounded:"",filled:"",class:"col-8"},null,8,["modelValue","onUpdate:modelValue"]),l(p,{modelValue:e.explanation_text,"onUpdate:modelValue":o=>e.explanation_text=o,label:"Explanation",rounded:"",filled:"",class:"col-8"},null,8,["modelValue","onUpdate:modelValue"]),x("div",E,[l(r,{color:"negative",class:"float-right",icon:"delete",round:"",onClick:o=>n.removeQuestion(e.id)},null,8,["onClick"])])]),l(h,{class:"questioncard"},{default:f(()=>[l(y,null,{default:f(()=>[l(r,{rounded:"",color:"primary",onClick:o=>e.type==="single"?e.type="multi":e.type="single",label:e.type},null,8,["onClick","label"])]),_:2},1024),l(y,{class:"row q-col-gutter-sm"},{default:f(()=>[(c(!0),v(V,null,k(e.answers,o=>(c(),v("div",{key:o.id,class:"col-6 row"},[l(p,{class:"col-10",outlined:"",rounded:"",modelValue:o.answer_text,"onUpdate:modelValue":i=>o.answer_text=i,label:"Question"},null,8,["modelValue","onUpdate:modelValue"]),l(p,{class:"col-10",outlined:"",rounded:"",modelValue:o.explanation_text,"onUpdate:modelValue":i=>o.explanation_text=i,label:"explanation"},null,8,["modelValue","onUpdate:modelValue"]),x("div",I,[l(r,{flat:"",color:"negative",icon:"delete",round:"",onClick:i=>n.removeAnswer(e.id,o.id)},null,8,["onClick"])])]))),128)),l(r,{rounded:"",color:"primary",class:"q-ma-sm",onClick:o=>n.addAnswer(e.id),label:"Add answer","no-caps":""},null,8,["onClick"])]),_:2},1024)]),_:2},1024)]))),128)),x("div",M,[l(r,{class:"q-ma-sm",rounded:"",color:"primary","no-caps":"",label:"Add question",onClick:s[0]||(s[0]=e=>n.addQuestion())}),l(r,{class:"q-ma-sm",rounded:"",color:"primary","no-caps":"",label:"Copy all JSON",onClick:s[1]||(s[1]=e=>n.copyJson())})])]),_:1})}var H=C(B,[["render",O]]);export{H as default};

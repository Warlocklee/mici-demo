var I=Object.defineProperty,C=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var c=(e,a,t)=>a in e?I(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,h=(e,a)=>{for(var t in a||(a={}))N.call(a,t)&&c(e,t,a[t]);if(v)for(var t of v(a))g.call(a,t)&&c(e,t,a[t]);return e},y=(e,a)=>C(e,E(a));import{d as B,r as x,m as U,a2 as A,a as d,e as u,h as s,i as n,o,c as r,s as k,x as p,a3 as V}from"./lib.cdadc3cf.js";import{_ as D}from"./index.03aedaaa.js";const R=B({name:"settings",components:{},setup(){const e=x(),a=U({editStatus:!1,formValue:{name:"five",address:"Beijing",phone:"xxx xxxx xxxx",email:"five@xxxx.com"}}),t=()=>{a.editStatus=!1},f=()=>{a.editStatus=!0};return y(h({},A(a)),{formRef:e,submit:t,edit:f})}}),$={class:"settingPage"},j=V("EDIT"),M={key:1},P={key:1},T={key:1},w={key:1},H=V("SUBMIT");function L(e,a,t,f,O,q){const _=d("n-button"),i=d("n-input"),m=d("n-form-item"),S=d("n-form"),b=d("n-card");return o(),u("div",$,[s(b,{title:"Basic Information"},{"header-extra":n(()=>[e.editStatus?k("v-if",!0):(o(),r(_,{key:0,type:"primary",onClick:e.edit},{default:n(()=>[j]),_:1},8,["onClick"]))]),default:n(()=>[s(S,{class:"formStyle",model:e.formValue,ref:"formRef","label-width":"100","label-placement":"left"},{default:n(()=>[s(m,{label:"NAME",path:"name"},{default:n(()=>[e.editStatus?(o(),r(i,{key:0,value:e.formValue.name,"onUpdate:value":a[0]||(a[0]=l=>e.formValue.name=l),placeholder:"Input Name"},null,8,["value"])):(o(),u("p",M,p(e.formValue.name),1))]),_:1}),s(m,{label:"EMAIL",path:"email"},{default:n(()=>[e.editStatus?(o(),r(i,{key:0,placeholder:"Input Email",value:e.formValue.email,"onUpdate:value":a[1]||(a[1]=l=>e.formValue.email=l)},null,8,["value"])):(o(),u("p",P,p(e.formValue.email),1))]),_:1}),s(m,{label:"PHONE",path:"phone"},{default:n(()=>[e.editStatus?(o(),r(i,{key:0,placeholder:"Input Phone Number",value:e.formValue.phone,"onUpdate:value":a[2]||(a[2]=l=>e.formValue.phone=l)},null,8,["value"])):(o(),u("p",T,p(e.formValue.phone),1))]),_:1}),s(m,{label:"ADDRESS",path:"address"},{default:n(()=>[e.editStatus?(o(),r(i,{key:0,placeholder:"Input Address",value:e.formValue.address,"onUpdate:value":a[3]||(a[3]=l=>e.formValue.address=l)},null,8,["value"])):(o(),u("p",w,p(e.formValue.address),1))]),_:1}),e.editStatus?(o(),r(_,{key:0,onClick:e.submit,type:"primary"},{default:n(()=>[H]),_:1},8,["onClick"])):k("v-if",!0)]),_:1},8,["model"])]),_:1})])}var J=D(R,[["render",L],["__scopeId","data-v-52237580"]]);export{J as default};

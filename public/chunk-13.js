(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{185:function(e,s,t){"use strict";t.r(s);var a={data:()=>({username:"",password:"",message:""}),methods:{send(){axios.post("/admin/reset",{username:this.username,password:this.password}).then(()=>{this.message="Your password has been changed!"})}}};t=t(10),a=Object(t.a)(a,(function(){var e=this,s=e.$createElement;return(s=e._self._c||s)("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.username},on:{input:function(s){s.target.composing||(e.username=s.target.value)}}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",placeholder:"password"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),e._v(" "),s("button",{attrs:{type:"submit"},on:{click:function(s){return s.preventDefault(),e.send(s)}}},[e._v("Reset")]),e._v("\n    "+e._s(e.message)+"\n")])}),[],!1,null,null,null);s.default=a.exports}}]);
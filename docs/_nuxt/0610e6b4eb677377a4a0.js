(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{186:function(t,o,e){var content=e(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(50).default)("6759f5ab",content,!0,{sourceMap:!1})},212:function(t,o,e){"use strict";var n=e(186);e.n(n).a},213:function(t,o,e){(o=e(49)(!1)).push([t.i,".msg{border:2px solid rgba(0,0,255,.8);background-color:rgba(0,0,255,.1);border-radius:5px}.response{border:2px solid rgba(255,122,0,.8);background-color:rgba(255,122,0,.1);border-radius:5px}",""]),t.exports=o},214:function(t,o,e){"use strict";e.r(o);var n=e(195),r=e.n(n),c={data:function(){return{msg:"",responses:[],api:"https://us-central1-rubber-app.cloudfunctions.net/rubber",gobis:["","","？","！","だね。","なんだね。","なんだ。","だって。"],aizutis:["はい。","うん。","へえ。","そうなんだ。","そう。"]}},methods:{sendMSG:function(){var t=this;r.a.get(this.api,this.msg).then((function(o){t.response=o.data}))},test:function(){var t=this,o=this.gobis[Math.floor(Math.random()*this.gobis.length)],e=this.aizutis[Math.floor(Math.random()*this.aizutis.length)];r.a.post("https://api.ce-cotoha.com/v1/oauth/accesstokens",{grantType:"client_credentials",clientId:"rn3Js16ipBG3DXTWfQT4DWtWnhdqNVuX",clientSecret:"7dENECGdcRoilIGY"},{headers:{"Content-Type":"application/json"}}).then((function(n){console.log(n);var c=n.data.access_token,l=t.msg;r.a.post("https://api.ce-cotoha.com/api/dev/nlp/v1/keyword",{document:l,type:"kuzure"},{headers:{"Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer "+c}}).then((function(n){console.log(n);var r="";n.data.result.length>0?(r=e+n.data.result[Math.floor(Math.random()*n.data.result.length)].form+o,t.responses.push({msg:t.msg,response:r})):(r=t.aizutis[Math.floor(Math.random()*t.aizutis.length)],t.responses.push({msg:t.msg,response:r})),console.log(r)})).catch((function(t){return t}))}))}}},l=(e(212),e(45)),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-container",{attrs:{fluid:""}},[e("b-container",t._l(t.responses,(function(o,n){return e("b-row",{key:n},[e("b-col",{staticClass:"msg m-2"},[t._v("\n        "+t._s(o.msg)+"\n      ")]),t._v(" "),e("b-col",{staticClass:"response m-2"},[t._v("\n        "+t._s(o.response)+"\n      ")])],1)})),1),t._v(" "),e("b-container",{attrs:{tag:"footer"}},[e("b-row",[e("b-textarea",{model:{value:t.msg,callback:function(o){t.msg=o},expression:"msg"}}),t._v(" "),e("b-button",{on:{click:t.test}},[t._v("送信")])],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{186:function(t,o,e){var content=e(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(50).default)("6759f5ab",content,!0,{sourceMap:!1})},212:function(t,o,e){"use strict";var n=e(186);e.n(n).a},213:function(t,o,e){(o=e(49)(!1)).push([t.i,'.msg{border:2px solid rgba(0,0,255,.8);background-color:rgba(0,0,255,.1);border-radius:5px}.msg:before{content:"";position:absolute;left:20px;bottom:-5px;display:block;width:0;height:0;border-right:5px solid transparent;border-top:5px solid rgba(0,0,255,.8);border-left:5px solid transparent}.response{border:2px solid rgba(255,122,0,.8);background-color:rgba(255,122,0,.1);border-radius:5px}.response:before{content:"";position:absolute;right:20px;bottom:-5px;display:block;width:0;height:0;border-right:5px solid transparent;border-top:5px solid d;border-left:5px solid transparent}',""]),t.exports=o},214:function(t,o,e){"use strict";e.r(o);var n=e(195),r=e.n(n),l={data:function(){return{msg:"",responses:[],api:"https://us-central1-rubber-app.cloudfunctions.net/rubber",gobis:["","","？","！","だね。","なんだね。","なんだ。","だって。","なの？","って？"],aizutis:["はい。","うん。","へえ。","そうなんだ。","そう。"]}},methods:{sendMSG:function(){var t=this;r.a.get(this.api,this.msg).then((function(o){t.response=o.data}))},test:function(){var t=this,o=this.gobis[Math.floor(Math.random()*this.gobis.length)],e=this.aizutis[Math.floor(Math.random()*this.aizutis.length)],n=this.msg.length>0?this.msg:"";""==n&&this.responses.push({msg:"…",response:"えっ、何？　よく聞こえなかった。"}),this.msg="",r.a.post("https://api.ce-cotoha.com/v1/oauth/accesstokens",{grantType:"client_credentials",clientId:"rn3Js16ipBG3DXTWfQT4DWtWnhdqNVuX",clientSecret:"7dENECGdcRoilIGY"},{headers:{"Content-Type":"application/json"}}).then((function(l){console.log(l);var c=l.data.access_token,h=n;r.a.post("https://api.ce-cotoha.com/api/dev/nlp/v1/keyword",{document:h,type:"kuzure"},{headers:{"Content-Type":"application/json; charset=UTF-8",Authorization:"Bearer "+c}}).then((function(n){console.log(n);var r="";n.data.result.length>0?(r=e+n.data.result[Math.floor(Math.random()*n.data.result.length)].form+o,t.responses.push({msg:h,response:r})):(r=t.aizutis[Math.floor(Math.random()*t.aizutis.length)],t.responses.push({msg:h,response:r})),console.log(r)})).catch((function(t){return t}))}))}}},c=(e(212),e(45)),component=Object(c.a)(l,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-container",{attrs:{fluid:""}},[e("b-container",t._l(t.responses,(function(o,n){return e("b-row",{key:n},[e("b-col",{staticClass:"msg m-2 mb-4"},[t._v("\n        "+t._s(o.msg)+"\n      ")]),t._v(" "),e("b-col",{staticClass:"response m-2 mb-4"},[t._v("\n        "+t._s(o.response)+"\n      ")])],1)})),1),t._v(" "),e("b-container",{attrs:{tag:"footer"}},[e("b-row",[e("b-textarea",{model:{value:t.msg,callback:function(o){t.msg=o},expression:"msg"}}),t._v(" "),e("b-button",{on:{click:t.test}},[t._v("送信")])],1)],1)],1)}),[],!1,null,null,null);o.default=component.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64ab7b04"],{"0fd9":function(n,t,e){"use strict";var a=e("ade3"),c=e("5530"),i=(e("caad"),e("2532"),e("99af"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("d3b7"),e("3ca3"),e("ddb0"),e("159b"),e("4b85"),e("2b0e")),r=e("d9f7"),u=e("80d2"),o=["sm","md","lg","xl"],l=["start","end","center"];function s(n,t){return o.reduce((function(e,a){return e[n+Object(u["H"])(a)]=t(),e}),{})}var f=function(n){return[].concat(l,["baseline","stretch"]).includes(n)},d=s("align",(function(){return{type:String,default:null,validator:f}})),g=function(n){return[].concat(l,["space-between","space-around"]).includes(n)},b=s("justify",(function(){return{type:String,default:null,validator:g}})),p=function(n){return[].concat(l,["space-between","space-around","stretch"]).includes(n)},j=s("alignContent",(function(){return{type:String,default:null,validator:p}})),v={align:Object.keys(d),justify:Object.keys(b),alignContent:Object.keys(j)},y={align:"align",justify:"justify",alignContent:"align-content"};function w(n,t,e){var a=y[n];if(null!=e){if(t){var c=t.replace(n,"");a+="-".concat(c)}return a+="-".concat(e),a.toLowerCase()}}var O=new Map;t["a"]=i["default"].extend({name:"v-row",functional:!0,props:Object(c["a"])(Object(c["a"])(Object(c["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},d),{},{justify:{type:String,default:null,validator:g}},b),{},{alignContent:{type:String,default:null,validator:p}},j),render:function(n,t){var e=t.props,c=t.data,i=t.children,u="";for(var o in e)u+=String(e[o]);var l=O.get(u);return l||function(){var n,t;for(t in l=[],v)v[t].forEach((function(n){var a=e[n],c=w(t,n,a);c&&l.push(c)}));l.push((n={"no-gutters":e.noGutters,"row--dense":e.dense},Object(a["a"])(n,"align-".concat(e.align),e.align),Object(a["a"])(n,"justify-".concat(e.justify),e.justify),Object(a["a"])(n,"align-content-".concat(e.alignContent),e.alignContent),n)),O.set(u,l)}(),n(e.tag,Object(r["a"])(c,{staticClass:"row",class:l}),i)}})},"20f6":function(n,t,e){},"4b85":function(n,t,e){}}]);
//# sourceMappingURL=chunk-64ab7b04.21eac91f.js.map
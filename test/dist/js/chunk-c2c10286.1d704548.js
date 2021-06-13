(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2c10286"],{"0cff":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[i("div",{staticClass:"alert-icon"},[i("span",{staticClass:"svg-icon svg-icon-lg"},[i("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),i("div",{staticClass:"alert-text"},[i("b",[t._v("File inputs")]),t._v(" The "),i("code",[t._v("v-file-input")]),t._v(" component is a specialized input that provides a clean interface for selecting files, showing detailed selection information and upload progress. It is meant to be a direct replacement for a standard file input. "),i("a",{staticClass:"font-weight-bold",attrs:{href:"https://vuetifyjs.com/en/components/file-inputs",target:"_blank"}},[t._v(" See documentation. ")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("KTCodePreview",{attrs:{title:"Multiple"},scopedSlots:t._u([{key:"preview",fn:function(){return[i("p",[t._v(" The "),i("code",[t._v("v-file-input")]),t._v(" can contain multiple files at the same time when using the "),i("strong",[t._v("multiple")]),t._v(" prop. ")]),i("v-file-input",{attrs:{multiple:"",label:"File input"}})]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])}),i("KTCodePreview",{attrs:{title:"Custom icons"},scopedSlots:t._u([{key:"preview",fn:function(){return[i("p",[t._v(" The "),i("code",[t._v("v-file-input")]),t._v(" has a default prepended icon that can be set on the component or adjusted globally. ")]),i("v-file-input",{attrs:{label:"File input",filled:"","prepend-icon":"mdi-camera"}})]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code6.html)+" ")]},proxy:!0}])}),i("KTCodePreview",{attrs:{title:"Counter"},scopedSlots:t._u([{key:"preview",fn:function(){return[i("p",[t._v(" When using the show-size property along with counter, the total number of files and size will be displayed under the input. ")]),i("v-file-input",{attrs:{"show-size":"",counter:"",multiple:"",label:"File input"}})]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code5.html)+" ")]},proxy:!0}])}),i("KTCodePreview",{attrs:{title:"Complex selection slots"},scopedSlots:t._u([{key:"preview",fn:function(){return[i("p",[t._v(" The flexibility of the selection slot allows you accomodate complex use-cases. In this example we show the first 2 selections as chips while adding a number indicator for the remaining amount. ")]),i("v-file-input",{attrs:{color:"deep-purple accent-4",counter:"",label:"File input",multiple:"",placeholder:"Select your files","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.index,s=e.text;return[n<2?i("v-chip",{attrs:{color:"deep-purple accent-4",dark:"",label:"",small:""}},[t._v(" "+t._s(s)+" ")]):2===n?i("span",{staticClass:"overline grey--text text--darken-3 mx-2"},[t._v(" +"+t._s(t.code7.files.length-2)+" File(s) ")]):t._e()]}}]),model:{value:t.code7.files,callback:function(e){t.$set(t.code7,"files",e)},expression:"code7.files"}})]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code7.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code7.js)+" ")]},proxy:!0}])})],1),i("div",{staticClass:"col-md-6"},[i("KTCodePreview",{attrs:{title:"With chips"},scopedSlots:t._u([{key:"preview",fn:function(){return[i("p",[t._v(" A selected file can be displayed as a chip. When using the chips and multiple props, each chip will be displayed (as opposed to the file count). ")]),i("div",[i("v-file-input",{attrs:{chips:"",multiple:"",label:"File input w/ chips"}}),i("v-file-input",{attrs:{"small-chips":"",multiple:"",label:"File input w/ small chips"}})],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code3.html)+" ")]},proxy:!0}])}),i("KTCodePreview",{attrs:{title:"Accept formats"},scopedSlots:t._u([{key:"preview",fn:function(){return[i("p",[i("code",[t._v("v-file-input")]),t._v(" component can accept only specific media formats/file types if you want. ")]),i("v-file-input",{attrs:{accept:"image/*",label:"File input"}})]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0}])}),i("KTCodePreview",{attrs:{title:"Size displaying"},scopedSlots:t._u([{key:"preview",fn:function(){return[i("p",[t._v(" The displayed size of the selected file(s) can be configured with the show-size property. Display sizes can be either 1024 (the default used when providing true) or 1000. ")]),i("v-file-input",{attrs:{"show-size":"",label:"File input"}})]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code4.html)+" ")]},proxy:!0}])})],1)])],1)},s=[],l=i("d968"),a=i("25a6"),o={data:function(){return{code1:{html:' <v-file-input multiple label="File input"></v-file-input>'},code2:{html:'<v-file-input accept="image/*" label="File input"></v-file-input>'},code3:{html:'<div>\n  <v-file-input chips multiple label="File input w/ chips"></v-file-input>\n  <v-file-input small-chips multiple label="File input w/ small chips"></v-file-input>\n</div>'},code4:{html:'<v-file-input show-size label="File input"></v-file-input>'},code5:{html:'<v-file-input show-size counter multiple label="File input"></v-file-input>'},code6:{html:'<v-file-input\n  label="File input"\n  filled\n  prepend-icon="mdi-camera"\n></v-file-input>'},code7:{html:'<v-file-input\n  v-model="files"\n  color="deep-purple accent-4"\n  counter\n  label="File input"\n  multiple\n  placeholder="Select your files"\n  prepend-icon="mdi-paperclip"\n  outlined\n  :show-size="1000"\n>\n  <template v-slot:selection="{ index, text }">\n    <v-chip\n      v-if="index < 2"\n      color="deep-purple accent-4"\n      dark\n      label\n      small\n    >\n      {{ text }}\n    </v-chip>\n\n    <span\n      v-else-if="index === 2"\n      class="overline grey--text text--darken-3 mx-2"\n    >\n      +{{ files.length - 2 }} File(s)\n    </span>\n  </template>\n</v-file-input>',js:"export default {\n  data: () => ({\n    files: [],\n  }),\n}",files:[]}}},components:{KTCodePreview:l["a"]},mounted:function(){this.$store.dispatch(a["a"],[{title:"Vuetify",route:"alerts"},{title:"Form Inputs & Control",route:"autocompletes"},{title:"File Inputs"}])}},r=o,c=i("2877"),u=i("6544"),p=i.n(u),h=i("cc20"),d=i("2909"),f=i("5530"),v=i("53ca"),m=(i("a9e3"),i("caad"),i("d81d"),i("b0c0"),i("99af"),i("a434"),i("159b"),i("fb6a"),i("5803"),i("2677")),b=i("80d2"),g=i("d9bd"),y=i("d9f7"),x=m["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(b["I"])(t).every((function(t){return null!=t&&"object"===Object(v["a"])(t)}))}}},computed:{classes:function(){return Object(f["a"])(Object(f["a"])({},m["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var i=e.size,n=void 0===i?0:i;return t+n}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(b["x"])(e,1024===this.base))},internalArrayValue:function(){return Object(b["I"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var i=e.name,n=void 0===i?"":i,s=e.size,l=void 0===s?0:s,a=t.truncateText(n);return t.showSize?"".concat(a," (").concat(Object(b["x"])(l,1024===t.base),")"):a})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(g["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(b["k"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,i){return t.$createElement(h["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(i,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=m["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(y["d"])(t.data.style,{display:"none"})),t},genInput:function(){var t=m["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(i,n){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[n],file:i,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=m["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=Object(f["a"])(Object(f["a"])({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=Object(d["a"])(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}}),C=Object(c["a"])(r,n,s,!1,null,null,null);e["default"]=C.exports;p()(C,{VChip:h["a"],VFileInput:x})},"1c87":function(t,e,i){"use strict";var n=i("ade3"),s=i("5530"),l=(i("9911"),i("498a"),i("99af"),i("ac1f"),i("5319"),i("2b0e")),a=i("5607"),o=i("80d2");e["a"]=l["default"].extend({name:"routable",directives:{Ripple:a["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple:function(){var t;return null!=(t=this.ripple)?t:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},methods:{click:function(t){this.$emit("click",t)},generateRouteLink:function(){var t,e,i=this.exact,l=(t={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(n["a"])(t,this.to?"nativeOn":"on",Object(s["a"])(Object(s["a"])({},this.$listeners),{},{click:this.click})),Object(n["a"])(t,"ref","link"),t);if("undefined"===typeof this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var a=this.activeClass,o=this.exactActiveClass||a;this.proxyClass&&(a="".concat(a," ").concat(this.proxyClass).trim(),o="".concat(o," ").concat(this.proxyClass).trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(l.props,{to:this.to,exact:i,activeClass:a,exactActiveClass:o,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(l.attrs.href=this.href);return this.target&&(l.attrs.target=this.target),{tag:e,data:l}},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link&&this.$route){var e="".concat(this.activeClass," ").concat(this.proxyClass||"").trim(),i="_vnode.data.class.".concat(e);this.$nextTick((function(){Object(o["q"])(t.$refs.link,i)&&t.toggle()}))}},toggle:function(){}}})},2677:function(t,e,i){"use strict";var n=i("8654");e["a"]=n["a"]},"4e82":function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("ade3"),s=i("3206");function l(t,e,i){return Object(s["a"])(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(n["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}l("itemGroup")},5803:function(t,e,i){},"8adc":function(t,e,i){},9911:function(t,e,i){"use strict";var n=i("23e7"),s=i("857a"),l=i("af03");n({target:"String",proto:!0,forced:l("link")},{link:function(t){return s(this,"a","href",t)}})},cc20:function(t,e,i){"use strict";var n=i("3835"),s=i("5530"),l=(i("4de4"),i("8adc"),i("58df")),a=i("0789"),o=i("9d26"),r=i("a9ad"),c=i("4e82"),u=i("7560"),p=i("f2e7"),h=i("1c87"),d=i("af2b"),f=i("d9bd");e["a"]=Object(l["a"])(r["a"],d["a"],h["a"],u["a"],Object(c["a"])("chipGroup"),Object(p["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-chip":!0},h["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(h["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(n["a"])(e,2),s=i[0],l=i[1];t.$attrs.hasOwnProperty(s)&&Object(f["a"])(s,l,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(o["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(a["b"],t)},genClose:function(){var t=this;return this.$createElement(o["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),n=i.tag,l=i.data;l.attrs=Object(s["a"])(Object(s["a"])({},l.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:l.attrs.tabindex}),l.directives.push({name:"show",value:this.active}),l=this.setBackgroundColor(this.color,l);var a=this.textColor||this.outlined&&this.color;return t(n,this.setTextColor(a,l),e)}})},f2e7:function(t,e,i){"use strict";i.d(e,"b",(function(){return l}));var n=i("ade3"),s=i("2b0e");function l(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return s["default"].extend({name:"toggleable",model:{prop:e,event:i},props:Object(n["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(n["a"])(t,e,(function(t){this.isActive=!!t})),Object(n["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(i,t)})),t)})}var a=l();e["a"]=a}}]);
//# sourceMappingURL=chunk-c2c10286.1d704548.js.map
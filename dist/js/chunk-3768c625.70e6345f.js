(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3768c625"],{"0b23":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[a("div",{staticClass:"alert-icon"},[a("span",{staticClass:"svg-icon svg-icon-lg"},[a("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),a("div",{staticClass:"alert-text"},[a("b",[t._v("Form textarea")]),t._v(" Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states. "),a("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/form-textarea",target:"_blank"}},[t._v(" See documentation. ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("KTCodePreview",{attrs:{title:"Form textarea"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("div",[a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("pre",{staticClass:"mt-3 mb-0"},[t._v(t._s(t.text))])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0},{key:"js",fn:function(){return[t._v(" "+t._s(t.code1.js)+" ")]},proxy:!0}])}),a("KTCodePreview",{attrs:{title:"Control sizing"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" Set text height using the size prop to "),a("code",[t._v("sm")]),t._v(" or "),a("code",[t._v("lg")]),t._v(" for small or large respectively. ")]),a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{sm:"2"}},[a("label",{attrs:{for:"textarea-small"}},[t._v("Small:")])]),a("b-col",{attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-small",size:"sm",placeholder:"Small textarea"}})],1)],1),a("b-row",{staticClass:"mt-2"},[a("b-col",{attrs:{sm:"2"}},[a("label",{attrs:{for:"textarea-default"}},[t._v("Default:")])]),a("b-col",{attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-default",placeholder:"Default textarea"}})],1)],1),a("b-row",{staticClass:"mt-2"},[a("b-col",{attrs:{sm:"2"}},[a("label",{attrs:{for:"textarea-large"}},[t._v("Large:")])]),a("b-col",{attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-large",size:"lg",placeholder:"Large textarea"}})],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0}])})],1),a("div",{staticClass:"col-md-6"},[a("KTCodePreview",{attrs:{title:"Displayed rows"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" To set the height of "),a("code",[t._v("<b-form-textarea>")]),t._v(", set the "),a("code",[t._v("rows")]),t._v(" prop to the desired number of rows. If no value is provided to "),a("code",[t._v("rows")]),t._v(", then it will default to "),a("code",[t._v("2")]),t._v(" (the browser default and minimum acceptable value). Setting it to null or a value below "),a("code",[t._v("2")]),t._v(" will result in the default of 2 being used. ")]),a("div",[a("b-form-textarea",{attrs:{id:"textarea-rows",placeholder:"Tall textarea",rows:"8"}})],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code3.html)+" ")]},proxy:!0}])}),a("KTCodePreview",{attrs:{title:"Auto height"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[a("code",[t._v("<b-form-textarea>")]),t._v(" can also automatically adjust its height (text rows) to fit the content, even as the user enters or deletes text. The height of the textarea will either grow or shrink to fit the content (grow to a maximum of "),a("code",[t._v("max-rows")]),t._v(" or shrink to a minimum of "),a("code",[t._v("rows")]),t._v("). ")]),a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{sm:"2"}},[a("label",{attrs:{for:"textarea-auto-height"}},[t._v("Auto height:")])]),a("b-col",{attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-auto-height",placeholder:"Auto height textarea",rows:"3","max-rows":"8"}})],1)],1),a("b-row",{staticClass:"mt-2"},[a("b-col",{attrs:{sm:"2"}},[a("label",{attrs:{for:"textarea-no-auto-shrink"}},[t._v("No auto-shrink:")])]),a("b-col",{attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-no-auto-shrink",placeholder:"Auto height (no-shrink) textarea",rows:"3","max-rows":"8","no-auto-shrink":""}})],1)],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code4.html)+" ")]},proxy:!0}])})],1)])],1)},o=[],l=a("d968"),r=a("25a6"),n={data:function(){return{code1:{html:'<div>\n    <b-form-textarea\n      id="textarea"\n      v-model="text"\n      placeholder="Enter something..."\n      rows="3"\n      max-rows="6"\n    ></b-form-textarea>\n\n    <pre class="mt-3 mb-0">{{ text }}</pre>\n  </div>',js:"export default {\n    data() {\n      return {\n        text: ''\n      }\n    }\n  }"},text:"",code2:{html:'<b-container fluid>\n  <b-row>\n    <b-col sm="2">\n      <label for="textarea-small">Small:</label>\n    </b-col>\n    <b-col sm="10">\n      <b-form-textarea\n        id="textarea-small"\n        size="sm"\n        placeholder="Small textarea"\n      ></b-form-textarea>\n    </b-col>\n  </b-row>\n\n  <b-row class="mt-2">\n    <b-col sm="2">\n      <label for="textarea-default">Default:</label>\n    </b-col>\n    <b-col sm="10">\n      <b-form-textarea\n        id="textarea-default"\n        placeholder="Default textarea"\n      ></b-form-textarea>\n    </b-col>\n  </b-row>\n\n  <b-row class="mt-2">\n    <b-col sm="2">\n      <label for="textarea-large">Large:</label>\n    </b-col>\n    <b-col sm="10">\n      <b-form-textarea\n        id="textarea-large"\n        size="lg"\n        placeholder="Large textarea"\n      ></b-form-textarea>\n    </b-col>\n  </b-row>\n</b-container>'},code3:{html:'<div>\n  <b-form-textarea\n    id="textarea-rows"\n    placeholder="Tall textarea"\n    rows="8"\n  ></b-form-textarea>\n</div>'},code4:{html:'<b-container fluid>\n  <b-row>\n    <b-col sm="2">\n      <label for="textarea-auto-height">Auto height:</label>\n    </b-col>\n    <b-col sm="10">\n      <b-form-textarea\n        id="textarea-auto-height"\n        placeholder="Auto height textarea"\n        rows="3"\n        max-rows="8"\n      ></b-form-textarea>\n    </b-col>\n  </b-row>\n\n  <b-row class="mt-2">\n    <b-col sm="2">\n      <label for="textarea-no-auto-shrink">No auto-shrink:</label>\n    </b-col>\n    <b-col sm="10">\n      <b-form-textarea\n        id="textarea-no-auto-shrink"\n        placeholder="Auto height (no-shrink) textarea"\n        rows="3"\n        max-rows="8"\n        no-auto-shrink\n      ></b-form-textarea>\n    </b-col>\n  </b-row>\n</b-container>'}}},components:{KTCodePreview:l["a"]},mounted:function(){this.$store.dispatch(r["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Form Textarea"}])}},i=n,c=a("2877"),d=Object(c["a"])(i,s,o,!1,null,null,null);e["default"]=d.exports},d968:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[a("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[a("div",{staticClass:"example-tools justify-content-center"},[a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():a("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?a("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():a("div",[a("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[a("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[a("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),a("b-tab",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),a("b-tab",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?a("div",{staticClass:"example-highlight"},[t.hasHtmlCode?a("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?a("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?a("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},o=[],l=(a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?a("div",{staticClass:"card-header",class:t.headClass},[a("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():a("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),a("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),a("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?a("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),r=[],n={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},i=n,c=a("2877"),d=Object(c["a"])(i,l,r,!1,null,null,null),h=d.exports,u=a("b2e9"),m={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:h},mounted:function(){var t=this;this.$nextTick((function(){u["a"].init([t.$el]);var e=t.$el.querySelectorAll(".hljs");e.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),a=e.querySelectorAll('[data-toggle="tab"]'),s=0;s<a.length;s++)a[s].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(a){t.$slots.hasOwnProperty(a)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},b=m,f=Object(c["a"])(b,s,o,!1,null,null,null);e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-3768c625.70e6345f.js.map
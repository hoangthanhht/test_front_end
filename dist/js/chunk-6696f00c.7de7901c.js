(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6696f00c"],{"061e":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("transition",{attrs:{name:"fade-in-up"}},[n("router-view")],1)],1)},o=[],r=n("2b0e"),a="The .native modifier for v-on is only valid on components but it was used on <div>.";r["default"].config.warnHandler=function(t,e,n){t===a&&(t=null,null,null)};var s={components:{}},u=s,p=(n("f4e5"),n("2877")),c=n("6544"),l=n.n(c),f=n("5530"),d=(n("df86"),n("7560")),h=n("58df"),m=Object(h["a"])(d["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(f["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}}),v=Object(p["a"])(u,i,o,!1,null,null,null);e["default"]=v.exports;l()(v,{VApp:m})},"58df":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n("2b0e");function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i["default"].extend({mixins:e})}},6544:function(t,e){t.exports=function(t,e){var n="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var i in"function"===typeof t.exports&&(n.components=t.exports.options.components),n.components=n.components||{},e)n.components[i]=n.components[i]||e[i]}},7560:function(t,e,n){"use strict";n.d(e,"b",(function(){return a}));var i=n("5530"),o=n("2b0e"),r=o["default"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function a(t){var e=Object(i["a"])(Object(i["a"])({},t.props),t.injections),n=r.options.computed.isDark.call(e);return r.options.computed.themeClasses.call({isDark:n})}e["a"]=r},db92:function(t,e,n){},df86:function(t,e,n){},f4e5:function(t,e,n){"use strict";n("db92")}}]);
//# sourceMappingURL=chunk-6696f00c.7de7901c.js.map
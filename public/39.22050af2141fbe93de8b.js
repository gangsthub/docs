webpackJsonp([39],{1040:function(t,e,a){var s=a(988);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(458)("43c9c05b",s,!0)},1287:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire",standalone:""}},[a("v-tabs",{attrs:{grow:""},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[a("v-toolbar",{staticClass:"grey lighten-4",attrs:{light:""}},[a("v-toolbar-side-icon"),a("v-toolbar-title",[t._v("Page title")]),a("v-spacer"),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("search")])],1),a("v-btn",{attrs:{icon:""}},[a("v-icon",[t._v("more_vert")])],1)],1),a("v-tabs-bar",{staticClass:"grey lighten-4",slot:"activators"},[a("v-tabs-item",{attrs:{href:"#one"}},[t._v("Item One")]),a("v-tabs-item",{attrs:{href:"#two"}},[t._v("Item Two")]),a("v-tabs-item",{attrs:{href:"#three"}},[t._v("Item Three")]),a("v-tabs-slider")],1),t._l(["one","two","three"],function(t){return a("v-tabs-content",{key:t,attrs:{id:t}},[a("v-card",{attrs:{height:"200px",flat:""}})],1)})],2),a("v-fab-transition",[a("v-btn",{key:t.activeFab.icon,class:[t.activeFab.class],attrs:{dark:"",fab:"",fixed:"",bottom:"",left:""},model:{value:t.fab,callback:function(e){t.fab=e},expression:"fab"}},[a("v-icon",[t._v(t._s(t.activeFab.icon))]),a("v-icon",[t._v("close")])],1)],1)],1)},staticRenderFns:[]}},525:function(t,e,a){function s(t){a(1040)}var n=a(10)(a(792),a(1287),s,null,null);t.exports=n.exports},792:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{fab:!1,hidden:!1,tabs:null}},computed:{activeFab:function(){switch(this.tabs){case"one":return{class:"indigo",icon:"share"};case"two":return{class:"red",icon:"edit"};case"three":return{class:"green",icon:"keyboard_arrow_up"};default:return{}}}}}},988:function(t,e,a){e=t.exports=a(457)(void 0),e.push([t.i,"#inspire .btn--floating,#inspire .speed-dial{position:absolute}",""])}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20fb06"],{b563:function(t,e,c){"use strict";c.r(e);var a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("article",{staticClass:"page"},[c("head-title",{attrs:{type:"h2",title:"form / checkbox"}}),c("blockquote",[c("p",[c("strong",[t._v("\n\t\t\t\tcomponent: "),c("a",{attrs:{href:t.$store.state.url.github+"blob/master/src/components/forms/checkbox.vue",target:"_blank"}},[t._v("checkbox.vue")]),c("br"),t._v("\n\t\t\t\tscss: "),c("a",{attrs:{href:t.$store.state.url.github+"blob/master/src/components/forms/checkbox.scss",target:"_blank"}},[t._v("checkbox.scss")])])])]),c("p",[t._v("여러 항목들을 선택하는 컴포넌트 입니다.")]),c("section",[c("head-title",{attrs:{type:"h3",title:"basic"}}),c("p",[t._v("기본적인 형태로 사용합니다.")]),c("div",{staticClass:"example"},[c("div",{staticClass:"row row-v-center"},[c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"basic",label:"Apple"},model:{value:t.basic[0],callback:function(e){t.$set(t.basic,0,e)},expression:"basic[0]"}})],1),c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"basic",label:"Banana"},model:{value:t.basic[1],callback:function(e){t.$set(t.basic,1,e)},expression:"basic[1]"}})],1),c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"basic",label:"Mango"},model:{value:t.basic[2],callback:function(e){t.$set(t.basic,2,e)},expression:"basic[2]"}})],1)]),c("hr"),c("p",[t._v("Selected : "+t._s(t.basic))])]),t._m(0)],1),c("section",[c("head-title",{attrs:{type:"h3",title:"size"}}),c("p",[t._v("컴포넌트의 사이즈")]),c("div",{staticClass:"example"},[c("div",{staticClass:"row row-v-center"},[c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"size",size:"small",label:"Small"}})],1),c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"size",label:"Normal"}})],1),c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"size",size:"large",label:"Large"}})],1)])]),t._m(1)],1),c("section",[c("head-title",{attrs:{type:"h3",title:"color"}}),c("p",[t._v("컴포넌트의 컬러")]),c("div",{staticClass:"example"},[c("div",{staticClass:"row row-v-center"},[c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"color",label:"Normal"}})],1),c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"color",color:"sub",label:"Sub"}})],1),c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"color",color:"success",label:"Success"}})],1),c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"color",color:"error",label:"Error"}})],1)])]),t._m(2)],1),c("section",[c("head-title",{attrs:{type:"h3",title:"disabled"}}),c("p",[t._v("비활성화 되었을때의 모습입니다.")]),c("div",{staticClass:"example"},[c("form-checkbox",{attrs:{name:"disabled",label:"Disabled",disabled:!0}})],1),t._m(3)],1),c("section",[c("head-title",{attrs:{type:"h3",title:"animation"}}),c("p",[t._v("체크했을때의 애니메이션 방식")]),c("div",{staticClass:"example"},[c("div",{staticClass:"row row-v-center"},[c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"color",label:"Normal"}})],1),c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"color",animation:"elastic",label:"Elastic"}})],1),c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"color",animation:"none",label:"None"}})],1)])]),t._m(4)],1),c("section",[c("head-title",{attrs:{type:"h3",title:"Check all event"}}),c("p",[t._v("여러가지 체크박스를 모두 켜고 끌수 있습니다.")]),c("div",{staticClass:"example"},[c("div",{staticClass:"row row-v-center"},[c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"check_all",label:"Checkbox0"},model:{value:t.checkAll[0],callback:function(e){t.$set(t.checkAll,0,e)},expression:"checkAll[0]"}})],1),c("div",{staticClass:"col--auto"},[c("form-checkbox",{attrs:{name:"check_all",label:"Checkbox1"},model:{value:t.checkAll[1],callback:function(e){t.$set(t.checkAll,1,e)},expression:"checkAll[1]"}})],1)]),c("hr"),c("p",[t._v("checked: "+t._s(t.checkAll))]),c("hr"),c("nav",[c("button-basic",{attrs:{inline:!0},on:{click:function(e){return t.onClickCheckAll(!0)}}},[t._v("on check all")]),t._v("\n\t\t\t\t \n\t\t\t\t"),c("button-basic",{attrs:{inline:!0,color:"sub"},on:{click:function(e){return t.onClickCheckAll(!1)}}},[t._v("off check all")])],1)]),t._m(5)],1),c("section",[c("head-title",{attrs:{type:"h3",title:"Custom event"}}),t._m(6),c("div",{staticClass:"example"},[c("form-checkbox",{attrs:{name:"custom",label:"Custom checkbox",checked:t.custom},on:{change:t.onChangeCheckbox}}),c("p",[t._v("checked: "+t._s(t.custom))])],1),t._m(7)],1),t._m(8),c("section",[c("head-title",{attrs:{type:"h3",title:"props"}}),t._m(9),t._m(10)],1),c("section",[c("head-title",{attrs:{type:"h3",title:"event"}}),c("p",[t._v("컴포넌트에서 사용하는 이벤트")]),t._m(11)],1)],1)},s=[function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("pre",{staticClass:"example-code"},[c("code",[t._v('<form-checkbox v-model="checked" label="apple"/>')])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("pre",{staticClass:"example-code"},[c("code",[t._v('// small\n<form-checkbox size="small"/>\n\n// normal\n<form-checkbox/>\n\n// large\n<form-checkbox size="large"/>')])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("pre",{staticClass:"example-code"},[c("code",[t._v('// sub\n<form-checkbox color="sub"/>\n\n// success\n<form-checkbox color="success"/>\n\n// error\n<form-checkbox color="error"/>')])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("pre",{staticClass:"example-code"},[c("code",[t._v('<form-checkbox :disabled="true"/>')])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("pre",{staticClass:"example-code"},[c("code",[t._v('// elastic\n<form-checkbox animation="elastic"/>\n\n// none\n<form-checkbox animation="none"/>')])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("pre",{staticClass:"example-code"},[c("code",[t._v('// data\n{ checkAll: [false, false] }\n\n// components\n<form-checkbox v-model="checkAll[0]" label="Checkbox0"/>\n<form-checkbox v-model="checkAll[1]" label="Checkbox1"/>\n\n// buttons\n<button @click="event(true)">on check all</button>\n<button @click="event(false)">off check all</button>\n\n// button method\nevent(sw)\n{\n\tswitch(sw)\n\t{\n\t\tcase true:\n\t\t\tthis.checkAll = [true, true];\n\t\t\tbreak;\n\t\tcase false:\n\t\t\tthis.checkAll = [false, false];\n\t\t\tbreak;\n\t}\n}')])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("p",[t._v("이 컴포넌트는 기본적으로 "),c("code",[t._v("v-model")]),t._v("을 사용하지만 직접 컨트롤 할 수 있습니다.")])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("pre",{staticClass:"example-code"},[c("code",[t._v('// data\n{ custom: false }\n\n// component\n<form-checkbox :checked="custom" @change="event"/>\n\n// event method\nevent(sw, event)\n{\n\tthis.custom = sw;\n}')])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("p",[t._v("\n\t\t// TODO: 체크된 value 값 가져오기 작성예정."),c("br"),t._v("\n\t\t// TODO: "),c("code",[t._v("name=foo[]")]),t._v(" 형식으로도 시도해볼 필요가 있음"),c("br"),t._v("\n\t\t// TODO: https://github.com/redgoose-dev/vue-resource/issues/7\n\t")])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("p",[t._v("이 컴포넌트는 다음과 같은 "),c("code",[t._v("props")]),t._v("를 사용합니다.")])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("table",{staticClass:"table table--center table--bordered"},[c("thead",[c("tr",[c("th",[t._v("Name")]),c("th",[t._v("Type")]),c("th",[t._v("Comment")])])]),c("tbody",[c("tr",[c("td",[t._v("name")]),c("td",[t._v("String")]),c("td",{staticClass:"typo-align--left"},[c("code",[t._v("name")]),t._v(" attribute 로 사용")])]),c("tr",[c("td",[t._v("id")]),c("td",[t._v("String")]),c("td",{staticClass:"typo-align--left"},[c("code",[t._v("id")]),t._v(" attribute 로 사용")])]),c("tr",[c("td",[t._v("label")]),c("td",[t._v("String")]),c("td",{staticClass:"typo-align--left"},[t._v("항목에 표시되는 이름입니다. 값이 없으면 라디오 폼만 나타납니다.")])]),c("tr",[c("td",[t._v("value")]),c("td",[t._v("String,Number,Boolean")]),c("td",{staticClass:"typo-align--left"},[c("code",[t._v("value")]),t._v(" attribute 로 사용")])]),c("tr",[c("td",[t._v("checked")]),c("td",[t._v("String,Boolean")]),c("td",{staticClass:"typo-align--left"},[t._v("체크되어있는지의 여부")])]),c("tr",[c("td",[t._v("disabled")]),c("td",[t._v("Boolean")]),c("td",{staticClass:"typo-align--left"},[t._v("비활성화")])]),c("tr",[c("td",[t._v("required")]),c("td",[t._v("Boolean")]),c("td",{staticClass:"typo-align--left"},[t._v("필수값인지에 대한 여부")])]),c("tr",[c("td",[t._v("color")]),c("td",[t._v("String")]),c("td",{staticClass:"typo-align--left"},[t._v("컴포넌트의 색상 "),c("code",[t._v("sub,success,error")])])]),c("tr",[c("td",[t._v("size")]),c("td",[t._v("String")]),c("td",{staticClass:"typo-align--left"},[t._v("컴포넌트의 사이즈 "),c("code",[t._v("small,large")])])]),c("tr",[c("td",[t._v("animation")]),c("td",[t._v("String")]),c("td",{staticClass:"typo-align--left"},[t._v("체크할때의 애니메이션 방식 "),c("code",[t._v("elastic,none")])])])])])},function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("table",{staticClass:"table table--center table--bordered"},[c("thead",[c("tr",[c("th",[t._v("name")]),c("th",[t._v("params")]),c("th",[t._v("comment")])])]),c("tbody",[c("tr",[c("td",[t._v("@change")]),c("td",[c("code",[t._v("sw,event")])]),c("td",{staticClass:"typo-align--left"},[t._v("체크박스의 상태가 변했을때 이벤트 발생")])])])])}],l={name:"page",components:{"form-checkbox":function(){return c.e("chunk-4dd34028").then(c.bind(null,"b1f4"))},"head-title":function(){return c.e("chunk-44a2e62e").then(c.bind(null,"0e12"))},"button-basic":function(){return c.e("chunk-15774cf7").then(c.bind(null,"fea2"))}},data:function(){return{basic:[!0,!1,!1],checkAll:[!1,!1],custom:!1}},methods:{onClickCheckAll:function(t){switch(t){case!0:this.checkAll=[!0,!0];break;case!1:this.checkAll=[!1,!1];break}},onChangeCheckbox:function(t,e){this.custom=t}}},o=l,n=c("2877"),r=Object(n["a"])(o,a,s,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d20fb06.4cc7b57c.js.map
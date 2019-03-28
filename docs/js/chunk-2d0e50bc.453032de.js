(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e50bc"],{"938d":function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"page"},[s("head-title",{attrs:{type:"h2",title:"forms"}}),t._m(0),t._m(1),s("p",[t._v("프로젝트에 따라 많은 조정이 필요한 부분이므로 스타일시트로만 만들어 사용하는것이 좋아 보입니다.")]),t._m(2),s("section",[s("head-title",{attrs:{type:"h3",title:"demo"}}),t._m(3),s("div",{staticClass:"example"},[s("form",{attrs:{action:"#"}},[s("fieldset",{staticClass:"forms-fieldset"},[s("legend",[t._v("입력 폼 그룹")]),s("div",{staticClass:"forms-field"},[s("div",{staticClass:"row row-v-center"},[t._m(4),s("div",{staticClass:"col-12 col-sm"},[s("form-text",{attrs:{type:"email",id:"example1",placeholder:"please input text"}})],1)])]),s("div",{staticClass:"forms-field"},[s("div",{staticClass:"row row-v-center"},[t._m(5),s("div",{staticClass:"col-12 col-sm"},[s("form-text",{attrs:{type:"password",id:"example2",placeholder:"please input text"}}),s("p",{staticClass:"forms-help"},[t._v("forms-help message")])],1)])])])])])],1),s("section",[s("head-title",{attrs:{type:"h3",title:"forms-fieldset"}}),t._m(6),t._m(7)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"forms-field"}}),s("p",[t._v("\n\t\t\t글을 작성하는 폼 항목 하나를 표현할때 사용한다. 폼과 레이블, 도움말 메시지의 조합으로 이루어집니다.\n\t\t")]),t._m(8)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"forms-label"}}),s("p",[t._v("\n\t\t\t폼을 설명하거나 이름이 되는 레이블에 대한 스타일이다. 통일된 레이블 스타일을 위하여 사용합니다.\n\t\t")]),t._m(9),s("head-title",{attrs:{type:"h3",title:"forms-help"}}),t._m(10),t._m(11),t._m(12)],1),s("section",[s("head-title",{attrs:{type:"h3",title:"Form components"}}),s("p",[t._v("다음은 입력폼에서 사용하는 컴포넌트들입니다.")]),s("ul",[s("li",[s("router-link",{attrs:{to:"/components/form/text"}},[t._v("text")])],1),s("li",[s("router-link",{attrs:{to:"/components/form/select"}},[t._v("select")])],1),s("li",[s("router-link",{attrs:{to:"/components/form/radio"}},[t._v("radio")])],1),s("li",[s("router-link",{attrs:{to:"/components/form/checkbox"}},[t._v("checkbox")])],1),s("li",[s("router-link",{attrs:{to:"/components/form/switch"}},[t._v("switch")])],1)])],1)],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("p",[s("strong",[t._v("Source: "),s("a",{attrs:{href:"https://github.com/redgoose-dev/vue-redgoose-source/blob/master/src/css/forms.scss",target:"_blank"}},[t._v("forms.scss")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("code",[t._v("forms.scss")]),t._v(" 파일에 들어있는 스타일시트들은 폼 관련 컴포넌트들을 그루핑하거나 보조하는 스타일들을 작성해서 관리합니다."),s("br"),t._v("\n\t\t예를들어 "),s("code",[t._v("폼 항목의 필드, 필드셋, 폼에대한 도움말 및 오류 메시지..")]),t._v(" 같은 부분들에서 사용하는 스타일시트를 만들어 사용합니다.\n\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("현재 파일에서는 다른 클래스와의 이름 구분을 위하여 "),s("code",[t._v(".forms-")]),t._v("이라는 프리픽스를 사용합니다.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n\t\t\t다음 예제는 `forms`에서 사용되는 클래스와 각 폼 컴포넌트들을 조합할때의 모습입니다."),s("br"),t._v("\n\t\t\t이 예제는 데모를 위하여 약간 수정한것 뿐이고, 프로젝트에서 사용할 스타일을 상황에 맞게 고쳐야 할것입니다.\n\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-sm-3"},[s("label",{staticClass:"forms-label",attrs:{for:"example1"}},[t._v("E-Mail")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12 col-sm-3"},[s("label",{staticClass:"forms-label",attrs:{for:"example2"}},[t._v("Password")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n\t\t\t필드의 그룹이 되는 엘리먼트인 "),s("code",[t._v("fieldset")]),t._v("에서 사용한다. 글 작성폼에서 하나의 섹션이라고 볼 수 있습니다."),s("br"),t._v("\n\t\t\t`fieldset` 엘리먼트의 기본 스타일을 삭제하고 그 하위의 legend 엘리먼트를 안보이게 하는 역할을 합니다.\n\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",[s("code",[t._v('<fieldset class="forms-fieldset">\n\t<legend>필수입력항목 작성 폼</legend>\n\t<div>\n\t\t<div class="forms-field">..</div>\n\t\t<div class="forms-field">..</div>\n\t</div>\n</fieldset>')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",[s("code",[t._v('<div class="forms-field">\n\t<div class="row">\n\t\t<div class="col-3">\n\t\t\t<label for="example">Label name</label>\n\t\t</div>\n\t\t<div class="col">\n\t\t\t<input type="text"/>\n\t\t</div>\n\t</div>\n</div>')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",[s("code",[t._v('<label for="example">Label name</label>')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n\t\t\t현재 필드를 설명하는 텍스트 스타일입니다."),s("br"),t._v("\n\t\t\t필드가 오류났거나 다른 상태에 대한 메시지를 표현하기도 합니다.\n\t\t")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"example"},[s("p",{staticClass:"forms-help"},[t._v("help message - basic")]),s("p",{staticClass:"forms-help forms-help--success"},[t._v("help message - success")]),s("p",{staticClass:"forms-help forms-help--error"},[t._v("help message - error")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pre",{staticClass:"example-code"},[s("code",[t._v('<p class="forms-help">help message - basic</p>\n<p class="forms-help forms-help--success">help message - success</p>\n<p class="forms-help forms-help--error">help message - error</p>')])])}],a={name:"page",components:{"head-title":function(){return s.e("chunk-21c0dd8c").then(s.bind(null,"0e12"))},"form-text":function(){return s.e("chunk-36ae2497").then(s.bind(null,"27b8"))},"button-basic":function(){return s.e("chunk-08587633").then(s.bind(null,"fea2"))}}},n=a,c=s("2877"),o=Object(c["a"])(n,l,r,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0e50bc.453032de.js.map
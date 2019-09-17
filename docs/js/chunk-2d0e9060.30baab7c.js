(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9060"],{"8c87":function(t,s,e){"use strict";e.r(s);var c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("article",{staticClass:"page"},[e("head-title",{attrs:{type:"h2",title:"grid"}}),e("blockquote",[e("p",[e("strong",[t._v("Source: "),e("a",{attrs:{href:t.$store.state.url.github+"blob/master/src/css/grid.scss",target:"_blank"}},[t._v("grid.scss")])])])]),t._m(0),t._m(1),e("section",[e("head-title",{attrs:{type:"h3",title:"basic"}}),e("p",[t._v("기초적인 사용법은 다음과 같습니다.")]),t._m(2),t._m(3),e("p",[t._v("만약 여러가지 속성을 같이 사용하고 싶다면 멀티클래스 형식으로 작성해줍니다.")]),t._m(4)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"size"}}),t._m(5),t._m(6),t._m(7),e("head-title",{attrs:{type:"h4",title:"반응형 레이아웃에 대한 컬럼 사이즈 표"}}),t._m(8),t._m(9),e("p",[t._v("반응형 사이즈를 참고하여 다음과 같이 스크린 사이즈가 변함에 따라 컬럼 사이즈를 변경할 수 있습니다.")]),t._m(10),t._m(11)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"none size"}}),e("p",[t._v("특정 스크린 사이즈에 따라 컬럼의 고정된 사이즈를 가변사이즈로 변경합니다.")]),t._m(12),t._m(13)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"gutter"}}),e("p",[t._v("\n\t\t\t컬럼 사이의 가로 여백을 넣을 수 있습니다."),e("br"),t._v("\n\t\t\t간격 사이즈의 한 컬럼 사이즈는 "),e("a",{attrs:{href:t.$store.state.url.github+"blob/master/src/css/variables.scss",target:"_blank"}},[t._v("variables.scss")]),t._v(" 파일에 있는 "),e("code",[t._v("$size-grid-col-gutter")]),t._v(" 값에서 변경할 수 있습니다.\n\t\t")]),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),e("p",[t._v("가로나 세로 한쪽 축으로만 여백을 넣을 수 있습니다.")])],1),e("section",[e("head-title",{attrs:{type:"h3",title:"alignment vertical"}}),t._m(20),t._m(21),t._m(22)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"alignment horizontal"}}),t._m(23),t._m(24),t._m(25)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"order"}}),t._m(26),t._m(27),t._m(28)],1),e("section",[e("head-title",{attrs:{type:"h3",title:"wrapper"}}),t._m(29),t._m(30),t._m(31)],1)],1)},l=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("\n\t\t그리드 레이아웃 시스템에 대한 스타일시트."),e("br"),t._v("\n\t\t이 그리드의 컬럼은 총 12개로 되어있으며 "),e("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox의_기본_개념",target:"_blank"}},[t._v("`Flexbox`의 기본 개념")]),t._v("을 이용하여 그리드 레이아웃을 만들고 있습니다.\n\t")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("\n\t\t레이아웃을 만들때 자주 사용되고 반응형 레이아웃을 만들떄 유용하게 사용할 수 있습니다."),e("br"),t._v("\n\t\t무엇보다 중요한것은 미리 정해져있는 룰을 사용한 스타일시트를 사용하기 때문에 통일되고 규칙에 맞는 스타일 레이아웃을 유지할 수 있다는 점에서 사용하는데 의미가 크다고 봅니다.\n\t")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"example"},[e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("span",[t._v("col")])]),e("div",{staticClass:"col"},[e("span",[t._v("col")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<div class="row">\n\t<div class="col">col</div>\n\t<div class="col">col</div>\n</div>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",[t._v('<div class="row row-gutter row-v-center"/>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("\n\t\t\t기본 컬럼을 넣는다면 일정한 비율로 사이즈 조절이 되지만 총 사이즈를 나눈 수치를 클래스 이름으로 넣는다면 총 가로영역에서 등분된 사이즈로 컬럼이 표시됩니다."),e("br"),t._v("\n\t\t\t예제를 보는것이 이해하는데 도움이 될것입니다.\n\t\t")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"example"},[e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col col-4"},[e("span",[t._v("col col-4")])]),e("div",{staticClass:"col col-4"},[e("span",[t._v("col col-4")])]),e("div",{staticClass:"col col-4"},[e("span",[t._v("col col-4")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<div class="row">\n\t<div class="col col-4">col</div>\n\t<div class="col col-4">col</div>\n\t<div class="col col-4">col</div>\n</div>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("\n\t\t\t다음 표는 스크린 사이즈의 조건에 맞으면 컬럼의 사이즈가 변하게 됩니다. "),e("b",[t._v("참고로 모바일 퍼스트 기준이며 반응형 사이즈 기준에 따라 달라집니다.")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",{staticClass:"table table--center table--bordered"},[e("caption",[t._v("Size table")]),e("thead",[e("tr",[e("th",[t._v("Mobile")]),e("th",[t._v("Tablet")]),e("th",[t._v("Desktop")]),e("th",[t._v("Desktop large")]),e("th",[t._v("Desktop extra")])])]),e("tbody",[e("tr",[e("td",[t._v("none")]),e("td",[t._v(".col-sm-")]),e("td",[t._v(".col-md-")]),e("td",[t._v(".col-lg-")]),e("td",[t._v(".col-xl-")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"example"},[e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("span",[t._v("col")])]),e("div",{staticClass:"col-8 col-lg-2"},[e("span",[t._v("col-8 col-lg-2")])]),e("div",{staticClass:"col"},[e("span",[t._v("col")])])])]),e("hr"),e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-4 col-md-2"},[e("span",[t._v("col-4 col-md-2")])]),e("div",{staticClass:"col-4 col-md-8"},[e("span",[t._v("col-4 col-md-8")])]),e("div",{staticClass:"col-4 col-md-2"},[e("span",[t._v("col-4 col-md-2")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<div class="row">\n\t<div class="col">col</div>\n\t<div class="col-8 col-lg-2">col</div>\n\t<div class="col">col</div>\n</div>\n\n<div class="row">\n\t<div class="col-4 col-md-2">col</div>\n\t<div class="col-4 col-md-8">col</div>\n\t<div class="col-4 col-md-2">col</div>\n</div>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"example"},[e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("span",[t._v("col")])]),e("div",{staticClass:"col-auto"},[e("span",[t._v("col-auto")])]),e("div",{staticClass:"col col-md-auto"},[e("span",[t._v("col col-md-auto")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<div class="row">\n\t<div class="col">col</div>\n\t<div class="col-auto">col-auto</div>\n\t<div class="col col-md-auto">col col-md-auto</div>\n</div>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"example"},[e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-gutter"},[e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])]),e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])]),e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])]),e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<div class="row row-gutter">\n\t<div class="col col-6">col-6</div>\n\t<div class="col col-6">col-6</div>\n\t<div class="col col-6">col-6</div>\n\t<div class="col col-6">col-6</div>\n</div>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("\n\t\t\t기본적으로 사용하면 위와같이 가로,세로축의 여백이 생깁니다."),e("br"),t._v("\n\t\t\t컬럼 엘리먼트에서 padding 값을 임의로 조정하고 있기 때문에 대략적으로 다음과 같은 형태로 컬럼속에 엘리먼트 하나를 감싼 상태에서 무언가를 넣는것을 권장합니다.\n\t\t")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",[t._v('<div class="col">\n\t<span>content</span>\n</div>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"example"},[e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-gutter-h"},[e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])]),e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])]),e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])]),e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])])])]),e("hr"),e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-gutter-v"},[e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])]),e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])]),e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])]),e("div",{staticClass:"col col-6"},[e("span",[t._v("col-6")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<div class="row row-gutter-h">\n\t<div class="col col-6">col-6</div>\n\t<div class="col col-6">col-6</div>\n\t<div class="col col-6">col-6</div>\n\t<div class="col col-6">col-6</div>\n</div>\n\n<div class="row row-gutter-v">\n\t<div class="col col-6">col-6</div>\n\t<div class="col col-6">col-6</div>\n\t<div class="col col-6">col-6</div>\n\t<div class="col col-6">col-6</div>\n</div>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("row")]),t._v(" 높이가 특정 사이즈로 설정되어있다면 높이의 기준으로 정렬합니다. "),e("code",[t._v("align-items")]),t._v(" 속성을 이용합니다.\n\t\t")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"example"},[e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-v-start fixed-v"},[e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])])])]),e("hr"),e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-v-center fixed-v"},[e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])])])]),e("hr"),e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-v-end fixed-v"},[e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<div class="row row-v-start"/>\n<div class="row row-v-center"/>\n<div class="row row-v-end"/>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("컬럼들을 가로를 기준으로 정렬하며 "),e("code",[t._v("justify-context")]),t._v(" 속성을 이용합니다.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"example"},[e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-h-start fixed-h"},[e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])])])]),e("hr"),e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-h-center fixed-h"},[e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])])])]),e("hr"),e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-h-end fixed-h"},[e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])])])]),e("hr"),e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-h-around fixed-h"},[e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])])])]),e("hr"),e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-h-between fixed-h"},[e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])]),e("div",[e("span",[t._v("item")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<div class="row row-h-start"/>\n<div class="row row-h-center"/>\n<div class="row row-h-end"/>\n<div class="row row-h-around"/>\n<div class="row row-h-between"/>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("\n\t\t\t컬럼의 순서를 변경할때 사용됩니다. 여기서 추가로 반응형으로 스크린 사이즈에 따라 순서를 바꿀 수 있습니다."),e("br"),t._v("\n\t\t\t최대 12까지 지정할 수 있으며 더 높은숫자나 특별한 숫자를 사용하고 싶다면 직접 스타일을 넣으세요.\n\t\t")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"example"},[e("div",{staticClass:"example-grid"},[e("div",{staticClass:"row row-gutter"},[e("div",{staticClass:"col order-1 order-md-2"},[e("span",[t._v("order-1 order-md-2")])]),e("div",{staticClass:"col order-2 order-md-1"},[e("span",[t._v("order-2 order-md-1")])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<div class="row row-gutter">\n\t<div class="order-1 order-md-2">col</div>\n\t<div class="order-2 order-md-1">col</div>\n</div>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v(".row-gutter")]),t._v("가 적용된 그리드 레이아웃을 감싸기 위한 용도로 만들어졌습니다. "),e("code",[t._v(".row-gutter")]),t._v("를 적용하면 사이드가 돌출되는 부분을 "),e("code",[t._v("overflow: hidden;")]),t._v("속성을 가리기 위한 용도로 사용할 수 있습니다.\n\t\t")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{staticClass:"example-code"},[e("code",[t._v('<div class="row-wrap">\n\t<div class="col"></div>\n</div>')])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("\n\t\t\t만약 "),e("code",[t._v(".row-wrap")]),t._v(" 엘리먼트의 영역을 벗어나는 자식 요소가 있다면 "),e("code",[t._v("overflow: hidden;")]),t._v(" 속성 때문에 요소가 잘려서 안보이기 때문에 "),e("code",[t._v(".row-wrap")]),t._v(" 클래스를 사용하지 않는것을 권장드립니다.\n\t\t")])}],a={name:"page",components:{"head-title":function(){return e.e("chunk-44a2e62e").then(e.bind(null,"0e12"))}}},i=a,o=e("2877"),r=Object(o["a"])(i,c,l,!1,null,null,null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0e9060.30baab7c.js.map
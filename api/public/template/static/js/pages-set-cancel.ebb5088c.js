(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-cancel"],{"0e74":function(t,n,e){var i=e("3fc6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("c0e31f42",i,!0,{sourceMap:!1,shadowMode:!1})},"3c80":function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return i}));var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"text-xl padding text-center text-bold"},[t._v("请确认您的账号是否满足以下注销条件")]),e("v-uni-view",{staticClass:"padding solid-bottom"},[e("v-uni-view",{staticClass:"text-lg padding-bottom"},[t._v("账号处于安全状态")]),e("v-uni-view",{staticClass:"text-sm"},[t._v("账号处于正常状态，没有被封号等账户限制。")])],1),e("v-uni-view",{staticClass:"padding solid-bottom"},[e("v-uni-view",{staticClass:"text-lg padding-bottom"},[t._v("账号无进行中的任何纠纷")]),e("v-uni-view",{staticClass:"text-sm"},[t._v("本账号无任何账号纠纷，包括投诉、举报或被投诉、被举报等。")])],1),e("v-uni-view",{staticClass:"padding"},[e("v-uni-view",{staticClass:"text-lg padding-bottom"},[t._v("账号无未完成的业务")]),e("v-uni-view",{staticClass:"text-sm"},[t._v("没有正在进行中，或者尚未确认完成的交易。")])],1),e("v-uni-view",{staticClass:"text-center sub"},[e("v-uni-view",{staticClass:"text-sm",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.agree=!t.agree}}},[e("span",{staticClass:"lg padding-right-xs",class:t.agree?"cuIcon-roundcheckfill text-red":"text-gray cuIcon-round"}),t._v("我已阅读并知晓了"),e("span",{staticClass:"text-red",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navTo("/pages/article/details?list=0&id=3")}}},[t._v("《账号注册须知》")])]),e("v-uni-button",{staticClass:"cu-btn round bg-red margin-top",attrs:{disabled:!t.agree},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.cancel()}}},[t._v("确认申请")])],1)],1)},s=[]},"3d1b":function(t,n,e){"use strict";e.r(n);var i=e("3c80"),a=e("5a4a2");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("eb99");var o,c=e("f0c5"),u=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"128f2664",null,!1,i["a"],o);n["default"]=u.exports},"3fc6":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 页面左右间距 */\n/* 文字尺寸 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 边框颜色 */uni-page-body[data-v-128f2664]{background:#fff}.sub[data-v-128f2664]{position:absolute;bottom:%?100?%;width:100%}body.?%PAGE?%[data-v-128f2664]{background:#fff}',""]),t.exports=n},"5a4a2":function(t,n,e){"use strict";e.r(n);var i=e("8616"),a=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},8616:function(t,n,e){"use strict";e("7a82");var i=e("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("f3f3")),s=i(e("c24f")),o=e("26cb"),c={data:function(){return{agree:!1}},onShow:function(){this.loginCheck()},methods:(0,a.default)((0,a.default)({},(0,o.mapMutations)(["loginCheck"])),{},{navTo:function(t){uni.navigateTo({url:t})},cancel:function(){var t=this;s.default.cancel({},(function(n){t.logout(),t.$api.msg("账号已成功注销"),setTimeout((function(){uni.switchTab({url:"/pages/index/index"})}),1e3)}))}})};n.default=c},c24f:function(t,n,e){"use strict";e("7a82");var i=e("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(e("c290")),s={detail:function(t,n){a.default.setGetMessage("user",{},"加载中",(function(n){t(n)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},edit:function(t,n,e){a.default.setPost("user",t,(function(t){n(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},notification:function(t,n,e){a.default.setPost("user/notification",t,(function(t){n(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))},cancel:function(t,n,e){a.default.setPost("cancel",t,(function(t){n(t)}),(function(t){uni.showToast({title:t.message,icon:"none",duration:2e3})}))}};n.default=s},eb99:function(t,n,e){"use strict";var i=e("0e74"),a=e.n(i);a.a}}]);
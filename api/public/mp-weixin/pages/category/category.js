(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/category/category"],{"16d1":function(t,i,e){"use strict";var n=e("55b4"),r=e.n(n);r.a},"1e92":function(t,i,e){"use strict";e.r(i);var n=e("2cd5"),r=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=r.a},"2cd5":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=s(e("a34a")),r=s(e("1580"));function s(t){return t&&t.__esModule?t:{default:t}}function o(t,i,e,n,r,s,o){try{var a=t[s](o),c=a.value}catch(l){return void e(l)}a.done?i(c):Promise.resolve(c).then(n,r)}function a(t){return function(){var i=this,e=arguments;return new Promise((function(n,r){var s=t.apply(i,e);function a(t){o(s,n,r,a,c,"next",t)}function c(t){o(s,n,r,a,c,"throw",t)}a(void 0)}))}}var c={data:function(){return{sizeCalcState:!1,tabScrollTop:0,currentId:49,flist:[],slist:[],tlist:[],tap:0}},onLoad:function(){this.loadData()},methods:{loadData:function(){var t=this;return a(n.default.mark((function i(){var e;return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e=t,i.next=3,r.default.goodCategory({},(function(t){t.forEach((function(t){t.pid?t.resources?e.tlist.push(t):e.slist.push(t):e.flist.push(t)})),setTimeout((function(){e.sizeCalcState||e.calcSize()}),1)}));case 3:case"end":return i.stop()}}),i)})))()},tabtap:function(t){if(this.sizeCalcState||this.calcSize(),this.tap=1,this.currentId=t.id,this.slist.length>0){var i=this.slist.findIndex((function(i){return i.pid===t.id}));this.tabScrollTop===this.slist[i].top?this.tabScrollTop=this.slist[i].top+1:this.tabScrollTop=this.slist[i].top}else{var e=this.flist.findIndex((function(i){return i.id===t.id}));this.tabScrollTop===this.flist[e].top?this.tabScrollTop=this.flist[e].top+1:this.tabScrollTop=this.flist[e].top}},asideScroll:function(t){this.sizeCalcState||this.calcSize();var i=t.detail.scrollTop,e=null;this.slist.length>0?(e=this.slist.filter((function(t){return t.top<=i})).reverse(),e.length>0&&!this.tap&&(this.currentId=e[0].pid)):(e=this.flist.filter((function(t){return t.top<=i})).reverse(),e.length>0&&!this.tap&&(this.currentId=e[0].id)),this.tap=0},calcSize:function(){var i=this,e=0;this.slist.length>0?this.slist.forEach((function(i){var n=t.createSelectorQuery().select("#main-"+i.id);n.fields({size:!0},(function(t){i.top=e,e+=t.height,i.bottom=e})).exec()})):this.flist.forEach((function(n){var r=t.createSelectorQuery().select("#main-"+n.id);r.fields({size:!0},(function(t){0===e&&(i.currentId=n.id),n.top=e,e+=t.height,n.bottom=e})).exec()})),this.sizeCalcState=!0},navToList:function(i,e){t.navigateTo({url:"/pages/product/list?fid=".concat(this.currentId,"&sid=").concat(i,"&tid=").concat(e)})}}};i.default=c}).call(this,e("543d")["default"])},"55b4":function(t,i,e){},"65f6":function(t,i,e){"use strict";var n;e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return s})),e.d(i,"a",(function(){return n}));var r=function(){var t=this,i=t.$createElement,e=(t._self._c,t.slist.length>0?t.__map(t.slist,(function(i,e){var n=t.__get_orig(i),r=t.__map(t.tlist,(function(e,n){var r=t.__get_orig(e),s=e.pid===i.id?t._f("smallImage")(e.resources.img,80):null;return{$orig:r,f0:s}}));return{$orig:n,l0:r}})):null),n=t.slist.length>0?null:t.__map(t.flist,(function(i,e){var n=t.__get_orig(i),r=t.__map(t.tlist,(function(e,n){var r=t.__get_orig(e),s=e.pid===i.id?t._f("smallImage")(e.resources.img,80):null;return{$orig:r,f1:s}}));return{$orig:n,l2:r}}));t.$mp.data=Object.assign({},{$root:{l1:e,l3:n}})},s=[]},ad91:function(t,i,e){"use strict";(function(t){e("18f9");n(e("66fd"));var i=n(e("cc2e"));function n(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("543d")["createPage"])},cc2e:function(t,i,e){"use strict";e.r(i);var n=e("65f6"),r=e("1e92");for(var s in r)"default"!==s&&function(t){e.d(i,t,(function(){return r[t]}))}(s);e("16d1");var o,a=e("f0c5"),c=Object(a["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);i["default"]=c.exports}},[["ad91","common/runtime","common/vendor"]]]);
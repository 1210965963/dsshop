(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{614:function(t,n,e){"use strict";e.r(n);var o=e(17),r=e(7),c=(e(36),e(13),e(24),e(30),e(18),e(291),e(192),e(124));n.default={layout:"user",head:function(){return{title:"订单详情-个人中心"}},data:function(){return{loading:!0,buttonLoading:!1,total:0,indent:{}}},mounted:function(){this.getDetail()},methods:{getDetail:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if($nuxt.$route.query.id){n.next=4;break}return t.$message({message:"参数有误，请联系管理员",type:"error"}),$nuxt.$router.go(-1),n.abrupt("return",!1);case 4:return n.next=6,Promise.all([Object(c.e)($nuxt.$route.query.id)]).then((function(n){var e=Object(o.a)(n,1)[0];t.indent=e,t.total=0;var r=null;t.indent.goods_list.forEach((function(n){t.total+=n.price*n.number,n.good_sku&&(r=null,n.good_sku.product_sku.forEach((function(t){r?r+=t.value+";":r=t.value+";"})),n.specification=r.substr(0,r.length-1))})),t.total=Number(t.total.toFixed(2)),t.loading=!1})).catch((function(n){t.loading=!1}));case 6:case"end":return n.stop()}}),n)})))()},confirmReceipt:function(){var t=this;this.$confirm("是否确认收货？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){t.buttonLoading=!0,Object(c.i)(t.indent.id).then((function(n){t.buttonLoading=!1,t.$message({message:"操作成功",type:"success"}),t.getDetail()})).catch((function(){t.buttonLoading=!1}))})).catch((function(){}))},goBack:function(){$nuxt.$router.go(-1)}}}}}]);
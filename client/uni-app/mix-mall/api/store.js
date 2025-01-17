/** +----------------------------------------------------------------------
 * | DSSHOP [ 轻量级易扩展低代码开源商城系统 ]
 * +----------------------------------------------------------------------
 * | Copyright (c) 2020~2023 https://www.dswjcms.com All rights reserved.
 * +----------------------------------------------------------------------
 * | Licensed 未经许可不能去掉DSSHOP相关版权
 * +----------------------------------------------------------------------
 * | Author: Purl <383354826@qq.com>
 * +----------------------------------------------------------------------
 */
import Network from '../utils/network.js'
import i18n from '@/utils/lang/index'
export default {
    edit(data,success,fail) {
    	Network.setPostMessage('store',data,i18n.t('common.processing'), function (res) {
    	  success(res)
    	}, function (res) {
    	  uni.showToast({
    		title: res.message,
    		icon: 'none',
    		duration: 2000
    	  })
    	})
    },
	getDetails(data,success,fail) {
		Network.setGetMessage('store',{},i18n.t('common.loading'), function (res) {
		  success(res)
		}, function (res) {
		  uni.showToast({
			title: res.message,
			icon: 'none',
			duration: 2000
		  })
		})
	},
};

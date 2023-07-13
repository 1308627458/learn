import baseUrl from '@/utils/index.js'

// 项目首页的接口
export const apiGetBanner = (data) => {
	return uni.request({
		url: baseUrl + '/banner',
		method: 'GET',
		data:data,
		authType:'None'
	})
}	
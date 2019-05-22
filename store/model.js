const model = {
	//读取全局变量
	APP(state, provider) {
		state.app = provider;
	},
	//保存全局变量
	SET(state, provider) {
		state.app[provider.key] = provider.value;
		uni.setStorage({key: 'app',data: state.app,success: (res) => {}})
	},
	//跳转一个页面
	TO(s,d) {
		if (d.url.match(RegExp(/http/))) {
			uni.navigateTo({
				url: "/pages/common/webview?url=" + d.url
			})
		} else {
			if(d.t){
				setTimeout(function() {uni.navigateTo({d})}, 2000);
			}else{
				uni.navigateTo({url:d.url})
			}
		}
	},
	//发送一个请求
	S(s,d) {
		var t = this;
		uni.request({
			url: s.server.url + d.url,
			data: d.data,
			method: "POST",
			header: {
				"token": s.app.Token
			},
			dataType: "json",
			success: (res) => {
				d.callback(res);
			}
		});
	},
	//上传文件d
	U(s,d) {
		uni.uploadFile({
			url: s.server.url + d.url, //仅为示例，非真实的接口地址
			filePath: d.file,
			name: 'files',
			header: {
				"token": s.app.Token
			},
			formData: d.formData,
			success: (res) => {
				d.callback(res);
			}
		});
	},
	//登录系统
	IN(s,d){
		this.commit("SET", {key: "User",value: d})
	},
	//退出系统
	OUT(s,d){
		this.commit("SET", {key: "User",value: ''})
	},
}
export default model

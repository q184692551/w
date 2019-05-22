<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="url"></web-view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		components:{},
		computed: {...mapState(['inter','app'])},
		data() {
			return {
				url:"",
				webviewStyles: {
                    progress: {
                        color: '#FF3333'
                    }
                }
			}
		},
		onLoad(e) {
			if(e.url){
				this.url=e.url;
			}
		},
		methods: {
			...mapMutations(['S','SET','TO']),
		}
	}
</script>

<style lang="scss">
	
</style>

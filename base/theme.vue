<template>
	<view>
		
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
			}
		},
		onLoad() {

		},
		methods: {
			...mapMutations(['S','SET','TO','BACK']),
		}
	}
</script>

<style lang="scss">
	
</style>

<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navHolder position-fixed fixed-top text-center title-text">
			<text class="iconfont float-left indentNav font-weight" @tap="navBack">&#xe60c;</text>
			<text class="font-weight">课程分类</text>
		</view>
		<view class="selectTitle text-center head-top">
			<text>请选择你喜欢的课程</text>
		</view>
		<view class="options">
			<view class="optionsItem vertical-center" :class="optionsIdx==idx?'optionsActive':''" v-for="(item,idx) in options" :key="idx" @tap="Select(idx)">				
				<image :src="item.selectSrc" class="optionImg" v-if="optionsIdx==idx" mode=""></image>
				<image :src="item.src" class="optionImg" v-else mode=""></image>
				<text :class="">{{item.text}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				options:[
					{src:'http://q4yqddmn6.bkt.clouddn.com/yujia-n.png',text:'全身塑形瑜伽',selectSrc:'http://q4yqddmn6.bkt.clouddn.com/yujia.png'},
					{src:'http://q4yqddmn6.bkt.clouddn.com/danche-n.png',text:'动感单车',selectSrc:'http://q4yqddmn6.bkt.clouddn.com/danche.png'},
					{src:'http://q4yqddmn6.bkt.clouddn.com/paobu-n.png',text:'跑步',selectSrc:'http://q4yqddmn6.bkt.clouddn.com/paobu.png'},
					{src:'http://q4yqddmn6.bkt.clouddn.com/wudao-n.png',text:'舞蹈',selectSrc:'http://q4yqddmn6.bkt.clouddn.com/wudao.png'},
					{src:'http://q4yqddmn6.bkt.clouddn.com/boji-n.png',text:'搏击',selectSrc:'http://q4yqddmn6.bkt.clouddn.com/boji.png'},
					{src:'http://q4yqddmn6.bkt.clouddn.com/youyong-n.png',text:'游泳',selectSrc:'http://q4yqddmn6.bkt.clouddn.com/youyong.png'},
				],
				optionsIdx:-1
			}
		},
		methods: {
			navBack(){
				uni.navigateTo({
					url:'../index/index'
				})
			},
			Select(idx){
				this.optionsIdx = idx;
			}
		}
	}
</script>

<style>
	.selectTitle text{
		font-size: 32rpx;
		color: #5a5a5a;
	}
	.options{
		margin-top: 60rpx;
	}
	.optionsItem{
		width: 520rpx;
		height: 106rpx;
		background: #F1F4FD;
		margin: 32rpx auto 0;
		border-radius: 60rpx;
		justify-content: center;
	}
	.optionsItem text{
		display: inline-block;
		width: 220rpx;
		text-align: center;
		font-size: 32rpx;
		color: #647ECF;
	}
	.optionsActive{
		background: #3B5BA0;
	}
	.optionsActive text{
		color: #fff;
	}
	.optionImg{
		display: inline-block;
		width: 38rpx;
		height: 60rpx;
		margin-right: 1em;
	}
</style>

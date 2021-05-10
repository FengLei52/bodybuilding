<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navHolder position-fixed fixed-top text-center title-text">
			<text class="iconfont float-left indentNav font-weight" @tap="navBack">&#xe60c;</text>
			<text class="font-weight">瑜伽</text>
		</view>
		<view class="content-wudi containerYoga head-top">
			<view class="motion">
				<image class="yogaImg" src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESnfbXLDnaENiq5kzjzHcHEZFA*ppi5NeC*sw5yrheIQn1WiL7apDHoeql72lrSo.wg!!/mnull&bo=0gMfAgAAAAADB.4!&rf=photolist&t=5" mode=""></image>
			</view>
			<view class="motionTag">
				<text>瑜伽</text>
				<text>全身塑形瑜伽</text>
			</view>
			<view class="effect">
				<text class="small">燃脂</text>
				<text class="small">塑形</text>
				<text class="small">体态</text>
				<view class="effect-right">
					<text class="small">已预约人数：88人</text>
				</view>				
			</view>
		</view>	
		<view class="content-wudi containerYoga">
			<view class="motion">
				<image class="yogaImg" src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESqD7fYX5L8Ga27J61Jmquuw1cmeQZeND5h9ffundJ1QC4rZcMieuMqqkbify1tt63g!!/mnull&bo=0gMfAgAAAAADB.4!&rf=photolist&t=5" mode=""></image>
			</view>
			<view class="motionTag">
				<text>瑜伽</text>
				<text>哑铃团体操</text>
			</view>
			<view class="effect">
				<text class="small">燃脂</text>
				<text class="small">塑形</text>
				<text class="small">体态</text>
				<view class="effect-right">
					<text class="small">已预约人数：88人</text>
				</view>				
			</view>
		</view>	
		<view class="content-wudi containerYoga">
			<view class="motion">
				<image class="yogaImg" src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESt2f4QjkszzagVDreboA9kusw2sTLUeYtkYdbMZewNElor0YFUjoe6LuMR4UsJ3hUw!!/mnull&bo=0gMfAgAAAAADB.4!&rf=photolist&t=5" mode=""></image>
			</view>
			<view class="motionTag">
				<text>瑜伽</text>
				<text>哑铃团体操</text>
			</view>
			<view class="effect">
				<text class="small">燃脂</text>
				<text class="small">塑形</text>
				<text class="small">体态</text>
				<view class="effect-right">
					<text class="small">已预约人数：88人</text>
				</view>				
			</view>
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			navBack(){
				uni.navigateTo({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style>
	.containerYoga{
		padding-left: 50rpx;
		padding-right: 50rpx;
	}
	.yogaImg{
		width: 100%;
		height: 362rpx;
		border-radius: 20rpx;
	}
	.motionTag text{
		margin-left: 1em;
		color: #5a5a5a;
		font-size: 32rpx;
	}
	.motionTag text:first-child{
		margin-left: 0;
	}
	.effect text{
		color: #474A56;
		margin-left: 1em;
	}
	.effect text:first-child{
		margin-left: 0;
	}
	.effect-right{
		display: inline-block;
		width: calc(100% - 5em);
		text-align: right;
	}
</style>

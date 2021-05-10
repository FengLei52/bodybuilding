<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navHolder position-fixed fixed-top text-center title-text">
			<text class="iconfont float-left indentNav font-weight" @tap="navBack">&#xe60c;</text>
			<text class="font-weight">预约</text>
		</view>
		<view class="content-wudi head-top">
			<view class="coachBack">
				<view class="coachInfo">
					<view class="coachUser">
						<image src="http://q4yqddmn6.bkt.clouddn.com/zhouCoach.png" mode=""></image>
						<text class="block text-big text-white">周教练</text>
						<text class="block text-small text-opcity">瑜伽教练</text>
					</view>
					<view class="coachTag">
						<text>瑜伽教练</text>
						<text>金牌教练</text>
						<text>8年的教学经验</text>
						<text>健身达人</text>
						<text>处女座</text>
						<text>有故事</text>
					</view>
				</view>
			</view>
			<view class="hotTitle">
				<text class="vice-title">选择日期</text>
			</view>
			<view class="dateSelect flex">
				<view class="flex-share text-center dateSelect-item" :class="dayIdx==idx?'dateSelect-active':''" v-for="(item,idx) in dateSelect" :key="idx" @tap="selectDay(item,idx)">
					<text class="block">{{item.date}}</text>
					<text class="block">{{item.week}}</text>
				</view>
			</view>
			<view class="hotTitle">
				<text class="vice-title">选择时间段</text>
			</view>
			<view class="dateSelect flex">
				<view class="flex-share text-center dateSelect-time" :class="timeIdx==idx?'dateSelect-active':''" v-for="(item,idx) in timeSelect" :key="idx" @tap="selectTime(item,idx)">
					<text class="small">{{item}}</text>
				</view>
			</view>
			<view class="text-center" style="margin-top: 60rpx;">
				<button class="orderBtn">预约</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dateSelect:[
					{date:'今天',week:'周一'},
					{date:'今天',week:'周一'},
					{date:'今天',week:'周一'},
					{date:'今天',week:'周一'},
					{date:'今天',week:'周一'},
					{date:'今天',week:'周一'},
				],
				dayIdx:-1,
				timeSelect:['10:00—11:00','13:00—14:00','15:00—16:00','17:00—18:00'],
				timeIdx:-1
			}
		},
		methods: {			
			navBack(){
				uni.navigateTo({
					url:'./coachDetail'
				})
			},
			selectDay(obj,idx){
				console.log(obj)
				console.log(idx)
				this.dayIdx = idx;
			},
			selectTime(val,idx){
				this.timeIdx = idx;
			}
		}
	}
</script>

<style>
	.coachBack{
		padding: 0 24rpx 36rpx;
		background: rgb(242,242,242);
	}
	.coachInfo{
		height: 746rpx;
		background: #314D8F;
		border-radius: 10rpx;
		overflow: hidden;
		margin-bottom: 20rpx;
	}
	.coachUser{
		margin: 70rpx 0;
		text-align: center;
	}
	.coachUser image{
		width: 248rpx;
		height: 248rpx;
		border-radius: 50%;
		margin: 0 auto 10rpx;
	}
	.coachTag{
		overflow: hidden;
	}
	.coachTag text{
		font-size: 24rpx;
		display: inline-block;
		padding: 8rpx 24rpx;
		color: #ccd4ff;
		border: 1rpx solid #ccd4ff;
		border-radius: 22rpx;
		margin-left: 46rpx;
		margin-bottom: 32rpx;
	}
	.hotTitle{
		padding:30rpx 24rpx 20rpx;
		color: #5a5a5a;
		font-weight: 500;
	}
	.dateSelect-item{
		margin-left: 22rpx;
		background: #f1f4fd;
		padding: 16rpx 0;
		border-radius: 6rpx;
	}
	.dateSelect-time{
		margin-left: 22rpx;
		background: #f1f4fd;
		padding: 2rpx 0 8rpx;
		border-radius: 6rpx;
	}
	.dateSelect-item:first-child text{
		color: #F96D1B!important;
	}
	.dateSelect-item:last-child,.dateSelect-time:last-child{
		margin-right: 22rpx;
	}
	.dateSelect-active{
		background: #395493!important;
		color: #FFFFFF!important;
	}
	.dateSelect-item text:nth-child(1){
		font-size: 32rpx;
		color: #395493;
	}
	.dateSelect-item text:nth-child(2){
		font-size: 22rpx;
		color: #8f8f8f;
		margin-top: 6rpx;
	}
	.dateSelect-active text:nth-child(1){
		color: #fff!important;
	}
	.dateSelect-active text:nth-child(2){
		color: rgba(255,255,255,0.72)!important;
	}
	.orderBtn{
		width: 394rpx;
		height: 90rpx;
		line-height: 90rpx;
		padding: 0;
		background: #3B5BA0;
		color: #fff;
		border-radius: 50rpx;
	}
</style>

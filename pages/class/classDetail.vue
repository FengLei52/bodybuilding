<template>
	<view>
		<view class="status_bar navContent">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navHolder position-fixed fixed-top text-center title-text navContent">
			<text class="iconfont float-left indentNav font-weight" @tap="navBack">&#xe60c;</text>
			<text class="font-weight">门店详情</text>
		</view>
		<view class="backView">
			<image src="http://q4yqddmn6.bkt.clouddn.com/activity1.png" mode=""></image>
		</view>
		<view class="headTop">
			<view class="bottomLine">
				<view class="padding-leri flex">
					<text class="text-white text-big">全身塑形瑜伽</text>
					<view class="flex-share text-right">
						<text class="text-medium white rightM">收藏</text>
						<text class="iconfont text-white">&#xe609;</text>
					</view>
				</view>
				<view class="padding-leri lineHeight flex">
					<text class="white text-small">强度指数：</text>
					<text class="iconfont orage rightM">&#xe609;</text>
					<text class="iconfont orage rightM">&#xe609;</text>
					<text class="iconfont orage rightM">&#xe609;</text>
					<text class="iconfont text-white rightM">&#xe609;</text>
					<text class="iconfont text-white rightM">&#xe609;</text>
					<view class="flex-share text-right">
						<text class="text-small white">已预约人数：88人</text>
					</view>
				</view>
				<view class="padding-leri paddTB flex">
					<view class="flex-share text-center">
						<view>
							<text class="block white text-small">燃脂</text>
							<view class="vertical-center flexJustify">
								<text class="mathSize white rightM">73</text>
								<text class="white text-small">千卡</text>
							</view>						
						</view>					
					</view>
					<view class="flex-share text-center">
						<view>
							<text class="block white text-small">时长</text>
							<view class="vertical-center flexJustify">
								<text class="mathSize white rightM">60</text>
								<text class="white text-small">分钟</text>
							</view>						
						</view>					
					</view>
					<view class="flex-share text-center">
						<view>
							<text class="block white text-small">难度</text>
							<view class="vertical-center flexJustify">
								<text class="mathSize white rightM">30</text>
								<text class="white text-small">初学者</text>
							</view>						
						</view>					
					</view>
				</view>
			</view>
			<view class="padding-leri">
				<view class="contenTb">
					<text class="text-small white">瑜伽是一个通过提升意识，帮助人类充分发挥潜能的体系。瑜伽姿势运用古老而易于掌握的技巧，改善人们生理、心理、情感和精神方面的能力，是一种达到身体、心灵与精神和谐统一的运动方式，包括调身的体位法、调息的呼吸法、调心的冥想法等，以达至身心的合一。</text>
				</view>
				<view class="lineHeight vertical-center">
					<text class="text-white text-big">课程详情</text>
				</view>			
				<view class="lineHeight vertical-center">
					<text class="iconfont blue rightM">&#xe625;</text>
					<text class="white text-small">时间：10:00-11:30</text>
				</view>
				<view class="lineHeight vertical-center">
					<text class="iconfont blue rightM">&#xe60a;</text>
					<text class="white text-small">地址：无锡市惠山区钱桥恒达国际二楼609室</text>
				</view>
				<view class="lineHeight vertical-center">
					<text class="text-white text-big">教练详情</text>
				</view>	
				<view class="callView flex">
					<image src="http://q4yqddmn6.bkt.clouddn.com/coachWu.png" class="coachImg" mode=""></image>
					<view class="flex-share padding-leri height vertical-center">
						<view class="position-relative block">
							<text class="block text-white">Ammay</text>
							<text class="text-white text-small">瑜伽塑形教练</text>
							<button class="callBtn">联系他</button>
						</view>						
					</view>
				</view>
				<view class="text-center">
					<button class="orderBtn">立即预约</button>
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
			
		}
	}
</script>

<style>
	.height{
		height: 100%;
	}
	.mathSize{
		font-size: 44rpx;
	}
	.flexJustify{
		justify-content: center;
	}
	.backView{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 708rpx;
	}
	.navContent{
		background: none;
		color: #fff;
	}
	.backView image{
		width: 100%;
		height: 100%;
	}
	.bottomLine{
		border-bottom: 1rpx solid #979797;
	}
	.paddTB{
		padding: 50rpx 0 30rpx;
	}
	.callView{
		height: 164rpx;
		background: rgb(61,60,70);
		border-radius: 16rpx;
		position: relative;
		top: 70rpx;
	}
	.contenTb{
		padding: 42rpx 0;
	}
	.headTop{
		position: relative;
		top: 628rpx;
		z-index: 6;
		background: #272631;
		border-radius: 36rpx 36rpx 0 0;
		padding: 42rpx 0 86rpx;
	}
	.rightM{
		margin-right: 6rpx;
	}
	.white{
		color: rgba(255,255,255,.8);
	}
	.lineHeight{
		height: 70rpx;
		line-height: 70rpx;
	}
	.coachImg{
		width: 176rpx;
		height: 176rpx;
		border-radius: 50%;
		margin: 0 22rpx;
		position: relative;
		top: -60rpx;
		z-index: 6;
	}
	.callBtn{
		position: absolute;
		top: 50%;
		right: 0;
		margin-top: -37rpx;
		background: none;
		height: 74rpx;
		line-height: 74rpx;
		text-align: center;
		width: 164rpx;
		border: 1px solid #3B5BA0;
		border-radius: 34rpx;
		color: #fff;
		font-size: 30rpx;
	}
	.orderBtn{
		width: 394rpx;
		height: 90rpx;
		line-height: 90rpx;
		padding: 0;
		background: #3B5BA0;
		color: #fff;
		border-radius: 50rpx;
		margin-top: 160rpx;
		margin-bottom: 50rpx;
	}
</style>

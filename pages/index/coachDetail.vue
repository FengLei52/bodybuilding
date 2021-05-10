<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navHolder position-fixed fixed-top text-center title-text">
			<text class="iconfont float-left indentNav font-weight" @tap="navBack">&#xe60c;</text>
			<text class="font-weight">私教详情</text>
		</view>
		<view class="content-wudi">
			<view class="padding-leri">
				<view class="coachInfo head-top">
					<view class="coachUser">
						<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESk9ltDnB*QPcEs*sRtZNGfoyu6m4tUBRXjyBFpJdCQTVSE01Ttl41DsKCUF8htFSuA!!/mnull&bo=CAEIAQAAAAADByI!&rf=photolist&t=5" mode=""></image>
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
				<view class="contentPack">
					<view class="coachTitle vertical-center">
						<text class="coachTitleText">获奖经历</text>
						<view class="flex-share text-right">
							<text class="orage">4.9</text>
							<text class="iconfont orage">&#xe609;</text>
						</view>
					</view>
					<view style="padding: 12rpx 0;">
						<view class="undergo">
							<view class="widePadding"><text>全国健美一等奖</text></view>
						</view>
						<view class="undergo">
							<view class="widePadding"><text>江苏瑜伽锦标赛第一名</text></view>
						</view>
						<view class="undergo">
							<view class="widePadding"><text>2019年最受欢迎健身教练称号</text></view>
						</view>
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="padding-leri">
				<view class="contentPack">
					<view class="coachTitle vertical-center">
						<text class="coachTitleText">课程特点</text>
					</view>
					<view style="padding: 12rpx 0;">
						<view class="undergo">
							<view class="widePadding"><text>男女都适用</text></view>
						</view>
						<view class="undergo">
							<view class="widePadding"><text>是一种达到身体、心灵与精神和谐统一的运动方式</text></view>
						</view>
						<view class="undergo">
							<view class="widePadding"><text>能消除疲劳，平静心境。使人保持一种舒畅宁静的状态，充分享受人生</text></view>
						</view>
						<view class="undergo">
							<view class="widePadding"><text>刺激内分泌系统，维持内分泌平衡。</text></view>
						</view>						
					</view>
				</view>
			</view>
			<view class="line"></view>
			<view class="padding-leri">
				<view class="contentPack">
					<view class="coachTitle vertical-center">
						<text class="coachTitleText">所在场馆</text>
					</view>
				</view>
				<view class="address flex">
					<text class="iconfont orage iconSite">&#xe60a;</text>
					<view style="flex: 3;">
						<text class="block text-medium" style="color: #838383;">地址：无锡滨湖区江大店</text>
						<text class="text-small" style="color: #9b9b9b;">无锡市惠山区钱桥恒达国际二楼609室</text>
					</view>
					<view class="flex-share" style="justify-content: right;">
						<image class="shopImg" src="http://q4yqddmn6.bkt.clouddn.com/coachDai.png" mode=""></image>
					</view>
				</view>
				<view class="text-center" style="margin-top: 60rpx;">
					<button class="orderBtn" @tap="goOrder">立即预约</button>
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
					url:'./privateTeaching'
				})
			},
			goOrder(){
				uni.navigateTo({
					url:'./Subscribe'
				})
			}
		}
	}
</script>

<style>
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
	.coachTitle::before{
		content: '';
		display: inline-block;
		width: 12rpx;
		height: 46rpx;
		background: #3B5BA0;
		border-radius: 8rpx;
		margin-right: 8rpx;
	}
	.coachTitleText{
		font-size: 36rpx;
		color: #5a5a5a;
		font-weight: 500;
	}
	.contentPack{
		padding: 30rpx 0;
	}
	.undergo{
		font-size: 28rpx;
		color: #8f8f8f;
	}
	.undergo::before{
		font-family: iconfont;
		content: '\e60b';
		font-size: 34rpx;
		color: #3B5BA0;
		position: absolute;
	}
	.widePadding{
		padding-left: 1.2em;
		display: inline-block;
		width: calc(100% - 48rpx);
	}
	.iconSite{
		padding: 0 20rpx;
	}
	.shopImg{
		width: 148rpx;
		height: 148rpx;
		border-radius: 12rpx;
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

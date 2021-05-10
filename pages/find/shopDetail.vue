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
			<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESmQgB0eYFLx7cC*.MWA7N9OyY4aUElS9I.yE0nAZv7HoypbxdTHsBI6AJeyOOF55ow!!/mnull&bo=ZQQmBGUEJgQDByI!&rf=photolist&t=5" mode=""></image>
		</view>
		<view class="headTop">
			<view class="padding-leri">
				<text class="block text-white text-big">无锡滨湖区江大店</text>
				<text class="block white text-small lineHeight">无锡市滨湖区恒达国际6楼609-616室</text>
			</view>
			<view class="flex bottomLine">
				<view class="flex-share text-center paddTB">
					<view>
						<image class="wife" src="../../static/img/wife.png" mode=""></image>
						<text class="block white text-small">免费wifi</text>
					</view>
				</view>
				<view class="flex-share text-center paddTB">
					<view>
						<image class="shower" src="../../static/img/linyu.png" mode=""></image>
						<text class="block white text-small">免费淋浴</text>
					</view>
				</view>
				<view class="flex-share text-center paddTB">
					<view>
						<image class="alarmClock" src="../../static/img/naozhong.png" mode=""></image>
						<text class="block white text-small">24小时</text>
					</view>
				</view>
				<view class="flex-share text-center paddTB">
					<view>
						<image class="machine" src="../../static/img/zhineng.png" mode=""></image>
						<text class="block white text-small">人工智能</text>
					</view>
				</view>
			</view>
			<view class="padding-leri">
				<text class="block text-big text-white paddTB">门店介绍</text>
				<text class="text-small titleWhite paddTB">门店面积：</text>
				<text class="text-small white">3000平米</text>
				<view class="shopInfo marginTB">
					<view class="titleView">
						<text class="text-small titleWhite">可训练项目:</text>
					</view>
					<view class="contentView">
						<text class="text-small white">跑步  局部塑形  体态改善  瑜伽  舞蹈  搏击  团操 产后恢复  减脂  游泳</text>
					</view>
				</view>
				<view class="shopInfo marginTB">
					<view class="titleView">
						<text class="text-small titleWhite">门店介绍:</text>
					</view>
					<view class="contentView">
						<text class="text-small white">其子公司处于镇江扬中繁华的商业圈，周围生活配套设施齐全，聚集了休闲、娱乐、便民设施，周围交通十分便利，会所营业面积为3000多平方米。会所全方位的配置，使您的健身休闲生活更加方便、快捷。KIEET健身以五星级的服务标准为会员提供一对一的教练指导服务以及私人健身助理，对您的健身做全程跟踪服务，同时会所提供免费的Wi--Fi无线网络，并且也提供了舒适快速的电脑等贴心服务。</text>
					</view>
				</view>
			</view>
			<view class="text-center">
				<button class="orderBtn">立即预约</button>
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
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style>
	.titleView{
		width: 25%;
		float: left;
	}
	.contentView{
		display: inline-block;
		width: 75%;
		text-align: justify;
	}
	.bottomLine{
		border-bottom: 1rpx solid #979797;
	}
	.paddTB{
		padding: 50rpx 0 30rpx;
	}
	.lineHeight{
		height: 60rpx;
		line-height: 60rpx;
	}
	.marginTB{
		margin: 10rpx 0;
	}
	.backView{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 698rpx;
	}
	.navContent{
		background: none;
		color: #fff;
	}
	.backView image{
		width: 100%;
		height: 100%;
	}
	.headTop{
		position: relative;
		top: 628rpx;
		z-index: 6;
		background: #272631;
		border-radius: 36rpx 36rpx 0 0;
		padding: 42rpx 0;
	}
	.white{
		color: rgba(255,255,255,.8);
	}
	.titleWhite{
		color: rgba(255,255,255,.56);
	}
	.wife{
		width: 56rpx;
		height: 40rpx;
		margin: 8rpx 0;
	}
	.shower{
		width: 50rpx;
		height: 56rpx;
	}
	.alarmClock{
		width: 56rpx;
		height: 56rpx;
	}
	.machine{
		width: 53rpx;
		height: 56rpx;
	}
	.orderBtn{
		width: 394rpx;
		height: 90rpx;
		line-height: 90rpx;
		padding: 0;
		background: #3B5BA0;
		color: #fff;
		border-radius: 50rpx;
		margin-top: 60rpx;
		margin-bottom: 50rpx;
	}
</style>

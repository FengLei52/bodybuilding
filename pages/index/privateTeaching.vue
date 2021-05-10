<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navHolder position-fixed fixed-top text-center title-text">
			<text class="iconfont float-left indentNav font-weight" @tap="navBack">&#xe60c;</text>
			<text class="font-weight">私教</text>
		</view>
		<view class="hotTitle head-top">
			<text class="vice-title">选择日期</text>
		</view>
		<view class="dateSelect flex">
			<view class="flex-share text-center dateSelect-item" v-for="(item,idx) in dateSelect" :key="idx">
				<text class="block">{{item.date}}</text>
				<text class="block">{{item.week}}</text>
			</view>
		</view>
		<view style="padding: 40rpx 24rpx;">
			<view class="coachItem" @tap="jumpDetail" style="background: url('http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESrkC4yYZ7PaVDniE05j79qTzo.3f0DGNTBv3rFyylT6xmUc.XLwGg1ShcKM5uw64wA!!/mnull&bo=HQTIAQAAAAADB*I!&rf=photolist&t=5');background-size: cover;">
				<view class="block">
					<view class="coachImg">
						<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESk9ltDnB*QPcEs*sRtZNGfoyu6m4tUBRXjyBFpJdCQTVSE01Ttl41DsKCUF8htFSuA!!/mnull&bo=CAEIAQAAAAADByI!&rf=photolist&t=5" mode=""></image>
					</view>
					<view class="coachInfo">
						<text class="block coachName">周教练</text>
						<text class="coachLabel block">瑜伽教练</text>
						<text class="coachLabel SCtext-top right-em">星座：处女座</text>
						<text class="coachLabel SCtext-top">年龄：28</text>
					</view>
				</view>
				<view class="block clear tagTop">
					<text class="coachTag orage">瑜伽教练</text>
					<text class="coachTag orage">金牌教练</text>
					<text class="coachTag blue">八年教学经验</text>
				</view>		
			</view>
			<view class="coachItem" @tap="jumpDetail" style="background: url('http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESuzYja3RSeNwOK6vLVVO7C*8A2zviMm0fxKOaP8QCt2iv6fsMLPMJ8B5YiwCFtuJDQ!!/mnull&bo=HQTIAQAAAAADB*I!&rf=photolist&t=5');background-size: cover;">
				<view class="block">
					<view class="coachImg">
						<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESmDoiQAmJy4t8NutxJB8zVI1PSPoW4hkG3MPZCb2i*OtpKQWelyZdflZdsPvXepH6A!!/mnull&bo=CAEIAQAAAAADByI!&rf=photolist&t=5" mode=""></image>
					</view>
					<view class="coachInfo">
						<text class="block coachName">戴教练</text>
						<text class="coachLabel block">拳击教练</text>
						<text class="coachLabel SCtext-top right-em">星座：天蝎座</text>
						<text class="coachLabel SCtext-top">年龄：28</text>
					</view>
				</view>
				<view class="block clear tagTop">
					<text class="coachTag orage">拳击教练</text>
					<text class="coachTag orage">金牌教练</text>
					<text class="coachTag text-violet">健身达人</text>
					<text class="coachTag text-violet">耐心</text>
				</view>		
			</view>
			<view class="coachItem" @tap="jumpDetail" style="background: url('http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESj4g9nA62AwxsvyktIyC9maxg4mf5LnrN..vW20OZI*K2eXo3g83Yn0Xk8Yr8w44PQ!!/mnull&bo=HQTIAQAAAAADB*I!&rf=photolist&t=5');background-size: cover;">
				<view class="block">
					<view class="coachImg">
						<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESrxCMLiMoWOe8xkDvoGWvxcHDykAWScWncW7qJAKvn2dDn6kJYei0ZE4g1yBRJTTnA!!/mnull&bo=9gD2AAAAAAADByI!&rf=photolist&t=5" mode=""></image>
					</view>
					<view class="coachInfo">
						<text class="block coachName">吴教练</text>
						<text class="coachLabel block">塑形教练</text>
						<text class="coachLabel SCtext-top right-em">星座：处女座</text>
						<text class="coachLabel SCtext-top">年龄：28</text>
					</view>
				</view>
				<view class="block clear tagTop">
					<text class="coachTag text-brown">塑形教练</text>
					<text class="coachTag text-brown">金牌教练</text>
					<text class="coachTag text-brown">阳光开朗</text>
					<text class="coachTag text-brown">处女座</text>
				</view>		
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
				]
			}
		},
		methods: {
			jumpDetail(){
				uni.navigateTo({
					url:'/pages/index/coachDetail'
				})
			},
			navBack(){
				uni.navigateTo({
					url:'./index'
				})
			}
		}
	}
</script>

<style>
	.hotTitle{
		padding:0 24rpx 20rpx;
		color: #5a5a5a;
		font-weight: 500;
	}
	.right-em{
		margin-right: 1em;
	}
	.dateSelect-item{
		margin-left: 22rpx;
		background: #f1f4fd;
		padding: 16rpx 0;
		border-radius: 6rpx;
	}
	.dateSelect-item:first-child text{
		color: #F96D1B!important;
	}
	.dateSelect-item:last-child{
		margin-right: 22rpx;
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
	.coachItem{
		margin-top: 70rpx;
		height: 304rpx;
		border-radius: 8rpx;
	}
	.coachImg{
		float: left;
		width: 176rpx;
		height: 176rpx;
		padding: 22rpx;
		margin-top: -60rpx;
	}
	.coachImg image{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.coachInfo{
		float: left;
		padding-left: 22rpx;
		box-sizing: border-box;
	}
	.coachName{
		height: 96rpx;
		line-height: 96rpx;
		color: #fff;
		font-size: 36rpx;
	}
	.coachLabel{
		font-size: 24rpx;
		color: rgba(255,255,255,0.82);
	}
	.coachTag{
		padding: 6rpx 14rpx;
		border-radius: 22rpx;
		background: #fff;
		font-size: 24rpx;
		margin-left: 22rpx;
	}
	.tagTop{
		position: relative;
		top: 18rpx;
	}
</style>

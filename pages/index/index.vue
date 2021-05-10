<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navHolder position-fixed fixed-top text-center title-text">
			<text class="font-weight">FL健身俱乐部</text>
		</view>
		<view class="content">
			<view class="head-top">
				<swiper class="imageContainer" @change="handleChange" previous-margin="50rpx" next-margin="50rpx" circular  autoplay>
					<block v-for="(item,index) in imgList" :key="index">
						<swiper-item class="swiperitem">
							<image class="itemImg" :class="currentIndex == index ? 'swiperactive': ''" :src="item" lazy-load mode="scaleToFill"></image>
						</swiper-item>
					</block>
				</swiper>
			</view>
			<view class="Navigation flex">
				<navigator url="/pages/index/brandIntroduce" open-type="redirect" hover-class="none" class="flex-share text-center">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESocKIi*dMk1jOkk6k**2SuJV*MGWTpG1Rk7brUv7xvm1Calg5XUcsRawawwK.BzvMA!!/mnull&bo=fgB.AH4AfgADByI!&rf=photolist&t=5" mode=""></image>
					<text>品牌介绍</text>
				</navigator>
				<navigator url="/pages/index/teachingAmbient" open-type="redirect" hover-class="none" class="flex-share text-center">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESp0enI1ZzFeKHNljUHVHI4i700TvT54rZvBfg1WuePC5IPRfBVeNIKlLCOUssJMkpQ!!/mnull&bo=fgB.AH4AfgADByI!&rf=photolist&t=5" mode=""></image>
					<text>教学环境</text>
				</navigator>
				<navigator url="/pages/index/privateTeaching" open-type="redirect" hover-class="none" class="flex-share text-center position-relative">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESjwzMyIRb6gv5IKkvWT1VNbi40Bh3ivDAwM0NA2Q6fCh4dNw9hfLaWh5ODIjy7YubA!!/mnull&bo=WgA2AAAAAAADB04!&rf=photolist&t=5" mode="" class="hot-icon"></image>
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESp0enI1ZzFeKHNljUHVHI4i700TvT54rZvBfg1WuePC5IPRfBVeNIKlLCOUssJMkpQ!!/mnull&bo=fgB.AH4AfgADByI!&rf=photolist&t=5" mode=""></image>
					<text>私教</text>
				</navigator>
				<navigator url="/pages/find/yoga" open-type="redirect" hover-class="none" class="flex-share text-center">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESuqiuL6wzm04SwVSjtKsv*WVLkqa72KebUg0biypD7HpI6jjexsVWiL4JjtYhUx7nQ!!/mnull&bo=fgB.AH4AfgADByI!&rf=photolist&t=5" mode=""></image>
					<text>团操</text>
				</navigator>
			</view>
			<view class="line"></view>
			<view class="healthy">
				<view class="health-back position-relative vertical-center">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/OZ*kzmW4N1STRbYPSVQfBB8xutgupBnSy3T7rO2xwn7wQbj7a4aVJzYk4T5aBDrt*vyS3ZPT7avWBIuanTe2332FGTOSuDVdOdqHIWzrLao!/b&bo=LAF3AQAAAAADB3k!&rf=viewer_4" mode="" class="health-house"></image>
					<view>
						<text class="block text-white health-text">加入FIEET开启健康生活</text>
						<text class="join-text">立即加入</text>
						<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESnff4Qj2cJEQcf3rK4LFRm01Ukn10K7JnO8YxUbMTUHnhd4f4N7k05En8VBtbMevCA!!/mnull&bo=KgAqACoAKgADByI!&rf=photolist&t=5" mode="" class="join-icon"></image>
					</view>			
				</view>
			</view>
			<view class="line"></view>
			<view class="activity flex">
				<text class="vice-title">限时活动</text>
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/OZ*kzmW4N1STRbYPSVQfBA2Qw33nzLnC9XGEOw3fpSnMbTwJi9RHcAUol36TP6hyDxRYm5Xh9lxhdC9JbCYOZOYDng9h55Yjgeu9mda3x2M!/b&bo=KgAzAAAAAAADFys!&rf=viewer_4" mode="" class="fire"></image>
				<view class="more-holder flex-share">
					<text class="vice-tips">更多课程</text>
					<text class="iconfont" style="font-size: 24rpx;">&#xe605;</text>
				</view>
			</view>
			<scroll-view scroll-x="true" class="activity-holder">
				<view class="activity-item">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dEShOoeWZIb2Wh8VPkbKC*pZ34w3pcTq5NzD.44yNGFUbVeYWxBE.5Vli6EPwCMpkYfw!!/mnull&bo=vAEpAbwBKQEDByI!&rf=photolist&t=5" mode=""></image>
					<text class="activityTitle">全身塑形瑜伽</text>
					<text class="activity-content">燃脂 | 塑性 | 体态纠正</text>
				</view>
				<view class="activity-item">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESr5Z0B2LJ15DZc2gYi3.vptelrCB096BgdxEucx45DQZa4cYj.BU4iRijJUetePORg!!/mnull&bo=vAEpAbwBKQEDByI!&rf=photolist&t=5" mode=""></image>
					<text class="activityTitle">全身塑形瑜伽</text>
					<text class="activity-content">燃脂 | 塑性 | 体态纠正</text>
				</view>
				<view class="activity-item">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dEShOoeWZIb2Wh8VPkbKC*pZ34w3pcTq5NzD.44yNGFUbVeYWxBE.5Vli6EPwCMpkYfw!!/mnull&bo=vAEpAbwBKQEDByI!&rf=photolist&t=5" mode=""></image>
					<text class="activityTitle">全身塑形瑜伽</text>
					<text class="activity-content">燃脂 | 塑性 | 体态纠正</text>
				</view>
				<view class="activity-item">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESr5Z0B2LJ15DZc2gYi3.vptelrCB096BgdxEucx45DQZa4cYj.BU4iRijJUetePORg!!/mnull&bo=vAEpAbwBKQEDByI!&rf=photolist&t=5" mode=""></image>
					<text class="activityTitle">全身塑形瑜伽</text>
					<text class="activity-content">燃脂 | 塑性 | 体态纠正</text>
				</view>
			</scroll-view>
			<view class="line"></view>
			<view class="activity flex">
				<text class="vice-title">附近门店</text>
				<view class="more-holder flex-share">
					<text class="vice-tips">全部门店</text>
				</view>
			</view>
			<view class="storeContainer">
				<view class="sotre-item" v-for="(item,idx) in shopInfo" :key="idx" @tap="goShop">
					<image :src="item.src" class="storeImg"></image>
					<view class="storeInfo vertical-center">
						<view style="width: 96%;">
							<view class="store">
								<text class="storeName">{{item.name}}</text>
								<text class="storeSite">据您{{item.distance}}km</text>
							</view>
							<text class="block storeAddress">{{item.address}}</text>
						</view>						
					</view>
				</view>
			</view>
		</view>		
		<view class="navBar position-fixed fixed-bottom flex">
			<view class="flex-share text-center">
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESkhf0nxutCHQwwxquWb4rvERJtMO3LLYbp.1B.czu8IpWzrm5ZQAtt7Ddsm6d*hmWA!!/mnull&bo=MAAwADAAMAADByI!&rf=photolist&t=5" mode=""></image>
				<text>首页</text>
			</view>
			<navigator url="/pages/find/find" open-type="redirect" hover-class="none" class="flex-share text-center">
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESo5QjcjpuYW8SzQgdWSmLGQtbRb85gvIE1MnGy6MnkHBKFmNSpSBz70TDcJqR6g4sQ!!/mnull&bo=NgA2ADYANgADByI!&rf=photolist&t=5" mode=""></image>
				<text>发现</text>
			</navigator>
			<navigator url="/pages/my/myLogin" open-type="redirect" hover-class="none" class="flex-share text-center">
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESsQQTW280pjhhi9r934zFVVSZGlKcxItGyIGLxX3hgrRNAWm5jDyFftWhiytiIaqug!!/mnull&bo=MAA2ADAANgADByI!&rf=photolist&t=5" mode=""></image>
				<text>我的</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[
					'http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESj9sp*et7y9WFEUC4YGbm4.cq51fIALfo.C8FsSU7joCoFuzN1F9TglCa5MczW3ukA!!/mnull&bo=.QMuAvkDLgIDByI!&rf=photolist&t=5',
					'http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESj9sp*et7y9WFEUC4YGbm4.cq51fIALfo.C8FsSU7joCoFuzN1F9TglCa5MczW3ukA!!/mnull&bo=.QMuAvkDLgIDByI!&rf=photolist&t=5',
					'http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESj9sp*et7y9WFEUC4YGbm4.cq51fIALfo.C8FsSU7joCoFuzN1F9TglCa5MczW3ukA!!/mnull&bo=.QMuAvkDLgIDByI!&rf=photolist&t=5',
				],
				currentIndex:0,
				shopInfo:[
					{src:'http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESr42C0WXLGt0fHqQZp58ijtuNwte56fU1a7RoJryq8ib4XLrjkcSd0vMHNZNjKqgnw!!/mnull&bo=IAEgASABIAEDByI!&rf=photolist&t=5',name:'无锡惠山区钱桥店',distance:7.9,address:'无锡市惠山区钱桥恒达国际二楼609室'},
					{src:'http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESqDruEoXn7YQgpJXJWQQG7vdVfcXL4f15L1Qb1zWnLRhQUAc8g1mIlW2GyQHHohjlA!!/mnull&bo=IAEgASABIAEDByI!&rf=photolist&t=5',name:'无锡惠山区钱桥店',distance:7.9,address:'无锡市惠山区钱桥恒达国际二楼609室'},
				]
			}
		},
		onLoad() {

		},
		methods: {
			handleChange(val){
				this.currentIndex = val.detail.current;
			},
			goShop(){
				uni.navigateTo({
					url:'../find/shopDetail'
				})
			}
		}
	}
</script>

<style>
	.Navigation{
		padding: 76rpx 0 46rpx 0;
	}
	.Navigation image{
		width: 84rpx;
		height: 84rpx;
	}
	.Navigation text{
		display: block;
		font-size: 24rpx;
		color: #8F8F8F;
	}
	.Navigation .hot-icon{
		position: absolute;
		top: -36rpx;
		right: 20rpx;
		width: 60rpx;
		height: 36rpx;
		z-index: 6;
	}
	.healthy{
		box-sizing: border-box;
		padding: 96rpx 22rpx 56rpx;
	}
	.health-back{
		height: 192rpx;
		background: url('http://m.qpic.cn/psc?/V14MCMD02ANAGG/OZ*kzmW4N1STRbYPSVQfBImD7jRpBR.BxzEV0y3O450nO*zz5ab.R.SVbPdcUQa4TkKmkySeVEG5wO5EIW0tYZKhRIoy998wbE.WQ3Pdejo!/b&bo=IAQgAQAAAAADFzc!&rf=viewer_4') no-repeat;
		background-size: cover;
		padding: 0 24rpx;
	}
	.health-text{
		font-size: 32rpx;
	}
	.join-text{
		font-size: 26rpx;
		color: #F9CCA8;
	}
	.join-icon{
		display: inline-block;
		width: 28rpx;
		height: 26rpx;
		position: relative;
		left: 6rpx;
		top: 2rpx;
	}
	.health-house{
		position: absolute;
		right: 24rpx;
		top: -64rpx;
		width: 200rpx;
		height: 250rpx;
	}
	.fire{
		display: inline-block;
		width: 28rpx;
		height: 34rpx;
		position: relative;
		top: 30rpx;
		left: 6rpx;
	}
	.activity-holder{
		width: 100%;
		height: 340rpx;
		white-space: nowrap;
	}
	.activity-item{
		display: inline-block;
		width: 296rpx;
		margin-left: 24rpx;
	}
	.activity-item image{
		width: 100%;
		height: 198rpx;
	}
	.activity-item:last-child{
		margin-right: 24rpx;
	}
	.activity-item .activityTitle{
		font-size: 26rpx;
		color: #5a5a5a;
		display: block;
	}
	.activity-item .activity-content{
		font-size: 22rpx;
		color: #474A56;
		position: relative;
		top: -6rpx;
	}
	.storeContainer{
		padding: 0 24rpx;
		box-sizing: border-box;
	}
	.sotre-item{
		margin-top: 66rpx;
		height: 192rpx;
		background: #f4f4f4;
		border-radius: 8rpx;
	}
	.storeImg{
		width: 192rpx;
		height: 192rpx;
		float: left;
		margin-top: -42rpx;
	}
	.storeInfo{
		box-sizing: border-box;
		padding-left: 22rpx;
		height: 192rpx;
		width: calc(100% - 192rpx);
	}
	.storeName{
		color: #333;
		font-size: 30rpx;
	}
	.storeSite{
		color: #F96D1B;
		font-size: 24rpx;
		float: right;
		margin-top: 8rpx;
		font-weight: bold;
	}
	.storeAddress{
		color: #9b9b9b;
		font-size: 24rpx;
	}
</style>

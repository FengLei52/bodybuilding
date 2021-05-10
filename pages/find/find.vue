<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navHolder position-fixed fixed-top text-center title-text">
			<text class="font-weight">发现</text>
		</view>
		<view class="content">
			<view class="hotTitle flex head-top">
				<text class="vice-title">热门话题</text>
			</view>
			<view class="popular">
				<swiper class="imageContainer" style="height: 390rpx;" @change="handleChange" previous-margin="50rpx" next-margin="50rpx" circular  autoplay>
					<block v-for="(item,index) in imgList" :key="index">
						<swiper-item class="swiperitem">
							<image class="itemImg" :class="currentIndex == index ? 'swiperactive': ''" :src="item.src" lazy-load mode="scaleToFill"></image>
							<text class="findTitle" :class="currentIndex == index ? 'block': ''">{{item.title}}</text>
						</swiper-item>
					</block>
				</swiper>
			</view>
			<view class="activity flex">
				<text class="vice-title">推选文章</text>
				<view class="more-holder flex-share">
					<text class="vice-tips">更多文章</text>
					<text class="iconfont" style="font-size: 24rpx;">&#xe605;</text>
				</view>
			</view>
			<scroll-view scroll-x="true" class="pushHolder">
				<view class="pushItem">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESkF4fPxfae5XBLSiVNPgcE75rT4EmBHaO3yF7UZOShomah.THUx8p5SiAQZYaaDOuw!!/mnull&bo=0QFYAgAAAAADB6g!&rf=photolist&t=5" mode=""></image>
					<text class="block">合理健身的真正动机是变得美美哒</text>
				</view>
				<view class="pushItem">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESkF4fPxfae5XBLSiVNPgcE75rT4EmBHaO3yF7UZOShomah.THUx8p5SiAQZYaaDOuw!!/mnull&bo=0QFYAgAAAAADB6g!&rf=photolist&t=5" mode=""></image>
					<text class="block">合理健身的真正动机是变得美美哒</text>
				</view>
				<view class="pushItem">
					<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESkF4fPxfae5XBLSiVNPgcE75rT4EmBHaO3yF7UZOShomah.THUx8p5SiAQZYaaDOuw!!/mnull&bo=0QFYAgAAAAADB6g!&rf=photolist&t=5" mode=""></image>
					<text class="block">合理健身的真正动机是变得美美哒</text>
				</view>
			</scroll-view>
		</view>
		<view class="navBar position-fixed fixed-bottom flex">
			<navigator url="/pages/index/index" open-type="redirect" hover-class="none"  class="flex-share text-center">
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESg3CTxCOu1YMD2.IZPeiF*PUtDqUsg.4Zer4ygsuI2nw8Btmf0easKoJ2YoxnNXmrg!!/mnull&bo=NgA2ADYANgADByI!&rf=photolist&t=5" mode=""></image>
				<text>首页</text>
			</navigator>
			<view class="flex-share text-center">
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESk8Euhty8mjtu.yJK48MWOOcudHiEkHVKP*XW0dewdkI9XR2xpx7tVsO4QISdt08xw!!/mnull&bo=NgA2ADYANgADByI!&rf=photolist&t=5" mode=""></image>
				<text>发现</text>
			</view>
			<navigator url="/pages/my/myLogin" open-type="redirect" hover-class="none" class="flex-share text-center">
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESsQQTW280pjhhi9r934zFVVSZGlKcxItGyIGLxX3hgrRNAWm5jDyFftWhiytiIaqug!!/mnull&bo=MAA2ADAANgADByI!&rf=photolist&t=5" mode=""></image>
				<text>我的</text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				imgList:[
					{src:'http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESvVaTB7zcs2iUwzx8LYKpkgfWa9uSm5UQECbpgGD4aTxAkOtKBIBNNrPRdf.m5Lexw!!/mnull&bo=0gMfAgAAAAADB.4!&rf=photolist&t=5',title:'一些小点子让你变身健身房女王'},
				],
				currentIndex:0
			}
		},
		methods:{
			handleChange(val){
				this.currentIndex = val.detail.current;
			}
		}
	}
</script>

<style>
	.hotTitle{
		padding:0 24rpx 40rpx;
	}
	.findTitle{
		display: none;
		font-size: 32rpx;
		color: #5a5a5a;
		position: absolute;
		top: 336rpx;
	}
	.pushHolder{
		width: 100%;
		white-space: nowrap;
	}
	.pushItem{
		display: inline-block;
		margin-left: 22rpx;
		width: 310rpx;
	}
	.pushItem:first-child{
		margin-left: 50rpx;
	}
	.pushItem:last-child{
		margin-right: 50rpx;
	}
	.pushItem image{
		width: 310rpx;
		height: 400rpx;
	}
	.pushItem text{
		font-size: 26rpx;
		color: #5a5a5a;
		display: inline-block;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
</style>

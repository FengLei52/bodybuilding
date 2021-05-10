<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="logoHolder">
			<image src="http://q4yqddmn6.bkt.clouddn.com/new.png" mode=""></image>
		</view>
		<view class="paddingLR">
			<view class="teachingSlogan">
				<text class="text-white medium block">Abort us</text>
				<text class="text-white text-big block">公司简介</text>
			</view>
			<!-- <view>
				<view class="bubble">
					<view class="bubbleItem">
						<view class="mask"></view>
					</view>
				</view>
			</view> -->
			<view class="introduce">
				<text class="block text-big text-white">Cntorprise ofticiol wobtito</text>
				<text class="block text-big text-white">运动是善度余暇度极好方式</text>
				<view class="sprotCont">
					<text class="text-small white">FL健身俱乐部，是由1998年冯氏商会股东委员会全票通过，正式建立的，它的初衷是让男人没有前列腺，女人都有马甲线！为了达到这一目的，冯氏商会董事长亲历亲为，有规律的作息，高强度的教程定制，才有了如今的魔鬼身材，得以在娱乐圈中游龙潜水，有来有回。哇喀喀喀喀喀喀喀喀喀喀喀喀喀喀喀</text>
				</view>
			</view>
		</view>
		<view class="navBar position-fixed fixed-bottom flex backNo">
			<navigator url="/pages/index/index" open-type="redirect" hover-class="none"  class="flex-share text-center">
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESg3CTxCOu1YMD2.IZPeiF*PUtDqUsg.4Zer4ygsuI2nw8Btmf0easKoJ2YoxnNXmrg!!/mnull&bo=NgA2ADYANgADByI!&rf=photolist&t=5" mode=""></image>
				<text>首页</text>
			</navigator>
			<view class="flex-share text-center">
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESo5QjcjpuYW8SzQgdWSmLGQtbRb85gvIE1MnGy6MnkHBKFmNSpSBz70TDcJqR6g4sQ!!/mnull&bo=NgA2ADYANgADByI!&rf=photolist&t=5" mode=""></image>
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
	.status_bar{
		background: rgb(22,25,30);
	}
	page{
		width: 100%;
		height: 100vh;
		background: url('http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESjbEwNCylp28s2nbIFAbjNzdKyhnP9Kltyoviez9G.wnBlFOopJSJPg1zmhBfRa8dQ!!/mnull&bo=gAJqBWUEhAkDByM!&rf=photolist&t=5') no-repeat;
		background-size: 100% 100%;
	}
	.backNo{
		background: none;
	}
	.white{
		color: rgba(255,255,255,.72);
	}
	.logoHolder{
		margin-top: var(--status-bar-height);
		width: 86rpx;
		height: 88rpx;
		padding: 20rpx 0 0 48rpx;
	}
	.logoHolder image{
		width: 100%;
		height: 100%;
	}	
	.teachingSlogan{
		margin: 6.5% 0 48rpx;
	}
	.paddingLR{
		padding: 0 48rpx;
	}
	.bubble{
		overflow: hidden;
		height: 126rpx;
		width: 168rpx;
	}
	.bubbleItem{
		width: 108rpx;
		height: 146rpx;
		border-radius: 0 100% 10% 0;
		margin-top: -20rpx;
		background: #000000;
	}
	.mask{
		
	}
	.introduce{
		padding: 68rpx 38rpx;
		background: rgba(33,70,150,.6);
		border-radius: 20rpx;
	}
	.sprotCont{
		margin-top: 30rpx;
		text-align: justify;
	}
</style>

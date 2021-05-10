<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="logoHolder">
			<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESkpifZ3baksr3mmkLuDb9pI0OSLS9m40k9fU67wJy6bYo5xdnIC0UO7NvYchJftsbw!!/mnull&bo=BQEIAQUBCAEDByI!&rf=photolist&t=5" mode="" @tap="goIndex"></image>
		</view>
		<view class="teachingSlogan">
			<text class="text-white medium block text-center">Education Environment</text>
			<text class="text-white big block text-center">教学环境</text>
		</view>
		<swiper class="imageContainer" indicator-dots="true" indicator-active-color="#fff" indicator-color="#B7C4CC" @change="handleChange" previous-margin="70rpx" next-margin="70rpx" circular  autoplay>
			<block v-for="(item,index) in imgList" :key="index">
				<swiper-item class="swiperitem">
					<image class="itemImg" :class="currentIndex == index ? 'swiperactive': ''" :src="item" lazy-load mode="scaleToFill"></image>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[
					'http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESkhLZEBUnfy9Dcf3QMAOysI9f6oNlN2iz0TaOVs24ciC36yHUPBenFhsSkgXQKeSYw!!/mnull&bo=ewMKBXsDCgUDByI!&rf=photolist&t=5',
					'http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESiIBXWLDsIVYWT4QMN8hdaSRdjZeqgGQnEPIOlb0S2XhmMK3LnNyAFurA3.2zL3F8g!!/mnull&bo=UgJcA1ICXAMDByI!&rf=photolist&t=5',
					'http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESmuOKYsfJ8GGo97sls0bx1oiOU7iZzxF06We4VerxxRpfhhV7k.r0vfiInUqKibp9A!!/mnull&bo=ewMKBXsDCgUDByI!&rf=photolist&t=5',
					'http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESt32zQyxT3wjBPdmFfyzJYO4W1z3*dMcjxs18O7EHsu0L*OgufVmw5AUyJV4K*ZSYA!!/mnull&bo=ewMKBXsDCgUDByI!&rf=photolist&t=5'
				],
				currentIndex:0
			}
		},
		methods: {
			handleChange(val){
				this.currentIndex = val.detail.current;
			},
			goIndex(){
				uni.navigateTo({
					url:'./index'
				})
			}
		}
	}
</script>

<style>
	.status_bar{
		background: rgb(14,51,115);
	}
	.medium{
		font-size: 32rpx;
	}
	.big{
		font-size: 44rpx;
	}
	page{
		background: url('http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dEShsAN15kiTSxPYHOcq7je6TqUW0kqjqOMGTf25nThgYEeA4byTZms9n8hMH6w*2smg!!/mnull&bo=5wOaAucDmgIDByI!&rf=photolist&t=5') no-repeat;
		background-size: 100% 100%;
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
		margin: 5.2% 0 48rpx;
	}
	.imageContainer {
		width: 100%;
		height: 848rpx;
	}
	.swiperitem{
		height: 580rpx;
		width: 526rpx;
	}
	.itemImg{
		height: 620rpx;
		top: 11%;
	}
	.swiperactive{
		height: 788rpx;
		top: 0;
	}
</style>

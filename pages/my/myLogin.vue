<template>
	<view>
		<view class="navHolder position-fixed fixed-top text-center title-text">
			<text class="font-weight">我的</text>
		</view>		
		<view class="content">
			<view class="infoContainer head-top">
				<view class="infoItem">
					<view class="userInfo" v-if="warrant==0">
						<view class="headPhoto text-center">
							<text class="iconfont block" style="font-size: 150rpx;color: #707070;">&#xe607;</text>
						</view>					
						<button class="btnGet" open-type="getUserInfo" @tap="getPower">登录/注册</button>
					</view>
					<view class="userInfo" v-if="warrant==1">
						<view class="headPhoto text-center">
							<image :src="userInfo.avatarUrl" mode=""></image>
						</view>					
						<text class="block nickName">{{userInfo.nickName}}</text>
					</view>
					<view class="myData flex">
						<view class="flex-share text-center">
							<text class="block text-white" style="font-size: 44rpx;">{{dataInfo.diffHour}}</text>
							<text class="block text-white company">小时</text>
						</view>
						<view class="flex-share text-center leri-border">
							<text class="block text-white" style="font-size: 44rpx;">{{dataInfo.diffDay}}</text>
							<text class="block text-white company">天</text>
						</view>
						<view class="flex-share text-center">
							<text class="block text-white" style="font-size: 44rpx;">{{dataInfo.frequency}}</text>
							<text class="block text-white company">次</text>
						</view>
					</view>
				</view>
			</view>
			<navigator url="/pages/my/healthBase" open-type="redirect" hover-class="none" class="myOptions">体测数据</navigator>
			<view class="myOptions">我的收藏</view>
			<view class="myOptions">我的课程</view>
			<view class="myOptions">我的预约</view>
		</view>
		<!-- 二次认证手机授权 -->
		<!-- <view class="dialog" v-if="warrant==1">
			<view class="diaCheck">
				<view class="diaTitle">
					<text>手机权限申请</text>
				</view>
				<view class="diaTips">
					<text>为了账户安全，请绑定手机号，如拒绝将登录失败</text>
				</view>
				<view class="diaBtn">
					<button>拒绝</button>
					<button class="allow" open-type="getPhoneNumber" @getphonenumber="getPhone">允许</button>
				</view>
			</view>
		</view> -->
		<view class="navBar position-fixed fixed-bottom flex">
			<navigator url="/pages/index/index" open-type="redirect" hover-class="none"  class="flex-share text-center">
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESg3CTxCOu1YMD2.IZPeiF*PUtDqUsg.4Zer4ygsuI2nw8Btmf0easKoJ2YoxnNXmrg!!/mnull&bo=NgA2ADYANgADByI!&rf=photolist&t=5" mode=""></image>
				<text>首页</text>
			</navigator>
			<navigator url="/pages/find/find" open-type="redirect" hover-class="none" class="flex-share text-center">
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESo5QjcjpuYW8SzQgdWSmLGQtbRb85gvIE1MnGy6MnkHBKFmNSpSBz70TDcJqR6g4sQ!!/mnull&bo=NgA2ADYANgADByI!&rf=photolist&t=5" mode=""></image>
				<text>发现</text>
			</navigator>
			<view class="flex-share text-center">
				<image src="http://m.qpic.cn/psc?/V14MCMD02ANAGG/gZJkV0R4*Tt*yk3U.9dESlzpLPhatSn*SZxhXPqmVbQH.TNES73IMvlB5PVw7nnLJYHFQkob9REzDckY*UdfgQ!!/mnull&bo=LQAwAC0AMAADByI!&rf=photolist&t=5" mode=""></image>
				<text>我的</text>
			</view>
		</view>
	</view>
</template>

<script>
	import apiConfigs from '../../static/api/index.js'
	import util from '../../static/util/index.js'
	export default {
		data() {
			return {
				warrant:0,
				userInfo:{
					nickName:'',
					avatarUrl:'',
					city:'',
					gender:''				
				},
				dataInfo:{
					diffDay:'',
					diffHour:'',
					frequency:''
				}
			}
		},
		onLoad() {
			this.accessPermission();
		},
		methods: {		
			//授权登录
			getPower(){
				let that = this;
				uni.getUserInfo({
				    provider: 'weixin',
				    success: function(res) {
				        // console.log(res.userInfo);
						that.userInfo.avatarUrl = res.userInfo.avatarUrl;
						that.userInfo.nickName = res.userInfo.nickName;
						that.userInfo.city = res.userInfo.city;
						that.userInfo.gender = res.userInfo.gender;
						that.toPower();
				    }
				});
			},
			//授权去登录
			toPower(){
				let that = this;
				uni.request({
					url:apiConfigs.login,
					method:'POST',
					data:that.userInfo,
					success: (res) => {
						if(res.data.ok){
							uni.setStorage({
								key:'userId',
								data:res.data.data.id,
								success: () => {
									that.getMyInfo(res.data.data.id)
								}
							})
							
						}else{
							console.log("授权登录出错！");
						}
					}
				})
			},
			// 判断scope后对应的scope.userInfo是否授权
			accessPermission() {    
				let that = this;
				uni.getSetting({
					success(res) {
						if (res.authSetting['scope.userInfo']) {
							uni.getSetting({
								success(res) {
									uni.getStorage({
										key:'userId',
										success: (res) => {
											that.getMyInfo(res.data);
										},
										fail: () => {
											that.getPower();
										}
									})
								}
							})
						}else{
							uni.getStorage({
								key:'userId',
								success: () => {
									that.warrant = 0;
									uni.clearStorage();
								}
							})
						}
					}
				})
			},
			//获取个人信息
			getMyInfo(val){
				let that = this;
				uni.request({
					url:apiConfigs.info,
					method:'POST',					data:{userId:val},
					success: (res) => {
						// console.log(res)
						var info = res.data.data;
						if(res.data.ok){
							that.warrant = 1;
							that.userInfo.nickName = info.nickName;
							that.userInfo.avatarUrl = info.headPhoto;
							console.log(new Date(info.time))
							var day = new Date().getTime();
							var result = util.dateDiff(day,info.time);
							that.dataInfo.diffDay = result.day;
							that.dataInfo.diffHour = result.hours;
							that.dataInfo.frequency = info.frequency;
						}else{
							console.log("数据异常！")
						}
					}
				})
			}
		}
	}
</script>

<style>
	.infoContainer{
		box-sizing: border-box;
		padding: 0 24rpx 24rpx;
	}
	.infoItem{
		width: 100%;
		height: 656rpx;
		background: #214696;
		border-radius: 10rpx;
		overflow: hidden;
	}
	.userInfo{
		margin: 104rpx 0 80rpx;
		height: 250rpx;
		text-align: center;
	}
	.headPhoto{
		width: 180rpx;
		height: 180rpx;
		line-height: 180rpx;
		border-radius: 50%;
		background: #fff;
		display: inline-block;
		overflow: hidden;
	}
	.headPhoto image{
		width: 100%;
		height: 100%;
	}
	.nickName{
		font-size: 32rpx;
		color: #fff;
		line-height: 72rpx;
	}
	.myData{
		padding: 0 92rpx;
		box-sizing: border-box;
	}
	.company{
		font-size: 26rpx;
		color: #fff;
		opacity: 0.72;
	}
	.leri-border{
		border-left: 1rpx solid rgba(255,255,255,0.72);
		border-right: 1rpx solid rgba(255,255,255,0.72);
	}
	.myOptions{
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		color: #333;
		font-size: 32rpx;
		margin-bottom: 50rpx;	
	}
	.btnGet{
		display: block;
		color: #fff;
		background: none!important;
	}
	.btnGet::after{
		content: none;
	}
</style>

<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="navHolder position-fixed fixed-top text-center title-text">
			<text class="iconfont float-left indentNav font-weight" @tap="navBack">&#xe60c;</text>
			<text class="font-weight">体测数据</text>
		</view>
		<view class="userInfo head-top">
			<text class="font-weight">Aanmy</text>
			<image src="http://q4yqddmn6.bkt.clouddn.com/coachWu.png" class="float-right headPhoto" mode=""></image>
		</view>
		<view class="flex">
			<view class="flex-share lineView">
				<view class="text-center">
					<text class="mathSize">22</text>
					<text class="block text-grey text-small">年龄</text>
				</view>				
			</view>
			<view class="flex-share lineView">
				<view class="text-center">
					<text class="mathSize">50.</text><text>02</text>
					<text class="block text-grey text-small">体重(kg)</text>
				</view>				
			</view>
			<view class="flex-share lineView">
				<view class="text-center">
					<text class="mathSize">160</text><text>.cm</text>
					<text class="block text-grey text-small">身高</text>
				</view>				
			</view>
		</view>
		<view class="scoreHealth">
			<view class="block">
				<text class="score font-weight">98</text>
				<view class="scoreInfo">
					<text style="margin-top: 40rpx;">体测评分</text>
					<text class="block text-grey small">2019-12-30   10:30:22 测试</text>
					<text class="iconfont abRight">&#xe605;</text>
				</view>
			</view>
		</view>
		<view class="contentLR">
			<view class="analyseTitle">
				<text class="lifeAnaly">身体成份分析</text>
				<view class="inView">
					<text class="look">查看</text>
					<text class="iconfont text-grey">&#xe605;</text>
				</view>
			</view>
			<view class="ucharts">
				<view class="chartsPack">
					<!--#ifdef MP-ALIPAY -->
					<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}" @touchstart="touchRadar"></canvas>
					<!--#endif-->
					<!--#ifndef MP-ALIPAY -->
					<canvas canvas-id="canvasRadar" id="canvasRadar" class="charts" @touchstart="touchRadar"></canvas>
					<!--#endif-->
				</view>
			</view>
			
			<view class="fatAnaly">
				<view class="analyseTitle">
					<text class="lifeAnaly">肥胖分析</text>
				</view>
				<view class="fatData">
					<text class="block small text-grey">身体质量参数(BM)</text>
					<view class="detailView flex">
						<view class="flex-share-3 linePack">
							<view class="quality" style="width: 44%;"></view>
						</view>
						<view class="flex-share mathData">
							<text class="fatColor">13.06</text>
							<text class="norm text-grey">偏高</text>
						</view>
					</view>
				</view>
				<view class="fatData">
					<text class="block small text-grey">体质百分比(PBF)</text>
					<view class="detailView flex">
						<view class="flex-share-3 linePack">
							<view class="quality physiqueLine" style="width: 66%;"></view>
						</view>
						<view class="flex-share mathData">
							<text class="fatColor physique">18.06</text>
							<text class="norm text-grey">标准</text>
						</view>
					</view>
				</view>
				<view class="fatData">
					<text class="block small text-grey">腰臀比(WHR)</text>
					<view class="detailView flex">
						<view class="flex-share-3 linePack">
							<view class="quality physiqueLine" style="width: 50%;"></view>
						</view>
						<view class="flex-share mathData">
							<text class="fatColor physique">15.06</text>
							<text class="norm text-grey">标准</text>
						</view>
					</view>
				</view>
			</view>
			<view class="fatAnaly viewTop">
				<view class="analyseTitle">
					<text class="lifeAnaly">控制建议</text>
				</view>
				<view class="proposal flex">
					<view class="flex-share text-center">
						<text class="small text-grey">肌肉控制(KG)</text>
						<text class="fatColor block font-weight">+0.00</text>
					</view>
					<view class="flex-share text-center">
						<text class="small text-grey">脂肪控制(KG)</text>
						<text class="fatColor block font-weight">-6.00</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '../../js_sdk/u-charts/u-charts/u-charts.min.js';
	import apiConfigs from '../../static/api/index.js'
	var _self;
	var canvaRadar=null;
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				textarea:'',
				radar:{
					categories:['体重kg','骨骼肌kg','体肪脂kg','身体水分含量kg','去脂体重kg'],
					series:[{
						name:'',
						data:[46.06,40.06,13.06,39.09,39.09]
					}]
				}
			}
		},
		onLoad() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio>1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio =2;
					}
				}
			});
			//#endif
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.radarInit();
		},
		methods: {
			navBack(){
				uni.navigateTo({
					url:'myLogin'
				})
			},
			radarInit(){
				this.showRadar("canvasRadar",this.radar)
			},
			showRadar(canvasId,chartData){
				canvaRadar=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'radar',
					fontSize:11,
					padding:[0,0,-30,-20],
					fontColor:'#fff',
					legend:{
						show:false,
						padding:5,
						lineHeight:11,
						margin:0,
					},
					background:'#fff',
					pixelRatio:_self.pixelRatio,
					animation: true,
					dataLabel: true,
					categories: chartData.categories,
					series: chartData.series,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						radar: {
							max: 200//雷达数值的最大值
						}
					}
				});
			},
			touchRadar(e){
				canvaRadar.touchLegend(e);
				canvaRadar.showToolTip(e, {
					format: function (item) {
						return item.name + ':' + item.data 
					}
				});
			},
			getInfo(){
				let that = this;
				uni.request({
					url:ANGLE_instanced_arrays
				})
			}
		}
	}
</script>

<style>
	.viewTop{
		margin-top: 40rpx;
	}
	.mathSize{
		font-size: 50rpx;
		color: #333;
	}
	.userInfo{
		padding: 0 28rpx;
		height: 106rpx;
		line-height: 136rpx;
		margin-bottom: 30rpx;
	}
	.headPhoto{
		display: inline-block;
		width: 104rpx;
		height: 104rpx;
		border-radius: 50%;
	}
	.lineView{
		display: flex;
		align-items: center;
		justify-content: center;
		height: 184rpx;
		border-top: 1rpx solid #eee;
		border-bottom: 1rpx solid #eee;
	}
	.lineView:nth-child(2){
		border-left: 1rpx solid #eee;
		border-right: 1rpx solid #eee;
	}
	.scoreHealth{
		padding: 0 28rpx;
		height: 176rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid #eee;
	}
	.score{
		display: inline-block;
		width: 92rpx;
		height: 116rpx;
		line-height: 116rpx;
		background: #214696;
		font-size: 48rpx;
		color: #fff;
		text-align: center;
		border-radius: 8rpx;
	}
	.scoreInfo{
		width: calc(100% - 92rpx - 56rpx);
		height: 86rpx;
		display: inline-block;
		position: relative;
		margin-left: 56rpx;
		top: 30rpx;
	}
	.abRight{
		position: absolute;
		right: 0;
		top: 10rpx;
		color: #ccc;
	}
	.contentLR{
		padding: 0 28rpx 50rpx;
	}
	.analyseTitle{
		height: 120rpx;
		line-height: 120rpx;
	}
	.lifeAnaly{
		display: inline-block;
		width: 50%;
		font-size: 32rpx;
		color: #555;
		font-weight: bold;
	}
	.inView{
		display: inline-block;
		width: 50%;
		text-align: right;
	}
	.look{
		color: #214696;
		font-size: 28rpx;
		position: relative;
		top: -2rpx;
	}
	.fatAnaly{
		box-sizing: border-box;
		padding: 0 16rpx 30rpx;
		border-radius: 12rpx;
		box-shadow: 5rpx 5rpx 5rpx 5rpx #eee;
	}
	.detailView{
		padding: 0rpx 0 14rpx;
		box-sizing: border-box;
		align-items: center;
	}
	.mathData{
		padding: 0 8rpx 0 20rpx;
		box-sizing: border-box;
	}
	.linePack{
		height: 20rpx;
		overflow: hidden;
		border-radius: 10rpx;
		background: #e6e6e6;
	}
	.quality{
		height: 20rpx;
		background: #214696;
		border-radius: 10rpx;
	}
	.fatColor{
		color: #214696;
		font-size: 40rpx;
		margin-right: 6rpx;
	}
	.norm{
		font-size: 20rpx;
		position: relative;
		top: -4rpx;
	}
	.physiqueLine{
		background: #F96D1B;
	}
	.physique{
		color: #F96D1B;
	}
	.waistLine{
		background: #F87060 ;
	}
	.waist{
		color: #F87060 ;
	}
	.ucharts{
		margin-bottom: 30rpx;
		padding: 24rpx;
		box-sizing: border-box;
	}
	.chartsPack{
		height: 576rpx;
		background: #214694;
		box-sizing: border-box;
		border-radius: 14rpx;
	}
	.charts{
		width: 100%;
		height: 576rpx;
	}
</style>

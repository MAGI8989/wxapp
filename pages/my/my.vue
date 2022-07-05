<template>
	<view>

		<div class="main">
			<div class="mycard"  v-bind:class="vipCode?'vip':'notvip'">
				<div class="headbox">
					<div class="avatarbox">
						<u-avatar :src="myImg" shape="circle" size="60"></u-avatar>
					</div>
					<div class="nicknamebox">
						<p class="nickname">{{myName}}</p>
					</div>
					<div class="integralbox">
						<p style="float: inline-end;font-size: 22rpx;">会员积分</p>
						<p class="integral">{{myIntegral}}</p>
					</div>
				</div>
				<div class="bodybox">
					<p class="phone">{{myPhone}}</p>
					<p class="vipmessage">{{myVip}}</p>
				</div>
			</div>
			<div class="buttonbox">
				<u-cell-group>
					<div class="orderhistory">
						<u-cell icon="order" title="历史账单" :isLink="true" arrowDirection="right" center="true" clickable="true" @click="JumpToOrderHistory"></u-cell>
					</div>
				</u-cell-group>
			</div>
		</div>
	</view>
</template>

<script>
	import store from "@/store/store.js"
	export default {
		data() {
			return {
				myImg:"",
				myVip:"",
				myName:"",
				myIntegral:0,
				myPhone:0,
				vipCode:0
			}
		},
		methods: {
			JumpToOrderHistory(){
				wx.navigateTo({
					url:"../orderhistory/orderhistory"
				})
			},
			myInit(){
				let temp=store.getters.getCustomerMessage
				
				this.vipCode=temp.vipCode
				this.myName=temp.myName
				this.myIntegral=temp.myIntegral
				this.myVip=this.vipCode?"会员用户":"非会员用户"
				this.myPhone=temp.myPhone
				this.myImg=temp.myImg
			}
		},
		onLoad() {
			this.myInit()
		}
	}
</script>

<style scoped>
	.main{display: table;background-color: #f3f4f5;height: 100vh;}
	.mycard{width: 90%;margin-left: 5%;margin-top:2vh;padding-top:5vw;margin-right: 5%;height: 25vh;border-radius: 15px;border-radius: 15px;border: none;cursor: pointer;border-radius: 26rpx;box-shadow: 4px 4px 5px 2px rgb(122, 122, 122),-4px -4px 5px 2px #fff;-o-user-select: none;pointer-events: none;}
	.vip{background-color: #202326;color: #fafafa;}
	.notvip{background-color: #FED100;color: #202326;}
	
	.headbox{display:flex;margin-left: 5vw;margin-right: 5vw;width: 100%;height: 30%;}
	.avatarbox{width: auto;height: 15vw;}
	.nicknamebox{width: 50vw;margin-left: 2vw;height: 15vw;}
	.nickname{font-size: 40rpx;line-height: 15vw;float:left;align-items: center;}
	.integralbox{width: auto;float: inline-end;height: 15vw;height: 15vw;padding-right: 5vw;margin-right: 5vw;}
	.integral{font-size: 33rpx;float: inline-end;}
	
	.bodybox{height: 70%;display: flex;justify-content: space-between;font-size: 33rpx;padding: 2vw;margin-top: auto;margin-bottom: 20rpx;}
	/* .phone{font-size: 33rpx;}
	.vipmessage{font-size: 33rpx;float: inline-end;} */
	
	.buttonbox{width: 90%;margin-left: 5%;margin-right: 5%;height: auto;margin-top: 2vh;}
	.orderhistory{width: 90%;margin-left: 5%; }
	
</style>

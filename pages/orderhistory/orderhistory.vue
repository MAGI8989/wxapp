<template>
	<view>
		<div class="main">
			<div class="cardarea">
				<div v-for="(order,index) in orderHistory" :key="index" class="card">
					<div class="dishbox">
						<u-cell-group>
							<u-cell v-for="Dish in order.FoodList" :title="Dish.DishName" :label="'份数：'+Dish.DishCount" :value="'¥ '+Dish.DishPrice"></u-cell>
						</u-cell-group>
					</div>
					<div class="ordermessagebox">
						<div class="datebox">
							<p class="date">时间：{{order.OrderEndTime}}</p>
						</div>
						<div class="amountbox">
							<p class="amount">总金额：{{order.OrderAmount}}</p>
						</div>
					</div>
					<div class="writebutton" v-if="order.commentState==false">
						<u-button @click="writeComment(order.OrderId)">点击评论</u-button>
					</div>
				</div>
			</div>
		</div>
		<u-popup :show="writeboxshow" closeable=true @close="writeboxclose()" @open="writeboxopen()">
			<view>
				<div class="writebox">
					<div class="ratebox">
						<p style="float: left;width: 30vw;">评价</p>
						<u-rate :count="5" v-model="rate" activeColor="#fa3534" inactiveColor="#f9ae3d" touchable="true" allowHalf="true" size="30"></u-rate>
					</div>
					<u--textarea v-model="comment" placeholder="请输入内容" count maxlength="50"></u--textarea>
					<u-button type="success" text="提交" shape="circle" @click="InsertComment"></u-button>
				</div>
			</view>
		</u-popup>
	</view>
</template>
<script>
import {getMethod,postMethod} from "@/API/requests.js"
import {getorderHistory,commentSet,updateOrder} from "@/API/api.js"
import store from "@/store/store.js"
import {AlertMsg} from "@/API/msgAlert.js"
	export default {
		data() {
			return {
				orderHistory:[
						{
							"OrderId": 0,
							"OrderEndTime": "2022-2-2 2:22:22",
							"OrderAmount": 654.546,
							"commentState":true,
							"FoodList": [
								{
									"DishCode": 0,
									"DishCount": 1,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								},{
									"DishCode": 1,
									"DishCount": 2,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								},{
									"DishCode": 2,
									"DishCount": 3,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								}
							]
						},{
							"OrderId": 1,
							"OrderEndTime": "2022-2-2 2:22:22",
							"OrderAmount": "654.546",
							"commentState":false,
							"FoodList": [
								{
									"DishCode": 0,
									"DishCount": 1,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								},{
									"DishCode": 1,
									"DishCount": 2,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								},{
									"DishCode": 2,
									"DishCount": 3,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								}
							]
						},{
							"OrderId": 2,
							"OrderEndTime": "2022-2-2 2:22:22",
							"OrderAmount": "654.546",
							"commentState":true,
							"FoodList": [
								{
									"DishCode": 0,
									"DishCount": 1,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								},{
									"DishCode": 1,
									"DishCount": 2,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								},{
									"DishCode": 2,
									"DishCount": 3,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								}
							]
						},{
							"OrderId": 3,
							"OrderEndTime": "2022-2-2 2:22:22",
							"OrderAmount": "654.546",
							"commentState":false,
							"FoodList": [
								{
									"DishCode": 0,
									"DishCount": 1,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								},{
									"DishCode": 1,
									"DishCount": 2,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								},{
									"DishCode": 2,
									"DishCount": 3,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								}
							]
						},{
							"OrderId": 4,
							"OrderEndTime": "2022-2-2 2:22:22",
							"OrderAmount": "654.546",
							"commentState":false,
							"FoodList": [
								{
									"DishCode": 0,
									"DishCount": 1,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								},{
									"DishCode": 1,
									"DishCount": 2,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								},{
									"DishCode": 2,
									"DishCount": 3,
									"DishPrice": 0.01,
									"DishName": "烤鸭"
								}
							]
						},
				],
				CustomerCode:0,
				writeboxshow:false,
				rate:0,
				comment:"",
				ordercode:0
			}
		},
		methods: {
			getData(){
				let url=getorderHistory
				getMethod(url,{"customerId":store.getters.getCustomerCode})
				.then((res)=>{
					let Data=res[1].data.data
					let temp=[]
					for (let temphis of Data) {
						let tempList=[]
						for (let dish of temphis.orderFoodList) {
							tempList.push({
								"DishCode": dish.foodId,
								"DishCount": dish.orderFoodNum,
								"DishPrice": dish.foodPromotionPrice>0?dish.foodPromotionPrice:dish.foodNormalPrice,
								"DishName": dish.foodName
							})
						}
						let tempcommetn=""
						if(temphis.orderEvaluation===null||temphis.orderEvaluation[1]=="u"){
							
						}else{
							tempcommetn=temphis.orderEvaluation
						}
						// 通过菜品id数组查询dishname
						temp.push({
							"OrderId":temphis.orderId,
							"OrderEndTime":temphis.createTime.slice(0,19),
							"OrderAmount":temphis.orderAmount,
							"commentState":tempcommetn.length>0?false:true,
							"OrderDesc":temphis.orderDesc,
							"OrderState":temphis.orderState,
							"FoodList":tempList
						})
					}
					// console.log(res)
					console.log(temp)
					this.orderHistory=temp
				})
				.catch((err)=>{
					let errs="网络层错误"
					console.log(err)
					AlertMsg.MsgShow(errs)
				})
			},
			writeComment(ordercode){
				this.ordercode=ordercode
				console.log(ordercode)
				this.writeboxopen()
			},
			writeboxopen(){
				this.writeboxshow=true
			},
			writeboxclose(){
				this.writeboxshow=false
			},
			insertComment(){
				
			},
			InsertComment(){
				let orderId=this.ordercode
				let customerId=store.getters.getCustomerCode
				let data={
					"orderId":orderId,
					"customerId":customerId,
					"orderEvaluation":this.rate.toFixed(1)+"/"+this.comment
				}
				postMethod(updateOrder,data)
				.then((res)=>{
					console.log(res)
					this.writeboxshow=false
					for (let temporderhis of this.orderHistory) {
						if(temporderhis.OrderId==orderId){
							temporderhis.commentState=true
						}else{
							continue
						}
						
					}
				})
			}
		},
		onLoad() {
			this.getData()
		}
		
	}
</script>
<style scoped>
	.main{height: 100vh;}
	.cardarea{overflow: auto;width: 100vw;height: 100vh;}
	.card{margin-top: 5vh;border-radius: 15px;border-radius: 15px;border: none;cursor: pointer;border-radius: 26rpx;box-shadow: 4px 4px 5px 2px rgb(200, 200, 200),-4px -4px 5px 2px #fff;}
	.dishbox{overflow: auto;}
	
	.ordermessagebox{display: inline-flex;width: 100%;margin-bottom: 2vh;margin-top: 1vh;}
	.datebox{float: left;width: 60%;}
	.date{float: left;margin-left: 3vw;font-size: 28rpx;}
	.amountbox{float: right;width: 40%;}
	.amount{float: right;margin-right: 3vw;font-weight: 450;}
	
	.writebox{background-color: #fafafa;width: 100vw;height: 23vh;padding-top: 1vh;}
	.ratebox{display: flex;height: 20%;width: 80%;align-items: center;}
	.writebutton{background-color: #202326;color: #fafafa;}
	::-webkit-scrollbar {display: none;}
	body{-o-user-select: none;pointer-events: none;}
</style>

<template>
	<view class="content">
		<div class="NoticeBar">
			<tui-icon name="news" size="20" color="#f9ae3d"></tui-icon>
			<text class="noticetext">{{Notice}}</text>
		</div>
		<div class="main">
			<uni-row>
				<uni-col span="4">
					<div class="styles">
						<!-- 侧边菜品分类 -->
						<tui-list-view class="styles_box">
							<tui-list-cell v-for="(item,index) in MenuData" :key="index" :size="24" :unlined="true" class="styleitem" :ref="'SytleItem'+item.CategoryItem.CategoryCode" @click="styleclick('Style'+item.CategoryItem.CategoryCode)">
									{{item.CategoryItem.CategoryName}}
							</tui-list-cell>
						</tui-list-view>
					</div>
				</uni-col>
				<uni-col span="8">
					<div class="dishes">
						<scroll-view v-bind:scroll-into-view="toView":scroll-y="true" :scroll-with-animation="true" class="dishes" enable-back-to-top="true">
							<tui-list-view>
								<tui-list-cell v-for="item in MenuData" :key="item.name">
									<view :id="'Style'+item.CategoryItem.CategoryCode">##{{item.CategoryItem.CategoryName}}
										<tui-list-view class="dishes_view">
											<tui-list-cell v-for="Dish in item.CategoryItem.Dish" :key="Dish.index" class="dishitem" backgroundColor="#fafafa" arrow="true">
												<image :src="Dish.Dishitem.Picture.MenuPicture" class="dishitem_pic" @click="DishItemClick(''+Dish.Dishitem.DishCode)"></image>
												<div class="dishitem_show_detail">
													<p class="dishitem_name"  @click="DishItemClick(''+Dish.Dishitem.DishCode)">{{Dish.Dishitem.DishName}}</p>
													<div class="tags_box"  @click="DishItemClick(''+Dish.Dishitem.DishCode)">
														<tui-tag class="dishitem_tag" v-for="tag in Dish.Dishitem.Tags" type="gray" shape="square"> {{tag}}</tui-tag>
													</div>
													<div style="display: flex;"  @click="DishItemClick(''+Dish.Dishitem.DishCode)">
														<p class="monthamount">月售{{Dish.Dishitem.MonthAmount}}</p>
													</div>
													<div  @click="DishItemClick(''+Dish.Dishitem.DishCode)">
														<div  v-if="Dish.Dishitem.PromotionPrice==-1" class="price_box">
															<p class="dishitem_promotion_price">{{Dish.Dishitem.NormalPrice}}</p>
														</div>
														<div v-else class="price_box">
															<p class="dishitem_normal_price">{{Dish.Dishitem.NormalPrice}}</p>
															<p class="dishitem_promotion_price">{{Dish.Dishitem.PromotionPrice}}</p>
														</div>
													</div>
													<div style="">
														<div>
															<button class="MenuAddToShoppingCart" @click="MenuAddToShoppingCartClick(''+Dish.Dishitem.DishCode)" :id="'AddButton'+Dish.Dishitem.DishCode"  :class="Dish.Dishitem.AddButtonShow?'':'DisplayNone'">
																<p class="MenuAddToShoppingCartPlus">+</p>
															</button>	
														</div>
														<div :class="Dish.Dishitem.AddButtonShow?'DisplayNone':''" class="number_box">
															<u-number-box :step="1" :min="0" :disabledInput="true" :value="Dish.Dishitem.DishCount" bgColor="#FED100" @change="setDishCount" :name="'NumberBox'+Dish.Dishitem.DishCode"></u-number-box>
														</div>
													</div>
												</div>
											</tui-list-cell>
										</tui-list-view>
									</view>
								</tui-list-cell>
							</tui-list-view>
						</scroll-view>
					</div>
				</uni-col>
				<tui-fab v-if="BackToTheTopControl" :left="auto" :right="25" :btnList="btnList" :width="70" :height="70" :bottom="200" bgColor="#fafafa" @click="BackToTheTop">
					<tui-icon name="top" color="#202326" size="25"></tui-icon>
				</tui-fab>
			</uni-row>
		</div>
		<div class="shopping_cart_container">
			<button @click="ShoppingCartClick()" class="shopping_cart_button">已选菜品</button>
		</div>
		<u-popup :show="ShoppingCartShow" ref="popup" type="bottom" @close="ShoppingCartClose()" @open="ShoppingCartOpen()" closeOnClickOverlay="true" closeable="true" round="20">
			<view>
				<!-- 已购菜品 -->
				<div class="shopping_cart_head">
					<div class="shopping_cart_message">
						<p class="shopping_cart_title">购物车</p>
						<br/>
						<p class="shopping_cart_selecteddishes">已选菜品</p>
					</div>
					<div v-if="PayAmount==0" class="shopping_cart_sum_container">
						<p class="shopping_cart_sum">合计:&nbsp{{(SumPrice).toFixed(2)}}</p>
					</div>
					<div v-else class="shopping_cart_paied_container">
						<p class="shopping_cart_paied_sum">合计:&nbsp{{(SumPrice).toFixed(2)}}</p>
						<p class="shopping_cart_paied_sumPrice">实际支付:&nbsp{{(PayAmount).toFixed(2)}}</p>
					</div>
				</div>
				<div class="divder"></div>
				<u-line color="#202326" dashed></u-line>
				<div class="shopping_cart_box">
					<tui-list-view>
						<tui-list-cell v-for="DishItem in Dishes" :key="DishItem.Dishitem.id" v-if="DishItem.Dishitem.DishCount>0" class="shopping_cart_card">
							<div class="shopping_cart_message_box">
								<p class="shopping_cart_dishname">{{DishItem.Dishitem.DishName}}</p>
							</div>
							<div class="shopping_cart_price_box">
								<p class="shopping_cart_dishcount">份数：&nbsp{{DishItem.Dishitem.DishCount}}</p><br>
								<p v-if="DishItem.Dishitem.PromotionPrice>0" class="shopping_cart_price">¥&nbsp{{(DishItem.Dishitem.PromotionPrice*DishItem.Dishitem.DishCount).toFixed(2)}}</p>
								<p v-else class="shopping_cart_price" >¥&nbsp{{(DishItem.Dishitem.NormalPrice*DishItem.Dishitem.DishCount).toFixed(2)}}</p>
							</div>			
						</tui-list-cell>
					</tui-list-view>
					
					</div>
				</div>
				<div class="requestBox">
					<u--textarea v-model="OrderDesc" placeholder="订单如有需求请填写" autoHeight></u--textarea>
				</div>
				<div v-if="SecondOrder" class="secondOrderArea">
					<button class="updatebutton" @click="UpdateOrder">更新订单</button>
					<button class="bill" @click="Bill">结账</button>
				</div>
				<div v-else class="secondOrderArea">
					<button class="submitbutton" @click="Order">提交订单</button>
					<button class="bill" @click="Bill">结账</button>
				</div>
			</view>
		</u-popup>
		<u-popup :show="DishDetailShow" mode="right" @close="DishDetailClose()" @open="DishDetailOpen()" safeAreaInsetBottom="true" class="DishDetail" closeOnClickOverlay="true">
			<view>
				<div style="background-color: #fafafa;width: 90vw;height: 100vh;padding: 20rpx;">
					<div class="DetailNav">
						<tui-icon name="arrowleft" color="#202326" size="30" @click="DishDetailClose()"></tui-icon>
					</div>
					<u-swiper :list="DishDetail.Picture" :autoplay="false" class="DetailSwiper" height="30vh" radius="15"></u-swiper>
					<div style="height: 55vh;">
						<div style="display: flex;margin: 20rpx;">
							<div style="width: 15vw;margin-right: 10vw;margin-bottom: 5vh;">
								<p class="DetailTitle">{{DishDetail.DishName}}</p>
								<div class="DetailTags_Box">
									<text v-for="item in DishDetail.Tags" :key="item.id" class="DetailTags">
										{{ item }}
									</text>
								</div>
							</div>
							<div class="DetailPriceBox">
									<p v-if="DishDetail.PromotionPrice!=-1" class="DetailPrice">¥{{DishDetail.PromotionPrice}}</p>
									<p v-else class="DetailPrice" >¥{{DishDetail.NormalPrice}}</p>
							</div>
						</div>
						<div class="DetailDescBox">
							<text class="DetailDesc">{{DishDetail.DishDesc}}</text>
						</div>
					</div>
					<button class="DetailPurchase" v-if="DishDetail.DishCount>0" @click="DetailPurchasedClick()">已添加</button>
					<button class="DetailPurchase" v-else @click="DetailPurchaseClick()">添加至购物车</button>
				</div>
			</view>
		</u-popup>
		<u-popup :show="WriteBoxShow" closeable=true @close="WriteBoxClose()" @open="WriteBoxOpen()">
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
	import {getMethod,postMethod} from "../../API/requests.js"
	// 地址引入
	import {latestOrder,menuGet,getPicture,insertOrder,updateOrder,commentSet} from "@/API/api.js"
	import {AlertMsg} from "@/API/msgAlert.js"
	import store from "@/store/store.js"
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				MenuData:{},
				ShoppingCart:[],
				DishDetail:{},
				Dishes:[],
				SumPrice:0,
				PayAmount:0,
				Notice:"通知栏",
				OrderState:0,
				TableCode:1,
				OrderCode:0,
				OrderDesc:"",
				rate:0,
				comment:"",
				// CSS控制
				ShoppingCartShow:false,
				StyleItemIsActive:false,
				DishCountTest:true,
				WriteBoxShow:false,
				DishCount:0,
				scrollTop:0,
				// toView为锚点id传值
				toView:"",
				BackToTheTopControl:true,
				DishDetailShow:false,
				SecondOrder:false
			}
		},
		components:{
		},
		onLoad() {
			// 获取数据
			this.MenuInit()
			// this.getNoticeData()
		},
		methods: {
			// 样式控制
			// 购物车弹窗控制
			ShoppingCartOpen(){
				let sum=parseFloat(0)
				for(let tempDish of this.Dishes){
					if(tempDish.Dishitem.DishCount>0){
						let count=parseInt(tempDish.Dishitem.DishCount)
						let proprice=parseFloat(tempDish.Dishitem.PromotionPrice)
						let norprice=parseFloat(tempDish.Dishitem.NormalPrice)
						if(tempDish.Dishitem.PromotionPrice>0){
							sum+=parseFloat((count*proprice).toFixed(2))
						}else{
							sum+=parseFloat((count*norprice).toFixed(2))
						}
					}
				}
				this.SumPrice=sum
				this.ShoppingCartShow=true
				this.BackToTheTopControl=false
			},
			ShoppingCartClose(){
				this.ShoppingCartShow=false
			},
			ShoppingCartClick(){
				this.ShoppingCartOpen()
			},
			styleclick(e){
				// e为锚点id
				this.toView=e
			},
			BackToTheTop(){
				//设置屏幕滚动到顶部
				this.toView="Style0"
				this.$nextTick(function(){
					this.toView=""
				})
			},
			MenuInit(){
				// let tableid=store.getters.getTalbeCode
				let tableid=1
				getMethod(menuGet,{"dinTableId":tableid})
				.then((res)=>{
					console.log(res)
					let lastOrder=res[1].data.order
					let temp=[]
					if(lastOrder===null){
						console.log("lastorder=null")
						for (let tempCategory of res[1].data.data) {
							let tempDishes=[]
							for (let tempDish of tempCategory.foodList) {
								let tempTag=[]
								tempTag=tempDish.foodTag.split(",")
								let sum=0
								let menuTag=[]
								// 限定主页tag字数
								for (let tag of tempTag) {
									sum+=tag.length
									if(sum>8){
										break
									}else{
										menuTag.push(tag)
									}
								}
								let tempPictures=[]
								for (let pic of tempDish.foodImgList) {
									tempPictures.push(getPicture+pic.foodImgUrl.replace(/\\/g,'/'))
								}
								tempDishes.push({
									"Dishitem":{
										"DishCount":0,
										"DishName":tempDish.foodName,
										"DishState":tempDish.foodState,
										"NormalPrice":tempDish.foodNormalPrice,
										"PromotionPrice":tempDish.foodPromotionPrice,
										"DishCode":tempDish.foodId,
										"DishDesc":tempDish.foodDesc,
										"Tags":menuTag,
										"MonthAmount":0,
										"Picture":{
											"MenuPicture":getPicture+tempDish.foodImg.replace(/\\/g,'/'),
											"DetailPicture":tempPictures
										}
									}
								})
								this.Dishes.push({
									"Dishitem":{
										"DishCount":0,
										"DishName":tempDish.foodName,
										"DishState":tempDish.foodState,
										"NormalPrice":tempDish.foodNormalPrice,
										"PromotionPrice":tempDish.foodPromotionPrice,
										"DishCode":tempDish.foodId,
										"DishDesc":tempDish.foodDesc,
										"Tags":tempTag,
										"MonthAmount":0,
										"Picture":{
											"MenuPicture":getPicture+tempDish.foodImg.replace(/\\/g,'/'),
											"DetailPicture":tempPictures
										}
									}
								})
							}
							temp.push({
								"CategoryItem":{
									"CategoryName":tempCategory.foodCategoryName,
									"CategoryCode":tempCategory.foodCategoryId,
									"Dish":tempDishes
								}
							})
						}
						this.MenuData=temp
						store.getters.setMenuData(temp)
						store.getters.setDishes(this.Dishes)
					}else{
						console.log("eeee")
						this.SecondOrder=true
						store.getters.setOrderCode(lastOrder[0].orderId)
						let temp=[]
						for (let tempCategory of res[1].data.data) {
							let tempDishes=[]
							for (let tempDish of tempCategory.foodList) {
								let tempTag=[]
								tempTag=tempDish.foodTag.split(",")
								let sum=0
								let menuTag=[]
								// 限定主页tag字数
								for (let tag of tempTag) {
									sum+=tag.length
									if(sum>8){
										break
									}else{
										menuTag.push(tag)
									}
								}
								let tempPictures=[]
								for (let pic of tempDish.foodImgList) {
									tempPictures.push(getPicture+pic.foodImgUrl.replace(/\\/g,'/'))
								}
								tempDishes.push({
									"Dishitem":{
										"DishCount":0,
										"DishName":tempDish.foodName,
										"DishState":tempDish.foodState,
										"NormalPrice":tempDish.foodNormalPrice,
										"PromotionPrice":tempDish.foodPromotionPrice,
										"DishCode":tempDish.foodId,
										"DishDesc":tempDish.foodDesc,
										"Tags":menuTag,
										"MonthAmount":0,
										"Picture":{
											"MenuPicture":getPicture+tempDish.foodImg.replace(/\\/g,'/'),
											"DetailPicture":tempPictures
										}
									}
								})
								this.Dishes.push({
									"Dishitem":{
										"DishCount":0,
										"DishName":tempDish.foodName,
										"DishState":tempDish.foodState,
										"NormalPrice":tempDish.foodNormalPrice,
										"PromotionPrice":tempDish.foodPromotionPrice,
										"DishCode":tempDish.foodId,
										"DishDesc":tempDish.foodDesc,
										"Tags":tempTag,
										"MonthAmount":0,
										"Picture":{
											"MenuPicture":getPicture+tempDish.foodImg.replace(/\\/g,'/'),
											"DetailPicture":tempPictures
										}
									}
								})
							}
							temp.push({
								"CategoryItem":{
									"CategoryName":tempCategory.foodCategoryName,
									"CategoryCode":tempCategory.foodCategoryId,
									"Dish":tempDishes
								}
							})
						}
						this.MenuData=temp
						// 重现数据
						for (let ordereddish of lastOrder) {
							for (let tempCategory of this.MenuData) {
								for (let tempDish of tempCategory.CategoryItem.Dish) {
									if(tempDish.Dishitem.DishCode==ordereddish.foodId){
										tempDish.Dishitem.DishCount=ordereddish.orderFoodNum
										break
									}
								}
							}
							for (let dishitem of this.Dishes) {
								if(dishitem.Dishitem.DishCode==ordereddish.foodId){
									dishitem.Dishitem.DishCount=ordereddish.orderFoodNum
									break
								}
							}
						}
						store.getters.setMenuData(temp)
					}
				})
				
			},
			// 菜品详情控制
			DishItemClick(DishCode){
				DishCode=parseInt(DishCode)
				let DetailDishData={}
				for(let Dish of this.Dishes){
					if(Dish.Dishitem.DishCode==DishCode){
						let TempPicture=[]
						TempPicture.push(Dish.Dishitem.Picture.MenuPicture)
						for(let temp of Dish.Dishitem.Picture.DetailPicture){
							TempPicture.push(temp)
						}
						DetailDishData={
							DishName:Dish.Dishitem.DishName,
							NormalPrice:Dish.Dishitem.NormalPrice,
							PromotionPrice:Dish.Dishitem.PromotionPrice,
							DishCount:Dish.Dishitem.DishCount,
							Tags:Dish.Dishitem.Tags,
							Picture:TempPicture,
							DishDesc:Dish.Dishitem.DishDesc,
							DishCode:Dish.Dishitem.DishCode
						}
						this.DishDetail=DetailDishData
						break
					}
				}
				this.DishDetailOpen()
			},
			DishDetailClose(){
				this.DishDetailShow=false
				this.BackToTheTopControl=true
			},
			DishDetailOpen(){
				this.DishDetailShow=true
				this.BackToTheTopControl=false
			},
			// 详情页面添加按钮
			DetailPurchaseClick(){
				let DishCode=this.DishDetail.DishCode
				for(let Category of this.MenuData){
					for(let tempDish of Category.CategoryItem.Dish){
						if(tempDish.Dishitem.DishCode==parseInt(DishCode)){
							tempDish.Dishitem.AddButtonShow=false
							tempDish.Dishitem.DishCount=1
							break
						}
					}
				}	
				// 更新Dishes
				for(let tempDish of this.Dishes){
					if(tempDish.Dishitem.DishCode==DishCode){
						tempDish.Dishitem.DishCount=1
						break
					}
				}
				this.DishDetailClose()
			},
			DetailPurchasedClick(){
				this.DishDetailClose()
				AlertMsg.MsgShow("菜品已在购物车")
			},
			// 主菜单添加按钮
			MenuAddToShoppingCartClick(DishCode){
				for(let Category of this.MenuData){
					for(let tempDish of Category.CategoryItem.Dish){
						if(tempDish.Dishitem.DishCode==parseInt(DishCode)){
							tempDish.Dishitem.AddButtonShow=false
							tempDish.Dishitem.DishCount=1
							break
						}
					}
				}	
				// 更新Dishes
				for(let tempDish of this.Dishes){
					if(tempDish.Dishitem.DishCode==DishCode){
						tempDish.Dishitem.DishCount=1
						break
					}
				}	
			},
			// 修改点单数量
			setDishCount(e){
				let DishCount=e.value
				let DishCode=parseInt(e.name.slice(9))
				// 判断是否需要修改样式
				if(DishCount==0){
					for(let Category of this.MenuData){
						for(let tempDish of Category.CategoryItem.Dish){
							if(tempDish.Dishitem.DishCode==parseInt(DishCode)){
								tempDish.Dishitem.AddButtonShow=true
								break
							}
						}
					}	
				}
				// 更新MenuData
				for(let temp of this.MenuData){
					for(let tempDish of temp.CategoryItem.Dish){
						if(tempDish.Dishitem.DishCode==DishCode){
							tempDish.Dishitem.DishCount=DishCount
							break
						}
					}
				}
				// 更新Dishes
				for(let tempDish of this.Dishes){
					if(tempDish.Dishitem.DishCode==DishCode){
						tempDish.Dishitem.DishCount=DishCount
						break
					}
				}
				
			},
			Order(){	
				let foodList=[]
				let url=insertOrder
				this.ShoppingCartClose()
				for (let dish of this.Dishes) {
					if(dish.Dishitem.DishCount!=0){
						foodList.push({
							"foodId":dish.Dishitem.DishCode,
							"orderFoodNum":dish.Dishitem.DishCount
						})
					}
				}
				let customerid=store.getters.getCustomerCode

				let orderData={
					"orderDesc":this.OrderDesc,
					"customerId":customerid,
					"dinTableId":this.TableCode,
					"orderFoodList":foodList
				}
				postMethod(url,orderData)
				.then((res)=>{
					console.log(res)
					this.OrderCode=res[1].data.orderId
					store.getters.setOrderCode(this.OrderCode)
					this.SecondOrder=true
				})
				.catch((err)=>{
					console.log(err)
				})
				// store.getters.setOrderCode(this.OrderCode)
				// console.log(store.getters.getOrderCode)
				AlertMsg.MsgShow("已下单")
				// wx.navigateTo({url:"../index/index"})
			},
			UpdateOrder(){
				let foodList=[]
				let orderId=store.getters.getOrderCode
				let customerid=store.getters.getCustomerCode
				this.ShoppingCartClose()
				for (let dish of this.Dishes) {
					if(dish.Dishitem.DishCount!=0){
						foodList.push({
							"orderId":orderId,
							"foodId":dish.Dishitem.DishCode,
							"orderFoodNum":dish.Dishitem.DishCount
						})
					}
				}
				let orderData={
					"orderDesc":this.OrderDesc,
					"orderId":orderId,
					"customerId":customerid,
					"dinTableId":this.TableCode,
					"orderFoodList":foodList,
				}
				console.log(orderData)
				postMethod(updateOrder,orderData)
				.then((res)=>{
					console.log(res)
					AlertMsg.MsgShow("订单已更新")
				})
				.catch((err)=>{
					console.log(err)
				})
			},
			JumpToMy(){
				wx.navigateTo({
					url:'../my/my'
				})
			},
			JumpToComments(){
				wx.navigateTo({
					url:'../comments/comments'
				})
			},
			getNoticeData:function(){
				let url =getNotice
				getMethod(url)
				.then((res)=>{
					this.Notice=res[1].data.data
				})
				.catch((err)=>{
					let errs="网络错误"
					console.log(err)
					AlertMsg.MsgShow(errs)
				})
			},
			Bill(){
				// orderid
				// orderState=4
				let orderId=store.getters.getOrderCode
				let customerId=store.getters.getCustomerCode
				const that=this
				if(orderId==0){
					AlertMsg.MsgShow("您尚未下单")
				}else{
					let Data={
						"orderId":orderId,
						"customerId":customerId,
						"orderState":4,
						"orderPayMethod":parseInt(Math.random()*3)
					}
					postMethod(updateOrder,Data)
					.then((res)=>{
						console.log(res)
						if(res[1].data.code==200){
							if(res[1].data.data===null){
								AlertMsg.MsgShow("账单金额以实际支付为准")
							}else{
								this.PayAmount=res[1].data.data
							}
							// 判断返回值
							this.WriteBoxShow=true
							AlertMsg.MsgShow("订单已完成")
							this.SecondOrder=false
						}else{
							console.log(res)
						}
					})
					.catch((err)=>{
						console.log(err)
					})
				}
			},
			WriteBoxClose(){
				this.WriteBoxShow=false
			},
			WriteBoxOpen(){
				this.WriteBoxShow=true
			},
			InsertComment(){
				let orderId=store.getters.getOrderCode
				let customerId=store.getters.getCustomerCode
				let data={
					"orderId":orderId,
					"customerId":customerId,
					"orderEvaluation":this.rate.toFixed(1)+"/"+this.comment
				}
				postMethod(updateOrder,data)
				.then((res)=>{
					console.log(res)
					wx.navigateTo({
						url:"../index/index"
					})
				})
			}
		},
		computed:{
		},
		onLaunch() {		
		},
		mounted() {			
		},
		watch:{
		}
	}
</script>

<style scoped>
	.NoticeBar{height: 3vh;padding-top: 0%;padding-bottom: 0%;display: block;background-color: #fff8a6;}
	.main{display:flex;height: 92vh;background-color: coral;width: 100%;padding-top: 0%;padding-bottom: 0%;}	
	.shopping_cart_container{justify-content: center;align-items: center;height: 5vh;padding-top: 0%;padding-bottom: 0%;}
	.noticetext{color:#f9ae3d;width: 100%;height: 100%;}
	.commentbutton{height: 100%;width: 50%;}
	.mybutton{height: 100%;width: 50%;}
	
	.styles{background-color: #e8e8e8;width: 20vw;float: left;height:100%;overflow: auto;}
	.styleitem{text-align: center;margin-top: 0.6vh;margin-bottom: 1.8vh;height: 80rpx;line-height: 1.8vh;font-size: 20rpx;width: 100%;}
	
	.dishes{background-color: #fafafa;width: 80vw;height:100%;float:right;overflow:auto;}
	.dishes_view{background-color: #fafafa;}
	.dishitem{ height: auto;background-color: #fafafa;}
	.dishitem_pic{width: 15vh;height:15vh;float:left;margin-right: 5vw;border-radius: 15rpx;}
	.dishitem_show_detail{width: 60vw;height:20vh;padding-left:5vw;color: #202326;background-color: #fafafa;}
	.dishitem_name{width: auto;height: 5vh;font-family: Roboto;color: #202326;font-weight: 600;font-size: 21px;line-height: 5vh;font-style: normal;text-decoration: none;text-align: left;}
	.tags_box{display: flex;margin-bottom: 0;height: auto;}
	.dishitem_tag{line-height: 3vh;float: left;margin-top: 2vh;margin-right: 1vw;margin-bottom: 0;height: 3vh;}
	.monthamount{color: #5b5b5b;font-weight: 500;font-size: 25rpx;margin-top: 0.5vh;}
	.price_box{display: flex;float: left;margin-top: 3vh;}
	.dishitem_normal_price{color: #5b5b5b;text-decoration: line-through;font-family: 'Roboto';font-weight: 200;float: right;font-size: 17px;line-height: 0;float: right;margin-right: 0vw;margin-top: 1px;}
	.dishitem_promotion_price{color: #202326;font-family: 'Roboto';float:right;margin:0;font-size: 20px;line-height: 0vh;float: right;font-weight: 600;margin-right: 1vw;margin-left: 1vw;}
	.MenuAddToShoppingCart{width: 109px;height:3.5vh;float: right;background-color: #FED100;padding: 0%;margin-top: 2vh;}
	.MenuAddToShoppingCartPlus{width: 100%;text-align: center;font-weight: 500;color: #202326;font-size: 50rpx;line-height: 3.5vh;height: 100%;padding-top: 0;}
	.number_box{height:3.5vh;padding: 0%;margin-top: 2vh;float: right;margin-right: 0%;}
	.shopping_cart_button{height: 100%;width: 100%;font-size: 30rpx;border: none;cursor: pointer;border-radius: 26rpx;box-shadow: 4px 4px 5px 2px rgb(122, 122, 122),-4px -4px 5px 2px #fff;background-color: #FED100;color: #202326;}

	.shopping_cart_head{display: flex;}
	.shopping_cart_message{width: 30vw;}
	.shopping_cart_sum_container{float: right;width: 70vw;}
	.shopping_cart_sum{float: right;margin-top: 6vh;margin-right: 30rpx;font-weight: 700;margin-bottom: 0;font-family: Roboto;font-style: normal;text-decoration: none;font-size: 50rpx;}
	.shopping_cart_paied_container{margin-top: 3vh;width: 70vw;float: right;}
	.shopping_cart_paied_sum{margin-right: 2vw;color: #5b5b5b;text-decoration: line-through;font-family: 'Roboto';font-weight: 200;float: right;font-size: 17px;line-height: 0;float: right;margin-top: 3vh;}
	.shopping_cart_paied_sumPrice{float: right;margin-right: 2vw;font-weight: 700;margin-bottom: 0;font-family: Roboto;font-style: normal;text-decoration: none;font-size: 50rpx;margin-top: 1vh;}
	
	
	.shopping_cart_title{font-family: Roboto;color: #202326;font-weight: 600;font-size: 40rpx;line-height: 42px;font-style: normal;text-decoration: none;text-align: left;margin-left: 30rpx;}
	.shopping_cart_selecteddishes{font-family: Roboto;color: #202326;font-weight: 600;font-size: 30rpx;font-style: normal;text-decoration: none;text-align: left;margin-left: 30rpx;margin-bottom: 0;margin-top: 2vh;}
	.divder{width: 100%;height: 1vh;}
	.shopping_cart_box{width: 90vw;height: 50vh;color: #fafafa;overflow:auto;align-items: center;margin: auto;left: 0;right: 0;top: 0;bottom: 0;}
	.shopping_cart_card{height: auto;width: 100%;float: left;display: flex;padding-top: 0;padding-bottom: 0;}
	.shopping_cart_message_box{float: left; width: 40vw;height: 100%;}
	.shopping_cart_dishname{font-weight: 500;width: 40vw;font-size: 16px;}
	.shopping_cart_price_box{float:inline-end;height: auto;width: 30vw;}
	.shopping_cart_dishcount{float: inline-end;width: 70%;height: auto;font-size: 16px;}
	.shopping_cart_price{float: right;font-weight:500;width: auto;height: auto;font-size: 30px;}
	.submitbutton{margin-bottom: 0;border-radius: 27px 0px 0px 27px;background-color: #FED100;color:#202326;box-shadow: 0px 2px 4px 0px rgba(183,177,38,0.2), 0px 3px 6px 2px rgba(130,113,35,0.2);width: 70vw}
	
	.requestBox{width: 100%;margin-bottom: 3vh;}
	.secondOrderArea{width: 100%;height:auto;display: flex;}
	.updatebutton{margin-bottom: 0;border-radius: 27px 0px 0px 27px;background-color: #FED100;color:#202326;box-shadow: 0px 2px 4px 0px rgba(183,177,38,0.2), 0px 3px 6px 2px rgba(130,113,35,0.2);width: 70vw}
	.bill{margin-bottom: 0;border-radius: 0px 27px 27px 0px;background-color: #202326;color:#fafafa;box-shadow: 0px 2px 4px 0px rgba(183,177,38,0.2), 0px 3px 6px 2px rgba(130,113,35,0.2);width: 30vw;}
	
	.DetailNav{height: 5%;}
	.DishDetail{padding: 2vw;}
	.DetailSwiper{box-shadow:0rpx 15rpx 15 15 #202326;}
	.DetailTitle{width: 50vw;height: 42px;top: 97px;left: 47px;font-family: Roboto;color: #202326;font-weight: 700;font-size: 60rpx;line-height: 42px;font-style: normal;text-decoration: none;text-align: left;}
	.DetailTags_Box{width: 50vw;height: 2vh;display: flex;}
	.DetailTags{color:#202326;margin-right: 2vw;font-size: 30rpx;}
	.DetailPriceBox{display: flex;width: 100%;float: right;margin-left: 40vw;}
	.DetailPrice{color: #202326;line-height: 5vh;font-size: 50rpx;font-weight: 500;margin-top: 2vh;margin-right: 20rpx;}
	.DetailDescBox{margin-left: 20rpx;}
	.DetailDesc{font-size: 35rpx;font-weight: 500;color: #484e53;}
	.DetailPurchase{margin-bottom: 0;border-radius: 27px 27px 27px 27px;background-color: #FED100;color:#202326;box-shadow: 0px 2px 4px 0px rgba(183,177,38,0.2), 0px 3px 6px 2px rgba(130,113,35,0.2);}
	/* 全局样式控制 */
	::-webkit-scrollbar {display: none;}
	.DisplayBlock{display: block;}
	.DisplayNone{display: none;}
</style>

						
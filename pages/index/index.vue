<template>
	<div class="main">
		<div class="head" style="z-index: 1;position: absolute;">
			<u-swiper class="head" style="z-index: 1;position: absolute;height: 30vh;" :list="headImgList" height="400">
				
			</u-swiper>
		</div>
		<div class="bodybox" style="background-color: #fafafa;">
				<div class="centerarea" @click="JumpToOrder">
					<div class="centericon">
						<u-icon name="order" size="80" label="在线点餐" labelPos="bottom" labelSize="20"></u-icon>
					</div>
				</div>
				<div style="width: 0.1%;height: 80%;background-color: brown;margin-top: 5%;"></div>
				<div class="centerarea" @click="JumpToMyData">
					<div class="centericon">
						<u-icon name="account" size="80" label="我的信息" labelPos="bottom" labelSize="20"></u-icon>
					</div>
				</div>
		</div>
		<div class="bottombox">
			<div class="bottomarea"style="background-color: #fafafa;" @click="SimpleCall">
				<div class="bottomicon">
					<u-icon name="kefu-ermai" size="40" label="一键呼叫" labelPos="right" labelSize="17"></u-icon>
				</div>
			</div>
			<div class="bottomdivider"></div>
			<div class="bottomarea"style="background-color: #fafafa;" @click="JumpToComments">
				<div class="bottomicon">
					<u-icon name="thumb-up" size="40" label="顾客评论" labelPos="right" labelSize="17"></u-icon>
				</div>
			</div>
		</div>
		
		<u-popup :show="registerbuttonshow" mode="bottom" round="20" style="z-index: 3;">
			<view>
				<div style="width: 100%;height: 20vh;">
					<div class="mobilebox">
						<p class="mobilemessage">手机号码：</p><input v-model="mobile" type="number" class="mobileinput"/>
					</div>
					<div class="registerarea">
						<button class="registerbutton" @click="register">一键注册</button>
					</div>
				</div>
			</view>
			
		</u-popup>
	</div>
</template>

<script>
	import store from "@/store/store.js"
	import {customerLogin,wxgetPhone,wxgetToken,registerCustomer,getHeadLine,commentSet} from "@/API/api.js"
	import {getMethod,postMethod} from "@/API/requests.js"
	import {AlertMsg} from "@/API/msgAlert.js"
	export default{
		data(){
			return{
				backgroundImg:{
					backgroundImage:'url('+require('static/xiangjianxiaopai.jpg')+')'
				},
				registerbuttonshow:false,
				// mobile:"请输入手机号码"
				mobile:13014224353,
				tableCode:0,
				headImgList:[			]
			}
		},
		onShow() {
			this.wxapplogin()
			// this.JumpToOrder()
			this.getScreenMessage()
			this.getHeadLineData()
		},
		methods:{
			wxapplogin(){
				var that=this
				wx.login({
					success(res) {
						let url=customerLogin
						getMethod(url,{code:res.code})
						.then((respones)=>{
							console.log("Success",respones)
							// switch respones[1].data.msg{
							// 	case "账户不存在":{
							// 		// 登陆失败，打开一键注册
							// 		that.registerbuttonshow=true	
							// 	}
							// 	case
								
							// }
							if(respones[1].data.msg=='账户不存在'){
								// 登陆失败，打开一键注册
								that.registerbuttonshow=true
							}else{
								store.getters.setToken(respones[1].data.token)
								let CustomerMessage=respones[1].data.data
								store.getters.setCustomerMessage({
									"CustomerCode":CustomerMessage.customerId,
									"myName":CustomerMessage.customerNickname,
									"vipCode":CustomerMessage.customerVip,
									"myIntegral":(CustomerMessage.customerPoint===null)?0:CustomerMessage.customerPoint,
									"myPhone":CustomerMessage.customerPhone,
									"myImg":CustomerMessage.customerImg,
									"gender":CustomerMessage.customerGender
								})
								that.registerbuttonshow=false
							}
						})
					}
				})
			},
			register(){
				if(this.mobileCheck(this.mobile)){
					let mobile=this.mobile
					let avatar=""
					let gender=0
					let nickName=""
					uni.getUserProfile({
						desc:"获取您的头像、昵称用于注册",
						lang:'zh_CN',
						success(res) {
							avatar=res.userInfo.avatarUrl
							nickName=res.userInfo.nickName
							switch(res.userInfo.gender){
								case 0:{
									gender="未知"
									break
								}
								case 1:{
									gender="男"
									break
								}
								default:{
									gender="女"
									break
								}
							}
							console.log(mobile,avatar,gender,nickName)
							// 以上小程序获得顾客信息
							let CustomerCode=1
							let vipCode=1
							let myIntegral=111
							// formdata传送
							wx.login({
								success(code) {
									let jsonData={
										"code":code.code,
										"customerNickname":nickName,
										"customerImg":avatar,
										"customerGender":gender,
										"customerPhone":mobile
									}
									postMethod(registerCustomer,jsonData)
									.then((returndata)=>{
										console.log('请求登录后返回的数据：', returndata)
										
										store.getters.setCustomerMessage({
											"CustomerCode":returndata[1].data.data.customerId,
											"myName":returndata[1].data.data.customerNickname,
											"vipCode":returndata[1].data.data.customerVip,
											"myIntegral":returndata[1].data.data.customerPoint===null?0:returndata[1].data.data.customerPoint,
											"myPhone":returndata[1].data.data.customerPhone,
											"myImg":returndata[1].data.data.customerImg,
											"gender":returndata[1].data.data.customerGender
										})
										this.registerClose()
									})
									.catch((returnerr)=>{
										console.log(returnerr)
										AlertMsg.MsgShow("注册失败")
									})

								}
							})
						},
						fail(err) {
							console.log(err)
						}
					})
				}else{
					AlertMsg.MsgShow("注册失败,手机号码错误")
				}		
				
			},
			registerShow(){
				this.registerbuttonshow=true
			},
			registerClose(){
				this.registerbuttonshow=false
			},
			mobileCheck(e){
				let reg = /^((13\d)|(14[5,7,9])|(15[0-3,5-9])|(166)|(17[0,1,3,5,7,8])|(18[0-9])|(19[8,9]))\d{8}/
				if(reg.test(e)){
					return true
				}else{
					AlertMsg.MsgShow("手机号码错误，请重新输入")
					return false
				}
			},
			JumpToOrder(){
				wx.navigateTo({
					url:"../order/order"
				})
			},
			JumpToMyData(){
				wx.navigateTo({
					url:"../my/my"
				})
			},
			JumpToComments(){
				wx.navigateTo({
					url:"../comments/comments"
				})
			},
			SimpleCall(){
				AlertMsg.MsgShow("已经为您呼叫服务员，请稍等片刻")
				// this.registerShow()
			},
			getHeadLineData(){
				let url=getHeadLine
				postMethod(url,{})
				.then((res)=>{
					console.log(res)
					// 
					let temp=[]
					for (let img of res[1].data.data) {
						temp.push(img.headlineImg)
					}
					this.headImgList=temp
				})
			},
			getScreenMessage(){
				uni.getSystemInfo({
					success(res) {
						// console.log(res)
						console.log(res)
					}
				})
			}
			
		}
	}
</script>

<style>
	.main{width: 100vw;height: 100vh;background-color: #dedede;position: absolute;}
	.head{width: 100vw;height: 50vh;}
	.bodybox{padding:0;width: 90vw;height: 20vh; margin-left: 5vw;margin-right: 5vw;margin-top:35vh;background-color: #fafafa;position: relative;z-index: 2;display: flex;border-radius: 24px;}
	.centerarea{width: 50%;height: 100%;border-radius: 24px;border: 0;padding: 0;margin: 0;display: flex;align-items: center;justify-self: center;}
	.centericon{width: 100%;height: 100%;margin-top: 30%;}
	.bottombox{width: 100vw;height:10vh;position: relative;z-index: 2;display: flex;padding-left: 5vw;margin-top: 2vh;padding-right: 5vw;}
	.bottomdivider{width: 6vw;height: 100%;}
	.bottomarea{width: 42vw;height: 100%;display: flex;border-radius: 15px;display: flex;align-items: center;justify-self: center;}
	.bottomicon{margin-left: 18%;}
	

	.mobilebox{width: 100%;display: flex;margin-top: 5vh;font-size: 25px;display: flex;align-items: center;justify-content: center;}
	.registerbutton{width: 100%;background-color: #07c160;color: #fafafa;border-radius: 10px;}
	.mobilemessage{width: auto;line-height: 3vh;}
	.mobileinput{width: 70%;line-height: 3vh;font-size: 25px;height: 3vh;}
</style>
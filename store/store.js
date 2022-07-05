import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 菜单数据
import {getMethod,postMethod} from "@/API/requests.js"
// 地址引入
import {MenuGet,loginGet,insertOrder,getTableOrder,wxappLogin,commentGet,commentSet,getCustomer} from "@/API/api.js"
import {AlertMsg} from "@/API/msgAlert.js"
const store = new Vuex.Store({
  state: {
	loginState:true,
	Token:"",
	MenuData:[],
	TableCode:0,
	OrderCode:0,
	OrderCompleted:false,
	Dishes:[],
	CustomerMessage:{
		CustomerCode: 0,
		myName:"",
		vipCode:0,
		myPhone:0,
		myIntegral:0,
		myImg:"",
		gender:""
	},
	AppMessage:{
		grant_type:"client_credential",
		appid:"wxa585593d5c61fa03",
		secret:"82d26e1df30805838417e9f6b8d956b1",
		code:""
	},
	access_token:""
  },
  mutations: {
		
  },
  getters:{
	  setStoreMenuData(state){
		  return function(obj){
			  state.MenuData=obj
		  }
	  },
	  setOrderCode(state){
		  return function(OrderCode){
				state.OrderCode=OrderCode
		  }
	  },
	  setCustomerPhone(state){
		  return function(phone){
			  state.CustomerMessage.myPhone=phone
		  }
	  },
	  setAccessToken(state){
		  return function(token){
			  state.access_token=token
		  }
	  },
	  setCustomerMessage(state){
		return function(obj){
			state.CustomerMessage.CustomerCode=obj.CustomerCode
			state.CustomerMessage.myName=obj.myName
			state.CustomerMessage.vipCode=obj.vipCode
			state.CustomerMessage.myIntegral=obj.myIntegral
			state.CustomerMessage.myPhone=obj.myPhone
			state.CustomerMessage.myImg=obj.myImg
			state.CustomerMessage.gender=obj.gender
		}  
	  },
	  setTableCode(state){
		  return function(tablecode){
			  state.TableCode=tablecode
		  }
	  },
	  setToken(state){
		  return function(token){
			  state.Token=token
		  }
	  },
	  setMenuData(state){
		  return function(obj){
			  state.MenuData=obj
		  }
	  },
	  setDishes(state){
		  return function(obj){
			  state.Dishes=obj
		  }
	  },
	  getCustomerCode(state){
		  return state.CustomerMessage.CustomerCode
	  },
	  getCustomerMessage(state){
	  		  return state.CustomerMessage
	  },
	  getAppMessage(state){
		  return state.AppMessage
	  },
	  getAccessToken(state){
		  return state.access_token
	  },
	  getTableOrder(state){
		  return state.TableCode
	  },
	  getToken(state){
		  return state.Token
	  },
	  getMenuData(state){
		  return state.MenuData
	  },
	  getOrderCode(state){
		  return state.OrderCode
	  },
	  getDishes(state){
		  return state.getDishes.Dishes
	  }

  },
  actions: {
	  // 异步更改数据
  },
  modules: {
	  // 管理数据模块
  }
})
export default store
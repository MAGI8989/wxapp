// 封装请求
// GET
import {AlertMsg} from "@/API/msgAlert.js"
let getMethod=function(urldata,GetData){
	return new Promise((resolve,reject)=>{
		uni.request({
			method:"GET",
			url:urldata,
			data:GetData
		}).then((res)=>{
			resolve((res))
		}).catch((err)=>{
			reject(err)
		})
	})
}
// POST
let postMethod=function(urldata,PostData){
	return new Promise((resolve,reject)=>{
		uni.request({
			method:"POST",
			url:urldata,
			data:PostData
		}).then((res)=>{
			resolve(res)
		}).catch((err)=>{
			let errs
		})
	})
}
	// postMethod(this.insertOrder,orderData)
	// .then((res)=>{
	// 	console.log(res)
	// })
	// .catch((err)=>{
		
	// })

export {getMethod,postMethod}
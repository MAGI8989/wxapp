<template>
	<view>
		<div class="main">
			<tui-list-view class="comments">
				<div id="BackToTop"></div>
				<tui-list-cell v-for="(item,index) in commentsData":key="index">
					<div class="commentcard">
						<div class="card_head">
							<div class="card_head_avatar">
								<u-avatar :src="item.customerImg" shape="circle" size="30"></u-avatar>
							</div>
							<div class="card_head_message">
								<p class="card_head_name">{{item.customerName}}</p>
								<u-rate count="5" v-model="item.commentLevel" allowHalf="true" readonly="true" activeColor="#f9ae3d"></u-rate>
							</div>
						</div>
						<div class="card_body">
							<u--textarea v-model="item.commentText" :disabled="true" :count="ture"></u--textarea>
						</div>
					</div>
				</tui-list-cell>
			</tui-list-view>
		</div>
	</view>
</template>

<script>
	import {getMethod} from "../../API/requests.js"
	import {commentGet} from "../../API/api.js"
	import {AlertMsg} from "@/API/msgAlert.js"
	export default {
		data() {
			return {
				commentsData:[
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},	
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"},
						// {customerName:"Sad Noodles",commentLevel:3.5,commentText:"评论测试用例",customerImg:"/static/bill_Selected.png"}
					],
				writeboxshow:false
			}
		},
		methods: {
			getComments(){
				let url=commentGet
				getMethod(url)
				.then((res)=>{
					this.commentsData=[]
					console.log(res)
					for (let comment of res[1].data.data) {
						if(comment.orderEvaluation===null){
							continue
						}else{
							this.commentsData.push({
							"orderCode":comment.orderId,
							"customerName":comment.customerNickname,
							"customerImg":comment.customerImg,
							"commentLevel":comment.orderEvaluation.slice(0,3),
							"commentText":comment.orderEvaluation.slice(4)
							})
						}
						
					}
				})
				.catch((err)=>{
					let errs="网络错误"
					console.log(err)
					AlertMsg.MsgShow(errs)
				})
			}
		},
		onLoad() {
			this.getComments()
		}
	}
</script>

<style scoped>
	.main{width: 100%;height: 100vh;color: antiquewhite;overflow:auto;align-items: center;margin: auto;left: 0;right: 0;top: 0;bottom: 0;background-color: #fafafa;}
	.comments{width: 90%;margin-left: 5%;margin-right: 5%;overflow: auto;}

	.commentcard{width: 90%;height: 18vh;margin-left: 5%;}
	.card_head{width: 100%;height: 5vh;display: flex;}
	.card_head_avatar{width: 10vw;height: 10vw;}
	.card_head_name{width:60vw;line-height: 2.5vh;}
	
	::-webkit-scrollbar {display: none;}
</style>

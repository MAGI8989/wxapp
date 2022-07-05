// 提示
const AlertMsg={
	MsgShow(err){
		uni.showToast({
			title:err,
			duration:1000,
			icon:"none"
		});
		
	}
}
export {AlertMsg}
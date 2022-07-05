// 公用地址
// let url="http://10.234.107.93:5000/"
// let url="http://127.0.0.1:5000/"
// 对接地址
let url="http://10.236.66.125:8080/"
// API存放

// 用户信息获取
let getCustomer=`${url}api/getCustomer`
// 获取桌台订单
let getTableOrder=`${url}api/gettableorder`
// 获取历史订单
let getOrderHistory=`${url}order/orderhistory`
// 获取评论
let commentGet=`${url}order/getorderevaluation`
// 上传评论
// let commentSet=`${url}order/getorderevaluation`

// 微信获取手机号码
let wxgetPhone="https://api.weixin.qq.com/wxa/business/getuserphonenumber"
// 微信登陆获取token
let wxgetToken="https://api.weixin.qq.com/cgi-bin/token"
// 获取菜品信息
let menuGet=`${url}foodcategory/getallfoodandfoodcategory`
// 图片存放
let getPicture=url.slice(0,url.length-1)
// 顾客登录
let customerLogin=`${url}customer/login`
// 顾客注册
let registerCustomer=`${url}customer/insert`
// 获取桌单最近一次订单
let latestOrder=`${url}order/getlastorderbydintable`
// 发送桌台订单
let insertOrder=`${url}order/insertorder`
// 更新桌台订单
let updateOrder=`${url}order/updateorder`
// 顾客查询所有订单
let getorderHistory=`${url}order/getorderlistbycustomer`
// 头条查询
let getHeadLine=`${url}headline/select`


export{wxgetPhone,wxgetToken,menuGet,latestOrder,customerLogin,registerCustomer,getorderHistory,insertOrder,getPicture,updateOrder,getHeadLine,commentGet}
from flask import Flask,request
import requests
import json
app = Flask(__name__)

@app.after_request
def cors(environ):
    environ.headers['Access-Control-Allow-Origin']='*'
    environ.headers['Access-Control-Allow-Method']='*'
    environ.headers['Access-Control-Allow-Headers']='x-requested-with,content-type'
    return environ

@app.route('/api/menu',methods=["GET"])
def sortArray():
    Data={
            "code": 0,
            "OrderCode": 0,
            "data": [
                {
                        "CategoryItem": {
                        "CategoryName": "家常菜",
                        "CategoryCode": 0,
                        "Dish": [
                            {
                                "Dishitem": {
                                    "DishName": "红烧肉",
                                    "DishState": 1,
                                    "NormalPrice": 18.8,
                                    "DishCount": 0,
                                    "PromotionPrice": 0.01,
                                    "DishCode": 0,
                                    "DishDesc": "红烧肉，一道著名的大众菜肴，各大菜系都有自己特色的红烧肉。其以五花肉为制作主料，最好选用肥瘦相间的三层肉（五花肉）来做，锅具以砂锅为主，做出来的肉肥瘦相间，香甜松软，营养丰富，入口即化。",
                                    "MonthAmount": 188,
                                    "Tags": ["香甜","肥而不腻","美味可口"],
                                    "Picture": {
                                        "MenuPicture": "https://bkimg.cdn.bcebos.com/pic/f31fbe096b63f624c51a87b68944ebf81b4ca3c4?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto",
                                        "DetailPicture": [
                                            "https://bkimg.cdn.bcebos.com/pic/c75c10385343fbf21a323f7bbf7eca8065388f48?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto",
                                            "https://bkimg.cdn.bcebos.com/pic/37d3d539b6003af3fe0962c6382ac65c1138b6e1?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5/format,f_auto",
                                            "https://bkimg.cdn.bcebos.com/pic/0df431adcbef76097e91966a2bdda3cc7dd99ea8?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto"
                                        ]
                                    }
                                }
                            }, 
                            {
                                "Dishitem": {
                                    "DishName": "回锅肉",
                                    "DishState": 1,
                                    "NormalPrice": 18.8,
                                    "DishCount": 1,
                                    "PromotionPrice": -1,
                                    "DishCode": 1,
                                    "DishDesc": "回锅肉起源四川农村地区 [2]  。古代时期称作油爆锅，四川地区大部分家庭都会制作。所谓回锅，就是再次烹调的意思。回锅肉在川菜中的地位是非常重要的，回锅肉一直被认为是川菜之首，川菜之化身，提到川菜必然想到回锅肉。回锅肉色香味俱全，是下饭菜中大部分人会选的菜。",
                                    "MonthAmount": 198,
                                    "Tags": ["川菜","家常菜"],
                                    "Picture": {
                                        "MenuPicture": "https://bkimg.cdn.bcebos.com/pic/203fb80e7bec54e736d18e977f728c504fc2d4623cad?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto",
                                        "DetailPicture": [
                                            "https://bkimg.cdn.bcebos.com/pic/32fa828ba61ea8d3fd1f7796f45b274e251f95caf25a?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto",
                                            "https://bkimg.cdn.bcebos.com/pic/a5c27d1ed21b0ef421a237fcddc451da80cb3ecd?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto",
                                            "https://bkimg.cdn.bcebos.com/pic/4e4a20a4462309f75887ff3b7f0e0cf3d7cad62b?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxMTY=,g_7,xp_5,yp_5/format,f_auto"
                                        ]
                                    }
                                }
                            },
                            {
                                "Dishitem": {
                                    "DishName": "锅包肉",
                                    "DishState": 1,
                                    "NormalPrice": 18.8,
                                    "DishCount": 4,
                                    "PromotionPrice": -1,
                                    "DishCode": 2,
                                    "DishDesc": "锅包肉（英文名：Fried Pork in Scoop），原名锅爆肉，光绪年间始创自哈尔滨道台府府尹杜学瀛厨师郑兴文之手。 [20]  成菜后，色泽金黄，口味酸甜。锅包肉是为适应外宾口味，把咸鲜口味的“焦烧肉条”改成了一道酸甜口味的菜肴。通常将猪里脊肉切片腌入味，裹上炸浆，下锅炸至金黄色捞起，再下锅拌炒勾芡即成。",
                                    "MonthAmount": 198,
                                    "Tags": ["酸甜","猪里脊肉","鸡蛋"],
                                    "Picture": {
                                        "MenuPicture": "https://bkimg.cdn.bcebos.com/pic/1f178a82b9014a900d258c31a3773912b31bee20?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto",
                                        "DetailPicture": [
                                            "https://bkimg.cdn.bcebos.com/pic/7af40ad162d9f2d3572c532962a69d13632763d066e8?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto",
                                            "https://bkimg.cdn.bcebos.com/pic/7dd98d1001e93901213f4a480aa743e736d12f2e383b?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto",
                                            "https://bkimg.cdn.bcebos.com/pic/aa64034f78f0f7368a2fbc2a0755b319eac413c3?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UyMjA=,g_7,xp_5,yp_5/format,f_auto"
                                        ]
                                    }
                                }
                            }
                            ]
                        }
                    }
                    ,
                    {
                        "CategoryItem": {
                            "CategoryName": "家常小炒",
                            "CategoryCode": 1,
                            "Dish": [
                                {
                                    "Dishitem": {
                                        "DishName": "豆角炒腊肉",
                                        "DishState": 1,
                                        "NormalPrice": 19.9,
                                        "DishCount": 0,
                                        "PromotionPrice": 0.01,
                                        "DishCode": 3,
                                        "DishDesc": "豆角炒腊肉是家常菜，主要食材是豆角、腊肉、蒜蓉适量。",
                                        "MonthAmount": 188,
                                        "Tags": ["豆角","腊肉","蒜"],
                                        "Picture": {
                                            "MenuPicture": "https://bkimg.cdn.bcebos.com/pic/54fbb2fb43166d22b4961d3b462309f79152d2b8?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UyNzI=,g_7,xp_5,yp_5/format,f_auto",
                                            "DetailPicture": [
                                                "https://bkimg.cdn.bcebos.com/pic/ca1349540923dd54ab160bfddd09b3de9c82483a?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto",
                                                "https://bkimg.cdn.bcebos.com/pic/91529822720e0cf3d7ca75bb130ce51fbe096b637c13?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto",
                                                "https://bkimg.cdn.bcebos.com/pic/d1160924ab18972bd407132f47876c899e510eb39cb6?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto"
                                            ]
                                        }
                                    }
                                }, 
                                {
                                    "Dishitem": {
                                        "DishName": "小炒肉",
                                        "DishState": 2,
                                        "NormalPrice": 18.8,
                                        "DishCount": 3,
                                        "PromotionPrice": -1,
                                        "DishCode":4,
                                        "DishDesc": "小炒肉是湖南省一道常见的特色传统名菜，属于湘菜系。麻辣鲜香，口味滑嫩。制作原料主要是五花肉和青椒、红椒等。",
                                        "MonthAmount": 198,
                                        "Tags": ["湘菜","粤菜"],
                                        "Picture": {
                                            "MenuPicture": "https://bkimg.cdn.bcebos.com/pic/9d82d158ccbf6c81885f8a93b33eb13533fa4064?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2UxNTA=,g_7,xp_5,yp_5/format,f_auto",
                                            "DetailPicture": [
                                                "https://bkimg.cdn.bcebos.com/pic/3c6d55fbb2fb4316fb99dd012fa4462308f7d3c3?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto",
                                                "https://bkimg.cdn.bcebos.com/pic/574e9258d109b3de98d74213c3bf6c81800a4c64?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U5Mg==,g_7,xp_5,yp_5/format,f_auto"
                                            ]
                                        }
                                    }
                                },
                                {
                                    "Dishitem": {
                                        "DishName": "肉末炒粉条",
                                        "DishState": 1,
                                        "NormalPrice": 18.8,
                                        "DishCount": 6,
                                        "PromotionPrice": -1,
                                        "DishCode": 5,
                                        "DishDesc": "肉末炒粉条是以粗粉条、五花肉为主料的菜品。",
                                        "MonthAmount": 198,
                                        "Tags": ["粗粉条","五花肉"],
                                        "Picture": {
                                            "MenuPicture": "https://img2.baidu.com/it/u=1484814767,3605051822&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=443",
                                            "DetailPicture": [
                                                "https://img2.baidu.com/it/u=2517942384,787670053&fm=253&fmt=auto&app=138&f=JPEG?w=898&h=500",
                                                "https://img1.baidu.com/it/u=3661084720,2344307379&fm=253&fmt=auto&app=138&f=JPEG?w=611&h=419",
                                                "https://img1.baidu.com/it/u=3148713420,370642828&fm=253&fmt=auto&app=138&f=JPG?w=460&h=349"
                                            ]
                                        }
                                    }
                                }    
                            ]
                        }
                    }
                ]
        }
    return json.dumps(Data)

@app.route('/api/wxapplogin',methods=["POST"])
def WxappLogin():
    # requestData=request.data
    # kw={
    #     'code':code,
    #     'Appid':"wxa585593d5c61fa03",
    #     'Secrete':"b1e5906082004a292b17c93523608c4f"
    # }
    # url="https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code"
    ReturnData={
        "OrderCode":1241353141,
        "CustomerCode":1513532
    }
    return ReturnData

@app.route('/api/setorder',methods=["POST"])
def setorder():
    ReturnData={
        "Code":200,
        "Data":{
            "OrderAmount":165.55
        }
    }
    return ReturnData

if __name__ == '__main__':
   app.run(host='0.0.0.0', port='5000',debug = True)

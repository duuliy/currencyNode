//Express的路由
const express = require("express");


const smsController = require("../controlles/smsEmailController")
const path = require("path"); //处理路径
//获取路由对象
const smsEmailRouter = express.Router();





// /*========= 短信=========*/
smsEmailRouter.post("/sendCode.do",smsController.sendCode);
smsEmailRouter.post("/verifyCode.do",smsController.verifyCode);

// //邮件
smsEmailRouter.post("/sendMail.do",smsController.sendMail);





module.exports=smsEmailRouter;
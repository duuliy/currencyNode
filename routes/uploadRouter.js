//Express的路由
const express = require("express");

const uploadController = require("../controlles/uploadController")
const upload = require("../config/uploadconfig")
const path = require("path"); //处理路径
//获取路由对象
const uploadRouter = express.Router();


//头像上传
//多个文件array方法
//upload.array("name值");
uploadRouter.post("/uploadFile.do",upload.single("myfile"),uploadController.uploadFile);
uploadRouter.get("/getImage.do",uploadController.getImage);




module.exports=uploadRouter;
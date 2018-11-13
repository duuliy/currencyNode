//Express的路由
const express = require("express");
const path = require("path"); //处理路径

//获取路由对象
const businessRouter = express.Router();

//—— 导入controll层
const designerController = require("../controlles/designerController");
// const propController = require("../controller/propController");
// const goodsUpload = require("../config/goodsUpload");
// const goodsImgUpload = require("../config/goodsImgUpload");


//设计师模块路由拦截

businessRouter.post("/addDesigner",designerController.addDesigner);
// router.get("/getAllDesigner",designerController.getAllDesigner);
// router.get("/getOneList",designerController.getOneList);
// router.post("/modifyDesigner",designerController.modifyDesigner);
// router.get("/searchDesigner",designerController.searchDesigner);
// router.get("/deleteDesigner",designerController.deleteDesigner);
// router.get("/AllDesignerList",designerController.AllDesignerList);
// router.post("/createfile",designerController.createfile);
// router.post("/upload",uploaddesigner.single("myfile"),designerController.updatePathname);
// router.post("/modifyfile",uploaddesigner.single("myfile"),(req,resp)=>{
//     resp.send("ok")
// });
// router.post("/updatePathname",designerController.updatePathname);
// router.post("/querydesigner",designerController.queryDesigner);


module.exports=businessRouter;
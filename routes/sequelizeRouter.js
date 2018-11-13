
//Express的路由
const express = require("express");


const sequelizeController = require("../controlles/sequelizeController.js")
const path = require("path"); //处理路径

//获取路由对象
const sequelizeRouter = express.Router();




//ormtest
sequelizeRouter.post('/sequelize.do',sequelizeController.getany)
sequelizeRouter.post('/addsequelize.do',sequelizeController.addsome)
sequelizeRouter.delete('/delesequelize.do',sequelizeController.deltesome)
sequelizeRouter.patch('/quersequelize.do',sequelizeController.querysome)
sequelizeRouter.put('/updsequelize.do',sequelizeController.upsome)

module.exports=sequelizeRouter;



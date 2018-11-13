/*
 * @Author: duuliy 
 * @Date: 2018-11-12 19:43:28 
 * @Last Modified by: duuliy
 * @Last Modified time: 2018-11-12 19:43:28 
 */


/*所有第三方的模块引入*/
const express = require("express");
const logger = require("morgan"); //日志
const favicon = require("serve-favicon"); //小图标
const bodyParser = require("body-parser"); //处理POST数据
const path = require("path"); //处理路径
// const debug = require('debug')('http')
const http = require("http");
const signature = require('cookie-signature');   //去掉cookies的签名

const session = require("express-session");
const cookieParser = require("cookie-parser");
const debug = require('debug')('myapp:main')
debug('现在的时间是 %s' , new Date());



/*==============================自己写的模块引入==============================*/
const businessRouter = require("./routes/businessRouter.js")
const sequelizeRouter = require("./routes/sequelizeRouter.js")
const smsEmailRouter = require("./routes/smsEmailRouter.js")
const uploadRouter = require("./routes/uploadRouter.js")
require("./src/socket/socket.js")


// --把express调用》》创建项目的实例,搭建了服务器
const app = express();

app.use(cookieParser('Simon'));
app.use(session({
    // name: "react-syudu", //cookie名称，默认connect.sid
    // secret: "123456", //结合其他加密的方式生成secret
    // cookie: {
    //     maxAge: 300000
    // }, //cookie配置：有效时间
    // resave: true, //保存(长度为时间)
    // rolling: true, //刷新(刷新之后保存的时间)
    // saveUninitialized: true //未初始化cookie要不要保存
}));

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Methods", "POST,GET,PUT,DELETE,PATCH");
    next()
});


/*===================================使用模块=====================================*/
 //小图标
app.use(favicon(__dirname + "/public/images/icon.png"));  //__dirname全局变量，代表的是项目根目录。
//POST数据读取
app.use(bodyParser.urlencoded({extended:false}));//读取POST数据
app.use(bodyParser.json());

//集成了路由
//告诉Router有请求来了，要去分任务，直接把任务转给Router
app.use(businessRouter);
app.use(sequelizeRouter);
app.use(smsEmailRouter);
app.use(uploadRouter);
app.use(logger("dev"));


//静态资源在哪里
app.use(express.static(__dirname + "/public")); 






//监听端口
app.set('port',process.env.PORT || 8081)
const port = app.get("port");

// const port=8081

const serverRuningInfo = `
    =============== [ My node Api ] ===============
    =============== [ duuliy node ] ================
    =============== [ port : ${port} ] ============== 
                        :)
`;

http.Server(app).listen(port, () => {console.log(serverRuningInfo)});

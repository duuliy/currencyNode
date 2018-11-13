//Express的路由
const express = require("express");

const uploadController = require("../controller/uploadController")
const upload = require("../config/uploadconfig")
const path = require("path"); //处理路径
//获取路由对象
const Router = express.Router();

//domain：cookie在什么域名下有效，类型为String,。默认为网站域名
   //expires: cookie过期时间，类型为Date。如果没有设置或者设置为0，那么该cookie只在这个这个session有效，即关闭浏览器后，这个cookie会被浏览器删除。
   //httpOnly: 只能被web server访问，类型Boolean。
   //maxAge: 实现expires的功能，设置cookie过期的时间，类型为String，指明从现在开始，多少毫秒以后，cookie到期。
   //path: cookie在什么路径下有效，默认为'/'，类型为String
   //secure：只能被HTTPS使用，类型Boolean，默认为false
   //signed:使用签名，类型Boolean，默认为false。`express会使用req.secret来完成签名，需要cookie-parser配合使用`

   Router.post("/newLogin.do", (req, resp) => {
    let username = req.body.username;
    let password = req.body.password;

    if (username === 'admin' && password === 'a123456') {
        req.session.username = username;
        let data = {
            success: 'ok'
        }
        resp.cookie('islogin', username, {
            maxAge: 60 * 1000,
            signed: true,  //使用签名
            httpOnly: true
        });
        resp.send(data)
    } else {
        resp.send("登录失败")
    }
});



module.exports=Router;
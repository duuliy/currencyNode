
const express = require("express");
const app = express();
const debug = require('debug')('socket')
debug("this is test");
// socket.io部分
const http = require('http').Server(app);
const io = require('socket.io').listen(http); //引入socket.io模块并绑定到服务器
http.listen(8887);

io.on('connection', function (socket) { //监听 connection(正在连接)，监听事件接收消息
    debug("server socket 连接成功")
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
        debug('客户端发来消息=>', msg)
    });
});

// 要将消息发给除特定 socket 外的其他用户，可以用 broadcast 标志：
// io.on('connection', function(socket){
//     socket.broadcast.emit('hi');
// });

io.on('connection', function (socket) { //监听 connection(正在连接)，监听事件发送消息
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
        debug('客户端发来消息=>', msg)
    });
});


// module.exports
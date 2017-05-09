/**
 * Created by zhoucheng on 5/9/17.
 */
//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    host = '127.0.0.1'
    console.log(host)
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

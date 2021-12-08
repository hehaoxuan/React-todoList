const express = require('express')
const app = express()
const {connectDB} = require('./database/mongodb')
const todoRoute = require('./routes/todoRoute')

//跨域设置
app.all("*",function(req,res,next){
    //允许跨越的域名 *代表允许任何域名跨越
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if(req.method.toLowerCase() == 'options')
    {
        res.send(200) //让options尝试请求快速结束
    }
    else{
        next();
    }
})

//express app设置
app.use(express.urlencoded({
    extended:true
}))//解析URL-encoded格式的数据


connectDB(app) //连接数据库

app.use('/',todoRoute) //使用路由


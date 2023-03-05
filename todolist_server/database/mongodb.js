// const app = express(); //调用构造函数 新建app
const mongoose = require("mongoose");

//连接数据库
const connectDB = (app) => {
  const dbURL =
    "mongodb://maple:1433223@cluster0-shard-00-00.yzbpa.mongodb.net:27017,cluster0-shard-00-01.yzbpa.mongodb.net:27017,cluster0-shard-00-02.yzbpa.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-rp45g9-shard-0&authSource=admin&retryWrites=true&w=majority"; // https://account.mongodb.com/ 申请一个db数据库放入dbURL
  mongoose
    .connect(dbURL, {
      //支持新版配置 隐藏旧版信息
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log("db success connect...");
      console.log("server start at 3001");
      app.listen(3001);
    })
    .catch((err) => {
      console.log("db error" + err);
    });
};

module.exports = { connectDB };

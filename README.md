# React-todoList
基于react的前端以及Node.js的后端
# React-todoList

代办清单:基于react的前端以及Node.js的后端
    

### 项目结构

```
├── todolist_server  #Node.js服务器
│   ├────server.js   #程序入口 使用Node server开启后台服务
│   ├────controllers #操作数据库 实现功能
│   └────database    #存放mongoDb数据库的配置(需要手动修改 dbURL) 云db申请地址 https://account.mongodb.com/
│   └────models      #存放todo schema
│   └────routes      #存放后台请求地址
├── todolist_web     #React网页页面
│   ├────src         #前端项目React源码目录
│   ├────config      #存放请求地址文件
├── dist  #生产环境下build后的文件存放目录（发布目录）
```

# 项目演示

### todo总览

### todo详细页

### 新增todo

### 删除todo

### 完成todo

### 清除所有完成的todo



# 项目使用
## 后端Node.js
(先启动后端) 然后切换到todolist_server路径
1. npm install
2. node server.js

（默认）http://localhost:3001/

## 前端React
切换到todolist_web路径
1. npm install
2. yarn start

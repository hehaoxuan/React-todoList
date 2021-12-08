# React-todoList
代办清单:基于react的前端以及Node.js的后端

Todolist: front end based on react and back end of node.js

### 技术栈 | Technology stack
React.js+antd | Node.js+Express+Mongoose+MongoDB

### 项目演示 | Demo project

#### todo总览 | Todo overview
![图片](https://user-images.githubusercontent.com/52476806/145163074-85867eda-3181-478b-833b-1bfb521737e3.png)

#### todo详细页 | Todo Detail
![图片](https://user-images.githubusercontent.com/52476806/145163351-c04c70ce-3037-4097-8095-a89dc6517665.png)
#### 新增todo | new Todo
![图片](https://user-images.githubusercontent.com/52476806/145163276-de33dbb0-a9b5-4954-b2f1-a95c37f2e913.png)

#### 删除todo | delete todo
![图片](https://user-images.githubusercontent.com/52476806/145163460-dca17fe9-cc11-481e-a054-d7ec27c9a924.png)

#### 完成todo | complete todo
![图片](https://user-images.githubusercontent.com/52476806/145163525-0838de59-321e-4b61-a4d1-0604096bc177.png)

#### 清除所有完成的todo | Clear all completed todo
![图片](https://user-images.githubusercontent.com/52476806/145163564-612ffd4d-ee32-456d-b3b6-1726073a2441.png)

#### 404 NotFound
![图片](https://user-images.githubusercontent.com/52476806/145164882-ba8859a9-9e7e-48bf-8164-e02fb628a92a.png)

### 项目结构 | Project structure

```
├── todolist_server  #Node.js服务器 | node.js server
│   ├────server.js   #程序入口 使用Node server开启后台服务| program entry uses the node server to start the background service
│   ├────controllers #操作数据库 实现功能 | operate the database
│   └────database    #存放mongoDb数据库的配置(需要手动修改 dbURL) 云db申请地址 https://account.mongodb.com/ | stores the configuration of mongodb database
│   └────models      #存放todo schema | todo schema
│   └────routes      #存放后台请求地址 | storage request address
├── todolist_web     #React网页页面 | react webpage
│   ├────src         #前端项目React源码目录 
│   ├────config      #存放请求地址文件
```

### 项目使用 | Project use
#### 后端 | Node.js
(先启动后端) 然后切换到todolist_server路径

(start the backend first) and then switch to todolist_server path
1. npm install
2. node server.js

（默认）http://localhost:3001/

#### 前端 | React
切换到todolist_web路径

switch to todolist_web path
1. npm install
2. yarn start

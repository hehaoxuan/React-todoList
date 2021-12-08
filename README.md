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
![图片](https://user-images.githubusercontent.com/52476806/145163074-85867eda-3181-478b-833b-1bfb521737e3.png)

### todo详细页
![图片](https://user-images.githubusercontent.com/52476806/145163351-c04c70ce-3037-4097-8095-a89dc6517665.png)
### 新增todo
![图片](https://user-images.githubusercontent.com/52476806/145163276-de33dbb0-a9b5-4954-b2f1-a95c37f2e913.png)

### 删除todo
![图片](https://user-images.githubusercontent.com/52476806/145163460-dca17fe9-cc11-481e-a054-d7ec27c9a924.png)

### 完成todo
![图片](https://user-images.githubusercontent.com/52476806/145163525-0838de59-321e-4b61-a4d1-0604096bc177.png)

### 清除所有完成的todo
![图片](https://user-images.githubusercontent.com/52476806/145163564-612ffd4d-ee32-456d-b3b6-1726073a2441.png)



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

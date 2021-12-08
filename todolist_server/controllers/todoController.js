const Todo = require('../models/todo')

//获取所有todo
const todo_all = (req,res) => {
    Todo.find().sort({
        createdAt: -1
    }).then(result =>{
        // console.log(result);
        res.send(result);
    })
}

//todo细节 传入id 返回todo细节
const todo_detail = (req,res) =>{
    const id = req.params.id
    Todo.findById(id).then(result=>{
        res.send(result)
    })
    // const todo = new Todo(req)
}

//新增todo
const todo_create = (req,res) =>{
    let data
    for(i in req.body){
        data = JSON.parse(i)
    }
    const todo = new Todo(data)
    todo.save().then(()=>{
        res.send('success')
    }).catch((err)=>{
        // console.log(err);
        res.send('error')
    })
}

//删除todo
const todo_remove = (req,res) =>{
    const id = req.params.id;
    Todo.findByIdAndDelete(id).then(result=>{
        res.send('success deleted')
    }).catch(err=>{
        console.log(err);
    })
    // const todo = new Todo(req)
}

// 更新完成/未完成todo
const todo_reverse = (req,res) =>{
    let isDone = null
    for(i in req.body){
        isDone = JSON.parse(i)
    }
    const id = req.params.id;
    Todo.findByIdAndUpdate(id,{isDone:isDone}).then(msg =>{
    //    console.log(msg);
        res.send('success updated')
    })
    // const todo = new Todo(req)
}

//删除完成的todo
const todo_clearCompleted = (req,res) =>{
    Todo.deleteMany({isDone:{$eq:"true"}}).then(
        msg => {
            console.log(msg);
        }
    )
    res.send('success updated')
}

module.exports = {
    todo_all,
    todo_create,
    todo_detail,
    todo_remove,
    todo_reverse,
    todo_clearCompleted
}
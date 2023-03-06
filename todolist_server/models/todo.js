//用来保存存放数据的模式
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true

    },
    author: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        required: true
    }
    //id会在数据库中生成 不需要额外增加
})
// 防止其他类型的数据导致报错
mongoose.set('strictQuery', false);
const Todo = mongoose.model('Todo',todoSchema)
module.exports = Todo
const Todo = require("../models/todo");

//获取所有todo
const todo_all = (req, res) => {
  Todo.find()
    .sort({
      createdAt: -1,
    })
    .then((result) => {
      // console.log(result);
      res.send(result);
    });
};

//todo细节 传入id 返回todo细节
const todo_detail = (req, res) => {
  const id = req.params.id;
  if (id?.length > 0) {
    Todo.findById(id).then((result) => {
      res.send(result);
    });
  } else {
    res.send("fail");
  }
};

//新增todo
const todo_create = (req, res) => {
  let data;
  for (i in req.body) {
    data = JSON.parse(i);
  }
  const todo = new Todo(data);
  todo
    .save()
    .then(() => {
      res.send("success");
    })
    .catch((err) => {
      res.send("error");
    });
};

//删除todo
const todo_remove = (req, res) => {
  const id = req.params.id;
  if (id?.length > 0) {
    Todo.findByIdAndDelete(id)
      .then((result) => {
        res.send("success deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.send("fail");
  }
  // const todo = new Todo(req)
};

// 更新完成/未完成todo
const todo_reverse = (req, res) => {
  let isDone = null;
  for (i in req.body) {
    isDone = JSON.parse(i);
  }
  const id = req.params.id;

  if (id?.length > 0) {
    Todo.findByIdAndUpdate(id, { isDone: isDone }).then((msg) => {
      res.send("success updated");
    });
  } else {
    res.send("fail");
  }
};

//删除完成的todo
const todo_clearCompleted = (req, res) => {
  Todo.deleteMany({ isDone: { $eq: "true" } }).then((msg) => {
    console.log(msg);
  });
  res.send("success updated");
};

module.exports = {
  todo_all,
  todo_create,
  todo_detail,
  todo_remove,
  todo_reverse,
  todo_clearCompleted,
};

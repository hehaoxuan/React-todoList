const {
    todo_all,
    todo_create,
    todo_detail,
    todo_remove,
    todo_reverse,
    todo_clearCompleted
} = require('../controllers/todoController')

const express = require('express')
const router = express.Router();

router.get('/favicon.ico', (req, res) => {
    res.sendStatus(204);
});
router.get('/clear',todo_clearCompleted)
router.post('/create',todo_create)
router.get('/:id',todo_detail)
router.delete('/:id',todo_remove)
router.post('/:id',todo_reverse)
router.get('/',todo_all)


module.exports = router
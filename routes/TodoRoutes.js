const {Router} = require("express");
const { getToDo, saveToDO, updatedTodo, deleteTodo } = require("../controllers/TodoController");


const router = Router()
router.get('/',getToDo)
router.post('/save',saveToDO)
router.post('/updates',updatedTodo)
router.post('/delete',deleteTodo)



module.exports = router;
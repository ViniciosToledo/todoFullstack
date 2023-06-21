const express = require('express')
const tasksController = require(`./controllers/taskController`)
const tasksMiddlewares = require(`./middlewares/tasksMiddleware`)

const router = express.Router()

router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMiddlewares.validateBody ,tasksController.createTask)
module.exports = router
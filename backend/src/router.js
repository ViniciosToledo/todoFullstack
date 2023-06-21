const express = require('express')
const tasksController = require(`./controllers/taskController`)
const tasksMiddlewares = require(`./middlewares/tasksMiddleware`)

const router = express.Router()

router.get('/tasks', tasksController.getAll)
router.post('/tasks', tasksMiddlewares.validateFildTitle ,tasksController.createTask)
router.delete('/tasks/:id',tasksController.deleteTask)
router.put('/tasks/:id', tasksMiddlewares.validateFildTitle, tasksMiddlewares.validateFildStatus ,tasksController.updateTask)

module.exports = router
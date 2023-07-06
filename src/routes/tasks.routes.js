const { Router } = require('express')
const Tasks = require('../models/tasks.model');
const { getAllTasks, getTaskById, createTask, updateTask, deleteTask } = require('../controllers/tasks.controller');

const router = Router()

router.get("/todos", getAllTasks);

router.get("/todos/:id", getTaskById);

router.post("/todos", createTask);

router.put("/todos/:id", updateTask);

router.delete("/todos/:id", deleteTask);

module.exports = router

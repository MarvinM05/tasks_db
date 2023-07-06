const Tasks = require('../models/tasks.model')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.findAll();
    res.json(tasks);
  } catch (error) {
    res.status(400).json(error);
  }
}

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Tasks.findByPk(id);
    res.json(task);
  } catch (error) {
    res.status(400).json(error);
  }
}

const createTask = async (req, res) => {
  try {
    const newTask = req.body;
    await Tasks.create(newTask);
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
}

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const {completed } = req.body;
    await Tasks.update(completed, {
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
}

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Tasks.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};



module.exports = {
  getAllTasks, getTaskById, createTask, updateTask, deleteTask
}
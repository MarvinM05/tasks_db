const express = require('express')
const db = require('./utils/database')
require("dotenv").config();
const Tasks = require('./models/tasks.model')

const PORT = process.env.PORT ?? 8000

db.authenticate()
  .then(() => {
    console.log("Base de datos conectada correctamente");
  })
  .catch((error) => console.log(error))

db.sync().then(() => console.log("Base de datos sincronzida"));

const app = express()

app.use(express.json())


app.get("/todos", async (req, res) => {
  try {
    const tasks = await Tasks.findAll()
    res.json(tasks)
  } catch (error) {
    res.status(400).json(error);
  }
});

app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const task = await Tasks.findByPk(id)
    res.json(task)
  } catch (error) {
    res.status(400).json(error)
  }
})

app.post("/todos", async (req, res) => {
  try {
    const newTask = req.body
    await Tasks.create(newTask)
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error)
  }
});

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params
    const taskInfo = req.body
    await Tasks.update(taskInfo, {
      where: { id }
    })
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params
    await Tasks.destroy({
      where: {id}
    })
    res.status(204).send()
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})


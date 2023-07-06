const express = require('express')
require("dotenv").config()
const tasksRoutes = require('./routes/tasks.routes')


const PORT = process.env.PORT ?? 8000


const app = express()

app.use(express.json())

app.use(tasksRoutes)

app.get('/', (req, res) => {
  res.send('Bienvenido al servidor en linea')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
})


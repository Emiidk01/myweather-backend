// src/index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Error al conectar Mongo:", err));

// Rutas de ejemplo
app.get("/", (req, res) => {
  res.send("Backend Clima funcionando!");
});

// Manejo de rutas específicas: (por ejemplo)
// app.use('/api/weather', require('./routes/weather.routes'));
// app.use('/api/auth', require('./routes/auth.routes'));

// Levantar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

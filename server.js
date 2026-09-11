import express from "express";
import cors from "cors";

import { connectDB } from "./src/common/db.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Asignar rutas personalizadas de peliculas al prefijo /api
app.use("/api", peliculaRoutes);

// Ruta principal
app.get("/", (req, res) => {
  res.status(200).json({
    mensaje: "Bienvenido al cine Iplacex",
  });
});

// Puerto
const PORT = 3000;

// Iniciar servidor solo si Mongo conecta
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor Express ejecutandose en puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("No fue posible iniciar la aplicación", error);
  });
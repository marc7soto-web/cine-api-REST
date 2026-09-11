import express from "express";

import {
    handleInsertPeliculaRequest,
    handleGetPeliculasRequest,
    handleGetPeliculaByIdRequest,
    handleUpdatePeliculaByIdRequest,
    handleDeletePeliculaByIdRequest
} from "./controller.js";

// Router peliculas
const peliculaRoutes = express.Router();

// Crear pelicula
peliculaRoutes.post(
    "/pelicula",
    handleInsertPeliculaRequest
);

// Obtener peliculas
peliculaRoutes.get(
    "/peliculas",
    handleGetPeliculasRequest
);

// Obtener pelicula por id
peliculaRoutes.get(
    "/pelicula/:id",
    handleGetPeliculaByIdRequest
);

// Actualizar pelicula
peliculaRoutes.put(
    "/pelicula/:id",
    handleUpdatePeliculaByIdRequest
);

// Eliminar pelicula
peliculaRoutes.delete(
    "/pelicula/:id",
    handleDeletePeliculaByIdRequest
);

export default peliculaRoutes;
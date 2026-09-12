import express from "express";

import {
    handleInsertActorRequest,
    handleGetActoresRequest,
    handleGetActorByIdRequest,
    handleGetActoresByPeliculaIdRequest
} from "./controller.js";

// Router actores
const actorRoutes = express.Router();

// Crear actor
actorRoutes.post(
    "/actor",
    handleInsertActorRequest
);

// Obtener actores
actorRoutes.get(
    "/actores",
    handleGetActoresRequest
);

// Obtener actor por id
actorRoutes.get(
    "/actor/:id",
    handleGetActorByIdRequest
);

// Obtener actores por pelicula
actorRoutes.get(
    "/actores/pelicula/:idPelicula",
    handleGetActoresByPeliculaIdRequest
);

export default actorRoutes;
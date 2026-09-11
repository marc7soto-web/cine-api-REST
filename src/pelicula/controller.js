import { ObjectId } from "mongodb";
import { db } from "../common/db.js";
import { Pelicula } from "./pelicula.js";

// Coleccion peliculas
const peliculaCollection = db.collection("peliculas");

// Crear pelicula
export const handleInsertPeliculaRequest = async (req, res) => {
    const pelicula = {
        ...Pelicula,
        ...req.body
    };
    peliculaCollection
        .insertOne(pelicula)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
};

// Obtener todas las peliculas
export const handleGetPeliculasRequest = async (req, res) => {
    peliculaCollection
        .find()
        .toArray()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
};

// Obtener pelicula por id
export const handleGetPeliculaByIdRequest = async (req, res) => {
    try {
        peliculaCollection
            .findOne({
                _id: new ObjectId(req.params.id)
            })
            .then(result => {
                if (!result) {
                    return res.status(404).json({
                        mensaje: "Pelicula no encontrada"
                    });
                }
                res.status(200).json(result);
            })
            .catch(error => {
                res.status(500).json(error);
            });

    } catch {
        res.status(400).json({
            mensaje: "Id mal formado"
        });
    }
};

// Actualizar pelicula
export const handleUpdatePeliculaByIdRequest = async (req, res) => {
    try {
        peliculaCollection
            .updateOne(
                {
                    _id: new ObjectId(req.params.id)
                },
                {
                    $set: req.body
                }
            )
            .then(result => {
                res.status(200).json(result);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    } catch {
        res.status(400).json({
            mensaje: "Id mal formado"
        });
    }
};

// Eliminar pelicula
export const handleDeletePeliculaByIdRequest = async (req, res) => {
    try {
        peliculaCollection
            .deleteOne({
                _id: new ObjectId(req.params.id)
            })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(error => {
                res.status(500).json(error);
            });
    } catch {
        res.status(400).json({
            mensaje: "Id mal formado"
        });
    }
};
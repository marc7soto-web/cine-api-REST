import { ObjectId } from "mongodb";
import { db } from "../common/db.js";
import { Actor } from "./actor.js";

// Coleccion actores
const actorCollection = db.collection("actores");

// Coleccion peliculas
const peliculaCollection = db.collection("peliculas");

// Insertar actor
export const handleInsertActorRequest = async (req, res) => {
    peliculaCollection
        .findOne({
            _id: new ObjectId(req.body.idPelicula)
        })
        .then(pelicula => {
            if (!pelicula) {
                return res.status(404).json({
                    mensaje: "La pelicula no existe"
                });
            }
            const actor = {
                ...Actor,
                ...req.body
            };
 
            actorCollection
                .insertOne(actor)
                .then(result => {
                    res.status(201).json(result);
                })
                .catch(error => {
                    res.status(500).json(error);
                });
        })
        .catch(error => {
            res.status(500).json(error);
        });
};

// Obtener actores
export const handleGetActoresRequest = async (req, res) => {
    actorCollection
        .find()
        .toArray()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
};

// Obtener actor por id
export const handleGetActorByIdRequest = async (req, res) => {
    try {
        actorCollection
            .findOne({
                _id: new ObjectId(req.params.id)
            })
            .then(result => {
                if (!result) {
                    return res.status(404).json({
                        mensaje: "Actor no encontrado"
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

// Obtener actores por pelicula
export const handleGetActoresByPeliculaIdRequest = async (req, res) => {
    actorCollection
        .find({
            idPelicula: req.params.idPelicula
        })
        .toArray()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
};
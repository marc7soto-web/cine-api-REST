import { MongoClient } from "mongodb";

// Cadena de conexión a MongoDB Atlas
const uri =
  "mongodb://eva3_express:XHB9E4NvCn6oVDsu@ac-z8yddnr-shard-00-00.xnj8o4z.mongodb.net:27017,ac-z8yddnr-shard-00-01.xnj8o4z.mongodb.net:27017,ac-z8yddnr-shard-00-02.xnj8o4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-vp1qz2-shard-0&authSource=admin&appName=cluster-express";

// Cliente MongoDB
const client = new MongoClient(uri);

// Función para la conexión
export const connectDB = async () => {
  try {
    await client.connect();

    await client.db("admin").command({
        ping: 1,
    });

    console.log("Conexion exitosa a MongoDB Atlas");
    return client;
  } catch (error) {
    console.error("Error al conectar con MongoDB Atlas:", error);
    throw error;
  }
};

export default client;
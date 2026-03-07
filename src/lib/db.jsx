
//mongodb.jsx

import mongoose from "mongoose";

let isConnected = false

const connect = async () =>{
    if (isConnected) return;

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME,
        });

        isConnected = conn.connections[0].readyState === 1;
        console.log("Mongo connected !");

    } catch (error) {
        console.error("Erreur de connexion MongoDB : ", error.message);
        throw new Error("Error in connecting");
    }
};

export default connect;







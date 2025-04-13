import mongoose from 'mongoose';
import dotenv from 'dotenv/config'

//realiza la conexion con la base de datos
export const dbConnection = async () => {
    await mongoose.connect(process.env.MONGO_DB);
};
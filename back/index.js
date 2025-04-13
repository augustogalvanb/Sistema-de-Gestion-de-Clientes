import dotenv from 'dotenv/config'
import { dbConnection } from './src/config/dbConnection.js';
import server from './src/server.js';

export const PORT  = process.env.PORT || 3001

const connect = async () => {
    try {
        await dbConnection()
        server.listen(PORT, () => {
            console.log(`servidor escuchando en el puerto ${PORT}`);
        })
    } catch (error) {
        return error.message
    }
}

connect()


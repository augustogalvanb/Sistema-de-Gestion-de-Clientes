import { Client } from "../models/Client.js"

export const registerService = async (dataClient) => {
    await Client.create(dataClient)
}

export const searchByNameService = async (name) => {
        const clients = await Client.find(
            { $text: { $search: name } }
        ).sort({ name: 1 });
        return clients;
};

export const getClientsService = async () => {
    return await Client.find().sort({ name: 1 })
}

export const checkExpiredClientsService = async (req, res) => {
    const today = new Date();
    // Encontrar clientes vencidos (vencimiento <= hoy y estado no es "vencido")
    const expiredClients = await Client.find({
        vencimiento: { $lte: today },
        status: "activo"
    });

    // Actualizar estado a "vencido" para cada cliente vencido
    if (expiredClients.length > 0) {
        const clientIds = expiredClients.map(client => client._id);
        await Client.updateMany(
            { _id: { $in: clientIds } },
            { $set: { status: "vencido" } }
        );
    }

    return expiredClients;
}
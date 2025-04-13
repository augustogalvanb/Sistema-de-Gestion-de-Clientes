import { checkExpiredClientsService, getClientsService, registerService, searchByNameService } from "../services/clientService.js"

export const registerController = async (req, res) => {
    const dataClient = req.body
    try {
        await registerService(dataClient)
        res.status(200).send('El registro ha sido exitoso')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const searchByNameController = async (req, res) => {
    const {name} = req.body
    try {

        if (!name) {
            return res.status(400).json({ error: "El parámetro 'name' es obligatorio" });
        }
        const clients = await searchByNameService(name);
        if (clients.length === 0) {
            return res.status(404).json({ message: "No se encontraron clientes con ese nombre" });
        }
        res.status(200).json(clients);
    } catch (error) {
        res.status(400).json({error: "Error al buscar clientes: " + error.message})
    }
}

export const getClientsController = async (req, res) => {
    try {
        const clients = await getClientsService()
        res.status(200).json(clients)
    } catch (error) {
        res.status(400).json({error: 'Ocurrió un error al traer los clientes'})
    }
}

export const checkExpiredClientsController = async (req, res) => {
    try {
        const expiredClients = await checkExpiredClientsService();
        res.status(200).json(expiredClients);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
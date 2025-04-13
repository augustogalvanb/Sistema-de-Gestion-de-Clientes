import { Router } from "express";
import { checkExpiredClientsController, getClientsController, registerController, searchByNameController } from "../controllers/clientController.js";

const clientRouter = Router()

clientRouter.post('/register', registerController)
clientRouter.post('/search', searchByNameController)
clientRouter.get('/', getClientsController)
clientRouter.get('/expired', checkExpiredClientsController)

export default clientRouter
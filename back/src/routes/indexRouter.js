import { Router } from "express";
import clientRouter from "./clientRouter.js";

export const router = Router()

router.use('/clients', clientRouter)

import { Router } from "express";
import { sample } from "../controllers/sample";

const sampleRouter = Router()

sampleRouter.get('/sample', sample)

export default sampleRouter


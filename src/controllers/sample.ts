import { Request, Response } from "express";

export const sample = (req: Request, res: Response) => {
    res.send('Hello from the sample controller!')
}
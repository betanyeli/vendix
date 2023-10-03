import express, { Request, Response } from "express";
import ViteExpress from "vite-express";

const app = express();

app.get("/message", (_: Request, res: Response) => res.send("Hi from Express <3"));

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));
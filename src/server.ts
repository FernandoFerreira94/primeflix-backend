import express, { Request, Response, NextFunction } from "express";

import cors from "cors";
import { router } from "./router";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    // se for uma instancia tipo error
    res.status(400).json({ error: err.message });
    return;
  }

  res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
  return;
});

app.get("/", (req, res) => {
  res.json({ status: "online", message: "API DevPizza está funcionando 🍕" });
});

app.listen(3333, () => console.log("Server Online na porta 3333"));

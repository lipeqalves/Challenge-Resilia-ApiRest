import express from "express";
import * as dotenv from "dotenv";
import Alunos from "./src/controllers/Alunos.js";
import cors from "cors"

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use(cors())

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});

app.use(express.json());

Alunos.rotas(app);

export default app
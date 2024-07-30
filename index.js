import bodyParser from "body-parser";
import "dotenv/config";
import app from "./src/index.js";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Servidor Escutando Porta:", PORT);
});

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

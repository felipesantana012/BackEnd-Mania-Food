import express from "express";
import CardapioController from "../controllers/cardapioController.js";
import upload from "../../middlewares/uploadImagens.js";

const routes = express.Router();

//importante ordenar as rotas com grau de complexidade, do mais de dificil para mais facil
routes.get("/cardapio", CardapioController.getCardapio);

routes.get("/cardapio/:id", CardapioController.getCardapioPorId);
routes.post("/cardapio", CardapioController.postCardapio);

routes.put("/cardapio/:id", CardapioController.putCardapio);

routes.delete("/cardapio/:id", CardapioController.deleteCardapio);

export default routes;

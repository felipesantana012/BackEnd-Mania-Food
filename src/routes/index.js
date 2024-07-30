import express from "express";
import cardapio from "./cardapioRoutes.js";
import usuario from "./usuarioRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Cardapio mania food");
  });

  app.use(express.json(), cardapio, usuario);
};

export default routes;

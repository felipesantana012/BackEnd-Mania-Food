import express from "express";
import cardapio from "./cardapioRoutes.js";
import usuario from "./usuarioRoutes.js";
import path from "path";
import imgs from "./imgsRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Cardapio mania food");
  });

  app.use(
    "/uploads",
    express.static(path.join(process.cwd(), "public", "uploads"))
  );

  app.use(express.json(), cardapio, usuario, imgs);
};

export default routes;

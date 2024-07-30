import express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const routes = express.Router();

//importante ordenar as rotas com grau de complexidade, do mais de dificil para mais facil
routes.get("/usuario", UsuarioController.getUsuario);

routes.get("/usuario/:id", UsuarioController.getUsuarioPorId);

// routes.post("/usuario", UsuarioController.postUsuario);

routes.put("/usuario/:id", UsuarioController.putUsuario);

routes.delete("/usuario/:id", UsuarioController.deleteUsuario);

export default routes;

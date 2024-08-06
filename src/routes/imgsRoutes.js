import express from "express";
import {
  uploadImage,
  deleteImageController,
  updateImageController,
} from "../controllers/imgController.js";
import upload from "../../middlewares/uploadImagens.js";

const router = express.Router();

// Rota para upload de imagem
router.post("/upload", upload.single("imgInput"), uploadImage);

// Rota para deletar imagem
router.delete("/upload/:filename", deleteImageController);

// Rota para atualizar imagem
router.put(
  "/upload/:oldFilename",
  upload.single("imgInput"),
  updateImageController
);

export default router;

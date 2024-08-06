import express from "express";
import {
  uploadImage,
  deleteImageController,
} from "../controllers/imgController.js";
import upload from "../../middlewares/uploadImagens.js";

const router = express.Router();

// Rota para upload de imagem
router.post("/uploads", upload.single("imgInput"), uploadImage);

// Rota para deletar imagem
router.delete("/uploads/:filename", deleteImageController);

export default router;

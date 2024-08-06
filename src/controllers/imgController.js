import path from "path";
import fs from "fs";

const deleteImage = (filePath) => {
  const fullPath = path.join(process.cwd(), "public", filePath);
  fs.unlink(fullPath, (err) => {
    if (err) {
      console.error("Erro ao deletar o arquivo:");
    } else {
      console.log("Arquivo deletado com sucesso:");
    }
  });
};

// Controller para upload de imagem
export const uploadImage = (req, res) => {
  res.json({ imgPath: `/uploads/imgsCadapio/${req.file.filename}` });
};

// Controller para deletar imagem
export const deleteImageController = (req, res) => {
  const { filename } = req.params;
  const filePath = `/uploads/imgsCadapio/${filename}`;

  deleteImage(filePath);
  res.status(200).json({ mensagem: "Imagem deletada com sucesso" });
};

// Controller para atualizar imagem
export const updateImageController = (req, res) => {
  const { oldFilename } = req.params;
  const newFile = req.file;

  const oldFilePath = `/uploads/imgsCadapio/${oldFilename}`;
  deleteImage(oldFilePath);

  const newFilePath = `/uploads/imgsCadapio/${newFile.filename}`;
  res.json({ imgPath: newFilePath });
};

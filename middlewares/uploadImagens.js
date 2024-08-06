import multer from "multer";
import path from "path";

// Configuração do armazenamento de arquivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/imgsCadapio");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now().toString() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;

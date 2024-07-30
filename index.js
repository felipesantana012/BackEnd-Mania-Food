import "dotenv/config";
import express from "express";
import cors from "cors";
import conectarNaDataBase from "./src/config/dbConnect.js";
import routes from "./src/routes/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao banco de dados
const conexao = await conectarNaDataBase();
conexao.once("open", () => {
  console.log("Conexão com banco feita com sucesso");
});
conexao.on("error", (erro) => {
  console.error("Erro de conexão com o DB", erro);
});

app.use(express.json());

// Lista de origens permitidas
const allowedOrigins = [
  "https://restaurante-mania-food.vercel.app/",
  "https://mania-food-cliente.vercel.app/",
  "http://127.0.0.1:5501",
  "http://127.0.0.1:5502",
];

// Função personalizada para CORS
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true); // Permitir a origem
    } else {
      callback(new Error("ACESSO CORS NEGADO, Not allowed by CORS")); // Bloquear a origem
    }
  },
  methods: "GET,PUT,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

routes(app);
app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});

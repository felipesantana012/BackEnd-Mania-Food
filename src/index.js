import express from "express";
import conectarNaDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

//-----------conecxão banco de dados--------------
const conexao = await conectarNaDataBase();
conexao.once("open", () => {
  console.log("Conexão com banco feita com sucesso");
});

conexao.on("error", (erro) => {
  console.error("erro de conexaão DB", erro);
});
//---------------------//-----------------------//

//----------conecxão node express---------------//
const app = express();
routes(app);

export default app;
//---------------------//-----------------------//

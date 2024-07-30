import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  login: {
    nome: String,
    senha: String,
  },
  endereco: {
    rua: String,
    bairro: String,
    cidade: String,
    fotoLocal: String,
    linkMaps: String,
  },
  redeSociais: {
    facebook: String,
    instagram: String,
    whatsapp: String,
    tiktok: String,
  },
});

const usuario = mongoose.model("usuario", usuarioSchema);

export default usuario;

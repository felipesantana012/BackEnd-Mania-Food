import mongoose from "mongoose";

//definir quais serao os tipos e as propriedades de um livro
const itemSchema = new mongoose.Schema(
  {
    nome: { type: String },
    precoOriginal: { type: Number },
    descricao: { type: String },
    tipo: { type: String },
    img: { type: String },
    promocaoDia: { type: Boolean },
  },
  { versionKey: false }
);

const cardapioSchema = new mongoose.Schema(
  {
    categoria: String,
    itens: [itemSchema],
  },
  { versionKey: false }
);

//informando qual o nome da coleção que vai esta no banco, e os a estrtura de dados que vai ser passada
const cardapio = mongoose.model("cardapio", cardapioSchema);

export default cardapio;

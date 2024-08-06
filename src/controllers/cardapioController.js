import cardapio from "../models/Cardapio.js";
import path from "path";

class CardapioController {
  static async getCardapio(req, res) {
    try {
      const getCardapio = await cardapio.find({});
      res.status(200).json(getCardapio);
    } catch (error) {
      res
        .status(500)
        .json({ menssagem: `${error.message}: Falha Na Requisição` });
    }
  }

  static async getCardapioPorId(req, res) {
    try {
      const id = req.params.id;
      const cardapioEncontrado = await cardapio.findById(id);
      if (!cardapioEncontrado) {
        return res.status(404).json({ message: "Cardapio não encontrada" });
      }
      res.status(200).json(cardapioEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ menssagem: `${error.message}: "Erro ao buscar cardapio"` });
    }
  }

  static async postCardapio(req, res) {
    const {
      categoria,
      nome,
      precoOriginal,
      descricao,
      tipo,
      promocaoDia,
      img,
    } = req.body;
    const novoCardapio = {
      categoria,
      itens: [
        {
          nome,
          precoOriginal,
          descricao,
          tipo,
          img,
          promocaoDia,
        },
      ],
    };
    try {
      const cardapioCriado = await cardapio.create(novoCardapio);
      res
        .status(201)
        .json({ mensagem: "Criado com sucesso", cardapio: cardapioCriado });
    } catch (error) {
      res
        .status(400)
        .json({ mensagem: `${error.message} Erro ao cadastrar Cardapio` });
    }
  }

  static async putCardapio(req, res) {
    try {
      const id = req.params.id;

      // Atualizar o cardápio
      const updatedCardapio = await cardapio.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!updatedCardapio) {
        return res.status(404).json({ message: "Cardápio não encontrado" });
      }
      res.status(200).json({
        message: "Cardápio atualizado com sucesso",
        cardapio: updatedCardapio,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: `Erro ao atualizar cardápio: ${error.message}` });
    }
  }

  static async deleteCardapio(req, res) {
    try {
      const id = req.params.id;
      const cardapios = await cardapio.findByIdAndDelete(id);
      if (!cardapios) {
        return res.status(404).json({ message: "cardapio não encontrada" });
      }
      res.status(200).json({ menssagem: "Cardapio excluido com secesso." });
    } catch (error) {
      res
        .status(500)
        .json({ menssagem: `${error.message}: Erro ao deletar cardapio` });
    }
  }
}

export default CardapioController;

import cardapio from "../models/Cardapio.js";

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
    const novoCardapio = req.body;
    try {
      const cardapioCriado = await cardapio.create(novoCardapio);
      res
        .status(201)
        .json({ menssagem: "Criado com sucesso", cardapio: cardapioCriado });
    } catch (error) {
      res
        .status(400)
        .json({ menssagem: `${error.message} Erro ao cadastrar Cardapio` });
    }
  }

  static async putCardapio(req, res) {
    try {
      const id = req.params.id;

      const cardapio = await cardapio.findByIdAndUpdate(id, req.body);
      if (!cardapio) {
        return res.status(404).json({ message: "cardapio não encontrada" });
      }
      res.status(200).json({ menssagem: `Cardapio Atualizado com sucesso` });
    } catch (error) {
      res.status(500).json({
        menssagem: `${error.message}: Falha na Atualização do Cardapio`,
      });
    }
  }

  static async deleteCardapio(req, res) {
    try {
      const id = req.params.id;
      const cardapio = await cardapio.findByIdAndDelete(id);
      if (!cardapio) {
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

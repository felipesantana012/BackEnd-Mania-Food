import usuario from "../models/Usuario.js";

class UsuarioController {
  static async getUsuario(req, res) {
    try {
      const getUsuario = await usuario.find({});
      res.status(200).json(getUsuario);
    } catch (error) {
      res
        .status(500)
        .json({ menssagem: `${error.message}: Falha Na Requisição` });
    }
  }

  static async getUsuarioPorId(req, res) {
    try {
      const id = req.params.id;
      const usuarioEncontrado = await usuario.findById(id);
      if (!usuarioEncontrado) {
        return res.status(404).json({ message: "Usuario não encontrado" });
      }
      res.status(200).json(usuarioEncontrado);
    } catch (error) {
      res
        .status(500)
        .json({ menssagem: `${error.message}: "Erro ao buscar Usuario"` });
    }
  }

  // static async postUsuario(req, res) {
  //   const novoUsuario = req.body;
  //   try {
  //     const usuarioCriado = await usuario.create(novoUsuario);
  //     res
  //       .status(201)
  //       .json({ menssagem: "Criado com sucesso", usuario: usuarioCriado });
  //   } catch (error) {
  //     res
  //       .status(400)
  //       .json({ menssagem: `${error.message} Erro ao cadastrar Usuario` });
  //   }
  // }

  static async putUsuario(req, res) {
    try {
      const id = req.params.id;

      const usuario = await usuario.findByIdAndUpdate(id, req.body);
      if (!usuario) {
        return res.status(404).json({ message: "usuario não encontrada" });
      }
      res.status(200).json({ menssagem: `Usuario Atualizado com sucesso` });
    } catch (error) {
      res.status(500).json({
        menssagem: `${error.message}: Falha na Atualização do usuario`,
      });
    }
  }

  static async deleteUsuario(req, res) {
    try {
      const id = req.params.id;
      const usuario = await usuario.findByIdAndDelete(id);
      if (!usuario) {
        return res.status(404).json({ message: "usuario não encontrada" });
      }
      res.status(200).json({ menssagem: "usuario excluido com secesso." });
    } catch (error) {
      res
        .status(500)
        .json({ menssagem: `${error.message}: Erro ao deletar usuario` });
    }
  }
}

export default UsuarioController;

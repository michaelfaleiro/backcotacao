const Fornecedor = require("../models/Fornecedor");

module.exports = {
  async index(req, res) {
    const fornecedores = await Fornecedor.findAll();
    if (!fornecedores) {
      return res.json({ message: "Não há Fornecedores Cadastrados" });
    }
    return res.json(fornecedores);
  },

  async obterUm(req, res) {
    const { fornecedor_id } = req.params;

    const fornecedor = await Fornecedor.findByPk(fornecedor_id);
    return res.status(200).json(fornecedor);
  },

  async store(req, res) {
    const { nome, razao_social, cnpj, telefone, email, contato } = req.body;

    const fornecedor = await Fornecedor.create({
      nome,
      razao_social,
      cnpj,
      telefone,
      email,
      contato,
    });

    return res.json(fornecedor);
  },
};

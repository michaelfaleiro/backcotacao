const Produto = require("../models/Produto");

module.exports = {
  async index(req, res) {
    const produtos = await Produto.findAll();
    if (!produtos) {
      return res.json({ message: "Não há Produtos Cadastrados" });
    }
    return res.json(produtos);
  },

  async obterUm(req, res) {
    const { produto_id } = req.params;

    const produto = await Produto.findByPk(produto_id);
    return res.status(200).json(produto);
  },

  async store(req, res) {
    const { sku, nome_produto, status } = req.body;

    const produto = await Produto.create({ sku, nome_produto, status });

    return res.json(produto);
  },
};

const Cotacao = require("../models/Cotacao");
const Produto = require("../models/Produto");
const Fornecedor = require("../models/Fornecedor");

module.exports = {
  async index(req, res) {
    try {
      const cotacoes = await Cotacao.findAll();
      if (!cotacoes) {
        return res.status(400).json({ message: "Não há cotações!" });
      }
      return res.status(200).json(cotacoes);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async obterUmProduto(req, res) {
    const { id_produto } = req.params;

    const produto = await Produto.findByPk(id_produto, {
      include: { association: "produto" },
    });
    return res.status(200).json(produto);
  },

  async store(req, res) {
    try {
      const { id_produto, id_fornecedor } = req.params;
      const { preco } = req.body;

      const produto = await Produto.findByPk(id_produto);

      if (!produto) {
        return res.status(400).json({ message: "Falta o id do Produto" });
      }
      console.log(produto);
      const cotacao = await Cotacao.create({
        id_produto,
        id_fornecedor,
        preco,
      });
      console.log(cotacao);
      return res.status(200).json(cotacao);
    } catch (error) {
      return res.status(404).json(error);
    }
  },
};

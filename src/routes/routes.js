const express = require("express");
const UserController = require("../controllers/UserController");
const EnderecoController = require("../controllers/EnderecoController");
const ProdutoController = require("../controllers/ProdutoController");
const FornecedorController = require("../controllers/FornecedorController");
const CotacaoController = require("../controllers/Cotacao");

const routes = express.Router();

routes.get("/users", UserController.index);
routes.get("/users/:user_id", UserController.obterUm);
routes.post("/users", UserController.store);

routes.get("/endereco", EnderecoController.index);
routes.get("/users/:user_id/endereco", EnderecoController.indexId);
routes.post("/users/:user_id/endereco", EnderecoController.store);

//produtos
routes.get("/produtos", ProdutoController.index);
routes.get("/produtos/:id_produto", ProdutoController.obterUm);
routes.post("/produtos", ProdutoController.store);

//fornecedor
routes.get("/fornecedor", FornecedorController.index);
routes.get("/fornecedor/id_fornecedor", FornecedorController.obterUm);
routes.post("/fornecedor", FornecedorController.store);

//cotacao
routes.get("/cotacao", CotacaoController.index);
routes.post("/cotacao/:id_produto/:id_fornecedor", CotacaoController.store);
routes.get("/cotacao/:id_produto/produto", CotacaoController.obterUmProduto);
module.exports = routes;

const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../models/User");
const Endereco = require("../models/Endereco");
const Produto = require("../models/Produto");
const Fornecedor = require("../models/Fornecedor");
const Cotacao = require("../models/Cotacao");

const connection = new Sequelize(dbConfig);

User.init(connection);
Endereco.init(connection);
Produto.init(connection);
Fornecedor.init(connection);
Cotacao.init(connection);

User.associate(connection.models);
Endereco.associate(connection.models);
Produto.associate(connection.models);
Fornecedor.associate(connection.models);
Cotacao.associate(connection.models);

module.exports = connection;

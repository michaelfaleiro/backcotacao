const { Model, DataTypes } = require("sequelize");

class Cotacao extends Model {
  static init(sequelize) {
    super.init(
      {
        preco: DataTypes.DOUBLE,
        id_produto: DataTypes.INTEGER,
        id_fornecedor: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Produto, { foreignKey: "id_produto", as: "produto" });
    this.belongsTo(models.Fornecedor, {
      foreignKey: "id_fornecedor",
      as: "fornecedor",
    });
  }
}
module.exports = Cotacao;

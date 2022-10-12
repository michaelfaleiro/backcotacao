const { Model, DataTypes } = require("sequelize");

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        sku: DataTypes.STRING,
        nome_produto: DataTypes.STRING,
        status: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Cotacao, {
      foreignKey: "id_produto",
      as: "produto",
    });
  }
}

module.exports = Produto;

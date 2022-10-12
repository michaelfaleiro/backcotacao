const { Model, DataTypes } = require("sequelize");

class Fornecedor extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        razao_social: DataTypes.STRING,
        cnpj: DataTypes.STRING,
        telefone: DataTypes.STRING,
        email: DataTypes.STRING,
        contato: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.hasMany(models.Cotacao, {
      foreignKey: "id_fornecedor",
      as: "fornecedor",
    });
  }
}

module.exports = Fornecedor;

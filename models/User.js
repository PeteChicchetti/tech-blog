// Require
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Class Model
class User extends Model {}

User.init(
    // Model
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [8],
            },
        },
    },
    // DataTypes
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'user',
    }
);

// Export model
module.exports = User;
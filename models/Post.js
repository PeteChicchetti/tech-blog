// Require
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Class Model
class Post extends Model {}

Post.init(
    // Model
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
        },
    },
    // DataTypes
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
    }
);

// Export model
module.exports = Post;
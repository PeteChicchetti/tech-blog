// Require
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Class Model
class Comment extends Model {}

Comment.init(
    // Model
    {
        comment_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    // DataTypes
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'comment',
    }
);

// Export model
module.exports = Comment;
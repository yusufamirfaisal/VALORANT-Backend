'use strict';
const {
    Model,
    Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Region extends Model {
        static associate(models) {
            this.hasMany(models.Team, { foreignKey: 'region', sourceKey: 'id' })
        }
    }
    Region.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        }
    }, {
        sequelize,
        tableName: 'm_regions',
    });
    return Region;
};
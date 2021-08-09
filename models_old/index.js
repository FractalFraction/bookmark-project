const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const models = {
  Bookmark: require('./bookmark')(sequelize, DataTypes),
  // Add Comment model here
  // Add Tag model here
}

module.exports = {models, sequelize};
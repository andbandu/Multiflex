
const { DataTypes } = require('sequelize');
const db = require('db');


const sequelize = require('../db'); // Your Sequelize connection

const Movie = sequelize.define('Movie', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.DATE
  },
  genre: {
    type: DataTypes.STRING
  }
  // Other attributes
});

module.exports = Movie;



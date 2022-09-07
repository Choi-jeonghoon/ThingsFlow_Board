const jwt = require('jsonwebtoken');
const axios = require('axios');
const bcrypt = require('bcrypt');
const boardModels = require('../models/board');

const salt = bcrypt.genSaltSync();

const getBoard = async (req, res) => {
  return await boardModels.getBoard();
};

const postBoard = async (title, contents, lockpassword) => {
  const hash = await bcrypt.hash(lockpassword, salt);
  const url_for_weather = 'http://api.weatherapi.com/v1/current.json';
  let weather;
  weatherInfo = await axios
    .post(
      url_for_weather,
      {},
      {
        params: {
          key: process.env.WEATHER_API_KEY,
          q: 'Seoul',
          lang: 'ko',
        },
      }
    )
    .then(function (response) {
      console.log(response);
      weather = response.data.current.condition.text;
    });
  http: return await boardModels.postBoard(title, contents, hash, weather);
};

const updateBoard = async (id, title, contents) => {
  return await boardModels.updateBoard(id, title, contents);
};

const deleteBoard = async (id, title, contents) => {
  return await boardModels.deleteBoard(id, title, contents);
};
module.exports = { getBoard, postBoard, updateBoard, deleteBoard };

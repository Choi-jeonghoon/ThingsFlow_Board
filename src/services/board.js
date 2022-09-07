const jwt = require('jsonwebtoken');
const axios = require('axios');
const bcrypt = require('bcrypt');
const boardModels = require('../models/board');

const salt = bcrypt.genSaltSync();

const getBoard = async (req, res) => {
  return await boardModels.getBoard();
};

const postBoard = async (title, contents, lockpassword) => {
  const hashPassword = await bcrypt.hash(lockpassword, salt);
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
      weather = response.data.current.condition.text;
    });
  http: return await boardModels.postBoard(
    title,
    contents,
    hashPassword,
    weather
  );
};

const updateBoard = async (id, title, contents, lockpassword) => {
  const board = await boardModels.readBoardById(id);

  if (!board) {
    const error = new Error('NOT_FOUND');
    error.status = 404;
    throw error;
  }
  const isPassword = await bcrypt.compare(
    toString(lockpassword),
    board.lockpassword
  );
  if (!isPassword) {
    boardModels.updateBoard(id, title, contents, lockpassword);
  } else {
    const error = new Error('INVALID_PASSWORD');
    error.statusCode = 401;
    throw error;
  }
};

const deleteBoard = async (id, lockpassword) => {
  const board = await boardModels.readBoardById(id);
  if (!board) {
    const error = new Error('NOT_FOUND');
    error.status = 404;
    throw error;
  }
  const isPassword = await bcrypt.compare(
    toString(lockpassword),
    board.lockpassword
  );
  if (!isPassword) {
    boardModels.deleteBoard(id, lockpassword);
  } else {
    const error = new Error('INVALID_PASSWORD');
    error.statusCode = 401;
    throw error;
  }
};
module.exports = { getBoard, postBoard, updateBoard, deleteBoard };

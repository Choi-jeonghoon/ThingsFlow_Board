const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const boardModels = require('../models/board');

const salt = bcrypt.genSaltSync();

const postBoard = async (title, contents, lockpassword) => {
  const hash = await bcrypt.hash(lockpassword, salt);

  return await boardModels.postBoard(title, contents, hash);
};

module.exports = { postBoard };

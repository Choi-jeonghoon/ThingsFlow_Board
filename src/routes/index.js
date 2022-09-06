const express = require('express');
const boardRouter = require('../routes/board');

const router = express.Router();
router.use(boardRouter);

module.exports = router;

const express = require('express');
const boardController = require('../controllers/board');
const router = express.Router();
const boardMiddleware = require('../middleware/lockcondition');

router.post('/board', boardMiddleware.lockPostBoard, boardController.postBoard); //게시판 등록

module.exports = router;

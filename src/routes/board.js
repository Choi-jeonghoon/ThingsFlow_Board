const express = require('express');
const boardController = require('../controllers/board');
const router = express.Router();
const boardMiddleware = require('../middleware/lockcondition'); //개발요구사항의 일부분을 담당하는곳 입니다.


router.post('/board', boardMiddleware.lockPostBoard, boardController.postBoard); //게시판 등록
router.put('/updateboard/:id', boardController.updateBoard); //게시판 수정
router.delete('/deleteboard/:id', boardController.deleteBoard); //게시판 삭제
module.exports = router;

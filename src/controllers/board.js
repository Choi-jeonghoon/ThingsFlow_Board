const boardServices = require('../services/board');

const getBoard = async (req, res) => {
  try {
    const getBoard = await boardServices.getBoard();

    return res.status(200).json({ data: getBoard });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
const postBoard = async (req, res) => {
  try {
    const title = req.body.title;
    const contents = req.body.contents;
    const lockPassword = req.body.lockpassword;

    const postBoard = await boardServices.postBoard(
      title,
      contents,
      lockPassword
    );

    return res.status(200).json({ message: 'SUCCESS' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const updateBoard = async (req, res) => {
  try {
    const id = req.params.id;
    const title = req.body.title;
    const contents = req.body.contents;
    const lockPassword = req.body.lockpassword;
    const updateBoard = await boardServices.updateBoard(
      id,
      title,
      contents,
      lockPassword
    );

    return res.status(200).json({ message: '수정 SUCCESS' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const deleteBoard = async (req, res) => {
  try {
    const id = req.params.id;
    const lockPassword = req.body.lockpassword;
    const deleteBoard = await boardServices.deleteBoard(id, lockPassword);

    return res.status(200).json({ message: '삭제 SUCCESS' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
module.exports = { getBoard, postBoard, updateBoard, deleteBoard };

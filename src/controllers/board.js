const boardServices = require('../services/board');

const postBoard = async (req, res) => {
  try {
    const title = req.body.title;
    const contents = req.body.contents;
    const lockpassword = req.body.lockpassword;

    const postBoard = await boardServices.postBoard(
      title,
      contents,
      lockpassword
    );

    return res.status(200).json({ message: 'SUCCESS' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const updateBoard = async (req, res) => {
  try {
    const title = req.body.title;
    const contents = req.body.contents;
    const id = req.params.id;
    const updateBoard = await boardServices.updateBoard(id, title, contents);

    return res.status(200).json({ message: '수정 SUCCESS' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const deleteBoard = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteBoard = await boardServices.deleteBoard(id);

    return res.status(200).json({ message: '삭제 SUCCESS' });
  } catch (error) {
    return res.status(error.statusCode || 500).json({ message: error.message });
  }
};
module.exports = { postBoard, updateBoard, deleteBoard };

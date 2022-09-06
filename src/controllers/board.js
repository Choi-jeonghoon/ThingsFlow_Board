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

module.exports = { postBoard };

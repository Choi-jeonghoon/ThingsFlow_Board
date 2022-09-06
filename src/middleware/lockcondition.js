const lockPostBoard = async (req, res, next) => {
  const title = req.body.title;
  const contents = req.body.contents;
  const lockpassword = req.body.lockpassword;

  if (title.length > 20) {
    return res.status(400).json({ message: '제목은 최대 20자 입니다.' });
  } else if (contents.length > 200) {
    return res.status(400).json({ message: '내용은 최대 200자 입니다.' });
  } else if (lockpassword.length < 6) {
    return res.status(400).json({ message: '비밀번호는 6자 이상 입니다.' });
  } else if (!lockNumber(lockpassword)) {
    return res
      .status(400)
      .json({ message: '비밀번호에 숫자 1개 이상 포함되어야 합니다.' });
  }

  next();
};

function lockNumber(password) {
  var numbers = /[^0-9]/g;
  var result = password.replace(numbers, '');
  if (result.length >= 1) {
    return true;
  } else {
    return false;
  }
}
module.exports = { lockPostBoard };

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const postBoard = async (title, contents, lockpassword, weather) => {
  return await prisma.board.create({
    data: {
      title,
      contents,
      lockpassword,
      weather,
    },
  });
};

const updateBoard = async (id, title, contents) => {
  console.log(id, title, contents);
  return await prisma.board.update({
    where: { id: Number(id) },
    data: {
      title: title,
      contents: contents,
    },
  });
};

const deleteBoard = async id => {
  console.log(id);
  return await prisma.board.delete({
    where: { id: Number(id) },
  });
};
module.exports = { postBoard, updateBoard, deleteBoard };

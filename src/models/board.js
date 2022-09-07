const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const readBoardById = async id => {
  return await prisma.board.findUnique({
    where: { id: Number(id) },
  });
};

const getBoard = async () => {
  return await prisma.board.findMany({
    orderBy: {
      creatredat: 'asc',
    },
  });
};

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
  return await prisma.board.update({
    where: { id: Number(id) },
    data: {
      title: title,
      contents: contents,
    },
  });
};

const deleteBoard = async id => {
  return await prisma.board.delete({
    where: { id: Number(id) },
  });
};
module.exports = {
  readBoardById,
  getBoard,
  postBoard,
  updateBoard,
  deleteBoard,
};

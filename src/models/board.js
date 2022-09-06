const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const postBoard = async (title, contents, lockpassword) => {
  console.log(title, contents, lockpassword);

  return await prisma.board.create({
    data: {
      title,
      contents,
      lockpassword,
      
    },
  });
};

module.exports = { postBoard };

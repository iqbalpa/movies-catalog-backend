import prisma from './prisma';

const reset = async () => {
  await prisma.user.deleteMany({});
};

reset()
  .then(() => console.log('reset database success!'))
  .catch(() => console.log('failed to reset database'));

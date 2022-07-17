const userRouter = require('./user.js');
const nftRouter = require('./nft.js');

module.exports = (app) => {
  app.use('/api/users', userRouter);
  app.use('/api/nfts', nftRouter);
};

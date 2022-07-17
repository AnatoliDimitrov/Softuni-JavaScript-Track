const { nftModel } = require('../models/Nft');
const { errorHandler } = require('../utils/errorHandler');
const { ValidationError } = require('../utils/createValidationError');

const getNft = async (req, res) => {
  const { nftId } = req.params;

  try {
    const nft = await nftModel.findById(nftId);

    if (!nft) {
      throw new ValidationError('There is no such nft with provided id.', 404);
    }

    res.status(200).json({ nft: nft.toObject() });
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const addNft = async (req, res) => {
  const { name, description, imageUrl, price} = req.body;
  const data = { name, description, imageUrl, price };

  try {
    const createdNft = await nftModel.create({ ...data });
    const nft = { ...data};

    res.status(200).json({ nft });
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const updateNft = async (req, res) => {
  const { nftId } = req.params;
  const { name, description, imageUrl, price } = req.body;
  const data = { name, description, imageUrl, price };

  try {
    const nft = await nftModel
      .findByIdAndUpdate(nftId, data)
      .select('name description imageUrl price');

    res.status(200).json({ nft: nft.toObject() });
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const deleteNft = async (req, res) => {
  const { nftId } = req.params;

  try {
    await nftModel.findByIdAndDelete(nftId);

    res.status(200).json({ nftId });
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const getNfts = async (req, res) => {
  try {
    const count = await nftModel.countDocuments();
    let nfts = await nftModel
      .find()
      .lean();

    res.status(200).json({ nfts, count });
  } catch (error) {
    if (error.kind === 'ObjectId') {
      return res.status(200).json({ nfts: [], count: 0 });
    }
    errorHandler(error, res, req);
  }
};

module.exports = {
  getNft,
  addNft,
  updateNft,
  deleteNft,
  getNfts
};

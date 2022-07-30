const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();

const Nft = require('../models/Nft');

router.get('/', async (req, res) => {
  try {
        const count = await Nft.countDocuments();
        let nfts = await Nft
          .find()
          .lean();
    
        res.status(200).json({ nfts, count });
      } catch (error) {
        if (error.kind === 'ObjectId') {
          return res.status(200).json({ nfts: [], count: 0 });
        }
        errorHandler(error, res, req);
      }
});

router.get('/:nftId', async (req, res) => {
  const { nftId } = req.params;

  try {
    const nft = await Nft.findById(nftId);

    if (!nft) {
      res.status(404).json({ error: 'Not foound!' });
    }

    res.status(200).json({ nft: nft.toObject() });
  } catch (err) {
    res.status(404).json({ error: err });
  }
});

router.post('/', async (req, res) => {
  let fileName = '';

  if (req.files) {
    const file = req.files.file;
    fileName = uuidv4();
  
    console.log(file)
    console.log(req.body)
  
    file.mv(`${'../client/public/user-uploads/nfts'}/${fileName}`);
  }
  
  let { name, description, imageUrl, price, owner} = req.body;
  imageUrl = `${'/user-uploads/nfts/'}${fileName}`;
  const data = { name, description, imageUrl, price, owner};

  try {
    const createdNft = await Nft.create({ ...data });
    const nft = { ...data};

  } catch (error) {
    errorHandler(error, res, req);
  }
});

router.put('/:nftId', async (req, res) => {
  const { nftId } = req.params;
  let fileName = '';
  

  let { name, description, imageUrl, price } = req.body;

  if (req.files) {
    const file = req.files.file;
    fileName = uuidv4();
  
    console.log(file)
    console.log(req.body)
    
  imageUrl = `${'/user-uploads/nfts/'}${fileName}`;
  
    file.mv(`${'../client/public/user-uploads/nfts'}/${fileName}`);
  }

  const data = { name, description, imageUrl, price };

  try {
    const nft = await Nft
      .findByIdAndUpdate(nftId, data)
      .select('name description imageUrl price');

    res.status(200).json({ nft: nft.toObject() });
  } catch (error) {
    errorHandler(error, res, req);
  }
});

router.delete('/:nftId', async (req, res) => {
  const { nftId } = req.params;

  try {
    await Nft.findByIdAndDelete(nftId);

    res.status(200).json({ nftId });
  } catch (error) {
    errorHandler(error, res, req);
  }
});

const getNfts = async (req, res) => {
  try {
    const count = await Nft.countDocuments();
    let nfts = await Nft
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

module.exports = router;

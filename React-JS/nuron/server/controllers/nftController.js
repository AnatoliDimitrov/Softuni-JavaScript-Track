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
    } catch (err) {
        if (err.kind === 'ObjectId') {
            return res.status(200).json({ nfts: [], count: 0 });
        }
        return res.json({ error: err.message });
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
        res.status(404).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    let fileName = '';

    if (req.files) {
        const file = req.files.file;
        fileName = uuidv4();

        console.log(file)
        console.log(req.body)

        file.mv(`${'./static/nfts'}/${fileName}`);
    }


    let { name, description, imageUrl, price, owner } = req.body;
    if (name.length < 2) {
        return res.json({ error: 'Name too Short!' });
    }
    if (description.length < 10) {
        return res.json({ error: 'Description too Short!' });
    }
    if (price <= 0) {
        return res.json({ error: 'Price must be positive!' });
    }
    if (!fileName) {
        return res.json({ error: 'No file uploaded!' });
    }
    imageUrl = `${'http://localhost:3005/public/nfts/'}${fileName}`;
    const data = { name, description, imageUrl, price, owner };

    try {
        const createdNft = await Nft.create({ ...data });
        const nft = { ...data };
        return res.json(nft);

    } catch (err) {
        return res.json({ error: err.message });
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

        imageUrl = `${'http://localhost:3005/public/nfts/'}${fileName}`;

        file.mv(`${'./static/nfts'}/${fileName}`);
    }

    const data = { name, description, imageUrl, price };

    try {
        const nft = await Nft
            .findByIdAndUpdate(nftId, data)
            .select('name description imageUrl price');

        res.status(200).json({ nft: nft.toObject() });
    } catch (err) {
        return res.json({ error: err.message });
    }
});

router.delete('/:nftId', async (req, res) => {
    const { nftId } = req.params;

    try {
        await Nft.findByIdAndDelete(nftId);

        res.status(200).json({ nftId });
    } catch (err) {
        return res.json({ error: err.message });
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
        return res.json({ error: error.message });
    }
};

module.exports = router;

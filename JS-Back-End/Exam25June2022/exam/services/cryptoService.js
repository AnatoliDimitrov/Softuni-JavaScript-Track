const mongoose = require('mongoose');
const Crypto = require('../models/Crypto');
const { saveMine, deleteMine } = require('../services/userService');

exports.create = async (userId, data) => {
    try {
        const crypto = {
            name: data.name,
            image: data.image,
            price: data.price,
            description: data.description,
            paymentMethod: data.paymentMethod,
            owner: userId,
        };
        await Crypto.create(crypto);

        //const createdCrypto = await Crypto.findOne({ ...crypto }).lean();

        return crypto;
    } catch (error) {
        return { message: error.message }
    }
}

exports.getAll = async () => {
    try {
        return Crypto.find().lean();
    } catch (error) {
        return { message: error.message }
    }
}

exports.getOne = async (id) => {
    try {
        return Crypto.findById(id).populate('owner').populate('buyers').lean();
    } catch (error) {
        return { message: error.message }
    }
}

exports.getOneUnleaned = async (id) => {
    try {
        return Crypto.findById(id);
    } catch (error) {
        return { message: error.message }
    }
}

exports.addShare = async (id, userId) => {
    try {
        let pub = await Crypto.findById(id).populate('owner');

        pub.usersShared.push(userId);

        await pub.save();
    } catch (error) {
        return { message: error.message }
    }
}

exports.deleteElement = async (id) => {
    try {
        await Crypto.findByIdAndDelete(id);
        //await deleteMine(userId, id);
    } catch (error) {
        return { message: error.message }
    }
}

exports.buyElement = async (id, userId) => {
    try {
        let element = await Crypto.findById(id);

        element.buyers.push(userId);
        
        await element.save();
    } catch (error) {
        return { message: error.message }
    }
}

exports.edit = async (id, data) => {
    try {
        await Crypto.updateOne({ _id: id }, { $set: data }, { runValidators: true });
    } catch (error) {
        return { message: error.message }
    }
}

exports.createOptions = (category) => {
    return [
      { content: 'Crypto Wallet', value: 'crypto-wallet' },
      { content: 'Credit Card', value: '2' },
      { content: 'Debit Card', value: 'debit-card' },
      { content: 'PayPal', value: 'paypal' },
    ].map((x, i) => (x.value == category ? { ...x, selected: 'selected' } : x));
  }
  
//   <option value="crypto-wallet">Crypto Wallet</option>
//   <option value="credit-card">Credit Card</option>
//   <option value="debit-card">Debit Card</option>
//   <option value="paypal" selected>PayPal</option>
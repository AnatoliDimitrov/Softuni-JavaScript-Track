const mongoose = require('mongoose');
const environment = require('./environment');

const Nft = require('../models/Nft');
const User = require('../models/User');

const connectionString = 'mongodb://localhost:27017/nuron';

// userData = [
//     {
//         "_id": "62ee45bb34e1a7f9531a64b6",
//         "firstName": "Anatoli",
//         "lastName": "Dimitrov",
//         "email": "apdimitrov@yahoo.com",
//         "imageUrl": "http://localhost:3005/public/users/8a3f3f40-d43f-4686-8028-3c41a0f17b58",
//         "password": "$2b$10$NLWUsPMXo3tfPvx7/Neqrut9H69NnzcsPX6IXZMB0SmUfg4WprR4.",
//         "phoneNumber": "0898344409",
//         "bio": "React dev for at this moment",
//         "nfts": [],
//         "__v": 0
//       },
//       {
//         "_id": "62ef893635d2006f35385589",
//         "firstName": "Test",
//         "lastName": "Testoff",
//         "email": "test@test.bg",
//         "imageUrl": "http://localhost:3005/public/users/0f2b02bd-64f0-4545-8bf1-d13afbdac765",
//         "password": "$2b$10$ZlerqC461HP6VBBQTNQbR.77EaDNLvw.pRSWzPN3n1H7.swq.ozAe",
//         "phoneNumber": "0888888888",
//         "bio": "Just a user for testing. Nothing else.",
//         "nfts": [],
//         "__v": 0
//       }
// ]

// nftData = [
//     {
//         "_id": "62ef988c8b779765558a0cd6",
//         "name": "Cubic Trad",
//         "imageUrl": "http://localhost:3005/public/nfts/a013e5b1-0c36-4deb-80dc-d8ab3c2a1fc1",
//         "description": "De très nombreux exemples de phrases traduites contenant \"cubic\" – Dictionnaire français-anglais et moteur de recherche de traductions françaises.",
//         "price": 500,
//         "owner": "62ef933333b6b82912d6c18f",
//         "likers": [],
//         "buyers": [],
//         "__v": 0
//     },
//     {
//         "_id": "62ef98f521024f2517272348",
//         "name": "Diamond Dog",
//         "imageUrl": "http://localhost:3005/public/nfts/81437a02-7b85-49e7-90ed-c8d6f086c3f3",
//         "description": "$BONES is a utility token designed specifically for our DOGGOVERSE. You will receive daily $BONES for each Diamond Sol Dog NFT that is in your wallet. Also, you will be able to get $BONES by being active on our Discord and engaging in all sorts of different activities in our virtual city.",
//         "price": 1500,
//         "owner": "62ee45bb34e1a7f9531a64b6",
//         "likers": [],
//         "buyers": [],
//         "__v": 0
//     },
//     {
//         "_id": "62ef994a21024f251727234e",
//         "name": "Morgan11",
//         "imageUrl": "http://localhost:3005/public/nfts/b0a348c9-b514-4107-bfa3-5baefaf911d2",
//         "description": "Mona Morgan is a special 50 pieces collab between CryptoMona and Morgancrow. With this collab we want to show that if you share your knowledge to help someone else on the road, great things can come out of that.",
//         "price": 666,
//         "owner": "62ee45bb34e1a7f9531a64b6",
//         "likers": [],
//         "buyers": [],
//         "__v": 0
//     },
//     {
//         "_id": "62ef99a221024f2517272352",
//         "name": "Dog Eligator",
//         "imageUrl": "http://localhost:3005/public/nfts/975625b7-4b48-4b48-a9d6-d091d2a70b2d",
//         "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         "price": 2500,
//         "owner": "62ee45bb34e1a7f9531a64b6",
//         "likers": [],
//         "buyers": [],
//         "__v": 0
//     }
// ]

// mongoose.connect(environment.CONNECTION_STRING, function(err, client) {
//     client.db.listCollections().toArray(function(err, collections) {
//         const names = collections.map(x => x.name);
//         if (!names.includes('nfts')) {
//             Nft.collection.insertMany(nftData);
//         }
//         if (!names.includes('users')) {
//             User.collection.insertMany(userData);
//         }
//     });
// });

exports.databaseInitialize = () => mongoose.connect(environment.CONNECTION_STRING)
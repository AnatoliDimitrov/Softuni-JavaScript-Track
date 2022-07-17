const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstName: {
      type: String,
      required: true,
      minLength: [2, 'First name should be at least 3 characters long!'],
  },
  lastName: {
      type: String,
      required: true,
      minLength: [2, 'Last name should be at least 3 characters long!'],
  },
  email: {
      type: String,
      required: true,
      match: [/^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/, 'Email is not valid!'],
  },
  imageUrl: {
      type: String,
  },
  password: {
      type: String,
      required: true,
      minLength: [3, 'Password should be at least 3 characters long!'],
  },
  phoneNumber: {
      type: String,
      match: [/^0[1-9]{1}[0-9]{8}$/, 'Phone number is not valid! Example: 0898123456'],
  },
  bio: {
      type: String,
      minLength: [10, 'Bio should be at least 10 characters long!'],
  },
});

const userModel = model('User', userSchema);
module.exports = {
  userModel,
};

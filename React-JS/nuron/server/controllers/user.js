const { userModel } = require('../models/User');
const { errorHandler } = require('../utils/errorHandler');
const { ValidationError } = require('../utils/createValidationError');

const getUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await userModel.findById(userId);

    if (!user) {
      throw new ValidationError('There is no such user with provided id.', 404);
    }

    res.status(200).json({ user: user.toObject() });
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const addUser = async (req, res) => {
  const { firstName, lastName, email, password} = req.body;
  const data = { firstName, lastName, email, password };

  try {
    const createdUser = await userModel.create({ ...data });
    const user = { ...data};

    res.status(200).json({ user });
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, email, imageUrl, phoneNumber, bio } = req.body;
  const data = { firstName, lastName, email, imageUrl, phoneNumber, bio };

  try {
    const user = await userModel
      .findByIdAndUpdate(userId, data)
      .select('firstName lastName email imageUrl phoneNumber ');

    res.status(200).json({ user: user.toObject() });
  } catch (error) {
    errorHandler(error, res, req);
  }
};

const deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    await userModel.findByIdAndDelete(userId);

    res.status(200).json({ userId });
  } catch (error) {
    errorHandler(error, res, req);
  }
};



module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUser,
};

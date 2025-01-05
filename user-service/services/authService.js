const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');

const registerUser = async ({ username, password }) => {
  const existingUser = await UserModel.findUserByUsername(username);
  if (existingUser) {
    throw new Error('Username already taken');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  return UserModel.createUser(username, hashedPassword);
};

const loginUser = async ({ username, password }) => {
  const user = await UserModel.findUserByUsername(username);
    if(!user){
    throw new Error('Invalid username or password');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch){
    throw new Error('Invalid username or password');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

const getUserById = async (id) => {
  return UserModel.findUserById(id);
};

const updateUser = async (id, { username, password }) => {
  const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
  return UserModel.updateUser(id, username, hashedPassword || '');
};

const deleteUser = async (id) => {
  return UserModel.deleteUser(id);
};

module.exports = {
  registerUser,
  loginUser,
  getUserById,
  updateUser,
  deleteUser,
};

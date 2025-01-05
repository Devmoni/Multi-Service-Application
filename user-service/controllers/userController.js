const { registerUser, loginUser, getUserById, updateUser, deleteUser } = require('../services/authService');

const register = async (req, res) => {
  console.log(req.body);
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const token = await loginUser(req.body);
    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: 'User not found' });
  }
};

const update = async (req, res) => {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  register,
  login,
  getUser,
  update,
  remove,
};

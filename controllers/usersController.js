const User = require("../model/User");

const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password -refreshToken");
  res.json(users);
};

const getUser = async (req, res) => {
  if (!req?.params?.id) {
    return res.status(400).json({ message: "User ID required." });
  }
  const user = await User.findOne({ _id: req.params.id }).select("-password -refreshToken").exec();
  if (!user) {
    return res.status(204).json({ message: "User not found." });
  }
  res.json(user);
};

const deleteUser = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ message: "ID parameter is required." });
  }
  const user = await User.findOne({ _id: req.body.id }).exec();
  if (!user) {
    return res.status(400).json({ message: `No user matches ID ${req.body.id}.` });
  }
  const result = await User.deleteOne({ _id: req.body.id });
  res.json(result);
};

module.exports = { getAllUsers, getUser, deleteUser };
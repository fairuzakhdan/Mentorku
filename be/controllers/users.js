const User = require("../models/user");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { email, password, fullName, telephone, institution } = req.body;
  try {
    const passwordHash = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      email,
      password: passwordHash,
      fullName,
      telephone,
      institution,
    });
    await newUser.save();
    return res.status(201).json({
      status: "success",
      data: newUser,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: "failed",
      data: null,
      message: "Internal server error",
    });
  }
};

const getAllUser = async (req, res) => {
  const users = await User.find({ accessLevel: "user" });
  return res.status(200).json({
    status: "success",
    data: users,
  });
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  return res.status(200).json({
    status: "success",
    data: user,
  });
};

const updateUserById = async (req, res) => {
  const { userId } = req.params;
  const passwordHash = await bcrypt.hashSync(req.body.password, 10);
  try {
    const user = await User.findById(userId);
    await user.updateOne({ ...req.body, password: passwordHash });
    return res.status(200).json({
      status: "success",
      message: "User successfully updated",
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
};

const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = User.findById(userId);
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User Not Found",
      });
    }
    await user.deleteOne();
    return res.status(200).json({
      status: "success",
      message: "User successfully deleted",
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
};
module.exports = {
  createUser,
  getUserById,
  getAllUser,
  updateUserById,
  deleteUserById,
};

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
      message: "User successfully added",
    });
  }
};


const getAllUser = async (req, res) => {
    const users = await User.find();
    res.status(200).json({
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
    
}
module.exports = { createUser, getUserById, getAllUser };

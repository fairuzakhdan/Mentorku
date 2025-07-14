const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Mentor = require("../models/mentors");

const register = async (req, res) => {
  const hashPassword = bcrypt.hashSync(req.body.password, 10);
  const register = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: hashPassword,
  };
  try {
    const user = new User(register);
    await user.save();
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (err) {
    return res.status(400).json({
      status: "failed",
      message: err.message,
      data: null,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = await Mentor.findOne({ email });
    }
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User Not Found",
      });
    }
    const match = bcrypt.compareSync(password, user.password);
    if (!match) {
      return res.status(400).json({
        status: "failed",
        message: "Password Incorrect",
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
        accessLevel: user.accessLevel,
      },
      process.env.PRIVATE_KEY_JWT,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      status: "success",
      token,
    });
  } catch (err) {
    return res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

const getUserLogin = (req, res) => {
  const user = req.user;

  if (!user) {
    return res.status(404).json({
      status: "failed",
      data: null,
    });
  }

  res.status(200).json({
    status: "success",
    data: user,
  });
};

module.exports = {
  register,
  login,
  getUserLogin,
};

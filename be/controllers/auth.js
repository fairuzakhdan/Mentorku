const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Mentor = require("../models/mentors");

const register = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const emailMatch = await User.findOne({ email });
    if (emailMatch) {
      return res.status(200).json({
        status: "failed",
        message: "Email already registered",
      });
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const register = {
      fullName,
      email,
      password: hashPassword,
    };

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
      user = await Mentor.findOne({ email, accessLevel: 'mentor' });
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
        image: user.profilePicture.url,
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

const getUserLogin = async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(404).json({
      status: "failed",
      data: null,
    });
  }
  return res.status(200).json({
    status: "success",
    data: user,
  });
};

module.exports = {
  register,
  login,
  getUserLogin,
};

const User = require("../models/user");
const isAdmin = async (req, res, next) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        status: "failed",
        message: "User not authenticated",
      });
    }

    if (user.accessLevel !== "admin") {
      return res.status(403).json({
        status: "failed",
        message: "Not Authorized - Admin access required",
      });
    }
    next();
  } catch (error) {
    console.error("isAdmin middleware error:", error.message);
    return res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

module.exports = isAdmin;

const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const verifyToken = require("../middlewares/verifyToken");
const isAdmin = require("../middlewares/isAdmin");
const users = require("../controllers/users");

router.route("/auth/register").post(auth.register);
router.route("/auth/login").post(auth.login);
router.route("/users/me").get(verifyToken, auth.getUserLogin);

router
  .route("/users")
  .get(verifyToken, isAdmin, users.getAllUser)
  .post(verifyToken, isAdmin, users.createUser);

router
  .route("/users/:userId")
  .get(verifyToken, isAdmin, users.getUserById)
  .put(verifyToken, users.updateUserById)
  .delete(verifyToken, isAdmin, users.deleteUserById);

module.exports = router;

const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");
const verifyToken = require("../middlewares/verifyToken");
const users = require("../controllers/users");

router
  .route("/")
  .get(verifyToken, users.getAllUser)
  .post(verifyToken, users.createUser);

router
  .route("/:userId")
  .get(verifyToken, users.getUserById)
  .put(verifyToken, users.updateUserById)
  .delete(verifyToken, users.deleteUserById);

router.route("/auth/register").post(auth.register);
router.route("/auth/login").post(auth.login);
router.route("/users/me").get(verifyToken, auth.getUserLogin);

module.exports = router;

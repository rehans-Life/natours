const { Router } = require("express");
const {
  getUser,
  getUsers,
  addUser,
  deletedUser,
  updateUser,
} = require("../controllers/userController");

const router = Router();

router.route("/").get(getUsers).post(addUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deletedUser);

module.exports = router;

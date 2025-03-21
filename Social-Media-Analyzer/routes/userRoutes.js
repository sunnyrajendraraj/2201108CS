const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { authenticate } = require("../middleware/auth");

router.get("/", authenticate, userController.getTopUsers);

module.exports = router;

const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const { authenticate } = require("../middleware/auth");

router.get("/", authenticate, postController.getPosts);

module.exports = router;

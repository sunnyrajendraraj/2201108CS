const express = require("express");
const { getNumbers } = require("../controllers/numberController");

const router = express.Router();

router.get("/:type", getNumbers);

module.exports = router;

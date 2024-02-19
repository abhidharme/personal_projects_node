const express = require("express");
const { postCustomer } = require("../controllers/user.controller");

const router = express.Router();

router.post("/reg", postCustomer);

module.exports = router
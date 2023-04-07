"use strict";

const express = require("express");
const router = express.Router();

const control = require('./home.control');

router.get("/", control.show.MainPage);
router.get("/login", control.show.LoginPage);
router.post("/login", control.process.login);

module.exports = router;
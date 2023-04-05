"use strict";

const express = require("express");
const router = express.Router();

const control = require('./home.control');

router.get("/",control.ShowMainPage);

router.get("/login",control.ShowLoginPage);

module.exports = router;
"use strict";

// 모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views","./src/views");
app.set("view engine","html");
app.engine('html',require('ejs').renderFile);

app.use("/", home); // 미들웨어를 등록

module.exports = app;

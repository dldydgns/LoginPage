"use strict";

function ShowMainPage(req,res){
    res.render("home/index");
}

function ShowLoginPage(req,res){
    res.render("home/login");
}

module.exports = {
    ShowMainPage,
    ShowLoginPage,
};

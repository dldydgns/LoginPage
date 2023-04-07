"use strict";

const User = require("../../models/User");

const show = {
    MainPage:(req,res)=>{
        res.render("home/index");
    },
    LoginPage:(req,res)=>{
        res.render("home/login");
    },
    RegisterPage:(req,res)=>{
        res.render("home/register");
    }
}

const process = {
    login:(req,res)=>{
        const user = new User(req.body);
        const response = user.login();
        
        return res.json(response);
    }
}

module.exports = {
    show,
    process,
};

"use strict";

const UserStorage = require("../../models/UserStorage");

const show = {
    MainPage:(req,res)=>{
        res.render("home/index");
    },
    LoginPage:(req,res)=>{
        res.render("home/login");
    }
}

const process = {
    login:(req,res)=>{
        const id = req.body.id;
        const pw = req.body.password;
        
        const user = UserStorage.getUser("id","password");
        
        const response = {};
        if(user.id.includes(id)){
            const idx = user.id.indexOf(id);
            if(user.password[idx] == pw){
                response.sucess = true;
                return res.json(response);
            }
        }

        response.sucess = false;
        response.msg = "로그인에 실패하셨습니다";
        return res.json(response);
    }
}

module.exports = {
    show,
    process,
};

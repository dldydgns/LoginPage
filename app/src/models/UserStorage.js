"use strict";

const db = require("../config/db");

class UserStorage{
    static getUserInfo(id){
        return new Promise((resolve, reject)=>{
            const query = "SELECT * FROM user WHERE id = ?;";
            db.query(query, [id],
                (err,data)=>{
                    if(err) reject(`${err}`);
                    else resolve(data[0]);
            });
        })
    }

    static save(userInfo){
        return new Promise((resolve, reject)=>{
            const query = "INSERT INTO user(id, name, password) VALUES(?, ?, ?);";
            db.query(query, [userInfo.id, userInfo.name, userInfo.password], 
                (err)=>{
                    if(err) reject(`${err}`);
                    else resolve({ success: true, msg: "회원가입에 성공하셨습니다." });
            });
        })
    }
}

module.exports = UserStorage;
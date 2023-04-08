"use strict";

const fs = require("fs").promises;

class UserStorage{
    // private 메서드는 최상단으로...
    static #getUserInfo(data, id){
        const user = JSON.parse(data);
        const idx = user.id.indexOf(id);
        const userInfo = Object.keys(user).reduce((newUser, info)=>{
            newUser[info] = user[info][idx];
            return newUser;
        },{});
        return userInfo;
    }

    static getUser(...fields){
        // const user = this.#user;
        //반복문(내부 return은 다음 newUsers로 들어감)
        const newUser = fields.reduce((newUser,field)=>{
            if(user.hasOwnProperty(field)){
                newUser[field] = user[field];
            }
            return newUser;
        },{});
        return newUser;
    }

    static getUserInfo(id){
        return fs
        .readFile("./src/DB/user.json")
        .then((data)=>{
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }

    static save(userInfo){
        // const user = this.#user;
        user.id.push(userInfo.id);
        user.name.push(userInfo.name);
        user.password.push(userInfo.password);
        return { success: true };
    }
}

module.exports = UserStorage;
"use strict";

const fs = require("fs").promises;

class UserStorage{
    static #getUser(data, isAll, fields){
        const user = JSON.parse(data);
        if(isAll) return user;
        //반복문(내부 return은 다음 newUsers로 들어감)
        const newUser = fields.reduce((newUser,field)=>{
            if(user.hasOwnProperty(field)){
                newUser[field] = user[field];
            }
            return newUser;
        },{});
        return newUser;
    }

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

    static getUser(isAll, ...fields){
        return fs
        .readFile("./src/DB/user.json")
        .then((data)=>{
            return this.#getUser(data, isAll, fields);
        })
        .catch(console.error);
    }

    static getUserInfo(id){
        return fs
        .readFile("./src/DB/user.json")
        .then((data)=>{
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }

    static async save(userInfo){
        const user = await this.getUser(true);
        // 공식 문서에서 문자열로 throw 하래요..
        if(user.id.includes(userInfo.id))
            throw "이미 존재하는 아이디입니다.";

        user.id.push(userInfo.id);
        user.name.push(userInfo.name);
        user.password.push(userInfo.password);

        fs.writeFile("./src/DB/user.json",JSON.stringify(user));
        return { success: true };
    }
}

module.exports = UserStorage;
"use strict";

class UserStorage{
    static #user={
        id: ["a","b","c"],
        password: ["1","2","3"],
        name: ["A","B","C"],
    };

    static getUser(...fields){
        const user = this.#user;
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
        const user = this.#user;
        const idx = user.id.indexOf(id);
        const getUserInfo = Object.keys(user).reduce((newUser, info)=>{
            newUser[info] = user[info][idx];
            return newUser;
        },{});

        return getUserInfo;
    }

    static save(userInfo){
        const user = this.#user;
        user.id.push(userInfo.id);
        user.name.push(userInfo.name);
        user.password.push(userInfo.password);
        return { success: true };
    }
}

module.exports = UserStorage;
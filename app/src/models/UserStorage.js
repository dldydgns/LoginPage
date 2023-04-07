"use strict";

class UserStorage{
    static #user={
        id: ["a","b","c"],
        password: ["1","2","3"],
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
}

module.exports = UserStorage;
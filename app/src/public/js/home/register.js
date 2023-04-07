"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#createBtn");

registerBtn.addEventListener("click",OnRegisterBtnClicked);

function OnRegisterBtnClicked(){
    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    };
    console.log(req);

    // fetch("/register",{
    //     method: "POST",
    //     headers:{
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(req),
    // })
    // .then((res)=>res.json())
    // .then((res)=>{
    //     if(res.sucess){
    //         alert(res.msg);
    //         location.href = "/";
    //     }else{
    //         alert(res.msg);
    //     }
    // })
    // .catch((err)=>{
    //     console.error("로그인 중 에러 발생");
    // });
}
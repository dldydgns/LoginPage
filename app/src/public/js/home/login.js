"use strict";

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click",OnLoginBtnClicked);

function OnLoginBtnClicked(){
    const req = {
        id: id.value,
        password: password.value,
    };

    fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.sucess){
            alert(res.msg);
            location.href = "/";
        }else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error("로그인 중 에러 발생");
    });
}
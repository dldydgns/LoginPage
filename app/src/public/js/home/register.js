"use strict";

const id = document.querySelector("#id");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#createBtn");

registerBtn.addEventListener("click",OnRegisterBtnClicked);

function OnRegisterBtnClicked(){
    if(!id.value) return alert("아이디를 입력 해 주십시오.");
    if(password !== confirmPassword) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        name: name.value,
        password: password.value,
    };
    console.log(req);

    fetch("/register",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.sucess){
            location.href = "/login";
        }else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error("회원가입 중 에러 발생");
    });
}
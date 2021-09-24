import {navigateTo} from "./router.js";
console.log("app.js is running!");


window.login = () => {
    const mail = document.querySelector("#login-mail").value;
    const password =document.querySelector("#login-password").value;
    console.log(mail, password);

    if(mail === "line@mail.com" && password === "test01"){
        console.log("Approved");
        localStorage.setItem("userIsApproved", true);
        navigateTo("#/");
    }
    else {
        console.log("Not approved");
    }
    window.logout = () => {
        localStorage.setItem("userIsApproved", false);
        navigateTo("#/login");
    }
}

document.querySelector("#signup-form-div").addEventListener("submit", signUp);

let signUpData=JSON.parse(localStorage.getItem("logInData")) || [];

function signUp(event){
    event.preventDefault;
let name=document.querySelector("#name").value

let phone=document.querySelector("#phone").value

let password=document.querySelector("#password").value

let email=document.querySelector("#email").value

if(name=="" || email=="" || password=="" || phone=="") {
    alert("Please fill all Details");
    // window.location.href="./signup.html"
    location.reload();
}
else{
    let obj={
        name:name,
        phone:phone,
        email:email,
        password:password
    }
    signUpData.push(obj)
    alert("Signed Up Successfully")
}
localStorage.setItem("logInData",JSON.stringify(signUpData))



}

let logInData=JSON.parse(localStorage.getItem("logInData"))
// console.log(logInData)
document.querySelector("#form").addEventListener("submit",logInCheck)

function logInCheck(event){
    event.preventDefault()
    let emailCheck = document.querySelector("#email").value

    let passCheck = document.querySelector("#pass").value

    let flag=false

    for(let i=0;i<logInData.length;i++){
        if(logInData[i].email==emailCheck  && logInData[i].password==passCheck){
            flag=true;
        }
        
    }
    if(flag==true){
        alert("Logged In Successfully")
        window.location.href="./index.html"
    }
    else{
        alert("Invalid Credentials, Please try again")
        // window.location.href="./login.html"
        location.reload()
    }
}


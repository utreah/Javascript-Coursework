document.getElementById("loginButton").addEventListener("click", (event)=>{
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if(!username || !password){
        document.getElementById("loginMessage").textContent = "Username/Password fields must be filled!";
        return;
    }
    let users = JSON.parse(localStorage.getItem("users"));
    if(!users){
        document.getElementById("loginMessage").textContent = "No account has been found! Redirecting to Register page!";
        users = [];
        setTimeout(() => {
                window.location.href = "register.html";
            }, 2000);
        return;
    }
    for(let i = 0; i < users.length; i++){
        if(users[i].username === username && users[i].password === password){
            document.getElementById("loginMessage").textContent = "Login succesful! You are being redirected in 2 seconds!"
            localStorage.setItem("loggedUser", JSON.stringify(users[i]));
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
            return;
        }
        /*
        else if(users[i].username !== username){
            document.getElementById("loginMessage").textContent = "Username is wrong!";
            return;
        }
        else if(users[i].password !== password){
            document.getElementById("loginMessage").textContent = "Password is wrong!";
            return;         
        }
        */
    }

if(!localStorage.getItem("loggedUser")){
    document.getElementById("loginMessage").textContent = "Wrong username or password!";   
    return;
}

})
document.getElementById("registerButton").addEventListener("click", ()=>{
    const username = document.getElementById("usernameRegister").value;
    const password = document.getElementById("passwordRegister").value;
    if(!username || !password){
        alert("Username/Password fields must be filled!");
        return; 
    }
    let users = JSON.parse(localStorage.getItem("users"));

    if(!users){
        users = [];
    }

    for(let i = 0; i < users.length; i++){
        if(users[i].username === username){
            alert("User already exists!");
            return;
        }
    }

    const addNewUser = {
        username: username,
        password: password,
        bestScore: 0,
    };
    users.push(addNewUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successful!\nYou are being redirected to Login page");
    window.location.href = "login.html";
    console.log(users);
});


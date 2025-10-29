document.getElementById("registerButton").addEventListener("click", ()=>{
    const username = document.getElementById("usernameRegister").value;
    const password = document.getElementById("passwordRegister").value;
    if(!username || !password){
        document.getElementById("registerMessage").textContent = "Username/Password fields must be filled!";
        return; 
    }
    let users = JSON.parse(localStorage.getItem("users"));

    if(!users){
        users = [];
    }

    for(let i = 0; i < users.length; i++){
        if(users[i].username === username){
            document.getElementById("registerMessage").textContent = "User already exists!";
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
    window.location.href = "login.html";
    console.log(users);
});


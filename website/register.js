document.getElementById("registerButton").addEventListener("click", (event)=>{
    event.preventDefault();
    const username = document.getElementById("usernameRegister").value;
    const password = document.getElementById("passwordRegister").value;
    const phoneNumber = document.getElementById("phoneRegister").value;
    const address = document.getElementById("addressRegister").value;
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
        phoneNumber: phoneNumber,
        address: address,
    };
    document.getElementById("registerMessage").textContent = "Account created succesfully!"
    setTimeout(() => {
        window.location.href = "login.html";
    }, 2000);
    users.push(addNewUser);
    localStorage.setItem("users", JSON.stringify(users));
});


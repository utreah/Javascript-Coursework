let users = JSON.parse(localStorage.getItem("users"));

users.sort((user1, user2) => {
    return user2.bestScore - user1.bestScore;
})
window.onload = () => {
    let table = document.getElementById("userTable");

    for(let i = 0; i < users.length; i++){
        let table_row = `
            <tr>
                <td>${i + 1}</td>
                <td>${users[i].username}</td>
                <td>${users[i].bestScore}</td>
            </tr>
        `;
        table.innerHTML += table_row;
    }
};
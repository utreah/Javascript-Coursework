import kaplay_canvas from "../header";
import game from "./game";
import mainMenu from "./mainMenu";
export default function gameOver(){
    let loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let sessionScore = kaplay_canvas.getData("session-score");

    if(kaplay_canvas.getData("best-score") == null)
        kaplay_canvas.setData("best-score", 0);
        kaplay_canvas.add([kaplay_canvas.text("YOU DIED!"), {font: "slkscr"}, kaplay_canvas.pos(kaplay_canvas.center()), kaplay_canvas.anchor("center")]);
        kaplay_canvas.add([kaplay_canvas.text("SCORE: " + kaplay_canvas.getData("session-score")), { size: 0 , font: "slkscr"}, kaplay_canvas.pos(0, 35)]);
        kaplay_canvas.add([kaplay_canvas.text("BEST SCORE: " + loggedUser.bestScore), { size: 0 , font: "slkscr"}, kaplay_canvas.pos(0, 75)]);
        kaplay_canvas.onButtonPress("jump", () => {
            kaplay_canvas.go("main-menu", mainMenu);
        })

    if(loggedUser){
        if(sessionScore > loggedUser.bestScore){
            loggedUser.bestScore = sessionScore;

            for(let i = 0; i < users.length; i++){
                if(users[i].username === loggedUser.username){
                    users[i].bestScore = sessionScore;
                    break;
                }
            }

            localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
            localStorage.setItem("users", JSON.stringify(users));
        }
    }
}
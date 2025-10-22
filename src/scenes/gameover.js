import kaplay_canvas from "../header";
import game from "./game";

export default function gameOver(){
    if(kaplay_canvas.getData("best-score") == null)
        kaplay_canvas.setData("best-score", 0);
        kaplay_canvas.add([kaplay_canvas.text("YOU DIED!"), {font: "slkscr"}, kaplay_canvas.pos(kaplay_canvas.center()), kaplay_canvas.anchor("center")]);
        kaplay_canvas.add([kaplay_canvas.text("SCORE: " + kaplay_canvas.getData("score")), { size: 0 , font: "slkscr"}, kaplay_canvas.pos(0, 0)]);
        kaplay_canvas.add([kaplay_canvas.text("BEST SCORE: " + kaplay_canvas.getData("best-score")), { size: 0 , font: "slkscr"}, kaplay_canvas.pos(0, 50)]);
        kaplay_canvas.onButtonPress("jump", () => {
            kaplay_canvas.go("game", game);
        })
        
}
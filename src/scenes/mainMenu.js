import kaplay from "kaplay";
import kaplay_canvas from "../header";
import {makeOwlet}from "../entities/owlet-monster"

export default function mainMenu(){
    kaplay_canvas.onButtonPress("jump", () => kaplay_canvas.go("game")); 

    const bgPieceWidth = 800;
    const bgPieces = [
        kaplay_canvas.add([
            kaplay_canvas.sprite("sky"),
            kaplay_canvas.pos(0,0),
            kaplay_canvas.scale(8),
            kaplay_canvas.opacity(0.8),
        ]),
        kaplay_canvas.add([
            kaplay_canvas.sprite("sky"),
            kaplay_canvas.pos(bgPieceWidth,0),
        ]),
    ]
    
    const layers = [
        {
            speed: -25,
            parts: [
                kaplay_canvas.add([kaplay_canvas.sprite("clouds"), kaplay_canvas.pos(0, 0)]),
                kaplay_canvas.add([kaplay_canvas.sprite("clouds"), kaplay_canvas.pos(bgPieceWidth - 225, 0)])
            ],
        }
    ]
    
    kaplay_canvas.add([kaplay_canvas.text("PRESS SPACE TO START"), {font: "slkscr"}, 
        kaplay_canvas.pos(kaplay_canvas.center()), 
        kaplay_canvas.anchor("center")
    ]);
// this is for background. It moves the sky(blue) and clouds to left by layer.speed pixels each frame(which is 25 pixels to left each frame)
    kaplay_canvas.onUpdate(() => {
        for(const layer of layers){
            if(layer.parts[1].pos.x < 0){
                layer.parts[0].moveTo(layer.parts[1].pos.x + 576, 0);
                layer.parts.push(layer.parts.shift());
            }
            layer.parts[0].move(layer.speed, 0);
            layer.parts[1].move(layer.speed, 0);
        }
    })

    kaplay_canvas.add([kaplay_canvas.text("Player: " + JSON.parse(localStorage.getItem("loggedUser")).username), {font: "slkscr"},
        kaplay_canvas.pos(0, 10)
    ])
}
import kaplay from "kaplay";
import kaplay_canvas from "../header";
import {owlet}from "../entities/owlet-monster"

export default function mainMenu(){
    if(!kaplay_canvas.getData("best-score")) 
        kaplay_canvas.setData("best-score", 0);
    kaplay_canvas.onButtonPress("jump", () => kaplay_canvas.go("game")); 

    const bgPieceWidth = 576;
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
                kaplay_canvas.add([kaplay_canvas.sprite("clouds"), kaplay_canvas.pos(bgPieceWidth, 0)])
            ],
        }
    ]
    
    kaplay_canvas.add([kaplay_canvas.text("PRESS SPACE TO START"), {font: "slkscr"}, 
        kaplay_canvas.pos(kaplay_canvas.center()), 
        kaplay_canvas.anchor("center")
    ]);

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
    /*
    const platforms = [
        kaplay_canvas.add([
            kaplay_canvas.sprite("near-field"),
            kaplay_canvas.pos(576, -50),
        ]),
        kaplay_canvas.add([
            kaplay_canvas.sprite("far-field"),
            kaplay_canvas.pos(0, 0),
        ])
    ];
    
    */
}
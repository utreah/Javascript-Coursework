import kaplay from "kaplay";
import kaplay_canvas from "../header"; 
import { owlet } from "../entities/owlet-monster"
export default function game(){

    const IMAGE_WIDTH = 576;       
    const layers = [
        {
            speed: -15,
            parts: [
                kaplay_canvas.add([kaplay_canvas.sprite("clouds"), kaplay_canvas.pos(0, 0)]),
                kaplay_canvas.add([kaplay_canvas.sprite("clouds"), kaplay_canvas.pos(IMAGE_WIDTH, 0)]),
            ],
        },
        {
            speed: -80,
            parts: [
                kaplay_canvas.add([kaplay_canvas.sprite("far-field"), kaplay_canvas.pos(0, 0)]),
                kaplay_canvas.add([kaplay_canvas.sprite("far-field"), kaplay_canvas.pos(IMAGE_WIDTH, 0)]),
            ],
        },
        {
            speed: -300,
            parts: [
                kaplay_canvas.add([kaplay_canvas.sprite("near-field"), kaplay_canvas.pos(0, 0),
                // kaplay_canvas.area(),
                ]),
                kaplay_canvas.add([kaplay_canvas.sprite("near-field"), kaplay_canvas.pos(IMAGE_WIDTH, 0), 
                // kaplay_canvas.area(),
                ]),
            ],
        },
    ];
    owlet(kaplay_canvas.vec2(100, 276));
    kaplay_canvas.onUpdate(() => {
        for(const layer of layers){
            if(layer.parts[1].pos.x < 0){
                layer.parts[0].moveTo(layer.parts[1].pos.x + IMAGE_WIDTH, 0);
                layer.parts.push(layer.parts.shift());
            }
            layer.parts[0].move(layer.speed, 0);
            layer.parts[1].move(layer.speed, 0);
        }
    })
    //kaplay_canvas.add([kaplay_canvas.sprite("owlet-monster"), kaplay_canvas.pos(100, 276)], kaplay_canvas.rotate(1000));
}
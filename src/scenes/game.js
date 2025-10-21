import kaplay from "kaplay";
import kaplay_canvas from "../header"; 
import { makeOwlet } from "../entities/owlet-monster"
import { createPillar } from "../entities/pillar";
export default function game(){
    kaplay_canvas.setGravity(3100);
    const IMAGE_WIDTH = 800;       
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
    const platforms = [
            kaplay_canvas.add([kaplay_canvas.sprite("near-field"), kaplay_canvas.pos(0, 0)]),
            kaplay_canvas.add([kaplay_canvas.sprite("near-field"), kaplay_canvas.pos(384, 450)]),

    ]
    const owlet = makeOwlet(kaplay_canvas.vec2(100, 276));
    owlet.setControls();
    owlet.setEvents();
    //createPillar(200 , 276);
    
    kaplay_canvas.add([
        kaplay_canvas.rect(600, 100),
        kaplay_canvas.opacity(0),
        kaplay_canvas.area(),
        kaplay_canvas.pos(0, 275),
        kaplay_canvas.body({isStatic: true}),
    ])
    let gameSpeed = 200;
    kaplay_canvas.loop(1, () => {
        gameSpeed += 5;
        const pillar = createPillar([400, 215], gameSpeed);
    });
    kaplay_canvas.onUpdate(() => {
        for(const layer of layers){
            if(layer.parts[1].pos.x < 0){
                layer.parts[0].moveTo(layer.parts[1].pos.x + IMAGE_WIDTH, 0);
                layer.parts.push(layer.parts.shift());
             }
        layer.parts[0].move(-100, 0);
        layer.parts[1].moveTo(layer.parts[0].pos.x + IMAGE_WIDTH - 230, 0);
    }
        


        if(platforms[1].pos.x < 0){
            platforms[0].moveTo(platforms[1].pos.x + IMAGE_WIDTH, 0);
            platforms.push(platforms.shift());
        }
        platforms[0].move(-gameSpeed, 0);
        platforms[1].moveTo(platforms[0].pos.x + platforms[1].width, 0);
asdasdsa

    })
    //kaplay_canvas.add([kaplay_canvas.sprite("owlet-monster"), kaplay_canvas.pos(100, 276)], kaplay_canvas.rotate(1000));
}
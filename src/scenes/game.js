import kaplay_canvas from "../header"; 
import { makeOwlet } from "../entities/owlet-monster"
import { createPillar } from "../entities/pillar";
import mainMenu from "./mainMenu";
import endGame from "./gameover"
export default function game(){
    kaplay_canvas.setGravity(3100); 
    const IMAGE_WIDTH = 800;       
    const layers = [
        {
            parts: [
                kaplay_canvas.add([kaplay_canvas.sprite("sky"), kaplay_canvas.pos(0, 0)]),
                kaplay_canvas.add([kaplay_canvas.sprite("sky"), kaplay_canvas.pos(IMAGE_WIDTH, 0),])
            ]
        },
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
    // Creating an object for our character to be loaded on the screen
    const owlet = makeOwlet(kaplay_canvas.vec2(100, 276));
    owlet.setControls();
    owlet.setEvents();
    //static platform that doesn't move(can be seen by enabling debug mode) and our character and pillars stick to it.
    kaplay_canvas.add([
        kaplay_canvas.rect(600, 100),
        kaplay_canvas.opacity(0),
        kaplay_canvas.area(),
        kaplay_canvas.pos(0, 275),
        kaplay_canvas.body({isStatic: true}),
        "static-platform"
    ])
    let score = 0;
    let score_text = kaplay_canvas.add([kaplay_canvas.text("Score: 0"), kaplay_canvas.pos(0, 0), {value: 0}, {font: "slkscr", size: 1000,}]);

    if(kaplay_canvas.getData("session-score") != 0)
        kaplay_canvas.setData("session-score", 0);


    let gameSpeed = 200; // gamespeed variable to modify how fast the screen(layers and pillars) moves
    kaplay_canvas.loop(1, () => { 
        if(score != 0)
            gameSpeed += 20;    
        const pillar = createPillar([IMAGE_WIDTH - 100, 215], gameSpeed);
        pillar.setEvents();
        pillar.onExitScreen(() => {
            score += 100;
            kaplay_canvas.setData("session-score", score);
            score_text.text = "Score: " + score;
        })
    });
kaplay_canvas.onUpdate(() => {
    /* to create parallax affect. Parallax affect is basically platform that is closer to player(us) while moving faster
    platforms/backgrounds that is away from the player moves slower. 
    Layer speeds are defined in const layers variable. 
    */
   /* We have 2 layers. One that is visible(layer[0]) and another one following the layer[0]
        as the layer0 leaves the screen(moving towards minus x (<-)) layer1 takes its place and becomes layer0.
        Now layer0 is invisible to player eye and it becomes layer1. 
   IMAGE_WIDTH is our game resolution [800]x500
   */
    for(const layer of layers){
        if(layer.parts[1].pos.x < 0){ // we check if layer1 is out of screen. 
            layer.parts[0].moveTo(layer.parts[1].pos.x + IMAGE_WIDTH, 0); // layer1 is outofscreen so we move layer0 to mainscreen.
            layer.parts.push(layer.parts.shift());
        }
        layer.parts[0].move(-100, 0); // we move layer0 100 pixels to left(if it was +100 it would move to right) 0 is y axis velocity so it is given 0
        layer.parts[1].moveTo(layer.parts[0].pos.x + IMAGE_WIDTH - 230, 0); // we take place of layer0's old place on the screen so there wont be any missing(black box) platform pieces
    }
    // we use tags here to check if two entities are colliding. If there is a collision it compares best score and session-score 
    // if session-score is higher than best-score, it saves session-score as best score and changes scene to end-game scene.
    kaplay_canvas.onCollide("owlet-monster", "pillar", () =>{  
        if(kaplay_canvas.getData("score") > kaplay_canvas.getData("best-score"))
            kaplay_canvas.setData("best-score", score);
        kaplay_canvas.go("end-game", endGame);    
    })

/* 
    Same as layers. This is for near-field layers. This is the platform that our character(owlet) stands on
*/
        if(platforms[1].pos.x < 0){
            platforms[0].moveTo(platforms[1].pos.x + IMAGE_WIDTH, 0);
            platforms.push(platforms.shift());
        }
        platforms[0].move(-gameSpeed, 0);
        platforms[1].moveTo(platforms[0].pos.x + platforms[1].width, 0);

    })
    
}
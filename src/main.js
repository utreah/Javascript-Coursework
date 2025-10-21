/* 
    All animations are downloaded from;
    -https://free-game-assets.itch.io/free-tiny-hero-sprites-pixel-art
    -https://free-game-assets.itch.io/nature-landscapes-free-pixel-art
*/

import kaplay_canvas from "./header";
import mainMenu from "./scenes/mainMenu";
import game from "./scenes/game"
//kaplay_canvas.loadSprite("owlet-monster", "assets/Owlet_Monster.png");

// Loading player(actor) pixel arts
kaplay_canvas.loadSprite("owlet-monster", "assets/Owlet_Monster_Run_6.png", {
    sliceX: 6,
    sliceY: 1,
    anims: {
        run: {
            from: 0, to: 5, loop: true, speed: 15, 
        }
    }
});
kaplay_canvas.loadSprite("owlet-monster-jump", "assets/Owlet_Monster_Jump_8.png", {
    sliceX: 8,
    sliceY: 1,
    anims: {
        jump: {
            from: 0, to: 7, loop: true, speed: 50
        }
    }
});
kaplay_canvas.loadSprite("owlet-monster-run-dust", "assets/Walk_Run_Push_Dust_6.png", {
    sliceX: 6,
    sliceY: 1,
    anims: {
        run: {
            from: 0, to: 5, loop: true, speed: 10,
        }
    }
})
// Loading obstacle
kaplay_canvas.loadSprite("pillar", "assets/pillar.png", {
    sliceX: 1,
    sliceY: 1,
})
// Loading Background scene
kaplay_canvas.loadSprite("sky", "assets/1.png");
kaplay_canvas.loadSprite("clouds", "assets/2.png");
kaplay_canvas.loadSprite("far-field", "assets/3.png");
kaplay_canvas.loadSprite("near-field", "assets/4.png");

kaplay_canvas.scene("main-menu", mainMenu);
kaplay_canvas.scene("game", game);
kaplay_canvas.scene("end-game", () => {});

// Wait for everything to load before running the first scene
kaplay_canvas.onLoad(() => {
    kaplay_canvas.go("main-menu");
});


kaplay_canvas.scene("end-game", () => {
    
});  

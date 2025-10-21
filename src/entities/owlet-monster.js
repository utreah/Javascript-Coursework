import kaplay_canvas from "../header";

export function owlet(pos){
    const actor_owlet = kaplay_canvas.add([
        kaplay_canvas.sprite("owlet-monster", {anim: "run"}),
        kaplay_canvas.scale(1.4),
        kaplay_canvas.area(),
        kaplay_canvas.anchor("botleft"),
        kaplay_canvas.pos(pos),

    ]);
}
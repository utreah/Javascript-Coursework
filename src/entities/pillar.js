import kaplay_canvas from "../header";

export function createPillar(pos){
    const pillar_entity = kaplay_canvas.add([
        kaplay_canvas.sprite("pillar"),
        kaplay_canvas.scale(1.4),
        kaplay_canvas.area(),
        kaplay_canvas.pos(pos),
    ]);
}
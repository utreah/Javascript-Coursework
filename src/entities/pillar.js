import kaplay_canvas from "../header";

export function createPillar(pos, gameSpeed){
    const pillar_entity = kaplay_canvas.add([
            kaplay_canvas.sprite("pillar"),
            kaplay_canvas.scale(),
            kaplay_canvas.pos(pos),
            kaplay_canvas.area(),
            kaplay_canvas.body(),
            kaplay_canvas.outline(),
            kaplay_canvas.move(kaplay_canvas.vec2(-1, 0), gameSpeed - 20),
            kaplay_canvas.body({isStatic: true})

        ])
}
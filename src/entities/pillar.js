import kaplay_canvas from "../header";
export function createPillar(pos, gameSpeed){
    const pillar_entity = kaplay_canvas.add([
            kaplay_canvas.sprite("pillar"),
            kaplay_canvas.scale(),
            kaplay_canvas.pos(pos),
            kaplay_canvas.area({shape: new kaplay_canvas.Rect(kaplay_canvas.vec2(10, 0), 25, 50)}),
            kaplay_canvas.body(),
            kaplay_canvas.outline(),
            kaplay_canvas.move(kaplay_canvas.vec2(-1, 0), gameSpeed),
            kaplay_canvas.body({isStatic: true}),
            kaplay_canvas.offscreen({destroy: true}),
            {
                setEvents(){
                    this.onExitScreen(() => {
                    })
                }
            },
            "pillar"
        ])
        return pillar_entity;
}
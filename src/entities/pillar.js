import kaplay_canvas from "../header";
export function createPillar(pos, gameSpeed){
    const pillar_entity = kaplay_canvas.add([
            kaplay_canvas.sprite("pillar"),
            kaplay_canvas.pos(pos),
            kaplay_canvas.area({shape: new kaplay_canvas.Rect(kaplay_canvas.vec2(10, 0), 25, 50)}), // area gives pillar_entity a hitbox and shape property is used to give adjusted hitbox
            kaplay_canvas.move(kaplay_canvas.vec2(-1, 0), gameSpeed), // this moves pillar towards left each frame(minus -> left, plus->right)
            kaplay_canvas.body({isStatic: true}), // this makes player_entity solid so it can be affected by gravity and such. In order to use body we need to use area as well(so pillar can collide with platform, not pass through)
            kaplay_canvas.offscreen({destroy: true}), // destroys the entity if they are off the screen
            {
                setEvents(){
                    this.onExitScreen(() => {
                    })
                }
            },
            "pillar" // pillar is a tag. Which to be used on functions. For example onCollide
        ])
        return pillar_entity;
}
import kaplay_canvas from "../header";

export function makeOwlet(pos){
    const owlet = kaplay_canvas.add([
        kaplay_canvas.sprite("owlet-monster", {anim: "run"}),
        kaplay_canvas.scale(1.4),
        kaplay_canvas.area(),
        kaplay_canvas.anchor("botleft"),
        kaplay_canvas.pos(pos),
        kaplay_canvas.body({jumpForce: 1000}),
        {
            setControls(){
                kaplay_canvas.onButtonPress("jump", () => {
                    if(this.isGrounded()){
                        this.play("jump");
                        this.jump();
                    }
                });
            },
            setEvents(){
                this.onGround(() => {
                    this.play("run");
                });
            }
        }
    ]);
    return owlet;
}
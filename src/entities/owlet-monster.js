import kaplay_canvas from "../header";

export function makeOwlet(pos){
    let jump_counter = 0;
    const owlet = kaplay_canvas.add([
        kaplay_canvas.sprite("owlet-monster", {anim: "run"}),
        kaplay_canvas.scale(1.4),
        kaplay_canvas.area({shape: new kaplay_canvas.Rect(kaplay_canvas.vec2(8, -5), 20, 25)}),
        kaplay_canvas.anchor("botleft"),
        kaplay_canvas.pos(pos),
        kaplay_canvas.body({jumpForce: 1000}),
        kaplay_canvas.offscreen({destroy: true}),
        {
            setControls(){
                kaplay_canvas.onButtonPress("jump", () => {
                    if(this.isGrounded()){
                        jump_counter = 0;
                        this.play("jump");
                        this.jump(); 
                    }
                    if(!this.isGrounded() && jump_counter < 2){
                        jump_counter++;
                        this.play("jump");
                        this.jump();
                    }
                });
            },
            setEvents(){
                this.onGround(() => {
                    this.play("run");
                });
            },
        },
        "owlet-monster"
    ]);
    return owlet;
}
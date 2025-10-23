import kaplay from "kaplay"

const kaplay_canvas = kaplay({
    width: 576,
    height: 324,
    letterbox: true,
    background: [0, 0, 0],
    global: false,
    buttons: {
        jump: {
            keyboard: ["space"]
        },
    },
    debugKey: "d",
    debug: true,
});
export default kaplay_canvas;
/* Reason behing why we export the function as 'default' is if I hadnt
export it as default I would have to use {} to include the function in my main.js
with default keyword I can do it without curly brackets 

The reason why this kaplay main body is in an another file is to block direct usage of global functions. By defining and exporting 
the function now I have to use kaplay_canvas variable to call functions(to prevent wrong/unnecesary usage of function)
import {k} from "./header.js" -> without default
import k from "./header.js" -> with default
*/
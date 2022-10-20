import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param time the time for the screen shake to start
* @param duration the duration of the screen shake
* @param intensity the intensity of the screen shake
* @author splashcard__ 
*/

//i love inneficciency <-- 10/10 spelling
export function screenShake(time: number, duration: number, intensity: number) {
    const position = [0, 0, 0, 0]
    switch(intensity){
        // deno-lint-ignore no-case-declarations
        case 1:
            let position = [[0, 0, 0, 0], [0.1, 0.2, 0, 0.25], [-0.2, 0, 0, 0.5], [0, 0, 0, 1, "easeOutBounce"]]
        // deno-lint-ignore no-fallthrough
        case 2:
            let position = [[0, 0, 0, 0], [0.2, 0.2, 0, 0.25], [-0.1, -0.1, 0, 0.5], [0, 0, 0, 1, "easeOutBounce"]
                         
    }
    for(let i = 0; i > duration; i++) {
           new rm.CustomEvent(time + 0.5).assignPlayerToTrack("player").push();
           new rm.CustomEvent(time).animateTrack("player", 0.5, {_position: position})
   }   
                
                
                
    new rm.CustomEvent(time).assignPlayerToTrack("player").push();
    new rm.CustomEvent(time).animateTrack("player", duration, {_position: position})
}

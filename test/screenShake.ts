import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

export function screenShake(time: number, duration: number, intensity: number) {
    const position = [0, 0, 0, 0]
    switch(intensity){
        // deno-lint-ignore no-case-declarations
        case 1:
            const position = [0, 0, 0, 0]
    }
    new rm.CustomEvent(time).assignPlayerToTrack("player").push();
    new rm.CustomEvent(time).animateTrack("player", duration, {_position: position})
}

import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param position the position of the animate Track CAN USE MULTIPLE POINTS
 * @param time the time at which the track will start
 * @param dur the duration of the track
 * @author splashcard__ thats me :pog:
*/
export function AnimatePlayer(time: number, duration: number, positions: rm.KeyframesAny) {
    const assign1 = new rm.CustomEvent(time).assignPlayerToTrack("person")
    assign1.push();
    const animate1 = new rm.CustomEvent(time).animateTrack("person", duration, {_position: positions})
    animate1.push();
    const assign2 = new rm.CustomEvent(time).assignPlayerToTrack("Notes")
    assign2.push();
    const animate2 = new rm.CustomEvent(time).animateTrack("Notes", duration, {_position: positions})
    animate2.push();
}

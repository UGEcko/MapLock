import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param time the time to start the screen shake
* @paran duration the duration of the screen shake
* @author splashcard__ || im still doing this by myself :(
*/

export function screenShake(time, duration) {
    const position: rm.Vec3 = [
    [0, 0, 0, 0], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.05], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.1], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.15], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.2],
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.25], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.3], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.35], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.4],
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.45], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.5], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.55], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.6],
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.65], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.7], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.75], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.8],
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.85], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.9], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 0.95], 
    [rm.rand(-0.2, 0.2), rm.rand(-0.2, 0.2), 0, 1]
  ]
    new rm.CustomEvent(time).assignPlayerToTrack("player").push();
    new rm.CustomEvent(time).animateTrack("player", duration, {_position: position})
}

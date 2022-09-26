import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param time
 * @param dur
 * @param y
 */

export function water(time: number, dur: number, y: number) {
    const wall = new remapper.Wall(time, dur, 1, 0, 0);
        wall.color = [0, 1.2, 3, 10],
        wall.fake = true;
        wall.interactable = false;
        wall.scale = [2000, 0.5, 2000],
        wall.animate.definitePosition = [[-1000, y, -1000, 0], [-1000, y, -1000, 1]]
        
    wall.push();
}

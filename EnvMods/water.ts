import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param time
 * @param dur
 * @param y
 */

export function water(time: number, dur: number, y: number) {
    const wall = new remapper.Wall(time, dur, 1, 0, 0);
        wall.color = [0, 1.2, 3, 11.3],
        wall.fake = true;
        wall.interactable = false;
        wall.scale = [5000, 0.5, 25000],
        wall.animate.definitePosition = [[-2000, y, -2000, 0], [-2000, y, -2000, 1]]
        
    wall.push();
}

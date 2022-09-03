import * as Remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param time
 * @param dur
 * @param y
 */

export function water(time: number, dur: number, y: number) {
    const wall = new Remapper.wall(time, dur, 1, 0, 0);
    wall.color = [0.03, 1.4, 2.3, 11];
    wall.fake = true;
    wall.interactable = false;
    wall.scale = [4000, 0.5, 4000];
    wall.animate.definieposition = [-2000, y, -2000, 0], [-2000, y, -2000, 1];
    wall.push();
}

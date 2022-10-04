import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param x
 * @param y
 * @param z
 * @param scalex
 * @param scaley
 * @param scalez
 * @param uses
 * @author splashcard__
 */

export function clouds(x: number, y: number, z: number, scalex: number, scaley: number, scalez: number) {
    const clouds = new remapper.Environment("HighCloudsGenerator$", "Regex")
    clouds.position = [x, y, z];
    clouds.scale = [scalex, scaley, scalez];
    clouds.duplicate = 1;
    clouds.push();
}

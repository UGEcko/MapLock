import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param x the position on the x axis of the clouds
 * @param y the position on the y axis of the clouds
 * @param z the position on the z axis of the clouds
 * @param scalex the scale on the x axis of the clouds
 * @param scaley scalex the scale on the y axis of the clouds
 * @param scalez scalex the scale on the z axis of the clouds
 * @author splashcard__ <-- no way!!
 */

export function clouds(x: number, y: number, z: number, scalex: number, scaley: number, scalez: number) {
    const clouds = new remapper.Environment("HighCloudsGenerator$", "Regex")
    clouds.position = [x, y, z];
    clouds.scale = [scalex, scaley, scalez];
    clouds.duplicate = 1;
    clouds.push();
}

import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param position the position to spawn the clouds at
 * @param rotation the rotation to spawn the clouds with
 * @param scale the scale to spwan the clouds with
 * @author splashcard__ <-- no way!! 
 */
// deno-lint-ignore-file no-explicit-any   
export function clouds(position: any, scale: any, rotation: any) {
    const clouds = new rm.Environment("HighCloudsGenerator$", "Regex")
    clouds.position = position;
    clouds.scale = scale;
    clouds.roatation = rotation;
    clouds.duplicate = 1;
    clouds.push();
}

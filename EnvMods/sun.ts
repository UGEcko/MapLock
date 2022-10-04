import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param posX the position of the sun on the x axis
 * @param posY the position of the sun on the y axis
 * @param posZ the position of the sun on the z axis
 * @param scale the scale of the sun
 * @param lightID the ID to light the sun
 * @author splashcard__ respect the grind
 */

export function sun(posX: number, posY: number, posZ: number, scale: number, lightID : number) {
    const sun = new remapper.Environment("GlowLineH$", "Regex")
    sun.position = [posX, posY, posZ];
    sun.scale = [scale, scale + 0.5, scale];
    sun.lightID = lightID;
    sun.duplicate = 1;
    sun.push();
}




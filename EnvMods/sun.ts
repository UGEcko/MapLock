import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param posX
 * @param posY
 * @param posZ
 * @param scale
 * @param lightID
 * @param uses
 * @author splashcard__
 */

export function sun(posX: number, posY: number, posZ: number, scale: number, lightID : number) {
    const sun = new remapper.Environment("GlowLineH$", "Regex")
    sun.position = [posX, posY, posZ];
    sun.scale = [scale, scale + 0.5, scale];
    sun.lightID = lightID;
    sun.duplicate = 1;
    sun.push();
}




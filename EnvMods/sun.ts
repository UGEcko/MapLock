import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param postion position to spawn the sun
 * @param scale the scale of the sun
 * @param lightID the ID to light the sun
 * @author splashcard__ respect the grind
 */

export function sun(position: any scale: number, lightID : number) {
    const sun = new remapper.Environment("GlowLineH$", "Regex")
    sun.position = position
    sun.scale = [scale, scale + 0.5, scale];
    sun.lightID = lightID;
    sun.duplicate = 1;
    sun.push();
}




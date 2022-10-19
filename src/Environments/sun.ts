import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param postion position to spawn the sun
 * @param scale the scale of the sun
 * @param lightID the ID to light the sun
 * @author splashcard__ respect the grind
 */

export function sun(position: array<number>, scale: number, lightID : number) {
    const sun = new rm.Geometry("Cylinder", {
        _shader: "OpaqueLight"
    })
    sun.position = position;
    sun.scale = [scale, scale, scale];
    sun.lightID = lightID;
    sun.rotation = [90, 0, 0]
    sun.push();
}




import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param postion position to spawn the sun
 * @param scale the scale of the sun
 * @param lightID the ID to light the sun
 * @author splashcard__ respect the grind
 */
// deno-lint-ignore no-explicit-any
export function sun(position: any, scale: number, lightID : number) {
    const sun = new rm.Geometry("Cylinder", {
        _shader: "OpaqueLight"
    })
    sun.position = position;
    sun.scale = [scale, scale, 0.3];
    sun.lightID = lightID;
    sun.rotation = [90, 0, 0]
    sun.push();
}




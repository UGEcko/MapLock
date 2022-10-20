import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param height the height to spawn the lasers at
 * @param IDmin the minimum lightID for the first laser
 * @param ammount the ammount of lasers to be spawned
 * @param allowRotation allows rotation of the lasers on the x and z axis
 * @author splashcard__ this one is pretty cool
*/

export function laserfeild(height: number, IDmin: number, ammount:number, allowRotation: boolean) {
  for(let i = 1; i < ammount; i++) {
    const x = (Math.random() * (60)) - 30
    const z = (Math.random() * (60)) - 30
    const rot = (Math.random() * (40)) - 20
    const rot2 = (Math.random() * (40)) - 20
    const geo = new remapper.Geometry("Cube", {
      _shader: "OpaqueLight"
    })
    geo.position = [x, height, z];
    geo.lightID = IDmin;
    geo.scale = [0.05, 100, 0.05]
    if (allowRotation === true) {
      geo.rotation = [rot, 0, rot2];
    }
    else {
      geo.rotation = [0, 0, 0];
    }
    geo.push();
  }
}

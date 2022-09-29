/**
 * @param y
*/

import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"
export function laserfeild (y) {
  const geo = new remapper.Geometry("Cube", {
    _shader: "Opaque_Light"
  }
  geo.duplicate = 20;
  geo.position = [(math.random() * (40)) - 20, y, (Math.random() * (40))  - 20];
  geo.push();
}

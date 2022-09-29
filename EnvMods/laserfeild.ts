import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param y
 * @param IDmin
 * @param ammount
*/

export function laserfeild (y: number, IDmin: number, ammount:number) {
  const geo = new remapper.Geometry("Cube", {
    _shader: "Opaque_Light"
  }
  geo.duplicate = ammount;
  geo.position = [(math.random() * (40)) - 20, y, (Math.random() * (40))  - 20];
  geo.lightID = IDmin;
  geo.push();
}

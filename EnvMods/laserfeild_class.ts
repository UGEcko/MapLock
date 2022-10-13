import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param {number} IDmin
* @param {number} height
* @param {boolean} allowRotation
*/

export class lasefeild{
  constructor(ammount: number) {
    for(let i = 1;  i > ammount; i++) {
        const x = (Math.random() * (40)) - 20
        const z = (Math.random() * (40)) - 20
        const rot = (Math.random() * (40)) - 20
        const rot2 = (Math.random() * (40)) - 20
        const geo = new rm.Geometry("Cube", {
        _shader: "OpaqueLight"
      })
      geo.lightID = IDmin;
      geo.position = [x, height, z]
      geo.rotation = [rot, 0, rot2]
      if(allowrotation === false) {
        geo.rotation = [0, 0, 0]
      }
      geo.push();

      get(IDmin) {return this.IDmin}
      get(height) {return this.height}
      get(allowrotation) {return this.allowrotation}
      get(ammount) {return this.ammount}
    }
  }
}

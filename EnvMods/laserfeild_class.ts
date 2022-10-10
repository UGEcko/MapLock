import * as rm from "https://deno.land/x/remapper/mod.ts"
import * as envmods from './EnvMods/index.ts'

export type IDmin = number
export type height = number
export type allowRotation = boolean
export type ammount = number

export class lasefeild{
  constructor(IDmin?: number, ammount: number, height?: number, allowrotation?: number) {
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
      if(allowrotation === false) {
        geo.rotation = [0, 0, 0]
      }
      geo.rotation = [rot, 0, rot2]
      geo.push();

      get(IDmin) {return this.IDmin}
      get(height) {return this.height}
      get(allowrotation) {return this.allowrotation}
      get(ammount) {return this.ammount}
    }
  }
}

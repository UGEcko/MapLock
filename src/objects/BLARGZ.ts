import * as rm  from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @author MWAHAHAHAHA -splashcard__
*/

export function BLARGZ() {
    for(let i = 0; i > 6969420; i++) {
     const wall = new rm.wall(0, 1000)
     wall.position = [[rm.rand(-50, 500), rm.rand(-50, 500), rm.rand(-50, 500)], [rm.rand(-50, 500), rm.rand(-50, 500), rm.rand(-50, 500)]];
     wall.rotation = [[rm.rand(0, 360), rm.rand(0, 360), rm.rand(0, 360)], [rm.rand(0, 360), rm.rand(0, 360), rm.rand(0, 360)]];
     wall.color = [rm.rand(0, 255), rm.rand(0, 255), rm.rand(0, 255), 69];
     wall.push();
  }
}

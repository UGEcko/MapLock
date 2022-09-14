//never call this
import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"
/**
* @author splashcad__
*/

export function crash() {
  const crash = new remapper.wall(0, 1) 
  crash.duplicate = 99999999;
  crash.push();
}

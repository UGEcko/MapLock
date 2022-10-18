import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param id the ID(S) to despawn
* @param lookupMethod the method to look up the object (contains, regex, exact, startswith, or endswith)
* @author splashcard__ im literally doing this in the middle of english class :)
*/

export function(id: Array<string>, lookupMethod: any) {
    id.forEach((object) => {
    const despawn = new rm.Environment(`${object}`, `${lookupMethod}`)
    despawn.position = [0, -9999, 0];
    despawn.push();
  }
}

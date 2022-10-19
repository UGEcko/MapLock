// deno-lint-ignore-file adjacent-overload-signatures no-explicit-any
import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param id the ID(S) to despawn
* @param lookupMethod the method to look up the object (contains, regex, exact, startswith, or endswith)
* @author splashcard__ im literally doing this in the middle of english class :)
*/

export function(lookupMethod: any, ID: Array<string>) {
    switch(ID) {
        case "bts":
            ID = "BTSEnvironment.[0]Environment"
            break
        case "billie":
            ID = "BillieEnvironment.[0]Environment"
        case "all":
            ID = "Environment"
    }
    ID.forEach((object) => {
    const despawn = new rm.Environment(`${object}`, `${lookupMethod}`)
    despawn.position = [-69420, -69420, -69420];
    despawn.push();
  }
}

import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

// Swifter made this hard to work with D:
/**
 * @param ID the environment ID to despawn
 * @param lookupmethod the method to find the Environment peice to despawn
 * @author splashcard__ Hi there 
 */

// deno-lint-ignore no-explicit-any
export function despawn(ID: string, lookupmethod: any) { 
    

    const env = new rm.Environment(`${ID}`, lookupmethod);
    env.position = [0, -9999, 0];
    env.push();
}

export function despawn(lookupmethod: any, id: Array<string>,){
    switch(id) {
        case "bts":
            id = "BTSEnvironment.[0]Environment"
        // deno-lint-ignore no-fallthrough
        case "billie":
            id "BillieEnvironment.[0]Environment"
        case "all":
            id = "Environment"
    }
    
  id.forEach((object) =>{
        const remove = new rm.Environment(object, lookupmethod);
        remove.position = [-69420,-69420,-69420];
        remove.push();
    });
}

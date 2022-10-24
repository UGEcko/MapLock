import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

// Swifter made this hard to work with D:
/**
 * @param ID the environment ID to despawn
 * @param lookupmethod the method to find the Environment peice to despawn
 * @author splashcard__  
 */


export function despawn(lookupmethod: rm.LOOKUP, ID: Array<string>){
    ID.forEach((object) =>{
        const remove = new rm.Environment(object, lookupmethod);
        remove.position = [-69420,-69420,-69420];
        remove.push();
    })
}

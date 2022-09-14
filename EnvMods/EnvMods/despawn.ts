import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"
/**
 * @param ID
 * @param lookupmethod
 * @author splashcard__
 */

export function despawn(ID: string, lookupmethod: string) { 
    switch(ID) {
        case "bts":
            ID = "BTSEnvironment.[0]Environment"
            break
        case "billie":
            ID = "BillieEnvironment.[0]Environment"
    }
 

    const env = new remapper.Environment(`${ID}`, `${lookupmethod}`)
    env.position = [-69420, -69420, -69420];
    env.push();
}


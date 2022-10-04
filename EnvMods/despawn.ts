import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"
/**
 * @param ID the environment ID of the object to despawn
 * @param lookupmethod the method of finding the object to despawn (Contains, Regex, Exact, StartsWith, EndsWith)
 * @author splashcard__ <-- go play my maps or smthn
 */

export function despawn(ID: string, lookupmethod: string) { 
    switch(ID) {
        case "bts":
            ID = "BTSEnvironment.[0]Environment",
        case "billie":
            ID = "BillieEnvironment.[0]Environment",
        case "spooky":
            ID = "HalloweenEnvironment.[0]Environment",
    }

    const env = new remapper.Environment(`${ID}`, `${lookupmethod}`)
    env.position = [0, -69420, 0];
    env.push();
}


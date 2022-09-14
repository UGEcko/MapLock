import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

// i forgor how to use cases so you get this inneficient thing now
/**
 * @param ID
 * @author splashcard__
 */

export function despawn(ID: string) { 
    switch(ID) {
        case "bts":
            ID = "BTSEnvironment.[0]Environment"
            break
        case "billie":
            ID = "BillieEnvironment.[0]Environment"
    }

    const env = new remapper.Environment(`${ID}`, "Contains");
    env.position = [-69420, -69420, -69420];
    env.push();
}


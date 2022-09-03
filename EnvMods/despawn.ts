
import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"
//really dumb way of making bts environment despawn
/**
 * @param environment
 * @author splashcard__
 */

export function despawn(enviro: string) {

    enviro = "bts"
    switch(enviro) {
        case "bts":
            enviro = "BTSEnvironment.[0]Environment"
        case "bigMirror":
            enviro = "BigMirrorEnvironment.[0]Environment"
        case "billie":
            enviro = "BillieEnvironment.[0]Environment"
        case "crabRave":
            enviro = "CrabRaveEnvironment.[0]Environment"
        case "default":
            enviro = "DefaultEnvironment.[0]Environment"
        case "dragons":
            enviro = "DragonsEnvironment.[0]Environment"
        case "fallOutBoy":
            enviro = "PyroEnvironment.[0]Environment"
        case "gaga":
            enviro = "GagaEnvironment.[0]Environment"
        case "spooky":
            enviro = "HalloweenEnvironment.[0]Environment"
    }

    const env = new remapper.Environment(enviro, "Contains")
    env.position = [-69420, -69420, -69420];
    env.push();
}

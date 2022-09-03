
import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"
//I forgor how to make cases work so we have this inneficeint idiot DONT BLAME ME I TRIED MY BEST OK

/**
 * @param environment
 * @author splashcard__
 */

export function despawn(environment: string) {
    
    if(environment === "bts"){
        const env = new remapper.Environment("BTSEnvironment.[0]Environment", "Contains")
        env.position = [-69420, -69420, -69420];
        env.push();
    }

    if (environment === "billie"){
            const env = new remapper.Environment("BillieEnvironment.[0]Environment", "Contains")
            env.position = [-69420, -69420, -69420];
            env.push();
        }

    
    if (environment === "spooky"){
        const env = new remapper.Environment("BillieEnvironment.[0]Environment", "Contains")
        env.position = [-69420, -69420, -69420];
        env.push();
    }
}


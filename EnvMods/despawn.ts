import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

// i forgor how to use cases so you get this inneficient thing now
/**
 * @author splashcard__
 */

export function despawn() { 
    const env = new remapper.Environment("BTSEnvironment.[0]Environment", "Contains");
    env.position = [-69420, -69420, -69420];
    env.push();
}


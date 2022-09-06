import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"
//really dumb way of making bts environment despawn
/**
 * @author splashcard__
 */

export function despawn() {
    const env = new remapper.Environment("BTSEnvironment.[0]Environment", "Contains")
    env.position = [-69420, -69420, -69420];
    env.push();
}

remapper.scene.animate([
    ["template", 0, 100]
])
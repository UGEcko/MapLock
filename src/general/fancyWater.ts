// deno-lint-ignore-file no-explicit-any
import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 *@param height the heght at which to spawn the water
 *@author splashcard__ i should be studying right now
*/

export function fancyWater(posY: number) {
    const env = new remapper.Environment("", "Regex")
    env.id = new remapper.Regex("PlayersPlace").separate().add("Mirror").end(),
    env.scale = [3000, 0.1, 3000];
    env.position = [-1000, posY, -1000];
    env.duplicate = 1;
    env.push();
}

import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

export function fancyWater(posY: number) {
    const env = new remapper.Environment(ENV.UNIVERSALL.MIRROR, "Regex")
    env.scale = [3000, 0.1, 3000];
    env.position = [-1000, y, -1000];
    env.duplicate = 1;
    env.push();
}

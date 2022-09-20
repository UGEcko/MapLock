import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

export function fancyWater(y: number, uses: number) {
    const env = new remapper.Environment("Regex")
    env.id = new remapper.Regex("PlayersPlace").separate().add("Mirror").end(),
    env.scale = [3000, 0.1, 3000];
    env.position = [-1000, y, -1000];
    env.duplicate = uses;
    env.push();
}
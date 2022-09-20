import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

export function lightPillar(x: number, y: number, z: number, id: number, uses: number) {
    const env = new remapper.Environment("MagicDoorSprite", "EndsWith");
    env.position = [x, y, z];
    env.scale = [0, 100, 0];
    env.lightID = id;
    env.duplicate = uses;
    env.push();
}
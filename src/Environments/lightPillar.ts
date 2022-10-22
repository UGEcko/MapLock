import { Vec3, Environment } from "https://deno.land/x/remapper@2.1.0/src/mod.ts";

/**
* environment specific to bts :(
* @param position
* @param lightID
* @author splashcard__
*/

export function lightPillar(position: Vec3, Zrotation: number, lightID: number){
  const pillar = new Environment("MagicDoorSprite", "EndsWith")
  pillar.scale = [0, 100, 0];
  pillar.position = position;
  pillar.rotation = [0, 0, Zrotation];
  pillar.lightID = lightID;
  pillar.push();
}


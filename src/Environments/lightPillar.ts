import * as rm from "https://deno.land/x/remapper@2.0.0/src/mod.ts"

/**
* environment specific to bts :(
* @param position
* @param lightID
* @author splashcard__
*/

export function lightPillar(position: rm.KeyframesAny, lightID: number){
  const pillar = new rm.Environment("MagicDoorSprite", "EndsWith")
  pillar.scale = [0, 100, 0];
  pillar.push();
}

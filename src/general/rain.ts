import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* unfortunaltely specific to billie environment D:
* @param lightID the id so you can light up the rain, why does this work? idk
* @author splashcard__
*/

export function rain(lightID: number) {
    const rain = new rm.Environment("Rain", "EndsWith")
    rain.lightID = lightID;
    rain.push();
}

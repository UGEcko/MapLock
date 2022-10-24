import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

export function customLight(time: number, lightID: number:[], duration?: number) {
    new Event(time).backLasers().fade(true).push(); //this isnt going to work for anything right now btw, just a placeholder
}

import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param timeStart the time your track will start
* @param Duration the duration of your track
* @param position the position to select
* @param customData just format this like you would normal noodle scripting
* @author splashcard__ <-- bro that guy is like famous
*/

// deno-lint-ignore no-explicit-any
export function noteFilter(timeStart: number, duration: number, customData: any, positions: any) {
    rm.notesBetween(timeStart, duration, (note) => {
        positions.forEach((position: [number,number, (boolean|undefined)?]) => {
            if(note.position === position) {
                note.customData = customData
            }
        })
    })
}

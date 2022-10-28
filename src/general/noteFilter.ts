import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param timeStart the start of the time frame you to filter out
* @param timeEnd the end of the time frame you filter out
* @param lineIL [lineIndex, lineLayer] format in an array
* @param customData just format this like you would normal noodle scripting
* @author splashcard__ <-- bro that guy is like famous
*/

// deno-lint-ignore no-explicit-any
export function noteFilter(timeStart: number, timeEnd: number, customData: any, lineIL: number[]) {
    rm.notesBetween(timeStart, timeEnd, (note) => {
            if(note.position[0] === lineIL[0] && note.position[1] === lineIL[1]) {
                note.customData = customData
                note.push();
            }
    })
}

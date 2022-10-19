// deno-lint-ignore-file no-explicit-any
import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param timeStart the time your track will start
* @param Duration the duration of your track
* @param position the position to select
* @param custom data just format this like you would normal noolde scripting
*/

export function noteFilter(timeStart: number, Duration: number, position: array<number>,  customData: any) {
    rm.notesBetween(timeStart, Duration, (note) => {
        if(note.position === position) {
            note.customData = customData;
        }
    })
}

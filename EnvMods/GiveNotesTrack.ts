import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param time
* @param dur
* @param track
* @author splashcard__
*/

export function giveNotesTrack(time: number, dur: number, track: string) {
     remapper.notesBetween(time, dur, (note) => {
        note.track = track
     });
}

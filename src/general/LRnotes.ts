import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param time the time to start the sreen shake
* @param duration the duration of the screen shake
* @author splashcard__ || im still doing this by myself D:
*/

// deno-lint-ignore no-explicit-any
export function LRnotes(time: number, duration: number, leftNoteData: any, rightNoteData: any) {
  rm.notesBetween(time, duration, (note) => {
    if(note.position === [0, 0] || [0, 1] || [0, 2] || [1, 0] || [1, 1] || [1, 2]) {
      note.customData = leftNoteData;
    }
    if((note.position === [2, 0] || [2, 1] || [2, 2] || [3, 0] || [3, 1] || [3, 2])) {
      note.customData = rightNoteData;
    }
  })
}

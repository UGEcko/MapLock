import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param time the time to start the sreen shake
* @param duration the duration of the screen shake
* @author splashcard__ || im still doing this by myself D:
*/

// deno-lint-ignore no-explicit-any
export function LRnotes(time: number, duration: number, leftNoteData: any, rightNoteData: any) {
  rm.notesBetween(time, duration, (note) => {
    if(note.type === 0) {
      note.customData = leftNoteData;
      note.push();
    }
    if(note.type === 1) {
      note.customData = rightNoteData;
      note.push();
    }
  })
}

// deno-lint-ignore-file no-explicit-any
import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"
//yes I know this is extremely inneficceint but cut me some slack im really tired


/**
* @param time the time for the animation
* @param duration the duration for the animation
* @param leftNoteData the custom data for the left notes
* @param rightNoteData the custom data for the right notes
* @author splashcard__
*/
/*
export function LRnotes(time: number, duration: number, leftNoteData: any, rightNoteData: any) {
    rm.notesBetween(time, duration, (note) => {
      if(note.position === [0, 0] || [0, 1] || [0, 2] || [1, 0] || [1, 1] || [1, 2]) {
        note.customData = leftNoteData;
      }
      if(note.position === [2, 0] || [2, 1] || [2, 2] || [3, 0] || [3, 1] || [3, 2]) {
        note.customData = rightNoteData;
      }
}*/

                    
export function LRnotes(time: number, duration: number, leftNoteData: any, rightNoteData: any) {
    rm.notesBetween(time, duration, (note) => {
        if(note.position === [0,0]) {
            note.customData= leftNoteData;
        }
        if(note.position === [0,1]) {
            note.customData= leftNoteData;
        }
        if(note.position === [0,2]) {
            note.customData= leftNoteData;
        }
           if(note.position === [1,0]) {
            note.customData= leftNoteData;
        }
        if(note.position === [1,1]) {
            note.customData= leftNoteData;
        }
        if(note.position === [1,2]) {
            note.customData= leftNoteData;
        }
         if(note.position === [2,0]) {
            note.customData= rightNoteData;
        }
        if(note.position === [2,1]) {
            note.customData= rightNoteData;
        }
        if(note.position === [2,2]) {
            note.customData= rightNoteData;
        }
           if(note.position === [3,0]) {
            note.customData= rightNoteData;
        }
        if(note.position === [3,1]) {
            note.customData= rightNoteData;
        }
        if(note.position === [3,2]) {
            note.customData= rightNoteData;
        }
    },               
}

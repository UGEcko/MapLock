import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param time
* @param dur
* @param track
* @author splashcard__
*/

export function filterNotesTrack(lineLayer: number, lineIndex: number, time: number, duration: number, position: any, rotation: any, dissolve: any) {
     const event = new CustomEvent(time).animateTrack("track", dur);
     event.customdata = {
          _position = position
          _rotation = rotation
          _dissolve = dissolve
     }
     event.push();
     remapper.notesBetween(time, duration, (note) => {
         if(note.position = [lineIndex, lineLayer] {
                    note.track = `${track}`
               }
        }
   });
}

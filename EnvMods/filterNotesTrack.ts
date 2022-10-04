import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param time time the track for the filtered notes will start
* @param dur duration of the track for the filtered notes
* @param track the name of the track for the filtered notes
* @author splashcard__  its literally 2 in the morning :D
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

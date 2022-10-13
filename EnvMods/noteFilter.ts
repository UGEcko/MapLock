import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

export function noteFilter(timeStart: number, Duration: number, position: any,  customData: any) {
    remapper.notesBetween(timeStart, Duration, (note) => {
        if(note.position = position) {
            note.customData = {
                customData
            }
        }
    })
}

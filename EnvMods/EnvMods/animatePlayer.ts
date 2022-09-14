import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param startx
 * @param starty
 * @param startz
 * @param time
 * @param endx
 * @param endy
 * @param endz
 * @param dur
 * @author splashcard__
*/

export function playerMove(time: number, dur: number, startX: number, endX: number, startY: number, endY: number, startZ: number, endZ: number) {
    const event = new remapper.CustomEvent(time).animateTrack("track", dur);
    event.animate.position = [[startX, startY, startZ, 0], [endX, endY, endZ, 1]];
    event.push();
    new remapper.CustomEvent(time).assignTrackParent(["notes", "player"], "track")
    new remapper.CustomEvent(time).assignPlayerToTrack("player").push();
    remapper.notesBetween(time, dur, (note) => {
        note.customData = {
            _track: "notes"
        }
    })
}
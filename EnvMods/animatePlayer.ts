import * as remapper from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param startx starting position of the track on the x axis
 * @param starty starting position of the track on the y axis
 * @param startz starting position of the track on the z axis
 * @param endx the ending position of the track on the x axis
 * @param endy the ending position of the track on the y axis
 * @param endz the ending position of the track on the z axis
 * @param time the time at which the track will start
 * @param dur the duration of the track
 * @author splashcard__ thats me :pog:
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

import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param position the position of the animate Track CAN USE MULTIPLE POINTS
 * @param time the time at which the track will start
 * @param dur the duration of the track
 * @author splashcard__ thats me :pog:
*/

export function playerMove(time: number, dur: number, position: array<number>) {
    const event = new rm.CustomEvent(time).animateTrack("track", dur);
    event.animate.position = position;
    event.push();
    new rm.CustomEvent(time).assignTrackParent(["notes", "player"], "track")
    new rm.CustomEvent(time).assignPlayerToTrack("player").push();
    rm.notesBetween(time, dur, (note) => {
        note.customData = {
            _track: "notes"
        }
    })
}

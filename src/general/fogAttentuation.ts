import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* massively stupid way to animate attentuation of fog lol
* @param time the time to start the fog animation
* @param duration the duration of the fog animtion
* @param animateAttentuation the attentuation animataion of the fog
* @author splashcard__ < morinin
*/

export function fogAttentuation(time: number, duration: number, animateAttentuation: KeyframesLinear) {
    const fog = new rm.CustomEvent(time).animateTrack("fog");
    fog.animate.attenuation = animateAttentuation;
    fog.duration = duration;
    fog.push();
}

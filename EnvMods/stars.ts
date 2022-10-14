import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param ammount the ammount of stars to spawn
* @param individualSize the size of each star
* @param Distance the distance between each star
* @param Time the time to spawn the stars
* @param duration how long the stars last
* @author splashcard__
*/

export function starGenerator(amount: number, individualSize: number, Distance: number, Time: number, duration: number) {
  for (let i = 0; i <= amount; i++) {
    const star = new rm.Wall(Time, duration);
    const rotation: Vec3 = [rand(10, 360),rand(10, 360), 0];
  
    star.animate.definitePosition = arrAdd(rm.rotatePoint(rotation, [0, Distance, -individualSize / 2]), 0) as Vec3;
    star.animate.scale = [individualSize, individualSize, individualSizee];
    star.animate.color = [1,1,1,2];
    star.push();
  }
}

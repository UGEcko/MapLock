import * as rm  from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param ammount the ammount of stars to spawn
* @param individualSize the size of each star
* @param Distance the distance between each star
* @param Time the time to spawn the stars
* @param duration how long the stars last
* @author splashcard__
*/

export function stars(amount: number, individualSize: number, Distance: number, Time: number, duration: number) {
    for (let i = 0; i <= amount; i++) {
      const stars = new rm.Wall(Time, duration);
      const starRotation: rm.Vec3 = [rm.rand(10, 360), rm.rand(10, 360), 0];
    
      stars.animate.definitePosition = rm.arrAdd(rm.rotatePoint(starRotation, [0, Distance, -individualSize / 2]), 0) as rm.Vec3;
      stars.animate.color = [1,1,1,1];
      stars.scale = [individualSize, individualSize, individualSize];
      stars.push();
    }
  }


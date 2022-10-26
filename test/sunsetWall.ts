import { Wall, Vec3 } from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
*

//creates a sunset of any color in fron of the player
export function sunset(time: number, duration: number, color: Vec3) {
  const wall = new Wall(time, duration)
  wall.scale = [2000, 2000, 0.5];
  wall.position = [-1000, -1000, 100];
  wall.color = color;
  wall.push();
}

import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
* @param height the heght to spawn the mountains at
* @param rotation the y axis rotation of the mountains
* @author splashcard__ || these are just getting less and less original
*/

export function mountains(height: number, rotation: number) {
    const mtn = new rm.Environment("BillieEnvironment.[0]Environment.[12]Mountains", "Exact");
    mtn.position = [0, height, 0];
    mtn.rotation = [0, rotation, 0];
    mtn.push();
}

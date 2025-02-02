import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * @param postion position to spawn the sun
 * @param scale the scale of the sun
 * @param lightID the ID to light the sun
 * @author splashcard__ 
 */

export function sun(position: rm.Vec3, scale: number, lightID : number, environment: string) {
    switch(environment){
        case "billie": {
            const sun = new rm.Environment("Sun", "EndsWith")
            sun.position = position; 
            sun.scale = [scale, scale, scale];
            sun.push();
            break;
        }
        case "universal": {
                const sun = new rm.Geometry("Cylinder", {
                _shader: "OpaqueLight"
                })
                sun.position = position;
                sun.scale = [scale, scale, 0.3];
                sun.lightID = lightID;
                sun.rotation = [90, 0, 0];
                sun.push();
                break;
             }
        }
    
 
}



# MapLock
Welcome to MapLock, a package (in beta) designed to make ReMapper environment statements and others more friendly, while also giving some helpful effects such as `despawn()` which will despawn any environment peice (of your choice) to make room for yours!  Tutorials/explanations for each function can be found in the [examples](https://github.com/Splashcard04/MapLock/wiki/Examples) for this repo!  If you have any questions or would like to add to this repo dm me on discord @splashcard__#2121.  Feel free as well to pr your own functions classes, ect. (make sure they are in the src folder and formatted as mine are)

Example functions:

```ts
import * as ml from './src/index.ts'

//moves the entire environment to -9999 on th y axis evectively despawning it
ml.despawn("Environment", "Contains")
```
or 

```ts
import * as ml from './src/index.ts''

//generates a feild of lasers with a given height and ammount
ml.laserfeild(
  0, //height
  21, //Minimum Light ID see examples for more details
  21, //ammount 
  true //allows Rotation? see examples for more details
 )

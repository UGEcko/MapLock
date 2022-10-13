![image](https://user-images.githubusercontent.com/111317032/188249329-d8ed6957-e1d4-42da-a3a1-2292fb77e465.png)

# EnvMods
Welcome to EnvMods, a package (in beta) designed to make ReMapper environment statements and others more friendly, while also giving some helpful effects such as `despawn()` which will despawn the bts environment to make room for yours!  Tutorials/explanations for each function can be found in the [examples](https://github.com/Splashcard04/EnvMods/wiki/Examples) for this repo!  If you have any questions or would like to add to this repo dm me on discord @splashcard__#2121

Example functions:

```ts
import * as envmods from './EnvMods/index.ts'

//moves the entire environment to -9999 on th y axis evectively despawning it
envmods.despawn("Environment", "Contains")
```
or 

```ts
import * as envmods from './EnvMods/index.ts''

//generates a feild of lasers with a given height and ammount
envmods.laserfeild(
  0, //height
  21, //Minimum Light ID see examples for more details
  21, //ammount 
  true //allows Rotation? see examples for more details
 )

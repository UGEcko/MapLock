![Capturess](https://user-images.githubusercontent.com/111317032/188249287-a204e2f3-e3e6-414c-99dd-4445934e7112.PNG)
# Welcome
Welcome to EnvMods!  This is an awesome package for (mostly) environment ReMapper Statments, this also has other functions like animate tracks and other things made easier!  

This package is meant to be used with [ReMapper](https://github.com/Swifter1243/ReMapper)

# installing
 in order to install run this in your map directory terminal:
```powershell
deno install --allow-all -f --reload https://raw.githubusercontent.com/Splashcard04/EnvMods/main/setup/EnvMods_setup.ts
```
then just run 
```powershell
EnvMods_setup
```
that should download the files for you, now to import add this to your imports list
```ts
import * as EnvModder from './EnvMods/index.ts'
```
and that should do it for install, up next are the functions

# Environment functions
### despawn
```ts
import * as EnvModder from './EnvMods/index.ts'

//despawns the whole BTS environment
EnvMods.despawn("bts", "Contains")
```
Despwan is extremely simple, it just takes the entirety of the bts environment and moves it way out of the player's sight, essentially despawning the environment
despwan() has two constants for environments `"bts"` or `"billie"` removing the entirety of their respective environments, you can also use your own custom ids and different lookup methods if you so desire, `"bts"` and `"billie"` will only work with contains.

### sun

```ts
import * as EnvModder from './EnvMods/index.ts'

EnvMods.sun(
 /*position*/ [0, 10, 30],
 /*scale*/ [1, 1.5, 1],
 /*lightID*/ 21
)
```
`sun()` will unfortunately only work in BTS environment :(... Anyways this will use `GlowLineH$` to make a sun effect with customizable scale and position
* position = array
* scale = array
* lightID = integer

### clouds
```ts
import * as EnvModder from './EnvMods/index.ts'

EnvMods.clouds(
 /*position*/ [0, 0, 0],
 /*scale*/ [1, 1, 1],
 /*rotation*/ [0, 90, 90]
)
```
`clouds()` is really just a dumb way to make clouds tbh but it does make it easier and shorter ig
* position = array
* rotation = array
* scale = array

### laserfeild
```ts
import * as envmods from './EnvMods/index.ts'

envmods.laserfeild(
 /*height*/ 0,
 /*IDmin*/ 21,
 /*ammount*/ 21,
 /*allowRotation*/ false
)
```

__NOTE__ IDmin will be the first light ID a laser is registered to, meaning that if IDmin was 21 and my ammount was 7 my light IDs would be 21, 22, 23, 24, 25, 26, 27, 28.
allowRotation allows rotation of -20 - 20 on the x and z axis, IF you want the lasers to be straight up and down, just leave this to false.

* height = number
* IDmin = integer
* ammount = integer
* allowRotation = boolean

# object statments
### water
```ts
import * as EnvModder from './EnvMods/index.ts'

EnvModder.water(
/*time*/ 69
/*duration*/ 420
/*height*/ -1.5
)
```

This is pretty self explanitory, it makes a massive lake/ocean ~~so you can be like every other basic noodle mapper who uses copies swifter instead of making your own legitemate thing :)~~
time = number
duration = number
y level = number

### player movment
```ts
import * as EnvModder from './EnvMods/index.ts'

EnvModder.animatePlayer(
   /*time*/ 0,
   /*duration*/ 100,
   /*position*/ [[0, 0, 0, 0], [0, 100, 0, 1, "easeStep"]]
)
```
This will move the player, but the exiting part is - no extra parent track needed - this will move the player and the notes together!
* time = number
* duration = number
* position = array

### NoteFilter
```ts
import * as EnvModder from './EnvMods/index.ts'

noteFilter(
    21, //Time Start
    21, //Duration
    [0, 0], // Position to Select
    { //Custom Data
        _position: [3, 3, 3]
        _dissolve = [[1, 0], [0, 1]]
    }
)
```

* time Start = number
* Duration = number
* position  = array
* CustomData = basically just like noodle scripting in js idk

# classes

I am currently working on converting some of these functions to classes for ease of use.

for example:
```ts
import * as envmods from './EnvMods/index.ts'

envmods.laserfeild(
 /*height*/ 0,
 /*IDmin*/ 21,
 /*ammount*/ 21,
 /*allowRotation*/ false
)
```
VS.
```ts
import * as envmods from './EnvMods/index.ts'

const feild = new envmods.laserfeild()
feild.height = 0;
feild.IDmin = 21;
feild.ammount = 21;
feild.allowRotation = false;
feild.push();
 

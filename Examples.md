![Capturess](https://user-images.githubusercontent.com/111317032/188249287-a204e2f3-e3e6-414c-99dd-4445934e7112.PNG)
# Welcome
Welcome to EnvMods!  This is an awesome package for (mostly) environment ReMapper Statments, this also has other functions like animate tracks and other things made easier!  

This package is meant to be used with [ReMapper](https://github.com/Swifter1243/ReMapper)

# installing
 in order to install run this in your map directory terminal:
```ts
deno install --allow-all -f --reload https://raw.githubusercontent.com/Splashcard04/EnvMods/main/setup/EnvMods_setup.ts
```
then just run 
```ts
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

EnvMods.despawn("bts", "Contains")
```
Despwan is extremely simple, it just takes the entirety of the bts environment and moves it way out of the player's sight, essentially despawning the environment
despwan() has two constants for environments `"bts"` or `"billie"` removing the entirety of their respective environments, you can also use your own custom ids and different lookup methods if you so desire, `"bts"` and `"billie"` will only work with contains.

### sun

```ts
import * as EnvModder from './EnvMods/index.ts'

EnvMods.sun(positionX, positionY, positionZ, scale, lightID, uses)
```

`sun()` will unfortunately only work in BTS environment :(... Anyways this will use `GlowLineH$` to make a sun effect with customizable scale and position, the uses category will allow this to be duped multiple times, __*NEVER make this 0*__
* positionX = number
* positionY = number
* positionZ = number
* scale = number
* lightID = integer
* uses = integer

### clouds
```ts
import * as EnvModder from './EnvMods/index.ts'

EnvMods.clouds(positionX, positionY, positionZ, scaleX, scaleY, scaleZ, uses)
```
`clouds()` is really just a dumb way to make clouds tbh but it does make it easier and shorter ig (if you're wondering why there's no rotation its because cloud rotation just gets really buggy and stuff)  Uses is the ammount of times you used this __*never make this 0*__
* positionX = number
* positionY = number
* positionZ = number
* scaleX = number
* scaleY = number
* scaleZ = number
* uses = integer

# object statments
### water
```ts
import * as EnvModder from './EnvMods/index.ts'

EnvModder.water(time, duration, y level)
```
or
```ts
const water = new EnvModder.water()
water.time = 69;
water.duration = 420;
water.y = -1.5
water.push();
```
This is pretty self explanitory, it makes a massive lake/ocean so you can be like every other basic noodle mapper who uses copies swifter instead of making your own legitemate thing :)
time = number
duration = number
y level = number

### give notes track
```ts
import * as EnvModder from './EnvMods/index.ts'

EnvModder.giveNotesTrack(startTime, duration, track)
```
This is also pretty self explanatory, gives the notes between the selected times a track already animated,
startTime = number
duration = number
track = string
### player movment
```ts
import * as EnvModder from './EnvMods/index.ts'

EnvModder.playerMove(StartBeat, duration, startX, endX, startY, endY, startZ, endZ)
```
This will move the player, but the exiting part is - no extra parent track needed - this will move the player and the notes together!
* StartBeat = number
* duration = number
* startX = number
* endX = number
* startY = number
* endY = number
* startZ = number
* endZ = number
### giveNotesTrack
```ts
import * as EnvModder from './Envmods/index.ts'

EnvModder.giveNotesTrack(startbeat, duration, "track name")
```
`giveNotesTrack` will give a selection of notes (from start beat to end beat) a track of your choosing
* start beat: number
* duration: number
* track name: string

### laserfeild
laserfeild is not currently in the package because it is still in testing



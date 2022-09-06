![Capturess](https://user-images.githubusercontent.com/111317032/188249287-a204e2f3-e3e6-414c-99dd-4445934e7112.PNG)
# Welcome
Welcome to EnvMods!  This is an awesome package for (mostly) environment ReMapper Statments, this also has other functions like animate tracks and other things made easier!  

This package is meant to be used with [ReMapper](https://github.com/Swifter1243/ReMapper)

# installing
so im too stupid to make a deno moduel so.. npm!... ... ... anyways in order to install run this in your map directory terminal:
```ts
$ npm install envmodder
```
that should download the files for you, now to import add this to your imports list
```ts
import * as EnvModder from './node_modules/envmods/index.ts'
```
and that should do it for install, up next are the functions

# Environment functions
### despawn
```ts
import * as EnvModder from './node_modules/envmods/index.ts'

EnvMods.despawn()
```
Despwan is extremely simple, it just takes the entirety of the bts environment and moves it way out of the player's sight, essentially despawning the environment
(currently only works for BTS environment BUT an update is planned allowing for selection of environments)

### sun

```ts
import * as EnvModder from './node_modules/envmods/index.ts'

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
import * as EnvModder from './node_modules/envmods/index.ts'

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
import * as EnvModder from './node_modules/envmods/index.ts'

EnvModder.water(time, duration, y level)
```
This is pretty self explanitory, it makes a massive lake/ocean so you can be like every other basic noodle mapper who uses copies swifter instead of making your own legitemate thing :)
time = number
duration = number
y level = number

### give notes track
```ts
import * as EnvModder from './node_moduels/envmods/index.ts'

EnvModder.giveNotesTrack(startTime, duration, track)
```
This is also pretty self explanatory, gives the notes between the selected times a track already animated,
startTime = number
duration = number
track = string
### player movment
```ts
import * as EnvModder from './node_moduels/envmods/index.ts'

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

## More updates soon :)



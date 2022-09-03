![Capturess](https://user-images.githubusercontent.com/111317032/188249287-a204e2f3-e3e6-414c-99dd-4445934e7112.PNG)
# Welcome
Welcome to EnvMods!  This is an awesome package for (mostly) environment ReMapper Statments, this also has other functions like animate tracks and other things made easier!  

This package is meant to be used with [ReMapper](https://github.com/Swifter1243/ReMapper)

# importing
So I'm to stupid to make a deno moduel so you will be importing from github, the bright side is you dont have to install!

In order to import for all functions add this to the top of your code
```ts
import * as EnvMods from 'https://raw.githubusercontent.com/Splashcard04/EnvMods/main/EnvMods/index.ts';
```
your file should have (at least) these two imports
```ts
import {ModelScene, Difficulty, ENV, Environment } from "https://deno.land/x/remapper@2.1.0/src/mod.ts"; //the classes don't matter
import * as EnvMods from 'https://raw.githubusercontent.com/Splashcard04/EnvMods/main/EnvMods/index.ts';
```

# Environment functions
### despawn
```ts
import * as EnvMods from 'https://raw.githubusercontent.com/Splashcard04/EnvMods/main/EnvMods/index.ts';

EnvMods.despawn()
```
Despwan is extremely simple, it just takes the entirety of the bts environment and moves it way out of the player's sight, essentially despawning the environment
(currently only works for BTS environment BUT an update is planned allowing for selection of environments)

### sun

```ts
import * as EnvMods from 'https://raw.githubusercontent.com/Splashcard04/EnvMods/main/EnvMods/index.ts';

EnvMods.sun(positionX, positionY, positionZ, scale, lightID)
```

`sun()` will unfortunately only work in BTS environment :(... Anyways this will use `GlowLineH$` to make a sun effect with customizable scale and position, 
* positionX = number
* positionY = number
* positionZ = number
* scale = number
* lightID = integer

### clouds
```ts
import * as EnvMods from 'https://raw.githubusercontent.com/Splashcard04/EnvMods/main/EnvMods/index.ts';

EnvMods.clouds(positionX, positionY, positionZ, scaleX, scaleY, scaleZ)
```
`clouds()` is really just a dumb way to make clouds tbh but it does make it easier and shorter ig (if you're wondering why there's no rotation its because cloud rotation just gets really buggy and stuff.
* positionX = number
* positionY = number
* positionZ = number
* scaleX = number
* scaleY = number
* scaleZ = number

# object statments

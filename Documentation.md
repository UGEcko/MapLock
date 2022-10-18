![Banner](https://user-images.githubusercontent.com/111317032/196313133-d8735a06-4cb2-4805-83e2-ab896541a7fd.jpg)


# Welcome
Welcome to MapLock!  This is an awesome package for (mostly) environment ReMapper Statments, this also has other functions like animate tracks and other things made easier!  

This package is meant to be used with [ReMapper](https://github.com/Swifter1243/ReMapper)

# installing
 in order to install run this in your map directory terminal:
```powershell
deno install --allow-all -f --reload https://raw.githubusercontent.com/Splashcard04/MapLock/main/setup/MapLock_setup.ts
```
then just run 
```powershell
MapLock_setup
```
that should download the files for you, now to import add this to your imports list
```ts
import * as ml from './src/exports.ts'
```
and that should do it for install, up next are the functions

# Updating

to update this package when another release comes out, simply delete the MapLock folder(S) and re - run `MapLock_setup` and that will give you the latest version!

# Environment functions
### despawn
```ts
import * as ml from './src/exports.ts'

//despawns the whole BTS environment
ml.despawn("bts", "Contains")
```
Despwan is extremely simple, it just takes the entirety of the bts environment and moves it way out of the player's sight, essentially despawning the environment
despwan() has two constants for environments `"bts"` or `"billie"` removing the entirety of their respective environments, you can also use your own custom ids and different lookup methods if you so desire, `"bts"` and `"billie"` will only work with contains.

### sun

```ts
import * as ml from './src/exports.ts'

ml.sun(
   [0, 10, 30], //position
   [1, 1.5, 1], //scale
   21 //lightID
)
```
this will use `Geometry` to make a sun effect with customizable scale, position and lightID
* position = array
* scale = array
* lightID = integer

### clouds
```ts
import * as ml from './src/exports.ts'

ml.clouds(
   [0, 0, 0], //position
   [1, 1, 1], //scale
   [0, 90, 90] //rotation
)
```
`clouds()` is really just a dumb way to make clouds in the bts environment tbh but it does make it easier and shorter i suppose
* position = array
* rotation = array
* scale = array

### laserfeild
```ts
import * as ml from './src/exports.ts'

ml.laserfeild(
  0, //height
  21, //minimum lightID
  21, //ammount
  false //allows rotation?
)
```

__NOTE__ IDmin will be the first light ID a laser is registered to, meaning that if IDmin was 21 and my ammount was 7 my light IDs would be 21, 22, 23, 24, 25, 26, 27, 28.
allowRotation allows rotation of -20 - 20 on the x and z axis, IF you want the lasers to be straight up and down, just leave this to false.

* height = number
* IDmin = integer
* ammount = integer
* allowRotation = boolean

# object statments

### player movment
```ts
import * as ml from './src/exports.ts'

ml.animatePlayer(
   0, //time
   100, //duration
   [[0, 0, 0, 0], [0, 100, 0, 1, "easeStep"]] //position animation
)
```
This will move the player, but the exiting part is - no extra parent track needed - this will move the player and the notes together!
* time = number
* duration = number
* position = array

### stars

```ts
import * as ml from './src/exports.ts'

ml.stars(
  350, //ammount
  0.3, //individual size
  60, //distance
  0, //time
  100 //duration
)
```

Spawns a sphere of stars around the player using walls (could cause small ammounts of lag)

* ammount (the ammount of stars to spawn) = number
* individual size (the size of each star) = number
* distance (the distance between eac star) = number
* time (the time to spawn the stars) = number
* duration (the duration the stars will last) = number

### NoteFilter
```ts
import * as ml from './src/exports.ts'

ml.noteFilter(
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

# the entire other way you could do this

```ts
import {despawn, laserfeild} from './src/exports.ts'

despawn("billie", "Contains")
```

importing this way will allow you to not prefix everything with mp. and you can just use functions without worrying about prefixes, that said - prefixing will allow you to see what this package has to offer.  If you'd like you can type `mp.` and vsc will autofill all of your options for you.  You will see each function that you can call at that time.  It is completely up to you which way you import, they both have their pros and cons but i would personnaly reccomend prefixing for this package as there as it is meant as an addon to rm and you probably wont be using a ton within your script.

# future

I'm exited to say, that sometime in the future when v3 modcharts are more relevant (v3 allows for geometry lighting)  that I will be using a lot more geometry lights making them all compatible, but for now sit tight and listen to the other updates I have planned.

* all environment support for (almost) all functions.  I am planning to utilize geometry to the best of my ability to make some of these avalible for all environments
* make the docs pretty!!!!
* add some community made functions? (if people submit some lol)
* organize functions✔️


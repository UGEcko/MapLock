import * as rm from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

export function mapData() {
    console.log(`\x1b[36m%s\x1b[0m`, //start label
      `=================================================MAP DATA=============================================================`
        )
    rm.notesBetween(0, 9999999, (note) => {
      console.log(`\x1b[36m%s\x1b[0m`, //note label
      `=================================================NOTE DATA=============================================================`
        )
      console.log(`\x1b[36m%s\x1b[0m`, `note NJS: ${note.njs}`);//note njs
        
        )
  })
    rm.wallsBetween(0, 99999999, (wall) => {
              console.log(`\x1b[36m%s\x1b[0m`, //wall label
      `=================================================WALL DATA=============================================================`
)
      console.log(`\x1b[36m%s\x1b[0m`, `wall NJS: ${wall.njs}`
    }
          console.log(`\x1b[36m%s\x1b[0m`, //end label
      `=================================================MAP DATA=============================================================`)
}

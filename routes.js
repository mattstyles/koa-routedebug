
import path from 'path'
import chalk from 'chalk'

/**
 * Passed a router instance it’ll work out the routes from the stack and
 * present them in a user friendly way
 */
export default function( routerPath ) {
    let router = require( path.resolve( routerPath ) )

    console.log( chalk.magenta( '[route:debug]' ), chalk.white( 'routes' ) )

    router.stack.forEach( layer => {
        console.log( chalk.grey( layer.path ) )
        console.log( '  ', chalk.green( layer.methods.join( ' ' ) ) )
    })
}

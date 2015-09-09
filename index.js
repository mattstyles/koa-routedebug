#!/usr/bin/env node

require( 'babel-core/register' )({
    stage: 2,
    optional: [
        'es7.classProperties'
    ],
    loose: [
        'es6.modules',
        'es6.classes'
    ],
    ignore: /koa-routedebug\/node_modules/
})

// Set up yargs to control the program
var argv = require( 'yargs' )
    .usage( 'Usage: $0 [router]' )
    .demand( 1 )
    .argv

var getRoutes = require( './routes' )

argv._.forEach( function( routerPath ) {
    getRoutes( routerPath )
})

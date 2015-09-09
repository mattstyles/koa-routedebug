
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

// For now just return a list of the routes
require( './routes' )

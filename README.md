# koa-routedebug

> Reports applied routes from a [Koa-Router](https://www.npmjs.com/package/koa-router) instance

## Installation

Either install globally or locally as you’ll need to pass `routedebug` a router debug anyway.

```sh
npm i -D koa-routedebug
# or
npm i -g koa-routedebug
```

## Running

Once `routedebug` is in your path then pass it the location of a module that exports a [Koa-Router](https://www.npmjs.com/package/koa-router) instance,

```js
// examples/basic/router.js
import Router from 'koa-router'
let router = new Router()

router.get( '/user', ... )
router.post( '/user', ... )

export default router
```

```sh
routedebug examples/basic/router.js
```

`Routedebug` will then go ahead and grab the module and example the various bits and pieces `koa-router` uses to structure itself.

Feel free to get adventurous and let bash expansion (if your shell supports it) pass an array of routers to `routedebug`

```sh
routedebug examples/**/*router*.js
```

## Output

`routedebug` is more than a tad skinny at present and will just throw back a list of connected routes and methods for reaching them

```sh
/user
  POST
/user
  GET HEAD
```

It should get more interesting

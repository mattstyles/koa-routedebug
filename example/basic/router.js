
import Router from 'koa-router'

let router = new Router()

router.get( '/user', require( './user/get') )
router.post( '/user', require( './user/create') )

export default router

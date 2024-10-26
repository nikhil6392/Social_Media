import express from 'express'
import userCtrl from '../controllers/user.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router=express.Router()

router.route('/api/users')
    .get(userCtrl.list)
    .post(userCtrl.create)

router.route('/api/users/:userId')
    .get(authCtrl.requiredSignin,userCtrl.read)
    .put(authCtrl.requiredSignin,authCtrl.hasAuthorization,userCtrl.update)
    .delete(authCtrl.requiredSignin,authCtrl.hasAuthorization,userCtrl.remove)

router.route('/api/user').post(userCtrl.create)

router.route('/api/users').get(userCtrl.list)

router.param('userId',userCtrl.userByID)

router.route('/api/users/:userId').get(userCtrl.read)

router.route('/api/user/:userId').put(userCtrl.update)

router.route('/api/users/:userId').delete(userCtrl.remove)

export default router
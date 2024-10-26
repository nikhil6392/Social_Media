// import express from 'express'
// import userCtrl from '../controllers/user.controller.js'
// import authCtrl from '../controllers/auth.controller.js'

// const router=express.Router()

// router.route('/api/users')
//     .get(userCtrl.list)
//     .post(userCtrl.create)

// router.route('/api/users/:userId')
//     .get(authCtrl.requiredSignin,userCtrl.read)
//     .put(authCtrl.requiredSignin,authCtrl.hasAuthorization,userCtrl.update)
//     .delete(authCtrl.requiredSignin,authCtrl.hasAuthorization,userCtrl.remove)

// router.route('/api/user').post(userCtrl.create)

// router.route('/api/users').get(userCtrl.list)

// router.param('userId',userCtrl.userByID)

// router.route('/api/users/:userId').get(userCtrl.read)

// router.route('/api/user/:userId').put(userCtrl.update)

// router.route('/api/users/:userId').delete(userCtrl.remove)

// export default router

import express from 'express';
import userCtrl from '../controllers/user.controller.js';
import authCtrl from '../controllers/auth.controller.js';

const router = express.Router();

// Routes for listing and creating users
router.route('/api/users')
    .get(userCtrl.list)            // Get a list of users
    .post(userCtrl.create);        // Create a new user

// Routes for specific user operations (read, update, delete)
router.route('/api/users/:userId')
    .get(authCtrl.requiredSignin, userCtrl.read)                                  // Read user by ID with authentication
    .put(authCtrl.requiredSignin, authCtrl.hasAuthorization, userCtrl.update)      // Update user with authorization check
    .delete(authCtrl.requiredSignin, authCtrl.hasAuthorization, userCtrl.remove);  // Delete user with authorization check

// Middleware for retrieving user by ID
router.param('userId', userCtrl.userByID);

export default router;

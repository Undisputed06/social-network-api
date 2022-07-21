//Integrate API Routes into the Server

const router = require('express').Router();

const UserRoutes = require('./user-routes');



// add prefix of `/users to routes created in `user-routes.js`
router.use('users', UserRoutes);



module.exports = router;
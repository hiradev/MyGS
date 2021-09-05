const { Router } = require('express');
const authRoute = require('./auth.route')
const userRoute = require('./user.route')

const router = Router();

const allRoutes = [
    {
        path: "/auth",
        route: authRoute
    },
    {
        path: "/user",
        route: userRoute
    }
]

allRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;

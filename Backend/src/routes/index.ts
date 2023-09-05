import express from 'express';
import nameRoutes from './nameValidation';
import roleRoutes from './role';
import userRoutes from './users'
import auth from './auth'
import cattleShed from './cattleShed'

const version1 = 'v1'

const router = express.Router();

const defaultRoutes = [
 
  {
    path: `/${version1}/name`,
    route: nameRoutes,
  },
  {
    path: `/${version1}/roles`,
    route: roleRoutes,
  },
  {
    path: `/${version1}/users`,
    route: userRoutes,
  },
  {
    path: `/${version1}/auth`,
    route: auth,
  },
  {
    path: `/${version1}/cattle-sheds`,
    route: cattleShed,
  },
  
  
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


export default router;
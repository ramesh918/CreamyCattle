import express from 'express';
import nameRoutes from './nameValidation';
import roleRoutes from './role';
import userRoutes from './users'
import authRoutes from './auth'
import cattleShedRoutes from './cattleShed'
import animalRoutes from './animals'
import imageRoutes from './imageUploadRoutes'
import managerRoutes from "./managers"


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
    route: authRoutes,
  },
  {
    path: `/${version1}/cattle-sheds`,
    route: cattleShedRoutes,
  },
  {
    path: `/${version1}/animals`,
    route: animalRoutes
  },
  {
    path: `/${version1}/image`,
    route: imageRoutes
  },
  {
    path: `/${version1}/managers`,
    route: managerRoutes
  }

  

];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


export default router;
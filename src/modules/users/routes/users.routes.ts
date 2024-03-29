import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import UsersController from '../controlers/UsersController';


const usersRouter = Router();
const usersController = new UsersController();


usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().email().required(),
      password: Joi.string().required(),
      activated: Joi.boolean().required(),
    },
  }),
  usersController.create,
);

export default usersRouter;
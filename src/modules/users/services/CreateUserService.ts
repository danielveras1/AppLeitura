import { getCustomRepository } from 'typeorm';
import AppError from '../../../shared/errors/AppError';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
  activated: boolean;
}

class CreateUserService {
  public async execute({ name, email, phone, password, activated }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
        throw new AppError('Email já cadastrado');
      }
  
      const user = usersRepository.create({
        name,
        email,
        phone,
        password,
        activated
      });
  
      await usersRepository.save(user);
  
      return user;
    }
  }
  
  export default CreateUserService;
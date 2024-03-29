import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
class User{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;
  
  @Column()
  password: string;

  @Column()
  activated: boolean;

}
export default User;
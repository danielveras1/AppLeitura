import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1662057635369 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                  {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                  },
                  {
                    name: 'name',
                    type: 'varchar',
                  },
                  {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true,
                  },
                  {
                    name: 'phone',
                    type: 'varchar',
                    isUnique: true,
                  },
                  {
                    name: 'password',
                    type: 'varchar',
                  },
                  {
                    name: 'activated',
                    type: 'boolean',
                  },
                ],
              }),
            );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}

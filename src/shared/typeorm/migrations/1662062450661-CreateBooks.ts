import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateBooks1662062450661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table({
                name: 'books',
                columns: [
                  {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                  },
                  {
                    name: 'dono',
                    type: 'varchar',
                  },
                  {
                    name: 'titulo',
                    type: 'varchar',
                  },
                  {
                    name: 'tag',
                    type: 'varchar',
                  },
                ],
              }),
            );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books');
    }

}

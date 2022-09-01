import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class CreateLeitura1662062938503 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'leituras',
            new TableColumn({
              name: 'user_id',
              type: 'uuid',
            }),
          );
          await queryRunner.createForeignKey(
            'orders',
            new TableForeignKey({
              name: 'BookUser',
              columnNames: ['books_id'],
              referencedTableName: 'books',
              referencedColumnNames: ['id'],
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('leituras', 'BookUser');
        await queryRunner.dropColumn('leituras', 'user_id');
    }

}

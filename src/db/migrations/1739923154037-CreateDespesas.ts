import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateDespesas1739923154037 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'despesa',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'descrição',
            type: 'varchar',
            width: 50,
            isNullable: false,
          },
          {
            name: 'valor',
            type: 'float',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('despesa');
  }
}

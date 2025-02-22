import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AlterDespesa1739924818514 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'despesa',
      new TableColumn({
        name: 'categoria_id',
        type: 'int',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'despesa',
      new TableForeignKey({
        name: 'fk_despesa_categoria_id',
        columnNames: ['categoria_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'despesa',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('despesa');

    const foreignKey = table.foreignKeys.find((fk) =>
      fk.columnNames.includes('categoria_id'),
    );

    if (foreignKey) {
      await queryRunner.dropForeignKey('despesa', foreignKey);
    } else {
      throw new Error('Foreign key não encontrada!');
    }
  }
}

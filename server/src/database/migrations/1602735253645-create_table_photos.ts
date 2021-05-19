import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createTablePhotos1602735253645 implements MigrationInterface {
  public readonly TABLE_NAME = 'photos'

  public async up(query: QueryRunner): Promise<void> {
    await query.createTable(new Table({
      name: this.TABLE_NAME,
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanage_id',
          type: 'integer',
          unsigned: true,
        },
      ],
      foreignKeys: [
        {
          name: 'photo_orphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      ],
    }))
  }

  public async down(query: QueryRunner): Promise<void> {
    await query.dropTable(this.TABLE_NAME)
  }
}

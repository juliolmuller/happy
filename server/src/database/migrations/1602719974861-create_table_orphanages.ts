import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createTableOrphanages1602719974861 implements MigrationInterface {
  public readonly tableName = 'orphanages'

  public async up(query: QueryRunner): Promise<void> {
    await query.createTable(new Table({
      name: this.tableName,
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
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'numeric',
          precision: 13,
          scale: 10,
        },
        {
          name: 'longitude',
          type: 'numeric',
          precision: 13,
          scale: 10,
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'opening_hours',
          type: 'varchar',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
      ],
    }))
  }

  public async down(query: QueryRunner): Promise<void> {
    await query.dropTable(this.tableName)
  }

}

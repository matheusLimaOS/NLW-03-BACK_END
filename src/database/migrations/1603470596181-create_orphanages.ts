import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1603470596181 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"orphanages",
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text'
                },
                {
                    name: 'opening_hours',
                    type: 'varchar'
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false
                }
            ]

        }))
        //realizar alterações no banco
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages');
        //desfazer o que foi feito no metodo up
    }

}

import {MigrationInterface, QueryRunner} from "typeorm";

export class user1576660779730 implements MigrationInterface {
    name = 'user1576660779730'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `address` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `address`", undefined);
    }

}

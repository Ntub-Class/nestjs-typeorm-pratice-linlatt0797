import {MigrationInterface, QueryRunner} from "typeorm";

export class user1576660899774 implements MigrationInterface {
    name = 'user1576660899774'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `name` `phone` varchar(255) NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` CHANGE `phone` `name` varchar(255) NOT NULL", undefined);
    }

}

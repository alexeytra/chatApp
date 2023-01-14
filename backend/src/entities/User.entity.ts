import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    avatarUrl: string;

    @Column()
    phoneNumber: string;

    @Column()
    fullName: string;

    @Column()
    password: string;

    @Column('int', {array: true})
    chat: number[]

}
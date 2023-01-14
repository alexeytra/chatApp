import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../../../entities";
import {Repository} from "typeorm";
import * as crypto from "crypto";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
    }

    async authenticate(phoneNumber: string, password: string) {

        const user = await this.userRepository.findOne({where: {phoneNumber}})
        console.log(user)
        const hashedPassword = crypto.createHash('SHA256').digest('hex');
        if (!user) {
            return {
                message: 'User not found'
            }
        }
        console.log(hashedPassword)
        if (hashedPassword === user.password) {
            return user;
        }
    }
}
import {Args, Mutation, Resolver} from "@nestjs/graphql";
import {User} from "../../../graphql";
import {UserService} from "./user.service";
import {Inject} from "@nestjs/common";

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {
    }

    @Mutation('authenticate')
    async authenticate(@Args('phoneNumber') phoneNumber: string, @Args('password') password: string): Promise<User | { message: string }> {
        return await this.userService.authenticate(phoneNumber, password);
    }

}
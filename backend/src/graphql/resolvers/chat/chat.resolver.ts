import {Args, Query, Resolver} from "@nestjs/graphql";
import {Chat} from "../../../graphql";

@Resolver('Chat')
export class ChatResolver {
    @Query('chatMessages')
    async getChatMessages(@Args('chatId') chatId: number) {
        return [{
            id: 1, userId: 1, messages: [{
                id: 1,
                userId: 1,
                content: 'qwqw'
            }]
        }]
    }

}
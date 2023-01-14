import {ConfigurableModuleBuilder, Module} from '@nestjs/common';
import {AppService} from './app.service';
import {GraphQLSettingsModule} from "./graphql/graphql.module";
import {ChatModule} from "./graphql/resolvers/chat/chat.module";
import {UserModule} from "./graphql/resolvers/user/user.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as process from "process";
import {ConfigServiceModule, TypeOrmModuleSettings} from "./db.module";

@Module({
    imports: [
        GraphQLSettingsModule,
        ChatModule,
        UserModule,
        TypeOrmModuleSettings,
        ConfigServiceModule,
        ServeStaticModule.forRoot({
            rootPath: `${process.cwd()}/public`
        })
    ],
    controllers: [],
    providers: [AppService],
})
export class AppModule {
}

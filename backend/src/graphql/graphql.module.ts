import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";

export const GraphQLSettingsModule = GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    playground: true,
    typePaths: ['./**/*.graphql'],
    definitions: {
        path: `${process.cwd()}/src/graphql.ts`,
    }
});
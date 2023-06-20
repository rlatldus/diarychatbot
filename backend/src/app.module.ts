import { ConfigModule } from '@nestjs/config';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './apis/auth/auth.module';
import { BoardModule } from './apis/boards/boards.module';
import { UserModule } from './apis/users/user.module';
import * as redisStore from 'cache-manager-redis-store';
import { RedisClientOptions } from 'redis';
import { AppController } from './app.controller';
import { BoardCategoryModule } from './apis/boardCategory/boardCategory.module';
import { ChatGPTModule } from './apis/chatgpt/chat-gpt.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // 전체적으로 사용하기 위해
        }),
        BoardCategoryModule,
        AuthModule,
        BoardModule,
        UserModule,
        ChatGPTModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/commons/graphql/schema.gql',
            context: ({ req, res }) => ({ req, res }), // req 기본 적으로 들어옴 res는 작성해줘야함
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            entities: [__dirname + '/apis/**/*.entity.*'],
            synchronize: true,
            logging: true,
        }),
        // TypeOrmModule.forRoot({
        //   type: 'mysql',
        //   host: 'my-database',
        //   port: 3306,
        //   username: 'root',
        //   password: 'root',
        //   database: process.env.DB_DATABASE,
        //   entities: [__dirname + '/apis/**/*.entity.*'],
        //   synchronize: true,
        //   logging: true,
        // }),

        CacheModule.register<RedisClientOptions>({
            store: redisStore,
            url: 'redis://redis:6379',
            isGlobal: true,
        }),
    ],
    controllers: [AppController],
    providers: [],
    // providers: [AppService],
})
export class AppModule {}

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { graphqlUploadExpress } from 'graphql-upload';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './commons/filter/http-exception.filter';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // app.useStaticAssets(join(__dirname, '..', 'public'));
    // app.setBaseViewsDir(join(__dirname, '..', 'views'));
    // app.setViewEngine('ejs');
    app.useGlobalPipes(new ValidationPipe()); //유효성 검사
    app.useGlobalFilters(new HttpExceptionFilter()); //에러필터
    app.use(graphqlUploadExpress());
    app.enableCors({
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    }); //cors 허용
    await app.listen(4000);
}
bootstrap();

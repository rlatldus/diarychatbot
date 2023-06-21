/*
잘못된 요청이 들어올시 발생하는 HttpException을 처리하는 필터
*/
import { Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException) {
        const status = exception.getStatus();
        const messeage = exception.message;

        console.log('======================');
        console.log('애러 발생');
        console.log('예외내용:', messeage);
        console.log('예외코드:', status);
        console.log('======================');
    }
}

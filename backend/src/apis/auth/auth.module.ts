import { User } from 'src/apis/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtRefreshStrategy } from 'src/commons/auth/jwt-refresh.strategy';
import { AuthController } from './auth.controller';
import { JwtGoogleStrategy } from 'src/commons/auth/jwt-social-google.strategy';
import { JwtNaverStrategy } from 'src/commons/auth/jwt-social-naver.stategy';
import { JwtKakaoStrategy } from 'src/commons/auth/jwt-social-kakao.stategy';

@Module({
    imports: [JwtModule.register({}), TypeOrmModule.forFeature([User])],
    providers: [
        JwtRefreshStrategy,
        JwtGoogleStrategy,
        JwtNaverStrategy,
        JwtKakaoStrategy,
        AuthResolver,
        AuthService,
        UserService,
        // JwtService
    ],
    controllers: [AuthController],
})
export class AuthModule {}

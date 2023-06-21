// AuthGuard에서 사용할 JWT Access Strategy

import { CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Cache } from 'cache-manager';
import { Strategy, ExtractJwt } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'myGuard') {
    constructor(
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // req.headers.Authorization...
            secretOrKey: process.env.ACCESS_TOKEN_KEY,
            passReqToCallback: true,
            // context 중 req를 callback으로 넘겨줌
        });
    }

    async validate(req, payload) {
        const access = req.headers.authorization.replace('Bearer ', '');
        // redis에 저장된 access token이면 UnauthorizedException
        // redis에서 blacklist로 로그아웃을 관리 중
        const check = await this.cacheManager.get(access);
        if (check) {
            throw new UnauthorizedException();
        }
        console.log(payload); // { email: c@c.com, sub: qkwefuasdij-012093sd }
        return {
            email: payload.email,
            id: payload.sub,
            name: payload.name,
        };
    }
}

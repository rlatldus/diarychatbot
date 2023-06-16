import { CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Cache } from 'cache-manager';
import { Strategy } from 'passport-jwt';

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
    constructor(
        @Inject(CACHE_MANAGER)
        private readonly cacheManager: Cache,
    ) {
        super({
            jwtFromRequest: (req) => {
                //헤더 쿠키에서 refreshToken 가져오기
                const cookie = req.headers.cookie;
                if (cookie) {
                    const refreshToken = cookie.replace('refreshToken=', '');
                    // console.log(req);
                    return refreshToken;
                }
            },
            secretOrKey: process.env.REFRESH_TOKEN_KEY,
            // passReqToCallback: true, // context 중 req를 callback으로 넘겨줌
            passReqToCallback: true,
        });
    }

    async validate(req, payload) {
        // console.log(req);
        const access = req.headers.cookie.replace('refreshToken=', '');
        // redis에 저장된 refresh token이면 UnauthorizedExceptiondsas
        const check = await this.cacheManager.get(access);
        if (check) {
            throw new UnauthorizedException();
        }
        //  console.log(payload); // { email: c@c.com, sub: qkwefuasdij-012093sd }
        return {
            email: payload.email,
            id: payload.sub,
            name: payload.name,
        };
    }
}

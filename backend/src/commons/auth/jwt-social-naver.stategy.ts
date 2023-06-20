import { PassportStrategy } from '@nestjs/passport';

import { Strategy, Profile } from 'passport-naver';

//네이버 oauth2.0 strategy
// naver에서 제공하는 passport strategy를 사용한다.
export class JwtNaverStrategy extends PassportStrategy(Strategy, 'naver') {
    constructor() {
        super({
            clientID: process.env.OAUTH_NAVER_ID,
            clientSecret: process.env.OAUTH_NAVER_SECRET,
            callbackURL: process.env.OAUTH_NAVERURL,
            scope: ['email', 'profile'],
        });
    }

    validate(accessToken: string, refreshToken: string, profile: Profile) {
        console.log('네이버 프로필', profile);
        // profile 받는 항목들은 네이버 개발자 사이트에서 설정 가능
        return {
            email: profile.emails[0].value,
            password: profile.id,
            // name: profile.displayName,
            name: profile.emails[0].value,
        };
    }
}

import { PassportStrategy } from '@nestjs/passport';

import { Strategy, Profile } from 'passport-kakao';
//카카오 oauth2.0 strategy
// kakao에서 제공하는 passport strategy를 사용한다.
export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
    constructor() {
        super({
            clientID: process.env.OAUTH_KAKAO_ID,
            clientSecret: process.env.OAUTH_KAKAO_SECRET,
            callbackURL: process.env.OAUTH_KAKAOURL,
            scope: ['account_email', 'profile_nickname'],
        });
    }

    validate(accessToken: string, refreshToken: string, profile: Profile) {
        console.log('kakao 프로필', profile);
        // profile 받는 항목들은 카카오 developer 사이트에서 설정 가능
        return {
            email: profile._json.kakao_account.email,
            password: profile.id,
            name: profile.displayName,
        };
    }
}

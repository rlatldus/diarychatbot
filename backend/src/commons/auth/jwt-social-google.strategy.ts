import { Profile } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-google-oauth20';
//google oauth2.0 strategy 
// google에서 제공하는 passport strategy를 사용한다.
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: process.env.OAUTH_GOOGLE_ID,
      clientSecret: process.env.OAUTH_GOOGLE_SECRET,
      callbackURL: process.env.OAUTH_GOOGLEURL,
      scope: ['email', 'profile'],
    });
  }

  validate(accessToken: string, refreshToken: string, profile: Profile) {
    // { email: c@c.com, sub: qkwefuasdij-012093sd }
    console.log(profile);
    return {
      email: profile.emails[0].value,
      password: profile.id,
      name: profile.displayName,
    };
  }
}

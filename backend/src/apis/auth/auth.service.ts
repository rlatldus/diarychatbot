import { CACHE_MANAGER, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/user.service';
import * as jwt from 'jsonwebtoken';
import { Cache } from 'cache-manager';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
    private readonly userService: UserService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}
//refreshToken 발행
  async setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      { email: user.email, sub: user.id ,name: user.name},
      { secret: process.env.REFRESH_TOKEN_KEY, expiresIn: '2w' },
    );
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.setHeader('Access-Control-Allow-Origin', 'https://jintakim.shop')
    res.setHeader(
      'Set-Cookie',
      `refreshToken=${refreshToken}; path=/; domain=${process.env.MAIN_DOMAIN}; SameSite=None; Secure; httpOnly;`
    );
  }

//accessToken 발행
  getAccessToken({ user }) {
    return this.jwtService.sign(
      { email: user.email, sub: user.id, name: user.name },
      { secret: process.env.ACCESS_TOKEN_KEY, expiresIn: '1h' },
    );
  }

  //소셜 로그인 oauth 프로세스

  async loginOauth({ req, res }) {
    // 1. 가입확인

    console.log(req.user)
    let user = await this.userService.findOne({ email: req.user.email });
    
    // 2. 회원가입(가입 안되있을 시)
    if (!user) {
      const { password, ...rest } = req.user;
      const createUser = { ...rest, hashedPassword: password };
      user = await this.userService.create({ ...createUser });
    }
    console.log(process.env.MAIN_URI);

    // 3. 로그인
    this.setRefreshToken({ user, res });

    res.redirect(
      `${process.env.MAIN_URI}`,
    );
  }

  async blackList({ context }) {
    // 로그아웃을 위한 토큰 블랙리스트

    // 1. 토큰 전처리 (access, refresh) 만료시간 계산 -> ttl
    const now = new Date();
    console.log(context.req.headers.authorization)
    const access = context.req.headers.authorization.replace('Bearer ', '');
    const access_decoded = this.jwtService.decode(access);
    const access_time = new Date(access_decoded['exp'] * 1000);
    const access_end = Math.floor(
      (access_time.getTime() - now.getTime()) / 1000,
    );
    
    const refresh = context.req.headers.cookie.replace('refreshToken=', '');
    const refresh_decoded = this.jwtService.decode(refresh);
    console.log(refresh_decoded)
    const refresh_time = new Date(refresh_decoded['exp'] * 1000);
    const refresh_end = Math.floor(
      (refresh_time.getTime() - now.getTime()) / 1000,
    );
    console.log("access",access)
    console.log("refresh",refresh)
    // 2. 블랙리스트에 저장 레디스
    try {
      jwt.verify(access, process.env.ACCESS_TOKEN_KEY);
      console.log("access",access)
      jwt.verify(refresh, process.env.REFRESH_TOKEN_KEY);
      console.log("refresh",refresh)
      await this.cacheManager.set(access, 'accessToken', { ttl: 3600 });
      await this.cacheManager.set(refresh, 'refreshToken', {
        ttl: refresh_end,
      });// 
      return '로그아웃에 성공했습니다';

      // 3. 블랙리스트에 저장된 토큰은 사용 불가 
    } catch {
      throw new UnauthorizedException();
    }
  }
}


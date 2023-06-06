import { ICurrentUser } from '../../commons/auth/gql-user.param';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UnprocessableEntityException, UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CurrentUser } from 'src/commons/auth/gql-user.param';
import { CreateUserInput } from './dto/createUser.dto';
import { AuthService } from '../auth/auth.service';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService, //
    private readonly authService: AuthService,
  ) {}

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ) {
    const { email, password, name } = createUserInput;
    const hashedPassword = await bcrypt.hash(password, +(process.env.SALT));

    return this.userService.create({ email, hashedPassword, name });
  }

  // 전체 조회
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => [User])
  async fetchUsers() {
    return await this.userService.findAll();
  }

  // 로그인 된 유저 조회
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  async fetchUser(
    @CurrentUser() currentUser: ICurrentUser, //
  ) {
    console.log(currentUser.email);
    return await this.userService.findOne({ email: currentUser.email });
  }

  // 이메일로 유저 조회
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => User)
  async findOneByEmail(
    @Args('email') email: string){
    return await this.userService.findOne({email});
  }

  // 유저 삭제
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => String)
  async deleteUser(
    @CurrentUser() currentUser: ICurrentUser, //
    @Context() context: any,
  ) {
    
    const result = await this.userService.delete({user:currentUser});
    await this.authService.blackList({context})
    return result;
  }
  // 유저 수정
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => User)
  async updateUser(
    @CurrentUser() currentUser: ICurrentUser, //
    @Args('updateUserInput') updateUserInput: CreateUserInput,
  ) {
    
    return await this.userService.update({user:currentUser, updateUserInput});
  }
  // 비밀번호 변경
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() =>  User)
  async updatePassword(
    @CurrentUser() currentUser: ICurrentUser, //
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('newPassword') newPassword: string,
  ){
    // 1.로그인
    const user = await this.userService.findOne({ email });

    //2. 없으면 에러
    if (!user) throw new UnprocessableEntityException('이메일이 없습니다');
    // 3. 아이디 유 비밀번호가 틀림 에러
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) throw new UnprocessableEntityException('비밀번호가 틀립니다');
    // 4. 비밀번호 변경
    const hashedPassword = await bcrypt.hash(newPassword, process.env.SALT);
    // 5. 업데이트
    const result = await this.userService.update({user:currentUser, updateUserInput:{password:hashedPassword}});
    return result;
  }



}

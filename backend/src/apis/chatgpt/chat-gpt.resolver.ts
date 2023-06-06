/* 챗봇 읽기짱 구현 resolver
일기 등록 조회 수정 삭제 가능

*/

import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ChatGPTService } from "./chat-gpt.service";
import { createChatInput } from "./dto/createChat.input";
import { UseGuards } from "@nestjs/common";
import { GqlAuthAccessGuard } from "src/commons/auth/gql-auth.guard";
import { CurrentUser, ICurrentUser } from "src/commons/auth/gql-user.param";
import { ChatGPT } from "./entities/chat-gpt.entity";
import { UpdateChatInput } from "./dto/updateChat.input";

@Resolver()
export class ChatGPTResolver {
  constructor(private readonly chatGPTService: ChatGPTService) {}

  // 일기 등록
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => ChatGPT)
  async createDiary(
    @Args('createChatInput') createChatInput: createChatInput,
    @CurrentUser() currentUser: ICurrentUser,
  ) {
    return this.chatGPTService.create({createChatInput, user : currentUser});
  }

  // 일기 조회 로그인 되어있는 유저의 일기만 조회 
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => [ChatGPT])
  async fetchMyDiary(
    
    @CurrentUser() currentUser: ICurrentUser,
  ){
    return await this.chatGPTService.findMyDiary({user : currentUser});
  }
  // 특정 일기 조회 로그인 되어있는 유저의 일기만 조회 
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => ChatGPT)
  async fetchMyDiaryOne(
    @CurrentUser() currentUser: ICurrentUser,
    @Args('id') id: string,
  ){
    const result = await this.chatGPTService.findMyDiaryOne({user : currentUser, id})
    console.log(result)
    return result
  }

//일기 삭제 softdelete
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => String)
  async deleteMyDiary(
    @CurrentUser() currentUser: ICurrentUser,
    @Args('id') id: string,
  ){
    // console.log(currentUser)
    return await this.chatGPTService.delete({user : currentUser, id})
  }
  //일기 수정
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => ChatGPT)
  async updateMyDiary(
    @CurrentUser() currentUser: ICurrentUser,
    @Args('id') id: string,
    @Args('updateChatInput') updateChatInput: UpdateChatInput,
  ){
    const {ask, title} = updateChatInput
    // if(ask === ''){
    //   throw new Error('내용을 입력해주세요')
    // }
    const result = await this.chatGPTService.update({user : currentUser, id, updateChatInput})
    return result
  }
}
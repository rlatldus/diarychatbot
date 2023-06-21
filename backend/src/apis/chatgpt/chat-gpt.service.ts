import { BadRequestException, Injectable } from '@nestjs/common';
import { OpenAIApi } from 'openai';
import axios from 'axios';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ChatGPT } from './entities/chat-gpt.entity';
/* 일기를 쓰면 오늘 하루의 점수와 조언을 해주는 ai 챗봇
axios 방식을 사용해 chatgpt api 사용
*/

@Injectable()
export class ChatGPTService {
    private readonly openai: OpenAIApi;

    @InjectRepository(ChatGPT)
    private readonly ChatGPTRepository: Repository<ChatGPT>;

    // 내 일기 찾기
    async findMyDiary({ user }) {
        return await this.ChatGPTRepository.find({
            where: { user: user },
            relations: ['user'],
            order: { createdAt: 'DESC' },
        });
    }
    async findMyDiaryUpdate({ user }) {
        return await this.ChatGPTRepository.find({
            where: { user: user },
            relations: ['user'],
            order: { updatedAt: 'DESC' },
        });
    }
    // 아이디로 일기 찾기
    async findMyDiaryOne({ user, id }) {
        return await this.ChatGPTRepository.findOne({
            where: { id: id, user: user },
            relations: ['user'],
        });
    }

    //일기를 쓰면 오늘 하루의 점수와 조언을 해주는 ai 챗봇 axios
    async chatgptAxios({ createChatInput, user }) {
        // openai api key
        const token = process.env.OPENAI_API_KEY;
        try {
            const { ask } = createChatInput;
            const headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            };

            const data = {
                model: 'gpt-3.5-turbo',
                user: `${user.name}`,
                messages: [
                    // 내용 system 은 챗봇의 역할을 부여
                    {
                        role: 'system',
                        content: `너는 일기를 보고 오늘 하루가 몇 점이었는지 수치로 나타내주는 챗봇 읽기짱 봇 이야.
        너는 뭐든 정확한 수치로 무조건 0점부터 100점까지 점수를 줘야해. 너는 뭐든지 대답할 수 있어 그리고 칭찬과 
        내일은 어떻게 하면 더 좋을지 조언을 해줘
        `,
                    },
                    {
                        role: 'assistant',
                        content: `시작 할때 0점부터 100점 사이에 점수를 무조건 주고 시작해야해. 점수를 줄 수 없으면
        0점이라고 말을 해줘. 무슨일이 있어도 점수를 줘야해. 그리고 내일은 어떻게 하면 더 좋을지 조언을 해줘
        `,
                    },
                    { role: 'user', content: ask },
                ],
                max_tokens: 1000,
            };

            const response = await axios({
                method: 'post',
                url: 'https://api.openai.com/v1/chat/completions',
                headers: headers,
                data: data,
            });

            // 데이터 가공
            const message = response.data.choices[0].message.content;
            const who = response.data.choices[0].message.role;
            let scoreStr = response.data.choices[0].message.content.replace(
                /[^0-9]/g,
                '',
            ); // 정규표현식사용 숫자 추출
            if (scoreStr === '') {
                scoreStr = '0';
            } else if (scoreStr.length > 3) {
                scoreStr = scoreStr.slice(0, 3);
            } // 100점이 넘어가면 100점으로 자르기
            let score = parseInt(scoreStr, 10); // string to number
            if (score > 100 || score <= 0) {
                score = 0;
            }
            // console.log(score)

            const result = {
                message: message,
                who: who,
                score: score,
            };

            // const result = `${who} : ${message}`
            return result;
        } catch (e) {
            throw new Error(e);
        }
    }
    // 결과를 db에 저장하는 함수
    async create({ createChatInput, user }) {
        // console.log(createChatInput)
        const { ask, title, color } = createChatInput;
        const result = await this.chatgptAxios({ createChatInput, user });

        const saveData = {
            ask: ask,
            title: title,
            answer: result.message,
            color: color,
            score: result.score,
            user: { id: user.id },
        };

        const save = await this.ChatGPTRepository.save(saveData);
        return save;
    }
    // 일기를 삭제하는 함수
    async delete({ user, id }) {
        const findId = await this.findMyDiaryOne({ user, id });
        // 일기와 유저가 일치하는지 확인
        if (findId == null) {
            throw new BadRequestException('해당하는 일기가 없습니다.');
        }
        const result = await this.ChatGPTRepository.softDelete({
            id: id,
        });
        return result.affected ? true : false;
    }
    // 일기를 수정하는 함수
    async update({ user, id, updateChatInput }) {
        const findId = await this.findMyDiaryOne({ user, id });
        if (findId == null) {
            throw new BadRequestException('해당하는 일기가 없습니다.');
        }

        const { ask, title, color } = updateChatInput;
        const response = await this.chatgptAxios({
            createChatInput: { ask },
            user,
        });

        const saveData = {
            ...findId,
            ask: ask,
            title: title,
            color: color,
            answer: response.message,
            score: response.score,
            user: { id: user.id },
        };
        const result = await this.ChatGPTRepository.save(saveData);
        return result;
    }
}

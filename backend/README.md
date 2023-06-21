# 읽기짱 봇 백엔드
일기를 쓰면 오늘 하루가 어땠는지 chat-gpt가 점수를 매겨주고 조언과 응원을 해줍니다.

https://jintakim.shop/graphql

![DALL·E 2023-05-05 19 32 22 - a pencil a diary-reading bot](https://user-images.githubusercontent.com/76115198/236435668-6476f99a-d705-4a5b-b321-f869a1923d9d.png)


---
stack

Node.js, NESTJS, TypeScript, GraphQL, TypeORM, mysql, GCP( GCP Compute Engine, Load Balancer, DNS ), docker, git, github

# 기능 구현
 - 회원 관리

bcrypt, passport, OAUTH, JWT 사용해 회원 가입, 로그인, 탈퇴, redis 이용한 로그아웃 

- 챗봇 

일기 작성하면 chat gpt 가 점수와 조언을 해줌. 
일기 작성 crud.

-배포 

하나의 vm 서버에 
nginx 사용해 reverse proxy를 사용한 MSA구조
프론트엔드 서버와 백엔드 서버를 하나의 도커 컴포즈로 관리 및 배포
같은 오리진 사용 => 비용을 최소화 한 구조라 생각해서 사용
 
![KakaoTalk_20230607_161532586](https://github.com/diaryChatbot/diarychatbot/assets/76115198/02a368b5-a650-4555-b643-f615e0788916)


---

# graphql playground
https://jintakim.shop/graphql

## graphql 사용방법


query 와 mutation이 있음

query -> get

mutation -> post update delete 모두

![image](https://user-images.githubusercontent.com/76115198/234874445-e957164c-6532-45d3-8220-de530175915c.png)

docs에서 api 확인 가능



그리고 오른쪽 위에 세팅에서


"request.credentials": "same-origin",

이 설정을 넣어줘야 로그인이 가능하다 (쿠키에 리프레시 토큰 등록)


- tip
ctrl+i 누르면 입력가능한 것들이 나온다!

https://blog.naver.com/terry0222/223087247238



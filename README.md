# diarychatbot
읽기짱 봇 : 일기를 쓰면 오늘 하루 점수를 매겨주고 조언과 응원을 해주는 챗봇<br />
- **`Team name` :** diarychatbot ( 오늘의 조언과 응원 받 사이트 제작 )
- **`Project duration` :** 2023.05.30 - 2023.06.28
- **`Team members` :** 이승민, 김시연, 재
- **`Link` :** [라이언무비 방문하기](https://movie-33ea4.web.app/)

![image](https://github.com/rlatldus/diarychatbot/assets/122216298/e674b088-c720-40b0-942f-168fd0dac845)


## 프로젝트 시작하기 

```plain text
$ npm install
$ npm start
```

<br>

## 폴더구조
  
```
📦 src
├── 📂 api
│   ├── 📄 auth.js
│   ├── 📄 diary.js
│   ├── 📄 index.js
│   └── 📄 user.js
├── 📂 assets
├── 📂 components
│   ├── 📂 @share
│   │   ├── 📂 AccessDenied
│   │   ├── 📂 Button
│   │   ├── 📂 Header
│   │   ├── 📂 LabelInput
│   │   ├── 📂 Loading
│   │   ├── 📂 Memo
│   │   ├── 📂 Name
│   │   ├── 📂 Select
│   │   ├── 📂 Sticker
│   │   └── 📂 TypingEffect
│   ├── 📂 Board
│   │   ├── 📂 AiMemo
│   │   ├── 📂 BoardBody
│   │   ├── 📂 BoardFooter
│   │   ├── 📂 BoardRootLayout
│   │   └── 📂 DairyMemo
│   ├── 📂 Main
│   │   ├── 📂 BoardList
│   │   ├── 📂 BoardLists
│   │   ├── 📂 MainBody
│   │   ├── 📂 MainBodyFooter
│   │   └── 📂 MainLayout
│   ├── 📂 sign
│   │   ├── 📂 LineSocialLogin
│   │   ├── 📂 LoginBody
│   │   ├── 📂 LoginForm
│   │   ├── 📂 LoginHeader
│   │   ├── 📂 LoginSocialForm
│   │   ├── 📂 RegistBody
│   │   ├── 📂 RegistForm
│   │   └── 📂 SignFrame
├── 📂 hooks
│   ├── 📂 @query
│   │   ├── 📄 useCreateDiary.js
│   │   ├── 📄 useDeleteDiary.js
│   │   ├── 📄 useGetDiary.js
│   │   ├── 📄 usGetUser.js
│   │   ├── 📄 useLogout.js
│   │   ├── 📄 useSignIn.js
│   │   ├── 📄 useSignUp.js
│   │   └── 📄 useUpdateDiary.js
│   ├── 📂 @shared
│   │   └── 📄 useFormatdate.js
│   └── 📂 @zustand
│   │   └── 📄 useFilterState.js
├── 📂 pages
│   ├── 📂 Board
│   ├── 📂 Login
│   ├── 📂 Main
│   ├── 📂 Register
│   └── 📂 SocialLoginToken
├── 📂 providers
│   └── 📄 ToasterProvider.js
├── 📂 util
│   ├── 📄 auth.js
│   └── 📄 userStorage.js
├── 📄 App.js
├── 📄 index.css
└── 📄 index.js
```

</div>


## 개발 툴  

- React, React-Router-Dom을 적용한 개발
- Styled-Component를 활용하여 컴포넌트별 스타일 관리
- Axios, React-query로 Api 통신 및 관리
- Zustand를 사용한 상태관리

React|Javascript | Doker|Prettier|
| :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="react" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="js" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/docker-icon.svg" alt="docker" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> 


<br>


## 커뮤니케이션 툴 


Notion|Github|Discord|
| :--: | :--: | :--: |
| <img alt="Notion logo" src="https://www.notion.so/cdn-cgi/image/format=auto,width=640,quality=100/front-static/shared/icons/notion-app-icon-3d.png" height="65" width="65">| <img alt="github logo" src="https://techstack-generator.vercel.app/github-icon.svg" width="65" height="65">| <img alt="Discord logo" src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62595384e89d1d54d704ece7_3437c10597c1526c3dbd98c737c2bcae.svg" height="65" width="65"> |

<br>

| 이름   | Github                     | 포지션 및 역할   |
| ------ | ------------------------------- | ---------------- |
| 이승민 | https://github.com/newExpand    | FE               |
| 김시연 | https://github.com/rlatldus     | FE               |
| 재민   | https://github.com/yrttu0111    | BE               |

<br>

</div>
</details>

# diarychatbot
읽기짱 봇 : 일기를 쓰면 오늘 하루 점수를 매겨주고 조언과 응원을 해주는 챗봇



<summary>폴더구조</summary>
  
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


<br>
</div>
</details>

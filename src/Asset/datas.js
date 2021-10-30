export const navList = ['Main','Intro','Skills','Portfolio','Contact']

export const skillHashtag = [
  'All','React','Redux','Styled-components',
  'JavaScript','TypeScript'
]
export const projectDatas = [
  {
    id : 1,
    type:'FinalProject',
    name:'UptoDoor', 
    sub:'지역 경제 기반 정기구독 플랫폼',
    date : '2021.09.-2021.10 (4 Weeks / 4인)', 
    img : './img/uptodoor.png',
    primaryFunc : [
    '등록한 동네의 반경 2.5km 기준으로 모든 구독서비스 가게를 보여주는 기능',
    '부트페이를 이용한 정기결제 테스트 기능',
    '차트를 통한 구독서비스 이용 데이터 분석하여 보여주기 기능',
    '고객 접근성을 위한 네이버/카카오 소셜로그인 기능 추가'
  ],
    moveTo : 
      [
      'https://uptodoor.shop/',
      'https://github.com/codestates/UptoDoor/wiki']
    ,
    skill : ['React','Redux','JavaScript','Styled-components','Axios','ApexCharts','AWS(S3)'],
    desc:[
      `거주 지역을 중심으로 동네끼리 모여 이웃과의 연결을 통해 가치를 창출하고자 하는 공통의 목표를 가지고 있습니다.
      `,
      `
      소상공인은 장기고객을 확보 함으로써 안정적이고 반복적인 수익을 창출할 수 있습니다.
      소비자는 주변 상권에도 좋은 월구독 서비스가 있다는 정보를 얻을 수 있으며
      가까운 곳에서 더 빠르고, 신뢰도 있는 구독 서비스를 받을 수 있습니다.
      `,
      `
      서로가 Win-win 할 수 있는 환경에 조금이나마 보탬이 되기 위해 
      우리동네 구독서비스 uptodoor를 기획했습니다.
      `
    ]
  },
  {
    id : 2,
    type:'FirstProject',
    name:'바우와우_BowWow', 
    sub:'유기견 보호에 관심있는 사람들의 커뮤니티',
    date : '2021.08.-2021.9 (2 Weeks / 4인)', 
    img : './img/bowwow.png',
    primaryFunc : [
      '기본 CRUD 기능에 입각한 프로젝트',
      '유기견주들의 생생한 입양 및 봉사후기 및 봉사활동일정을 조회',
      '전국의 유기견 보호소 위치 조회 가능',
      '게시글 및 댓글 작성 조회 수정 삭제 가능'
    ],
    moveTo : 
      [
      'https://eteammerge.shop/',
      '']
    ,
    skill : ['React','JavaScript','Styled-components','Axios'],
    desc:[
      `평소 유기견 보호에 관심이 많지만 접근이 어려웠거나 내가 알고있는 정보를 공유 할 수 있습니다.
      `,
      `백엔드와 팀을 이루어 처음으로 협업한 프로젝트 입니다. 
      이론으로 알고 있었던 데이터를 실제로 주고받는 방식과 프론트엔드 팀원과 직접 UI/UX 를 구상하고 의논하여 
      결과물을 내었다는 점에서 의사소통의 중요성도 함께 깨달을 수 있었던 
      의미있는 프로젝트 였습니다. `
    ]
  },
  { 
    id : 3,
    type:'PersonalProject',
    name:'정해줘 내식사', 
    sub:'결정장애들을 위한 웹/앱 어플리케이션',
    date : '2021.05 (1 Weeks / 개인)', 
    img : './img/choosemymeal.png',
    primaryFunc : [
      'React hooks 를 이용한 랜덤으로 식사메뉴 고르기 기능',
      '32강 토너먼트식 게임 또는 바로 랜덤메뉴 고르기가 가능',
    ],
    moveTo : 
      [
      'https://my-meal.vercel.app/',
      'https://github.com/22sook00/MyMeal']
    ,
    skill : ['React(Class+Hooks)','JavaScript','Styled-components','Vercel'],
    desc:[
      `결정장애가 심해 식사메뉴 정할때마다 고민인 개인적인 경험을 바탕으로 기획한 첫번째 개인 프로젝트 입니다.`,
      `React 클래스형 컴포넌트와 함수형 컴포넌트 두개를 섞어 코드를 작성했습니다.`,
      `모바일에서도 사용할 수 있게 반응형으로 구현했습니다.`
    ]
  },
  { 
    id : 4,
    type:'PersonalProject',
    name:'포트폴리오',
    sub:'개인 웹/앱 포트폴리오',
    date : '2021.10 (1 Weeks / 개인)',  
    img : './img/portfolio.png',
    primaryFunc : [
      'use.context 로 white / dark 모드 구현 ',
      'react-scroll 사용하여 각 section, scroll to top 기능구현',
      'flex/grid 를 적절히 활용하여 카드형식으로 구현'],
    moveTo : 
      [
      'http://lee-sookyoung.me/',
      'https://github.com/22sook00/portfolio']
    ,
    skill : ['React','JavaScript','Styled-components','AWS(Route53)','Vercel'],
    desc:[
      `포트폴리오 용도로 제작한 React 기반의 웹사이트 입니다. 
      `,
      `
      배웠던 내용을 기반으로 하여 react-hooks 만을 이용하여 상태관리 하였습니다.
      `,
    ]
  },
]
export const contactDatas = [
  {
    id : 1,
    title : 'git',
    icon : './img/icons/git.png',
    address : 'https://github.com/22sook00',
  },
  {
    id : 2,
    title : 'velog',
    icon : './img/icons/velog.png',
    address : 'https://velog.io/@22soook00',
  },
  {
    id : 3,
    title : 'notion',
    icon : './img/icons/notion.png',
    address : 'https://www.notion.so/95af01470fc44f19921fe1b11bcea504?v=a9f488210be34788a6568ae45945c038',
  },
  {
    id : 4,
    title : 'contact',
    name :'이숙영',
    mobile : '010-5035-2068',
    icon : './img/icons/google.png',
    email : '22sook00@gmail.com'
  },

]
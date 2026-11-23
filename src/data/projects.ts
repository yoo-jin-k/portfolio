// 프로젝트 섹션(ProjectsSection)에 보여 줄 내용입니다.
// 구성: ① 진행 중 프로젝트 → ② 완료한 대표 프로젝트(이미지 카드) → ③ 그 외 작업(한 줄 목록)

// 대표 프로젝트 카드에 쓰는 이미지. 이미지를 바꾸려면 src/assets에 넣고 경로만 바꿉니다.
import petnerImg from '../assets/petner_main.png';
import beanShopImg from '../assets/beanShop/main_img.jpg';
// Library App 카드를 숨기면서 이미지 import도 함께 주석 처리 (다시 보이게 하려면 아래 카드와 같이 해제)
// import libraryImg from '../assets/libraryApp/main_img.png';

// 버튼처럼 보이는 링크 하나. label은 화면에 보이는 글자, url은 이동할 주소입니다.
export type ProjectLink = {label: string; url: string};

// ① 지금 개발하고 있는 프로젝트 (파란 테두리 상자 안에 표시)
export type OngoingProject = {
    name: string;
    // 기간, 예) '2026.08 – 현재'
    period: string;
    // 개인 / 팀 등 프로젝트 성격
    type: string;
    // 어떤 서비스인지 한 줄 설명
    summary: string;
    // 구현한 내용 (점 목록)
    points: string[];
    // 포인트색으로 강조되는 핵심 기능 한 줄
    highlight?: string;
    // 사용 기술 태그
    tags: string[];
    // 백엔드 링크를 먼저 둡니다.
    links?: ProjectLink[];
    // 링크 아래에 보여 줄 안내 한 줄 (비공개 저장소 안내, 설치 방법 등)
    linkNote?: string;
};

// ② 완료한 대표 프로젝트 (이미지가 있는 카드)
export type FeaturedProject = {
    name: string;
    period: string;
    type: string;
    summary: string;
    image: string;
    imageAlt: string;
    // 카드 안의 '역할 / 구현' 같은 짧은 설명 줄들
    details: {label: string; value: string}[];
    tags: string[];
    github: string;
};

// 진행 중 상자 머리에 붙는 설명 한 줄
export const ongoingNote = '2026년 현재 개발하고 있는 프로젝트';

export const ongoingProjects: OngoingProject[] = [
    {
        name: 'MOVRIT',
        period: '2026.08 – 현재',
        type: '개인 · AI 코딩 도구 활용',
        summary: '브랜드가 체험단 캠페인을 열고 참여자가 신청부터 콘텐츠 제출까지 진행하는 플랫폼 + LLM 작성·점검 도우미',
        points: [
            'AI 코딩 도구와 함께 Java/Spring 백엔드와 화면 개발: 참여자·업체·운영자의 신청·선정·제출·검토·승인 흐름 구성',
            'Claude API로 캠페인 초안·제출 전 점검 기능 구성: LlmClient로 모델 연결 분리, 서버 응답 검증, 하루 호출 한도와 토큰 기록',
            '선착순 신청은 캠페인 행 잠금으로 처리하고, 동시 수정의 버전 불일치는 HTTP 409로 알리는 구조',
            '프로젝트에 Flyway 마이그레이션·자동 테스트·GitHub Actions 검증 구성',
            '공개 시연 서버 배포는 AI 코딩 도구에 지시해 진행',
        ],
        highlight: '회사 실무와 별도로 진행한 개인 프로젝트 · AI 코딩 도구 활용',
        tags: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Flyway', 'Claude API', 'Docker', 'React', 'Vite'],
        links: [
            {label: '공개 시연', url: 'https://movrit.yjinee.com'},
            {label: 'GitHub · 백엔드', url: 'https://github.com/yoo-jin-k/movrit-backend'},
            {label: 'GitHub · 프론트', url: 'https://github.com/yoo-jin-k/movrit-frontend'},
        ],
    },
    {
        name: '루핏 (Rufit)',
        period: '2026.09 – 현재',
        type: '개인 · AI 코딩 도구 활용',
        summary: '운동 루틴·세트·휴식 기록과 저장 복구를 지원하는 운동 기록 앱',
        points: [
            'AI 코딩 도구를 활용해 운동 루틴·이력·세트/휴식·저장 복구 API와 PostgreSQL 스키마 구성',
            '프로젝트에 Flyway 마이그레이션과 자동 테스트·CI 구성',
            'Expo·React Native로 앱 화면 구성',
        ],
        highlight: '회사 경력 기간에 포함하지 않는 개인 프로젝트 · AI 코딩 도구 활용',
        tags: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'Flyway', 'React Native', 'Expo', 'TypeScript'],
        links: [
            {label: '아이폰 설치 (TestFlight)', url: 'https://testflight.apple.com/join/pYtQMuAQ'},
            {label: '안드로이드 설치 (APK)', url: 'https://api.rufit.yjinee.com/android'},
            {label: 'GitHub · 백엔드', url: 'https://github.com/yoo-jin-k/rufit-backend'},
            {label: 'GitHub · 프론트', url: 'https://github.com/yoo-jin-k/rufit-frontend'},
        ],
        linkNote: '설치 링크는 프로젝트 배포 링크입니다. 회사 실무 배포·운영 경력과 구분합니다.',
    },
];

// '완료' 표시 옆에 붙는 설명 한 줄
export const pastNote = '교육 과정과 개인 학습으로 만든 프로젝트';

export const featuredProjects: FeaturedProject[] = [
    {
        name: 'Petner',
        period: '2022.10 – 12',
        type: '팀 · KOSTA 과정',
        summary: '위치 기반으로 보호자와 펫시터를 연결하는 매칭 플랫폼',
        image: petnerImg,
        imageAlt: 'Petner 메인 화면',
        details: [
            {label: '기능', value: '위치 기반 시터·반려동물 찾기, 1:1 채팅(WebSocket), 관리자 페이지'},
            {label: '구현', value: 'Spring Security 암호화, 카카오 로그인, 쿠키·세션 로그인 유지'},
        ],
        tags: ['Spring', 'MyBatis', 'Oracle', 'jQuery'],
        github: 'https://github.com/kostapetner/petner',
    },
    {
        name: 'Bean Shop',
        period: '2023.03 – 04',
        type: '개인',
        summary: '원두 판매 쇼핑몰. 회원, 상품, 장바구니, 주문, 관리자 기능 전체 구현',
        image: beanShopImg,
        imageAlt: 'Bean Shop 메인 이미지',
        details: [
            {label: '역할', value: '설계 · 백엔드 · 화면 전체'},
            {label: '설계', value: '회원·상품·장바구니·주문·이미지 5개 테이블로 주문 흐름 전체 구성'},
        ],
        tags: ['Spring', 'Spring Data JPA', 'Oracle', 'Bootstrap'],
        github: 'https://github.com/yoo-jin-k/BeanShop',
    },
    // {
    //     name: 'Library App',
    //     period: '2023.03 – 04',
    //     type: '개인',
    //     summary: '개인 도서관리 서비스. Spring Boot로 만들고 AWS 리눅스 서버에 배포',
    //     image: libraryImg,
    //     imageAlt: 'Library App 화면',
    //     details: [
    //         {label: '역할', value: '설계 · 개발 · 배포'},
    //         {label: '배포', value: 'CRUD 기능을 만든 뒤 AWS 리눅스 서버에 직접 올려 운영 환경 경험'},
    //     ],
    //     tags: ['Spring Boot', 'MySQL', 'AWS', 'Linux'],
    //     github: 'https://github.com/yoo-jin-k/library-app',
    // },
];

// ③ 그 외 작업 (이미지 없이 이름·설명·링크만 한 줄로 표시)
export type OtherWorkItem = {
    name: string;
    // 프로젝트 성격과 주요 기술, 예) '개인 · Spring · MyBatis'
    type: string;
    summary: string;
    // GitHub, 사이트 등 링크 (여러 개 가능)
    links: ProjectLink[];
};

export const otherWork: {label: string; items: OtherWorkItem[]} = {
    label: '그 외 작업',
    items: [
        {
            name: 'Basic Blog',
            type: '개인 · Spring · MyBatis',
            summary: '카테고리·게시글 관리와 블로그 주인 권한 확인이 있는 개인 블로그',
            links: [{label: 'GitHub', url: 'https://github.com/yoo-jin-k/basicBlog'}],
        },
        {
            name: 'NERDY 리뉴얼',
            type: '퍼블리싱 · jQuery',
            summary: '모바일 우선으로 다시 설계한 쇼핑몰 반응형 퍼블리싱',
            links: [
                {label: 'GitHub', url: 'https://github.com/yoo-jin-k/NERDY.githun.io'},
                {label: '사이트', url: 'https://yoo-jin-k.github.io/NERDY.githun.io/'},
            ],
        },
        {
            name: 'MOONGKLE 리뉴얼',
            type: '퍼블리싱 · SCSS',
            summary: '복잡한 메뉴를 정리하고 SCSS로 구조화한 쇼핑몰 반응형 퍼블리싱',
            links: [
                {label: 'GitHub', url: 'https://github.com/yoo-jin-k/moongkle.github.io'},
                {label: '사이트', url: 'https://yoo-jin-k.github.io/moongkle.github.io/'},
            ],
        },
    ],
};

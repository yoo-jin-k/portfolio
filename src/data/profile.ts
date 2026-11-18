// 상단 바 · 히어로 · 연락처에 쓰이는 기본 정보.
// 내용만 고치면 화면에 그대로 반영됩니다.

export const profile = {
    name: '김유진',
    label: 'BACKEND DEVELOPER · 개발 경력 4년 5개월',
    title: '김유진',
    subtitle: '화면과 서버를 함께 이해하는 백엔드 개발자',
    intro:
        '웹 퍼블리싱과 React·React Native 개발을 거쳐 Java/Spring 백엔드와 데이터 마이그레이션까지 경험을 넓혀 왔습니다. ' +
        '사내 업무 시스템에서 원가 계산·비용 집계, 다단계 결재, 프로젝트 자금 현황, 연차·휴가 같은 업무 규칙을 구현했고, ' +
        '외부 서비스 업무를 사내 시스템으로 옮겨 구독 비용 절감에 기여했습니다.',
    // 소개 아래에 보여 주는 처리 흐름 그림.
    // 마지막 항목만 포인트색으로 표시됩니다.
    flow: ['View', 'Controller', 'Service', 'Mapper', 'DB'],
    // 첫 화면의 '지금 하고 있는 일' 배지. 누르면 진행 중 프로젝트로 이동합니다.
    nowBadge: '지금은 체험단 캠페인 플랫폼 MOVRIT과 운동 기록 앱 루핏을 개발하고 있어요',
    // 첫 화면 아래 네 칸짜리 요약표
    summary: [
        {label: '경력', value: '총 4년 5개월 (백엔드 2년 9개월)'},
        {label: '주력 기술', value: 'Java · Spring Boot · MyBatis · JPA'},
        {label: '도메인', value: '원가 · 결재 · 자금 · 연차'},
        {label: '최근 업무', value: '사내 업무 포털 기능 확장'},
    ],
    email: 'dbwls.g4o8@gmail.com',
    github: 'https://github.com/yoo-jin-k',
    // '이력서 PDF' 버튼이 내려받는 파일입니다.
    // public/resume.pdf는 resume/resume.html로 만든 공개용 이력서이며,
    // 내용을 고친 뒤 `npm run resume:pdf`를 실행하면 다시 만들어집니다.
    resumePdf: `${process.env.PUBLIC_URL}/resume.pdf`,
    // 내려받을 때 저장되는 파일 이름
    resumeFileName: '김유진_백엔드개발자_이력서.pdf',
    contactTitle: '함께 일할 기회를 기다리고 있습니다',
};

// 상단 메뉴: 같은 페이지 안의 섹션 id로 이동합니다.
export const navItems = [
    {id: 'experience', label: '경력'},
    {id: 'projects', label: '프로젝트'},
    {id: 'skills', label: '기술'},
    {id: 'contact', label: '연락처'},
];

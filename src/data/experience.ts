// 경력 섹션(ExperienceSection)에 보여 줄 내용입니다.
// 화면 코드는 건드리지 않고 이 파일의 글만 고치면 그대로 반영됩니다.

// 한 회사 안에서 맡은 프로젝트 하나
export type ExperienceProject = {
    // 프로젝트 이름 (굵은 소제목으로 표시)
    name: string;
    // 프로젝트를 한두 문장으로 설명하는 글 (없으면 생략)
    summary?: string;
    // 맡은 일 목록 (점 목록으로 표시)
    tasks: string[];
};

// 현재 직무(백엔드)와 이어지는 주요 경력: 큰 카드로 자세히 보여 줍니다.
export type Experience = {
    // 근무 기간, 예) '2024.12 – 2025.12'
    period: string;
    // 근무 개월 수, 예) '1년 1개월'
    duration: string;
    company: string;
    // 직급 · 직무
    role: string;
    // 회사에서 맡은 프로젝트들 (위에서부터 순서대로 표시)
    projects: ExperienceProject[];
    // 포인트색으로 강조되는 성과 한 줄
    highlight?: string;
    // 사용 기술 (회색 태그로 표시)
    tags: string[];
};

// 퍼블리싱·프론트엔드 시절의 이전 경력: 카드 아래 '이전 경력' 묶음에 한 줄씩 짧게 보여 줍니다.
export type PastCareer = {
    period: string;
    duration: string;
    company: string;
    role: string;
    // 회사에서 한 일을 한 줄로 요약
    summary: string;
    // 대표 업무 1~2개
    tasks: string[];
    tags: string[];
};

// 최근 경력이 위로 오도록 순서대로 적습니다.
export const experiences: Experience[] = [
    {
        period: '2024.12 – 2025.12',
        duration: '1년 1개월',
        company: '퍼스트테크(주)',
        role: 'SA 주임 · 백엔드 / 서버 개발',
        projects: [
            {
                name: '사내 업무 포털 — 원가관리 연계 및 업무 기능 확장',
                summary: '메카테크놀러지 때부터 참여한 사내 시스템 개발을 이어서, 기본 기능이 구축된 업무 포털의 데이터 연계와 백엔드 개발, 추가 기능 화면 개발을 맡았습니다.',
                tasks: [
                    '원가관리 스키마를 교차 조회해 데이터를 연계하고 원가관리 화면 진입 시 SSO 토큰 발급 연동',
                    '고객사·협력사별 선금·중도금·잔금 정보를 연계한 프로젝트 자금 현황 조회 화면 구현',
                    '예정일과 실제 처리 내역을 비교해 세금계산서 미발행·미접수, 미입금·미지불 항목을 구분하는 SQL·API 및 화면 개발',
                    '휴가 신청·취소와 결재 결과에 따른 사용·잔여 연차 처리, 연차 생성·마감 검증 로직 구현',
                    '연차·휴가·출장 현황 검색 결과를 엑셀로 내보내는 공통 기능 구현',
                ],
            },
            {
                name: '미국 SDS GCS 2.0 — HMI 마이그레이션 및 설비 운영 지원',
                tasks: [
                    '기존 데이터 분석·이관 대상 선별·추출, 기존·신규 시스템 간 데이터 매핑, 이관 전후 누락·불일치 검증과 보정 쿼리 작성·적용',
                    '기존 UI 이관, 설비 위치·구성 변경과 신규 설비 도입을 반영한 HMI 화면 배치 정비 및 설비 정보 등록·수정',
                    '설비 알람 스크립트 검수·알람 데이터 취합, 서버 상태 점검, 사용자 요청·VOC 및 운영 이슈 대응',
                ],
            },
        ],
        highlight: '비즈메카에서 처리하던 업무를 사내 시스템에서 처리하도록 기능 보완',
        tags: ['Java', 'Spring Boot', 'MyBatis', 'MySQL', 'React', 'JavaScript', 'Axios', 'xlsx-js-style'],
    },
    {
        period: '2023.05 – 2024.12',
        duration: '1년 8개월',
        company: '메카테크놀러지(주)',
        role: 'SP 주임 · 백엔드 / 서버 개발',
        projects: [
            {
                name: '사내 프로젝트 원가관리 시스템 — 백엔드 설계·개발',
                summary: '수주·발주, 원가 산정, 실행예산·실적 관리와 전자결재를 지원하는 사내 시스템의 백엔드 설계·개발을 담당했습니다.',
                tasks: [
                    '업무 프로세스와 요구사항을 분석해 데이터베이스 구조와 프론트엔드 연동 API 설계·구현',
                    '투입 공수(M/M)와 직급·시점별 단가를 적용한 인건비 산정, 공통 기준 단가와 프로젝트별 단가 분리 관리',
                    '사전원가·실행예산·실적/정산 모드별 비용 집계와 실행원가서·사후정산서 등 원가 문서 산출 연계',
                    '다단계 결재의 승인·반려·회수 처리와 최종 승인에 따른 원가 버전 확정·프로젝트 상태 갱신 연계',
                ],
            },
            {
                name: 'SDS GCS 2.0 — HMI 마이그레이션 및 설비 운영 지원',
                tasks: [
                    '기존 데이터 분석·이관 대상 선별·추출, 기존·신규 시스템 간 데이터 매핑, 이관 전후 누락·불일치 검증과 보정 쿼리 작성·적용',
                    '기존 UI 이관, 설비 위치·구성 변경과 신규 설비 도입을 반영한 HMI 화면 배치 정비 및 설비 정보 등록·수정',
                    '설비 알람 스크립트 검수·알람 데이터 취합, 서버 상태 점검, 사용자 요청·VOC 및 운영 이슈 대응',
                ],
            },
        ],
        highlight: '비즈메카에서 처리하던 업무를 사내 시스템으로 대체하는 기능 개발',
        tags: ['Java', 'Spring Boot', '전자정부프레임워크', 'Spring Data JPA', 'Querydsl', 'MyBatis', 'MySQL'],
    },
];

// '이전 경력' 묶음 머리에 붙는 설명 한 줄
export const pastCareerNote = '웹 퍼블리싱과 프론트엔드 개발로 시작했습니다';

// 이전 경력도 최근 순서로 적습니다.
export const pastCareers: PastCareer[] = [
    {
        period: '2023.01 – 2023.03',
        duration: '3개월',
        company: '리버밴스',
        role: '개발부 사원 · 프론트엔드',
        summary: 'React 기반 웹 서비스 기능 개선 및 유지보수',
        tasks: [
            '홈페이지와 블록체인 기반 웹 서비스의 화면 구조·데이터 흐름을 분석해 기능 개선',
            '서비스 데이터를 시각적으로 확인할 수 있는 화면 구현과 정보 배치 개선',
        ],
        tags: ['React'],
    },
    {
        period: '2021.04 – 2022.05',
        duration: '1년 2개월',
        company: '뉴테크프라임',
        role: '개발부 사원 · 프론트엔드',
        summary: '블록체인 서비스 웹·모바일 앱 UI 개발, 기업 홈페이지 반응형 제작',
        tasks: [
            'React·TypeScript로 풀·스왑·교환 등 주요 기능의 웹 화면 구현과 API 응답 데이터 연계',
            'React Native로 모바일 앱 화면을 개발해 출시 전 테스트 단계까지 참여',
        ],
        tags: ['React', 'TypeScript', 'React Native', 'HTML/CSS'],
    },
    {
        period: '2021.02 – 2021.04',
        duration: '3개월',
        company: '골프유닷넷',
        role: '개발부 사원 · 웹 퍼블리싱',
        summary: '골프 예약 서비스 웹·모바일 UI 제작',
        tasks: [
            '자사 웹사이트 UI 디자인과 퍼블리싱, 골프 예약 앱 사용자 화면 구현 참여',
        ],
        tags: ['HTML/CSS', 'UI 디자인'],
    },
];

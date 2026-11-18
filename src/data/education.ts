// 교육 섹션(EducationSection)에 보여 줄 학력·교육 이력입니다. 최근 순서로 적습니다.
export type EducationItem = {
    // 기간, 예) '2023.10 – 2027.02'
    period: string;
    // 기관 · 과정 · 상태를 한 줄로
    text: string;
};

export const education: EducationItem[] = [
    {
        period: '2023.10 – 2027.02',
        text: '국가평생교육진흥원(학점은행제) · 컴퓨터공학 (졸업예정)',
    },
    {
        period: '2022.08 – 2022.12',
        text: '한국소프트웨어기술진흥협회(KOSTA) · Java/Spring 기반 웹 개발자 양성과정 수료',
    },
    {
        period: '2020.04 – 2020.10',
        text: '더조은컴퓨터 · 반응형 UI/UX 웹퍼블리셔 과정 수료',
    },
    {
        period: '2014.03 – 2017.03',
        text: '국제대학 · IT(컴퓨터정보) 졸업',
    },
];

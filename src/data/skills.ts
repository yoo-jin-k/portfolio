// 기술 섹션(SkillsSection)에 보여 줄 내용입니다. 그룹 하나가 카드 하나가 됩니다.
export type SkillGroup = {
    // 카드 제목, 예) '실무에서 주로 사용'
    title: string;
    // 카드 안에 태그로 보여 줄 기술 이름들
    items: string[];
};

export const skillGroups: SkillGroup[] = [
    {
        title: '실무에서 주로 사용',
        items: ['Java', 'Spring Boot', 'MyBatis', 'Spring Data JPA', 'Querydsl', 'MySQL', 'SQL'],
    },
    {
        title: '사용 경험 있음',
        items: ['전자정부프레임워크', 'Spring Security', 'JWT', 'React', 'TypeScript', 'JavaScript', 'React Native', 'jQuery', 'Oracle', 'AWS'],
    },
    {
        title: '도구',
        items: ['IntelliJ', 'Git / GitHub', 'Gradle', 'Maven', 'DBeaver', 'Figma', 'AI 개발 도구'],
    },
];

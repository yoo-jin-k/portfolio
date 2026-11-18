import React from 'react';
import TopBar from './components/onepage/TopBar';
import Hero from './components/onepage/Hero';
import ExperienceSection from './components/onepage/ExperienceSection';
import ProjectsSection from './components/onepage/ProjectsSection';
import SkillsSection from './components/onepage/SkillsSection';
import EducationSection from './components/onepage/EducationSection';
import ContactSection from './components/onepage/ContactSection';

// 한 페이지 스크롤 구성. 섹션 순서를 바꾸려면 여기서 순서만 바꾸면 됩니다.
function App() {
    return (
        <>
            <TopBar/>
            <main>
                <Hero/>
                <ExperienceSection/>
                <ProjectsSection/>
                <SkillsSection/>
                <EducationSection/>
                <ContactSection/>
            </main>
        </>
    );
}

export default App;

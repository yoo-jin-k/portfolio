import React from 'react';
import {experiences, pastCareerNote, pastCareers} from '../../data/experience';
import {SectionHeader, TagList} from './common';

// 경력 섹션
// - 위: 백엔드 경력 회사 카드 (회사 → 성과 한 줄 → 프로젝트별 업무 → 기술 태그)
// - 아래: '이전 경력' 묶음 (퍼블리싱·프론트엔드 시절 회사를 한 행씩)
// 글 내용은 src/data/experience.ts에서 고칩니다.
const ExperienceSection = () => (
    <section className="section" id="experience">
        <div className="container">
            <SectionHeader label="EXPERIENCE" title="경력"/>
            <div className="stack">
                {/* 주요 경력: 회사마다 카드 하나 */}
                {experiences.map((exp) => (
                    <article key={exp.company} className="card card--split">
                        {/* 왼쪽 칸: 기간과 근무 개월 수 */}
                        <div className="card__aside">
                            <p className="mono-date">{exp.period}</p>
                            <p className="mono-date mono-date--sub">{exp.duration}</p>
                        </div>
                        <div className="card__body">
                            <h3 className="card__title">{exp.company}</h3>
                            <p className="card__meta">{exp.role}</p>
                            {/* 성과는 눈에 잘 띄도록 파란 상자로 회사 이름 바로 아래에 둡니다 */}
                            {exp.highlight && <p className="exp-highlight">{exp.highlight}</p>}
                            {/* 한 회사에서 맡은 프로젝트를 구분선으로 나눠 보여 줍니다 */}
                            {exp.projects.map((project) => (
                                <div key={project.name} className="exp-project">
                                    <h4 className="exp-project__name">{project.name}</h4>
                                    {project.summary && <p className="card__desc">{project.summary}</p>}
                                    <ul className="bullets">
                                        {project.tasks.map((task) => <li key={task}>{task}</li>)}
                                    </ul>
                                </div>
                            ))}
                            <TagList items={exp.tags}/>
                        </div>
                    </article>
                ))}
            </div>

            {/* 이전 경력: 진행 중 프로젝트 상자와 같은 형태지만 회색 톤으로 한 단계 낮춰 보여 줍니다 */}
            <div className="archive">
                <p className="archive__head">
                    <span className="archive__badge">이전 경력</span>
                    {pastCareerNote}
                </p>
                {pastCareers.map((c) => (
                    <article key={c.company} className="archive__item card--split">
                        <div className="card__aside">
                            <p className="mono-date">{c.period}</p>
                            <p className="mono-date mono-date--sub">{c.duration}</p>
                        </div>
                        <div className="card__body">
                            <h3 className="card__title card__title--sm">
                                {c.company}<span className="card__meta card__meta--inline">{c.role}</span>
                            </h3>
                            <p className="card__desc">{c.summary}</p>
                            <ul className="bullets bullets--sm">
                                {c.tasks.map((task) => <li key={task}>{task}</li>)}
                            </ul>
                            <TagList items={c.tags}/>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default ExperienceSection;

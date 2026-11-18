import React from 'react';
import {featuredProjects, ongoingNote, ongoingProjects, otherWork, pastNote} from '../../data/projects';
import {ExternalLink, SectionHeader, TagList} from './common';

// 프로젝트 섹션
// ① 진행 중(파란 테두리 상자) → ② 완료한 대표 프로젝트(이미지 카드) → ③ 그 외 작업(한 줄 목록)
// 글 내용은 src/data/projects.ts에서 고칩니다.
const ProjectsSection = () => (
    <section className="section" id="projects">
        <div className="container">
            <SectionHeader label="SELECTED PROJECTS" title="프로젝트"/>

            {/* ① 진행 중 프로젝트. 첫 화면 배지를 누르면 id="ongoing" 위치로 이동합니다 */}
            <div className="ongoing" id="ongoing">
                <p className="ongoing__head">
                    <span className="ongoing__badge"><span className="dot" aria-hidden="true"/>진행 중</span>
                    {ongoingNote}
                </p>
                {ongoingProjects.map((p) => (
                    <article key={p.name} className="ongoing__item card--split">
                        <div className="card__aside">
                            <p className="mono-date">{p.period}</p>
                            <p className="mono-date mono-date--sub">{p.type}</p>
                        </div>
                        <div className="card__body">
                            <h3 className="card__title">{p.name}</h3>
                            <p className="card__desc">{p.summary}</p>
                            <ul className="bullets">
                                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                                {p.highlight && <li className="bullets__accent">{p.highlight}</li>}
                            </ul>
                            <div className="card__foot">
                                <TagList items={p.tags}/>
                                {/* 링크가 여러 개면 나란히 보여 줍니다 (백엔드 → 프론트 순서) */}
                                {p.links && (
                                    <div className="archive__links">
                                        {p.links.map((link) => (
                                            <ExternalLink key={link.url} href={link.url} className="text-link">
                                                {/* 화면 낭독기에는 어느 프로젝트 링크인지 함께 읽어 줍니다 */}
                                                {link.label}<span className="sr-only"> ({p.name})</span>
                                            </ExternalLink>
                                        ))}
                                    </div>
                                )}
                                {/* 링크 아래 안내 문구 (비공개 저장소 안내, 설치 방법 등) */}
                                {p.linkNote && <p className="link-note">{p.linkNote}</p>}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* ② 완료한 프로젝트 머리: '진행 중'과 짝이 되는 '완료' 표시 */}
            <p className="archive__head archive__head--bare">
                <span className="archive__badge">완료</span>
                {pastNote}
            </p>
            <div className="grid grid--projects">
                {featuredProjects.map((p) => (
                    <article key={p.name} className="card project-card">
                        <div className="project-card__img">
                            <img src={p.image} alt={p.imageAlt} loading="lazy"/>
                        </div>
                        <div className="project-card__body">
                            <div className="project-card__head">
                                <h3 className="card__title">{p.name}</h3>
                                <p className="mono-date">{p.type} · {p.period}</p>
                            </div>
                            <p className="card__desc">{p.summary}</p>
                            <dl className="details">
                                {p.details.map((d) => (
                                    <div key={d.label} className="details__row">
                                        <dt>{d.label}</dt>
                                        <dd>{d.value}</dd>
                                    </div>
                                ))}
                            </dl>
                            <TagList items={p.tags}/>
                            <ExternalLink href={p.github} className="text-link">GitHub에서 코드 보기</ExternalLink>
                        </div>
                    </article>
                ))}
            </div>

            {/* ③ 그 외 작업: 이미지 없이 이름·설명·링크만 한 줄씩 */}
            <div className="archive archive--compact">
                <p className="archive__head">
                    <span className="archive__badge">{otherWork.label}</span>
                </p>
                <ul>
                    {otherWork.items.map((item) => (
                        <li key={item.name} className="archive__row">
                            <div>
                                <h3 className="card__title card__title--sm">
                                    {item.name}<span className="card__meta card__meta--inline">{item.type}</span>
                                </h3>
                                <p className="card__desc">{item.summary}</p>
                            </div>
                            <div className="archive__links">
                                {item.links.map((link) => (
                                    <ExternalLink key={link.url} href={link.url} className="text-link">
                                        {link.label}<span className="sr-only"> ({item.name})</span>
                                    </ExternalLink>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

export default ProjectsSection;

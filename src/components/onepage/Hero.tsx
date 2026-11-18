import React from 'react';
import {profile} from '../../data/profile';
import {ExternalLink} from './common';

const Hero = () => (
    <section className="hero" id="top">
        <div className="container">
            <p className="mono-label">{profile.label}</p>
            <h1 className="hero__title">{profile.title}</h1>
            <p className="hero__subtitle">{profile.subtitle}</p>
            <p className="hero__intro">{profile.intro}</p>

            <ol className="flow" aria-label="서비스 처리 흐름">
                {profile.flow.map((step, i) => (
                    <React.Fragment key={step}>
                        {i > 0 && <li className="flow__arrow" aria-hidden="true">→</li>}
                        <li className={i === profile.flow.length - 1 ? 'flow__step flow__step--accent' : 'flow__step'}>
                            {step}
                        </li>
                    </React.Fragment>
                ))}
            </ol>

            <a href="#ongoing" className="now-badge">
                <span className="dot" aria-hidden="true"/>
                {profile.nowBadge}
            </a>

            <div className="btn-row">
                <a href={profile.resumePdf} className="btn btn--primary" download={profile.resumeFileName}>이력서 PDF 다운로드</a>
                <ExternalLink href={profile.github} className="btn">GitHub</ExternalLink>
                <a href="#contact" className="btn">연락하기</a>
            </div>

            <dl className="summary">
                {profile.summary.map((item) => (
                    <div key={item.label} className="summary__cell">
                        <dt className="mono-label">{item.label}</dt>
                        <dd>{item.value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    </section>
);

export default Hero;

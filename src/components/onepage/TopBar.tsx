import React from 'react';
import {navItems, profile} from '../../data/profile';

const TopBar = () => (
    <header className="topbar">
        <div className="container topbar__inner">
            <a href="#top" className="topbar__name">{profile.name}</a>
            <nav className="topbar__nav" aria-label="섹션 이동">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <a href={profile.resumePdf} className="btn btn--primary btn--sm" download={profile.resumeFileName}>
                    이력서 PDF
                </a>
            </nav>
        </div>
    </header>
);

export default TopBar;

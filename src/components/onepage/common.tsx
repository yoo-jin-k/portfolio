import React from 'react';

// 대괄호로 시작하는 값(아직 채우지 않은 자리)은 점선 태그로 표시합니다.
const isPlaceholder = (text: string) => text.trim().startsWith('[');

export const Tag = ({children}: {children: string}) => (
    <li className={`tag${isPlaceholder(children) ? ' tag--todo' : ''}`}>{children}</li>
);

export const TagList = ({items}: {items: string[]}) => (
    <ul className="tag-list">
        {items.map((item) => (
            <Tag key={item}>{item}</Tag>
        ))}
    </ul>
);

export const SectionHeader = ({label, title}: {label: string; title: string}) => (
    <header className="section-header">
        <p className="mono-label">{label}</p>
        <h2 className="section-title">{title}</h2>
    </header>
);

export const ExternalLink = ({href, children, className}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
    </a>
);

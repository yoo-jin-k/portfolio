import React from 'react';
import {education} from '../../data/education';
import {SectionHeader} from './common';

const EducationSection = () => (
    <section className="section" id="education">
        <div className="container">
            <SectionHeader label="EDUCATION" title="교육"/>
            <ul className="edu-list">
                {education.map((item) => (
                    <li key={item.text} className="edu-list__row">
                        <span className="mono-date">{item.period}</span>
                        <span>{item.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default EducationSection;

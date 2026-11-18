import React from 'react';
import {skillGroups} from '../../data/skills';
import {SectionHeader, TagList} from './common';

const SkillsSection = () => (
    <section className="section" id="skills">
        <div className="container">
            <SectionHeader label="SKILLS" title="기술"/>
            <div className="grid grid--skills">
                {skillGroups.map((group) => (
                    <article key={group.title} className="card card--pad">
                        <h3 className="card__title card__title--sm">{group.title}</h3>
                        <TagList items={group.items}/>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;

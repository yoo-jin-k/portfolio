import React, {useEffect, useRef, useState} from 'react';
import {profile} from '../../data/profile';
import {ExternalLink} from './common';

// navigator.clipboard는 https/localhost에서만 동작해서, 안 되면 예전 방식으로 복사합니다.
const copyText = async (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return;
    }
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(area);
    if (!ok) throw new Error('copy failed');
};

const ContactSection = () => {
    const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
    const timer = useRef<number>();

    useEffect(() => () => window.clearTimeout(timer.current), []);

    const onCopy = async () => {
        try {
            await copyText(profile.email);
            setStatus('copied');
        } catch {
            setStatus('failed');
        }
        window.clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setStatus('idle'), 2000);
    };

    const label = status === 'copied' ? '복사했어요' : status === 'failed' ? '복사 실패' : '이메일 주소 복사';

    return (
        <section className="section section--last" id="contact">
            <div className="container">
                <div className="contact">
                    <div>
                        <h2 className="contact__title">{profile.contactTitle}</h2>
                        <a href={`mailto:${profile.email}`} className="contact__email">{profile.email}</a>
                    </div>
                    <div className="contact__actions">
                        <button type="button" className="btn btn--light" onClick={onCopy}>
                            {label}
                        </button>
                        <ExternalLink href={profile.github} className="btn btn--ghost-dark">GitHub</ExternalLink>
                    </div>
                    <span className="sr-only" aria-live="polite">
                        {status === 'copied' ? '이메일 주소를 복사했어요' : ''}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

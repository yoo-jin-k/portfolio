import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('원페이지 섹션과 앵커 메뉴가 렌더링된다', () => {
    render(<App/>);
    expect(screen.getByRole('heading', {level: 1, name: '화면과 서버를 함께 이해하는 백엔드 개발자'})).toBeInTheDocument();
    expect(document.querySelector('.topbar__name')?.textContent).toBe('김유진');
    ['experience', 'projects', 'skills', 'contact'].forEach((id) => {
        expect(document.getElementById(id)).not.toBeNull();
        expect(document.querySelector(`.topbar a[href="#${id}"]`)).not.toBeNull();
    });
    expect(document.getElementById('ongoing')).not.toBeNull();
});

test('생년월일과 옛 메일 주소가 화면에 없다', () => {
    const {container} = render(<App/>);
    expect(container.textContent).not.toMatch(/940811|1994/);
    expect(container.innerHTML).not.toContain('dbwls_0811');
    expect(screen.getByRole('link', {name: 'dbwls.g4o8@gmail.com'})).toHaveAttribute('href', 'mailto:dbwls.g4o8@gmail.com');
});

import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/onepage.css';
import App from './App';

// 원페이지 구성이라 라우터 없이 렌더링합니다.
// 메뉴는 #앵커로만 이동하므로 gh-pages(/portfolio_2023)에서 새로고침해도 같은 index.html이 열립니다.
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

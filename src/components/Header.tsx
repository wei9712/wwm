import { navigateTo } from '../utils/router';

export function Header(): JSX.Element {
  return (
    <header className="site-header">
      <button className="brand-button" onClick={() => navigateTo('/')}>
        冒險攻略站
      </button>
      <nav className="nav-menu">
        <button onClick={() => navigateTo('/')}>首頁</button>
        <button onClick={() => navigateTo('/category')}>分類</button>
        <button onClick={() => navigateTo('/faq')}>FAQ</button>
      </nav>
    </header>
  );
}

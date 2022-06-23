import './Header.scss';
import {Link} from 'react-router-dom';

type Props = {};

export function Header(props: Props) {
  return (
    <header className="header">
      <Link to={'/'} className={'row'}>
        <img src="/images/logo.png" alt="logo" />
        <p className={'logo-title'}>Singularity camp</p>
      </Link>

      <div className={'navs'}>
        <a className="link" href="/about">О программе</a>
        <a className="link" href="/about">Команда</a>
        <a className="link" href="/about">Требования</a>
        <a className="link" href="/about">Контакты</a>
      </div>
    </header>
  );
};
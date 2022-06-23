import './Header.scss';
import {Link} from 'react-router-dom';

type Props = {};

export function Header(props: Props) {
  return (
    <header className="header">
      <Link to={'/'} className={'row'}>
        <img src="/images/logo.png" alt="logo" />
        <p className={'logo-title'}>Singularity <br></br> camp</p>
      </Link>

      <div className={'links'}>
        <Link to={'/info/about'} className="link">Программа</Link>
        <Link to={'/info/stuff'} className="link">Команда</Link>
        <Link to={'/info/requirements'} className="link">Требования</Link>
        <Link to={'/info/contacts'} className="link">Контакты</Link>
        <Link to={'/login'} className="link">Войти</Link>


      </div>
    </header>
  );
};
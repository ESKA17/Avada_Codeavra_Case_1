import './Header.scss';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Authentication} from '../../api/authentication';

type Props = {};

export function Header(props: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const logout = () => {
    const authentication = new Authentication();
    authentication.logout();
  };
  return (
    <header className="header">
      <Link to={'/'} className={'row'}>
        <img src="/images/logo.png" alt="logo" />
        <p className={'logo-title'}>Singularity camp</p>
      </Link>

      {!isLoggedIn &&
          <div className={'navs'}>
              <a className="link" href="/about">О программе</a>
              <a className="link" href="/about">Команда</a>
              <a className="link" href="/about">Требования</a>
              <a className="link" href="/about">Контакты</a>
          </div>}

      {isLoggedIn && <div className={'header-avatar'}>
          <span className="link" onClick={logout}>Logout</span>
          <Link to={'/profile'}>
              <img className={'avatar'} src="/images/avatar.jpeg" alt="" />
          </Link>

      </div>}

    </header>
  );
};
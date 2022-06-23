
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
        <a className="link" >О программе</a>
        <a className="link" >Команда</a>
        <a className="link" >Требования</a>
        <a className="link" >Контакты</a>
        
      </div>
    </header>
  );
};
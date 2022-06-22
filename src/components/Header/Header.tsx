
import './Header.scss';

type Props = {};

export function Header(props: Props) {
  return (
    <header className="header">
      <div className={'row'}>
        <img src="/images/logo.png" alt="logo" />
        <p className={'logo-title'}>Singularity <br></br> camp</p>
      </div>

      <div className={'links'}>
        <a className="link" >О программе</a>
        <a className="link" >Команда</a>
        <a className="link" >Требования</a>
        <a className="link" >Контакты</a>
        
      </div>
    </header>
  );
};
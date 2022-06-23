
import { Link } from 'react-router-dom';
import { StringLiteralLike } from 'typescript';
import './ProfileHeader.scss';

type Props = {
  path: string;
};

export function ProfileHeader(props: Props) {
  const {path} = props;
  return (
    <header className="header-profile">
     <Link to={"/"}><div className={'row'}>
        <img src="/images/logo.png" alt="logo" />
        <p className={'logo-title'}>Singularity <br></br> camp</p>
      </div> </Link> 

      <div className={'profile-header-navs'}>
        <Link to={"/"}><div className="link" style={{fontWeight: 700}} >Main page</div></Link>
        <Link to='/'><div className="link" style={{fontWeight: 700}} >Log out</div></Link>
        <Link to='/profile'><div className="link" ><img className="avatar" src={path} alt="avatar" /></div></Link>
      </div>
    </header>
  );
};
import {Link, useNavigate} from 'react-router-dom';
import {StringLiteralLike} from 'typescript';
import './ProfileHeader.scss';
import {User} from '../../api/users';
import {Authentication} from '../../api/authentication';

type Props = {
  path: string;
};

export function ProfileHeader(props: Props) {
  const {path} = props;
  const navigate = useNavigate();
  const authentication = new Authentication();
  const logout = () => {
    authentication.logout();
    navigate('/login');
  };
  return (
    <header className="header-profile">
      <Link to={'/'}>
        <div className={'row'}>
          <img src="/images/logo.png" alt="logo" />
          <p className={'logo-title'}>Singularity <br></br> camp</p>
        </div>
      </Link>

      <div className={'profile-header-navs'}>

       <Link to="/"> <div className="link" style={{fontWeight: 700}} >Main page</div></Link>
       <Link to="/"> <div onClick={()=>logout} className="link" style={{fontWeight: 700}} >Log out</div> </Link>
       <Link to="/"> <div className="link" ><img className="avatar" src={path} alt="avatar" /></div> </Link>
      </div>
    </header>
  );
};
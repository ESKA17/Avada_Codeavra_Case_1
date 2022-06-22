
import './ProfileHeader.scss';

type Props = {};

export function ProfileHeader(props: Props) {
  return (
    <header className="header-profile">
      <div className={'row'}>
        <img src="/images/logo.png" alt="logo" />
        <p className={'logo-title'}>Singularity <br></br> camp</p>
      </div>

      <div className={'profile-header-navs'}>
        <div className="link" style={{fontWeight: 700}} >Main page</div>
        <div className="link" >Log out</div>
        <div className="link" ><img className="avatar" src="/images/avatar.png" alt="logo" /></div>

        
      </div>
    </header>
  );
};
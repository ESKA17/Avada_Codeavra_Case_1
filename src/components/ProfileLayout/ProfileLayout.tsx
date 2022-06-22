import './ProfileLayout.scss';
import {Outlet} from 'react-router-dom';
import UserSideBar from '../UserSideBar';
import Header from '../Header';

type Props = {};

export function ProfileLayout(props: Props) {
  return (
    <div className={'profile-layout'}>
      <Header/>
      <Outlet />
      <UserSideBar />
    </div>
  );
};
import {Outlet} from 'react-router-dom';
import ProfileHeader from '../ProfileHeader';
import {DataTable} from '../StudentTable/StudentTable';
import './AdminLayout.scss';


type Props = {};

export function AdminLayout(props: Props) {
  return (
    <div className="admin-layout">
      <ProfileHeader path="/images/admin.png"/>
      <DataTable />
    </div>
  );
}
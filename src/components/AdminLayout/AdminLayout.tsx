import {Outlet} from 'react-router-dom';
import Header from '../Header';
import './AdminLayout.scss';

type Props = {};

export function AdminLayout(props: Props) {
  return (
    <div className="admin-layout">
      <Header />
      <Outlet />
    </div>
  );
}
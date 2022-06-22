import {Outlet} from 'react-router-dom';
import './Layout.scss';
import Header from '../Header';

type Props = {};

export function Layout(props: Props) {
  return (
    <div className={'layout'}>
      <div className={'container'}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
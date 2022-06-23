import { getListSubheaderUtilityClass } from '@mui/material';
import { getSuggestedQuery } from '@testing-library/react';
import { useEffect } from 'react';
import {Outlet} from 'react-router-dom';
import ProfileHeader from '../ProfileHeader';
import {DataTable} from '../StudentTable/StudentTable';
import './AdminLayout.scss';


type Props = {};

async function getUsers() {
  const url = `http://localhost:8087/users`;
  const result = await fetch(url);
  
  return result.json();
}


export function AdminLayout(props: Props) {

  useEffect(() => {
    const data = getUsers();
    console.log(data);

  }, [])
  return (
    <div className="admin-layout">
      <ProfileHeader path="/images/admin.png"/>

        <div className='table-container'>
      <DataTable />
      </div>
    </div>
  );
}
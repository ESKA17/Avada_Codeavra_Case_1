// @flow
import * as React from 'react';
import {Outlet} from 'react-router-dom';

type Props = {};

export function Layout(props: Props) {
  return (
    <div>
      <Outlet/>
    </div>
  );
};
import {ReactNode} from 'react';
import './Button.scss';

type Props = {
  children: ReactNode,
  onClick: (e: unknown) => void
};

export function Button({onClick, children}: Props) {
  return (
    <button className={'button'} onClick={onClick}>
      {children}
    </button>
  );
};
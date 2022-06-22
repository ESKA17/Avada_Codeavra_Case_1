import {ReactNode} from 'react';

type Props = {
  children: ReactNode,
  onClick: (e: unknown) => void
};

export function Button({onClick, children}: Props) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};
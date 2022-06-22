import {ReactChild} from 'react';
import './InputWrapper.scss';

type Props = {
  id: string,
  title: string,
  children: ReactChild,
};

export function InputWrapper({id, title, children}: Props) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{title}</label>
      {children}
    </div>
  );
}
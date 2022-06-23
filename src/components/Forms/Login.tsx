import {SubmitHandler, useForm} from 'react-hook-form';
import {LoginInputs} from '../../api/authentication/authTypes';
import {InputWrapper} from '../InputWrapper/InputWrapper';
import {Authentication} from '../../api/authentication';
import Button from '../Button';
import {User} from '../../api/users';
import './Form.scss';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';


type Props = {};

export function Login(props: Props) {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = data => submit(data);
  const navigate = useNavigate();
  const location = useLocation();

  function submit(data: LoginInputs) {
    const authentication = new Authentication();
    authentication.login(data).then((res) => {
      if(data.email==="admin"){
        navigate('/admin');
      }
      else{
        navigate('/profile');
      }
    });
  }

  useEffect(() => {
    const token = sessionStorage.getItem('access_token');
    if (token) {
      navigate('/profile');
    }
  }, [location]);
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className={'mb-20'} style={{color: '#000'}}>Login User</h1>
        <InputWrapper id="email" title="Email">
          <>
            <input id="email" {...register('email', {
              required: true,
              // pattern: REGS.email,
              maxLength: 30,
            })} />
            {errors.email && <span>This email is required</span>}
          </>
        </InputWrapper>
        <InputWrapper id="password" title="Password">
          <>
            <input id="password" {...register('password', {
              required: true,
              // pattern: REGS.password,
              maxLength: 30,
            })} />
            {errors.password && <span>This password is required</span>}
          </>
        </InputWrapper>
        <Link to={'/register'}>Not Registered?</Link>
        <input className={'btn'} type="submit" />
      </form>
    </>

  );
};
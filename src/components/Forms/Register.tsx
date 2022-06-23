import {InputWrapper} from '../InputWrapper/InputWrapper';
import {REGS} from '../../utils/regex';
import {useForm, SubmitHandler} from 'react-hook-form';
import {RegistrationInputs} from '../../api/authentication/authTypes';
import {Authentication} from '../../api/authentication';
import './Form.scss';
import {Link, useNavigate} from 'react-router-dom';

type Props = {};

export function Register(props: Props) {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<RegistrationInputs>();
  const onSubmit: SubmitHandler<RegistrationInputs> = data => submit(data);
  const navigate = useNavigate()

  function submit(data: RegistrationInputs) {
    const authentication = new Authentication();
    authentication.register(data).then((res) => navigate('/login'));
  }

  // function redirect()

  return (
    <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={'mb-20'} style={{color: '#000'}}> Register</h1>
      <InputWrapper id="email" title="Email">
        <>
          <input id="email" defaultValue="test" {...register('email', {
            required: true,
            pattern: REGS.email,
            maxLength: 30,
          })} />
          {errors.email && <span>This email is required</span>}
        </>
      </InputWrapper>

      <InputWrapper id="password" title="Password">
        <>
          <input id="password" {...register('password', {
            required: true,
            pattern: REGS.password,
            maxLength: 30,
          })} />
          {errors.password && <span>This password is required</span>}
        </>
      </InputWrapper>

      <InputWrapper id="passwordConfirm" title="Password Confirm">
        <>
          <input id="passwordConfirm" {...register('passwordConfirm', {
            required: true,
            pattern: REGS.password,
            maxLength: 30,
          })} />
          {errors.passwordConfirm && <span>This passwordConfirm is required</span>}
        </>
      </InputWrapper>

      <Link to={'/login'}>Already Signed?</Link>
      <input className={'btn'} type="submit" />
    </form>
  );
};
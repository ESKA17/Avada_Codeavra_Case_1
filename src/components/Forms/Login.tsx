import {SubmitHandler, useForm} from 'react-hook-form';
import {LoginInputs} from '../../api/authentication/authTypes';
import {InputWrapper} from '../InputWrapper/InputWrapper';
import {REGS} from '../../utils/regex';
import {Authentication} from '../../api/authentication';
import Button from '../Button';
import {User} from '../../api/users';

type Props = {};

export function Login(props: Props) {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = data => submit(data);

  function submit(data: LoginInputs) {
    const authentication = new Authentication();
    authentication.login(data).then((res) => console.log(res));
  }

  const sendCookie = () => {
    const user = new User()
    user.getUsers()
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className={'mb-20'}>Login User</h1>
        <InputWrapper id="email" title="Email">
          <>
            <input id="email" {...register('email', {
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
        <input className={'btn'} type="submit" />
      </form>
      <Button onClick={sendCookie}>Send Cookie</Button>
    </>

  );
};
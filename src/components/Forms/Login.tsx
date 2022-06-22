import {SubmitHandler, useForm} from 'react-hook-form';
import {LoginInputs, RegistrationInputs} from '../../api/authentication/authTypes';
import {InputWrapper} from '../InputWrapper/InputWrapper';
import {REGS} from '../../utils/regex';
import {Authentication} from '../../api/authentication';

type Props = {};

export function Login(props: Props) {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginInputs>();
  const onSubmit: SubmitHandler<LoginInputs> = data => submit(data);

  function submit(data: LoginInputs) {
    const authentication = new Authentication();
    authentication.login(data).then((res) => console.log(res));
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper id="email" title="Email">
          <>
            <input defaultValue="test" {...register('email', {required: true, pattern: REGS.email, maxLength: 30})} />
            {errors.email && <span>This email is required</span>}
          </>
        </InputWrapper>
        <InputWrapper id="password" title="Password">
          <>
            <input {...register('password', {required: true, pattern: REGS.password, maxLength: 30})} />
            {errors.password && <span>This password is required</span>}
          </>
        </InputWrapper>
        <input type="submit" />
      </form>
    </div>
  );
};
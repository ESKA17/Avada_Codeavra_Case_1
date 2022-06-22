import {InputWrapper} from '../InputWrapper/InputWrapper';
import {REGS} from '../../utils/regex';
import {useForm, SubmitHandler} from 'react-hook-form';
import {RegistrationInputs} from '../../api/authentication/authTypes';
import {Authentication} from '../../api/authentication';

type Props = {};

export function Register(props: Props) {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<RegistrationInputs>();
  const onSubmit: SubmitHandler<RegistrationInputs> = data => submit(data);

  function submit(data: RegistrationInputs) {
    const authentication = new Authentication();
    authentication.register(data).then((res) => console.log(res));
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

        <InputWrapper id="passwordConfirm" title="Password Confirm">
          <>
            <input {...register('passwordConfirm', {required: true, pattern: REGS.password, maxLength: 30})} />
            {errors.passwordConfirm && <span>This passwordConfirm is required</span>}
          </>
        </InputWrapper>
        <input type="submit" />
      </form>
    </div>
  );
};
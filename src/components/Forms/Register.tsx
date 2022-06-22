import {InputWrapper} from '../InputWrapper/InputWrapper';

type Props = {};

export function Register(props: Props) {
  const handleSubmit = () => {
    console.log('submit');
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <InputWrapper id="email" title="Email">
          <input name="name" type="text" value={'test val'} />
        </InputWrapper>
        <InputWrapper id="password" title="Password">
          <input name="password" type="password" value={'test val'} />
        </InputWrapper>
        <InputWrapper id="password-confirm" title="Confirm password">
          <input name="password-confirm" type="password" value={'test val'} />
        </InputWrapper>
      </form>
    </div>
  );
};
import {InputWrapper} from '../InputWrapper/InputWrapper';
import {REGS} from '../../utils/regex';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';
import {ApplyInputs, TRACKS} from '../../api/authentication/authTypes';
import {Authentication} from '../../api/authentication';
import './Form.scss';

type Props = {};

export function Apply(props: Props) {
  const {register, handleSubmit, control, formState: {errors}} = useForm<ApplyInputs>();
  const onSubmit: SubmitHandler<ApplyInputs> = data => submit(data);

  function submit(data: ApplyInputs) {
    console.log(data);
    const authentication = new Authentication();
    authentication.apply({...data, isDiploma: data.isDiploma ? 1 : 0});
    authentication.uploadCv(data.cv[0]);
  }

  return (
    <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={'mb-20'}>Application Form</h1>
      <InputWrapper id="email" title="First Name">
        <>
          <input id="email" defaultValue="test" {...register('firstName', {
            required: true,
            pattern: REGS.firstName,
            maxLength: 30,
          })} />
          {errors.firstName && <span>This firstName is required</span>}
        </>
      </InputWrapper>

      <InputWrapper id="password" title="Middle Name">
        <>
          <input id="password" {...register('middleName', {
            required: true,
            pattern: REGS.middleName,
            maxLength: 30,
          })} />
          {errors.middleName && <span>This middleName is required</span>}
        </>
      </InputWrapper>

      <InputWrapper id="passwordConfirm" title="Last Name">
        <>
          <input id="passwordConfirm" {...register('lastName', {
            required: true,
            pattern: REGS.lastName,
            maxLength: 30,
          })} />
          {errors.lastName && <span>This lastName is required</span>}
        </>
      </InputWrapper>
      <InputWrapper id="age" title="Your Age">
        <>
          <input type="number" id="age" {...register('age', {
            required: true,
          })} />
          {errors.age && <span>This lastName is required</span>}
        </>
      </InputWrapper>
      <InputWrapper id="track" title="Choose your track">
        <select {...register('track')}>
          <option value={TRACKS.FRONTEND}>FRONTEND</option>
          <option value={TRACKS.BACKEND}>BACKEND</option>
          <option value={TRACKS.IOS}>IOS</option>
          <option value={TRACKS.ANDROID}>ANDROID</option>
          <option value={TRACKS.DEVOPS}>DEVOPS</option>
        </select>
      </InputWrapper>
      <InputWrapper id="cv" title="Upload CV">
        <>
          <input type="file" id="cv" {...register('cv', {
            required: true,
          })} />
          {errors.cv && <span>This cv is required</span>}
        </>
      </InputWrapper>

      <input type="checkbox" {...register('isDiploma', {required: true})} />
      {errors.isDiploma && <span>This cv is required</span>}
      <input className={'btn'} type="submit" />
    </form>
  );
};
import {InputWrapper} from '../InputWrapper/InputWrapper';
import {REGS} from '../../utils/regex';
import {useForm, SubmitHandler} from 'react-hook-form';
import {ApplyInputs, TRACKS} from '../../api/authentication/authTypes';
import {Authentication} from '../../api/authentication';
import './Form.scss';

type Props = {};

export function Apply(props: Props) {
  const {register, handleSubmit, watch, formState: {errors}} = useForm<ApplyInputs>();
  const onSubmit: SubmitHandler<ApplyInputs> = data => submit(data);

  function submit(data: ApplyInputs) {
    const authentication = new Authentication();
    authentication.apply(data).then((res) => console.log(res));
    authentication.uploadCv(data.cv).then((res) => console.log(res));
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
          <input type="number" id="passwordConfirm" {...register('age', {
            required: true,
            max: 2,
            min: 2,
          })} />
          {errors.age && <span>This lastName is required</span>}
        </>
      </InputWrapper>
      {/*<InputWrapper id="track" title="Choose your track">*/}
      {/*  <>*/}
      {/*    <input id="track" {...register('track', {*/}
      {/*      required: true,*/}
      {/*    })} />*/}
      {/*    {errors.track && <span>This track is required</span>}*/}
      {/*  </>*/}
      {/*</InputWrapper>*/}
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
          <input type="file" id="passwordConfirm" {...register('cv', {
            required: true,
          })} />
          {errors.cv && <span>This cv is required</span>}
        </>
      </InputWrapper>
      <input className={'btn'} type="submit" />
    </form>
  );
};
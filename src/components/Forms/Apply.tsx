import {InputWrapper} from '../InputWrapper/InputWrapper';
import {REGS} from '../../utils/regex';
import {useForm, SubmitHandler} from 'react-hook-form';
import {ApplyInputs, TRACKS} from '../../api/authentication/authTypes';
import {Authentication} from '../../api/authentication';
import './Form.scss';

type Props = {};

export function Apply(props: Props) {
  const {register, handleSubmit, control, formState: {errors}} = useForm<ApplyInputs>();
  const onSubmit: SubmitHandler<ApplyInputs> = data => submit(data);
  const authentication = new Authentication();

  async function submit(data: ApplyInputs) {
    await authentication.sendScreeningData(data);
    uploadFormData(data.cv[0]);
  }

  function uploadFormData(file) {
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    authentication.uploadCv(formData);
  }

  return (
    <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={'mb-20'}>Application Form</h1>
      <InputWrapper id="email" title="First Name">
        <>
          <input id="email" defaultValue="test" {...register('name', {
            required: true,
            pattern: REGS.firstName,
            maxLength: 30,
          })} />
          {errors.name && <span>This firstName is required</span>}
        </>
      </InputWrapper>

      <InputWrapper id="password" title="Middle Name">
        <>
          <input id="password" {...register('fatherName', {
            required: true,
            pattern: REGS.middleName,
            maxLength: 30,
          })} />
          {errors.fatherName && <span>This middleName is required</span>}
        </>
      </InputWrapper>

      <InputWrapper id="passwordConfirm" title="Last Name">
        <>
          <input id="passwordConfirm" {...register('surname', {
            required: true,
            pattern: REGS.lastName,
            maxLength: 30,
          })} />
          {errors.surname && <span>This lastName is required</span>}
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
        <select {...register('studyDegree')}>
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
            // required: true,
          })} />
          {errors.cv && <span>This cv is required</span>}
        </>
      </InputWrapper>

      <input className={'btn'} type="submit" />
    </form>
  );
};
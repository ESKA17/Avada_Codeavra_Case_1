import './Home.scss';
import Button from '../../components/Button';
import {useNavigate} from 'react-router-dom';

type Props = {};

export function Home(props: Props) {
  const navigate = useNavigate()
  return (
    <div className={'home'}>
      <div className={'info-block'}>
        <h1>Школа программирования
          со стипендией и
          100% трудоустройством</h1>
        <p>Обучись бесплатно программированию
          и стань сотрудником в группе компаний JUSAN</p>
        <Button onClick={()=>navigate('/register')}>Записаться</Button>
      </div>
      <div className="img-block">
        <div className="img-wrapper">
          <img src="/images/avatar.jpeg" alt="images" />
        </div>
      </div>



    </div>
  );
};
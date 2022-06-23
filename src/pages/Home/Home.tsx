import './Home.scss';
import {Link} from 'react-router-dom';

type Props = {};

export function Home(props: Props) {
  return (
    <div className={'home'}>
      <div className={'info-block'}>
        <div className="main-title">Школа программирования
          со стипендией и
          100% трудоустройством
        </div>
        <div className="main-subtitle">Обучись бесплатно программированию
          и стань сотрудником в группе компаний JUSAN
        </div>
        <Link to={'/register'}>
          <button>Записаться</button>
        </Link>

      </div>
      <div className="img-block">
        <div className="img-wrapper">
          {/* <img src="/images/avatar.jpeg" alt="" /> */}
        </div>
      </div>


    </div>
  );
};
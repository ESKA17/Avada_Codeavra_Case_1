import './Home.scss';

type Props = {};

export function Home(props: Props) {
  return (
    <div className={'home'}>
      <div className={'info-block'}>
        <div className='main-title'>Школа программирования
          со стипендией и
          100% трудоустройством</div>
        <div className='main-subtitle'>Обучись бесплатно программированию
          и стань сотрудником в группе компаний JUSAN</div>
          <button>Записаться</button>
      </div>
      <div className="img-block">
        <div className="img-wrapper">
        </div>
      </div>



    </div>
  );
};
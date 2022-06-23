import './ProfileLayout.scss';
import ProfileLHeader from '../ProfileHeader';
import {useEffect, useState} from 'react';
import {Authentication} from '../../api/authentication';
import {User} from '../../api/users';
import Button from '../Button';
import {useLocation, useNavigate} from 'react-router-dom';

type Props = {};

export function ProfileLayout(props: Props) {
  const [user, setUser] = useState({
    name: 'Foo',
    surname: 'Bar',
    email: 'foo.bar@gmail.com',
    phone: '+7 xxx-xxx-xx-xx',
    track: 'FooBar',
    age: '00',
    status: 0,
  });
  const navigate = useNavigate();
  const screening = new Authentication();
  const userData = new User();
  const location = useLocation();

  // async function getStepikInfo() {
  //   const request = new Requests();
  //   const res = await fetch('https://stepik.org/api/course-grades?course=109158&user=467885153')
  //     .then(res => res.json());
  //   console.log('stepik', res);
  // }

  async function getUserInfo() {
    const data = await userData.getUsers();
  }


  async function getUserStatus() {
    const status = await userData.getStatus();
    userData.changeStatus(2);
  }

  async function getUserCv() {
    const screeningData = await screening.getScreeningData();
    setUser((state)=>({...state, screeningData}));
    console.log(screeningData)
  }

  function getStatusText(){
    switch (user.status){
      case 0: {
        return 'Uploading CV'
      }
      case 1: {
        return 'Passing Stepik'
      }
      case 2: {
        return 'Passing Easy Hire'
      }
      case 3: {
        return 'Passing Interview'
      }
    }
  }

  useEffect(() => {
    getUserInfo();
    getUserCv();
    getUserStatus();
  }, []);

  useEffect(() => {
    const token = sessionStorage.getItem('access_token');
    if (!token) {
      navigate('/login');
    }
  }, [location]);

  return (
    <div className={'profile-layout'}>
      <ProfileLHeader path="/images/man.png" />
      <div className="profile-container">
        <div className="student-progress">
          <div>Этапы отбора на Jusan Singularity</div>
          <div className="progress-subheading">Текущий статус кандидата: <span
            style={{color: '#E69AA1', fontWeight: 600}}>{user.name} {user.surname}</span></div>

          <div className="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-dots">
              <div className={`dot-sz ${user.status === 0 ? 'active' : ''}`}>
                <div className="dot"><img src="/images/doc.png" alt="logo" /></div>
                CV Screening
              </div>
              <div className="dot-sz">
                <div className={`dot ${user.status === 1 ? 'active' : ''}`}><img src="/images/stepik.png" alt="logo" />
                </div>
                Java programming intensive on Stepik platform
              </div>
              <div className="dot-sz">
                <div className={`dot ${user.status === 2 ? 'active' : ''}`}><img src="/images/easyhire.png"
                                                                                 alt="logo" /></div>
                Auto interview (both coding and behavioral questions) on EasyHire platform
              </div>
              <div className="dot-sz">
                <div className={`dot ${user.status === 3 ? 'active' : ''}`}><img src="/images/zoom.png" alt="logo" />
                </div>
                Zoom interview with bank representatives
              </div>
              <div className="dot-last"><img src="/images/yay.png" alt="logo" /></div>
            </div>
          </div>

          <div>
            <Button onClick={() => navigate('/apply')}>Finish The Application Form</Button>
          </div>

        </div>
        <div className="student-info">
          <div className="student-info-header">
          </div>
          <div className="student-avatar">
            <img className="avatar-img" src="/images/man.png" alt="avatar" />
          </div>
          <div className="student-data">
            <div className="user-name">{user.name} {user.surname}</div>
            <div>E-mail: <span>{user.email}</span></div>
            <div>Phone: <span>{user.phone}</span></div>
            <div>Track: <span>{user.track}</span></div>
            <div>Age: <span>{user.age}</span></div>
            <div>Status: <span>{getStatusText()}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
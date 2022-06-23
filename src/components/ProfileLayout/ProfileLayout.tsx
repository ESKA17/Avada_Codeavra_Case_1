import './ProfileLayout.scss';
import ProfileLHeader from '../ProfileHeader';
import {useEffect, useState} from 'react';
import {Authentication} from '../../api/authentication';
import {User} from '../../api/users';
import {Requests} from '../../api/service';
import Button from '../Button';
import {useLocation, useNavigate} from 'react-router-dom';


type Props = {};

// const user = {
//   name: 'Aizada',
//   surname: 'Turarova',
//   email: 'aizada.turarova@gmail.com',
//   phone: '+7776-118-04-18',
//   track: 'Front-end',
//   age: '23',
//   status: 'Active applicant',
// };

export function ProfileLayout(props: Props) {
  const [isApply, setIsApply] = useState(false);
  const [user, setUser] = useState({
    name: 'Aizada',
    surname: 'Turarova',
    email: 'aizada.turarova@gmail.com',
    phone: '+7776-118-04-18',
    track: 'Front-end',
    age: '23',
    status: 'Active applicant',
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
    setUser(screeningData);
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
      <ProfileLHeader path="/images/avatar.png" />
      <div className="profile-container">
        <div className="student-progress">
          <div>Этапы отбора на Jusan Singularity</div>
          <div className="progress-subheading">Текущий статус кандидата: <span
            style={{color: '#E69AA1', fontWeight: 600}}>{user.name} {user.surname}</span></div>

          <div className="timeline">
            <div className="timeline-line"></div>
            <div className="timeline-dots">
              <div className="dot-sz" onClick={() => setIsApply((state) => !state)}>
                <div className="dot"><img src="/images/doc.png" alt="logo" /></div>
                CV Screening
              </div>
              <div className="dot-sz">
                <div className="dot"><img src="/images/stepik.png" alt="logo" /></div>
                Java programming intensive on Stepik platform
              </div>
              <div className="dot-sz">
                <div className="dot"><img src="/images/easyhire.png" alt="logo" /></div>
                Auto interview (both coding and behavioral questions) on EasyHire platform
              </div>
              <div className="dot-sz">
                <div className="dot"><img src="/images/zoom.png" alt="logo" /></div>
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
            <img className="avatar-img" src="/images/photo.jpg" alt="avatar" />
          </div>
          <div className="student-data">
            <div className="user-name">{user.name} {user.surname}</div>
            <div>E-mail: <span>{user.email}</span></div>
            <div>Phone: <span>+7776-118-04-18</span></div>
            <div>Track: <span>FrontEnd</span></div>
            <div>Age: <span>{user.age}</span></div>
            <div>Status: <span>{user.status}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
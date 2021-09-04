import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/sass/main.css';
import { useSelector } from 'react-redux';
import { checkValidity, selectUser } from '../auth/userSlice';
import MobileTab from './MobileTab';
import MenuModal from './MenuModal';
import Mobilelogo from '../../styles/images/mobile-logo.svg';
import MobileMenulogo from '../../styles/images/mobile-menu-logo.svg';

const Mobile = () => {
  const validity = useSelector(checkValidity);
  const user = useSelector(selectUser);
  const [bottomMenuBox, setBottomMenuBox] = useState([]);
  const [modalState, setModalState] = useState(false);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  const tabBarItems = [
    { link: '/', title: '홈' },
    { link: '/Investment', title: '투자' },
    { link: '/Prediction', title: '예측' },
    { link: '/Ranking', title: '랭킹' },
  ];

  useEffect(() => {
    if (validity) {
      setBottomMenuBox([
        { link: '', title: user.nickname },
        { link: '/Asset', title: '내 자산' },
        { link: '/Profile', title: '내 정보' },
      ]);
    } else setBottomMenuBox([{ link: '/login', title: '로그인' }]);
  }, [validity]);

  // const bottomMenuList = bottomMenuBox.map((menu, idx) => {
  //   if (menu.title != '내 자산' && menu.title != '내 정보' && menu.title != '로그인') {
  //     return (
  //       <li key={idx} className="user-profile">
  //         <div className="profile-img-box">
  //           <img src={profile_img} className="profile" />
  //         </div>
  //         <span className="user-name">{menu.title}</span>
  //         <span className="user-ment">님, 반가워요!</span>
  //       </li>
  //     );
  //   }
  //   return (
  //     <li key={idx}>
  //       <NavLink to={menu.link} activeClassName="active">
  //         {menu.title}
  //       </NavLink>
  //     </li>
  //   );
  // });

  return (
    <div className="mobile">
      <div className="mobile-menu-bar">
        <div className="mobile-top-menu">
          <img src={Mobilelogo}></img>
          <img id="menu-logo" src={MobileMenulogo} onClick={openModal}></img>
        </div>
        <MobileTab list={tabBarItems} />
      </div>
      <MenuModal modalState={modalState} closeModal={closeModal} />
    </div>
  );
};

export default Mobile;

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/sass/main.css';
import { useSelector } from 'react-redux';
import { checkValidity, selectUser } from '../auth/userSlice';
import MobileTab from './MobileTab';
import MenuModal from './MenuModal';
import Mobilelogo from '../../styles/images/mobile-logo.svg';
import MobileMenulogo from '../../styles/images/mobile-menu-logo.svg';
import profile_img from '../../styles/images/profile_img.png';

const publicItems = [
  { link: '/', title: '홈' },
  { link: '/Investment', title: '투자' },
  { link: '/Prediction', title: '예측' },
  { link: '/Ranking', title: '랭킹' },
];
const privateItmes = [
  { link: '/Asset', title: '내 자산' },
  { link: '/Profile', title: '내 정보' },
];

const Mobile = () => {
  const validity = useSelector(checkValidity);
  const user = useSelector(selectUser);
  const [tabBarItem, setTabBarItem] = useState([]);
  const [modalState, setModalState] = useState(false);
  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  useEffect(() => {
    setTabBarItem(publicItems);
  }, []);

  useEffect(() => {
    if (validity) setTabBarItem([...publicItems, ...privateItmes]);
  }, [validity]);

  return (
    <div className="mobile">
      <div className="mobile-menu-bar">
        <div className="mobile-top-menu">
          <img src={Mobilelogo}></img>
          {validity ? (
            <div className="profile-img-box">
              <img className="profile" src={profile_img} />
            </div>
          ) : (
            <img id="menu-logo" src={MobileMenulogo} onClick={openModal} />
          )}
        </div>
        <MobileTab list={tabBarItem} />
      </div>
      <MenuModal modalState={modalState} closeModal={closeModal} />
    </div>
  );
};

export default Mobile;

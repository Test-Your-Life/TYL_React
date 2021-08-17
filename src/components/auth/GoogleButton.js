// GoogleButton.js
import React from 'react';
import GoogleLogin from 'react-google-login';
import dotenv from 'dotenv';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { login } from './userSlice';
dotenv.config();

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_KEY;
axios.defaults.baseURL = process.env.REACT_APP_HOST;

export default function googleButton() {
  const dispatch = useDispatch();

  const handleLogin = async data => {
    const {
      profileObj: { email, name },
    } = data;
    const body = JSON.stringify({
      email: email,
      name: name,
    });
    const headers = {
      'Content-Type': 'application/json',
    };

    axios
      .post('/login', body, { headers })
      .then(response => {
        console.log(response.data);
        const hasSignedUp = true;
        const userData = {
          nickname: '틸틸',
          email: 'ptsaturn68@daum.net',
          profileImage: '/src/img/temp.png',
        };

        if (!hasSignedUp) {
          // 회원가입 로직
        } else {
          // 로그인 로직
          dispatch(login(userData));
          window.sessionStorage.setItem('isLogin', 'Y');
          window.location.href = '/';
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onFailure = error => {
    console.log(error);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        responseType={'id_token'}
        onSuccess={handleLogin}
        onFailure={onFailure}
        buttonText="구글로 로그인하기"
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

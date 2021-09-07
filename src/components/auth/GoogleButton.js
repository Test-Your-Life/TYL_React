import React from 'react';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import dotenv from 'dotenv';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from './userSlice';
import { onLoginSuccess, onSilentRefresh } from './auth';
dotenv.config();

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_KEY;
axios.defaults.baseURL = process.env.REACT_APP_HOST;

export default function googleButton(props) {
  const { closeModal } = props;
  let history = useHistory();
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
      .post('api/auth/login', body, { headers })
      .then(onLoginSuccess)
      .then(user => {
        dispatch(login(user));
        history.push('/');
        if (closeModal) closeModal();
      })
      .catch(onFailure);
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
        // cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

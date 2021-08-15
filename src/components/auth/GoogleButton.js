// GoogleButton.js
import React from 'react';
import GoogleLogin from 'react-google-login';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_KEY;
axios.defaults.baseURL = 'http://192.168.45.48:80';
// axios.defaults.withCredentials = true;

export default function googleButton({ onSocial }) {
  const handleLogin = async data => {
    const {
      googleId,
      profileObj: { email, name },
    } = data;

    const body = JSON.stringify({ token: data.tokenId });
    const headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post('/login', body, { headers })
      .then(response => {
        // const { accessToken } = response.data;
        // console.log(accessToken);
        // axios.defaults.headers.common[
        //   'Authorization'
        // ] = `Bearer ${accessToken}`;
        console.log('123');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const onSuccess = async response => {
    const {
      googleId,
      profileObj: { email, name },
    } = response;

    console.log(`아이디값 : ${googleId} 이메일 : ${email} 이름 : ${name}`);
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
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

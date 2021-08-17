import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    profileImage: '',
    nickname: '',
    email: '',
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.nickname = action.nickname;
      state.email = action.email;
      state.profileImage = action.profileImage;
      state.isLogin = true;
    },
    logout: state => {
      state.profileImage = '';
      state.nickname = '';
      state.email = '';
      state.isLogin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const checkValidity = state => state.user.isLogin;
export default userSlice.reducer;

import React from 'react';
import LoginBox from '../components/LoginBox';
import { LoginBoxWrapper } from '../pagesStyles/login';

const LoginPage = () => {
  return (
    <LoginBoxWrapper>
      <LoginBox />
    </LoginBoxWrapper>
  );
};

LoginPage.isPublic = true;

export default LoginPage;

import styled from 'styled-components';

const LoginContainer = styled.div`
  background-color: red;
  width: 50vw;
`;
const LoginForm = styled.div`
  form {
    justify-content: center;
    background-color: blue;
    display: flex;
    flex-direction: column;
  }
`;
const LoginTitle = styled.h3`
  text-align: center;
  margin: 0;
  padding: 0;
`;

export { LoginContainer, LoginForm, LoginTitle };

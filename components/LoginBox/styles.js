import styled from 'styled-components';
import theme from '../../lib/theme';

const LoginForm = styled.div`
  form {
    justify-content: center;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    width: 400px;
    @media (max-width: 400px) {
      min-width: 320px;
      width: 300px;
    }
    @media (max-width: 350px) {
      min-width: 290px;
      width: 300px;
      width: 290px;
    }
  }
`;
const LoginTitle = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const cardStyles = {
  card: {
    backgroundColor: theme.white
  },
  loginButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  loginButton: {
    height: 50,
    fontSize: 16,
    marginTop: 10,
    width: 100
  },
  errorHint: {
    color: theme.errorHint,
    fontSize: 13
  }
};

export { LoginForm, LoginTitle, cardStyles };

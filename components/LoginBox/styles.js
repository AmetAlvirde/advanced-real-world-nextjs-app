import styled from 'styled-components';
import theme from '../../lib/theme';

const LoginForm = styled.div`
  form {
    justify-content: center;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    width: 400px;
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

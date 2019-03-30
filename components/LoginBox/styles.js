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
  text-align: center;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const cardStyles = {
  card: {
    backgroundColor: theme.white
  }
};

export { LoginForm, LoginTitle, cardStyles };

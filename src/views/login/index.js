import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { MainContainer, Container } from './styles';
import { TextInput } from '../../ui';
import { Button } from '../../ui';
import { saveToken } from '../../storage';
import { Api } from '../../api';

export const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const history = useHistory();

  const authenticate = async () => {
    const success = await axios
      .post(Api.login(), { email, password })
      .catch((err) => setError(err));

    if (success) {
      const { AccessToken, RefreshToken } = success.data;
      saveToken(AccessToken, RefreshToken);
      history.push('/');
    }
  };

  const isEmpty = (value) => value.length < 1;
  const isDisabled = isEmpty(email) || isEmpty(password) ? true : false;
  const ErrorMessage = () => <p>Username or password was incorrect.</p>;

  return (
    <MainContainer>
      <Container>
        <TextInput
          labelText="Email"
          onChangeEvent={(ev) => setEmail(ev.target.value)}
          type="email"
          value={email}
        />
        <TextInput
          labelText="Password"
          onChangeEvent={(ev) => setPassword(ev.target.value)}
          type="password"
          value={password}
        />
        <div id="forgot">
          <Link to="/forgot">Forgot Password?</Link>
        </div>

        <div>{error ? <ErrorMessage /> : ''}</div>

        <Button
          disabled={isDisabled}
          onClickEvent={() => authenticate()}
          width="150px"
        >
          Login
        </Button>
      </Container>
    </MainContainer>
  );
};

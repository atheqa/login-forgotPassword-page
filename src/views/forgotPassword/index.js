import React, { useState } from 'react';
import { MainContainer, Container, PasswordFormContainer } from './styles';
import { Button } from '../../ui';
import { TextInput } from '../../ui';
import axios from 'axios';
import { Api } from '../../api';

export const ForgotPasswordView = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [stage, setStage] = useState(1);

  console.log({ email, code, password, confirm });

  const checkEmail = async () => {
    const success = await axios
      .post(Api.forgot(), { email })
      .catch((err) => setError(err));

    if (success) {
      setStage(2);
    }
  };

  const payload = {
    email,
    confirmationCode: code,
    password,
  };

  console.log(Api.change());

  const saveNewPassword = async () => {
    const data = await axios
      .post(Api.change(), payload)
      .catch((err) => setError(err));

    if (data) {
      setStage(5);
    } else {
      setStage(4);
    }
  };

  const requestNewPassword = () => setStage(3);

  const isEmpty = (value) => value.length < 1;
  const ErrorMessage = () => <p>Process could not be completed.</p>;

  const isMatch = () => password === confirm;

  const isDisabled = (value) => isEmpty(value);

  const renderEmailForm = () => (
    <Container>
      <TextInput
        placeholder="Your email here"
        onChangeEvent={(ev) => setEmail(ev.target.value)}
        type="email"
        required
        value={email}
      />

      <div>{error ? <ErrorMessage /> : ''}</div>

      <Button
        disabled={isDisabled(email)}
        onClickEvent={() => checkEmail()}
        width="150px"
      >
        Send Reset Link
      </Button>
    </Container>
  );

  const renderCodeForm = () => (
    <Container>
      <TextInput
        placeholder="Confirmation code here"
        onChangeEvent={(ev) => setCode(ev.target.value)}
        type="text"
        required
        value={code}
      />

      <Button
        disabled={isDisabled(code)}
        onClickEvent={() => requestNewPassword()}
        width="150px"
      >
        Confirm Code
      </Button>
    </Container>
  );

  const renderRequestNewPassword = () => (
    <PasswordFormContainer>
      <TextInput
        placeholder="New password here"
        labelText="Password"
        onChangeEvent={(ev) => setPassword(ev.target.value)}
        type="password"
        value={password}
      />

      <TextInput
        placeholder="Confirm password"
        labelText="Password"
        onChangeEvent={(ev) => setConfirm(ev.target.value)}
        type="password"
        value={confirm}
      />

      <Button
        disabled={
          isDisabled(password) ||
          isDisabled(confirm) ||
          !isMatch(password, confirm)
        }
        onClickEvent={() => saveNewPassword()}
        width="150px"
      >
        Save Password
      </Button>
    </PasswordFormContainer>
  );

  const renderErrorMessage = () => (
    <Container>
      <div id="error">
        <p>Process could not be completed.</p>
      </div>
    </Container>
  );

  const renderSuccessMessage = () => (
    <Container>
      <div id="success">
        <p>Your password has been successfully changed.</p>
      </div>
    </Container>
  );

  const render = () => {
    if (stage === 1) {
      return renderEmailForm();
    }

    if (stage === 2) {
      return renderCodeForm();
    }

    if (stage === 3) {
      return renderRequestNewPassword();
    }

    if (stage === 4) {
      return renderErrorMessage();
    }

    if (stage === 5) {
      return renderSuccessMessage();
    }
  };

  return <MainContainer>{render()}</MainContainer>;
};

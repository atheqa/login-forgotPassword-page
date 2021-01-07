import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PasswordFormContainer = styled.div`
  width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.lGray};
  border: 1px solid ${(props) => props.theme.colors.dGray};
  border-radius: 3px;
  padding: 40px 0 20px 0;

  > button {
    margin-top: 10px;
  }
`;

export const Container = styled.div`
  width: 480px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.lGray};
  border: 1px solid ${(props) => props.theme.colors.dGray};
  border-radius: 3px;
  padding: 40px 0px 40px 0px;

  > button {
    margin-left: 5px;
  }
`;

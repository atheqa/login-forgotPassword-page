import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width};
`;

export const Label = styled.label`
  font-size: 1em;
  font-weight: 700;
  margin-top: 8px;
`;

export const Input = styled.input`
  font-size: 1.1em;
  border: 1px solid ${(props) => props.theme.colors.dGray};
  border-radius: 8px;
  padding: 8px 16px;
  background-color: #FFFFFF;
`;

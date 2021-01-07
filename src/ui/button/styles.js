import styled from 'styled-components';

export const BaseButton = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 6px;
  color: ${(props) => props.color};
  text-align: center;
  background-color: ${(props) => (props.disabled ? '#d4a1a1' : '#d74435')};
  border: 2px solid ${(props) => props.borderColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  :hover {
    /* color: #ed1212; */
    cursor: pointer;
    background-color: ${(props) => (props.disabled ? '#d4a1a1' : '#d94f3f')};
  }
  :focus {
    background-color: ${(props) => (props.disabled ? '#d4a1a1' : '#95291d')};
  }
`;

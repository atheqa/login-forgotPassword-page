import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Input, Label } from './styles';

export const TextInput = ({
  labelText,
  onChangeEvent,
  placeholder,
  type,
  value,
  width,
}) => (
  <InputContainer width={width}>
    {labelText.length < 1 ? null : <Label>{labelText}</Label>}
    <Input
      type={type}
      onChange={(ev) => onChangeEvent(ev)}
      placeholder={placeholder}
      value={value}
    />
  </InputContainer>
);

TextInput.propTypes = {
  labelText: PropTypes.string,
  onChangeEvent: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  width: PropTypes.string,
};

/* default values */

TextInput.defaultProps = {
  labelText: '',
  onChangeEvent: () => {},
  placeholder: '',
  type: 'text',
  value: '',
  width: '50%',
};

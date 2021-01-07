import React from 'react';
import PropTypes from 'prop-types';
import { BaseButton } from './styles';
import { theme } from '../../styles';

export const Button = ({
  backgroundColor,
  borderColor,
  children,
  color,
  disabled,
  height,
  onClickEvent,
  width,
}) => (
  <BaseButton
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    color={color}
    disabled={disabled}
    height={height}
    onClick={() => onClickEvent()}
    width={width}
  >
    {children}
  </BaseButton>
);

Button.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.string,
  onClickEvent: PropTypes.func,
  width: PropTypes.string,
};

Button.defaultProps = {
  backgroundColor: theme.colors.dGray,
  borderColor: theme.colors.gGreen,
  color: theme.colors.lGray,
  disabled: false,
  onClickEvent: () => {},
  width: '100%',
  height: '40px',
};

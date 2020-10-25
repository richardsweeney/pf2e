import React from 'react';
import classNames from 'classnames';

const Button = ({
  onClick,
  disabled = false,
  className = {},
  text = 'Submit',
  ...rest
}) => (
  <button
    className={classNames('font-semibold bg-blue-600 text-white py-2 px-4 rounded', className)}
    onClick={onClick}
    disabled={disabled}
    {...rest}
  >{text}
  </button>
);

export default Button;

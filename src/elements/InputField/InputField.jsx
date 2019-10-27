import React from 'react';

import classes from './InputField.module.css';
import assetMapping from '../../assets/assetMapping.json';

const inputField = ({
  name, label, type, placeholder, value, handleChange, error,
}) => (
  <div className={classes.InputFieldWrapper}>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      style={error ? { borderBottomColor: assetMapping.colors.error } : null}
      required
    />
  </div>
);

export default inputField;

import React from 'react';

import './style.scss';

const FieldInput = ({
  id = '',
  type = '',
  placeholder = '',
  options = [],
  required = false,
  onChange = f => f,
  inputVal = '',
  errorMsg = ''
}) => {

  // convert 'camelCase' to 'Camel Case'
  const dataLabel = id
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());

  const genInput = () => {
    switch (type) {
      case 'text':
        return (
          <input
            className={errorMsg ? 'has-error' : ''}
            type={type}
            value={inputVal}
            name={id}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            label={id}
          />);
      case 'select':
        return (
          <select id={id} value={inputVal} onChange={onChange}>
            <option value=''></option>
            {options.map((option, id) => (
              <option value={option} key={id}>{option}</option>
            ))}
          </select>
        );
      case 'textarea':
        return (
          <textarea
            name={id}
            id={id}
            onChange={onChange}
            value={inputVal}
          />
        );
      default:
        return '';
    }
  }

  return (
    <div className='input-info'>
      <label htmlFor={id}>{`${dataLabel}${required ? '*' : ''}`}</label>
      {genInput()}
      <label className='error-container'>{errorMsg}</label>
    </div>
  )
}

export default FieldInput;
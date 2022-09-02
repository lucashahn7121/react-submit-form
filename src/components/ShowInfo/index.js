import React from 'react';

import './style.scss';

const ShowInfo = ({ id = '', type = '', info = '' }) => {

  const dataLabel = id
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());

  return (
    <div className={`show-info-container ${type !== 'textarea' ? 'display-row' : ''}`}>
      <label className='normal-font'>{`${dataLabel}:`}</label>
      <label className={type === 'textarea' ? 'text-area' : ''}>&nbsp;&nbsp;{info}</label>
    </div>
  )
}

export default ShowInfo;
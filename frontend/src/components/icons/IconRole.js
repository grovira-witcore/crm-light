import React from 'react';
import BaseIcon from './BaseIcon.js';

const IconRole = function ({ size }) {
  return (
    <BaseIcon viewBox="0 0 30 30" size={size}>
      <circle cx="15" cy="25" r="2">
      </circle>
      <circle cx="24" cy="6" r="2">
      </circle>
      <circle cx="6" cy="6" r="2">
      </circle>
      <path d="M24.388,4.038C24.388,4.038,19.602,3,15,3S5.612,4.038,5.612,4.038L4,6v6c0,10.398,10.021,14.745,10.021,14.745h1.957  C15.979,26.745,26,22.398,26,12V6L24.388,4.038z M21.707,10.707l-7.56,7.56c-0.188,0.188-0.442,0.293-0.707,0.293  s-0.52-0.105-0.707-0.293l-3.453-3.453c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l2.746,2.746l6.853-6.853  c0.391-0.391,1.023-0.391,1.414,0S22.098,10.316,21.707,10.707z">
      </path>
    </BaseIcon>
  );
}

export default IconRole;

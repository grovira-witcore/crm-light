import React from 'react';
import BaseIcon from './BaseIcon.js';

const IconSize = function ({ size }) {
  return (
    <BaseIcon viewBox="0 0 32 32" size={size}>
      <g>
        <rect fill="none" height="32" width="32">
        </rect>
      </g>
      <g>
        <path d="M32,16l-6-6v4h-2V8h-6V6h4l-6-6l-6,6h4v2H8v6H6v-4l-6,6l6,6v-4h2v6h6v2h-4l6,6l6-6h-4v-2h6v-6h2v4L32,16z M22,22H10V10h12   V22z">
        </path>
      </g>
    </BaseIcon>
  );
}

export default IconSize;

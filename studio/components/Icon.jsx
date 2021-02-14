import React from 'react';

const Icon = ({ emoji }) =>
  typeof emoji === 'string' ? (
    <span style={{ fontSize: '1.5rem' }}>{emoji}</span>
  ) : (
    <span style={{ fontSize: '1.5rem' }}></span>
  );

export default Icon;

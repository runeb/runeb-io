import React from 'react';

const URLPreview = props => {
  return (
    <iframe
      style={{ width: '100%', height: '100%' }}
      frameBorder="0"
      src={props.url}
    />
  );
};

export default URLPreview;

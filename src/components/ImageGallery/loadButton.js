import React from 'react';
const LoadButton = ({ onClick }) => {
  return (
    <button
      type="button"
      className="Button"
      onClick={() => {
        onClick();
      }}
    >
      Load more
    </button>
  );
};

export default LoadButton;

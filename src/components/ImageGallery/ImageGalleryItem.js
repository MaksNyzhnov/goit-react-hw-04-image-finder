import React from 'react';
const ImageGalleryItem = ({ smallPicture, onClick, alt }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={smallPicture}
        alt={alt}
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;

import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ search, images, onImageClick }) => {
  return (
    <>
      <ul className="ImageGallery">
        {images.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              smallPicture={webformatURL}
              onClick={() => onImageClick(largeImageURL)}
              alt={search}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ImageGallery;

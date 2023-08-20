import { useState } from "react";
import { useEffect } from "react";

import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import getImagesBySearch from 'services/api';
import LoadButton from "components/ImageGallery/loadButton";
import Modal from 'components/Modal';
import { Grid } from 'react-loader-spinner';

const  App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [loader, setLoader] = useState(false)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      if (search === '') {
        setImages([]);
        return;
      }

      setLoader(true);

      const newResponse = await getImagesBySearch(search, page);
      const newImages = newResponse.hits;

      setImages(prevImages => [...prevImages, ...newImages]);
      setLoader(false);
    };

    fetchData();
  }, [search, page]);
  
  const onSearch = (searchText) => {
    if (searchText === search) {
      return
    }
    setSearch(searchText)
    setImages([])
    setPage(1)
  }

   useEffect(() => {
    const handleEscapeKey = e => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleLoadMore = () => {
    
    setPage(prevState => prevState + 1 )
  };

  const handleImageClick = largeImageURL => {
    setShowModal(true)
    setLargeImageURL(largeImageURL)
  };
    
  const closeModal = (e) => {
    if (e.target !== e.currentTarget) {
     return
    }
    setShowModal(false)
  };

  
    
  return (
    <>
        <Searchbar onSearch={onSearch} />
        {search && <ImageGallery search={search} images={images} onImageClick={handleImageClick} />}
        {loader && (
          <Grid
            height="80"
            width="80"
            color="#5c09e2"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
        {images.length !== 0 && images.length % 12 === 0 && (
          <LoadButton onClick={handleLoadMore} />
        )}
        <Modal
          isOpen={showModal}
          onClose={closeModal}
          image={largeImageURL}
        ></Modal>
        
    </>
  );
}

export default App;
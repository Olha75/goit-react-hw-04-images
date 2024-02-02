import React from 'react';
import css from './imageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, showModal }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL }) => (
    <ImageGalleryItem
      key={id}
      webformatURL={webformatURL}
      largeImageURL={largeImageURL}
      showModal={showModal}
    />

    // <li key={id} onClick={() => showModal({ id, webformatURL, largeImageURL })}>
    //   <img src={webformatURL} alt="" />
    //   <img src={largeImageURL} alt="" />
    // </li>
  ));

  return <ul className={css.gallery}>{elements}</ul>;
};

export default ImageGallery;

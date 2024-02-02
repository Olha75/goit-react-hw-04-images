import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, showModal }) => {
  return (
    <li
      className={css.imageGalleryItem}
      onClick={() => {
        showModal(largeImageURL);
      }}
    >
      <img className={css.imageGalleryItem_imager} src={webformatURL} alt="" />
    </li>
  );
};

export default ImageGalleryItem;
